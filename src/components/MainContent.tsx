"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CheckCircle, TrendingUp, Search, Filter, Mic, ChevronDown, Heart, Eye, ExternalLink, Twitter, Globe, Users } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { FilterSidebar } from "./FilterSidebar";

// Section types
type Section = "starknet" | "bitcoin";

// Category types
interface Category {
  name: string;
  count: number;
  icon: React.ComponentType<{ className?: string }>;
}

const starknetCategories: Category[] = [
  { name: "All", count: 1234, icon: TrendingUp },
  { name: "Gaming", count: 234, icon: TrendingUp },
  { name: "Art", count: 456, icon: TrendingUp },
  { name: "PFPs", count: 189, icon: TrendingUp },
  { name: "Music", count: 67, icon: TrendingUp },
  { name: "Trading Cards", count: 123, icon: TrendingUp },
];

const bitcoinCategories: Category[] = [
  { name: "All", count: 567, icon: TrendingUp },
  { name: "Ordinals", count: 234, icon: TrendingUp },
  { name: "Inscriptions", count: 189, icon: TrendingUp },
  { name: "Art", count: 89, icon: TrendingUp },
  { name: "Gaming", count: 45, icon: TrendingUp },
  { name: "Collectibles", count: 67, icon: TrendingUp },
];

const featuredCollection = {
  name: "based punks",
  creator: "based",
  creatorAddress: "0x1234...5678",
  floorPrice: "0.0798 ETH",
  floorPriceUSD: "$2,456.78",
  floorChange24h: "+12.5%",
  items: "5,000",
  totalSupply: "10,000",
  available: "4,800",
  totalVolume: "4,624.09 ETH",
  volumeChange24h: "+8.3%",
  listed: "4.8%",
  listedCount: "240",
  description: "A collection of 10,000 unique pixelated characters living on the blockchain. Each based punk is algorithmically generated and stored on-chain.",
  social: {
    twitter: "https://twitter.com/basedpunks",
    discord: "https://discord.gg/basedpunks",
    website: "https://basedpunks.com"
  },
  images: [
    { id: 1, name: "Based Punk #1234", price: "0.15 ETH", lastSale: "0.12 ETH", rarity: "Legendary", traits: 8 },
    { id: 2, name: "Based Punk #5678", price: "0.08 ETH", lastSale: "0.09 ETH", rarity: "Epic", traits: 6 },
    { id: 3, name: "Based Punk #9012", price: "0.12 ETH", lastSale: "0.11 ETH", rarity: "Rare", traits: 7 },
    { id: 4, name: "Based Punk #3456", price: "0.06 ETH", lastSale: "0.07 ETH", rarity: "Common", traits: 4 },
    { id: 5, name: "Based Punk #7890", price: "0.18 ETH", lastSale: "0.16 ETH", rarity: "Legendary", traits: 9 },
    { id: 6, name: "Based Punk #2345", price: "0.09 ETH", lastSale: "0.08 ETH", rarity: "Epic", traits: 5 },
  ]
};

const featuredCollections = [
  { name: "Abstract Face", image: "/placeholder-collection-1.jpg", floor: "0.05 ETH", change: "+15.2%" },
  { name: "Stylized Figures", image: "/placeholder-collection-2.jpg", floor: "0.08 ETH", change: "+8.7%" },
  { name: "Snowy Scene", image: "/placeholder-collection-3.jpg", floor: "0.12 ETH", change: "+22.1%" },
  { name: "Geometric Shapes", image: "/placeholder-collection-4.jpg", floor: "0.06 ETH", change: "+5.3%" },
  { name: "Vibrant Colors", image: "/placeholder-collection-5.jpg", floor: "0.09 ETH", change: "+18.9%" },
];

