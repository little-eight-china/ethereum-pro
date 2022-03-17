// @ts-ignore
/* eslint-disable */
import { request } from 'umi';
import Web3Modal from "web3modal";
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";

const providerOptions = {
  injected: {
    display: {
      name: "Injected",
      description: "Connect with the provider in your Browser",
    },
    package: null,
  },
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: {
        56: "https://bsc-dataseed.binance.org/",
        97: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      },
      network: "binance",
      qrcodeModalOptions: {
        mobileLinks: ["metamask"],
      },
    },
  },
};

// 连接钱包
export async function connectWallet(options?: { [key: string]: any }) {
  let provider = null;
  const web3Modal = new Web3Modal({
    cacheProvider: false, // optional
    providerOptions, // required
    disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
    theme: "dark",
  });
  provider = await web3Modal.connect();

  new Web3(provider);
}
