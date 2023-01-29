import { Server } from 'grpc'

import type { IGreeterServer } from '../generated/shared/helloworld/protobuf/helloworld_grpc_pb'
import { GreeterService } from '../generated/shared/helloworld/protobuf/helloworld_grpc_pb'
import { GreetServerService } from './greeter-service'

export function createGrpcServer(): Server {
  const server = new Server()

  server.addService<IGreeterServer>(
    GreeterService,
    new GreetServerService()
  )

  return server
}

