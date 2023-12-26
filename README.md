<p align="center">
  <h1 align="center">Starknet Graph example subgraph</h1>
</p>

**An example Starknet subgraph for testing Starknet Graph setup**

## Prerequisite

This project requires [Node.js](https://nodejs.org/) to be installed.

You must also have a working [Firehose Starknet](https://github.com/starknet-graph/firehose-starknet) stack with a properly configured [`graph-node`](https://github.com/starknet-graph/graph-node) connected to it:

1. You can get the whole stack (including Firehose and `graph-node`) up and running with a single command by following the [quickstart guide](https://github.com/starknet-graph/quickstart).
2. Alternatively, you can set up a Firehose stack following the [official docs](https://firehose.streamingfast.io/firehose-setup/starknet), and configure a `graph-node` instance to connect to it as a Firehose provider.

> [!NOTE]
>
> If you follow option `2` and you're using the official [`graph-node` distribution](https://github.com/graphprotocol/graph-node) (instead of the [fork available in starknet-graph](https://github.com/starknet-graph/graph-node)), make sure you're using version `0.33.0` or later, as earlier versions do not have Starknet support built in.
>
> Note that the Starknet support in `graph-node` is still a work-in-progress. Improvements on features and performance are constantly being added. Make sure to upgrade your `graph-node` instances as newer versions become available.

## Building and deploying

Clone and change directory into the repository, then install dependencies:

```console
yarn install
```

Then generate code based on ABI and subgraph definition:

```console
yarn codegen
```

Build the subgraph:

```console
yarn build
```

Now you're ready to deploy the subgraph! Make sure your `graph-node` exposes a JSON-RPC endpoint at `localhost:8020`, and an IPFS node is available at `localhost:5001`, then run this command to create the subgraph:

```console
yarn create-local
```

and this command to deploy the subgraph:

```console
yarn deploy-local
```

> [!NOTE]
>
> If your `graph-node` and IPFS endpoints are not available on the expected `localhost` ports, you'll need to run this command directly for subgraph creation:
>
> ```console
> yarn graph deploy --node http://localhost:8020/ --ipfs http://localhost:5001 starknet/example
> ```
>
> and this command for deployment:
>
> ```console
> yarn graph create --node http://localhost:8020/ starknet/example
> ```
>
> where `http://localhost:8020/` and `http://localhost:5001` are replaced by the actual URL.
