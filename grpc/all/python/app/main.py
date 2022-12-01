from fastapi import FastAPI
import grpc
import example_pb2 as pb2
import example_pb2_grpc as pb2_grpc


app = FastAPI()

@app.post("/unary/")
def UnaryCall(web_message: str):
  channel = grpc.insecure_channel("localhost:50051")
  stub = pb2_grpc.ExampleStub(channel)
  message = pb2.ClientMessage(client_message=web_message)
  resp: pb2.ServerMessage = stub.unaryCall(message)
  
  print(f"message from gRPC Sesrver: {resp}")

  data = {
    "server_message": resp.server_message
  }

  return data
