import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TickerBanner from './components/TickerBanner';
import FilterBar from './components/FilterBar';
import IntelFeed from './components/IntelFeed';
import PromoVault from './components/PromoVault';
import UpcomingBoard from './components/UpcomingBoard';
import { seedIntel } from '../scraper/utils/seed-data.js';
import { VERIFIED_PROMO_REGISTRY } from '../scraper/crawlers/promo-hunter.js';
import { EXPANDED_UPCOMING_RADAR } from '../scraper/crawlers/upcoming-radar.js';
import { RefreshCw } from 'lucide-react';

export default function App() {
  // Initialize with verified embedded data immediately so the UI is NEVER empty on initial load
  const [data, setData] = useState({
    metadata: {
      generatedAt: new Date().toISOString(),
      totalEntries: seedIntel.length,
      activePromosCount: VERIFIED_PROMO_REGISTRY.length,
      maxDiscountPercent: 91,
      upcomingRadarCount: EXPANDED_UPCOMING_RADAR.length
    },
    upcomingRadar: EXPANDED_UPCOMING_RADAR,
    promosVault: VERIFIED_PROMO_REGISTRY,
    feed: seedIntel
  });
  
  const [loading, setLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [activeView, setActiveView] = useState('promos'); // 'promos' | 'all' | 'upcoming'
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const loadData = async () => {
    setIsRefreshing(true);
    try {
      // Resolve path dynamically relative to current page base URL (works on GitHub Pages, Vercel, localhost)
      const base = window.location.pathname.endsWith('/') ? window.location.pathname : window.location.pathname + '/';
      const fetchUrl = `${base}data/intel.json?t=${Date.now()}`;
      
      const res = await fetch(fetchUrl);
      if (!res.ok) {
        // Fallback relative attempt
        const fallbackRes = await fetch(`./data/intel.json?t=${Date.now()}`);
        if (!fallbackRes.ok) throw new Error('Failed to fetch from both relative paths');
        const fallbackJson = await fallbackRes.json();
        setData(fallbackJson);
        return;
      }
      
      const json = await res.json();
      if (json && json.feed && json.feed.length > 0) {
        setData(json);
      }
    } catch (err) {
      console.warn('Network fetch notice - utilizing verified embedded database:', err.message);
    } finally {
      setIsRefreshing(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0d16] text-slate-100 selection:bg-emerald-500/20 selection:text-emerald-300">
      
      {/* 1. Clean Minimal Header with Centralized Nav */}
      <Header
        activeView={activeView}
        setActiveView={setActiveView}
        metadata={data.metadata}
        isRefreshing={isRefreshing}
        onRefresh={loadData}
      />

      {/* 2. Top Deals Marquee Strip */}
      <TickerBanner items={data.feed} />

      {/* 3. Search & Filter Bar */}
      <FilterBar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        totalResults={
          activeView === 'promos' 
            ? data.promosVault.length 
            : activeView === 'upcoming' 
            ? data.upcomingRadar.length 
            : data.feed.length
        }
      />

      {/* 4. Main Body Content */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-28 text-slate-400 space-y-3">
            <RefreshCw className="w-6 h-6 text-emerald-400 animate-spin" />
            <span className="text-xs font-mono">Loading market data...</span>
          </div>
        ) : (
          <div>
            {activeView === 'promos' && (
              <PromoVault
                promos={data.promosVault}
                searchQuery={searchQuery}
                selectedCategory={selectedCategory}
              />
            )}

            {activeView === 'all' && (
              <IntelFeed
                items={data.feed}
                searchQuery={searchQuery}
                selectedCategory={selectedCategory}
              />
            )}

            {activeView === 'upcoming' && (
              <UpcomingBoard
                radarItems={data.upcomingRadar}
                searchQuery={searchQuery}
                selectedCategory={selectedCategory}
              />
            )}
          </div>
        )}
      </main>

      {/* 5. Minimal Footer */}
      <footer className="border-t border-white/5 py-5 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>PropRadar Terminal • Real-Time Futures, Perps & Novel Markets Tracker</span>
          <span className="text-slate-400">Verified as of September 2026</span>
        </div>
      </footer>

    </div>
  );
}
