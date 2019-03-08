const Web3 = require('web3');

module.exports.default = (url) => {
    const web3 = new Web3(new Web3.providers.HttpProvider(url));
    const BV = new web3.eth.Contract(require('./bvABI').default, '0x0000000000000000000000000000000000000020')
    return {
        contract : new web3.eth.Contract(require('./weylABI').default, '0x000000000000000000000000000000000000002A'),
        isBlockMaker : (address) => { return BV.methods.isBlockMaker(address).call() }
    }
};