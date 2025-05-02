// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import { Lending } from "Lending.sol";
import { Corn } from "./Corn.sol";
import { CornDEX } from "./CornDEX.sol";

contract FlashLoanLiquidator{
    
    Lending i_Lending;
    Corn i_corn;
    CornDEX i_cornDEX;

    constructor(address _lending, address _cornDEX, address _corn){
        i_Lending = Lending(_lending);
        i_corn = Corn(_corn);
        i_cornDEX = CornDEX(_cornDEX);
    }
    
    function executeOperation(uint256 amount, address initiator, address extraParam) public returns(bool){
        //
    }
}