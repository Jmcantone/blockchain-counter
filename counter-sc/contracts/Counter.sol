// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Counter
{
    uint256 public counter = 0;

    function increment() public returns(uint256)
    {
        counter ++;
        return counter;
    }

    function decrement() public returns(uint256)
    {
        counter --;
        return counter;
    }
}