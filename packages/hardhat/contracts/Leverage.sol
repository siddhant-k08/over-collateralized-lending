// SPDX-License-Identifier: UNLICENSE
pragma solidity ^0.8.20;

import { Lending } from "./Lending.sol";
import { CornDEX } from "./CornDEX.sol";
import { Corn } from "./Corn.sol";

/**
 * @notice This contract is used to leverage a user's position by borrowing CORN from the Lending contract
 * then borrowing more CORN from the DEX to repay the initial borrow then repeating until the user has borrowed as much as they want
 */

contract Leverage{
    Lending i_lending;
    CornDEX i_cornDEX;
    Corn i_corn;
    address public owner;

    event LeveragePositionOpened(address user, uint256 loops);
    event LeveragePositionClosed(address user, uint256 loops);

    modifier onlyOwner(){
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    constructor(address _lending, address _cornDEX, address _corn){
        i_lending = Lending(_lending);
        i_cornDEX = CornDEX(_cornDEX);
        i_corn = Corn(_corn);
        // Approve the DEX to spend the user's CORN
        i_corn.approve(address(i_cornDEX), type(uint256).max);
    }

    /**
    * @notice Claim ownership of the contract so that no one else can change your position or withdraw your funds
    */
    function claimOwnership() public {
        owner = msg.sender;
    }

}