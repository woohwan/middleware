from concurrent.futures import ThreadPoolExecutor
import logging
import threading
import time
from typing import Iterable

from google.protobuf.json_format import MessageToJson
import grpc

import phone_pb2
import phone_pb2_grpc

def create_state_response(
  call_state: phone_pb2.CallState.State ) -> phone_pb2.StreamCallResponse:
  response = phone_pb2.StreamCallResponse()
  response.call_state.state = call_state
  return response

class Phone(phone_pb2_grpc.PhoneServicer):
  def __init__(self) -> None:
    self._id_counter = 0
    self._lock = threading.RLock()

  def _create_call_session(self):
    call_info = phone_pb2.CallInfo()
    with self._lock:
      call_info.session_id =str(self._id_counter)
      self._id_counter += 1
    call_info.media =  "https://link.to.audio.resources"
    logging.info(f"Created a call session {MessageToJson(call_info)}")
    return call_info

  def _clean_call_session(self, call_info: phone_pb2.CallInfo) -> None:
    logging.info(f"Call session cleaned {MessageToJson(call_info)}")

  def StreamCall(self, request_iterator: Iterable[phone_pb2.StreamCallRequest], 
    context: grpc.ServicerContext) -> Iterable[phone_pb2.StreamCallResponse]:
    try:
      request = next(request_iterator)
      logging.info(f"Received a phone call request for number {request.phone_number}")
    except StopIteration:
      raise RuntimeError("Failed to received call request")
    # Simulate the acceptance of call request
    time.sleep(1)
    yield create_state_response(phone_pb2.CallState.NEW)

    # Simulate the start of the call session
    time.sleep(1)
    call_info = self._create_call_session()
    context.add_callback(lambda: self._clean_call_session(call_info))
    respnose =phone_pb2.StreamCallResponse()
    respnose.call_info.session_id = call_info.session_id
    respnose.call_info.media = call_info.media
    yield respnose

    yield create_state_response(phone_pb2.CallState.ACTIVE)

    # Simulate the end of the call
    time.sleep(2)
    yield create_state_response(phone_pb2.CallState.ENDED)
    logging.info(f"Call finished {request.phone_number}")

  
def serve(address: str) -> None:
    server = grpc.server(ThreadPoolExecutor(3))
    phone_pb2_grpc.add_PhoneServicer_to_server(Phone(), server)
    server.add_insecure_port(address)
    server.start()
    logging.info(f"Server serving at {address}")

if __name__ == "__main__":
  logging.basicConfig(level=logging.INFO)
  serve("[::]:50051")
    