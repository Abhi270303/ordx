'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Header } from "./Header"
import { Sidebar } from "./Sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { 
  CheckCircle,
  ChevronDown,
  Upload,
  Loader2,
  ArrowLeft,
  Rocket,
  Info,
  Diamond,
  ChevronUp
} from "lucide-react"
import { useWalletConnector } from '@/hooks/useWalletConnector'

const chainOptions = [
  { 
    id: 'starknet', 
    name: 'StarkNet', 
    symbol: 'STRK',
    color: 'bg-orange-500',
    badge: 'STARKNET',
    logo: (
      <Image src="/starknet.svg" alt="StarkNet" width={20} height={20} className="w-5 h-5" />
    )
  },
  { 
    id: 'bitcoin', 
    name: 'Bitcoin', 
    symbol: 'BTC',
    color: 'bg-orange-400',
    badge: 'BITCOIN',
    logo: (
      <Image src="/bitcoin.svg" alt="Bitcoin" width={20} height={20} className="w-5 h-5" />
    )
  }
]

export function CreateCollectionPage() {
  const router = useRouter()
  const { address, isConnected } = useWalletConnector()
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isChainDropdownOpen, setIsChainDropdownOpen] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const chainDropdownRef = useRef<HTMLDivElement>(null)
  
  const [formData, setFormData] = useState({
    name: '',
    symbol: '',
    chain: 'starknet',
    description: '',
    maxSupply: '',
    price: '',
    image: null as File | null,
    website: '',
    twitter: '',
    discord: '',
    github: ''
  })

  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const selectedChain = chainOptions.find(chain => chain.id === formData.chain) || chainOptions[0]

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chainDropdownRef.current && !chainDropdownRef.current.contains(event.target as Node)) {
        setIsChainDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setFormData(prev => ({ ...prev, image: file }))
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleChainSelect = (chainId: string) => {
    setFormData(prev => ({ ...prev, chain: chainId }))
    setIsChainDropdownOpen(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!isConnected) {
      alert('Please connect your wallet first')
      return
    }

    if (!formData.name || !formData.symbol || !formData.image) {
      alert('Please fill in all required fields')
      return
    }

    setIsLoading(true)

    try {
      // Simulate smart contract transaction
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      // Here you would integrate with your smart contract
      // Example: await createNFTCollection(formData)
      
      setIsSuccess(true)
      setTimeout(() => {
        router.push('/collections')
      }, 2000)
      
    } catch (error) {
      console.error('Failed to create collection:', error)
      alert('Failed to create collection. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="flex flex-col h-screen bg-background">
        <Header />
        <div className="flex-1 flex">
          <Sidebar />
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center space-y-4">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
              <h2 className="text-2xl font-bold">Collection Created Successfully!</h2>
              <p className="text-muted-foreground">Your NFT collection has been deployed to the blockchain.</p>
              <Button onClick={() => router.push('/collections')}>
                View My Collections
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col h-screen bg-background">
      <Header />
      <div className="flex-1 flex">
        <Sidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header with Breadcrumbs */}
          <div className="border-b border-border p-6">
            <div className="flex items-center gap-3">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => router.back()}
                className="p-2"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <span className="text-sm text-muted-foreground">Create Collection</span>
              <span className="text-sm text-muted-foreground">/</span>
              <span className="text-sm font-medium">Deploy Smart Contract</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex p-6">
            {/* Left Column - Image Upload */}
            <div className="w-1/3 pr-6">
              <div className="space-y-6">
                {/* Image Upload Area */}
                <div className="space-y-4">
                  <div 
                    className="w-full aspect-square border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-primary transition-colors bg-muted/20"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    {previewUrl ? (
                      <img 
                        src={previewUrl} 
                        alt="Preview" 
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <div className="text-center space-y-3">
                        <Upload className="h-12 w-12 text-muted-foreground" />
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-primary">Click to upload or drag and drop</p>
                          <p className="text-xs text-muted-foreground">1000 x 1000</p>
                          <p className="text-xs text-muted-foreground">GIF, JPG, PNG, SVG, max 50 MB</p>
                        </div>
                      </div>
                    )}
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </div>
                </div>

                {/* Chain Badges */}
                <div className="flex gap-2">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Diamond className="h-3 w-3" />
                    {selectedChain.badge}
                  </Badge>
                  <Badge variant="secondary">
                    {selectedChain.id === 'starknet' ? 'ERC721' : 'ORDINAL'}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="w-2/3 pl-6">
              <div className="max-w-2xl space-y-8">
                {/* Header */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Rocket className="h-6 w-6 text-primary" />
                    <h1 className="text-2xl font-bold">Start with your Drop Contract</h1>
                  </div>
                  <p className="text-muted-foreground">
                    Every Drop lives on its own smart contract. We'll deploy one for you now — it powers your mint, schedule, and reveal settings.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Add Contract Name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                    <p className="text-xs text-muted-foreground">
                      Your contract name is the same as your collection name. You won't be able to update later.
                    </p>
                  </div>

                  {/* Token Symbol Field */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Label htmlFor="symbol">Token Symbol</Label>
                      <Info className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <Input
                      id="symbol"
                      placeholder="Add Collection Name"
                      value={formData.symbol}
                      onChange={(e) => handleInputChange('symbol', e.target.value)}
                      required
                    />
                    <p className="text-xs text-muted-foreground">
                      Can't be changed after your contract is deployed.
                    </p>
                  </div>

                  {/* Chain Field */}
                  <div className="space-y-2">
                    <Label htmlFor="chain">Chain</Label>
                    <div className="relative" ref={chainDropdownRef}>
                      <Input
                        id="chain"
                        value={selectedChain.name}
                        readOnly
                        className="pr-10 cursor-pointer"
                        onClick={() => setIsChainDropdownOpen(!isChainDropdownOpen)}
                      />
                      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                        <div className="text-muted-foreground">
                          {selectedChain.logo}
                        </div>
                        {isChainDropdownOpen ? (
                          <ChevronUp className="h-4 w-4 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-muted-foreground" />
                        )}
                      </div>
                      
                      {/* Dropdown */}
                      {isChainDropdownOpen && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-card border border-border rounded-lg shadow-lg z-10">
                          {chainOptions.map((chain) => (
                            <div
                              key={chain.id}
                              className="flex items-center gap-3 px-3 py-2 hover:bg-muted cursor-pointer"
                              onClick={() => handleChainSelect(chain.id)}
                            >
                              <div className="text-muted-foreground">
                                {chain.logo}
                              </div>
                              <span className="text-sm">{chain.name}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      This is the blockchain your collection will live on. You won't be able to switch it later.
                    </p>
                  </div>

                  {/* Additional Fields */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="maxSupply">Max Supply</Label>
                      <Input
                        id="maxSupply"
                        type="number"
                        placeholder="e.g., 10000"
                        value={formData.maxSupply}
                        onChange={(e) => handleInputChange('maxSupply', e.target.value)}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="price">Mint Price ({selectedChain.symbol})</Label>
                      <Input
                        id="price"
                        type="number"
                        step="0.01"
                        placeholder={`e.g., 0.01 ${selectedChain.symbol}`}
                        value={formData.price}
                        onChange={(e) => handleInputChange('price', e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Description Field */}
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Collection description"
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      rows={3}
                    />
                  </div>

                  {/* Wallet Connection Status */}
                  {!isConnected && (
                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                      <p className="text-sm text-yellow-600">
                        ⚠️ Please connect your wallet to deploy the contract
                      </p>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex justify-end gap-3 pt-6">
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => router.back()}
                    >
                      Cancel
                    </Button>
                    <Button 
                      type="submit" 
                      disabled={!isConnected || isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                          Publishing Contract...
                        </>
                      ) : (
                        'Publish Contract'
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
