import pika
import sys
import ssl

credentials = pika.credentials.PlainCredentials("whpark", "abcd1234567890")
parameters = pika.ConnectionParameters('b-157897e6-e325-484e-a15b-b05edf125aa6.mq.ap-northeast-2.amazonaws.com',
                        5671,
                        '/',
                        credentials)

connection = pika.BlockingConnection(parameters)
channel = connection.channel()