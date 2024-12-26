Here's a documentation for the AppKit Example App:

# AppKit Example App Documentation

## Overview
This is a Next.js application that demonstrates the integration of AppKit with Web3 wallet connectivity features. The app uses React 19, Next.js 15, and includes Wagmi adapter for blockchain interactions.

## Tech Stack
- Next.js 15.1.2
- React 19
- TypeScript
- Tailwind CSS
- AppKit & Wagmi for Web3 functionality
- TanStack Query (React Query)

## Project Structure
```
src/
├── app/
│   ├── layout.tsx    # Root layout with providers
│   ├── page.tsx      # Main page component
│   ├── providers.tsx # App providers configuration
│   └── globals.css   # Global styles
├── components/
│   └── ConnectButton.tsx # Wallet connection component
```

## Key Features

### 1. Web3 Integration
The app uses AppKit and Wagmi for Web3 functionality, supporting the following networks:
- Ethereum Mainnet
- Arbitrum

Reference to networks configuration:

```22:29:src/app/providers.tsx
const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  ssr: true,
  projectId,
  networks: [mainnet, arbitrum]
})
```


### 2. Styling
- Uses Tailwind CSS for styling
- Custom color scheme with dark mode support
- Geist font family integration for both sans and mono variants

### 3. Components

#### ConnectButton
A reusable button component that triggers the wallet connection modal:

```1:16:src/components/ConnectButton.tsx
'use client'

import { useAppKit } from '@reown/appkit/react'

export function ConnectButton() {
  const { open } = useAppKit()

  return (
    <button 
      onClick={() => open()}
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-blue-300"
    >
      Connect Wallet
    </button>
  )
}
```


## Configuration

### Environment Variables
Required environment variables:
- `NEXT_PUBLIC_PROJECT_ID`: Your Web3 project ID

### Webpack Configuration
Custom webpack configuration to handle Web3 dependencies:

```3:13:next.config.ts
const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      encoding: false,
      bufferutil: false,
      'utf-8-validate': false,
    }
    return config
  },
};
```


## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Set up environment variables:
```bash
NEXT_PUBLIC_PROJECT_ID=your_project_id
```

3. Run development server:
```bash
pnpm dev
```

4. Build for production:
```bash
pnpm build
```

## Features
- Server-side rendering support
- Cookie-based storage for wallet connections
- Dark mode support
- Analytics integration
- Type-safe development environment

## Styling Guidelines
The application uses a combination of:
- Tailwind CSS for utility-first styling
- CSS variables for theme colors
- Responsive design support
- Custom font implementation with Geist

## Best Practices
- Type safety with TypeScript
- Server-side rendering optimization
- Component-based architecture
- Environment variable validation
- Proper error handling for Web3 connections

## Dependencies Management
The project uses pnpm as the package manager. All dependencies are listed in the package.json file with specific version requirements to ensure consistency across installations.
