import React from 'react'
import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function StakeView() {
  return (
    <div>
                <div className="space-y-2">
          <div className="flex justify-between text-sm text-zinc-400">
            <span>You're staking</span>
            <span className="flex items-center">
              <Wallet className="h-3 w-3 mr-1" />
              <span>amount</span>
              <span className="text-purple-500 ml-2">Max</span>
            </span>
          </div>
          <div className="flex items-center rounded-lg bg-zinc-800 p-2">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded-full bg-orange-500" />
              <span>STRATS</span>
            </div>
            <Input
              type="number"
              placeholder="0"
              className="ml-auto w-24 bg-transparent text-right text-2xl"
            />
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm text-zinc-400">
            <span>To receive</span>
          </div>
          <div className="flex items-center rounded-lg bg-zinc-800 p-2 py-3">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded-full bg-[#011B73]" />
              <span>LSTRATS</span>
            </div>
          </div>
        </div>
        <Button className="w-full bg-blue-500 py-6 text-lg font-semibold hover:bg-blue-600">
          Convert to $LSTRATS
        </Button>
    </div>
  )
}

export default StakeView