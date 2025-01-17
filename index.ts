import Web3 from 'web3';
import { Contract } from 'web3-eth-contract';
import WeylABI from './weylABI';
import BlockVoteABI from './bvABI';

export type isBlockMaker = (address:string)=>Promise<boolean>

export interface Client {
  contract : Contract
  isBlockMaker : isBlockMaker
}

export type buildClient = (url:string) => Client

export const buildClient:buildClient = (url) => {
    const web3 = new Web3(new Web3.providers.HttpProvider(url));
    const BV = new web3.eth.Contract(BlockVoteABI, '0x0000000000000000000000000000000000000020')
    return {
        contract : new web3.eth.Contract(WeylABI, '0x000000000000000000000000000000000000002A'),
        isBlockMaker : (address) => { return BV.methods.isBlockMaker(address).call() }
    }
};

export default buildClient;