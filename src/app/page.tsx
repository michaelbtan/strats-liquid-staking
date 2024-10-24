import { TransactionsTable } from "@/components/transactions/TransactionsTable";
import StakingInfo from "@/components/staking/StakingInfo";
import StakingCard from "@/components/staking/StakingCard";

export default function Home() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-full max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-5 lg:gap-8">
          {/* Left column */}
          <div className="grid grid-cols-1 gap-4 lg:col-span-3 lg:col-span-5/3">
            <section aria-labelledby="section-1-title">
              <h2 id="liquid-staking-info" className="sr-only">
                Liquid Staking and Yield Powered by STRATO
              </h2>
              <div className="overflow-hidden">
                <div className="p-6">
                  <StakingInfo />
                </div>
              </div>
            </section>
          </div>

          {/* Right column */}
          <div className="grid grid-cols-1 gap-4 lg:col-span-2 lg:col-span-4/3">
            <section aria-labelledby="section-2-title">
              <h2 id="liquid-staking-card" className="sr-only">
                Liquid Staking Card
              </h2>
              <div className="overflow-hidden">
                <div className="p-6">
                  <StakingCard />
                </div>
              </div>
            </section>
          </div>
        </div>
        <TransactionsTable />
      </div>
    </div>
  );
}
