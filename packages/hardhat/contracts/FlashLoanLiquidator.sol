// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "./Corn.sol";
import "./CornDEX.sol";

contract FlashLoanLiquidator{
    
    Corn private i_corn;
    CornDEX private i_cornDEX;
    
    function executeOperation(uint256 amount, address initiator, address extraParam) public returns(bool){
        i_cornDEX.swap(amount);
    }
}