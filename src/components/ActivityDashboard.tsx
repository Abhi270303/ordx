"use client";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { TrendingSidebar } from "./TrendingSidebar";
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
  Eye
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
          <div className="flex-1 flex overflow-hidden">
            <div className="flex-1 overflow-y-auto p-6 pt-4">
            {/* Page Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold">Activity</h1>
                <p className="text-muted-foreground">Recent transactions and marketplace activity</p>
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

            {/* Activity Types */}
            <div className="flex gap-2 mb-8">
              {activityTypes.map((type, index) => (
                <Button
                  key={index}
                  variant={type === "All" ? "default" : "outline"}
                  size="sm"
                >
                  {type}
                </Button>
              ))}
            </div>

            {/* Activity Feed */}
            <Tabs defaultValue="recent" className="space-y-6">
              <TabsList>
                <TabsTrigger value="recent">Recent Activity</TabsTrigger>
                <TabsTrigger value="transactions">My Transactions</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              <TabsContent value="recent" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {activities.map((activity) => (
                        <div key={activity.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                          <div className="flex items-center gap-4">
                            <div className={`p-2 rounded-full ${
                              activity.direction === "out" ? "bg-red-500/10 text-red-500" : "bg-green-500/10 text-green-500"
                            }`}>
                              {activity.direction === "out" ? (
                                <ArrowUpRight className="h-4 w-4" />
                              ) : (
                                <ArrowDownLeft className="h-4 w-4" />
                              )}
                            </div>
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="font-semibold">{activity.nft}</h3>
                                <Badge variant="secondary" className="text-xs">
                                  {activity.type.toUpperCase()}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">
                                {activity.from} → {activity.to}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold">{activity.price}</div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              {activity.time}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="transactions" className="space-y-6">
                <div className="text-center py-12">
                  <DollarSign className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">My Transactions</h3>
                  <p className="text-muted-foreground">View your personal transaction history</p>
                </div>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Total Volume</p>
                          <p className="text-2xl font-bold">456.7 BTC</p>
                        </div>
                        <div className="text-green-500">
                          <ArrowUpRight className="h-8 w-8" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Total Sales</p>
                          <p className="text-2xl font-bold">1,234</p>
                        </div>
                        <div className="text-blue-500">
                          <DollarSign className="h-8 w-8" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Active Users</p>
                          <p className="text-2xl font-bold">5,678</p>
                        </div>
                        <div className="text-purple-500">
                          <Eye className="h-8 w-8" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
            </div>
            
            
            <TrendingSidebar />
          </div>
          
          <Footer />
        </div>
      </div>
    </div>
  );
} 