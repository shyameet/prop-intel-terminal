import axios from 'axios';
import * as cheerio from 'cheerio';
import { cleanText, detectCategory, detectEventType, extractPromoCode, extractDiscountPercent } from '../utils/normalizer.js';

const SUBREDDITS = ['PropFirm', 'FuturesTrading', 'Daytrading'];
const KEYWORDS = [
  'promo', 'discount', 'code', 'sale', 'launch', 'perps', 'myfundedfutures', 
  'myfundedperpetuals', 'ftmo', 'apex', 'topstep', 'tradeday', 'takeprofit', 
  'drawdown', 'payout', 'prediction', 'rule', 'tradeify', 'uprofit', 'earn2trade',
  'ticktick', 'blusky', 'elitetrader', 'fasttrack', 'hyrotrader', 'breakout',
  'tradethepool', 'leeloo', 'lucid', 'speedup', 'aquafutures', 'phidias'
];

export async function crawlRedditIntel() {
  const results = [];
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'application/rss+xml, application/xml, text/xml, */*'
  };

  for (const sub of SUBREDDITS) {
    try {
      const url = `https://www.reddit.com/r/${sub}/.rss`;
      const response = await axios.get(url, { headers, timeout: 6000 });
      
      const $ = cheerio.load(response.data, { xmlMode: true });
      $('entry').each((_, entry) => {
        const title = $(entry).find('title').text();
        const content = $(entry).find('content').text();
        const link = $(entry).find('link').attr('href');
        const updated = $(entry).find('updated').text();
        const author = $(entry).find('author name').text();

        const fullText = `${title} ${cleanText(content)}`;
        const lower = fullText.toLowerCase();

        const hasKeyword = KEYWORDS.some(k => lower.includes(k));
        if (!hasKeyword) return;

        let firm = 'Community Radar';
        if (lower.includes('myfundedperpetuals')) firm = 'MyFundedPerpetuals';
        else if (lower.includes('myfundedfutures') || lower.includes('mffu')) firm = 'MyFundedFutures';
        else if (lower.includes('tradeify')) firm = 'Tradeify';
        else if (lower.includes('ftmo futures') || (lower.includes('ftmo') && lower.includes('future'))) firm = 'FTMO Futures';
        else if (lower.includes('ftmo')) firm = 'FTMO';
        else if (lower.includes('apex')) firm = 'Apex Trader Funding';
        else if (lower.includes('topstep')) firm = 'Topstep';
        else if (lower.includes('takeprofit') || lower.includes('tpt')) firm = 'TakeProfitTrader';
        else if (lower.includes('tradeday')) firm = 'TradeDay';
        else if (lower.includes('bulenox')) firm = 'Bulenox';
        else if (lower.includes('uprofit')) firm = 'UProfit';
        else if (lower.includes('earn2trade')) firm = 'Earn2Trade';
        else if (lower.includes('ticktick')) firm = 'TickTick Trader';
        else if (lower.includes('blusky')) firm = 'BluSky Trading';
        else if (lower.includes('fast track')) firm = 'Fast Track Trading';
        else if (lower.includes('elite trader')) firm = 'Elite Trader Funding';
        else if (lower.includes('leeloo')) firm = 'LeeLoo Trading';
        else if (lower.includes('lucid trading') || lower.includes('lucid')) firm = 'Lucid Trading';
        else if (lower.includes('speedup')) firm = 'SpeedUp Trader';
        else if (lower.includes('aquafutures') || lower.includes('aquafunded')) firm = 'AquaFutures';
        else if (lower.includes('phidias')) firm = 'Phidias Prop Firm';
        else if (lower.includes('hyrotrader') || lower.includes('hyro')) firm = 'HyroTrader';
        else if (lower.includes('breakout')) firm = 'Breakout Prop';
        else if (lower.includes('tradethepool')) firm = 'TradeThePool';
        else if (lower.includes('polymarket') || lower.includes('kalshi')) firm = 'Prediction Prop Labs';

        const promoCode = extractPromoCode(fullText);
        const discountPercent = extractDiscountPercent(fullText);
        const eventType = promoCode ? 'Flash Promo' : detectEventType(fullText);
        const category = detectCategory(fullText);

        results.push({
          id: `reddit-rss-${Math.random().toString(36).substring(2, 9)}`,
          title: cleanText(title),
          firm: firm,
          category: category,
          eventType: eventType,
          urgency: promoCode || eventType === 'New Launch' ? 'high' : 'medium',
          isUpcoming: lower.includes('upcoming') || lower.includes('beta') || lower.includes('waitlist'),
          summary: cleanText(content).slice(0, 260) + '...',
          details: [
            `Scraped from r/${sub} community discussion`,
            `Author: ${author || 'Trader'}`
          ],
          promoCode: promoCode,
          discountPercent: discountPercent,
          promoExpiry: null,
          sourceName: `r/${sub} (Reddit Community)`,
          sourceUrl: link || `https://www.reddit.com/r/${sub}`,
          timestamp: updated ? new Date(updated).toISOString() : new Date().toISOString(),
          verified: false
        });
      });
    } catch (err) {
      console.warn(`[Reddit RSS] Notice: r/${sub} (${err.message})`);
    }
  }

  return results;
}
