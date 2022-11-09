import ssl
import pika
import uuid
import sys

class FibonacciRpcClient(object):
  def __init__(self) -> None:
    # SSL Context for TLS configuration of Amazon MQ for RabbitMQ
    ssl_context = ssl.SSLContext(ssl.PROTOCOL_TLSv1_2)
    ssl_context.set_ciphers('ECDHE+AESGCM:!ECDSA')

    url = f"amqps://whpark:abcd1234567890@b-157897e6-e325-484e-a15b-b05edf125aa6.mq.ap-northeast-2.amazonaws.com:5671"
    parameters = pika.URLParameters(url)
    parameters.ssl_options = pika.SSLOptions(context=ssl_context)

    self.connection = pika.BlockingConnection(parameters)
    self.channel =self.connection.channel()

    # Create reply queue
    result = self.channel.queue_declare(queue='', exclusive=True)
    self.callback_queue = result.method.queue

    self.channel.basic_consume(
          queue = self.callback_queue,
          on_message_callback= self.on_response,
          auto_ack=True)
  
  def on_response(self, ch, method, props, body):
    if self.corr_id == props.correlation_id:
      self.response = body
  
  def call(self, n):
    self.response = None
    self.corr_id = str(uuid.uuid4())
    self.channel.basic_publish(
      exchange='',
      routing_key='rpc_queue',
      properties=pika.BasicProperties(
        reply_to=self.callback_queue,
        correlation_id=self.corr_id,
      ),
      body=str(n))

    self.connection.process_data_events(time_limit=None)
    return int(self.response)

fibonacci_rpc = FibonacciRpcClient()

num = ' '.join(sys.argv[1:]) or 30

print(f" [x] Requesting fib({num})")
response = fibonacci_rpc.call(num)
print(f" [.] Got {response}")
  