async function main() {
  const [signer, ledgerSigner] = await ethers.getSigners();

  // fund the ledger signer
  await signer.sendTransaction({
    to: ledgerSigner,
    value: ethers.parseEther("10")
  })

  await ledgerSigner.sendTransaction({
    to: signer,
  })
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
