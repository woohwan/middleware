import pika
import sys
import ssl

# SSL Context for TLS configuration of Amazon MQ for RabbitMQ
ssl_context = ssl.SSLContext(ssl.PROTOCOL_TLSv1_2)
ssl_context.set_ciphers('ECDHE+AESGCM:!ECDSA')

url = f"amqps://whpark:abcd1234567890@b-157897e6-e325-484e-a15b-b05edf125aa6.mq.ap-northeast-2.amazonaws.com:5671"
parameters = pika.URLParameters(url)
parameters.ssl_options = pika.SSLOptions(context=ssl_context)

connection = pika.BlockingConnection(parameters)
channel = connection.channel()

message = ' '.join(sys.argv[1:]) or "info: Hello World!"
channel.basic_publish(exchange='logs', routing_key='', body=message)
print(" [x] Sent %r" % message)
connection.close()
