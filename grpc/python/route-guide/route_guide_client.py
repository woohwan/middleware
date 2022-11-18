from __future__ import print_function

import asyncio
import logging
import random
from typing import Iterable, List

import grpc
import route_guide_pb2
import route_guide_pb2_grpc
import route_guide_resources

def make_route_note(message, latitude, longitue):
  return route_guide_pb2.RouteNote(
    message=message,
    location=route_guide_pb2.Point(latitude=latitude,longitude=longitue))

def generate_message() -> Iterable[route_guide_pb2.RouteNote]:
  messages = [
    make_route_note("1st message", 0,0),
    make_route_note("2nd message", 0,1),
    make_route_note("3rd message", 1,0),
    make_route_note("4th message", 0,0),
    make_route_note("5st message", 1,0),
  ]
  for msg in messages:
    print(f"Sending {msg.message} at {msg.location.latitude, msg.location.longitude}")
    yield msg

# Performs a bidi-streaming
def guide_route_chat(stub):
  responses = stub.RouteChat(generate_message())
  for resp in responses:
    print(f"Received {resp.message} at {resp.location.latitude, resp.location.longitude}")

def run():
  with grpc.insecure_channel('localhost:50051') as channel:
    stub = route_guide_pb2_grpc.RouteGuideStub(channel)
    print("------------------ RouteChat -------------")
    guide_route_chat(stub)

if __name__ == "__main__":
  logging.basicConfig()
  run()