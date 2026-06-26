// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Mytoken {
    string public name;
    string public symbol;
    uint8 public decimals;

    uint256 public totalSupply;
    mapping(address => uint256) public balanceOf;

    address public owner; // (이 변수를 굳이 안 써도 작동합니다)

    constructor(string memory _name, string memory _symbol, uint8 _decimal) {
        name = _name; 
        symbol = _symbol;
        decimals = _decimal;
        _mint(1 * 10 ** uint256(decimals), msg.sender);
    }

    function _mint(uint256 amount, address to) internal {
        totalSupply += amount;
        balanceOf[to] += amount;
    }
}