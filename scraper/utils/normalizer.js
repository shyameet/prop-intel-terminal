// Normalizer utility for parsing, cleaning, categorizing, and deduplicating crawled intel

export function cleanText(text) {
  if (!text) return '';
  return text.replace(/<[^>]*>?/gm, '').replace(/\s+/g, ' ').trim();
}

export function detectCategory(text) {
  const t = text.toLowerCase();
  if (t.includes('perp') || t.includes('crypto') || t.includes('bybit') || t.includes('binance') || t.includes('usdt') || t.includes('solana') || t.includes('bitcoin')) {
    return 'Crypto / Perps';
  }
  if (t.includes('prediction') || t.includes('polymarket') || t.includes('kalshi') || t.includes('event contract') || t.includes('binary')) {
    return 'Prediction Markets';
  }
  return 'Futures';
}

export function detectEventType(text) {
  const t = text.toLowerCase();
  if (t.includes('promo') || t.includes('code') || t.includes('% off') || t.includes('discount') || t.includes('sale') || t.includes('flash') || t.includes('waived')) {
    return 'Flash Promo';
  }
  if (t.includes('launch') || t.includes('new prop') || t.includes('announces') || t.includes('introducing') || t.includes('coming soon') || t.includes('beta') || t.includes('waitlist')) {
    return 'New Launch';
  }
  if (t.includes('rule') || t.includes('drawdown') || t.includes('eod') || t.includes('daily loss') || t.includes('consistency') || t.includes('payout')) {
    return 'Rule Change';
  }
  return 'General Intel';
}

export function extractPromoCode(text) {
  if (!text) return null;
  // Match patterns like "code SAVE80", "use code: MFFU20", "coupon FLASH90", or standalone ALLCAPS promo words with numbers
  const match = text.match(/(?:code|coupon|promocode|use|promo)[:\s]+([A-Z0-9_-]{3,15})\b/i) ||
                text.match(/\b([A-Z]{3,8}\d{1,3})\b/);
  return match ? match[1].toUpperCase() : null;
}

export function extractDiscountPercent(text) {
  if (!text) return null;
  const match = text.match(/(\d{1,2})\s*%\s*(?:off|discount|sale)/i);
  return match ? parseInt(match[1], 10) : null;
}

export function deduplicateItems(items) {
  const seen = new Set();
  return items.filter(item => {
    // Unique key from title + firm
    const key = `${(item.firm || '').toLowerCase()}-${(item.title || '').toLowerCase().slice(0, 40)}`;
    if (seen.has(key)) {
      return false;
    }
    seen.add(key);
    return true;
  });
}
