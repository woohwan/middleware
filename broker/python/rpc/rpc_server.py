import ssl
import pika
import sys

# SSL Context for TLS configuration of Amazon MQ for RabbitMQ
ssl_context = ssl.SSLContext(ssl.PROTOCOL_TLSv1_2)
ssl_context.set_ciphers('ECDHE+AESGCM:!ECDSA')

url = f"amqps://whpark:abcd1234567890@b-157897e6-e325-484e-a15b-b05edf125aa6.mq.ap-northeast-2.amazonaws.com:5671"
parameters = pika.URLParameters(url)
parameters.ssl_options = pika.SSLOptions(context=ssl_context)

connection = pika.BlockingConnection(parameters)
channel = connection.channel()

channel.queue_declare(queue='rpc_queue')

def fib(n):
  if n == 0:
    return 0
  elif n == 1:
    return 1
  else:
    return fib(n-1) + fib(n-2)

def on_request(ch, method, props, body):
  n = int(body)

  print(f" [.] fib({n})")
  response = fib(n)

  ch.basic_publish(exchange='',
              routing_key=props.reply_to,
              properties=pika.BasicProperties(correlation_id = props.correlation_id),
              body=str(response))

  ch.basic_ack(delivery_tag=method.delivery_tag)

channel.basic_qos(prefetch_count=1)
channel.basic_consume(queue='rpc_queue', on_message_callback=on_request)

print(" [x] Awaiting RPC requests")
channel.start_consuming()