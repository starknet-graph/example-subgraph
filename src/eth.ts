import { BigInt } from "@starknet-graph/graph-ts";
import { Transfer } from "../generated/Eth/Eth";
import { InboundTransfer, OutboundTransfer } from "../generated/schema";

export function handleTransfer(event: Transfer): void {
  // Increment inbound transfer counter
  let inboundCounter = InboundTransfer.load(event.params.to);
  if (!inboundCounter) {
    inboundCounter = new InboundTransfer(event.params.to);
    inboundCounter.count = BigInt.fromI32(0);
  }
  inboundCounter.count = inboundCounter.count.plus(BigInt.fromI32(1));
  inboundCounter.save();

  // Increment outbound transfer counter
  let outboundCounter = OutboundTransfer.load(event.params.from_);
  if (!outboundCounter) {
    outboundCounter = new OutboundTransfer(event.params.from_);
    outboundCounter.count = BigInt.fromI32(0);
  }
  outboundCounter.count = outboundCounter.count.plus(BigInt.fromI32(1));
  outboundCounter.save();
}
