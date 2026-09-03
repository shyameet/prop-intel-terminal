import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TickerBanner from './components/TickerBanner';
import FilterBar from './components/FilterBar';
import IntelFeed from './components/IntelFeed';
import PromoVault from './components/PromoVault';
import UpcomingBoard from './components/UpcomingBoard';
import { RefreshCw } from 'lucide-react';

export default function App() {
  const [data, setData] = useState({
    metadata: null,
    upcomingRadar: [],
    promosVault: [],
    feed: []
  });
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [activeView, setActiveView] = useState('promos'); // Default to deals & promo codes
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const loadData = async () => {
    setIsRefreshing(true);
    try {
      const res = await fetch(`/data/intel.json?t=${Date.now()}`);
      if (!res.ok) throw new Error('Could not fetch intel.json');
      const json = await res.json();
      setData(json);
    } catch (err) {
      console.warn('Error loading intel database:', err);
    } finally {
      setLoading(false);
      setIsRefreshing(false);
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
            <span className="text-xs font-mono">Loading real-time market data...</span>
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
