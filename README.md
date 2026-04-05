# 🌊 OracleFi

[
[
[
[

> **Dynamic APY Staking Protocol** - Next-generation DeFi infrastructure powered by oracle price feeds on Sui blockchain.

🎥 **[Live Demo](https://your-vercel-url.vercel.app)** | 📖 **[Documentation](#)** | 🏆 **BermuDAO Hackathon 2026**

---

## 📋 Table of Contents

- [Problem & Solution](#-problem--solution)
- [Key Features](#-key-features)
- [Technical Architecture](#-technical-architecture)
- [Quick Start](#-quick-start)
- [Smart Contract API](#-smart-contract-api)
- [Deployment](#-deployment)
- [Roadmap](#️-roadmap)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 Problem & Solution

### The Problem

Traditional DeFi staking protocols suffer from:

- 📌 **Fixed APY rates** that ignore market dynamics
- 💸 **Poor capital efficiency** during volatile periods
- 🔒 **Opaque reward calculations** lacking transparency
- ⚠️ **Manual adjustments** requiring governance overhead

### Our Solution

**OracleFi** introduces **Dynamic APY Mechanism**:

```
APY Rate = f(Token Price)
```

| Token Price | APY Rate | Example               |
| ----------- | -------- | --------------------- |
| 💰 $0.50    | 5%       | Bear market incentive |
| 📊 $2.50    | 12.5%    | Balanced growth       |
| 🚀 $5.00    | 20%      | Bull market rewards   |

✅ Automatic adjustment based on real-time oracle feeds  
✅ Transparent on-chain calculation  
✅ No governance delays  
✅ Capital-efficient reward distribution

---

## ✨ Key Features

### 🔄 Dynamic APY Engine

- Real-time APY calculation (5%-20% range)
- Oracle-driven price feeds (OC/USD)
- Automatic rate adjustment algorithm
- Transparent on-chain logic

### 🏛️ Multi-Oracle Registry

- Extensible oracle architecture
- Pay-to-register model (0.1 OC fee)
- Dynamic Object Field (DOF) pattern
- Ready for Pyth/Supra integration

### 🔐 Three-Tier Permission System

- **SuperAdminCap**: Protocol-level control
- **AdminCap**: Operational management (Pool Admin / Oracle Admin)
- **User**: Stake/withdraw/claim permissions

### 🌍 Internationalization (i18n)

- 🇺🇸 English
- 🇹🇼 繁體中文
- Seamless language switching
- Persistent user preference

### 🎨 Modern UI/UX

- Responsive design (mobile-first)
- Dark theme optimized
- Real-time data updates
- Smooth animations & transitions
- shadcn/ui component library

---

## 🏗️ Technical Architecture

### Smart Contract Stack

```
┌─────────────────────────────────────────────────┐
│                  Frontend DApp                  │
│           Next.js 14 + TypeScript               │
└────────────┬────────────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────────────┐
│              Sui Blockchain                     │
│                                                 │
│  ┌──────────────┐                               │
│  │ oracle_coin  │ ◄─── OC Token (9 decimals)   │
│  └──────┬───────┘                               │
│         │                                        │
│         ▼                                        │
│  ┌──────────────┐                               │
│  │price_oracle  │ ◄─── Price feed management    │
│  └──────┬───────┘                               │
│         │                                        │
│         ▼                                        │
│  ┌───────────────────┐                          │
│  │multi_oracle_reg   │ ◄─── Registry + DOF      │
│  └──────┬────────────┘                          │
│         │                                        │
│         ▼                                        │
│  ┌──────────────┐                               │
│  │staking_pool  │ ◄─── Core staking logic       │
│  └──────────────┘                               │
│                                                 │
└─────────────────────────────────────────────────┘
```

### Technology Stack

| Layer                    | Technology                                                                 |
| ------------------------ | -------------------------------------------------------------------------- |
| **Blockchain**           | Sui (Move language)                                                        |
| **Smart Contracts**      | 4 modules (oracle_coin, price_oracle, multi_oracle_registry, staking_pool) |
| **Frontend**             | Next.js 14 (App Router)                                                    |
| **Language**             | TypeScript 5                                                               |
| **Styling**              | Tailwind CSS 3.4                                                           |
| **UI Components**        | shadcn/ui + Radix UI                                                       |
| **State Management**     | React Query (TanStack Query)                                               |
| **Wallet Integration**   | @mysten/dapp-kit                                                           |
| **Internationalization** | next-intl                                                                  |
| **Deployment**           | Vercel                                                                     |

### On-Chain Deployment

```bash
Network:    Sui Testnet
Chain ID:   4c78adac
Original Package ID: 0x81f67b5daa91e9f49c24753d6423b87a02b449aa0ce1125cba194afd10397b15
Latest Package ID: 0xe7673dda5fed10f5d52a8f960a8f8d48a762685228dbf1e74c7c81ee92668eb7 (v3)

Pool ID:       0xda1b01ce2583ba48c59621135e7784ca2fa53ec51f581f7967c3760e7037f7a6
Registry ID:   0x359ec6fb71edfa7bdf3fcfe348633f823753b722e03a4fa2d6df758bf246c0f4
Faucet State:  0xbd1c5cf27b4b2f40ec3743d567a6f428eb09e186a0eadfd87fdb24f32c8995f3
```

---

## 🚀 Quick Start

### Prerequisites

- [Sui CLI](https://docs.sui.io/build/install) `>= 1.68.1`
- [Node.js](https://nodejs.org/) `>= 18.0.0`
- [Sui Wallet Extension](https://chrome.google.com/webstore/detail/sui-wallet)

### Installation

```bash
# 1. Clone repository
git clone https://github.com/repotecJC/OracleFi.git
cd OracleFi

# 2. Install frontend dependencies
cd frontend
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Connect to Testnet

1. Install **Sui Wallet** browser extension
2. Switch network to **Testnet**
3. Get test SUI from [Discord faucet](https://discord.com/channels/916379725201563759/971488439931392130)
4. Visit OracleFi and click **"Connect Wallet"**

---

## 📊 Smart Contract API

### 👤 User Functions

#### Stake Tokens

```move
public fun stake(
    pool: &mut StakingPool,
    registry: &OracleRegistry,
    coin: Coin<ORACLE_COIN>,
    ctx: &mut TxContext
)
```

Stake OC tokens to earn dynamic APY rewards.

#### Withdraw Tokens

```move
public fun withdraw(
    pool: &mut StakingPool,
    registry: &OracleRegistry,
    amount: u64,
    ctx: &mut TxContext
): Coin<ORACLE_COIN>
```

Withdraw staked tokens anytime without penalty.

#### Claim Rewards

```move
public fun claim_reward(
    pool: &mut StakingPool,
    registry: &OracleRegistry,
    ctx: &mut TxContext
): Coin<ORACLE_COIN>
```

Claim accumulated rewards based on dynamic APY.

#### Query Functions

```move
// Get user's staked amount
public fun get_stake_amount(pool: &StakingPool, user: address): u64

// Get pending rewards
public fun get_pending_rewards(
    pool: &StakingPool,
    registry: &OracleRegistry,
    user: address,
    ctx: &TxContext
): u64

// Get total pool staked
public fun get_total_staked(pool: &StakingPool): u64
```

#### Public Faucet
```move
public entry fun faucet(
    state: &mut FaucetState,
    clock: &Clock,
    ctx: &mut TxContext
)
```
Mint 100 OC test tokens (24-hour cooldown per address).

### 🔐 Admin Functions

#### Fund Reward Pool

```move
public fun fund_reward(
    admin_cap: &AdminCap,
    pool: &mut StakingPool,
    coin: Coin<ORACLE_COIN>,
    ctx: &TxContext
)
```

Inject OC tokens into reward pool.

#### Update Oracle Price

```move
public fun update_oracle_price(
    registry: &mut OracleRegistry,
    admin_cap: &AdminCap,
    base: vector<u8>,
    quote: vector<u8>,
    new_price: u64,
    ctx: &mut TxContext
)
```

Update OC/USD price feed (triggers APY recalculation).

#### Admin Mint OC Tokens

```move
public entry fun admin_mint(
    admin_cap: &PoolAdminCap,
    pool: &StakingPool,
    faucet_state: &mut FaucetState,
    amount: u64,
    recipient: address,
    ctx: &mut TxContext
)
```

Authorized minting of new OC tokens via the FaucetState treasury (requires `PoolAdminCap`).

---

## 🌐 Deployment

### Deploy Smart Contracts

```bash
# 1. Switch to testnet
sui client switch --env testnet

# 2. Publish package
sui client publish --gas-budget 100000000

# 3. Save Package ID and Object IDs
# Update frontend/lib/constants.ts
```

### Deploy Frontend to Vercel

```bash
# Option 1: Vercel CLI
npm i -g vercel
cd frontend
vercel --prod

# Option 2: GitHub Integration
# 1. Push to GitHub
# 2. Import to Vercel Dashboard
# 3. Set Root Directory: frontend
# 4. Deploy
```

---

## 🛣️ Roadmap

### ✅ Phase 1: MVP (Completed)

- [x] Core staking mechanism with dynamic APY
- [x] Multi-oracle registry architecture
- [x] Admin dashboard (Fund/Mint/Update)
- [x] Public Faucet with 24-hour cooldown
- [x] Dynamic admin capability detection (Pool / Oracle separation)
- [x] Multi-language support (EN/ZH)
- [x] Responsive UI with real-time data

### 🔄 Phase 2: Oracle Integration (Q2 2026)

- [ ] Pyth Network price feeds
- [ ] Supra Oracle integration
- [ ] Chainlink (when available on Sui)
- [ ] Automated price update mechanism

### 🔮 Phase 3: Advanced Features (Q3 2026)

- [ ] Multi-token support (SUI, USDC, USDT)
- [ ] Liquidity mining pools
- [ ] DAO governance module
- [ ] Advanced analytics dashboard
- [ ] Mobile app (iOS/Android)

### 🚀 Phase 4: Mainnet Launch (Q4 2026)

- [ ] Security audits (CertiK/Quantstamp)
- [ ] Mainnet deployment
- [ ] Token generation event (TGE)
- [ ] CEX listings
- [ ] Partnerships & integrations

---

## 🏆 Hackathon Submission

**Event**: BermuDAO Hackathon 2026  
**Category**: DeFi Infrastructure  
**Submission Date**: April 2026  
**Status**: ✅ Completed

### Why OracleFi Stands Out

| Aspect               | Description                                  |
| -------------------- | -------------------------------------------- |
| 💡 **Innovation**    | First dynamic APY protocol on Sui blockchain |
| 🎯 **Completeness**  | Full-stack DApp with admin tools + i18n      |
| 🏗️ **Architecture**  | Extensible multi-oracle design pattern       |
| 🎨 **UX Design**     | Professional UI with smooth animations       |
| 📚 **Documentation** | Comprehensive README + code comments         |
| 🌍 **Accessibility** | Multi-language support from day one          |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow [Conventional Commits](https://www.conventionalcommits.org/)
- Write unit tests for new features
- Update documentation as needed
- Ensure `npm run build` passes

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 📧 Contact & Links

- 🌐 **Live Demo**: [https://your-vercel-url.vercel.app](https://your-vercel-url.vercel.app)
- 📂 **GitHub**: [https://github.com/repotecJC/OracleFi](https://github.com/repotecJC/OracleFi)
- 🐦 **Twitter**: [@YourHandle](#)
- 📧 **Email**: 38872920+repotecJC@users.noreply.github.com
- 💬 **Discord**: [Join Community](#)

---

## 🙏 Acknowledgments

- [Sui Foundation](https://sui.io/) - Blockchain infrastructure
- [BermuDAO](https://bermudao.io/) - Hackathon organizer
- [Mysten Labs](https://mystenlabs.com/) - Developer tools
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Vercel](https://vercel.com/) - Hosting platform

---

<div align="center">

**Built with ❤️ on Sui Blockchain**

⭐ Star this repo if you find it helpful!

[Report Bug](https://github.com/repotecJC/OracleFi/issues) · [Request Feature](https://github.com/repotecJC/OracleFi/issues) · [Documentation](#)

</div>
