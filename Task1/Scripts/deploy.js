async function main() {
    const MerkleVerifier = await ethers.getContractFactory("MerkleVerifier");
    const merkleVerifier = await MerkleVerifier.deploy(); // Deploys the contract
    
    console.log("MerkleVerifier deployed to:", merkleVerifier.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });