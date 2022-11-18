from concurrent.futures import ThreadPoolExecutor
import logging
import threading
from typing import Iterator

import grpc

import phone_pb2
import phone_pb2_grpc


class CallMaker:

  def __init__(self, executor: ThreadPoolExecutor, channel: grpc.Channel,
          phone_number: str) -> None:
    self._executor = executor
    self._channel = channel
    self._stub = phone_pb2_grpc.PhoneStub(self._channel)
    self._phone_number = phone_number
    self._session_id = None
    self._audio_session_link = None
    self._call_state = None
    self._peer_responded = threading.Event()
    self._call_finished = threading.Event()
    self._consumer_future = None

  def _response_watcher(self, 
    response_iterator: Iterator[phone_pb2.StreamCallResponse]) -> None:
    try:
      for response in response_iterator:
        # NOTE: All fields in Proto3 are optional. This is the recommended way
        # to check if a field is present or not, or to exam which one-of field is
        # fulfiled by this message
        if response.HasField("call_info"):
          self._on_call_info(response.call_info)
        elif response.HasField("call_state"):
          self._on_call_state(response.call_state.state)
        else:
          raise RuntimeError(
            "Received StreamCallResponse without call_info and call_state"
          )
    except Exception as e:
      self._peer_responded.set()
      raise

  def _on_call_info(self, call_info: phone_pb2.CallInfo) -> None:
    self._session_id = call_info.session_id
    self._audio_session_link = call_info.media

  def _on_call_state(self, call_state: phone_pb2.CallState) -> None:
    logging.info(f"Call toward {self._phone_number} enters {phone_pb2.CallState.State.Name(call_state)}")
    self._call_state = call_state
    if call_state == phone_pb2.CallState.State.ACTIVE:
      self._peer_responded.set()
    if call_state == phone_pb2.CallState.State.ENDED:
      self._peer_responded.set()
      self._call_finished.set()

  def call(self) -> None:
    request = phone_pb2.StreamCallRequest()
    request.phone_number = self._phone_number
    response_iterator = self._stub.StreamCall(iter((request,)))
    # Instead of consuming the response on current thread, spawn a consumption thread.