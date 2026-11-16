import React from 'react';
import { REVIEWS } from '../data/restaurantInfo';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-12 md:py-20 bg-crave-warmGray/60 dark:bg-crave-dark/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Rating Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Verified Customer Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-crave-dark dark:text-white">
              Loved by Bangalore Foodies
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 max-w-xl">
              Don't just take our word for it. Here is what local customers across Indiranagar, Koramangala & HSR have to say.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-crave-surface border border-crave-borderLight dark:border-crave-borderDark shadow-soft flex items-center gap-4 shrink-0">
            <div className="text-center border-r border-gray-200 dark:border-gray-700 pr-4">
              <span className="text-3xl font-black font-display text-crave-dark dark:text-white">
                4.9
              </span>
              <div className="flex items-center justify-center gap-0.5 text-amber-500 mt-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-extrabold text-gray-900 dark:text-white">
                2,400+ Satisfied Orders
              </p>
              <p className="text-[11px] text-gray-500 dark:text-gray-400">
                98.4% On-Time Delivery Rate
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-6 rounded-3xl bg-white dark:bg-crave-surface border border-crave-borderLight dark:border-crave-borderDark shadow-soft flex flex-col justify-between hover:shadow-card transition-shadow"
            >
              <div>
                {/* Star rating and quote icon */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-[11px] text-gray-400 font-medium">
                    {review.date}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed italic mb-4">
                  "{review.text}"
                </p>

                {/* Ordered Tag */}
                <div className="p-2 rounded-xl bg-gray-50 dark:bg-gray-900/60 text-[10px] text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-800">
                  <span className="font-bold text-gray-700 dark:text-gray-300">Ordered: </span>
                  {review.ordered}
                </div>
              </div>

              {/* Reviewer Profile */}
              <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover border border-brand-500/30 shrink-0"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <h4 className="font-bold text-xs text-crave-dark dark:text-white truncate">
                    {review.name}
                  </h4>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400 truncate">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
