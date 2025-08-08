'use client'

import {
  Connector,
  useAccount,
  useConnect,
  useDisconnect,
} from '@starknet-react/core'
import { useStarknetkitConnectModal } from 'starknetkit'

export function useWalletConnector() {
  const { disconnect } = useDisconnect()
  const { connect, connectors } = useConnect()
  const { address, isConnected } = useAccount()
  
  const { starknetkitConnectModal } = useStarknetkitConnectModal({
    connectors,
  })

  async function connectWallet() {
    try {
      const { connector } = await starknetkitConnectModal()
      if (!connector) {
        return
      }
      await connect({ connector: connector as Connector })
    } catch (error) {
      console.error("Failed to connect wallet:", error)
    }
  }

  const formatAddress = (addr: string) => {
    if (!addr) return ""
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`
  }

  return {
    address,
    isConnected,
    connectWallet,
    disconnect,
    formatAddress: formatAddress(address || "")
  }
}
