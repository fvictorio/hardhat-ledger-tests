const { expect } = require("chai");

describe("tests", function () {
  this.timeout(0);

  it("should get the accounts", async function () {
    const accounts = await network.provider.send("eth_accounts", []);

    expect(accounts).to.have.length(2);
  });

  it("should send a transaction", async function () {
    const accounts = await network.provider.send("eth_accounts", []);

    await network.provider.send("eth_sendTransaction", [
      {
        from: accounts[0],
        to: accounts[1],
        value: `0x${(10n * 10n ** 18n).toString(16)}`
      },
    ]);

    await network.provider.send("eth_sendTransaction", [
      {
        from: accounts[1],
        to: accounts[0],
      },
    ]);
  });

  it("should sign a message", async function () {
    const accounts = await network.provider.send("eth_accounts", []);
    const signedMessage = await network.provider.send("personal_sign", [
      "0x1234",
      accounts[1],
    ]);

    expect(signedMessage).to.have.length(132);
  });
});
