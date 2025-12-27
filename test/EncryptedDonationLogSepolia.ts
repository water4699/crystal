import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";
import { ethers, fhevm, deployments } from "hardhat";
import { EncryptedDonationLog } from "../types";
import { expect } from "chai";
import { FhevmType } from "@fhevm/hardhat-plugin";

type Signers = {
  alice: HardhatEthersSigner;
};

describe("EncryptedDonationLogSepolia", function () {
  let signers: Signers;
  let donationLogContract: EncryptedDonationLog;
  let donationLogContractAddress: string;
  let step: number;
  let steps: number;

  function progress(message: string) {
    console.log(`${++step}/${steps} ${message}`);
  }

  before(async function () {
    if (fhevm.isMock) {
      console.warn(`This hardhat test suite can only run on Sepolia Testnet`);
      this.skip();
    }

    try {
      const EncryptedDonationLogDeployment = await deployments.get("EncryptedDonationLog");
      donationLogContractAddress = EncryptedDonationLogDeployment.address;
      donationLogContract = await ethers.getContractAt("EncryptedDonationLog", EncryptedDonationLogDeployment.address);
    } catch (e) {
      (e as Error).message += ". Call 'npx hardhat deploy --network sepolia'";
      throw e;
    }

    const ethSigners: HardhatEthersSigner[] = await ethers.getSigners();
    signers = { alice: ethSigners[0] };
  });

  beforeEach(async () => {
    step = 0;
    steps = 0;
  });

  it("should submit and decrypt a donation record on Sepolia", async function () {
    steps = 8;

    this.timeout(4 * 40000);

    const amount = 1000;
    const timestamp = Math.floor(Date.now() / 1000);

    progress(`Encrypting amount=${amount} and timestamp=${timestamp}...`);
    const encryptedInput = await fhevm
      .createEncryptedInput(donationLogContractAddress, signers.alice.address)
      .add32(amount)
      .add32(timestamp)
      .encrypt();

    progress(
      `Call submitDonation() EncryptedDonationLog=${donationLogContractAddress} signer=${signers.alice.address}...`,
    );
    let tx = await donationLogContract
      .connect(signers.alice)
      .submitDonation(
        encryptedInput.handles[0],
        encryptedInput.handles[1],
        encryptedInput.inputProof
      );
    await tx.wait();

    progress(`Call getUserDonationCount()...`);
    const count = await donationLogContract.getUserDonationCount(signers.alice.address);
    expect(count).to.be.gt(0);

    const recordId = await donationLogContract.getUserDonationIdAt(signers.alice.address, count - 1n);

    progress(`Call getEncryptedAmount(recordId=${recordId})...`);
    const encryptedAmount = await donationLogContract.getEncryptedAmount(recordId);
    expect(encryptedAmount).to.not.eq(ethers.ZeroHash);

    progress(`Decrypting encryptedAmount=${encryptedAmount}...`);
    const clearAmount = await fhevm.userDecryptEuint(
      FhevmType.euint32,
      encryptedAmount,
      donationLogContractAddress,
      signers.alice,
    );
    progress(`Clear amount=${clearAmount}`);

    progress(`Call getEncryptedTimestamp(recordId=${recordId})...`);
    const encryptedTimestamp = await donationLogContract.getEncryptedTimestamp(recordId);

    progress(`Decrypting encryptedTimestamp=${encryptedTimestamp}...`);
    const clearTimestamp = await fhevm.userDecryptEuint(
      FhevmType.euint32,
      encryptedTimestamp,
      donationLogContractAddress,
      signers.alice,
    );
    progress(`Clear timestamp=${clearTimestamp}`);

    expect(clearAmount).to.eq(amount);
    expect(clearTimestamp).to.eq(timestamp);
  });
});

