/* eslint-disable no-console */

import * as grpc from 'grpc'

import { createGrpcServer } from './create-grpc-server'

const host = '0.0.0.0'
const port = 50051

function start(): void {
  const server = createGrpcServer()

  try {
    server.bind(
      `${host}:${port}`,
      grpc.ServerCredentials.createInsecure()
    )

    console.log(`Server listening on ${host}:${port}`)

    server.start()
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

start()
