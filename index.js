const Web3 = require('web3');
const WeylABI = require('./weylABI').default;
const bvABI = require('./bvABI').default;

const buildBlockmakerChecker = (web3) => {
    const BV = new web3.eth.Contract(bvABI, '0x0000000000000000000000000000000000000020')
    return (address) => {
        return BV.methods.isBlockMaker(address).call()
    }
}

module.exports.default = (url) => {
    const web3 = new Web3(new Web3.providers.HttpProvider(url));
    return {
        contract : new web3.eth.Contract(WeylABI, '0x000000000000000000000000000000000000002A'),
        isBlockMaker : buildBlockmakerChecker(web3)
    }
};