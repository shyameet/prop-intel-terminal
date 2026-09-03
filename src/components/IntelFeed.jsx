import React, { useState } from 'react';
import { ExternalLink, Copy, Check, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';

export default function IntelFeed({ items, searchQuery, selectedCategory }) {
  const [copiedId, setCopiedId] = useState(null);
  const [expandedId, setExpandedId] = useState(null);

  const handleCopy = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const filteredItems = items.filter(item => {
    // Category filter
    if (selectedCategory && selectedCategory !== 'all') {
      if (item.category !== selectedCategory) return false;
    }

    // Search query filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        (item.title && item.title.toLowerCase().includes(q)) ||
        (item.firm && item.firm.toLowerCase().includes(q)) ||
        (item.summary && item.summary.toLowerCase().includes(q)) ||
        (item.promoCode && item.promoCode.toLowerCase().includes(q))
      );
    }

    return true;
  });

  const getRelativeTime = (isoString) => {
    if (!isoString) return 'Recent';
    const diffMs = Date.now() - new Date(isoString).getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    if (diffHours < 1) return 'Just now';
    if (diffHours < 24) return `${diffHours}h ago`;
    const diffDays = Math.floor(diffHours / 24);
    return `${diffDays}d ago`;
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs text-slate-400 pb-1">
        <span>Latest Market Intelligence ({filteredItems.length} Signals)</span>
        <span className="text-slate-500">Auto-Sorted by Recency</span>
      </div>

      <div className="space-y-2.5">
        {filteredItems.map((item) => {
          const isCopied = copiedId === item.id;
          const isExpanded = expandedId === item.id;

          return (
            <div
              key={item.id}
              className="clean-card rounded-xl p-4 transition"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="flex-1">
                  
                  {/* Firm & Tag line */}
                  <div className="flex items-center space-x-2 text-xs mb-1.5 flex-wrap gap-y-1">
                    <span className="font-semibold text-emerald-400">
                      {item.firm}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400">{item.category}</span>
                    <span className="text-slate-600">•</span>
                    <span className="text-[11px] text-slate-400 px-1.5 py-0.2 rounded bg-white/5">
                      {item.eventType}
                    </span>
                    <span className="text-slate-500 text-[11px] ml-auto sm:ml-0">
                      {getRelativeTime(item.timestamp)}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-sm sm:text-base font-medium text-white mb-1.5">
                    {item.title}
                  </h4>

                  {/* Summary */}
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Expandable specs */}
                  {item.details && item.details.length > 0 && (
                    <div className="mt-2">
                      {isExpanded ? (
                        <div className="p-3 rounded-lg bg-black/30 border border-white/5 space-y-1 text-xs text-slate-300 mt-2">
                          {item.details.map((d, dIdx) => (
                            <div key={dIdx} className="flex items-start space-x-1.5">
                              <span className="text-emerald-400">›</span>
                              <span>{d}</span>
                            </div>
                          ))}
                        </div>
                      ) : null}

                      <button
                        onClick={() => setExpandedId(isExpanded ? null : item.id)}
                        className="text-[11px] text-slate-400 hover:text-slate-200 mt-1 flex items-center space-x-1 cursor-pointer"
                      >
                        <span>{isExpanded ? 'Hide Details' : 'Show Details'}</span>
                        {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                      </button>
                    </div>
                  )}

                </div>

                {/* Right action */}
                <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-start gap-2 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-white/5">
                  {item.promoCode && (
                    <div className="flex items-center space-x-1 px-2 py-1 rounded bg-black/40 border border-white/10 font-mono text-xs">
                      <span className="text-white font-bold">{item.promoCode}</span>
                      <button
                        onClick={() => handleCopy(item.promoCode, item.id)}
                        className="text-[11px] text-emerald-400 hover:text-emerald-300 ml-1 cursor-pointer"
                      >
                        {isCopied ? 'Copied' : 'Copy'}
                      </button>
                    </div>
                  )}

                  {item.sourceUrl && (
                    <a
                      href={item.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-400 hover:text-white flex items-center space-x-1 cursor-pointer"
                    >
                      <span>{item.sourceName || 'Source'}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-16 clean-card rounded-xl text-slate-400 text-sm">
          No intelligence signals match your search.
        </div>
      )}
    </div>
  );
}
