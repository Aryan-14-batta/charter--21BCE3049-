import React, { useState } from 'react';
import Web3 from 'web3';
import MerkleVerifierABI from './MerkleVerifierABI.json';

function App() {
    const [txHash, setTxHash] = useState('');
    const [proof, setProof] = useState([]);
    const [result, setResult] = useState(null);

    const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Replace with deployed address
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
    const contract = new web3.eth.Contract(MerkleVerifierABI, contractAddress);

    const verifyTransaction = async () => {
        const txHashBytes = web3.utils.keccak256(txHash);
        try {
            const isIncluded = await contract.methods.verifyTransactionInclusion(txHashBytes, proof).call();
            setResult(isIncluded ? 'Transaction is included' : 'Transaction is NOT included');
        } catch (error) {
            setResult('Error in verification');
        }
    };

    return (
        <div>
            <h1>Merkle Proof Verification</h1>
            <input placeholder="Transaction Hash" onChange={(e) => setTxHash(e.target.value)} />
            <input placeholder="Merkle Proof (Comma-separated)" onChange={(e) => setProof(e.target.value.split(','))} />
            <button onClick={verifyTransaction}>Verify</button>
            {result && <p>{result}</p>}
        </div>
    );
}

export default App;
