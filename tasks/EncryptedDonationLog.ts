import { FhevmType } from "@fhevm/hardhat-plugin";
import { task } from "hardhat/config";
import type { TaskArguments } from "hardhat/types";

/**
 * Tutorial: Deploy and Interact Locally (--network localhost)
 * ===========================================================
 *
 * 1. From a separate terminal window:
 *
 *   npx hardhat node
 *
 * 2. Deploy the EncryptedDonationLog contract
 *
 *   npx hardhat --network localhost deploy
 *
 * 3. Interact with the EncryptedDonationLog contract
 *
 *   npx hardhat --network localhost task:submit-donation --amount 1000 --timestamp 1234567890
 *   npx hardhat --network localhost task:get-user-donations
 *   npx hardhat --network localhost task:decrypt-donation --recordId 0
 *
 *
 * Tutorial: Deploy and Interact on Sepolia (--network sepolia)
 * ===========================================================
 *
 * 1. Deploy the EncryptedDonationLog contract
 *
 *   npx hardhat --network sepolia deploy
 *
 * 2. Interact with the EncryptedDonationLog contract
 *
 *   npx hardhat --network sepolia task:submit-donation --amount 1000 --timestamp 1234567890
 *   npx hardhat --network sepolia task:get-user-donations
 *   npx hardhat --network sepolia task:decrypt-donation --recordId 0
 *
 */

/**
 * Example:
 *   - npx hardhat --network localhost task:address
 *   - npx hardhat --network sepolia task:address
 */
task("task:address", "Prints the EncryptedDonationLog address").setAction(async function (_taskArguments: TaskArguments, hre) {
  const { deployments } = hre;

  const donationLog = await deployments.get("EncryptedDonationLog");

  console.log("EncryptedDonationLog address is " + donationLog.address);
});

/**
 * Example:
 *   - npx hardhat --network localhost task:submit-donation --amount 1000 --timestamp 1234567890
 *   - npx hardhat --network sepolia task:submit-donation --amount 1000 --timestamp 1234567890
 */
task("task:submit-donation", "Submits a new encrypted donation record")
  .addOptionalParam("address", "Optionally specify the EncryptedDonationLog contract address")
  .addParam("amount", "The donation amount")
  .addParam("timestamp", "The donation timestamp")
  .setAction(async function (taskArguments: TaskArguments, hre) {
    const { ethers, deployments, fhevm } = hre;

    const amount = parseInt(taskArguments.amount);
    const timestamp = parseInt(taskArguments.timestamp);
    if (!Number.isInteger(amount) || !Number.isInteger(timestamp)) {
      throw new Error(`Arguments --amount and --timestamp must be integers`);
    }

    await fhevm.initializeCLIApi();

    const EncryptedDonationLogDeployment = taskArguments.address
      ? { address: taskArguments.address }
      : await deployments.get("EncryptedDonationLog");
    console.log(`EncryptedDonationLog: ${EncryptedDonationLogDeployment.address}`);

    const signers = await ethers.getSigners();

    const donationLogContract = await ethers.getContractAt("EncryptedDonationLog", EncryptedDonationLogDeployment.address);

    // Encrypt the amount and timestamp
    const encryptedInput = await fhevm
      .createEncryptedInput(EncryptedDonationLogDeployment.address, signers[0].address)
      .add32(amount)
      .add32(timestamp)
      .encrypt();

    const tx = await donationLogContract
      .connect(signers[0])
      .submitDonation(encryptedInput.handles[0], encryptedInput.handles[1], encryptedInput.inputProof);
    console.log(`Wait for tx:${tx.hash}...`);

    const receipt = await tx.wait();
    console.log(`tx:${tx.hash} status=${receipt?.status}`);

    const count = await donationLogContract.getUserDonationCount(signers[0].address);
    console.log(`User donation count: ${count}`);

    console.log(`EncryptedDonationLog submitDonation(amount=${amount}, timestamp=${timestamp}) succeeded!`);
  });

/**
 * Example:
 *   - npx hardhat --network localhost task:get-user-donations
 *   - npx hardhat --network sepolia task:get-user-donations
 */
task("task:get-user-donations", "Gets all donation record IDs for the current user")
  .addOptionalParam("address", "Optionally specify the EncryptedDonationLog contract address")
  .setAction(async function (taskArguments: TaskArguments, hre) {
    const { ethers, deployments } = hre;

    const EncryptedDonationLogDeployment = taskArguments.address
      ? { address: taskArguments.address }
      : await deployments.get("EncryptedDonationLog");
    console.log(`EncryptedDonationLog: ${EncryptedDonationLogDeployment.address}`);

    const signers = await ethers.getSigners();

    const donationLogContract = await ethers.getContractAt("EncryptedDonationLog", EncryptedDonationLogDeployment.address);

    const count = await donationLogContract.getUserDonationCount(signers[0].address);
    console.log(`User donation count: ${count}`);

    for (let i = 0; i < count; i++) {
      const recordId = await donationLogContract.getUserDonationIdAt(signers[0].address, i);
      const [submitter, blockNumber] = await donationLogContract.getRecordMetadata(recordId);
      console.log(`Record ${i}: ID=${recordId}, Submitter=${submitter}, BlockNumber=${blockNumber}`);
    }
  });

/**
 * Example:
 *   - npx hardhat --network localhost task:decrypt-donation --recordId 0
 *   - npx hardhat --network sepolia task:decrypt-donation --recordId 0
 */
task("task:decrypt-donation", "Decrypts a donation record")
  .addOptionalParam("address", "Optionally specify the EncryptedDonationLog contract address")
  .addParam("recordId", "The record ID to decrypt")
  .setAction(async function (taskArguments: TaskArguments, hre) {
    const { ethers, deployments, fhevm } = hre;

    const recordId = parseInt(taskArguments.recordId);
    if (!Number.isInteger(recordId)) {
      throw new Error(`Argument --recordId must be an integer`);
    }

    await fhevm.initializeCLIApi();

    const EncryptedDonationLogDeployment = taskArguments.address
      ? { address: taskArguments.address }
      : await deployments.get("EncryptedDonationLog");
    console.log(`EncryptedDonationLog: ${EncryptedDonationLogDeployment.address}`);

    const signers = await ethers.getSigners();

    const donationLogContract = await ethers.getContractAt("EncryptedDonationLog", EncryptedDonationLogDeployment.address);

    const encryptedAmount = await donationLogContract.getEncryptedAmount(recordId);
    const encryptedTimestamp = await donationLogContract.getEncryptedTimestamp(recordId);

    console.log(`Decrypting record ${recordId}...`);

    const clearAmount = await fhevm.userDecryptEuint(
      FhevmType.euint32,
      encryptedAmount,
      EncryptedDonationLogDeployment.address,
      signers[0],
    );

    const clearTimestamp = await fhevm.userDecryptEuint(
      FhevmType.euint32,
      encryptedTimestamp,
      EncryptedDonationLogDeployment.address,
      signers[0],
    );

    console.log(`Record ${recordId} decrypted:`);
    console.log(`  Amount: ${clearAmount}`);
    console.log(`  Timestamp: ${clearTimestamp}`);
  });

