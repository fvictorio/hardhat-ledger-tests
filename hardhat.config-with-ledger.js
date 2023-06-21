require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-ledger");

const ledgerAddress = "<your-ledger-address>";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
      accounts: [
        {
          privateKey:
            "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
          balance: "10000000000000000000000",
        },
      ],
      ledgerAccounts: [ledgerAddress],
    },
    localhost: {
      ledgerAccounts: [ledgerAddress],
    },
  },
};
