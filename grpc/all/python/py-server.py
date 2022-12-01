
import example_pb2 as pb2
import example_pb2_grpc as pb2_grpc
import grpc

from concurrent import futures

# implements Servicer
class ExampleServicer(pb2_grpc.ExampleServicer):
  def __init__(self) -> None:
    super().__init__()
  
  def unaryCall(self, request: pb2.ClientMessage, context):
    message = request.client_message
    print(f'Recieved message form client: {message}')
    return pb2.ServerMessage(server_message=f'message from client: {message}')

def serve():
  # Create grpc Server and register servicer
  # use executer for async call
  server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
  pb2_grpc.add_ExampleServicer_to_server(ExampleServicer(), server)

  # add listening port
  port = 50051
  server.add_insecure_port('[::]:{}'.format(port))
  server.start()
  print(f'Wating for client connect at port {port}')
  server.wait_for_termination()

if __name__ == '__main__':
  try:
    serve()
  except KeyboardInterrupt:
    print('Terminated by user interruption.')