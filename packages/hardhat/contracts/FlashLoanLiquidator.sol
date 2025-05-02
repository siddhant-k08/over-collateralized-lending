// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import { Lending } from "Lending.sol";
import { Corn } from "./Corn.sol";
import { CornDEX } from "./CornDEX.sol";

contract FlashLoanLiquidator{
    
    Corn private i_corn;
    CornDEX private i_cornDEX;
    
    function executeOperation(uint256 amount, address initiator, address extraParam) public returns(bool){
        i_cornDEX.swap(amount);
    }
}