require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/VI65DLUp1cw5NiYxUv-4IHohrVjP5lG_",
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    }
  }
};
