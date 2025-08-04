"use client";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { TrendingSidebar } from "./TrendingSidebar";
import { Footer } from "./Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Users, 
  Activity,
  BarChart3,
  PieChart,
  LineChart,
  Calendar,
  Filter
} from "lucide-react";

const statsCards = [
  {
    title: "Total Volume",
    value: "2,456.78 BTC",
    change: "+12.5%",
    changeType: "up",
    icon: DollarSign
  },
  {
    title: "Active Users",
    value: "45,678",
    change: "+8.3%",
    changeType: "up",
    icon: Users
  },
  {
    title: "Total Sales",
    value: "12,345",
    change: "+15.7%",
    changeType: "up",
    icon: Activity
  },
  {
    title: "Floor Price",
    value: "0.15 BTC",
    change: "-2.1%",
    changeType: "down",
    icon: TrendingDown
  }
];

const topCollections = [
  { name: "Ordinal Punks", volume: "456.7 BTC", sales: "1,234", change: "+18.5%" },
  { name: "Bitcoin Frogs", volume: "234.1 BTC", sales: "567", change: "+12.3%" },
  { name: "Taproot Wizards", volume: "189.3 BTC", sales: "345", change: "+8.7%" },
  { name: "Ordinal Loops", volume: "156.8 BTC", sales: "789", change: "+5.2%" },
  { name: "Bitcoin Birds", volume: "123.4 BTC", sales: "456", change: "+9.1%" }
];

const timeRanges = ["24h", "7d", "30d", "90d", "1y"];

export function StatsDashboard() {
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
                <h1 className="text-3xl font-bold">Statistics</h1>
                <p className="text-muted-foreground">Analytics and market insights</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  {timeRanges.map((range, index) => (
                    <Button
                      key={index}
                      variant={range === "7d" ? "default" : "outline"}
                      size="sm"
                    >
                      {range}
                    </Button>
                  ))}
                </div>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {statsCards.map((stat, index) => (
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

            {/* Charts and Analytics */}
            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="collections">Top Collections</TabsTrigger>
                <TabsTrigger value="trends">Trends</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Volume Chart */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <LineChart className="h-5 w-5" />
                        Trading Volume
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <BarChart3 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                          <p className="text-muted-foreground">Volume chart will be displayed here</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Sales Distribution */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <PieChart className="h-5 w-5" />
                        Sales Distribution
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-64 bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <PieChart className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                          <p className="text-muted-foreground">Sales distribution chart will be displayed here</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="collections" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Top Collections by Volume</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {topCollections.map((collection, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center gap-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                              {index + 1}
                            </div>
                            <div>
                              <h3 className="font-semibold">{collection.name}</h3>
                              <p className="text-sm text-muted-foreground">{collection.sales} sales</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold">{collection.volume}</div>
                            <Badge variant="secondary" className="text-green-500">
                              {collection.change}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="trends" className="space-y-6">
                <div className="text-center py-12">
                  <TrendingUp className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Market Trends</h3>
                  <p className="text-muted-foreground">Detailed trend analysis and predictions</p>
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