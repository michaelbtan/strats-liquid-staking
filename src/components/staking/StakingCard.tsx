"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export default function StakingCard() {
  const [value, setValue] = useState("stake");

  return (
    <Card className="w-full max-w-md bg-zinc-900 text-white">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Convert to $LSTRAT</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="w-full max-w-md mx-auto">
          <ToggleGroup
            type="single"
            value={value}
            onValueChange={(value) => setValue(value)}
            className="grid grid-cols-2 gap-2 p-1 rounded-full"
          >
            <ToggleGroupItem
              value="stake"
              className="rounded-full py-2 text-sm font-medium"
            >
              Stake
              {value === "stake" && (
                <span className="ml-2 inline-flex items-center rounded-full bg-green-500 px-2 py-1 text-xs font-medium text-white">
                  ≈ 8.00% APY
                </span>
              )}
            </ToggleGroupItem>
            <ToggleGroupItem
              value="unstake"
              className="rounded-full py-2 text-sm font-medium"
            >
              Unstake
            </ToggleGroupItem>
          </ToggleGroup>
        </div>


        <div className="flex justify-between text-sm text-zinc-400">
          <span>1 $STRAT</span>
          <span>≈1 $LSTRAT</span>
        </div>
      </CardContent>
    </Card>
  );
}
