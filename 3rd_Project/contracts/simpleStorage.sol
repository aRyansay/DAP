// SPDX-License-Identifier: MIT

pragma solidity >=0.8.13;

 contract simple{
    uint public count =10;

function increament(uint val) public{
    count= val;
}
function  getter() public view returns(uint){
    return count;
}


 }