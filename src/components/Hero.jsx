import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Flame, 
  MapPin, 
  Star, 
  Check, 
  AlertCircle 
} from 'lucide-react';
import { RESTAURANT_INFO, DELIVERY_AREAS } from '../data/restaurantInfo';

export default function Hero() {
  const [searchArea, setSearchArea] = useState('');
  const [areaResult, setAreaResult] = useState(null);

  const handleCheckArea = (e) => {
    e.preventDefault();
    if (!searchArea.trim()) return;

    const query = searchArea.toLowerCase();
    const match = DELIVERY_AREAS.find(
      (a) => a.area.toLowerCase().includes(query)
    );

    if (match) {
      setAreaResult({
        found: true,
        available: match.available,
        area: match.area,
        time: match.time,
        note: match.note || ''
      });
    } else {
      setAreaResult({
        found: false,
        area: searchArea,
        time: '35-45 mins (Estimated)',
        available: true,
        note: 'We deliver within 8 km! Send your exact location on WhatsApp.'
      });
    }
  };

  return (
    <section id="home" className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      {/* Background soft ambient glow */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-brand-500/10 dark:bg-brand-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-amber-500/10 dark:bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Tag pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 dark:bg-brand-500/20 border border-brand-500/30 text-brand-600 dark:text-brand-400 text-xs sm:text-sm font-bold mb-4 sm:mb-6 animate-pulse-glow">
              <Flame className="w-4 h-4 fill-current text-brand-500" />
              <span>Indiranagar's Highest-Rated Local Cloud Kitchen</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black font-display tracking-tight text-crave-dark dark:text-white leading-[1.08] mb-5">
              Big Flavours. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-brand-600 to-amber-500">
                Hot & Fresh to Your Door.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 font-normal leading-relaxed mb-8 max-w-xl">
              Chef-crafted gourmet smash burgers, authentic dum biryani, loaded artisan pizzas, and fiery wraps. Cooked to order with premium ingredients and delivered in insulated thermal packaging in <strong>30-40 minutes</strong>.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto mb-10">
              <a
                href="#menu"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-brand-500 to-brand-600 hover:from-brand-600 hover:to-brand-700 text-white font-extrabold text-base flex items-center justify-center gap-2 shadow-card hover:shadow-glow hover:-translate-y-0.5 transition-all active:scale-95"
              >
                <span>Explore Full Menu</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#offers"
                className="w-full sm:w-auto px-6 py-4 rounded-xl border-2 border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-crave-surface/70 hover:border-brand-500 dark:hover:border-brand-500 text-gray-900 dark:text-gray-100 font-bold text-base flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all"
              >
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span>View Daily Deals</span>
              </a>
            </div>

            {/* Quick Delivery Area Checker Widget */}
            <div className="w-full max-w-lg p-4 rounded-2xl bg-white/90 dark:bg-crave-surface/90 border border-crave-borderLight dark:border-crave-borderDark shadow-soft">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-brand-500" />
                Check Delivery To Your Locality:
              </p>
              
              <form onSubmit={handleCheckArea} className="flex gap-2">
                <input
                  type="text"
                  placeholder="e.g. Koramangala, Indiranagar, Domlur..."
                  value={searchArea}
                  onChange={(e) => setSearchArea(e.target.value)}
                  className="flex-1 px-3.5 py-2 text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-crave-dark dark:bg-brand-500 hover:bg-black dark:hover:bg-brand-600 text-white text-xs sm:text-sm font-bold rounded-xl transition-colors shrink-0"
                >
                  Check Speed
                </button>
              </form>

              {areaResult && (
                <div
                  className={`mt-2.5 p-2.5 rounded-xl text-xs flex items-start gap-2 ${
                    areaResult.available
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                      : 'bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
                  }`}
                >
                  {areaResult.available ? (
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <span className="font-bold">{areaResult.area}: </span>
                    <span>{areaResult.time}</span>
                    {areaResult.note && <p className="text-[11px] opacity-90 mt-0.5">{areaResult.note}</p>}
                  </div>
                </div>
              )}
            </div>

            {/* Quick Trust Badges */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 w-full pt-6 border-t border-gray-200 dark:border-gray-800/80">
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black font-display text-brand-600 dark:text-brand-400">
                  30 Mins
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  Average Delivery
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black font-display text-amber-500 flex items-center gap-1">
                  4.9 <Star className="w-4 h-4 fill-amber-500" />
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  2,400+ Foodies
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-black font-display text-crave-dark dark:text-white">
                  100%
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  Thermal Packed
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Food Visual Composition */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              
              {/* Main Food Photo with Stylized Mask/Border */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 group">
                <img
                  src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop"
                  alt="The Beast Smash Burger by CRAVE Cloud Kitchen"
                  className="w-full h-[380px] sm:h-[450px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />

                {/* Gradient overlay for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="veg-badge bg-white p-0.5 rounded" />
                    <span className="non-veg-badge bg-white p-0.5 rounded" />
                    <span className="text-xs font-bold tracking-wider uppercase bg-brand-600 px-2.5 py-0.5 rounded-full">
                      Chef's Signature
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-display">The Beast Double Smash Burger</h3>
                  <p className="text-xs text-gray-300 line-clamp-1">Double aged cheddar, caramelised onions, brioche bun.</p>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black text-amber-400">₹349</span>
                      <span className="text-sm line-through text-gray-400">₹429</span>
                    </div>
                    <a
                      href="#menu"
                      className="px-3 py-1.5 bg-white text-crave-dark hover:bg-brand-500 hover:text-white rounded-lg text-xs font-bold transition-colors"
                    >
                      Quick Order →
                    </a>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Speed */}
              <div className="absolute -top-4 -left-4 sm:-left-6 z-20 bg-white/95 dark:bg-crave-surface/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-3 animate-bounce-gentle">
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-600 dark:bg-brand-500/20 dark:text-brand-400 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 font-semibold uppercase">Fresh Prep</p>
                  <p className="text-sm font-extrabold text-crave-dark dark:text-white">Avg 28 Mins</p>
                </div>
              </div>

              {/* Floating Badge 2: Hygiene Guarantee */}
              <div className="absolute -bottom-5 -right-4 sm:-right-6 z-20 bg-white/95 dark:bg-crave-surface/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 font-semibold uppercase">Cloud Kitchen</p>
                  <p className="text-sm font-extrabold text-crave-dark dark:text-white">5-Star Sanitized</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
