# Protobuf-learn-1

Purpose of this project is for me to learn how to use protobuf.

Furthermore, I'd like to verify, if the ecosystem and tooling built around
protobuf in nodejs is mature enough to be used in another project I'm building.

# General

The following sections describe the general setup of the project and how to get started.

## Installation

Use the package manager `npm` to install dependencies.

## Local Development

The following section describes how to run the project locally.

### Generate types from proto files

To generate types from proto files, run:

```bash
npm run generate:proto:types
```

In case you run the above command the first time, you might get the following error:
`sh: ./scripts/generate-ts-types-from-proto.sh: Permission denied`

To fix this, you need to make the script executable, by running:
```bash
chmod +x ./scripts/generate-ts-types-from-proto.sh
```

## Release

This project uses `standard-version` to create releases.

To release the package, please run:

```bash
npm run release
```

Standard-Version will generate a changelog based on the commits and create a new tag.

# Documentation

This project is inspired by the work of https://github.com/MrDesjardins.
