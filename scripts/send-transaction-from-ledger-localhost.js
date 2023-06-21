async function main() {
  const signers = await ethers.getSigners();

  const ledgerSigner = signers[20];

  // fund the ledger signer
  await network.provider.send("hardhat_setBalance", [ledgerSigner.address, `0x${(10n * 10n**18n).toString(16)}`])

  await ledgerSigner.sendTransaction({
    to: ledgerSigner,
  })
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
