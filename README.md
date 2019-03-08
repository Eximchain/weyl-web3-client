# weyl-client
Tiny npm package which gives a configured interface to our WeylGov contract.  

Usage is dead simple, require the constructor function and call it with your `HttpProvider` URL:

```nodejs
// Using import
import WeylClient from '@eximchain/weyl-web3-client';
const Weyl = WeylClient(process.env['WEB3_URL']);

// Using require
const Weyl = require('@eximchain/weyl-web3-client').default(process.env['WEB3_URL']);

// Then use the contract
const numNominees = await Weyl.methods.nomineesInCycle().call();
```