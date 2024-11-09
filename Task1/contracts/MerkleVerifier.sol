// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract MerkleVerifier is Ownable {
    bytes32 public merkleRoot;

    // Pass the initial owner to the Ownable constructor
    constructor() Ownable(msg.sender) {}

    function setMerkleRoot(bytes32 _merkleRoot) external onlyOwner {
        merkleRoot = _merkleRoot;
    }

    function verifyTransactionInclusion(bytes32 leaf, bytes32[] calldata proof) external view returns (bool) {
        bytes32 computedHash = leaf;
        for (uint256 i = 0; i < proof.length; i++) {
            if (computedHash <= proof[i]) {
                computedHash = keccak256(abi.encodePacked(computedHash, proof[i]));
            } else {
                computedHash = keccak256(abi.encodePacked(proof[i], computedHash));
            }
        }
        return computedHash == merkleRoot;
    }
}