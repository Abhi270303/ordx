"use client";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { MainContent } from "./MainContent";
import { TrendingSidebar } from "./TrendingSidebar";
import { Footer } from "./Footer";

export function NFTDashboard() {
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
            <MainContent />
            <TrendingSidebar />
          </div>
          
          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
} 