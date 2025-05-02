// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import { Lending } from "./Lending.sol";
import { Corn } from "./Corn.sol";
import { CornDEX } from "./CornDEX.sol";

contract FlashLoanLiquidator{
    
    Lending i_lending;
    Corn i_corn;
    CornDEX i_cornDEX;

    constructor(address _lending, address _cornDEX, address _corn){
        i_lending = Lending(_lending);
        i_corn = Corn(_corn);
        i_cornDEX = CornDEX(_cornDEX);
    }
    
    function executeOperation(uint256 amount, address initiator, address toLiquidate) public returns(bool){
        // Approve the lending contract to spend the tokens
        i_corn.approve(address(i_lending), amount);

        // First liquidate to get the collateral tokens
        i_lending.liquidate(toLiquidate);

        // Calculate required amount of ETH to get exact 'amount' of tokens
        uint256 ethReserves = address(i_cornDEX).balance;
        uint256 tokenReserves = i_corn.balanceOf(address(i_cornDEX));
        uint256 requiredETHInput = i_cornDEX.calculateXInput(amount, ethReserves, tokenReserves);

        // Execute the swap 
        i_cornDEX.swap{value: requiredETHInput}(requiredETHInput); // Swap ETH for tokens
        // Send the tokens back to Lending to repay the flash loan
        i_corn.transfer(address(i_lending), i_corn.balanceOf(address(this)));
        // Send the ETH back to the initiator
        if(address(this).balance > 0){
            (bool success, ) = payable(initiator).call{value: address(this).balance}("");
            require(success, "Failed to send ETH back to initiator");
        }

        return true;
    }

    receive() external payable {}
}