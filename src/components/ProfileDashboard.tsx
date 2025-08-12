"use client";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
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
  Award,
  Download
} from "lucide-react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

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
          <div className="flex-1 overflow-y-auto p-6 pt-4">
            {/* Page Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold">Profile</h1>
                <p className="text-muted-foreground">Manage your account and preferences</p>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export Data
                </Button>
              </div>
            </div>

            {/* Profile Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Profile Info */}
              <div className="lg:col-span-1">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-center">
                      <Avatar className="w-24 h-24 mx-auto mb-4">
                        <AvatarImage src="/placeholder-avatar.jpg" />
                        <AvatarFallback className="text-2xl">JD</AvatarFallback>
                      </Avatar>
                      <h2 className="text-xl font-semibold mb-2">John Doe</h2>
                      <p className="text-muted-foreground mb-4">NFT Collector & Creator</p>
                      
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Member Since:</span>
                          <span>March 2024</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Total NFTs:</span>
                          <span>45</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Collections:</span>
                          <span>12</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Portfolio Value:</span>
                          <span>12.5 BTC</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Profile Details */}
              <div className="lg:col-span-2 space-y-6">
                {/* Personal Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Personal Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" value="johndoe" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" value="john@example.com" />
                      </div>
                      <div>
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea id="bio" value="Passionate NFT collector and digital artist. Love exploring new collections and supporting creators." />
                      </div>
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input id="location" value="New York, NY" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Links */}
                <Card>
                  <CardHeader>
                    <CardTitle>Social Links</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="twitter">Twitter</Label>
                        <Input id="twitter" value="@johndoe" />
                      </div>
                      <div>
                        <Label htmlFor="discord">Discord</Label>
                        <Input id="discord" value="johndoe#1234" />
                      </div>
                      <div>
                        <Label htmlFor="website">Website</Label>
                        <Input id="website" value="https://johndoe.com" />
                      </div>
                      <div>
                        <Label htmlFor="github">GitHub</Label>
                        <Input id="github" value="github.com/johndoe" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Preferences */}
                <Card>
                  <CardHeader>
                    <CardTitle>Preferences</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Email Notifications</h4>
                        <p className="text-sm text-muted-foreground">Receive updates about your collections</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Push Notifications</h4>
                        <p className="text-sm text-muted-foreground">Get notified about price changes</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Public Profile</h4>
                        <p className="text-sm text-muted-foreground">Allow others to view your profile</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          <Footer />
        </div>
      </div>
    </div>
  );
} 