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

    event LeveragedPositionOpened(address user, uint256 loops);
    event LeveragedPositionClosed(address user, uint256 loops);

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

    /**
     * @notice Open a leveraged position, recursively borrowing CORN, swapping it for ETH, and adding it as collateral
     * @param reserve The amount of ETH that we will keep in the contract as a reserve to prevent liquidation
     */
    function openLeveragedPosition(uint256 reserve) public payable onlyOwner {
        uint256 loops = 0;
        while (true) {
            // Write more code here
            loops++;
        }
        emit LeveragedPositionOpened(msg.sender, loops);
    }

    /**
     * @notice Close a leveraged position, recursively withdrawing collateral, swapping it for CORN, and repaying the lending contract until the position is closed
     */
    function closeLeveragedPosition() public onlyOwner {
        uint256 loops = 0;
        while (true) {
            // Write more code here
            loops++;
        }
        emit LeveragedPositionClosed(msg.sender, loops);
    }

    /**
     * @notice Withdraw the ETH from the contract
     */
    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No balance to withdraw");
        (bool success, ) = payable(msg.sender).call{value: balance}("");
        require(success, "Failed to send Ether");
    }

    receive() external payable {}
}