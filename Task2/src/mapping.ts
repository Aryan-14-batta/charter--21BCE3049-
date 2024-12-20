import { Transfer as TransferEvent } from "../generated/USDC/USDC";
import { Transfer } from "../generated/schema";

const TARGET_ADDRESS = "";

export function handleTransfer(event: TransferEvent): void {
  if (event.params.to.toHexString() == TARGET_ADDRESS.toLowerCase()) {
    let transfer = new Transfer(event.transaction.hash.toHex());
    transfer.from = event.params.from;
    transfer.to = event.params.to;
    transfer.value = event.params.value;
    transfer.timestamp = event.block.timestamp;
    transfer.save();
  }
}