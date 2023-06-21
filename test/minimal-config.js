const { expect } = require("chai");

it("should get the accounts", async function () {
  const accounts = await network.provider.send("eth_accounts", [])

  expect(accounts).to.have.length(20)
});

it("should send a transaction", async function () {
  const accounts = await network.provider.send("eth_accounts", [])

  await network.provider.send("eth_sendTransaction", [{
    from: accounts[0],
    to: accounts[1]
  }])
});

it("should sign a message", async function () {
  const accounts = await network.provider.send("eth_accounts", [])
  const signedMessage = await network.provider.send("personal_sign", ["0x1234", accounts[0]])

  expect(signedMessage).to.equal('0x87b638f4675a39ef49eb0379a7f5d248affd109cc6cb5b69457d7e8394d7d85274c8b407ca2b2b37ba4cc9c3bcfde488f7f59748175764b928324bd31c0f93851c')
});
