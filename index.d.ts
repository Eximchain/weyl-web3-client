import { Contract } from 'web3-eth-contract';

export type isBlockMaker = (address:string)=>Promise<boolean>

export interface Client {
  contract : Contract
  isBlockMaker : isBlockMaker
}

export type buildClient = (url:string) => Client

