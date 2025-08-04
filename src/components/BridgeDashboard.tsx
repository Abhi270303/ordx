"use client";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { TrendingSidebar } from "./TrendingSidebar";
import { Footer } from "./Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeftRight, 
  Bitcoin, 
  Ethereum,
  Wallet,
  Settings,
  Clock
} from "lucide-react";

const bridges = [
  { name: "Bitcoin ↔ Ethereum", status: "Active", fee: "0.1%", time: "~10 min" },
  { name: "Bitcoin ↔ Polygon", status: "Active", fee: "0.05%", time: "~5 min" },
  { name: "Bitcoin ↔ Arbitrum", status: "Active", fee: "0.08%", time: "~8 min" }
];

const recentTransactions = [
  { from: "Bitcoin", to: "Ethereum", amount: "0.5 BTC", status: "Completed", time: "2 min ago" },
  { from: "Ethereum", to: "Bitcoin", amount: "2.5 ETH", status: "Pending", time: "5 min ago" }
];

export function BridgeDashboard() {
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
                <h1 className="text-3xl font-bold">Bridge</h1>
                <p className="text-muted-foreground">Transfer assets across different blockchains</p>
              </div>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Bridge Settings
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Bridge Interface */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <ArrowLeftRight className="h-5 w-5" />
                      Bridge Assets
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* From */}
                    <div>
                      <label className="text-sm font-medium mb-2 block">From</label>
                      <div className="flex gap-2">
                        <div className="flex-1">
                          <Input placeholder="0.0" />
                        </div>
                        <Button variant="outline" className="flex items-center gap-2">
                          <Bitcoin className="h-4 w-4" />
                          BTC
                        </Button>
                      </div>
                    </div>

                    {/* Bridge Arrow */}
                    <div className="flex justify-center">
                      <div className="p-2 rounded-full bg-muted">
                        <ArrowLeftRight className="h-6 w-6" />
                      </div>
                    </div>

                    {/* To */}
                    <div>
                      <label className="text-sm font-medium mb-2 block">To</label>
                      <div className="flex gap-2">
                        <div className="flex-1">
                          <Input placeholder="0.0" />
                        </div>
                        <Button variant="outline" className="flex items-center gap-2">
                          <Ethereum className="h-4 w-4" />
                          ETH
                        </Button>
                      </div>
                    </div>

                    {/* Bridge Info */}
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Bridge Fee:</span>
                        <span className="ml-2 font-medium">0.1%</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Estimated Time:</span>
                        <span className="ml-2 font-medium">~10 minutes</span>
                      </div>
                    </div>

                    <Button className="w-full" size="lg">
                      <Wallet className="h-4 w-4 mr-2" />
                      Connect Wallet to Bridge
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Bridge Status */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Available Bridges</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {bridges.map((bridge, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <h4 className="font-medium">{bridge.name}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="secondary" className="text-green-500">
                                {bridge.status}
                              </Badge>
                              <span className="text-sm text-muted-foreground">{bridge.fee} fee</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1 text-sm text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              {bridge.time}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentTransactions.map((tx, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium">{tx.from} → {tx.to}</h4>
                              <Badge variant={tx.status === "Completed" ? "default" : "secondary"}>
                                {tx.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{tx.amount}</p>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {tx.time}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <TrendingSidebar />
          </div>
          
          <Footer />
        </div>
      </div>
    </div>
  );
} 