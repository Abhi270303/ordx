"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { X, Filter, DollarSign, Star, Clock, Tag } from "lucide-react";
import { useState } from "react";

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const priceRanges = [
  { label: "Under 0.01 ETH", value: "0-0.01" },
  { label: "0.01 - 0.1 ETH", value: "0.01-0.1" },
  { label: "0.1 - 1 ETH", value: "0.1-1" },
  { label: "1 - 10 ETH", value: "1-10" },
  { label: "Over 10 ETH", value: "10+" },
];

const rarityLevels = [
  { label: "Common", value: "common", count: 1234 },
  { label: "Uncommon", value: "uncommon", count: 567 },
  { label: "Rare", value: "rare", count: 234 },
  { label: "Epic", value: "epic", count: 89 },
  { label: "Legendary", value: "legendary", count: 23 },
];

const statusFilters = [
  { label: "Buy Now", value: "buy-now", count: 456 },
  { label: "On Auction", value: "auction", count: 123 },
  { label: "Has Offers", value: "offers", count: 78 },
  { label: "Recently Listed", value: "recent", count: 234 },
];

const traitFilters = [
  { category: "Background", traits: ["Blue", "Red", "Green", "Purple"] },
  { category: "Eyes", traits: ["Laser", "Sleepy", "Wide", "Closed"] },
  { category: "Mouth", traits: ["Smile", "Frown", "Open", "Tongue"] },
  { category: "Accessories", traits: ["Hat", "Glasses", "Earring", "None"] },
];

export function FilterSidebar({ isOpen, onClose }: FilterSidebarProps) {
  const [priceRange, setPriceRange] = useState([0, 10]);
  const [selectedRarities, setSelectedRarities] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [selectedTraits, setSelectedTraits] = useState<string[]>([]);

  const handleRarityToggle = (rarity: string) => {
    setSelectedRarities(prev => 
      prev.includes(rarity) 
        ? prev.filter(r => r !== rarity)
        : [...prev, rarity]
    );
  };

  const handleStatusToggle = (status: string) => {
    setSelectedStatuses(prev => 
      prev.includes(status) 
        ? prev.filter(s => s !== status)
        : [...prev, status]
    );
  };

  const handleTraitToggle = (trait: string) => {
    setSelectedTraits(prev => 
      prev.includes(trait) 
        ? prev.filter(t => t !== trait)
        : [...prev, trait]
    );
  };

  const clearAllFilters = () => {
    setPriceRange([0, 10]);
    setSelectedRarities([]);
    setSelectedStatuses([]);
    setSelectedTraits([]);
  };

  const activeFiltersCount = selectedRarities.length + selectedStatuses.length + selectedTraits.length;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex">
      <div className="w-80 bg-card border-r border-border overflow-y-auto">
        <div className="p-4 border-b border-border">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              <h2 className="text-lg font-semibold">Filters</h2>
              {activeFiltersCount > 0 && (
                <Badge variant="secondary">{activeFiltersCount}</Badge>
              )}
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          {activeFiltersCount > 0 && (
            <Button variant="outline" size="sm" onClick={clearAllFilters} className="w-full">
              Clear All Filters
            </Button>
          )}
        </div>

        <div className="p-4 space-y-6">
          {/* Price Range */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <DollarSign className="h-4 w-4" />
                Price Range
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {priceRanges.map((range) => (
                  <div key={range.value} className="flex items-center space-x-2">
                    <Checkbox id={range.value} />
                    <label htmlFor={range.value} className="text-sm cursor-pointer">
                      {range.label}
                    </label>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{priceRange[0]} ETH</span>
                  <span>{priceRange[1]} ETH</span>
                </div>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={10}
                  min={0}
                  step={0.1}
                  className="w-full"
                />
              </div>
            </CardContent>
          </Card>

          {/* Rarity */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <Star className="h-4 w-4" />
                Rarity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {rarityLevels.map((rarity) => (
                  <div key={rarity.value} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id={rarity.value}
                        checked={selectedRarities.includes(rarity.value)}
                        onCheckedChange={() => handleRarityToggle(rarity.value)}
                      />
                      <label htmlFor={rarity.value} className="text-sm cursor-pointer">
                        {rarity.label}
                      </label>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {rarity.count}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Status */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <Clock className="h-4 w-4" />
                Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {statusFilters.map((status) => (
                  <div key={status.value} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id={status.value}
                        checked={selectedStatuses.includes(status.value)}
                        onCheckedChange={() => handleStatusToggle(status.value)}
                      />
                      <label htmlFor={status.value} className="text-sm cursor-pointer">
                        {status.label}
                      </label>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {status.count}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Traits */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <Tag className="h-4 w-4" />
                Traits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {traitFilters.map((category) => (
                  <div key={category.category}>
                    <h4 className="font-medium text-sm mb-2">{category.category}</h4>
                    <div className="space-y-1">
                      {category.traits.map((trait) => (
                        <div key={trait} className="flex items-center space-x-2">
                          <Checkbox 
                            id={trait}
                            checked={selectedTraits.includes(trait)}
                            onCheckedChange={() => handleTraitToggle(trait)}
                          />
                          <label htmlFor={trait} className="text-sm cursor-pointer">
                            {trait}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Backdrop */}
      <div className="flex-1" onClick={onClose}></div>
    </div>
  );
} 