export function MainContent() {
  const [activeSection, setActiveSection] = useState<Section>("starknet");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = activeSection === "starknet" ? starknetCategories : bitcoinCategories;
  const searchPlaceholder = activeSection === "starknet" 
    ? "Search StarkNet Collections, NFTs, or creators..." 
    : "Search Bitcoin Ordinals, Inscriptions, or creators...";

  return (
    <div className="flex-1 overflow-y-auto p-6 pt-4 max-w-6xl">
      {/* Section Toggle */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="flex bg-muted/50 rounded-lg p-1 border border-border">
            <Button
              variant={activeSection === "starknet" ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveSection("starknet")}
              className={cn(
                "flex items-center gap-2 font-medium",
                activeSection === "starknet" 
                  ? "bg-background text-foreground shadow-sm ring-1 ring-purple-500/20" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              StarkNet NFTs
            </Button>
            <Button
              variant={activeSection === "bitcoin" ? "default" : "ghost"}
              size="sm"
              onClick={() => setActiveSection("bitcoin")}
              className={cn(
                "flex items-center gap-2 font-medium",
                activeSection === "bitcoin" 
                  ? "bg-background text-foreground shadow-sm ring-1 ring-orange-500/20" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <div className="w-3 h-3 rounded-full bg-orange-500"></div>
              Bitcoin Ordinals
            </Button>
          </div>
          <Badge variant="secondary" className={cn(
            "text-xs font-medium",
            activeSection === "starknet" 
              ? "bg-purple-500/10 text-purple-400 border-purple-500/20" 
              : "bg-orange-500/10 text-orange-400 border-orange-500/20"
          )}>
            {activeSection === "starknet" ? "Layer 2 Scaling" : "Layer 1 Native"}
          </Badge>
        </div>

        {/* View Options */}
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => setIsFilterOpen(true)}>
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
          <Button variant="outline" size="sm">
            <TrendingUp className="h-4 w-4 mr-2" />
            Sort
          </Button>
        </div>
      </div>

      {/* Enhanced Search Bar */}
      <div className="flex items-center gap-4 mb-8">
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder={searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-20 h-12"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Mic className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Category Filters */}
      <div className="flex items-center gap-3 mb-8 overflow-x-auto pb-2">
        {categories.map((category, index) => (
          <Button
            key={index}
            variant={selectedCategory === category.name ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(category.name)}
            className="flex items-center gap-2 whitespace-nowrap"
          >
            <category.icon className="h-4 w-4" />
            {category.name}
            <Badge variant="secondary" className="ml-1 text-xs">
              {category.count}
            </Badge>
          </Button>
        ))}
      </div>

      {/* Featured Collection - Enhanced */}
      <div className="mb-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                BP
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-3xl font-bold">{featuredCollection.name}</h2>
                  <CheckCircle className="h-6 w-6 text-blue-500" />
                  <Badge variant="secondary">Verified</Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>By {featuredCollection.creator}</span>
                  <span>•</span>
                  <span className="font-mono">{featuredCollection.creatorAddress}</span>
                  <span>•</span>
                  <span>{featuredCollection.totalSupply} items</span>
                </div>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-4 max-w-2xl">
              {featuredCollection.description}
            </p>

            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Twitter className="h-4 w-4 mr-2" />
                Twitter
              </Button>
              <Button variant="outline" size="sm">
                <Users className="h-4 w-4 mr-2" />
                Discord
              </Button>
              <Button variant="outline" size="sm">
                <Globe className="h-4 w-4 mr-2" />
                Website
              </Button>
              <Button size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Follow
              </Button>
            </div>
          </div>
        </div>

        {/* Enhanced NFT Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
          {featuredCollection.images.map((nft) => (
            <Card key={nft.id} className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:-translate-y-1 group">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-purple-400 to-pink-500 rounded-t-lg flex items-center justify-center text-white font-bold text-sm relative overflow-hidden">
                  <span>{nft.name.split('#')[1]}</span>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary">Buy</Button>
                      <Button size="sm" variant="secondary">Offer</Button>
                    </div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-sm truncate">{nft.name}</h3>
                    <Badge variant="outline" className="text-xs">
                      {nft.rarity}
                    </Badge>
                  </div>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Price:</span>
                      <span className="font-semibold">{nft.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Last Sale:</span>
                      <span className="text-muted-foreground line-through">{nft.lastSale}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Traits:</span>
                      <span>{nft.traits}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Stats Table */}
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-muted-foreground">FLOOR PRICE</span>
                  <Badge variant="secondary" className="text-green-500 text-xs">
                    {featuredCollection.floorChange24h}
                  </Badge>
                </div>
                <div className="text-2xl font-bold">{featuredCollection.floorPrice}</div>
                <div className="text-sm text-muted-foreground">{featuredCollection.floorPriceUSD}</div>
              </div>
              
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-2">ITEMS</div>
                <div className="text-2xl font-bold">{featuredCollection.items}</div>
                <div className="text-sm text-muted-foreground">
                  {featuredCollection.available} available
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-muted-foreground">TOTAL VOLUME</span>
                  <Badge variant="secondary" className="text-green-500 text-xs">
                    {featuredCollection.volumeChange24h}
                  </Badge>
                </div>
                <div className="text-2xl font-bold">{featuredCollection.totalVolume}</div>
                <div className="text-sm text-muted-foreground">All time</div>
              </div>
              
              <div>
                <div className="text-sm font-medium text-muted-foreground mb-2">LISTED</div>
                <div className="text-2xl font-bold">{featuredCollection.listed}</div>
                <div className="text-sm text-muted-foreground">
                  {featuredCollection.listedCount} items
                </div>
                <div className="w-full bg-muted rounded-full h-2 mt-2">
                  <div 
                    className="bg-primary h-2 rounded-full" 
                    style={{ width: featuredCollection.listed }}
                  ></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Featured Collections - Enhanced */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold">Featured Collections</h3>
            <p className="text-muted-foreground">This week's curated collections</p>
          </div>
          <Button variant="outline" size="sm">
            View All
            <ExternalLink className="h-4 w-4 ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {featuredCollections.map((collection, index) => (
            <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-yellow-400 to-orange-500 rounded-t-lg flex items-center justify-center text-white font-bold relative overflow-hidden group">
                  <span>{collection.name}</span>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Button size="sm" variant="secondary">View Collection</Button>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold truncate">{collection.name}</h4>
                    <Badge variant="secondary" className="text-green-500 text-xs">
                      {collection.change}
                    </Badge>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Floor: {collection.floor}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recently Listed NFTs */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold">Recently Listed</h3>
            <p className="text-muted-foreground">Latest NFTs hitting the marketplace</p>
          </div>
          <Button variant="outline" size="sm">
            <ExternalLink className="h-4 w-4 mr-2" />
            View All
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }, (_, i) => (
            <Card key={i} className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:-translate-y-1 group">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-500 rounded-t-lg flex items-center justify-center text-white font-bold text-sm relative overflow-hidden">
                  <span>NFT #{i + 1}</span>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary">Buy</Button>
                      <Button size="sm" variant="secondary">Offer</Button>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">NFT #{i + 1}</h4>
                    <Badge variant="outline" className="text-xs">
                      {["Common", "Rare", "Epic", "Legendary"][i % 4]}
                    </Badge>
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Price:</span>
                      <span className="font-semibold">{(0.1 + i * 0.05).toFixed(2)} ETH</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Collection:</span>
                      <span className="text-muted-foreground">Based Punks</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Trending Artists */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold">Trending Artists</h3>
            <p className="text-muted-foreground">Top creators this week</p>
          </div>
          <Button variant="outline" size="sm">
            <ExternalLink className="h-4 w-4 mr-2" />
            View All
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }, (_, i) => (
            <Card key={i} className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {["JD", "AB", "CD", "EF", "GH", "IJ"][i]}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">Artist {i + 1}</h4>
                    <p className="text-sm text-muted-foreground mb-2">Digital Artist & Creator</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-muted-foreground">{(100 + i * 50)} NFTs</span>
                      <span className="text-muted-foreground">{(10 + i * 5)} ETH</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Follow
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recently Listed NFTs */}
      <div className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold">Recently Listed</h3>
            <p className="text-muted-foreground">Latest NFTs hitting the marketplace</p>
          </div>
          <Button variant="outline" size="sm">
            <ExternalLink className="h-4 w-4 mr-2" />
            View All
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }, (_, i) => (
            <Card key={i} className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:-translate-y-1 group">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-500 rounded-t-lg flex items-center justify-center text-white font-bold text-sm relative overflow-hidden">
                  <span>NFT #{i + 1}</span>
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary">Buy</Button>
                      <Button size="sm" variant="secondary">Offer</Button>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">NFT #{i + 1}</h4>
                    <Badge variant="outline" className="text-xs">
                      {["Common", "Rare", "Epic", "Legendary"][i % 4]}
                    </Badge>
                  </div>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Price:</span>
                      <span className="font-semibold">{(0.1 + i * 0.05).toFixed(2)} ETH</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Collection:</span>
                      <span className="text-muted-foreground">Based Punks</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Filter Sidebar */}
      <FilterSidebar isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />
    </div>
  );
} 