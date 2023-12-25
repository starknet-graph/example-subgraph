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
