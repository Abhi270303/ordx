"use client";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Heart, 
  Eye, 
  Bell, 
  Trash2,
  TrendingUp,
  TrendingDown,
  Filter,
  Download,
  MoreHorizontal,
  Compass
} from "lucide-react";
import { useRouter } from "next/navigation";

const watchlistItems = [
  {
    id: 1,
    name: "Ordinal Punk #1234",
    collection: "Ordinal Punks",
    price: "0.15 BTC",
    change: "+12.5%",
    changeType: "up",
    lastSeen: "2 hours ago",
    verified: true,
    creator: "OrdinalPunks",
    floorPrice: "0.15 BTC"
  },
  {
    id: 2,
    name: "Bitcoin Frog #567",
    collection: "Bitcoin Frogs",
    price: "0.08 BTC",
    change: "-5.2%",
    changeType: "down",
    lastSeen: "1 hour ago",
    verified: false,
    creator: "BitcoinFrogs",
    floorPrice: "0.08 BTC"
  },
  {
    id: 3,
    name: "Taproot Wizard #890",
    collection: "Taproot Wizards",
    price: "0.25 BTC",
    change: "+18.7%",
    changeType: "up",
    lastSeen: "30 minutes ago",
    verified: true,
    creator: "TaprootWizards",
    floorPrice: "0.25 BTC"
  }
];

const watchedCollections = [
  {
    id: 1,
    name: "Ordinal Punks",
    floorPrice: "0.15 BTC",
    change: "+8.3%",
    items: "10,000",
    owners: "8,500"
  },
  {
    id: 2,
    name: "Bitcoin Frogs",
    floorPrice: "0.08 BTC",
    change: "+12.1%",
    items: "5,000",
    owners: "4,200"
  }
];

export function WatchlistDashboard() {
  const router = useRouter();
  return (
    <div className="flex flex-col h-screen bg-background">
      {/* Header - spans full width at top */}
      <Header />
      
      {/* Main content area - below header */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar */}
        <Sidebar />
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Main Content */}
          <div className="flex-1 overflow-y-auto p-6 pt-4">
            {/* Page Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold">Watchlist</h1>
                <p className="text-muted-foreground">Track your favorite NFT collections and items</p>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>

            {/* Watchlist Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {watchlistItems.map((item, index) => (
                <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-500 rounded-t-lg flex items-center justify-center text-white font-bold text-lg">
                      {item.name}
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{item.name}</h3>
                          {item.verified && (
                            <Badge variant="secondary" className="text-blue-500">
                              Verified
                            </Badge>
                          )}
                        </div>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <Avatar className="h-6 w-6">
                          <AvatarFallback className="text-xs">
                            {item.creator.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-muted-foreground">{item.creator}</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div>
                          <div className="text-muted-foreground">Floor Price</div>
                          <div className="font-semibold">{item.floorPrice}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">Change</div>
                          <div className={`font-semibold ${item.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                            {item.change}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Heart className="h-4 w-4 mr-2" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Empty State */}
            {watchlistItems.length === 0 && (
              <div className="text-center py-16">
                <div className="max-w-md mx-auto space-y-6">
                  <div className="flex justify-center">
                    <div className="w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center">
                      <Heart className="h-12 w-12 text-muted-foreground" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">Your Watchlist is Empty</h3>
                    <p className="text-muted-foreground">
                      Start adding collections and items to your watchlist to track their performance
                    </p>
                  </div>
                  
                  <Button onClick={() => router.push('/')}>
                    <Compass className="h-4 w-4 mr-2" />
                    Explore Collections
                  </Button>
                </div>
              </div>
            )}
          </div>
          
          <Footer />
        </div>
      </div>
    </div>
  );
} 