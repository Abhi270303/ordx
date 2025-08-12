"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { 
  Sailboat, 
  Compass, 
  Grid, 
  Circle, 
  Calendar, 
  List, 
  Anchor, 
  ArrowLeftRight, 
  User, 
  FileText, 
  Settings,
  Palette
} from "lucide-react";

const navItems = [
  { icon: Compass, label: "Explore", path: "/", active: false },
  { icon: Grid, label: "Collections", path: "/collections", active: false },
  { icon: Palette, label: "Studio", path: "/studio", active: false },
  { icon: Calendar, label: "Activity", path: "/activity", active: false },
  { icon: List, label: "Watchlist", path: "/watchlist", active: false },
  { icon: Anchor, label: "Portfolio", path: "/portfolio", active: false },
  { icon: ArrowLeftRight, label: "Bridge", path: "/bridge", active: false },
  { icon: User, label: "Profile", path: "/profile", active: false },
  { icon: FileText, label: "Docs", path: "/docs", active: false },
  { icon: Settings, label: "Settings", path: "/settings", active: false },
];

export function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Blur overlay when sidebar is expanded */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsExpanded(false)}
        />
      )}
      
      <aside 
        className={cn(
          "fixed lg:relative top-0 left-0 h-full bg-card border-r border-border flex flex-col items-center py-4 flex-shrink-0 z-50 transition-all duration-300 ease-in-out",
          isExpanded ? "w-64" : "w-16"
        )}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Navigation Items */}
        <div className="flex flex-col items-center gap-2 w-full px-2">
          {navItems.map((item, index) => {
            const isActive = pathname === item.path;
            return (
              <button
                key={index}
                onClick={() => {
                  router.push(item.path);
                  // Close sidebar on mobile after navigation
                  if (window.innerWidth < 1024) {
                    setIsExpanded(false);
                  }
                }}
                className={cn(
                  "w-full h-10 px-3 rounded-lg transition-all duration-200 flex items-center justify-start gap-3 hover:bg-muted/50 group",
                  isActive && "bg-background text-foreground shadow-sm ring-1 ring-border/50"
                )}
                title={item.label}
              >
                <div className="flex-shrink-0">
                  <item.icon className={cn(
                    "h-5 w-5 transition-colors",
                    isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                  )} />
                </div>
                
                {isExpanded && (
                  <span className={cn(
                    "text-sm font-medium transition-colors whitespace-nowrap",
                    isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                  )}>
                    {item.label}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile close button */}
        {isExpanded && (
          <button
            onClick={() => setIsExpanded(false)}
            className="lg:hidden absolute top-4 right-4 w-8 h-8 rounded-lg bg-muted/50 hover:bg-muted flex items-center justify-center"
          >
            <span className="text-sm">×</span>
          </button>
        )}
      </aside>
    </>
  );
} 