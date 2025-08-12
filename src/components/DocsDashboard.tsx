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
  Search, 
  BookOpen, 
  HelpCircle,
  Play,
  Download,
  ExternalLink
} from "lucide-react";

const categories = [
  { name: "Getting Started", icon: Play, count: 5 },
  { name: "Trading", icon: BookOpen, count: 12 },
  { name: "Collections", icon: BookOpen, count: 8 },
  { name: "API", icon: BookOpen, count: 15 },
  { name: "Troubleshooting", icon: HelpCircle, count: 6 }
];

const popularArticles = [
  { title: "How to create your first NFT collection", category: "Collections", readTime: "5 min" },
  { title: "Understanding Ordinal inscriptions", category: "Getting Started", readTime: "8 min" },
  { title: "Best practices for NFT trading", category: "Trading", readTime: "10 min" },
  { title: "API authentication guide", category: "API", readTime: "6 min" }
];

export function DocsDashboard() {
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
                <h1 className="text-3xl font-bold">Documentation</h1>
                <p className="text-muted-foreground">Learn how to use OrdX and integrate with our platform</p>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm">
                  <Search className="h-4 w-4 mr-2" />
                  Search Docs
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </div>

            {/* Documentation Content */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar Navigation */}
              <div className="lg:col-span-1">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-4">Quick Navigation</h3>
                    <nav className="space-y-2">
                      <a href="#getting-started" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Getting Started
                      </a>
                      <a href="#api-reference" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                        API Reference
                      </a>
                      <a href="#smart-contracts" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Smart Contracts
                      </a>
                      <a href="#tutorials" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Tutorials
                      </a>
                      <a href="#faq" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                        FAQ
                      </a>
                    </nav>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3 space-y-8">
                {/* Getting Started */}
                <Card>
                  <CardHeader>
                    <CardTitle id="getting-started">Getting Started</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Welcome to OrdX! This guide will help you get started with our NFT marketplace platform.
                    </p>
                    
                    <div className="space-y-4">
                      <h4 className="font-semibold">1. Connect Your Wallet</h4>
                      <p className="text-sm text-muted-foreground">
                        Start by connecting your StarkNet wallet (ArgentX, Braavos) to access the platform.
                      </p>
                      
                      <h4 className="font-semibold">2. Explore Collections</h4>
                      <p className="text-sm text-muted-foreground">
                        Browse through thousands of NFT collections on StarkNet and Bitcoin networks.
                      </p>
                      
                      <h4 className="font-semibold">3. Create or Purchase</h4>
                      <p className="text-sm text-muted-foreground">
                        Create your own NFT collections or purchase existing ones from the marketplace.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* API Reference */}
                <Card>
                  <CardHeader>
                    <CardTitle id="api-reference">API Reference</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Integrate with OrdX using our comprehensive REST API and SDK.
                    </p>
                    
                    <div className="bg-muted/50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Base URL</h4>
                      <code className="text-sm bg-background px-2 py-1 rounded">
                        https://api.ordx.com/v1
                      </code>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold">Authentication</h4>
                      <p className="text-sm text-muted-foreground">
                        Use your API key in the Authorization header: <code className="bg-muted px-1 rounded">Bearer YOUR_API_KEY</code>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Smart Contracts */}
                <Card>
                  <CardHeader>
                    <CardTitle id="smart-contracts">Smart Contracts</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">
                      Learn about the smart contracts that power OrdX and how to interact with them.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">StarkNet Contracts</h4>
                        <p className="text-sm text-muted-foreground">
                          ERC-721 and ERC-1155 contracts deployed on StarkNet mainnet.
                        </p>
                      </div>
                      
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Bitcoin Ordinals</h4>
                        <p className="text-sm text-muted-foreground">
                          Native Bitcoin Ordinals support with inscription management.
                        </p>
                      </div>
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