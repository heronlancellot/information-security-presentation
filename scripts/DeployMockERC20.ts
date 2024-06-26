import { ethers } from "hardhat";
require("dotenv").config({ path: ".env" });

async function main() {
  const MockERC20 = await ethers.getContractFactory("MockERC20");
  const DeployedMockErc20 = await MockERC20.deploy();

  await DeployedMockErc20.deployed();

  console.log(`Deployed to ${DeployedMockErc20.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
