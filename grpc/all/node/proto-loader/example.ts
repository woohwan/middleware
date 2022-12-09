import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { ExampleClient as _net_steve_ExampleClient, ExampleDefinition as _net_steve_ExampleDefinition } from './net/steve/Example';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  net: {
    steve: {
      ClientMessage: MessageTypeDefinition
      Example: SubtypeConstructor<typeof grpc.Client, _net_steve_ExampleClient> & { service: _net_steve_ExampleDefinition }
      ServerMessage: MessageTypeDefinition
    }
  }
}

