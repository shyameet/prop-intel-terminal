import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { seedIntel } from './utils/seed-data.js';
import { crawlRedditIntel } from './crawlers/reddit-intel.js';
import { crawlOfficialFirms } from './crawlers/official-firms.js';
import { crawlPromos, VERIFIED_PROMO_REGISTRY } from './crawlers/promo-hunter.js';
import { crawlUpcomingRadar } from './crawlers/upcoming-radar.js';
import { deduplicateItems } from './utils/normalizer.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const OUTPUT_PATH = path.resolve(__dirname, '../public/data/intel.json');

async function runScraper() {
  console.log('=====================================================');
  console.log(' [PROP INTEL RADAR] Initializing Intelligence Engine ');
  console.log('=====================================================');

  const startTime = Date.now();

  // 1. Gather verified baseline and promos
  console.log('🔍 [1/4] Aggregating verified baseline intelligence & promo registry...');
  const activePromos = await crawlPromos();
  const upcomingRadar = await crawlUpcomingRadar();

  // 2. Fetch live Reddit intel
  console.log('🔍 [2/4] Scanning Reddit feeds (r/PropFirm, r/FuturesTrading, r/Daytrading)...');
  let redditItems = [];
  try {
    redditItems = await crawlRedditIntel();
    console.log(`   -> Discovered ${redditItems.length} community intel posts.`);
  } catch (err) {
    console.warn(`   -> Reddit crawl warning: ${err.message}`);
  }

  // 3. Fetch official firm news/blogs
  console.log('🔍 [3/4] Checking official prop firm news & blogs...');
  let officialItems = [];
  try {
    officialItems = await crawlOfficialFirms();
    console.log(`   -> Retrieved ${officialItems.length} official firm releases.`);
  } catch (err) {
    console.warn(`   -> Official crawl warning: ${err.message}`);
  }

  // 4. Merge, deduplicate & rank
  console.log('🔄 [4/4] Normalizing, deduplicating, and ranking updates...');
  const combinedRaw = [
    ...activePromos,
    ...officialItems,
    ...redditItems,
    ...seedIntel
  ];

  const deduplicated = deduplicateItems(combinedRaw);

  // Sort: Urgent items first, then by timestamp descending
  deduplicated.sort((a, b) => {
    const urgencyScore = { urgent: 3, high: 2, medium: 1, low: 0 };
    const scoreA = urgencyScore[a.urgency] || 0;
    const scoreB = urgencyScore[b.urgency] || 0;
    if (scoreB !== scoreA) {
      return scoreB - scoreA;
    }
    return new Date(b.timestamp) - new Date(a.timestamp);
  });

  // Calculate high-level summary metrics
  const activePromoCodes = deduplicated.filter(i => i.promoCode && i.discountPercent);
  const maxDiscount = Math.max(...activePromoCodes.map(p => p.discountPercent || 0), 0);

  const payload = {
    metadata: {
      generatedAt: new Date().toISOString(),
      totalEntries: deduplicated.length,
      activePromosCount: activePromoCodes.length,
      maxDiscountPercent: maxDiscount,
      upcomingRadarCount: upcomingRadar.length,
      version: "1.0.0",
      executionTimeMs: Date.now() - startTime
    },
    upcomingRadar: upcomingRadar,
    promosVault: VERIFIED_PROMO_REGISTRY,
    feed: deduplicated
  };

  // Ensure target folder exists
  const dir = path.dirname(OUTPUT_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(payload, null, 2), 'utf-8');
  console.log(`✅ Success: Intelligence database written to ${OUTPUT_PATH}`);
  console.log(`   • Total Feed Items: ${deduplicated.length}`);
  console.log(`   • Active Promos: ${activePromoCodes.length} (Max: ${maxDiscount}% OFF)`);
  console.log(`   • Upcoming Radar Items: ${upcomingRadar.length}`);
  console.log(`   • Elapsed Time: ${(Date.now() - startTime) / 1000}s`);
  console.log('=====================================================\n');
}

runScraper().catch(err => {
  console.error('❌ Fatal error in scraper engine:', err);
  process.exit(1);
});
