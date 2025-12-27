// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {FHE, euint32, externalEuint32} from "@fhevm/solidity/lib/FHE.sol";
import {SepoliaConfig} from "@fhevm/solidity/config/ZamaConfig.sol";

/// @title Encrypted Anonymous Donation Log
/// @notice A contract for storing encrypted donation records that can only be decrypted by the donor
/// @author Encrypted Donation Log MVP
contract EncryptedDonationLog is SepoliaConfig {
    /// @notice Contract constructor
    constructor() {
        owner = msg.sender;
        paused = false;
        minimumDonationAmount = 1; // Default minimum donation of 1 unit
        maximumDonationAmount = 10000; // Default maximum donation of 10000 units
    }

    /// @notice Modifier to check if contract is not paused
    modifier whenNotPaused() {
        require(!paused, "Contract is paused");
        _;
    }

    /// @notice Modifier to check if caller is owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }
    struct DonationRecord {
        address submitter;
        euint32 encryptedAmount;  // Encrypted donation amount
        euint32 encryptedTimestamp; // Encrypted timestamp
        uint256 blockNumber;       // Public block number for reference
        bool exists;
    }

    uint256 public nextRecordId;
    mapping(uint256 => DonationRecord) public records;
    mapping(address => uint256[]) public userDonations; // user address -> record IDs

    bool public paused;
    address public owner;
    uint256 public minimumDonationAmount;
    uint256 public maximumDonationAmount;

    event DonationSubmitted(uint256 indexed recordId, address indexed submitter, uint256 blockNumber);
    event DonationDecrypted(uint256 indexed recordId, address indexed viewer);
    event ContractPaused(address indexed account);
    event ContractUnpaused(address indexed account);
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);
    event MinimumDonationAmountChanged(address indexed changer, uint256 newAmount);
    event MaximumDonationAmountChanged(address indexed changer, uint256 newAmount);

    /// @notice Pause the contract (only owner)
    function pause() external onlyOwner {
        paused = true;
        emit ContractPaused(msg.sender);
    }

    /// @notice Unpause the contract (only owner)
    function unpause() external onlyOwner {
        paused = false;
        emit ContractUnpaused(msg.sender);
    }

    /// @notice Transfer ownership to a new address (only owner)
    /// @param newOwner The address of the new owner
    function transferOwnership(address newOwner) external onlyOwner {
        require(newOwner != address(0), "New owner cannot be zero address");
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
    }

    /// @notice Set minimum donation amount (only owner)
    /// @param newMinimum The new minimum donation amount
    function setMinimumDonationAmount(uint256 newMinimum) external onlyOwner {
        require(newMinimum <= maximumDonationAmount, "Minimum cannot exceed maximum");
        minimumDonationAmount = newMinimum;
        emit MinimumDonationAmountChanged(owner, newMinimum);
    }

    /// @notice Set maximum donation amount (only owner)
    /// @param newMaximum The new maximum donation amount
    function setMaximumDonationAmount(uint256 newMaximum) external onlyOwner {
        require(newMaximum >= minimumDonationAmount, "Maximum cannot be less than minimum");
        maximumDonationAmount = newMaximum;
        emit MaximumDonationAmountChanged(owner, newMaximum);
    }

    /// @notice Submit a new encrypted donation record
    /// @param encryptedAmount The encrypted donation amount
    /// @param encryptedTimestamp The encrypted timestamp
    /// @param inputProof The input proof for the encrypted values
    /// @return recordId The ID of the newly created record
    function submitDonation(
        externalEuint32 encryptedAmount,
        externalEuint32 encryptedTimestamp,
        bytes calldata inputProof
    ) external whenNotPaused returns (uint256 recordId) {
        // Note: Maximum donation validation should be performed on frontend
        // as amounts are encrypted and cannot be validated on-chain
        recordId = nextRecordId++;
        
        DonationRecord storage record = records[recordId];
        record.submitter = msg.sender;
        record.blockNumber = block.number;
        record.exists = true;

        // Import encrypted amount
        record.encryptedAmount = FHE.fromExternal(encryptedAmount, inputProof);
        FHE.allowThis(record.encryptedAmount);
        FHE.allow(record.encryptedAmount, msg.sender);

        // Import encrypted timestamp
        record.encryptedTimestamp = FHE.fromExternal(encryptedTimestamp, inputProof);
        FHE.allowThis(record.encryptedTimestamp);
        FHE.allow(record.encryptedTimestamp, msg.sender);

        // Index by user
        userDonations[msg.sender].push(recordId);

        emit DonationSubmitted(recordId, msg.sender, block.number);
    }

    /// @notice Get the encrypted amount for a donation record
    /// @param recordId The ID of the donation record
    /// @return The encrypted amount
    function getEncryptedAmount(uint256 recordId) external view returns (euint32) {
        require(records[recordId].exists, "Record does not exist");
        return records[recordId].encryptedAmount;
    }

    /// @notice Get the encrypted timestamp for a donation record
    /// @param recordId The ID of the donation record
    /// @return The encrypted timestamp
    function getEncryptedTimestamp(uint256 recordId) external view returns (euint32) {
        require(records[recordId].exists, "Record does not exist");
        return records[recordId].encryptedTimestamp;
    }

    /// @notice Get metadata for a donation record (public information)
    /// @param recordId The ID of the donation record
    /// @return submitter The address that submitted the donation
    /// @return blockNumber The block number when the donation was submitted
    function getRecordMetadata(uint256 recordId) external view returns (address submitter, uint256 blockNumber) {
        require(records[recordId].exists, "Record does not exist");
        DonationRecord storage record = records[recordId];
        return (record.submitter, record.blockNumber);
    }

    /// @notice Get the number of donations submitted by a user
    /// @param user The user address
    /// @return The number of donations
    function getUserDonationCount(address user) external view returns (uint256) {
        return userDonations[user].length;
    }

    /// @notice Get a donation record ID for a user at a specific index
    /// @param user The user address
    /// @param index The index in the user's donation list
    /// @return The record ID
    function getUserDonationIdAt(address user, uint256 index) external view returns (uint256) {
        require(index < userDonations[user].length, "Index out of bounds");
        return userDonations[user][index];
    }

    /// @notice Check if a record exists
    /// @param recordId The ID of the donation record
    /// @return Whether the record exists
    function recordExists(uint256 recordId) external view returns (bool) {
        return records[recordId].exists;
    }

    /// @notice Get total number of donations made
    /// @return The total count of donation records
    function getTotalDonationCount() external view returns (uint256) {
        return nextRecordId;
    }

    /// @notice Get donation statistics for a user
    /// @param user The user address to query
    /// @return totalDonations The total number of donations by this user
    /// @return lastDonationId The ID of the user's last donation (0 if no donations)
    function getUserDonationStats(address user) external view returns (uint256 totalDonations, uint256 lastDonationId) {
        uint256[] memory userRecordIds = userDonations[user];
        totalDonations = userRecordIds.length;

        if (totalDonations > 0) {
            lastDonationId = userRecordIds[totalDonations - 1];
        } else {
            lastDonationId = 0;
        }
    }

    /// @notice Get user donation level based on total donations
    /// @param user The user address to query
    /// @return level The donation level (1-5 based on donation count)
    function getUserDonationLevel(address user) external view returns (uint256 level) {
        uint256 donationCount = userDonations[user].length;

        if (donationCount >= 50) return 5;      // Diamond donor
        if (donationCount >= 25) return 4;      // Platinum donor
        if (donationCount >= 10) return 3;      // Gold donor
        if (donationCount >= 5) return 2;       // Silver donor
        if (donationCount >= 1) return 1;       // Bronze donor

        return 0; // No donations
    }

    /// @notice Get multiple donation record IDs for a user with pagination
    /// @param user The user address to query
    /// @param offset The starting index for pagination
    /// @param limit The maximum number of records to return
    /// @return recordIds Array of donation record IDs for the user
    function getUserDonationIdsPaginated(address user, uint256 offset, uint256 limit) external view returns (uint256[] memory recordIds) {
        uint256[] memory userRecordIds = userDonations[user];
        uint256 totalRecords = userRecordIds.length;

        if (offset >= totalRecords) {
            return new uint256[](0);
        }

        uint256 endIndex = offset + limit;
        if (endIndex > totalRecords) {
            endIndex = totalRecords;
        }

        uint256 resultLength = endIndex - offset;
        recordIds = new uint256[](resultLength);

        for (uint256 i = 0; i < resultLength; i++) {
            recordIds[i] = userRecordIds[offset + i];
        }
    }

    /// @notice Get batch metadata for multiple donation records
    /// @param recordIds Array of record IDs to query
    /// @return submitters Array of submitter addresses
    /// @return blockNumbers Array of block numbers
    /// @return exists Array indicating which records exist
    function getBatchRecordMetadata(uint256[] calldata recordIds) external view returns (
        address[] memory submitters,
        uint256[] memory blockNumbers,
        bool[] memory exists
    ) {
        uint256 length = recordIds.length;
        submitters = new address[](length);
        blockNumbers = new uint256[](length);
        exists = new bool[](length);

        for (uint256 i = 0; i < length; i++) {
            uint256 recordId = recordIds[i];
            DonationRecord storage record = records[recordId];

            exists[i] = record.exists;
            if (record.exists) {
                submitters[i] = record.submitter;
                blockNumbers[i] = record.blockNumber;
            }
        }
    }
}

