#!/bin/bash

# Change directory to project root
cd ../src/ || exit

# Remove generated files
rm -rf ./generated/shared/helloworld

# Generate javascript and typescript definitions for hello world proto files
npx grpc_tools_node_protoc \
--js_out=import_style=commonjs,binary:./generated/ \
--grpc_out=grpc_js:./generated/ \
--ts_out=./generated/ \
./shared/helloworld/protobuf/*.proto
