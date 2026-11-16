import React from 'react';
import { DELIVERY_AREAS, RESTAURANT_INFO } from '../data/restaurantInfo';
import { MapPin, Clock, Bike, ShieldAlert, PhoneCall } from 'lucide-react';

export default function DeliveryInfo() {
  return (
    <section id="delivery" className="py-12 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:bg-brand-500/20 dark:text-brand-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Bike className="w-4 h-4" />
            <span>Coverage & Timings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-crave-dark dark:text-white">
            Delivery Zones & Estimated Times
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
            Dispatched straight from our Indiranagar Cloud Kitchen in insulated thermal bags. We deliver across an 8 km radius.
          </p>
        </div>

        {/* 3 Key Delivery Rules Pills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-3xl bg-white dark:bg-crave-surface border border-crave-borderLight dark:border-crave-borderDark shadow-soft flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-500/10 text-brand-500 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-crave-dark dark:text-white mb-1">
                Fast Kitchen Dispatch
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                Avg 30-40 mins doorstep delivery. Food is packed within 2 minutes of exiting the oven.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-crave-surface border border-crave-borderLight dark:border-crave-borderDark shadow-soft flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0">
              <Bike className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-crave-dark dark:text-white mb-1">
                FREE Delivery on ₹499+
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                Orders under ₹499 have a nominal flat ₹40 delivery fee. Minimum order amount is ₹149.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-white dark:bg-crave-surface border border-crave-borderLight dark:border-crave-borderDark shadow-soft flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-extrabold text-base text-crave-dark dark:text-white mb-1">
                Kitchen Direct Pickup
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                Choose "Self Pickup" at checkout to grab your hot food directly from our Indiranagar counter.
              </p>
            </div>
          </div>
        </div>

        {/* Localities Table / Grid */}
        <div className="rounded-3xl bg-white dark:bg-crave-surface border border-crave-borderLight dark:border-crave-borderDark overflow-hidden shadow-soft">
          <div className="p-5 sm:p-6 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
            <div>
              <h3 className="font-extrabold text-lg text-crave-dark dark:text-white">
                Primary Delivery Localities
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Live delivery estimated transit times
              </p>
            </div>
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="hidden sm:flex items-center gap-2 text-xs font-bold text-brand-600 dark:text-brand-400 hover:underline"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Dispatch Line: {RESTAURANT_INFO.phone}</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100 dark:divide-gray-800">
            {DELIVERY_AREAS.map((item, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 flex flex-col justify-between hover:bg-gray-50/50 dark:hover:bg-gray-900/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                        item.available
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                          : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
                      }`}
                    >
                      {item.available ? 'Active Delivery' : 'Coming Soon'}
                    </span>
                    <span className="text-[11px] text-gray-400 font-semibold">
                      {item.distance}
                    </span>
                  </div>

                  <h4 className="font-bold text-sm text-crave-dark dark:text-white mb-1">
                    {item.area}
                  </h4>
                </div>

                <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-800/60 flex items-center justify-between text-xs">
                  <span className="text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-brand-500" />
                    Est. Time:
                  </span>
                  <span className="font-bold text-crave-dark dark:text-white">
                    {item.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
