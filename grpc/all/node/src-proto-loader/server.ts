import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "./example";
import { ClientMessage } from "./net/steve/ClientMessage";
import { ServerMessage } from "./net/steve/ServerMessage";
import { ExampleHandlers } from "./net/steve/Example";

const host = "0.0.0.0:50051";

// service implementation
const exampleServer: ExampleHandlers = {
  unaryCall(call: grpc.ServerUnaryCall<ClientMessage, ServerMessage>, callback: grpc.sendUnaryData<ServerMessage>) {
    const req = call.request;
    if (req) {
      console.log(`Recieved message form client: ${req.clientMessage}`);
    }
    callback(null, {
      serverMessage: `message from client: ${req.clientMessage}`,
    });
  },
  serverStreamCall(call: grpc.ServerWritableStream<ClientMessage, ServerMessage>) {
    call.write({
      serverMessage: "Message from server",
    });
  },
  clientStreamCall(call: grpc.ServerReadableStream<ClientMessage, ServerMessage>) {
    call.on("data", (clientMessage: ClientMessage) => {
      console.log(`(server) Got client message: ${clientMessage.clientMessage}`);
    });
  },
  bidirectionalStreamCall(call: grpc.ServerDuplexStream<ClientMessage, ServerMessage>) {
    call.write({
      serverMessage: "Message from server",
    });
    call.on("data", (clientMessage: ClientMessage) => {
      console.log(`(server) Got client message: ${clientMessage.clientMessage}`);
    });
  },
};

// create server and connect service with server
function getServer(): grpc.Server {
  const packageDefinition = protoLoader.loadSync("../proto/example.proto");
  // load proto descriptor
  const proto = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;
  const server = new grpc.Server();
  //  service interface와 implementation인 서버 연결
  server.addService(proto.net.steve.Example.service, exampleServer);
  return server;
}

if (require.main === module) {
  const server = getServer();
  server.bindAsync(host, grpc.ServerCredentials.createInsecure(), (err: Error | null, port: number) => {
    if (err) {
      console.error(`Server error: ${err.message}`);
    } else {
      console.log(`Server bound on port: ${port}`);
      server.start();
    }
  });
}
