import { execSync } from "child_process";
import * as fs from "fs";
import * as path from "path";

const CONTRACT_NAME = "EncryptedDonationLog";

// <root>/packages/fhevm-hardhat-template
const rel = "..";

// <root>/packages/site/components
const outdir = path.resolve("./abi");

if (!fs.existsSync(outdir)) {
  fs.mkdirSync(outdir);
}

const dir = path.resolve(rel);
const dirname = path.basename(dir);

const line =
  "\n===================================================================\n";

if (!fs.existsSync(dir)) {
  console.error(
    `${line}Unable to locate ${rel}. Expecting <root>/packages/${dirname}${line}`
  );
  process.exit(1);
}

if (!fs.existsSync(outdir)) {
  console.error(`${line}Unable to locate ${outdir}.${line}`);
  process.exit(1);
}

const deploymentsDir = path.join(dir, "deployments");

function deployOnHardhatNode() {
  if (process.platform === "win32") {
    // Not supported on Windows
    return;
  }
  try {
    execSync(`./deploy-hardhat-node.sh`, {
      cwd: path.resolve("./scripts"),
      stdio: "inherit",
    });
  } catch (e) {
    console.error(`${line}Script execution failed: ${e}${line}`);
    process.exit(1);
  }
}

function readDeployment(chainName, chainId, contractName, optional) {
  const chainDeploymentDir = path.join(deploymentsDir, chainName);
  const skipHardhatCheck = process.env.SKIP_HARDHAT_CHECK === 'true';

  if (!fs.existsSync(chainDeploymentDir) && chainId === 31337 && !skipHardhatCheck) {
    // Try to auto-deploy the contract on hardhat node!
    deployOnHardhatNode();
  }

  if (!fs.existsSync(chainDeploymentDir)) {
    if (skipHardhatCheck && optional) {
      // In build environment, use fallback for missing deployments
      console.warn(`[genabi] Deployment not found for ${chainName}, using fallback (build mode)`);
      return undefined;
    }
    console.error(
      `${line}Unable to locate '${chainDeploymentDir}' directory.\n\n1. Goto '${dirname}' directory\n2. Run 'npx hardhat deploy --network ${chainName}'.${line}`
    );
    if (!optional) {
      process.exit(1);
    }
    return undefined;
  }

  const jsonString = fs.readFileSync(
    path.join(chainDeploymentDir, `${contractName}.json`),
    "utf-8"
  );

  const obj = JSON.parse(jsonString);
  obj.chainId = chainId;

  return obj;
}

// Auto deployed on Linux/Mac (will fail on windows)
// In build environments (SKIP_HARDHAT_CHECK), make localhost optional
const skipHardhatCheck = process.env.SKIP_HARDHAT_CHECK === 'true';
let deployLocalhost = readDeployment("localhost", 31337, CONTRACT_NAME, skipHardhatCheck /* optional in build mode */);

// Sepolia is optional
let deploySepolia = readDeployment("sepolia", 11155111, CONTRACT_NAME, true /* optional */);
if (!deploySepolia) {
  // Try to read ABI from artifacts if deployment file doesn't exist
  const artifactsPath = path.join(dir, "artifacts", "contracts", `${CONTRACT_NAME}.sol`, `${CONTRACT_NAME}.json`);
  let abi = [];
  if (fs.existsSync(artifactsPath)) {
    try {
      const artifactContent = fs.readFileSync(artifactsPath, "utf-8");
      const artifact = JSON.parse(artifactContent);
      abi = artifact.abi || [];
      console.log("[genabi] Using ABI from artifacts");
    } catch (e) {
      console.warn("[genabi] Failed to read ABI from artifacts:", e.message);
    }
  }
  
  // Use localhost ABI if available and artifacts ABI is empty
  if (abi.length === 0 && deployLocalhost) {
    abi = deployLocalhost.abi;
  }
  
  // Use actual Sepolia deployment address for production builds
  const sepoliaAddress = "0x7D43afa1E649EB6B2Af71B674227e13EEf3B09fA";
  
  // If ABI is still empty, try to read from deployments/sepolia if it exists
  if (abi.length === 0) {
    const sepoliaDeploymentPath = path.join(deploymentsDir, "sepolia", `${CONTRACT_NAME}.json`);
    if (fs.existsSync(sepoliaDeploymentPath)) {
      try {
        const deploymentContent = fs.readFileSync(sepoliaDeploymentPath, "utf-8");
        const deployment = JSON.parse(deploymentContent);
        abi = deployment.abi || [];
        console.log("[genabi] Using ABI from Sepolia deployment file");
      } catch (e) {
        console.warn("[genabi] Failed to read Sepolia deployment:", e.message);
      }
    }
  }
  
  deploySepolia = { abi: abi, address: sepoliaAddress };
  console.warn(`[genabi] Using Sepolia address ${sepoliaAddress} with ${abi.length > 0 ? 'ABI' : 'empty ABI'}`);
}

// Handle case where localhost deployment doesn't exist (e.g., in Vercel build)
if (!deployLocalhost) {
  console.warn("[genabi] Localhost deployment not found, using Sepolia deployment or fallback");
  if (deploySepolia && deploySepolia.abi && deploySepolia.abi.length > 0) {
    // Use Sepolia deployment as fallback
    deployLocalhost = { abi: deploySepolia.abi, address: "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0" };
  } else {
    // Last resort: use empty ABI
    deployLocalhost = { abi: [], address: "0x0000000000000000000000000000000000000000" };
  }
}

if (deployLocalhost && deploySepolia) {
  if (
    JSON.stringify(deployLocalhost.abi) !== JSON.stringify(deploySepolia.abi)
  ) {
    console.error(
      `${line}Deployments on localhost and Sepolia differ. Cant use the same abi on both networks. Consider re-deploying the contracts on both networks.${line}`
    );
    process.exit(1);
  }
}


const tsCode = `
/*
  This file is auto-generated.
  Command: 'npm run genabi'
*/
export const ${CONTRACT_NAME}ABI = ${JSON.stringify({ abi: deployLocalhost.abi }, null, 2)} as const;
\n`;
const tsAddresses = `
/*
  This file is auto-generated.
  Command: 'npm run genabi'
*/
export const ${CONTRACT_NAME}Addresses: {
  [chainId: string]: { address: string; chainId: number; chainName: string } | undefined;
} = { 
  "11155111": { address: "${deploySepolia.address}", chainId: 11155111, chainName: "sepolia" },
  "31337": { address: "${deployLocalhost.address}", chainId: 31337, chainName: "hardhat" },
};
`;

console.log(`Generated ${path.join(outdir, `${CONTRACT_NAME}ABI.ts`)}`);
console.log(`Generated ${path.join(outdir, `${CONTRACT_NAME}Addresses.ts`)}`);
console.log(tsAddresses);

fs.writeFileSync(path.join(outdir, `${CONTRACT_NAME}ABI.ts`), tsCode, "utf-8");
fs.writeFileSync(
  path.join(outdir, `${CONTRACT_NAME}Addresses.ts`),
  tsAddresses,
  "utf-8"
);

