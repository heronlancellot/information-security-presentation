// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MockERC721 is ERC721 {
    uint256 public totalSupply;

    constructor() ERC721("MockERC721", "ERC721") {}

    function mint(address to, uint256 id) public {
        totalSupply++;
        _mint(to, id);
    }

    function tokenURI(
        uint256
    ) public view virtual override returns (string memory) {
        return "ipfs://QmWodCkovJk18U75g8Veg6rCnw7951vQvTjYfS7J3nMFma/";
    }
}
