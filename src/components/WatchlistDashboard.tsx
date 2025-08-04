"use client";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { TrendingSidebar } from "./TrendingSidebar";
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
  TrendingDown
} from "lucide-react";

const watchlistItems = [
  {
    id: 1,
    name: "Ordinal Punk #1234",
    collection: "Ordinal Punks",
    price: "0.15 BTC",
    change: "+12.5%",
    changeType: "up",
    lastSeen: "2 hours ago"
  },
  {
    id: 2,
    name: "Bitcoin Frog #567",
    collection: "Bitcoin Frogs",
    price: "0.08 BTC",
    change: "-5.2%",
    changeType: "down",
    lastSeen: "1 hour ago"
  },
  {
    id: 3,
    name: "Taproot Wizard #890",
    collection: "Taproot Wizards",
    price: "0.25 BTC",
    change: "+18.7%",
    changeType: "up",
    lastSeen: "30 minutes ago"
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
          <div className="flex-1 flex overflow-hidden">
            <div className="flex-1 overflow-y-auto p-6 pt-4">
            {/* Page Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold">Watchlist</h1>
                <p className="text-muted-foreground">Track your favorite NFTs and collections</p>
              </div>
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
            </div>

            <Tabs defaultValue="nfts" className="space-y-6">
              <TabsList>
                <TabsTrigger value="nfts">Watched NFTs</TabsTrigger>
                <TabsTrigger value="collections">Watched Collections</TabsTrigger>
              </TabsList>

              <TabsContent value="nfts" className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {watchlistItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                              {item.name.split('#')[1]}
                            </div>
                            <div>
                              <h3 className="font-semibold">{item.name}</h3>
                              <p className="text-sm text-muted-foreground">{item.collection}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <div className="font-semibold">{item.price}</div>
                              <div className={`flex items-center gap-1 text-sm ${
                                item.changeType === "up" ? "text-green-500" : "text-red-500"
                              }`}>
                                {item.changeType === "up" ? (
                                  <TrendingUp className="h-3 w-3" />
                                ) : (
                                  <TrendingDown className="h-3 w-3" />
                                )}
                                {item.change}
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-500">
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="collections" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {watchedCollections.map((collection) => (
                    <Card key={collection.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold">{collection.name}</h3>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-red-500">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <div className="text-muted-foreground">Floor Price</div>
                            <div className="font-semibold">{collection.floorPrice}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Change</div>
                            <div className="font-semibold text-green-500">{collection.change}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Items</div>
                            <div className="font-semibold">{collection.items}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Owners</div>
                            <div className="font-semibold">{collection.owners}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            <TrendingSidebar />
          </div>
          
          <Footer />
        </div>
      </div>
    </div>
  );
} 