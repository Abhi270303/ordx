"use client";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Clock, 
  ArrowUpRight, 
  ArrowDownLeft, 
  DollarSign,
  Filter,
  Download,
  Eye,
  ShoppingCart,
  TrendingUp,
  ArrowLeftRight,
  Plus
} from "lucide-react";

const activities = [
  {
    id: 1,
    type: "sale",
    nft: "Ordinal Punk #1234",
    price: "0.15 BTC",
    from: "0x1234...5678",
    to: "0x8765...4321",
    time: "2 minutes ago",
    direction: "out"
  },
  {
    id: 2,
    type: "bid",
    nft: "Bitcoin Frog #567",
    price: "0.08 BTC",
    from: "0x1111...2222",
    to: "0x3333...4444",
    time: "5 minutes ago",
    direction: "in"
  },
  {
    id: 3,
    type: "mint",
    nft: "Taproot Wizard #890",
    price: "0.02 BTC",
    from: "0x5555...6666",
    to: "0x7777...8888",
    time: "10 minutes ago",
    direction: "out"
  },
  {
    id: 4,
    type: "transfer",
    nft: "Ordinal Loop #234",
    price: "0.05 BTC",
    from: "0x9999...0000",
    to: "0xaaaa...bbbb",
    time: "15 minutes ago",
    direction: "in"
  },
  {
    id: 5,
    type: "sale",
    nft: "Bitcoin Bird #789",
    price: "0.12 BTC",
    from: "0xcccc...dddd",
    to: "0xeeee...ffff",
    time: "20 minutes ago",
    direction: "out"
  }
];

const activityTypes = ["All", "Sales", "Bids", "Mints", "Transfers"];

export function ActivityDashboard() {
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
                <h1 className="text-3xl font-bold">Activity</h1>
                <p className="text-muted-foreground">Track your NFT transactions and interactions</p>
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

            {/* Activity Tabs */}
            <Tabs defaultValue="all" className="space-y-6">
              <TabsList>
                <TabsTrigger value="all">All Activity</TabsTrigger>
                <TabsTrigger value="purchases">Purchases</TabsTrigger>
                <TabsTrigger value="sales">Sales</TabsTrigger>
                <TabsTrigger value="transfers">Transfers</TabsTrigger>
                <TabsTrigger value="mints">Mints</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-6">
                {/* Activity List */}
                <div className="space-y-4">
                  {activities.map((activity, index) => (
                    <Card key={activity.id}>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center text-white">
                            {activity.type === 'sale' && <TrendingUp className="h-6 w-6" />}
                            {activity.type === 'transfer' && <ArrowLeftRight className="h-6 w-6" />}
                            {activity.type === 'mint' && <Plus className="h-6 w-6" />}
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="font-semibold">{activity.nft}</h3>
                              <Badge variant={activity.type === 'sale' ? 'secondary' : 'secondary'}>
                                {activity.type.toUpperCase()}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{activity.from} → {activity.to}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>{activity.time}</span>
                              <span>•</span>
                              <span>{activity.price}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="purchases" className="space-y-6">
                <div className="text-center py-12">
                  <ShoppingCart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Purchase History</h3>
                  <p className="text-muted-foreground">Your NFT purchase transactions will appear here</p>
                </div>
              </TabsContent>

              <TabsContent value="sales" className="space-y-6">
                <div className="text-center py-12">
                  <TrendingUp className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Sales History</h3>
                  <p className="text-muted-foreground">Your NFT sales transactions will appear here</p>
                </div>
              </TabsContent>

              <TabsContent value="transfers" className="space-y-6">
                <div className="text-center py-12">
                  <ArrowLeftRight className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Transfer History</h3>
                  <p className="text-muted-foreground">Your NFT transfer transactions will appear here</p>
                </div>
              </TabsContent>

              <TabsContent value="mints" className="space-y-6">
                <div className="text-center py-12">
                  <Plus className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Mint History</h3>
                  <p className="text-muted-foreground">Your NFT mint transactions will appear here</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <Footer />
        </div>
      </div>
    </div>
  );
} 