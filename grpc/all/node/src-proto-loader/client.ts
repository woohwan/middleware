import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";
import { ProtoGrpcType } from "./example";
import { ServerMessage } from "./net/steve/ServerMessage";

const host = "0.0.0.0:50051";
const packageDefinition = protoLoader.loadSync("../proto/example.proto");
const proto = grpc.loadPackageDefinition(packageDefinition) as unknown as ProtoGrpcType;

// create stub
const stub = new proto.net.steve.Example(host, grpc.credentials.createInsecure());

const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 5);
stub.unaryCall(
  {
    clientMessage: "Message from client",
  },
  (error?: grpc.ServiceError | null, serverMessage?: ServerMessage) => {
    if (error) {
      console.error(error.message);
    } else if (serverMessage) {
      console.log(`(client) Got Server message: ${serverMessage.serverMessage}`);
    }
  }
);
