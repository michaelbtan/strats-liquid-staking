import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function BalanceCard() {
  return (
    <div>
      <Card className="w-full max-w-md bg-zinc-900 text-white">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Balances</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between">
            <div className="text-sm text-zinc-400 font-semibold">$STRATS</div>
            <div className="text-xl font-bold">0.0000</div>
          </div>
          <div className="flex justify-between">
            <div className="text-sm text-zinc-400 font-semibold">$LSTRATS</div>
            <div className="text-xl font-bold">0.0000</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default BalanceCard;
