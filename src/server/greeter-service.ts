/* eslint-disable no-console */

import type * as grpc from 'grpc'
import type { sendUnaryData } from 'grpc'

import type { IGreeterServer } from '../generated/shared/helloworld/protobuf/helloworld_grpc_pb'
import type { HelloRequest } from '../generated/shared/helloworld/protobuf/helloworld_pb'
import { HelloReply } from '../generated/shared/helloworld/protobuf/helloworld_pb'

export class GreetServerService implements IGreeterServer {
  // eslint-disable-next-line promise/prefer-await-to-callbacks
  sayHello(call: grpc.ServerUnaryCall<HelloRequest>, callback: sendUnaryData<HelloReply>): void {

    console.trace('Invoked "sayHello" function on server')

    const reply = new HelloReply()
    const name = call.request.getName()

    reply.setMessage(`Hello ${name}`)

    console.trace(`Reply to client with message: ${reply.getMessage()}`)

    // eslint-disable-next-line promise/prefer-await-to-callbacks
    callback(null, reply)
  }
}
