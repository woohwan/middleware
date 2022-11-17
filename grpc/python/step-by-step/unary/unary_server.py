import grpc
from concurrent import futures
import time
import unary_pb2_grpc as pb2_grpc
import unary_pb2 as pb2

class UnaryService(pb2_grpc.UnaryServicer):
  def __init__(self, *args, **kwargs) -> None:
    pass
  
  def GetServerResponse(self, request, context):
    message = request.message
    print(f'message form client: {message}')
    result = f'Hello I am up and running received "{message} message from you'
    result = {'message': result, 'received': True}
    return pb2.MessageResponse(**result)

def service():
  server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
  pb2_grpc.add_UnaryServicer_to_server(UnaryService(), server)
  server.add_insecure_port('127.0.0.1:50051')
  server.start()
  server.wait_for_termination()

if __name__ == '__main__':
  service()
