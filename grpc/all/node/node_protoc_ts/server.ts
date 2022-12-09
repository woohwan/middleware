import * as grpc from "@grpc/grpc-js";
import { ExampleService, IExampleServer } from "./example_grpc_pb";
import { ClientMessage, ServerMessage } from "./example_pb";

const host = "0.0.0.0:50051";

const exampleServer: IExampleServer = {
  unaryCall(call: grpc.ServerUnaryCall<ClientMessage, ServerMessage>, callback: grpc.sendUnaryData<ServerMessage>) {
    if (call.request) {
      console.log(`(Server) Got client message: ${call.request.getClientMessage()}`);
    }
    const serverMesage = new ServerMessage();
    serverMesage.setServerMessage("Message from server");
    callback(null, serverMesage);
  },
  serverStreamCall(call: grpc.ServerWritableStream<ClientMessage, ServerMessage>) {
    const serverMesage = new ServerMessage();
    serverMesage.setServerMessage("Message from server");
    call.write(serverMesage);
  },
};
