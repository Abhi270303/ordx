"use client";

import { Search, Wallet, User, ChevronDown, Bell, Settings, LogOut } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useWalletConnector } from '@/hooks/useWalletConnector';

export function Header() {
  const { address, isConnected, connectWallet, disconnect, formatAddress } = useWalletConnector();

  return (
    <header className="border-b border-border bg-card px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="OrdX Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <h1 className="text-xl font-bold">OrdX</h1>
          </div>
        </div>


        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Network Indicator */}
          <div className="flex items-center gap-2 px-3 py-1 bg-muted/50 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-sm font-medium">StarkNet</span>
            <Badge variant="secondary" className="text-xs">Mainnet</Badge>
          </div>

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="h-5 w-5" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </Button>

          {/* Wallet Connection */}
          {isConnected ? (
            <div className="flex items-center gap-3">
              {/* Wallet Address */}
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                {formatAddress}
                <ChevronDown className="h-3 w-3" />
              </Button>

              {/* User Menu */}
              <div className="relative group">
                <Avatar className="h-8 w-8 cursor-pointer">
                  <AvatarImage src="/placeholder-avatar.jpg" />
                  <AvatarFallback>
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>

                {/* Dropdown Menu */}
                <div className="absolute right-0 top-full mt-2 w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-2">
                    <div className="px-3 py-2 text-sm font-medium border-b border-border mb-2">
                      {formatAddress}
                    </div>
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      <User className="h-4 w-4 mr-2" />
                      Profile
                    </Button>
                    <Button variant="ghost" size="sm" className="w-full justify-start">
                      <Settings className="h-4 w-4 mr-2" />
                      Settings
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start text-red-500 hover:text-red-600"
                      onClick={() => disconnect()}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Disconnect
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <Button onClick={connectWallet} className="flex items-center gap-2">
              <Wallet className="h-4 w-4" />
              Connect Wallet
            </Button>
          )}
        </div>
      </div>
    </header>
  );
} 