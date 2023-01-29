// package: helloworld
// file: shared/helloworld/protobuf/helloworld.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as shared_helloworld_protobuf_helloworld_pb from "../../../shared/helloworld/protobuf/helloworld_pb";

interface IGreeterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IGreeterService_ISayHello;
}

interface IGreeterService_ISayHello extends grpc.MethodDefinition<shared_helloworld_protobuf_helloworld_pb.HelloRequest, shared_helloworld_protobuf_helloworld_pb.HelloReply> {
    path: "/helloworld.Greeter/SayHello";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<shared_helloworld_protobuf_helloworld_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<shared_helloworld_protobuf_helloworld_pb.HelloRequest>;
    responseSerialize: grpc.serialize<shared_helloworld_protobuf_helloworld_pb.HelloReply>;
    responseDeserialize: grpc.deserialize<shared_helloworld_protobuf_helloworld_pb.HelloReply>;
}

export const GreeterService: IGreeterService;

export interface IGreeterServer {
    sayHello: grpc.handleUnaryCall<shared_helloworld_protobuf_helloworld_pb.HelloRequest, shared_helloworld_protobuf_helloworld_pb.HelloReply>;
}

export interface IGreeterClient {
    sayHello(request: shared_helloworld_protobuf_helloworld_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: shared_helloworld_protobuf_helloworld_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: shared_helloworld_protobuf_helloworld_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: shared_helloworld_protobuf_helloworld_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: shared_helloworld_protobuf_helloworld_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: shared_helloworld_protobuf_helloworld_pb.HelloReply) => void): grpc.ClientUnaryCall;
}

export class GreeterClient extends grpc.Client implements IGreeterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sayHello(request: shared_helloworld_protobuf_helloworld_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: shared_helloworld_protobuf_helloworld_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: shared_helloworld_protobuf_helloworld_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: shared_helloworld_protobuf_helloworld_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: shared_helloworld_protobuf_helloworld_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: shared_helloworld_protobuf_helloworld_pb.HelloReply) => void): grpc.ClientUnaryCall;
}
