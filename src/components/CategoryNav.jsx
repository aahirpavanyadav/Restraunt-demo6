import React from 'react';
import { CATEGORIES } from '../data/menuData';

export default function CategoryNav({ activeCategory, onSelectCategory }) {
  return (
    <section className="py-6 border-y border-crave-borderLight/80 dark:border-crave-borderDark/80 bg-white/60 dark:bg-crave-surface/40 backdrop-blur-sm sticky top-[69px] z-30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 mb-3">
          <h2 className="text-sm font-extrabold uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Craving Shortcut:
          </h2>
          <span className="text-xs text-gray-400 hidden sm:inline">
            Scroll horizontally to see all 7 categories
          </span>
        </div>

        {/* Categories Pill Bar */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 overflow-x-auto no-scrollbar pb-1 pt-0.5">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-bold whitespace-nowrap transition-all duration-200 shrink-0 border ${
                  isActive
                    ? 'bg-brand-500 text-white border-brand-500 shadow-md scale-[1.02]'
                    : 'bg-white dark:bg-crave-surface text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-800 hover:border-brand-500/40 hover:bg-brand-50/50 dark:hover:bg-brand-950/20'
                }`}
              >
                <span className="text-lg">{cat.icon}</span>
                <span>{cat.name}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded-full font-semibold ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
