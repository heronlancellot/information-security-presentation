import { ethers } from "hardhat";
require("dotenv").config({ path: ".env" });

async function main() {
  const MockERC20 = await ethers.getContractFactory("MockERC1155");
  const DeployedMockErc1155 = await MockERC20.deploy();

  await DeployedMockErc1155.deployed();

  console.log(`Deployed to ${DeployedMockErc1155.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
