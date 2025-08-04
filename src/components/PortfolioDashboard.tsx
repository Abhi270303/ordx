"use client";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { TrendingSidebar } from "./TrendingSidebar";
import { Footer } from "./Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Wallet, 
  TrendingUp, 
  Upload,
  Download,
  Eye
} from "lucide-react";

const portfolioStats = [
  { title: "Total Value", value: "12.5 BTC", change: "+8.3%" },
  { title: "Total NFTs", value: "45", change: "+2" },
  { title: "Collections", value: "12", change: "+1" },
  { title: "Floor Value", value: "8.2 BTC", change: "+5.7%" }
];

const portfolioNFTs = [
  { name: "Ordinal Punk #1234", collection: "Ordinal Punks", value: "0.15 BTC", change: "+12.5%" },
  { name: "Bitcoin Frog #567", collection: "Bitcoin Frogs", value: "0.08 BTC", change: "-5.2%" },
  { name: "Taproot Wizard #890", collection: "Taproot Wizards", value: "0.25 BTC", change: "+18.7%" }
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
          <div className="flex-1 flex overflow-hidden">
            <div className="flex-1 overflow-y-auto p-6 pt-4">
            {/* Page Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold">Portfolio</h1>
                <p className="text-muted-foreground">Manage your NFT collection</p>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm">
                  <Upload className="h-4 w-4 mr-2" />
                  Import
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>

            {/* Portfolio Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {portfolioStats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                      </div>
                      <div className="text-green-500">
                        <TrendingUp className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="flex items-center mt-2">
                      <Badge variant="secondary" className="text-green-500">
                        {stat.change}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="nfts">My NFTs</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4">Portfolio Value</h3>
                      <div className="h-64 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <TrendingUp className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                          <p className="text-muted-foreground">Portfolio chart will be displayed here</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-4">Top Holdings</h3>
                      <div className="space-y-4">
                        {portfolioNFTs.map((nft, index) => (
                          <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                            <div>
                              <h4 className="font-medium">{nft.name}</h4>
                              <p className="text-sm text-muted-foreground">{nft.collection}</p>
                            </div>
                            <div className="text-right">
                              <div className="font-semibold">{nft.value}</div>
                              <div className="text-sm text-green-500">{nft.change}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="nfts" className="space-y-6">
                <div className="text-center py-12">
                  <Wallet className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">My NFTs</h3>
                  <p className="text-muted-foreground">View and manage your NFT collection</p>
                </div>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-6">
                <div className="text-center py-12">
                  <Eye className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Portfolio Analytics</h3>
                  <p className="text-muted-foreground">Detailed analytics and performance metrics</p>
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