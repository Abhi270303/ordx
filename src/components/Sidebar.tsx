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
    <aside className="w-16 bg-card border-r border-border flex flex-col items-center py-4">
      <div className="flex flex-col items-center gap-6">
        {navItems.map((item, index) => {
          const isActive = pathname === item.path;
          return (
            <button
              key={index}
              onClick={() => router.push(item.path)}
              className={cn(
                "p-3 rounded-lg transition-colors hover:bg-muted",
                isActive && "bg-primary text-primary-foreground"
              )}
              title={item.label}
            >
              <item.icon className="h-5 w-5" />
            </button>
          );
        })}
      </div>
    </aside>
  );
} 