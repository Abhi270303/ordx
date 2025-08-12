"use client";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, Calendar, Zap, Code, Eye, Lock, Link, Image as ImageIcon, RefreshCw, FileText, Rocket } from "lucide-react";
import { useRouter } from "next/navigation";

export function StudioDashboard() {
  const router = useRouter();
  
  const handleCreateDrop = () => { 
    router.push('/create-collection?type=drop'); 
  };
  
  const handleCreateCollection = () => { 
    router.push('/create-collection?type=collection'); 
  };
  
  const handleClose = () => { 
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
          <div className="flex-1 overflow-y-auto p-6 pt-4">
            {/* Studio Content */}
            <div className="max-w-6xl mx-auto">
              {/* Close Button */}
              <div className="flex justify-end mb-6">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClose}
                  className="w-10 h-10 p-0 rounded-full hover:bg-muted/50"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Section - Introduction */}
                <div className="lg:col-span-1">
                  <div className="sticky top-6">
                    <h1 className="text-5xl font-bold text-white mb-8 leading-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                      What do you want to create?
                    </h1>
                    
                    {/* Guide Box */}
                    <div className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-2xl hover:shadow-gray-900/20 transition-all duration-300 hover:scale-[1.02]">
                      <div className="space-y-4">
                        <p className="text-gray-300 leading-relaxed">
                          View our guide to help decide between a Scheduled Drop and an Instant Collection
                        </p>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"
                        >
                          <FileText className="h-4 w-4 mr-2" />
                          View Guide
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Section - Creation Options */}
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Scheduled Drop Card */}
                    <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border-gray-700/50 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-[1.02] group overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <CardContent className="p-8 relative">
                        <div className="flex flex-col items-center text-center space-y-6">
                          {/* Icon */}
                          <div className="relative">
                            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all duration-500 group-hover:scale-110">
                              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 via-purple-500 to-blue-500 rounded-xl relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                                <Calendar className="absolute bottom-2 left-2 h-5 w-5 text-white drop-shadow-lg" />
                              </div>
                            </div>
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="space-y-4 w-full">
                            <h2 className="text-3xl font-bold text-white mb-2">Scheduled Drop</h2>
                            
                            {/* Action Button */}
                            <Button 
                              onClick={handleCreateDrop}
                              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0 shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 py-3 text-lg font-semibold rounded-xl"
                            >
                              <Rocket className="h-5 w-5 mr-2" />
                              Create Drop
                            </Button>

                            {/* Description */}
                            <p className="text-gray-300 leading-relaxed text-sm">
                              Build anticipation with timed launches, gated access, and reveal after mint. Great for 1/1s or curated editions.
                            </p>

                            {/* Features List */}
                            <div className="space-y-3 pt-4">
                              <div className="flex items-center gap-3 text-sm text-gray-300 group/feature hover:text-white transition-colors duration-200">
                                <div className="w-8 h-8 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover/feature:from-purple-500/30 group-hover/feature:to-blue-500/30 transition-all duration-200">
                                  <Code className="h-4 w-4 text-purple-400" />
                                </div>
                                <span>ERC-721 contract</span>
                              </div>
                              <div className="flex items-center gap-3 text-sm text-gray-300 group/feature hover:text-white transition-colors duration-200">
                                <div className="w-8 h-8 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover/feature:from-purple-500/30 group-hover/feature:to-blue-500/30 transition-all duration-200">
                                  <Calendar className="h-4 w-4 text-purple-400" />
                                </div>
                                <span>Scheduled launch</span>
                              </div>
                              <div className="flex items-center gap-3 text-sm text-gray-300 group/feature hover:text-white transition-colors duration-200">
                                <div className="w-8 h-8 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover/feature:from-purple-500/30 group-hover/feature:to-blue-500/30 transition-all duration-200">
                                  <Link className="h-4 w-4 text-purple-400" />
                                </div>
                                <span>Fixed number of items</span>
                              </div>
                              <div className="flex items-center gap-3 text-sm text-gray-300 group/feature hover:text-white transition-colors duration-200">
                                <div className="w-8 h-8 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover/feature:from-purple-500/30 group-hover/feature:to-blue-500/30 transition-all duration-200">
                                  <Eye className="h-4 w-4 text-purple-400" />
                                </div>
                                <span>Post-mint reveal</span>
                              </div>
                              <div className="flex items-center gap-3 text-sm text-gray-300 group/feature hover:text-white transition-colors duration-200">
                                <div className="w-8 h-8 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover/feature:from-purple-500/30 group-hover/feature:to-blue-500/30 transition-all duration-200">
                                  <Lock className="h-4 w-4 text-purple-400" />
                                </div>
                                <span>Gated access</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Open Collection Card */}
                    <Card className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border-gray-700/50 shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 hover:scale-[1.02] group overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <CardContent className="p-8 relative">
                        <div className="flex flex-col items-center text-center space-y-6">
                          {/* Icon */}
                          <div className="relative">
                            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 via-orange-600 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-orange-500/25 group-hover:shadow-orange-500/40 transition-all duration-500 group-hover:scale-110">
                              <div className="grid grid-cols-2 gap-1 w-16 h-16">
                                <div className="w-7 h-7 bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg shadow-inner"></div>
                                <div className="w-7 h-7 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg shadow-inner"></div>
                                <div className="w-7 h-7 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-lg shadow-inner"></div>
                                <div className="w-7 h-7 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center shadow-inner">
                                  <span className="text-white text-lg font-bold">+</span>
                                </div>
                              </div>
                            </div>
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="space-y-4 w-full">
                            <h2 className="text-3xl font-bold text-white mb-2">Open Collection</h2>
                            
                            {/* Action Button */}
                            <Button 
                              onClick={handleCreateCollection}
                              className="w-full bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white border-0 shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 py-3 text-lg font-semibold rounded-xl"
                            >
                              <Zap className="h-5 w-5 mr-2" />
                              Create Collection
                            </Button>

                            {/* Description */}
                            <p className="text-gray-300 leading-relaxed text-sm">
                              Publish immediately, ideal for ongoing series or iterative works. Best for Editions or mixed-format collections.
                            </p>

                            {/* Features List */}
                            <div className="space-y-3 pt-4">
                              <div className="flex items-center gap-3 text-sm text-gray-300 group/feature hover:text-white transition-colors duration-200">
                                <div className="w-8 h-8 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-lg flex items-center justify-center group-hover/feature:from-orange-500/30 group-hover/feature:to-pink-500/30 transition-all duration-200">
                                  <Code className="h-4 w-4 text-orange-400" />
                                </div>
                                <span>ERC-1155 contract</span>
                              </div>
                              <div className="flex items-center gap-3 text-sm text-gray-300 group/feature hover:text-white transition-colors duration-200">
                                <div className="w-8 h-8 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-lg flex items-center justify-center group-hover/feature:from-orange-500/30 group-hover/feature:to-pink-500/30 transition-all duration-200">
                                  <Zap className="h-4 w-4 text-orange-400" />
                                </div>
                                <span>Launch instantly</span>
                              </div>
                              <div className="flex items-center gap-3 text-sm text-gray-300 group/feature hover:text-white transition-colors duration-200">
                                <div className="w-8 h-8 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-lg flex items-center justify-center group-hover/feature:from-orange-500/30 group-hover/feature:to-pink-500/30 transition-all duration-200">
                                  <Link className="h-4 w-4 text-orange-400" />
                                </div>
                                <span>Add new items anytime </span>
                              </div>
                              <div className="flex items-center gap-3 text-sm text-gray-300 group/feature hover:text-white transition-colors duration-200">
                                <div className="w-8 h-8 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-lg flex items-center justify-center group-hover/feature:from-orange-500/30 group-hover/feature:to-pink-500/30 transition-all duration-200">
                                  <ImageIcon className="h-4 w-4 text-orange-400" />
                                </div>
                                <span>Items show right away</span>
                              </div>
                              <div className="flex items-center gap-3 text-sm text-gray-300 group/feature hover:text-white transition-colors duration-200">
                                <div className="w-8 h-8 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-lg flex items-center justify-center group-hover/feature:from-orange-500/30 group-hover/feature:to-pink-500/30 transition-all duration-200">
                                  <RefreshCw className="h-4 w-4 text-orange-400" />
                                </div>
                                <span>Great for evolving collections</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Footer />
        </div>
      </div>
    </div>
  );
}
