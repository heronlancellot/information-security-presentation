import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

// Using a hardcoded solution to avoid GitHub actions issues
const DEPLOYER_PRIVATE_KEY =
  process.env.DEPLOYER_PRIVATE_KEY ||
  "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

const config: HardhatUserConfig = {
  solidity: "0.8.20",
  networks: {
    /**
     * @dev Testnets
     */
    kakarot: {
      url: `${process.env.KAKAROT_SEPOLIA_RPC_URL}`,
      accounts: [`${DEPLOYER_PRIVATE_KEY}`],
    },
    sepolia: {
      url: `${process.env.SEPOLIA_RPC_URL}`,
      accounts: [`${DEPLOYER_PRIVATE_KEY}`],
    },
    mumbai: {
      url: `${process.env.MUMBAI_RPC_URL}`,
      accounts: [`${DEPLOYER_PRIVATE_KEY}`],
    },
    /**
     * @dev Mainnets
     */
    ethereum: {
      url: `${process.env.ETH_RPC_URL}`,
      accounts: [`${DEPLOYER_PRIVATE_KEY}`],
    },
    polygon: {
      url: `${process.env.MATIC_RPC_URL}`,
      accounts: [`${DEPLOYER_PRIVATE_KEY}`],
    },
    /**
     * @dev Localnet (Hardhat)
     */
    hardhat: {
      chainId: 31337,
    },
  },
};

export default config;
