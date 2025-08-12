"use client";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ArrowLeftRight, 
  Bitcoin, 
  CircleDollarSign,
  Wallet,
  Settings,
  Clock,
  History
} from "lucide-react";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const bridges = [
  { name: "Bitcoin ↔ Ethereum", status: "Active", fee: "0.1%", time: "~10 min" },
  { name: "Bitcoin ↔ Polygon", status: "Active", fee: "0.05%", time: "~5 min" },
  { name: "Bitcoin ↔ Arbitrum", status: "Active", fee: "0.08%", time: "~8 min" }
];

const recentTransactions = [
  { from: "Bitcoin", to: "Ethereum", amount: "0.5 BTC", status: "Completed", time: "2 min ago" },
  { from: "Ethereum", to: "Bitcoin", amount: "2.5 ETH", status: "Pending", time: "5 min ago" }
];

const recentBridges = [
  { from: "StarkNet", to: "Bitcoin", amount: "0.1 STRK", token: "STRK", status: "completed", time: "10 min ago" },
  { from: "Bitcoin", to: "StarkNet", amount: "0.05 BTC", token: "BTC", status: "pending", time: "15 min ago" }
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
          <div className="flex-1 overflow-y-auto p-6 pt-4">
            {/* Page Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold">Bridge</h1>
                <p className="text-muted-foreground">Transfer assets between StarkNet and Bitcoin networks</p>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm">
                  <History className="h-4 w-4 mr-2" />
                  History
                </Button>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </Button>
              </div>
            </div>

            {/* Bridge Interface */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* From Network */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    From
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="from-network">Network</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select network" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="starknet">StarkNet</SelectItem>
                        <SelectItem value="bitcoin">Bitcoin</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="from-amount">Amount</Label>
                    <div className="flex gap-2">
                      <Input id="from-amount" type="number" placeholder="0.0" />
                      <Select>
                        <SelectTrigger className="w-32">
                          <SelectValue placeholder="Token" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="strk">STRK</SelectItem>
                          <SelectItem value="btc">BTC</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="from-address">Address</Label>
                    <Input id="from-address" placeholder="Enter address" />
                  </div>
                </CardContent>
              </Card>

              {/* To Network */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    To
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="to-network">Network</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select network" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="starknet">StarkNet</SelectItem>
                        <SelectItem value="bitcoin">Bitcoin</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="to-amount">Amount</Label>
                    <div className="flex gap-2">
                      <Input id="to-amount" type="number" placeholder="0.0" disabled />
                      <Select>
                        <SelectTrigger className="w-32">
                          <SelectValue placeholder="Token" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="strk">STRK</SelectItem>
                          <SelectItem value="btc">BTC</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="to-address">Address</Label>
                    <Input id="to-address" placeholder="Enter address" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Bridge Action */}
            <div className="mt-8 text-center">
              <Button size="lg" className="px-8">
                <ArrowLeftRight className="h-5 w-5 mr-2" />
                Bridge Assets
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                Estimated time: 10-15 minutes • Fee: 0.001 STRK
              </p>
            </div>

            {/* Recent Bridges */}
            <div className="mt-12">
              <h2 className="text-xl font-semibold mb-4">Recent Bridges</h2>
              <div className="space-y-4">
                {recentBridges.map((bridge, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-green-400 rounded-lg flex items-center justify-center text-white">
                            <ArrowLeftRight className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{bridge.from} → {bridge.to}</h3>
                            <p className="text-sm text-muted-foreground">{bridge.amount} {bridge.token}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant={bridge.status === 'completed' ? 'default' : 'secondary'}>
                            {bridge.status}
                          </Badge>
                          <p className="text-sm text-muted-foreground mt-1">{bridge.time}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
          
          <Footer />
        </div>
      </div>
    </div>
  );
} 