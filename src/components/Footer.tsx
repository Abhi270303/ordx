"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, Sun, Circle, DollarSign } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card px-6 py-3">
      <div className="flex items-center justify-between text-sm">
        {/* Left Side - Status Indicators */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span className="text-muted-foreground">Degraded</span>
          </div>
          <span className="text-muted-foreground">Aggregating</span>
          <span className="text-muted-foreground">Networks</span>
        </div>

        {/* Center - Links */}
        <div className="flex items-center gap-4">
          <Button variant="link" size="sm" className="text-muted-foreground p-0 h-auto">
            Terms of Service
          </Button>
          <Button variant="link" size="sm" className="text-muted-foreground p-0 h-auto">
            Privacy Policy
          </Button>
        </div>

        {/* Right Side - Financial Info & Utilities */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-medium">$3,490.29</span>
            <span className="text-muted-foreground">0.25 GWEI</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <HelpCircle className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Sun className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
              <Circle className="h-4 w-4" />
            </Button>
            <Badge variant="outline">Pro</Badge>
            <Badge variant="outline">Crypto</Badge>
            <Badge variant="outline" className="flex items-center gap-1">
              <DollarSign className="h-3 w-3" />
              USD
            </Badge>
          </div>
        </div>
      </div>
    </footer>
  );
} 