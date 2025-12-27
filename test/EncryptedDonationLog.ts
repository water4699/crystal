import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";
import { ethers, fhevm } from "hardhat";
import { EncryptedDonationLog, EncryptedDonationLog__factory } from "../types";
import { expect } from "chai";
import { FhevmType } from "@fhevm/hardhat-plugin";

type Signers = {
  deployer: HardhatEthersSigner;
  alice: HardhatEthersSigner;
  bob: HardhatEthersSigner;
};

async function deployFixture() {
  const factory = (await ethers.getContractFactory("EncryptedDonationLog")) as EncryptedDonationLog__factory;
  const donationLogContract = (await factory.deploy()) as EncryptedDonationLog;
  const donationLogContractAddress = await donationLogContract.getAddress();

  return { donationLogContract, donationLogContractAddress };
}

describe("EncryptedDonationLog", function () {
  let signers: Signers;
  let donationLogContract: EncryptedDonationLog;
  let donationLogContractAddress: string;

  before(async function () {
    const ethSigners: HardhatEthersSigner[] = await ethers.getSigners();
    signers = { deployer: ethSigners[0], alice: ethSigners[1], bob: ethSigners[2] };
  });

  beforeEach(async function () {
    // Check whether the tests are running against an FHEVM mock environment
    if (!fhevm.isMock) {
      console.warn(`This hardhat test suite cannot run on Sepolia Testnet`);
      this.skip();
    }

    ({ donationLogContract, donationLogContractAddress } = await deployFixture());
  });

  it("should allow user to submit a donation record", async function () {
    const amount = 1000; // 1000 wei equivalent
    const timestamp = Math.floor(Date.now() / 1000);

    // Encrypt amount and timestamp
    const encryptedInput = await fhevm
      .createEncryptedInput(donationLogContractAddress, signers.alice.address)
      .add32(amount)
      .add32(timestamp)
      .encrypt();

    const tx = await donationLogContract
      .connect(signers.alice)
      .submitDonation(
        encryptedInput.handles[0],
        encryptedInput.handles[1],
        encryptedInput.inputProof
      );
    await tx.wait();

    // Check record exists
    const exists = await donationLogContract.recordExists(0);
    expect(exists).to.be.true;

    // Check metadata
    const [submitter, blockNumber] = await donationLogContract.getRecordMetadata(0);
    expect(submitter).to.eq(signers.alice.address);
    expect(blockNumber).to.be.gt(0);

    // Check user donation count
    const count = await donationLogContract.getUserDonationCount(signers.alice.address);
    expect(count).to.eq(1);
  });

  it("should allow user to retrieve their donation records", async function () {
    const amount1 = 500;
    const amount2 = 750;
    const timestamp = Math.floor(Date.now() / 1000);

    // Submit first donation
    let encryptedInput = await fhevm
      .createEncryptedInput(donationLogContractAddress, signers.alice.address)
      .add32(amount1)
      .add32(timestamp)
      .encrypt();

    let tx = await donationLogContract
      .connect(signers.alice)
      .submitDonation(
        encryptedInput.handles[0],
        encryptedInput.handles[1],
        encryptedInput.inputProof
      );
    await tx.wait();

    // Submit second donation
    encryptedInput = await fhevm
      .createEncryptedInput(donationLogContractAddress, signers.alice.address)
      .add32(amount2)
      .add32(timestamp + 1)
      .encrypt();

    tx = await donationLogContract
      .connect(signers.alice)
      .submitDonation(
        encryptedInput.handles[0],
        encryptedInput.handles[1],
        encryptedInput.inputProof
      );
    await tx.wait();

    // Check user has 2 donations
    const count = await donationLogContract.getUserDonationCount(signers.alice.address);
    expect(count).to.eq(2);

    // Get first donation ID
    const recordId0 = await donationLogContract.getUserDonationIdAt(signers.alice.address, 0);
    expect(recordId0).to.eq(0);

    // Get second donation ID
    const recordId1 = await donationLogContract.getUserDonationIdAt(signers.alice.address, 1);
    expect(recordId1).to.eq(1);
  });

  it("should allow user to decrypt their donation amount", async function () {
    const amount = 2500;
    const timestamp = Math.floor(Date.now() / 1000);

    // Submit donation
    const encryptedInput = await fhevm
      .createEncryptedInput(donationLogContractAddress, signers.alice.address)
      .add32(amount)
      .add32(timestamp)
      .encrypt();

    const tx = await donationLogContract
      .connect(signers.alice)
      .submitDonation(
        encryptedInput.handles[0],
        encryptedInput.handles[1],
        encryptedInput.inputProof
      );
    await tx.wait();

    // Get encrypted amount
    const encryptedAmount = await donationLogContract.getEncryptedAmount(0);

    // Decrypt amount
    const decryptedAmount = await fhevm.userDecryptEuint(
      FhevmType.euint32,
      encryptedAmount,
      donationLogContractAddress,
      signers.alice,
    );

    expect(decryptedAmount).to.eq(amount);
  });

  it("should allow user to decrypt their donation timestamp", async function () {
    const amount = 1000;
    const timestamp = Math.floor(Date.now() / 1000);

    // Submit donation
    const encryptedInput = await fhevm
      .createEncryptedInput(donationLogContractAddress, signers.alice.address)
      .add32(amount)
      .add32(timestamp)
      .encrypt();

    const tx = await donationLogContract
      .connect(signers.alice)
      .submitDonation(
        encryptedInput.handles[0],
        encryptedInput.handles[1],
        encryptedInput.inputProof
      );
    await tx.wait();

    // Get encrypted timestamp
    const encryptedTimestamp = await donationLogContract.getEncryptedTimestamp(0);

    // Decrypt timestamp
    const decryptedTimestamp = await fhevm.userDecryptEuint(
      FhevmType.euint32,
      encryptedTimestamp,
      donationLogContractAddress,
      signers.alice,
    );

    expect(decryptedTimestamp).to.eq(timestamp);
  });

  it("should maintain separate donation records for different users", async function () {
    const amount = 1000;
    const timestamp = Math.floor(Date.now() / 1000);

    // Alice submits donation
    let encryptedInput = await fhevm
      .createEncryptedInput(donationLogContractAddress, signers.alice.address)
      .add32(amount)
      .add32(timestamp)
      .encrypt();

    let tx = await donationLogContract
      .connect(signers.alice)
      .submitDonation(
        encryptedInput.handles[0],
        encryptedInput.handles[1],
        encryptedInput.inputProof
      );
    await tx.wait();

    // Bob submits donation
    encryptedInput = await fhevm
      .createEncryptedInput(donationLogContractAddress, signers.bob.address)
      .add32(amount * 2)
      .add32(timestamp + 1)
      .encrypt();

    tx = await donationLogContract
      .connect(signers.bob)
      .submitDonation(
        encryptedInput.handles[0],
        encryptedInput.handles[1],
        encryptedInput.inputProof
      );
    await tx.wait();

    // Check Alice has 1 donation
    const aliceCount = await donationLogContract.getUserDonationCount(signers.alice.address);
    expect(aliceCount).to.eq(1);

    // Check Bob has 1 donation
    const bobCount = await donationLogContract.getUserDonationCount(signers.bob.address);
    expect(bobCount).to.eq(1);

    // Check records are separate
    const [aliceSubmitter] = await donationLogContract.getRecordMetadata(0);
    const [bobSubmitter] = await donationLogContract.getRecordMetadata(1);
    expect(aliceSubmitter).to.eq(signers.alice.address);
    expect(bobSubmitter).to.eq(signers.bob.address);
  });

  describe("User Donation Levels", function () {
    it("Should return level 0 for users with no donations", async function () {
      const level = await donationLogContract.getUserDonationLevel(signers.alice.address);
      expect(level).to.equal(0);
    });

    it("Should have getUserDonationLevel function", async function () {
      expect(donationLogContract.getUserDonationLevel).to.be.a('function');
    });
  });
});

