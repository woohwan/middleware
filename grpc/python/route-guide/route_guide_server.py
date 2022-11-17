from concurrent import futures
import logging
import math
import time

import grpc
import route_guide_pb2
import route_guide_pb2_grpc
import route_guide_resources


class RouteGuideServicer(route_guide_pb2_grpc.RouteGuideServicer):
  """Provides methods that implements functionality of route guide server."""

  def __init__(self):
    self.db = route_guide_resources.read_route_guide_database()

  def GetFeature(self, request, context):
    return super().GetFeature(request, context)

  def ListFeatures(self, request, context):
    return super().ListFeatures(request, context)

  def RecordRoute(self, request_iterator, context):
    return super().RecordRoute(request_iterator, context)

  def RouteChat(self, request_iterator, context):
    prev_notes = []
    for new_note in request_iterator:
      for prev_note in prev_notes:
        if prev_note.location == new_note.location:
          yield prev_note
      prev_notes.append(new_note)

def serve():
  server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
  route_guide_pb2_grpc.add_RouteGuideServicer_to_server(RouteGuideServicer(), server)
  server.add_insecure_port('[::]:50051')
  server.start()
  server.wait_for_termination()

if __name__ == "__main__":
  logging.basicConfig()
  serve()