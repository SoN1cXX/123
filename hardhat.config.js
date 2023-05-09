require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("hardhat-gas-reporter");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    //здесь указываем все сети, с которыми будем работать
    bnbtestnet: {
      url: "https://cool-sly-county.bsc-testnet.discover.quiknode.pro/6424b90e72571bc7d2f2451bb1b4e34ba7908163/", //RPC from my quicknode
      accounts: ["407e6873728b0f4ed6512b3e67cb4e35345f2a0b8bdda43c09aa312e676ba93d"],
      chainId: 97,
    },
  },
  etherscan: {
    apiKey: "E695DEI5G9489C3K3GNBZRSCVZXKWI4CQ1", // your Etherscan API key
  },

};