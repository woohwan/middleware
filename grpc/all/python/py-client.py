import grpc
import example_pb2 as pb2
import example_pb2_grpc as pb2_grpc

import argparse

def run(server_addr: str, message: str):
  with grpc.insecure_channel('{}'.format(server_addr)) as channel:
    #  create stub
    stub = pb2_grpc.ExampleStub(channel)

    # call method
    req = pb2.ClientMessage(client_message=message)
    resp: pb2.ServerMessage = stub.unaryCall(req)
    print(resp.server_message)

if __name__ == '__main__':
  argparse = argparse.ArgumentParser(usage='python py-client.py [server_addr:port] [message]')

  argparse.add_argument('server_addr', default='localhost:50051', nargs='?', help='connect to server addreess')
  argparse.add_argument('message', default='Steve', nargs='?', help='message to send to server')
  args = argparse.parse_args()
  run(args.server_addr, args.message)