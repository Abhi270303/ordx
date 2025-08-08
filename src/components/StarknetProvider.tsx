'use client'

import { StarknetConfig, publicProvider } from '@starknet-react/core'
import { mainnet, sepolia } from '@starknet-react/chains'
import { InjectedConnector } from "starknetkit/injected"

const connectors = [
  new InjectedConnector({
    options: { id: "argentX" },
  }),
  new InjectedConnector({
    options: { id: "braavos" },
  })
]

export function StarknetProvider({ children }: { children: React.ReactNode }) {
  return (
    <StarknetConfig
      chains={[mainnet, sepolia]}
      provider={publicProvider()}
      connectors={connectors}
    >
      {children}
    </StarknetConfig>
  )
} 