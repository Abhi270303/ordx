# OrdX NFT Marketplace

A modern NFT marketplace built with Next.js, supporting both StarkNet NFTs and Bitcoin Ordinals.

## Features

- **Wallet Integration**: StarknetKit with ArgentX and Braavos support
- **Hover-Expandable Sidebar**: Similar to OpenSea's design
- **Create Collections**: Smart contract integration for NFT creation
- **Responsive Design**: Works on all devices
- **Dark Theme**: Modern dark mode interface

## Tech Stack

- **Framework**: Next.js 15.4.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Wallet**: StarknetKit + starknet-react
- **Deployment**: Vercel

## Development

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd nft-marketplace

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev
```

### Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Deployment

### Vercel Deployment

This project is configured for Vercel deployment with the following settings:

- **Node.js Version**: 20 (specified in `.nvmrc`)
- **Legacy Peer Deps**: Enabled via `.npmrc`
- **Build Command**: `npm run vercel-build`
- **Install Command**: `npm install --legacy-peer-deps`

### Configuration Files

- `.npmrc`: Enables legacy peer deps for React version compatibility
- `.nvmrc`: Specifies Node.js version 20
- `vercel.json`: Vercel deployment configuration

### Deployment Steps

1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Next.js framework
3. The build will use the custom `vercel-build` script
4. Dependencies will be installed with `--legacy-peer-deps`

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with StarknetProvider
│   ├── page.tsx           # Main explore page
│   └── [routes]/          # Other pages (collections, profile, etc.)
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── Header.tsx        # Top navigation
│   ├── Sidebar.tsx       # Hover-expandable sidebar
│   └── [pages]/          # Page-specific components
├── hooks/                # Custom React hooks
│   └── useWalletConnector.tsx
└── lib/                  # Utility functions
    └── utils.ts
```

## Wallet Integration

The project uses StarknetKit for wallet connection:

- **Supported Wallets**: ArgentX, Braavos
- **Features**: Connection persistence, balance display, transaction signing
- **Provider**: StarknetProvider wraps the entire app

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run dev`
5. Submit a pull request

## License

MIT License
