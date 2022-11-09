import sys

from basicClient import BasicPikaClient

class BasicMessageSender(BasicPikaClient):

    def declare_queue(self, queue_name):
        print(f"Trying to declare queue({queue_name})...")
        self.channel.queue_declare(queue=queue_name)

    def send_message(self, exchange, routing_key, body):
        channel = self.connection.channel()
        channel.basic_publish(exchange=exchange,
                              routing_key=routing_key,
                              body=body)
        print(f"Sent message. Exchange: {exchange}, Routing Key: {routing_key}, Body: {body}")

    def close(self):
        self.channel.close()
        self.connection.close()

if __name__ == "__main__":

    # Initialize Basic Message Sender which creates a connection
    # and channel for sending messages.
    basic_message_sender = BasicMessageSender(
        "b-157897e6-e325-484e-a15b-b05edf125aa6",
        "whpark",
        "abcd1234567890",
        "ap-northeast-2"
    )

    # Declare a queue
    # basic_message_sender.declare_queue("hello world queue")

    # Send a message to the queue.
    # basic_message_sender.send_message(exchange="", routing_key="hello world queue", body=b'Hello World!')

    if len(sys.argv) != 0:
        # Convert String to byte string
        message = sys.argv[1].encode('utf-8')
    
    basic_message_sender.send_message(exchange="", routing_key="hello", body=message)
    # basic_message_sender.send_message(exchange="", routing_key="hello", body=b'Hello World!')

    # Close connections.
    basic_message_sender.close()