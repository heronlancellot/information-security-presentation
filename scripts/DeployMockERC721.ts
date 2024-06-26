import { ethers } from "hardhat";
require("dotenv").config({ path: ".env" });

async function main() {
  const MockERC20 = await ethers.getContractFactory("MockERC721");
  const DeployedMockErc721 = await MockERC20.deploy();

  await DeployedMockErc721.deployed();

  console.log(`Deployed to ${DeployedMockErc721.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
