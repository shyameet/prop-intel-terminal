import axios from 'axios';
import * as cheerio from 'cheerio';
import { cleanText, detectCategory, detectEventType, extractPromoCode, extractDiscountPercent } from '../utils/normalizer.js';

const FIRMS_TARGETS = [
  {
    name: 'Topstep',
    url: 'https://www.topstep.com/blog/',
    selector: 'article, .post, .blog-card',
    titleSelector: 'h2, h3, .post-title',
    linkSelector: 'a',
    category: 'Futures'
  },
  {
    name: 'TradeDay',
    url: 'https://www.tradeday.com/blog/',
    selector: 'article, .blog-post, .summary-item',
    titleSelector: 'h2, h3, .summary-title',
    linkSelector: 'a',
    category: 'Futures'
  },
  {
    name: 'TakeProfitTrader',
    url: 'https://takeprofittrader.com/blog',
    selector: 'article, .blog-card',
    titleSelector: 'h2, h3, .title',
    linkSelector: 'a',
    category: 'Futures'
  }
];

export async function crawlOfficialFirms() {
  const results = [];
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
  };

  for (const target of FIRMS_TARGETS) {
    try {
      const response = await axios.get(target.url, { headers, timeout: 6000 });
      const $ = cheerio.load(response.data);

      $(target.selector).slice(0, 4).each((i, el) => {
        const title = cleanText($(el).find(target.titleSelector).first().text());
        let link = $(el).find(target.linkSelector).first().attr('href') || target.url;
        if (link && !link.startsWith('http')) {
          link = new URL(link, target.url).toString();
        }
        const snippet = cleanText($(el).find('p').first().text());

        if (title && title.length > 8) {
          const fullText = `${title} ${snippet}`;
          const promoCode = extractPromoCode(fullText);
          const discountPercent = extractDiscountPercent(fullText);

          results.push({
            id: `official-${target.name.toLowerCase()}-${i}`,
            title: title,
            firm: target.name,
            category: detectCategory(fullText) || target.category,
            eventType: promoCode ? 'Flash Promo' : detectEventType(fullText),
            urgency: promoCode ? 'high' : 'medium',
            isUpcoming: fullText.toLowerCase().includes('coming') || fullText.toLowerCase().includes('beta'),
            summary: snippet || `Official announcement from ${target.name}.`,
            details: [
              `Official direct release from ${target.name}`,
              `Channel: Official Corporate Blog / Changelog`
            ],
            promoCode: promoCode,
            discountPercent: discountPercent,
            promoExpiry: null,
            sourceName: `${target.name} Official`,
            sourceUrl: link,
            timestamp: new Date().toISOString(),
            verified: true
          });
        }
      });
    } catch (err) {
      console.warn(`[Official Crawler] Notice for ${target.name}: ${err.message}`);
    }
  }

  return results;
}
