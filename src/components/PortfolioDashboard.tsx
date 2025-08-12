"use client";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Wallet, 
  TrendingUp, 
  Upload,
  Download,
  Eye,
  Filter,
  BarChart3,
  PieChart,
  Grid
} from "lucide-react";

const portfolioStats = [
  { title: "Total Value", value: "12.5 BTC", change: "+8.3%", changeType: "up", icon: TrendingUp },
  { title: "Total NFTs", value: "45", change: "+2", changeType: "up", icon: Wallet },
  { title: "Collections", value: "12", change: "+1", changeType: "up", icon: Grid },
  { title: "Floor Value", value: "8.2 BTC", change: "+5.7%", changeType: "up", icon: TrendingUp }
];

const portfolioNFTs = [
  {
    name: "Ordinal Punk #1234",
    collection: "Ordinal Punks",
    purchasePrice: "0.15 BTC",
    currentValue: "0.18 BTC",
    roi: "+20%",
    holdTime: "2 months"
  },
  {
    name: "Bitcoin Frog #567",
    collection: "Bitcoin Frogs",
    purchasePrice: "0.08 BTC",
    currentValue: "0.12 BTC",
    roi: "+50%",
    holdTime: "1 month"
  },
  {
    name: "Taproot Wizard #890",
    collection: "Taproot Wizards",
    purchasePrice: "0.20 BTC",
    currentValue: "0.25 BTC",
    roi: "+25%",
    holdTime: "3 months"
  }
];

export function PortfolioDashboard() {
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
                <h1 className="text-3xl font-bold">Portfolio</h1>
                <p className="text-muted-foreground">Track your NFT investments and performance</p>
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

            {/* Portfolio Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {portfolioStats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                      </div>
                      <div className={stat.changeType === "up" ? "text-green-500" : "text-red-500"}>
                        <stat.icon className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="flex items-center mt-2">
                      <Badge 
                        variant="secondary" 
                        className={stat.changeType === "up" ? "text-green-500" : "text-red-500"}
                      >
                        {stat.change}
                      </Badge>
                      <span className="text-sm text-muted-foreground ml-2">vs last period</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Portfolio Tabs */}
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="nfts">My NFTs</TabsTrigger>
                <TabsTrigger value="collections">Collections</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Portfolio Chart */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <TrendingUp className="h-5 w-5" />
                        Portfolio Value
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                          <p className="text-muted-foreground">Portfolio chart will be displayed here</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Asset Distribution */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <PieChart className="h-5 w-5" />
                        Asset Distribution
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <PieChart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                          <p className="text-muted-foreground">Asset distribution chart will be displayed here</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="nfts" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {portfolioNFTs.map((nft, index) => (
                    <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-500 rounded-t-lg flex items-center justify-center text-white font-bold text-lg">
                          {nft.name}
                        </div>
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="font-semibold">{nft.name}</h3>
                            <Badge variant="secondary" className="text-xs">
                              {nft.collection}
                            </Badge>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                            <div>
                              <div className="text-muted-foreground">Purchase Price</div>
                              <div className="font-semibold">{nft.purchasePrice}</div>
                            </div>
                            <div>
                              <div className="text-muted-foreground">Current Value</div>
                              <div className="font-semibold">{nft.currentValue}</div>
                            </div>
                            <div>
                              <div className="text-muted-foreground">ROI</div>
                              <div className={`font-semibold ${nft.roi.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                                {nft.roi}
                              </div>
                            </div>
                            <div>
                              <div className="text-muted-foreground">Hold Time</div>
                              <div className="font-semibold">{nft.holdTime}</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" className="flex-1">
                              <Eye className="h-4 w-4 mr-2" />
                              View
                            </Button>
                            <Button variant="outline" size="sm" className="flex-1">
                              <TrendingUp className="h-4 w-4 mr-2" />
                              Sell
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="collections" className="space-y-6">
                <div className="text-center py-12">
                  <Grid className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Collection Overview</h3>
                  <p className="text-muted-foreground">Detailed collection performance and analytics</p>
                </div>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-6">
                <div className="text-center py-12">
                  <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Portfolio Analytics</h3>
                  <p className="text-muted-foreground">Advanced portfolio analysis and insights</p>
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