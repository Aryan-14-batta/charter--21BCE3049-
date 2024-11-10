# Blockchain Project: Merkle Proof Verification & USDC Transfer Notification System

This repository includes two blockchain projects focused on implementing Merkle proof verification for transaction inclusion and setting up a notification system for USDC token transfers.

---

## Table of Contents
- [Task 1: Merkle Proof Verification of Blockchain Transactions](#task-1-merkle-proof-verification-of-blockchain-transactions)
  - [Overview](#overview)
  - [Project Structure](#project-structure)
  - [Setup and Installation](#setup-and-installation)
  - [Deployment and Testing](#deployment-and-testing)
- [Task 2: USDC Transfer Notification System](#task-2-usdc-transfer-notification-system)
  - [Overview](#overview-1)
  - [Project Structure](#project-structure-1)
  - [Setup and Installation](#setup-and-installation-1)
  - [Deployment and Testing](#deployment-and-testing-1)
- [Technologies Used](#technologies-used)

---

## Task 1: Merkle Proof Verification of Blockchain Transactions

### Overview
In this task, we implement a smart contract that can verify the inclusion of a specific transaction from a block using Merkle proofs. A Merkle tree is generated from the block’s transaction hashes off-chain, and its root is stored in the smart contract, enabling users to verify transaction inclusion by submitting Merkle proofs.

### Project Structure
Task1_MerkleVerification/
├── contracts/
│   └── MerkleVerifier.sol    # Smart contract for Merkle verification
├── scripts/
│   └── deploy.js             # Deployment script using Hardhat
├── frontend/
│   ├── src/
│   │   ├── App.js            # React frontend for interaction
│   │   └── MerkleVerifierABI.json # ABI for the MerkleVerifier contract
│   └── package.json
└── hardhat.config.js         # Hardhat configuration
### Setup and Installation

1. *Install Dependencies*:
   - In the project root and frontend directories, install required dependencies:

     bash
     npm install
     

2. *Compile the Smart Contract*:
   - Compile the smart contract using Hardhat:

     bash
     npx hardhat compile
     

3. *Deploy the Contract*:
   - Deploy the contract to a local or test network:

     bash
     npx hardhat run scripts/deploy.js --network NETWORK_NAME
     

### Deployment and Testing

1. *Set Merkle Root*:
   - Use the setMerkleRoot function (owner only) to set the Merkle root of a block’s transactions.

2. *Verify Transaction Inclusion*:
   - Use the verifyTransactionInclusion function to check if a transaction is part of the Merkle tree represented by the stored root.

3. *Frontend Interface*:
   - Start the frontend in the frontend directory to interact with the contract:

     bash
     cd frontend
     npm start
     

---

## Task 2: USDC Transfer Notification System

### Overview
In this task, a notification system is created to track incoming USDC token transfers to a specified Ethereum address on the Sepolia network. It uses The Graph Protocol to monitor Transfer events, allowing efficient querying and real-time notifications.

### Project Structure


Task2_USDC_Notification/
├── subgraph.yaml               # Subgraph configuration
├── abis/
│   └── USDC.json               # ABI with the Transfer event
├── src/
│   └── mapping.ts              # Event handler for Transfer
├── schema.graphql              # GraphQL schema definition
└── frontend/
├── src/
│   ├── App.js              # React dashboard for displaying transfers
│   ├── ApolloClient.js     # Apollo Client setup
│   └── queries.js          # GraphQL queries
└── package.json
### Setup and Installation

1. *Install The Graph CLI*:
   - Install The Graph CLI globally:

     bash
     npm install -g @graphprotocol/graph-cli
     

2. *Authenticate with The Graph*:
   - Use your API key to authenticate:

     bash
     graph auth --studio YOUR_API_KEY
     

3. *Initialize and Configure the Subgraph*:
   - Initialize and configure your subgraph:

     bash
     graph init --from-contract USDC_CONTRACT_ADDRESS --network sepolia your-username/usdc-notification
     

4. *Deploy the Subgraph*:
   - Deploy the subgraph after configuring subgraph.yaml and mapping.ts:

     bash
     graph codegen
     graph build
     graph deploy --studio your-username/usdc-notification
     

### Deployment and Testing

1. *Verify Subgraph in The Graph Studio*:
   - Monitor and verify the subgraph’s status and events in The Graph Studio.

2. *Frontend Dashboard*:
   - Start the frontend dashboard in the frontend directory to view recent transfers:

     bash
     cd frontend
     npm start
     

---

## Technologies Used

- *Solidity*: Smart contract development for Ethereum.
- *Hardhat*: Ethereum development environment for contract deployment.
- *The Graph Protocol*: Blockchain indexing and querying service.
- *React*: Frontend framework for user interaction.
- *Apollo Client*: State management library for GraphQL.

---

This project provides a robust solution for blockchain transaction verification and token transfer monitoring, utilizing Ethereum, Merkle trees, and The Graph Protocol to achieve high efficiency and scalability.

---

## Technologies Used

- *Solidity*: Smart contract development for Ethereum.
- *Hardhat*: Ethereum development environment for contract deployment.
- *The Graph Protocol*: Blockchain indexing and querying service.
- *React*: Frontend framework for user interaction.
- *Apollo Client*: State management library for GraphQL.

---

This project provides a robust solution for blockchain transaction verification and token

Aryan Batta
21BCE3049
aryanbatta1402@gmail.com
