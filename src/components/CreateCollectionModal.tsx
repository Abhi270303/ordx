'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  X, 
  Upload, 
  Image as ImageIcon,
  Loader2,
  CheckCircle
} from "lucide-react"
import { useWalletConnector } from '@/hooks/useWalletConnector'

interface CreateCollectionModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

export function CreateCollectionModal({ isOpen, onClose, onSuccess }: CreateCollectionModalProps) {
  const { address, isConnected } = useWalletConnector()
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    symbol: '',
    maxSupply: '',
    price: '',
    image: null as File | null
  })

  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!isConnected) {
      alert('Please connect your wallet first')
      return
    }

    if (!formData.name || !formData.description || !formData.symbol || !formData.maxSupply || !formData.price || !formData.image) {
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
        onSuccess()
        onClose()
        setIsSuccess(false)
        setFormData({
          name: '',
          description: '',
          symbol: '',
          maxSupply: '',
          price: '',
          image: null
        })
        setPreviewUrl(null)
      }, 2000)
      
    } catch (error) {
      console.error('Failed to create collection:', error)
      alert('Failed to create collection. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-card rounded-lg shadow-xl w-full max-w-2xl mx-4 max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-xl font-bold">Create New Collection</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {isSuccess ? (
            <div className="text-center py-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Collection Created Successfully!</h3>
              <p className="text-muted-foreground">Your NFT collection has been deployed to the blockchain.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Image Upload */}
              <div className="space-y-2">
                <Label>Collection Image *</Label>
                <div 
                  className="border-2 border-dashed border-border rounded-lg p-8 text-center cursor-pointer hover:border-primary transition-colors"
                  onClick={() => fileInputRef.current?.click()}
                >
                  {previewUrl ? (
                    <div className="space-y-2">
                      <div className="relative w-32 h-32 mx-auto">
                        <Image 
                          src={previewUrl} 
                          alt="Preview" 
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">Click to change image</p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Upload className="h-12 w-12 text-muted-foreground mx-auto" />
                      <p className="text-sm text-muted-foreground">Click to upload image</p>
                      <p className="text-xs text-muted-foreground">PNG, JPG up to 10MB</p>
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

              {/* Collection Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Collection Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter collection name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="symbol">Symbol *</Label>
                  <Input
                    id="symbol"
                    placeholder="e.g., ORD"
                    value={formData.symbol}
                    onChange={(e) => handleInputChange('symbol', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your collection..."
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={3}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="maxSupply">Max Supply *</Label>
                  <Input
                    id="maxSupply"
                    type="number"
                    placeholder="e.g., 10000"
                    value={formData.maxSupply}
                    onChange={(e) => handleInputChange('maxSupply', e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="price">Mint Price (ETH) *</Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    placeholder="e.g., 0.01"
                    value={formData.price}
                    onChange={(e) => handleInputChange('price', e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Smart Contract Integration Info */}
              <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                <h4 className="font-semibold text-sm">Smart Contract Integration</h4>
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>• Collection name will be stored as contract metadata</p>
                  <p>• Symbol will be used as the NFT token symbol</p>
                  <p>• Max supply will set the total number of mintable NFTs</p>
                  <p>• Mint price will be the cost to mint each NFT</p>
                  <p>• Image will be uploaded to IPFS and stored as token URI</p>
                </div>
              </div>

              {/* Wallet Connection Status */}
              {!isConnected && (
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                  <p className="text-sm text-yellow-600">
                    ⚠️ Please connect your wallet to create a collection
                  </p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={onClose}
                  disabled={isLoading}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  disabled={!isConnected || isLoading}
                  className="flex-1"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Creating Collection...
                    </>
                  ) : (
                    'Create Collection'
                  )}
                </Button>
              </div>
            </form>
          )}
        </CardContent>
      </div>
    </div>
  )
}
