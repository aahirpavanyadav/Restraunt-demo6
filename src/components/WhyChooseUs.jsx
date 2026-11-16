import React from 'react';
import { WHY_CHOOSE_US } from '../data/restaurantInfo';
import { ShieldCheck, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-12 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:bg-brand-500/20 dark:text-brand-400 text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>The Cloud Kitchen Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-crave-dark dark:text-white">
            Why Foodies Choose CRAVE
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
            We operate a purpose-built commercial cloud kitchen dedicated solely to food delivery quality. No crowded dining rooms, no lukewarm delays.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white dark:bg-crave-surface border border-crave-borderLight dark:border-crave-borderDark shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 dark:bg-amber-500/20 flex items-center justify-center text-3xl mb-5">
                  {item.icon}
                </div>
                <h3 className="font-extrabold text-lg text-crave-dark dark:text-white mb-2 font-display">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-800/80 flex items-center gap-1 text-[11px] font-bold text-brand-600 dark:text-brand-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Chef Inspected</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
