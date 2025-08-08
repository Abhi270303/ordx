"use client";

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
  Settings 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter, usePathname } from "next/navigation";

const navItems = [
  { icon: Compass, label: "Explore", path: "/", active: false },
  { icon: Grid, label: "Collections", path: "/collections", active: false },
  { icon: Circle, label: "Stats", path: "/stats", active: false },
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

  return (
    <aside className="w-16 bg-card border-r border-border flex flex-col items-center py-4 flex-shrink-0">
      <div className="flex flex-col items-center gap-6">
        {navItems.map((item, index) => {
          const isActive = pathname === item.path;
          return (
            <button
              key={index}
              onClick={() => router.push(item.path)}
              className={cn(
                "w-8 h-8 sm:w-10 sm:h-10 p-2 rounded-lg transition-colors hover:bg-muted flex items-center justify-center flex-shrink-0",
                isActive && "bg-background text-foreground shadow-sm ring-1 ring-border/50"
              )}
              title={item.label}
            >
              <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          );
        })}
      </div>
    </aside>
  );
} 