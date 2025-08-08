"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { TrendingSidebar } from "./TrendingSidebar";
import { Footer } from "./Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Plus, 
  Search, 
  Filter, 
  Grid3X3, 
  List,
  TrendingUp,
  Users,
  Eye,
  Heart,
  MoreHorizontal,
  Package,
  ShoppingCart
} from "lucide-react";
import { useWalletConnector } from '@/hooks/useWalletConnector';

interface Collection {
  id: number;
  name: string;
  creator: string;
  floorPrice: string;
  totalVolume: string;
  items: string;
  owners: string;
  verified: boolean;
  image: string;
  change: string;
}

// User's collections (created or purchased)
const userCollections: Collection[] = [
  // This will be empty initially - user has no collections yet
];

const filters = ["All", "Created", "Purchased"];

export function CollectionsDashboard() {
  const { isConnected } = useWalletConnector();
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState("All");

  const handleCreateCollection = () => {
    router.push('/create-collection');
  };

  const handleBrowseMarketplace = () => {
    router.push('/');
  };

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
                <h1 className="text-3xl font-bold">My Collections</h1>
                <p className="text-muted-foreground">Manage your created and purchased NFT collections</p>
              </div>
              <Button 
                onClick={handleCreateCollection}
                disabled={!isConnected}
              >
                <Plus className="h-4 w-4 mr-2" />
                Create Collection
              </Button>
            </div>

            {/* Search and Filters */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <Input
                    placeholder="Search your collections..."
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex gap-2">
                {filters.map((filter) => (
                  <Button
                    key={filter}
                    variant={filter === activeFilter ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveFilter(filter)}
                  >
                    {filter}
                  </Button>
                ))}
              </div>
            </div>

            {/* Collections Grid */}
            {userCollections.length === 0 ? (
              <div className="text-center py-16">
                <div className="max-w-md mx-auto space-y-6">
                  <div className="flex justify-center">
                    <div className="w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center">
                      <Package className="h-12 w-12 text-muted-foreground" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">No Collections Yet</h3>
                    <p className="text-muted-foreground">
                      {!isConnected 
                        ? "Connect your wallet to start creating NFT collections"
                        : "You haven't created or purchased any NFT collections yet"
                      }
                    </p>
                  </div>

                  {!isConnected ? (
                    <div className="space-y-4">
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Get Started</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Connect your wallet to create and manage your NFT collections
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Connect wallet to create collections</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold mb-2">Create Your First Collection</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          Start by creating your own NFT collection or browse the marketplace to purchase existing collections
                        </p>
                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Plus className="h-4 w-4" />
                            <span>Create a new collection</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <ShoppingCart className="h-4 w-4" />
                            <span>Purchase from marketplace</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-3">
                        <Button 
                          onClick={handleCreateCollection}
                          className="flex-1"
                        >
                          <Plus className="h-4 w-4 mr-2" />
                          Create Collection
                        </Button>
                        <Button 
                          variant="outline" 
                          className="flex-1"
                          onClick={handleBrowseMarketplace}
                        >
                          <ShoppingCart className="h-4 w-4 mr-2" />
                          Browse Marketplace
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {userCollections.map((collection) => (
                  <Card key={collection.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-500 rounded-t-lg flex items-center justify-center text-white font-bold text-lg">
                        {collection.name}
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">{collection.name}</h3>
                            {collection.verified && (
                              <Badge variant="secondary" className="text-blue-500">
                                Verified
                              </Badge>
                            )}
                          </div>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-4">
                          <Avatar className="h-6 w-6">
                            <AvatarFallback className="text-xs">
                              {collection.creator.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm text-muted-foreground">{collection.creator}</span>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                          <div>
                            <div className="text-muted-foreground">Floor Price</div>
                            <div className="font-semibold">{collection.floorPrice}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Total Volume</div>
                            <div className="font-semibold">{collection.totalVolume}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Items</div>
                            <div className="font-semibold">{collection.items}</div>
                          </div>
                          <div>
                            <div className="text-muted-foreground">Owners</div>
                            <div className="font-semibold">{collection.owners}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="text-green-500">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            {collection.change}
                          </Badge>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Heart className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
            </div>
            
            <TrendingSidebar />
          </div>
          
          <Footer />
        </div>
      </div>
    </div>
  );
} 