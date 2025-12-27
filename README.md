# Encrypted Anonymous Donation Log

A privacy-preserving donation tracking system built with FHEVM (Fully Homomorphic Encryption Virtual Machine) by Zama. This system allows users to submit encrypted donation records that can only be decrypted by the donor themselves, ensuring complete privacy for charitable contributions.

## 🚀 Live Demo

- **Vercel Deployment**: [https://charity-gules.vercel.app/](https://charity-gules.vercel.app/)
- **Demo Video**: [Watch on GitHub](https://github.com/AdonisEliot/crystal-proof-vault/raw/main/charity.mp4)

## 📋 Contract Information

- **Sepolia Testnet Contract Address**: `0x7D43afa1E649EB6B2Af71B674227e13EEf3B09fA`
- **Network**: Sepolia Testnet
- **Blockchain**: Ethereum

## Features

- **🔐 Encrypted Donation Records**: Submit donation amounts and timestamps in encrypted form using FHEVM
- **🔑 Private Decryption**: Only the donor can decrypt and view their own donation records
- **👤 Anonymous Tracking**: Donation amounts and timestamps remain encrypted on-chain
- **🛡️ User Privacy**: Protect low-key charitable activities from social pressure or identity exposure
- **🏆 Donor Level System**: Gamified experience with Bronze, Silver, Gold, Platinum, and Diamond levels based on donation count
- **📊 Real-time Statistics**: View total donations and personal contribution statistics with level indicators
- **💾 Data Export**: Download donation history as JSON for personal record keeping
- **⚡ Performance Optimized**: Memoized filtering and sorting for large record lists
- **🛠️ Enhanced Error Handling**: User-friendly error messages with specific failure scenarios

## 🚀 Quick Start

### Prerequisites

- **Node.js**: Version 20 or higher
- **npm or yarn/pnpm**: Package manager
- **MetaMask**: For wallet connection

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/AdonisEliot/crystal-proof-vault.git
   cd crystal-proof-vault
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables** (for development)

   ```bash
   npx hardhat vars set MNEMONIC

   # Set your Infura API key for network access
   npx hardhat vars set INFURA_API_KEY

   # Optional: Set Etherscan API key for contract verification
   npx hardhat vars set ETHERSCAN_API_KEY
   ```

### 🎮 Usage

#### Option 1: Use Live Demo (Recommended)

Visit [https://charity-gules.vercel.app/](https://charity-gules.vercel.app/) to use the deployed application immediately.

#### Option 2: Run Locally

1. **Start local development**

   ```bash
   # Install frontend dependencies
   cd frontend && npm install

   # Start the development server
   npm run dev
   ```

2. **Deploy to local network**

   ```bash
   # Start a local FHEVM-ready node (in another terminal)
   npx hardhat node

   # Deploy contracts to local network
   npx hardhat deploy --network localhost
   ```

3. **Test the application**

   Open [http://localhost:3000](http://localhost:3000) in your browser and connect your MetaMask wallet.

### 🔧 Development

#### Compile and test contracts

```bash
# Compile all contracts
npm run compile

# Run all tests
npm run test

# Generate coverage report
npm run coverage
```

#### Deploy to Sepolia Testnet

```bash
# Deploy to Sepolia
npx hardhat deploy --network sepolia

# Verify contract on Etherscan
npx hardhat verify --network sepolia 0x7D43afa1E649EB6B2Af71B674227e13EEf3B09fA
```

#### Frontend Development

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🚀 Deployment

### Vercel Deployment

The application is deployed on Vercel at: [https://charity-gules.vercel.app/](https://charity-gules.vercel.app/)

**Deployment Configuration:**
- **Framework**: Next.js
- **Node Version**: 20.x
- **Build Command**: `npm run build`
- **Output Directory**: `.next`

### Smart Contract Deployment

**Sepolia Testnet:**
- **Contract Address**: `0x7D43afa1E649EB6B2Af71B674227e13EEf3B09fA`
- **Network**: Sepolia Testnet
- **Blockchain**: Ethereum
- **FHEVM Version**: Compatible with Zama FHEVM

**Local Development:**
- **Network**: Hardhat Local (Chain ID: 31337)
- **RPC URL**: `http://127.0.0.1:8545`
- **Mock Mode**: Enabled for local testing

### Contract Verification

```bash
# Verify on Etherscan
npx hardhat verify --network sepolia 0x7D43afa1E649EB6B2Af71B674227e13EEf3B09fA
```

## 🏗️ Architecture

### Technology Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Blockchain**: Ethereum (Sepolia Testnet)
- **Smart Contracts**: Solidity ^0.8.24, FHEVM (Fully Homomorphic Encryption)
- **Wallet Integration**: RainbowKit, Wagmi, MetaMask
- **Build Tools**: Hardhat, ESLint, Prettier
- **Deployment**: Vercel, Hardhat

### Smart Contract Features

- **FHE Encryption**: Uses Zama's FHEVM for homomorphic encryption
- **Access Control**: Only contract owner can modify settings
- **Donation Tracking**: Encrypted amount and timestamp storage
- **User Levels**: Gamification system based on donation count
- **Event Logging**: Comprehensive event emission for transparency

### Frontend Features

- **Wallet Connection**: MetaMask integration with multiple network support
- **Real-time Updates**: Live donation statistics and level tracking
- **Data Export**: JSON export functionality for donation records
- **Responsive Design**: Mobile-first design with dark/light theme
- **Error Handling**: User-friendly error messages and validation

## 📁 Project Structure

```
crystal-proof-vault/
├── contracts/                    # Smart contract source files
│   └── EncryptedDonationLog.sol  # Main donation log contract
├── deploy/                       # Deployment scripts
├── tasks/                        # Hardhat custom tasks
├── test/                         # Test files with FHEVM integration
├── frontend/                     # Next.js frontend application
│   ├── app/                      # Next.js 14 app directory
│   ├── components/               # React components
│   ├── config/                   # Wagmi and wallet configuration
│   ├── hooks/                    # Custom React hooks
│   └── abi/                      # Contract ABIs and addresses
├── artifacts/                    # Compiled contract artifacts
├── types/                        # TypeScript type definitions
├── hardhat.config.ts            # Hardhat configuration
├── vercel.json                  # Vercel deployment config
├── package.json                 # Dependencies and scripts
└── README.md                    # Project documentation
```

## 🧪 Testing

### Contract Testing

```bash
# Run all contract tests
npm run test

# Run specific test file
npx hardhat test test/EncryptedDonationLog.ts

# Run tests with gas reporting
npx hardhat test --gas

# Run tests on Sepolia fork (requires INFURA_API_KEY)
npx hardhat test --network sepolia
```

### Frontend Testing

```bash
cd frontend

# Run development server
npm run dev

# Build for production
npm run build

# Type checking
npm run type-check

# Linting
npm run lint
```

## 📜 Available Scripts

### Root Level Scripts

| Script             | Description                          |
| ------------------ | ------------------------------------ |
| `npm run compile`  | Compile all smart contracts          |
| `npm run test`     | Run contract tests with FHEVM        |
| `npm run coverage` | Generate test coverage report        |
| `npm run lint`     | Run ESLint and Solidity linting      |
| `npm run clean`    | Clean build artifacts and cache      |

### Frontend Scripts (in `frontend/` directory)

| Script             | Description                          |
| ------------------ | ------------------------------------ |
| `npm run dev`      | Start development server             |
| `npm run build`    | Build for production                 |
| `npm run start`    | Start production server              |
| `npm run type-check` | Run TypeScript type checking       |
| `npm run lint`     | Run ESLint checks                    |

## 📚 Documentation

### FHEVM Resources
- [FHEVM Documentation](https://docs.zama.ai/fhevm)
- [FHEVM Hardhat Setup Guide](https://docs.zama.ai/protocol/solidity-guides/getting-started/setup)
- [FHEVM Testing Guide](https://docs.zama.ai/protocol/solidity-guides/development-guide/hardhat/write_test)
- [FHEVM Hardhat Plugin](https://docs.zama.ai/protocol/solidity-guides/development-guide/hardhat)

### Project Documentation
- [Smart Contract API](contracts/EncryptedDonationLog.sol) - Main contract with detailed comments
- [Frontend Components](frontend/components/) - React components documentation
- [Deployment Guide](README.md#deployment) - Complete deployment instructions

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the BSD-3-Clause-Clear License. See the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **GitHub Issues**: [Report bugs or request features](https://github.com/AdonisEliot/crystal-proof-vault/issues)
- **FHEVM Documentation**: [Zama Docs](https://docs.zama.ai)
- **Community**: [Zama Discord](https://discord.gg/zama)

---

**Built with ❤️ using Zama FHEVM**

