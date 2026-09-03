import React from 'react';
import { ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';

export default function UpcomingBoard({ radarItems, searchQuery, selectedCategory }) {
  const filteredItems = radarItems.filter(item => {
    if (selectedCategory && selectedCategory !== 'all') {
      if (selectedCategory === 'Futures' && !item.assetClass.includes('Futures')) return false;
      if (selectedCategory === 'Crypto / Perps' && !item.assetClass.includes('Crypto') && !item.assetClass.includes('Perp')) return false;
      if (selectedCategory === 'Prediction Markets' && !item.assetClass.includes('Prediction') && !item.assetClass.includes('Event')) return false;
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        item.firmName.toLowerCase().includes(q) ||
        item.assetClass.toLowerCase().includes(q) ||
        item.status.toLowerCase().includes(q) ||
        item.parentCompany.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="space-y-4">
      {/* Header text */}
      <div className="flex items-center justify-between text-xs text-slate-400 pb-1">
        <span>Upcoming Pipelines & Beta Launches ({filteredItems.length})</span>
        <span className="text-slate-500">Early Access Tracking</span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {filteredItems.map((firm) => (
          <div
            key={firm.id}
            className="clean-card rounded-xl p-5 flex flex-col justify-between"
          >
            <div>
              {/* Header */}
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h3 className="text-base font-semibold text-white">
                    {firm.firmName}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    By <span className="text-slate-200">{firm.parentCompany}</span>
                  </p>
                </div>

                <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/5">
                  {firm.confidence}
                </span>
              </div>

              {/* Status & Asset Line */}
              <div className="flex items-center space-x-2 text-xs text-slate-300 my-3 py-2 px-2.5 rounded-lg bg-black/30 border border-white/5">
                <span className="text-emerald-400 font-medium">{firm.assetClass}</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-400">ETA: {firm.expectedDate}</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-300 font-mono text-[11px]">{firm.status}</span>
              </div>

              {/* Highlights */}
              <div className="space-y-1.5 my-3">
                {firm.keyFeatures.map((feat, fIdx) => (
                  <div key={fIdx} className="text-xs text-slate-300 flex items-start space-x-2">
                    <span className="text-slate-500">›</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom link */}
            <div className="pt-3 border-t border-white/5 flex items-center justify-between">
              <span className="text-[11px] text-slate-500 font-mono">Radar Score: {firm.watchScore}/100</span>
              <a
                href={firm.officialLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-emerald-400 hover:text-emerald-300 font-medium flex items-center space-x-1 cursor-pointer"
              >
                <span>Waitlist & Portal</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-16 clean-card rounded-xl text-slate-400 text-sm">
          No upcoming firms match your filter.
        </div>
      )}
    </div>
  );
}
