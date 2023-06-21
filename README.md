# hardhat-ledger tests

This repository has a set of Hardhat configs and tests meant to be used to test the `harhdat-ledger` plugin. The sections are organized by the Hardhat config used.

These instructions assume you have a `npx hardhat node` running in a separate terminal.

## Setup

Run `npm install --force`. The `--force` flag is necessary because npm peer dependencies don't work well with pre-release versions.

## Minimal config

This config imports the plugin but doesn't do anything else. The goal is to check that just importing the plugin doesn't mess with the normal usage of Hardhat.

```
npx hardhat test test/minimal-config.js
npx hardhat test --network localhost test/minimal-config.js
```

## Basic ledger config

Replace the placeholder in `hardhat.config-with-ledger.js` with an address from your Ledger.

### Disconnected ledger

Before connecting your ledger, run:

```
npx hardhat --config hardhat.config-with-ledger.js run scripts/send-transaction-from-ledger.js
```

You should see the `Connecting to Ledger wallet` spinner, and then an error saying `There was an error trying to establish a connection to the Ledger wallet`

### Connected but locked

Connect your ledger and run the same command. You should get the same error.

### Unlocked but the ethereum app is not selected

Unlock your ledger and run the same command. You should get to the "Waiting for confirmation" stage but get an error. (This error is not ideal, we should improve it in the next version.)

### Unlocked and with the ethereum app selected

Finally, select the Ethereum app and re-run the command. You should get the "Waiting for confirmation" spinner.

- Reject the signature. You should get a `Condition of use not satisfied` error.
- Re-run the command and accept the signature. The script should finish successfully.

After that, run some tests with the ledger account:

```
npx hardhat --config hardhat.config-with-ledger.js test test/ledger-config-hardhat-network.js
```

### Using the hardhat node

Run this script on the localhost network. It's a different script because of a current bug when combining local accounts and ledger accounts in http networks.

```
npx hardhat run --config hardhat.config-with-ledger.js --network localhost scripts/send-transaction-from-ledger-localhost.js
```

You should get the "Waiting for confirmation" spinner.

After that, run some tests in the node:

```
npx hardhat --config hardhat.config-with-ledger.js --network localhost test test/ledger-config-localhost-network.js
```
