import React from 'react';
import { Flame } from 'lucide-react';

export default function TickerBanner({ items }) {
  const highlights = [
    { text: "Apex Trader Funding: 90% OFF with code STAR" },
    { text: "Tradeify: 50% OFF evaluations with code PROPFT" },
    { text: "MyFundedFutures: 50% OFF with code MKT91 (Activation fees eliminated)" },
    { text: "Bulenox: 91% OFF Flash Sale with code BULEN91" },
    { text: "TakeProfitTrader: 40% OFF + $130 fee credit with code MKT91" },
    { text: "MyFundedPerpetuals: Crypto Perps waitlist open with code PERPWAITLIST" },
    { text: "FTMO Futures: CME US Division in integration" }
  ];

  const fullList = [...highlights, ...highlights];

  return (
    <div className="bg-[#0b0e17] border-b border-white/5 py-1.5 overflow-hidden select-none">
      <div className="max-w-6xl mx-auto px-4 flex items-center">
        <div className="flex items-center space-x-1.5 text-amber-400 text-[11px] font-medium shrink-0 mr-4">
          <Flame className="w-3.5 h-3.5" />
          <span className="font-semibold uppercase tracking-wider">Top Deals</span>
        </div>

        <div className="overflow-hidden w-full whitespace-nowrap flex">
          <div className="animate-marquee flex items-center space-x-8 text-xs text-slate-400">
            {fullList.map((item, idx) => (
              <div key={idx} className="inline-flex items-center space-x-2">
                <span className="text-slate-200">{item.text}</span>
                <span className="text-slate-600">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
