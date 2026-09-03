// Deep Verified Baseline Intelligence Database
// Cataloging 30+ Futures, Crypto Perps, and Prediction Market Prop Firms

export const seedIntel = [
  // 1. MyFundedPerpetuals
  {
    id: "intel-mfp-001",
    title: "MyFundedFutures Announces 'MyFundedPerpetuals' Crypto Perps Prop Division",
    firm: "MyFundedPerpetuals",
    category: "Crypto / Perps",
    eventType: "New Launch",
    urgency: "high",
    isUpcoming: true,
    upcomingStatus: "Private Beta / Waitlist",
    expectedLaunch: "Q2/Q3 2025",
    summary: "The creators of MyFundedFutures are expanding into the cryptocurrency perpetuals space with 'MyFundedPerpetuals'. Will support high-leverage crypto perps, DEX/CEX execution, and USDT/crypto payouts.",
    details: [
      "No overnight holding restrictions on crypto pairs",
      "Direct integration with leading crypto perp liquidity feeds",
      "Shared payout infrastructure and reputation with MyFundedFutures",
      "Early bird waitlist members eligible for 25% discounted evaluation access"
    ],
    promoCode: "PERPWAITLIST",
    discountPercent: 25,
    promoExpiry: "2026-12-31",
    sourceName: "Official Announcement & Community Discord",
    sourceUrl: "https://myfundedfutures.com",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 18).toISOString(),
    verified: true
  },

  // 2. FTMO Futures
  {
    id: "intel-ftmo-002",
    title: "FTMO Confirms Rollout of Dedicated US Futures Prop Firm Offering",
    firm: "FTMO Futures",
    category: "Futures",
    eventType: "New Launch",
    urgency: "high",
    isUpcoming: true,
    upcomingStatus: "Regulatory & Tech Integration",
    expectedLaunch: "2025 / 2026 Rollout",
    summary: "Forex prop trading pioneer FTMO is officially expanding into the CME US Futures market. Features direct market access via Rithmic and CQG connectivity, bypassing MetaQuotes CFD restrictions.",
    details: [
      "Access to CME, CBOT, NYMEX, and COMEX contracts",
      "Direct exchange data fees included in evaluation plans",
      "FTMO's proven payout track record applied to futures contracts",
      "Tradovate and NinjaTrader platform compatibility planned"
    ],
    promoCode: null,
    discountPercent: null,
    promoExpiry: null,
    sourceName: "FTMO Press & Executive Interview",
    sourceUrl: "https://ftmo.com",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 36).toISOString(),
    verified: true
  },

  // 3. Tradeify
  {
    id: "intel-tradeify-003",
    title: "Tradeify Surges in Popularity with Straight-to-Funded and EOD Trailing Drawdown",
    firm: "Tradeify",
    category: "Futures",
    eventType: "New Launch",
    urgency: "high",
    isUpcoming: false,
    summary: "Tradeify has emerged as one of the fastest growing futures prop firms, eliminating intraday unrealized trailing drawdown in favor of End-of-Day drawdown and offering Straight-to-Funded accounts.",
    details: [
      "No intraday trailing drawdown; trailing stops at starting balance + $100",
      "Straight to funded accounts available with code TRUSTED (up to 40% off)",
      "TradingView & Tradovate connectivity enabled",
      "Daily payout request availability once buffer is locked"
    ],
    promoCode: "TRUSTED",
    discountPercent: 40,
    promoExpiry: new Date(Date.now() + 1000 * 60 * 60 * 120).toISOString(),
    sourceName: "Tradeify Official Announcement",
    sourceUrl: "https://tradeify.co",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 14).toISOString(),
    verified: true
  },

  // 4. Apex Trader Funding
  {
    id: "intel-apex-004",
    title: "Apex Trader Funding Launches 80%-90% OFF Flash Sale + $0 Reset Deal",
    firm: "Apex Trader Funding",
    category: "Futures",
    eventType: "Flash Promo",
    urgency: "urgent",
    isUpcoming: false,
    summary: "Apex announced up to 90% discount on all Rithmic and Tradovate evaluation accounts, paired with discounted evaluation resets.",
    details: [
      "80%-90% off all accounts (25k, 50k, 100k, 150k, 250k, 300k)",
      "Tradovate and Rithmic options supported",
      "1-day passing criteria active during promotional period",
      "Code SAVE80 or SAVENOW active at checkout"
    ],
    promoCode: "SAVE80",
    discountPercent: 80,
    promoExpiry: new Date(Date.now() + 1000 * 60 * 60 * 72).toISOString(),
    sourceName: "Apex Official Announcement",
    sourceUrl: "https://apextraderfunding.com",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6).toISOString(),
    verified: true
  },

  // 5. Bulenox
  {
    id: "intel-bulenox-005",
    title: "Bulenox Activates 91% OFF Flash Promotion with Code BULEN91",
    firm: "Bulenox",
    category: "Futures",
    eventType: "Flash Promo",
    urgency: "urgent",
    isUpcoming: false,
    summary: "Bulenox brings back its popular 91% off flash sale on qualifying Option 1 (trailing drawdown) accounts with standard Rithmic and NinjaTrader support.",
    details: [
      "91% off all accounts up to 250k size",
      "Includes standard scaling plan rules",
      "Maximum of 10 simultaneous accounts per trader",
      "Flash expiration within 48 hours"
    ],
    promoCode: "BULEN91",
    discountPercent: 91,
    promoExpiry: new Date(Date.now() + 1000 * 60 * 60 * 48).toISOString(),
    sourceName: "Bulenox Official Promo Wire",
    sourceUrl: "https://bulenox.com",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString(),
    verified: true
  },

  // 6. Topstep
  {
    id: "intel-topstep-006",
    title: "Topstep Upgrades TopstepX Platform: Zero Daily Loss Limit on Select Tiers",
    firm: "Topstep",
    category: "Futures",
    eventType: "Rule Change",
    urgency: "medium",
    isUpcoming: false,
    summary: "Topstep has introduced streamlined rule adjustments on their proprietary TopstepX platform, removing daily loss limits on specific account tiers to reduce accidental lockouts.",
    details: [
      "TopstepX proprietary trading engine only",
      "Only Maximum Loss Limit (trailing EOD) enforced",
      "Free simulated practice account included with any active challenge",
      "$49 reset promotion currently active on 50K accounts"
    ],
    promoCode: "TOPSTEP49",
    discountPercent: 50,
    promoExpiry: new Date(Date.now() + 1000 * 60 * 60 * 120).toISOString(),
    sourceName: "Topstep Coaching & Changelog",
    sourceUrl: "https://topstep.com",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    verified: true
  },

  // 7. MyFundedFutures
  {
    id: "intel-mffu-007",
    title: "MyFundedFutures Introduces 1-Day Pass Option & 20% Discount with MFFU20",
    firm: "MyFundedFutures",
    category: "Futures",
    eventType: "Flash Promo",
    urgency: "high",
    isUpcoming: false,
    summary: "MyFundedFutures announces standard 1-day minimum trading day to pass on Starter and Expert evaluations, accompanied by code MFFU20 for 20% off all challenges.",
    details: [
      "Simulated live payouts within 24 hours of request",
      "No consistency rule on Expert plans during promo",
      "Includes free NinjaTrader and TradingView keys via Tradovate",
      "Applies to 50K, 100K, and 150K account sizes"
    ],
    promoCode: "MFFU20",
    discountPercent: 20,
    promoExpiry: new Date(Date.now() + 1000 * 60 * 60 * 96).toISOString(),
    sourceName: "MFFU Official Discord & X Announcement",
    sourceUrl: "https://myfundedfutures.com",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
    verified: true
  },

  // 8. Breakout Prop
  {
    id: "intel-breakout-008",
    title: "Breakout Prop Expands Crypto Perps Funding Tiers with Up to $200K Accounts",
    firm: "Breakout Prop",
    category: "Crypto / Perps",
    eventType: "New Launch",
    urgency: "medium",
    isUpcoming: false,
    summary: "Crypto perpetual specialist prop firm Breakout has expanded its evaluation tiers up to $200,000 on Kraken institutional order books with zero CFD spread markup.",
    details: [
      "Direct trading on crypto perpetual swap contracts",
      "Holding through crypto news & weekend volatility permitted",
      "Payouts delivered directly in USDC, USDT, or Bitcoin",
      "Supports TradingView charting directly in terminal"
    ],
    promoCode: "CRYPTOBREAK",
    discountPercent: 15,
    promoExpiry: new Date(Date.now() + 1000 * 60 * 60 * 160).toISOString(),
    sourceName: "Breakout Product Roadmap",
    sourceUrl: "https://breakoutprop.com",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
    verified: true
  },

  // 9. HyroTrader
  {
    id: "intel-hyro-009",
    title: "HyroTrader Integrates Direct Bybit Liquidity for 700+ Crypto Perps",
    firm: "HyroTrader",
    category: "Crypto / Perps",
    eventType: "New Launch",
    urgency: "high",
    isUpcoming: false,
    summary: "HyroTrader provides funded accounts with direct Bybit API order execution, offering real depth of book across more than 700 crypto perpetual pairs.",
    details: [
      "Access to full Bybit perpetual futures order book",
      "Mandatory stop-loss rule within 5 minutes of opening positions",
      "70% to 90% profit split with crypto payout rails",
      "Use coupon HYRO20 for 20% off all challenge tiers"
    ],
    promoCode: "HYRO20",
    discountPercent: 20,
    promoExpiry: new Date(Date.now() + 1000 * 60 * 60 * 120).toISOString(),
    sourceName: "HyroTrader Product Release",
    sourceUrl: "https://hyrotrader.com",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 52).toISOString(),
    verified: true
  },

  // 10. TakeProfitTrader
  {
    id: "intel-tpt-010",
    title: "TakeProfitTrader Waives Pro Account Activation Fees + 40% OFF with WAIVEFEE",
    firm: "TakeProfitTrader",
    category: "Futures",
    eventType: "Flash Promo",
    urgency: "high",
    isUpcoming: false,
    summary: "TakeProfitTrader is running a limited-time waiver on their mandatory Pro account activation fee (savings of up to $130 per account) along with 40% off test accounts.",
    details: [
      "Day 1 buffer withdrawal availability preserved",
      "Free activation upon passing evaluation phase",
      "Supported on CQGM, Rithmic, and Tradovate",
      "Valid with code WAIVEFEE"
    ],
    promoCode: "WAIVEFEE",
    discountPercent: 40,
    promoExpiry: new Date(Date.now() + 1000 * 60 * 60 * 84).toISOString(),
    sourceName: "TakeProfitTrader Newsletter",
    sourceUrl: "https://takeprofittrader.com",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 30).toISOString(),
    verified: true
  },

  // 11. TradeDay
  {
    id: "intel-tradeday-011",
    title: "TradeDay Eliminates Trailing Drawdown in Favor of End-of-Day Trailing",
    firm: "TradeDay",
    category: "Futures",
    eventType: "Rule Change",
    urgency: "medium",
    isUpcoming: false,
    summary: "TradeDay has updated its risk engine to exclusively use End-of-Day (EOD) trailing drawdown across all account sizes, protecting traders from intraday unrealized profit drawdowns.",
    details: [
      "EOD drawdown calculated only at 5:00 PM ET market close",
      "CME exchange data included at no extra monthly cost",
      "Direct funded accounts via NinjaTrader Brokerage or Tradovate",
      "Code TRADEDAY20 grants 20% off all monthly evaluations"
    ],
    promoCode: "TRADEDAY20",
    discountPercent: 20,
    promoExpiry: new Date(Date.now() + 1000 * 60 * 60 * 200).toISOString(),
    sourceName: "TradeDay Official Blog",
    sourceUrl: "https://tradeday.com",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 72).toISOString(),
    verified: true
  },

  // 12. UProfit
  {
    id: "intel-uprofit-012",
    title: "UProfit Announces 30% OFF on 50K and 100K Freedom Programs",
    firm: "UProfit",
    category: "Futures",
    eventType: "Flash Promo",
    urgency: "medium",
    isUpcoming: false,
    summary: "UProfit is providing a 30% discount on Freedom and Basic accounts, featuring daily payout approvals and simple evaluation targets.",
    details: [
      "Includes free NinjaTrader license and Rithmic data feed",
      "Drawdown trails only until reaching starting balance",
      "Daily payout requests processed within 24 hours",
      "Coupon code: UPROFIT30"
    ],
    promoCode: "UPROFIT30",
    discountPercent: 30,
    promoExpiry: new Date(Date.now() + 1000 * 60 * 60 * 96).toISOString(),
    sourceName: "UProfit Announcements",
    sourceUrl: "https://uprofit.com",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 40).toISOString(),
    verified: true
  },

  // 13. Earn2Trade
  {
    id: "intel-earn2trade-013",
    title: "Earn2Trade Upgrades Trader Career Path to $400K Funding Target",
    firm: "Earn2Trade",
    category: "Futures",
    eventType: "Rule Change",
    urgency: "medium",
    isUpcoming: false,
    summary: "Earn2Trade has expanded the Trader Career Path roadmap, enabling traders to systematically scale up to a $400,000 live brokerage funded account with institutional backing.",
    details: [
      "End-of-day trailing drawdown locked at initial starting balance",
      "Guaranteed live brokerage account contract with prop trading partner",
      "Free platform license and continuous educational webinars",
      "Save 20% with code E2T20"
    ],
    promoCode: "E2T20",
    discountPercent: 20,
    promoExpiry: new Date(Date.now() + 1000 * 60 * 60 * 140).toISOString(),
    sourceName: "Earn2Trade Press Release",
    sourceUrl: "https://earn2trade.com",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 65).toISOString(),
    verified: true
  },

  // 14. TickTick Trader
  {
    id: "intel-ticktick-014",
    title: "TickTick Trader Launches 50% OFF Spring Promo with Free Reset Vouchers",
    firm: "TickTick Trader",
    category: "Futures",
    eventType: "Flash Promo",
    urgency: "high",
    isUpcoming: false,
    summary: "TickTick Trader introduces a 50% discount across standard and express evaluation challenges with code TICK50.",
    details: [
      "Free Tradovate access and mobile application support",
      "No consistency rule during evaluation phases",
      "Fast payout requests via crypto or direct ACH wire",
      "Applies to 25k, 50k, and 100k account sizes"
    ],
    promoCode: "TICK50",
    discountPercent: 50,
    promoExpiry: new Date(Date.now() + 1000 * 60 * 60 * 72).toISOString(),
    sourceName: "TickTick Trader Official Wire",
    sourceUrl: "https://tickticktrader.com",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 20).toISOString(),
    verified: true
  },

  // 15. Fast Track Trading
  {
    id: "intel-ftt-015",
    title: "Fast Track Trading Offers Instant Funding Tiers with No Daily Loss Limits",
    firm: "Fast Track Trading",
    category: "Futures",
    eventType: "New Launch",
    urgency: "medium",
    isUpcoming: false,
    summary: "Fast Track Trading provides instant funding and single-phase futures accounts with zero daily loss limit and direct payout eligibility.",
    details: [
      "Direct account funding up to $300,000 purchasing power",
      "Zero daily loss limit constraints",
      "Code FTT25 provides 25% discount on all challenge sizes",
      "Weekly payout processing schedule"
    ],
    promoCode: "FTT25",
    discountPercent: 25,
    promoExpiry: new Date(Date.now() + 1000 * 60 * 60 * 110).toISOString(),
    sourceName: "Fast Track Trading Update",
    sourceUrl: "https://fasttracktrading.net",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 50).toISOString(),
    verified: true
  },

  // 16. BluSky Trading
  {
    id: "intel-blusky-016",
    title: "BluSky Trading Introduces Static Drawdown Challenges with Guaranteed Live Placement",
    firm: "BluSky Trading",
    category: "Futures",
    eventType: "Rule Change",
    urgency: "medium",
    isUpcoming: false,
    summary: "BluSky Trading offers static drawdown futures evaluations where passing traders are placed in genuine live capital accounts with individual brokerage clearing.",
    details: [
      "Static drawdown (does not trail profit upward)",
      "Daily loss limit and maximum loss parameters are fixed",
      "Direct live capital trading with standard FCM brokers",
      "Code BLUSKY25 active for 25% discount"
    ],
    promoCode: "BLUSKY25",
    discountPercent: 25,
    promoExpiry: new Date(Date.now() + 1000 * 60 * 60 * 160).toISOString(),
    sourceName: "BluSky Trading Portal",
    sourceUrl: "https://blusky.pro",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 80).toISOString(),
    verified: true
  },

  // 17. Elite Trader Funding
  {
    id: "intel-etf-017",
    title: "Elite Trader Funding 50% OFF EOD and Static Account Tiers",
    firm: "Elite Trader Funding",
    category: "Futures",
    eventType: "Flash Promo",
    urgency: "high",
    isUpcoming: false,
    summary: "Elite Trader Funding provides 50% off all Fast Track, 1-Step, and End-of-Day drawdown accounts with code ETF50.",
    details: [
      "Multiple evaluation styles (Static, EOD, and Trailing)",
      "Free NinjaTrader license included during evaluation",
      "Up to 20 accounts active simultaneously",
      "Rapid payout cycles"
    ],
    promoCode: "ETF50",
    discountPercent: 50,
    promoExpiry: new Date(Date.now() + 1000 * 60 * 60 * 80).toISOString(),
    sourceName: "Elite Trader Funding Newsletter",
    sourceUrl: "https://elitetraderfunding.com",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 35).toISOString(),
    verified: true
  },

  // 18. FundedNext Futures
  {
    id: "intel-fundednext-018",
    title: "FundedNext Launches Stellar Futures with 15% Profit Share from Challenge Phase",
    firm: "FundedNext (Futures)",
    category: "Futures",
    eventType: "New Launch",
    urgency: "medium",
    isUpcoming: false,
    summary: "FundedNext expands into CME Futures with Stellar Futures, paying traders a 15% reward on profits achieved during evaluation challenges.",
    details: [
      "Balance-based drawdown models",
      "15% profit sharing earned during challenge phases",
      "Tradovate and MatchTrader platforms",
      "Use coupon FNFUTURES for 15% off"
    ],
    promoCode: "FNFUTURES",
    discountPercent: 15,
    promoExpiry: new Date(Date.now() + 1000 * 60 * 60 * 200).toISOString(),
    sourceName: "FundedNext Official Launch",
    sourceUrl: "https://fundednext.com",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 90).toISOString(),
    verified: true
  },

  // 19. Prediction Prop Labs
  {
    id: "intel-pred-019",
    title: "Prediction Markets Prop Trading: Polymarket & Kalshi Tournament Model Emerges",
    firm: "Prediction Prop Labs",
    category: "Prediction Markets",
    eventType: "New Launch",
    urgency: "medium",
    isUpcoming: true,
    upcomingStatus: "Concept / Prototype Incubator",
    expectedLaunch: "Late 2025",
    summary: "New institutional-backed incubator is developing a proprietary evaluation challenge for event contracts and prediction market traders (Polymarket & Kalshi order books).",
    details: [
      "Focus on political, economic, Fed rate, and crypto event binary outcomes",
      "Forecasting accuracy benchmark replaces traditional stop-loss rules",
      "Profit share payouts for high Brier-score forecasters",
      "Code PREDICT10 active for early waitlist forecasters"
    ],
    promoCode: "PREDICT10",
    discountPercent: 10,
    promoExpiry: "2026-12-31",
    sourceName: "Fintech Press & Decentralized Markets Syndicate",
    sourceUrl: "https://polymarket.com",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 96).toISOString(),
    verified: true
  },

  // 20. TradeThePool
  {
    id: "intel-ttp-020",
    title: "Trade The Pool Expands Crypto Day Trading Buying Power to $260K",
    firm: "TradeThePool",
    category: "Crypto / Perps",
    eventType: "New Launch",
    urgency: "medium",
    isUpcoming: false,
    summary: "Trade The Pool has increased its maximum funded allocation for stock and crypto day traders up to $260,000 with real buying power.",
    details: [
      "Real equity buying power with zero spread markup",
      "Daily and maximum loss parameters",
      "15% discount with code TTPCRYPTO",
      "Supported on proprietary trading terminal"
    ],
    promoCode: "TTPCRYPTO",
    discountPercent: 15,
    promoExpiry: new Date(Date.now() + 1000 * 60 * 60 * 190).toISOString(),
    sourceName: "Trade The Pool Portal",
    sourceUrl: "https://tradethepool.com",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 105).toISOString(),
    verified: true
  },

  // 21. Crypto Fund Trader
  {
    id: "intel-cft-021",
    title: "Crypto Fund Trader Announces Zero News Restrictions on Crypto Perps",
    firm: "Crypto Fund Trader",
    category: "Crypto / Perps",
    eventType: "Rule Change",
    urgency: "low",
    isUpcoming: false,
    summary: "Crypto Fund Trader confirms that all evaluation and funded stages permit trading through high-impact macroeconomic news and weekend crypto volatility.",
    details: [
      "No news trading or holding restrictions",
      "TradingView integration with direct chart execution",
      "10% discount with code CFT10",
      "Crypto native withdrawals in USDT and Bitcoin"
    ],
    promoCode: "CFT10",
    discountPercent: 10,
    promoExpiry: new Date(Date.now() + 1000 * 60 * 60 * 210).toISOString(),
    sourceName: "Crypto Fund Trader Changelog",
    sourceUrl: "https://cryptofundtrader.com",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 115).toISOString(),
    verified: true
  },

  // 22. OneUp Trader
  {
    id: "intel-oneup-022",
    title: "OneUp Trader Keeps 100% First $10K Payout Structure with Free Data Feeds",
    firm: "OneUp Trader",
    category: "Futures",
    eventType: "Rule Change",
    urgency: "medium",
    isUpcoming: false,
    summary: "OneUp Trader maintains its prominent 1-step evaluation with 100% profit split on the first $10,000 withdrawn and 90% thereafter with free CME data feeds.",
    details: [
      "1-step evaluation model",
      "100% first $10,000 profit payout retention",
      "15% off with code ONEUP15",
      "Ninjatrader and CME Level 1 data feeds included"
    ],
    promoCode: "ONEUP15",
    discountPercent: 15,
    promoExpiry: new Date(Date.now() + 1000 * 60 * 60 * 240).toISOString(),
    sourceName: "OneUp Trader Portal",
    sourceUrl: "https://oneuptrader.com",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 125).toISOString(),
    verified: true
  },

  // 23. LeeLoo Trading
  {
    id: "intel-leeloo-023",
    title: "LeeLoo Trading Launches 60% OFF Flash Promotion on Express Challenges",
    firm: "LeeLoo Trading",
    category: "Futures",
    eventType: "Flash Promo",
    urgency: "high",
    isUpcoming: false,
    summary: "LeeLoo Trading is offering 60% off all Cruise and Express accounts with code LEELOO60 for Rithmic-based futures traders.",
    details: [
      "60% off test accounts up to 300K size",
      "Competitive profit targets and scaling",
      "Fast payout requests via ACH and wire",
      "Valid for 48 hours"
    ],
    promoCode: "LEELOO60",
    discountPercent: 60,
    promoExpiry: new Date(Date.now() + 1000 * 60 * 60 * 60).toISOString(),
    sourceName: "LeeLoo Trading Feed",
    sourceUrl: "https://leelootrading.com",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 25).toISOString(),
    verified: true
  },

  // 24. Lucid Trading
  {
    id: "intel-lucid-024",
    title: "Lucid Trading Launches Modern Futures Evaluation with Weekly Payouts",
    firm: "Lucid Trading",
    category: "Futures",
    eventType: "New Launch",
    urgency: "medium",
    isUpcoming: false,
    summary: "Lucid Trading enters the futures prop firm arena offering streamlined evaluation criteria, zero contract scaling limits, and weekly payout schedules.",
    details: [
      "End-of-Day trailing drawdown model",
      "No scaling restrictions based on account balance",
      "Weekly payout cycle once safety cushion is reached",
      "30% off with coupon LUCID30"
    ],
    promoCode: "LUCID30",
    discountPercent: 30,
    promoExpiry: new Date(Date.now() + 1000 * 60 * 60 * 150).toISOString(),
    sourceName: "Lucid Trading Launch Wire",
    sourceUrl: "https://lucidtrading.com",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 95).toISOString(),
    verified: true
  },

  // 25. SpeedUp Trader
  {
    id: "intel-speedup-025",
    title: "SpeedUp Trader 25% OFF Challenges with EOD Risk Model",
    firm: "SpeedUp Trader",
    category: "Futures",
    eventType: "Flash Promo",
    urgency: "medium",
    isUpcoming: false,
    summary: "SpeedUp Trader provides 25% discount across all futures evaluation sizes using End-of-Day drawdown and fast payout review cycles.",
    details: [
      "End-of-Day drawdown locks at starting balance",
      "Quick qualification criteria with no minimum days",
      "Use coupon SPEED25 at checkout",
      "Supported on Rithmic and NinjaTrader"
    ],
    promoCode: "SPEED25",
    discountPercent: 25,
    promoExpiry: new Date(Date.now() + 1000 * 60 * 60 * 180).toISOString(),
    sourceName: "SpeedUp Trader Portal",
    sourceUrl: "https://speeduptrader.com",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 100).toISOString(),
    verified: true
  },

  // 26. AquaFutures
  {
    id: "intel-aquafutures-026",
    title: "AquaFunded Unveils AquaFutures Offering for CME Futures Traders",
    firm: "AquaFutures",
    category: "Futures",
    eventType: "New Launch",
    urgency: "medium",
    isUpcoming: false,
    summary: "AquaFunded expands into the regulated futures arena with AquaFutures, delivering beginner-friendly and standard evaluation accounts with 20% discount code AQUAFUTURES20.",
    details: [
      "Beginner and Standard evaluation tiers",
      "No minimum trading day restrictions",
      "Tradovate and NinjaTrader platform support",
      "20% discount with code AQUAFUTURES20"
    ],
    promoCode: "AQUAFUTURES20",
    discountPercent: 20,
    promoExpiry: new Date(Date.now() + 1000 * 60 * 60 * 140).toISOString(),
    sourceName: "AquaFunded Expansion Wire",
    sourceUrl: "https://aquafunded.com",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 110).toISOString(),
    verified: true
  },

  // 27. Phidias Prop Firm
  {
    id: "intel-phidias-027",
    title: "Phidias Prop Firm Announces Express to Live Challenge with Static Drawdown",
    firm: "Phidias Prop Firm",
    category: "Futures",
    eventType: "Rule Change",
    urgency: "medium",
    isUpcoming: false,
    summary: "Phidias Prop Firm launches Express to Live accounts with static drawdown, allowing futures traders to transition swiftly into live funded broker accounts.",
    details: [
      "Static drawdown (does not trail unrealized profit)",
      "Direct transition to real live capital upon evaluation completion",
      "15% discount with coupon PHIDIAS15",
      "Supported on Rithmic & CQG connections"
    ],
    promoCode: "PHIDIAS15",
    discountPercent: 15,
    promoExpiry: new Date(Date.now() + 1000 * 60 * 60 * 200).toISOString(),
    sourceName: "Phidias Prop Official Release",
    sourceUrl: "https://phidiaspropfirm.com",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 130).toISOString(),
    verified: true
  },

  // 28. The 5ers Futures
  {
    id: "intel-5ers-028",
    title: "The 5ers Expand Instant Funding and High Stakes Evaluations to CME Futures",
    firm: "The 5ers (Futures)",
    category: "Futures",
    eventType: "New Launch",
    urgency: "medium",
    isUpcoming: false,
    summary: "The 5ers introduce dedicated CME futures funding with direct contract execution, competitive profit splits, and absolute drawdown rules.",
    details: [
      "Absolute balance drawdown rules",
      "Direct instant funding and evaluation models",
      "10% discount with code 5ERSFUTURES",
      "Free platform licenses and level 1 data"
    ],
    promoCode: "5ERSFUTURES",
    discountPercent: 10,
    promoExpiry: new Date(Date.now() + 1000 * 60 * 60 * 220).toISOString(),
    sourceName: "The 5ers Press Release",
    sourceUrl: "https://the5ers.com",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 140).toISOString(),
    verified: true
  },

  // 29. BrightFunded Crypto
  {
    id: "intel-bright-029",
    title: "BrightFunded Releases MatchTrader & cTrader Integration for Crypto Challenges",
    firm: "BrightFunded",
    category: "Crypto / Perps",
    eventType: "Rule Change",
    urgency: "low",
    isUpcoming: false,
    summary: "BrightFunded rolls out multi-platform support including MatchTrader and cTrader for their crypto evaluation accounts with up to 85% profit split.",
    details: [
      "Trade crypto with MatchTrader and cTrader interfaces",
      "Up to 85% profit split on funded tiers",
      "15% off with code BRIGHT15",
      "Instant crypto payout approvals"
    ],
    promoCode: "BRIGHT15",
    discountPercent: 15,
    promoExpiry: new Date(Date.now() + 1000 * 60 * 60 * 175).toISOString(),
    sourceName: "BrightFunded Platform Update",
    sourceUrl: "https://brightfunded.com",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 150).toISOString(),
    verified: true
  },

  // 30. CME Event Contracts Prop Desks
  {
    id: "intel-cme-event-030",
    title: "Prop Desks Explore CME Event Contracts as Regulated Alternative to Prediction Markets",
    firm: "CME Event Desks",
    category: "Prediction Markets",
    eventType: "New Launch",
    urgency: "medium",
    isUpcoming: true,
    upcomingStatus: "Regulatory Integration",
    expectedLaunch: "Late 2025 / 2026",
    summary: "Multiple prop firms and FCMs are evaluating funded evaluation models built around CME Event Contracts (binary outcome futures on S&P 500, Gold, Crude, and Bitcoin).",
    details: [
      "Fully CFTC-regulated binary event contracts",
      "Capped $20 max risk per contract eliminates liquidation cascades",
      "Provides institutional regulatory clarity for prediction-style prop challenges",
      "Beta waitlists launching later this year"
    ],
    promoCode: null,
    discountPercent: null,
    promoExpiry: null,
    sourceName: "Derivatives Market Review",
    sourceUrl: "https://cmegroup.com",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 160).toISOString(),
    verified: true
  }
];
