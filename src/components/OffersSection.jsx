import React from 'react';
import { useCart } from '../context/CartContext';
import { PROMO_CODES } from '../data/restaurantInfo';
import { MENU_ITEMS } from '../data/menuData';
import { Tag, Sparkles, Check, ArrowRight, Percent, Gift } from 'lucide-react';

export default function OffersSection({ onOpenCustomization }) {
  const { appliedCoupon, applyCoupon, addToCart } = useCart();

  // Find combo items to feature
  const comboItems = MENU_ITEMS.filter((item) => item.category === 'combos');

  return (
    <section id="offers" className="py-12 md:py-20 bg-crave-warmGray/60 dark:bg-crave-dark/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Gift className="w-4 h-4" />
            <span>Exclusive Kitchen Deals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-crave-dark dark:text-white">
            Daily Offers & Saver Combos
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
            Apply coupons with one click or grab our curated value feast boxes designed for big appetites and smart savings.
          </p>
        </div>

        {/* Promo Codes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {PROMO_CODES.map((promo) => {
            const isApplied = appliedCoupon && appliedCoupon.code === promo.code;
            return (
              <div
                key={promo.code}
                className={`relative p-6 rounded-3xl bg-white dark:bg-crave-surface border transition-all duration-300 shadow-soft flex flex-col justify-between ${
                  isApplied
                    ? 'border-brand-500 ring-2 ring-brand-500/20'
                    : 'border-crave-borderLight dark:border-crave-borderDark hover:border-brand-500/50'
                }`}
              >
                {/* Coupon Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-300 border border-amber-500/20">
                    {promo.tag}
                  </span>
                  <Tag className="w-5 h-5 text-gray-400" />
                </div>

                {/* Offer Details */}
                <div>
                  <h3 className="text-2xl font-black text-crave-dark dark:text-white font-display mb-1">
                    {promo.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                    {promo.description}
                  </p>
                </div>

                {/* Code Pill & Action Button */}
                <div className="pt-4 border-t border-dashed border-gray-200 dark:border-gray-800 flex items-center justify-between gap-3">
                  <div className="px-3 py-1.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-xs font-mono font-black tracking-widest text-brand-600 dark:text-brand-400 border border-dashed border-gray-300 dark:border-gray-700">
                    {promo.code}
                  </div>

                  <button
                    onClick={() => applyCoupon(promo.code)}
                    disabled={isApplied}
                    className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-1.5 ${
                      isApplied
                        ? 'bg-emerald-600 text-white cursor-default'
                        : 'bg-brand-500 hover:bg-brand-600 active:scale-95 text-white shadow-sm'
                    }`}
                  >
                    {isApplied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Applied</span>
                      </>
                    ) : (
                      <span>Apply Coupon</span>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Combos Spotlight */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl sm:text-2xl font-black font-display text-crave-dark dark:text-white">
              Chef-Curated Saver Combos
            </h3>
            <a
              href="#menu"
              className="text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1"
            >
              <span>Explore all combos</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {comboItems.map((combo) => (
              <div
                key={combo.id}
                className="group rounded-3xl bg-white dark:bg-crave-surface border border-crave-borderLight dark:border-crave-borderDark overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src={combo.image}
                    alt={combo.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-brand-600 text-white text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full shadow">
                    Value Combo
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-base text-crave-dark dark:text-white line-clamp-1 mb-1">
                      {combo.name}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
                      {combo.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-lg font-black text-crave-dark dark:text-white font-display">
                          ₹{combo.price}
                        </span>
                        {combo.originalPrice && (
                          <span className="text-xs text-gray-400 line-through">
                            ₹{combo.originalPrice}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">
                        Save ₹{combo.originalPrice - combo.price}
                      </span>
                    </div>

                    <button
                      onClick={() => addToCart(combo, [], '', 1)}
                      className="px-4 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs shadow transition-all active:scale-95"
                    >
                      Add Combo +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
