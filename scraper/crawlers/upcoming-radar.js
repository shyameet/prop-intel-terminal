export const EXPANDED_UPCOMING_RADAR = [
  {
    id: "radar-mfp",
    firmName: "MyFundedPerpetuals",
    parentCompany: "MyFundedFutures / MyFundedFX Group",
    assetClass: "Crypto Perpetual Swaps",
    status: "Private Beta / Waitlist Open",
    confidence: "Confirmed (Official)",
    expectedDate: "Q2 / Q3 2025",
    keyFeatures: [
      "Native crypto perps on major crypto pairs (BTC, ETH, SOL, altcoins)",
      "Tradovate / Web3 hybrid account connectivity",
      "Direct USDT/USDC deposits and rapid payout rails",
      "Special discounts and cross-firm perks for active MFFU funded traders"
    ],
    officialLink: "https://myfundedfutures.com",
    watchScore: 98
  },
  {
    id: "radar-ftmo-futures",
    firmName: "FTMO Futures Division",
    parentCompany: "FTMO Group",
    assetClass: "US CME / CBOT / NYMEX Futures",
    status: "Infrastructure & Regulatory Finalization",
    confidence: "Confirmed (Official)",
    expectedDate: "2025 - 2026",
    keyFeatures: [
      "Direct exchange execution via Rithmic and CQG connectivity",
      "Zero MetaQuotes CFD reliance (immune to broker crackdowns)",
      "Industry-leading payout reputation brought to futures trading",
      "Tradovate, NinjaTrader & custom web terminal integration"
    ],
    officialLink: "https://ftmo.com",
    watchScore: 99
  },
  {
    id: "radar-tradeify-instant",
    firmName: "Tradeify Straight-To-Funded & Scaling 2.0",
    parentCompany: "Tradeify Co",
    assetClass: "CME US Futures",
    status: "Beta Testing Rollout",
    confidence: "Confirmed (Official)",
    expectedDate: "Active Rollout",
    keyFeatures: [
      "Zero evaluation phase (instant funded account access)",
      "Strict End-of-Day trailing drawdown (no intraday unrealized trailing)",
      "Daily payout availability once safety threshold is achieved",
      "TradingView and Tradovate direct integration"
    ],
    officialLink: "https://tradeify.co",
    watchScore: 94
  },
  {
    id: "radar-hyro-bybit",
    firmName: "HyroTrader Institutional Perps",
    parentCompany: "HyroTrader Group",
    assetClass: "Crypto Perpetuals (Bybit API)",
    status: "Public Rollout",
    confidence: "Live & Expanding",
    expectedDate: "Immediate",
    keyFeatures: [
      "Over 700+ crypto perpetual pairs on Bybit liquidity",
      "Real exchange execution with transparent depth of book",
      "Mandatory stop-loss risk parameter within 5 minutes",
      "Crypto native withdrawals in USDT and Bitcoin"
    ],
    officialLink: "https://hyrotrader.com",
    watchScore: 91
  },
  {
    id: "radar-pred-prop",
    firmName: "Prediction Prop Syndicate",
    parentCompany: "Decentralized Markets Collective",
    assetClass: "Prediction Markets & Event Contracts",
    status: "Alpha Prototype Testing",
    confidence: "In Development",
    expectedDate: "Late 2025",
    keyFeatures: [
      "Event contract forecasting challenges (Kalshi / Polymarket)",
      "Funded bankroll for political, macro, and economic events",
      "Brier Score probabilistic evaluation framework",
      "Novel revenue share for top geopolitical & economic forecasters"
    ],
    officialLink: "https://polymarket.com",
    watchScore: 82
  },
  {
    id: "radar-topstep-perps",
    firmName: "Topstep Crypto & Multi-Asset Expansion",
    parentCompany: "Topstep LLC",
    assetClass: "Crypto Futures & Expanded Multi-Asset",
    status: "Research & Community Polling",
    confidence: "Rumored / High Likelihood",
    expectedDate: "2026",
    keyFeatures: [
      "Expanding CME Micro Bitcoin & Micro Ether into native crypto feeds",
      "TopstepX proprietary engine scaling to 24/7 trading hours",
      "Unified risk dashboard across futures and crypto"
    ],
    officialLink: "https://topstep.com",
    watchScore: 88
  },
  {
    id: "radar-fundednext-futures",
    firmName: "FundedNext Stellar Futures Expansion",
    parentCompany: "Next Ventures",
    assetClass: "CME & Eurex Futures",
    status: "Public Launch",
    confidence: "Confirmed (Official)",
    expectedDate: "Active Live",
    keyFeatures: [
      "15% profit sharing earned during challenge phases",
      "Integration with Tradovate and MatchTrader platforms",
      "Balance-based drawdown models without intraday traps"
    ],
    officialLink: "https://fundednext.com",
    watchScore: 92
  },
  {
    id: "radar-aquafutures",
    firmName: "AquaFutures (Beginner & Standard)",
    parentCompany: "AquaFunded Group",
    assetClass: "US CME Futures",
    status: "Live Integration",
    confidence: "Confirmed (Official)",
    expectedDate: "Active Live",
    keyFeatures: [
      "Multi-tier account options catering from micro traders to size",
      "No minimum trading day restrictions",
      "Low activation fees and competitive commission schedules"
    ],
    officialLink: "https://aquafunded.com",
    watchScore: 86
  }
];

export async function crawlUpcomingRadar() {
  return EXPANDED_UPCOMING_RADAR;
}
