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