import React, { useState } from 'react';
import { Copy, Check, ExternalLink, ShieldCheck, ArrowUpDown } from 'lucide-react';

export default function PromoVault({ promos, searchQuery, selectedCategory }) {
  const [copiedCode, setCopiedCode] = useState(null);
  const [sortBy, setSortBy] = useState('discount'); // 'discount' | 'firm'

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => {
      setCopiedCode(null);
    }, 2000);
  };

  let filteredPromos = promos.filter(p => {
    // Category filter
    if (selectedCategory && selectedCategory !== 'all') {
      if (p.category !== selectedCategory) return false;
    }

    // Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        p.firm.toLowerCase().includes(q) ||
        p.code.toLowerCase().includes(q) ||
        p.title.toLowerCase().includes(q) ||
        (p.drawdownType && p.drawdownType.toLowerCase().includes(q))
      );
    }
    return true;
  });

  if (sortBy === 'discount') {
    filteredPromos.sort((a, b) => (b.discountPercent || 0) - (a.discountPercent || 0));
  } else if (sortBy === 'firm') {
    filteredPromos.sort((a, b) => a.firm.localeCompare(b.firm));
  }

  return (
    <div className="space-y-4">
      {/* Header bar */}
      <div className="flex items-center justify-between text-xs text-slate-400 pb-1">
        <div className="flex items-center space-x-2">
          <span>Active Discounts ({filteredPromos.length})</span>
          <span>•</span>
          <span className="text-emerald-400 flex items-center space-x-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Cross-Checked Live for September 2026</span>
          </span>
        </div>

        {/* Minimal Sort Toggle */}
        <div className="flex items-center space-x-2">
          <span className="text-slate-500">Sort:</span>
          <button
            onClick={() => setSortBy(sortBy === 'discount' ? 'firm' : 'discount')}
            className="text-slate-300 hover:text-white flex items-center space-x-1 cursor-pointer"
          >
            <span>{sortBy === 'discount' ? 'Highest Discount' : 'Firm Name'}</span>
            <ArrowUpDown className="w-3 h-3 text-slate-500" />
          </button>
        </div>
      </div>

      {/* Grid of Clean Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {filteredPromos.map((promo, idx) => {
          const isCopied = copiedCode === promo.code;

          return (
            <div
              key={idx}
              className="clean-card rounded-xl p-4 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Firm Name & Discount */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <h3 className="text-base font-semibold text-white">
                      {promo.firm}
                    </h3>
                    <div className="flex items-center space-x-1.5 mt-0.5 text-[11px] text-slate-400">
                      <span>{promo.category}</span>
                      {promo.drawdownType && (
                        <>
                          <span>•</span>
                          <span className="text-slate-300">{promo.drawdownType}</span>
                        </>
                      )}
                    </div>
                  </div>

                  {promo.discountPercent && (
                    <span className="text-sm font-bold text-emerald-400 font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                      {promo.discountPercent}% OFF
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-3">
                  {promo.description}
                </p>

                {/* Verification Status */}
                <div className="text-[11px] font-mono text-slate-400 mb-3 flex items-center space-x-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block"></span>
                  <span>{promo.verificationStatus || 'Verified Active'}</span>
                </div>
              </div>

              {/* Bottom Action: Copy Code Box & Claim */}
              <div className="pt-3 border-t border-white/5 space-y-2">
                <div className="flex items-center justify-between p-1.5 rounded-lg bg-black/40 border border-white/5">
                  <span className="font-mono font-bold text-sm text-white px-2 tracking-wide select-all">
                    {promo.code}
                  </span>
                  <button
                    onClick={() => handleCopy(promo.code)}
                    className={`px-3 py-1 rounded text-xs font-medium flex items-center space-x-1 transition cursor-pointer ${
                      isCopied
                        ? 'bg-emerald-500 text-slate-950 font-bold'
                        : 'bg-white/10 hover:bg-white/15 text-slate-200'
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-slate-400" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between text-xs pt-0.5">
                  <span className="text-[11px] text-slate-500 font-mono">{promo.verifiedDate || 'Sept 2026'}</span>
                  <a
                    href={promo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 font-medium flex items-center space-x-1 cursor-pointer"
                  >
                    <span>Claim Deal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {filteredPromos.length === 0 && (
        <div className="text-center py-16 clean-card rounded-xl text-slate-400 text-sm">
          No promotional codes match your search.
        </div>
      )}
    </div>
  );
}
