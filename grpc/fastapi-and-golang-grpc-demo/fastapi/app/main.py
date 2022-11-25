from fastapi import FastAPI
import grpc

from auth_pb2 import AuthenticationRequest
from auth_pb2_grpc import AuthStub

app = FastAPI()

@app.get("/token/verify/")
def verify_token(token: str):
  channel = grpc.insecure_channel("localhost:50051")
  client = AuthStub(channel)
  request = AuthenticationRequest(token=token)
  response = client.Authenticate(request)

  data = {
    "user_id": response.user_id,
    "is_token_valid": response.token_valid
  }

  return data