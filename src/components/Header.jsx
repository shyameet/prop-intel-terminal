import React from 'react';
import { RefreshCw, Zap, Tag, Compass, Radio } from 'lucide-react';

export default function Header({ activeView = 'promos', setActiveView = () => {}, metadata, isRefreshing, onRefresh }) {
  const formattedTime = metadata?.generatedAt 
    ? new Date(metadata.generatedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    : 'Live';

  return (
    <header className="border-b border-white/5 bg-[#0e1422]/90 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-mono font-bold text-base tracking-tight text-white">
                  Prop<span className="text-emerald-400">Radar</span>
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/5 text-slate-400 border border-white/5">
                  v2.0
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                Live Futures, Perps & Promo Tracker
              </p>
            </div>
          </div>

          {/* Center Navigation Tabs */}
          <div className="hidden md:flex items-center p-1 rounded-lg bg-black/40 border border-white/5 text-xs font-medium">
            <button
              onClick={() => setActiveView?.('promos')}
              className={`px-3.5 py-1.5 rounded-md transition flex items-center space-x-1.5 cursor-pointer ${
                activeView === 'promos'
                  ? 'bg-slate-800 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Tag className="w-3.5 h-3.5 text-emerald-400" />
              <span>Promo Codes ({metadata?.activePromosCount || 21})</span>
            </button>

            <button
              onClick={() => setActiveView?.('all')}
              className={`px-3.5 py-1.5 rounded-md transition flex items-center space-x-1.5 cursor-pointer ${
                activeView === 'all'
                  ? 'bg-slate-800 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Radio className="w-3.5 h-3.5 text-cyan-400" />
              <span>Live Feed</span>
            </button>

            <button
              onClick={() => setActiveView?.('upcoming')}
              className={`px-3.5 py-1.5 rounded-md transition flex items-center space-x-1.5 cursor-pointer ${
                activeView === 'upcoming'
                  ? 'bg-slate-800 text-white font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Compass className="w-3.5 h-3.5 text-purple-400" />
              <span>Upcoming Radar ({metadata?.upcomingRadarCount || 8})</span>
            </button>
          </div>

          {/* Right Status & Refresh */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1.5 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span className="hidden sm:inline text-[11px] font-mono text-slate-400">Synced {formattedTime}</span>
            </div>

            <button
              onClick={onRefresh}
              disabled={isRefreshing}
              title="Refresh latest data"
              className="p-1.5 rounded-md bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/5 transition flex items-center justify-center cursor-pointer disabled:opacity-40"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-emerald-400' : ''}`} />
            </button>
          </div>

        </div>

        {/* Mobile Nav Tabs */}
        <div className="flex md:hidden items-center justify-between p-1 mt-2.5 rounded-lg bg-black/40 border border-white/5 text-xs">
          <button
            onClick={() => setActiveView?.('promos')}
            className={`flex-1 py-1.5 rounded text-center transition cursor-pointer ${
              activeView === 'promos' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400'
            }`}
          >
            Promos
          </button>
          <button
            onClick={() => setActiveView?.('all')}
            className={`flex-1 py-1.5 rounded text-center transition cursor-pointer ${
              activeView === 'all' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400'
            }`}
          >
            Live Feed
          </button>
          <button
            onClick={() => setActiveView?.('upcoming')}
            className={`flex-1 py-1.5 rounded text-center transition cursor-pointer ${
              activeView === 'upcoming' ? 'bg-slate-800 text-white font-semibold' : 'text-slate-400'
            }`}
          >
            Upcoming
          </button>
        </div>

      </div>
    </header>
  );
}
