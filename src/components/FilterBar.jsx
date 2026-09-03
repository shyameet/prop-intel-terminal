import React from 'react';
import { Search, X } from 'lucide-react';

export default function FilterBar({
  selectedCategory,
  setSelectedCategory,
  searchQuery,
  setSearchQuery,
  totalResults
}) {
  const categories = ['All', 'Futures', 'Crypto / Perps', 'Prediction Markets'];

  return (
    <div className="py-4 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {categories.map((cat) => {
            const isSelected = selectedCategory === (cat === 'All' ? 'all' : cat);
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat === 'All' ? 'all' : cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? 'bg-emerald-500 text-slate-950 font-semibold'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative flex-1 max-w-sm">
          <Search className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search firm, code, or keyword..."
            className="w-full pl-8 pr-7 py-1.5 text-xs bg-white/5 text-white placeholder:text-slate-500 rounded-lg border border-white/5 focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
