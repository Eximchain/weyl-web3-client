# weyl-client
Tiny npm package which gives a configured interface to our WeylGov contract.  For convenience, it also has a `isBlockMaker` method to check against the core BlockVoting contract.  Ships with Typescript bindings built-in.

Usage is dead simple, require the constructor function and call it with your `HttpProvider` URL:

```nodejs
// Import as module, or use require().default
import ClientBuilder from '@eximchain/weyl-web3-client';

const ClientBuilder = require('@eximchain/weyl-web3-client').default

// Build a client using your Web3 Provider URL
const WeylClient = ClientBuilder(process.env['WEB3_URL']);

// Then use the contract
const numNominees = await WeylClient.contract.methods.nomineesInCycle().call();

// Or check a blockmaker
const isBlockMaker = await WeylClient.isBlockMaker(address);
```