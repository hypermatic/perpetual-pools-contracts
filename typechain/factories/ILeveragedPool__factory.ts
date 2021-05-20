/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ILeveragedPool,
  ILeveragedPoolInterface,
} from "../ILeveragedPool";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "longToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "shortToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "firstPrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "quoteToken",
        type: "address",
      },
    ],
    name: "TokensCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes2",
        name: "commitType",
        type: "bytes2",
      },
      {
        internalType: "uint256",
        name: "maxImbalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "commit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "commitID",
        type: "uint256[]",
      },
    ],
    name: "executeCommitment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "endPrice",
        type: "uint256",
      },
    ],
    name: "executePriceChange",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "commitID",
        type: "uint256",
      },
    ],
    name: "uncommit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "updateFeeAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ILeveragedPool__factory {
  static readonly abi = _abi;
  static createInterface(): ILeveragedPoolInterface {
    return new utils.Interface(_abi) as ILeveragedPoolInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ILeveragedPool {
    return new Contract(address, _abi, signerOrProvider) as ILeveragedPool;
  }
}
