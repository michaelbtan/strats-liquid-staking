'use client';
import { useState } from "react";

export default function StakingInfo() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="text-primary min-h-screen flex justify-center p-4">
      <div className="max-w-2xl w-full space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Liquid Staking and Yield Powered by STRATO
          </h1>
          <p className="text-gray-400 text-xl md:text-2xl">
            Stake your STRAT tokens and earn rewards.
          </p>
        </div>

        <hr className="border-gray-800" />

        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold">
            What is Liquid Staking?
          </h2>
          <p className={`text-gray-400 text-lg ${showMore ? "" : "line-clamp-3"}`}>
            Liquid staking is a decentralized finance (DeFi) solution that allows users to stake their cryptocurrency assets while still retaining liquidity. Unlike traditional staking, where assets are locked and inaccessible, liquid staking provides users with derivative tokens representing their staked assets, enabling them to use these tokens in other financial applications. In this model, yields are generated not only from traditional staking rewards but also from interest and returns derived from treasuries or other financial instruments. Platforms managing liquid staking may invest the staked assets in interest-bearing accounts or government treasuries, generating additional yield. This combined approach allows users to earn rewards both from securing the network and from financial returns, enhancing the overall yield without sacrificing liquidity.
          </p>
          <button 
            onClick={toggleShowMore} 
            className="text-blue-500 hover:underline"
          >
            {showMore ? "See Less" : "See More"}
          </button>
        </div>
      </div>
    </div>
  );
}
