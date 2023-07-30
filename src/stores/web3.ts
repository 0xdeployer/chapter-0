import { create } from "zustand";
import {
  GetContractReturnType,
  createPublicClient,
  createWalletClient,
  custom,
  getContract,
  http,
} from "viem";
import { foundry, goerli, mainnet } from "viem/chains";
import { devtools } from "zustand/middleware";
import abi from "../abi/chapter0.json";

interface Web3Store {
  hasStarted?: boolean;
  hasEnded?: boolean;
  canMint?: boolean;
  startTime?: number;
  address?: string;
  endTime?: number;
  totalMinted?: string;
  connectWallet: () => void;
  mintEdition: () => Promise<string>;
  init: () => Promise<void>;
}

let chain: any;

if (process.env.NODE_ENV === "production") {
  chain = mainnet;
} else {
  chain = foundry;
}

if (process.env.REACT_APP_CHAIN === "goerli") {
  chain = goerli;
}

const transport = http(process.env.REACT_APP_TRANSPORT);
export const client = createPublicClient({
  chain: chain,
  transport,
});

const contract = getContract({
  address: process.env.REACT_APP_CHAPTER0 as `0x${string}`,
  abi,
  publicClient: client,
}) as any;

export const useWeb3Store = create<Web3Store>()(
  devtools(
    (set, get) => {
      return {
        async connectWallet() {
          const client = createWalletClient({
            chain: chain,
            // @ts-ignore
            transport: custom(window.ethereum),
          });
          const [address] = await client.getAddresses();
          const canMint = await contract.read.canMint({ args: [address] });
          set({ address, canMint });
        },
        async mintEdition() {
          const walletClient = createWalletClient({
            chain: chain,
            // @ts-ignore
            transport: custom(window.ethereum),
            account: get().address as any,
          });
          const contract = getContract({
            address: process.env.REACT_APP_CHAPTER0 as `0x${string}`,
            abi,
            walletClient,
          }) as any;
          const tx = await contract.write.mint();
          return tx as string;
        },
        async init() {
          const [hasStarted, hasEnded, startTime, endTime, totalMinted] =
            await Promise.all([
              contract.read.hasStarted(),
              contract.read.hasEnded(),
              contract.read.START_TIME(),
              contract.read.END_TIME(),
              contract.read.totalMinted(),
            ]);

          set({
            hasStarted,
            hasEnded,
            startTime: parseInt(startTime.toString()),
            endTime: parseInt(endTime.toString()),
            totalMinted: totalMinted.toString(),
          });
        },
      };
    },
    { name: "Web3Store" }
  )
);

//@ts-ignore
window.c = useWeb3Store.getState().contract;
useWeb3Store.getState().init();

// IPFS HASH: QmXDhYJdR3vhiHDYiTuFxVMqT6CahSs7MY3HwPrV17K6xW
// ARWEAVE: https://arweave.net/58a8Sh-G9w60JjOp63nvqYIeOrWK92XJwEIUfhk_vk8`
