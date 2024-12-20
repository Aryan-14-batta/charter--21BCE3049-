// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class USDC extends ethereum.SmartContract {
  static bind(address: Address): USDC {
    return new USDC("USDC", address);
  }

  merkleRoot(): Bytes {
    let result = super.call("merkleRoot", "merkleRoot():(bytes32)", []);

    return result[0].toBytes();
  }

  try_merkleRoot(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("merkleRoot", "merkleRoot():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  verifyTransactionInclusion(leaf: Bytes, proof: Array<Bytes>): boolean {
    let result = super.call(
      "verifyTransactionInclusion",
      "verifyTransactionInclusion(bytes32,bytes32[]):(bool)",
      [
        ethereum.Value.fromFixedBytes(leaf),
        ethereum.Value.fromFixedBytesArray(proof),
      ],
    );

    return result[0].toBoolean();
  }

  try_verifyTransactionInclusion(
    leaf: Bytes,
    proof: Array<Bytes>,
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "verifyTransactionInclusion",
      "verifyTransactionInclusion(bytes32,bytes32[]):(bool)",
      [
        ethereum.Value.fromFixedBytes(leaf),
        ethereum.Value.fromFixedBytesArray(proof),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetMerkleRootCall extends ethereum.Call {
  get inputs(): SetMerkleRootCall__Inputs {
    return new SetMerkleRootCall__Inputs(this);
  }

  get outputs(): SetMerkleRootCall__Outputs {
    return new SetMerkleRootCall__Outputs(this);
  }
}

export class SetMerkleRootCall__Inputs {
  _call: SetMerkleRootCall;

  constructor(call: SetMerkleRootCall) {
    this._call = call;
  }

  get _merkleRoot(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class SetMerkleRootCall__Outputs {
  _call: SetMerkleRootCall;

  constructor(call: SetMerkleRootCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}
