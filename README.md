# 📡 PROP INTEL RADAR // Terminal & Intelligence Bot

Autonomous data extractor, promo code hunter, and real-time live trading terminal tracking the latest prop firm news, discount codes, rule updates, and upcoming launches across **Futures**, **Crypto Perps**, and **Prediction Markets**.

---

## ⚡ Key Capabilities

1. **Autonomous Hybrid Intelligence Bot (`scraper/`)**:
   - **Official Firm Monitors**: Crawls blogs, updates, and changelogs for *Topstep*, *Apex Trader Funding*, *MyFundedFutures*, *TradeDay*, *TakeProfitTrader*, *FTMO*, *Bulenox*, and more.
   - **Community Leak Hunter**: Scans `r/PropFirm`, `r/FuturesTrading`, and `r/Daytrading` for early announcements, discount codes, beta whispers, and payout rule changes.
   - **Promo Code Vault**: Extracts discount percentages (e.g. `80% OFF`, `90% OFF`), active coupon codes (`SAVE80`, `MFFU20`, `FLASH90`), and fee waivers ($0 activation fee).
   - **Upcoming & Beta Radar**: Dedicated tracking for new launches like:
     - **MyFundedPerpetuals** (Crypto Perps expansion by MyFundedFutures)
     - **FTMO Futures** (CME / US Futures division)
     - **Prediction Market Prop Models** (Kalshi / Polymarket tournament frameworks)

2. **Terminal Web Dashboard (`src/`)**:
   - High-contrast, dark Bloomberg/CoinGecko terminal aesthetic.
   - **Live Marquee Ticker**: Scrolling real-time alert ribbon of urgent flash sales and breaking news.
   - **1-Click Promo Code Vault**: One-click clipboard copy with animated feedback and direct link to claim.
   - **Upcoming & Beta Board**: Spec sheets, confidence scores, and waitlist links for unreleased prop firms.
   - **Instant Filter & Search**: Client-side filtering by firm name, asset class, event type, or keyword.

3. **Cloud Automation (GitHub Actions)**:
   - Automated cron workflow (`.github/workflows/scrape-and-deploy.yml`) runs every 6 hours completely free.
   - Auto-commits updated intelligence data directly to `public/data/intel.json`.

---

## 🚀 Quick Start Guide

### 1. Run Locally

```bash
# Navigate to the project
cd "c:\Users\shyam\OneDrive\Desktop\prop-intel-terminal"

# Install dependencies (already completed)
npm install

# Run the live crawler to fetch fresh intel
npm run scrape

# Start the interactive terminal dashboard
npm run dev
```

The web dashboard will open automatically at:  
👉 `http://localhost:5174`

---

## 🛠️ Project Structure

```
prop-intel-terminal/
├── .github/
│   └── workflows/
│       └── scrape-and-deploy.yml    # 6-Hour automated GitHub Actions cron
├── scraper/
│   ├── engine.js                    # Master runner & aggregator
│   ├── crawlers/
│   │   ├── official-firms.js        # Official firm changelogs & blogs
│   │   ├── reddit-intel.js          # Community leaks & discussions
│   │   ├── promo-hunter.js          # Active coupon registry & parser
│   │   └── upcoming-radar.js        # Pipeline radar (MFP, FTMO Futures)
│   └── utils/
│       ├── normalizer.js            # Category/promo detection & deduplication
│       └── seed-data.js             # High-accuracy baseline dataset
├── public/
│   └── data/
│       └── intel.json               # Structured intelligence database
├── src/
│   ├── components/
│   │   ├── Header.jsx               # Terminal branding & KPIs
│   │   ├── TickerBanner.jsx         # Live marquee ribbon
│   │   ├── FilterBar.jsx            # Asset & category filters + search
│   │   ├── PromoVault.jsx           # 1-Click copy discount cards
│   │   ├── UpcomingBoard.jsx        # Roadmaps & beta specs
│   │   └── IntelFeed.jsx            # Chronological intelligence stream
│   ├── App.jsx                      # Main view orchestrator
│   ├── main.jsx                     # Vite mount
│   └── index.css                    # Terminal theme styling
├── package.json
└── README.md
```

---

## ☁️ Pushing to GitHub (Automated 6-Hour Cloud Runner)

To activate the automated GitHub Actions runner:

```bash
cd "c:\Users\shyam\OneDrive\Desktop\prop-intel-terminal"
git init
git add .
git commit -m "Initial commit: Prop Intel Radar Terminal & Scraper"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO_NAME>.git
git push -u origin main
```

Once pushed to GitHub:
1. Navigate to the **Actions** tab in your GitHub repository.
2. The workflow **"Automated Prop Firm Intel Sync & Deploy"** will run every 6 hours automatically.
3. You can also click **"Run workflow"** anytime to manually trigger a fresh scrape in the cloud!
