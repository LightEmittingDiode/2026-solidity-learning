// SPDX-License-Indentifier: MIT
// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.28;

contract Mytoken {
    string public name;
    string public symbol;
    uint8 public decimals; // 1 wei --> 1 * 10^-18

    constructor(string memory _name, string memory _symbol, uint8 _decimal) {
        name = _name;
        symbol = _symbol;
        decimals = _decimal;
    }
}