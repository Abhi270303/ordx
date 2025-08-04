"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircle, TrendingUp, TrendingDown, Eye, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const trendingCollections = [
  { 
    name: "CryptoPunks", 
    floorPrice: "54.99 ETH", 
    floorPriceUSD: "$165,234",
    change: "0%", 
    changeType: "neutral", 
    verified: true,
    volume24h: "234.5 ETH",
    items: "10,000",
    owners: "3,456",
    thumbnail: "CP"
  },
  { 
    name: "Pudgy Penguins", 
    floorPrice: "13.78 ETH", 
    floorPriceUSD: "$41,456",
    change: "+1.9%", 
    changeType: "up", 
    verified: true,
    volume24h: "89.2 ETH",
    items: "8,888",
    owners: "5,234",
    thumbnail: "PP"
  },
  { 
    name: "Moonbirds", 
    floorPrice: "2.10 ETH", 
    floorPriceUSD: "$6,321",
    change: "+12.1%", 
    changeType: "up", 
    verified: true,
    volume24h: "156.7 ETH",
    items: "10,000",
    owners: "4,567",
    thumbnail: "MB"
  },
  { 
    name: "Lil Pudgys", 
    floorPrice: "1.53 ETH", 
    floorPriceUSD: "$4,605",
    change: "+2.6%", 
    changeType: "up", 
    verified: true,
    volume24h: "45.8 ETH",
    items: "22,222",
    owners: "8,901",
    thumbnail: "LP"
  },
  { 
    name: "No Bad Trippers", 
    floorPrice: "0.16 ETH", 
    floorPriceUSD: "$481",
    change: "-14.2%", 
    changeType: "down", 
    verified: true,
    volume24h: "12.3 ETH",
    items: "5,555",
    owners: "2,345",
    thumbnail: "NBT"
  },
  { 
    name: "Milady Maker", 
    floorPrice: "2.56 ETH", 
    floorPriceUSD: "$7,704",
    change: "+3.6%", 
    changeType: "up", 
    verified: true,
    volume24h: "67.9 ETH",
    items: "10,000",
    owners: "3,789",
    thumbnail: "MM"
  },
  { 
    name: "Bored Ape Yacht Club", 
    floorPrice: "11.96 ETH", 
    floorPriceUSD: "$35,988",
    change: "-1.4%", 
    changeType: "down", 
    verified: true,
    volume24h: "123.4 ETH",
    items: "10,000",
    owners: "6,234",
    thumbnail: "BAYC"
  },
  { 
    name: "CLONE X - X TAKASHI MU...", 
    floorPrice: "0.31 ETH", 
    floorPriceUSD: "$933",
    change: "+21.8%", 
    changeType: "up", 
    verified: true,
    volume24h: "34.5 ETH",
    items: "20,000",
    owners: "7,890",
    thumbnail: "CX"
  },
  { 
    name: "Mutant Ape Yacht Club", 
    floorPrice: "0.39 ETH", 
    floorPriceUSD: "$1,174",
    change: "0%", 
    changeType: "neutral", 
    verified: true,
    volume24h: "23.1 ETH",
    items: "20,000",
    owners: "9,876",
    thumbnail: "MAYC"
  },
];

export function TrendingSidebar() {
  return (
    <div className="w-80 border-l border-border bg-card flex flex-col">
      <div className="p-4 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            <Button variant="default" size="sm">Top</Button>
            <Button variant="outline" size="sm">Trending</Button>
          </div>
          <Button variant="outline" size="sm">1d</Button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-3">
          {trendingCollections.map((collection, index) => (
          <Card key={index} className="cursor-pointer hover:bg-muted/50 transition-colors border-border">
            <CardContent className="p-3">
              <div className="flex items-start gap-3">
                {/* Collection Thumbnail */}
                <Avatar className="h-10 w-10 flex-shrink-0">
                  <AvatarFallback className="bg-gradient-to-br from-purple-400 to-pink-500 text-white text-xs font-bold">
                    {collection.thumbnail}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  {/* Collection Name and Verification */}
                  <div className="flex items-center gap-1 mb-1">
                    <span className="font-medium truncate">{collection.name}</span>
                    {collection.verified && <CheckCircle className="h-3 w-3 text-blue-500 flex-shrink-0" />}
                  </div>
                  
                  {/* Floor Price and Change */}
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <div className="font-semibold text-sm">{collection.floorPrice}</div>
                      <div className="text-xs text-muted-foreground">{collection.floorPriceUSD}</div>
                    </div>
                    <div className={cn(
                      "text-sm font-medium flex items-center gap-1",
                      collection.changeType === "up" && "text-green-500",
                      collection.changeType === "down" && "text-red-500",
                      collection.changeType === "neutral" && "text-muted-foreground"
                    )}>
                      {collection.changeType === "up" && <TrendingUp className="h-3 w-3" />}
                      {collection.changeType === "down" && <TrendingDown className="h-3 w-3" />}
                      {collection.change}
                    </div>
                  </div>
                  
                  {/* Additional Metrics */}
                  <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {collection.volume24h}
                    </div>
                    <div>
                      {collection.items} items
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="p-4 border-t border-border">
        <Button variant="outline" className="w-full" size="sm">
          <ExternalLink className="h-4 w-4 mr-2" />
          View All Trending
        </Button>
      </div>
    </div>
  );
} 