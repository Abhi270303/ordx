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
          <div className="flex-1 flex overflow-hidden">
            <div className="flex-1 overflow-y-auto p-6 pt-4">
            {/* Page Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold">Documentation</h1>
                <p className="text-muted-foreground">Learn how to use OrdX platform</p>
              </div>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            </div>

            {/* Search */}
            <div className="max-w-md mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search documentation..."
                  className="pl-10"
                />
              </div>
            </div>

            <Tabs defaultValue="overview" className="space-y-6">
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="guides">Guides</TabsTrigger>
                <TabsTrigger value="api">API Reference</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categories.map((category, index) => (
                    <Card key={index} className="cursor-pointer hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-full bg-blue-500/10">
                            <category.icon className="h-6 w-6 text-blue-500" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold">{category.name}</h3>
                            <p className="text-sm text-muted-foreground">{category.count} articles</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Popular Articles</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {popularArticles.map((article, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer">
                          <div>
                            <h4 className="font-medium">{article.title}</h4>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge variant="secondary" className="text-xs">
                                {article.category}
                              </Badge>
                              <span className="text-sm text-muted-foreground">{article.readTime}</span>
                            </div>
                          </div>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="guides" className="space-y-6">
                <div className="text-center py-12">
                  <BookOpen className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Step-by-Step Guides</h3>
                  <p className="text-muted-foreground">Detailed tutorials and walkthroughs</p>
                </div>
              </TabsContent>

              <TabsContent value="api" className="space-y-6">
                <div className="text-center py-12">
                  <HelpCircle className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold mb-2">API Documentation</h3>
                  <p className="text-muted-foreground">Complete API reference and examples</p>
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