"use client";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { TrendingSidebar } from "./TrendingSidebar";
import { Footer } from "./Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Edit, 
  Camera,
  Shield,
  Bell,
  Globe,
  Wallet,
  Award
} from "lucide-react";

export function ProfileDashboard() {
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
            {/* Profile Header */}
            <div className="flex items-center gap-6 mb-8">
              <div className="relative">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder-avatar.jpg" />
                  <AvatarFallback className="text-2xl">JD</AvatarFallback>
                </Avatar>
                <Button size="sm" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0">
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <h1 className="text-3xl font-bold">John Doe</h1>
                  <Badge variant="secondary">Verified</Badge>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
                <p className="text-muted-foreground mb-2">@johndoe • Member since 2023</p>
                <p className="text-sm text-muted-foreground">Passionate NFT collector and digital art enthusiast</p>
              </div>
            </div>

            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
                <TabsTrigger value="security">Security</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-blue-500/10">
                          <Wallet className="h-6 w-6 text-blue-500" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Total Value</p>
                          <p className="text-2xl font-bold">12.5 BTC</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-green-500/10">
                          <Award className="h-6 w-6 text-green-500" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">NFTs Owned</p>
                          <p className="text-2xl font-bold">45</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-purple-500/10">
                          <Globe className="h-6 w-6 text-purple-500" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Collections</p>
                          <p className="text-2xl font-bold">12</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                            OP
                          </div>
                          <div>
                            <h4 className="font-medium">Purchased Ordinal Punk #1234</h4>
                            <p className="text-sm text-muted-foreground">2 hours ago</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">0.15 BTC</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold">
                            BF
                          </div>
                          <div>
                            <h4 className="font-medium">Listed Bitcoin Frog #567</h4>
                            <p className="text-sm text-muted-foreground">1 day ago</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">0.08 BTC</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Display Name</label>
                      <Input defaultValue="John Doe" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Username</label>
                      <Input defaultValue="@johndoe" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Bio</label>
                      <Input defaultValue="Passionate NFT collector and digital art enthusiast" />
                    </div>
                    <Button>Save Changes</Button>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5" />
                      Security Settings
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">Two-Factor Authentication</h4>
                        <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                      </div>
                      <Button variant="outline">Enable</Button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h4 className="font-medium">Email Notifications</h4>
                        <p className="text-sm text-muted-foreground">Get notified about important events</p>
                      </div>
                      <Button variant="outline">
                        <Bell className="h-4 w-4 mr-2" />
                        Configure
                      </Button>
                    </div>
                  </CardContent>
                </Card>
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