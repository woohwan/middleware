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

channel.exchange_declare(exchange='direct_logs', exchange_type='direct')

result = channel.queue_declare(queue='', exclusive=True)
queue_name = result.method.queue

severities = sys.argv[1:]
if not severities:
  sys.stderr.write(f"Usage: {sys.argv[0]} [info] [warning] [error]\n")
  sys.exit(1)

for severity in severities:
  channel.queue_bind(
    exchange='direct_logs', queue=queue_name, routing_key=severity)

print(' [*] Waiting for logs. to exit press CTRL+C')

def callback(ch, method, properties, body):
  print(f" [x] {method.routing_key}:{body}")

channel.basic_consume(
  queue=queue_name, on_message_callback=callback, auto_ack=True)

channel.start_consuming()