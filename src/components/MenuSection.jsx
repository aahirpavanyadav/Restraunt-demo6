import React, { useState, useMemo } from 'react';
import { MENU_ITEMS, CATEGORIES } from '../data/menuData';
import FoodCard from './FoodCard';
import { 
  Search, 
  SlidersHorizontal, 
  X, 
  Flame, 
  ArrowUpDown, 
  Check, 
  Filter 
} from 'lucide-react';

export default function MenuSection({ 
  activeCategory, 
  onSelectCategory, 
  onOpenCustomization 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [dietaryFilter, setDietaryFilter] = useState('all'); // 'all' | 'veg' | 'nonveg' | 'spicy'
  const [sortBy, setSortBy] = useState('recommended'); // 'recommended' | 'price-asc' | 'price-desc' | 'rating'

  // Filter and sort items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }

      // Dietary filter
      if (dietaryFilter === 'veg' && !item.isVeg) return false;
      if (dietaryFilter === 'nonveg' && item.isVeg) return false;
      if (dietaryFilter === 'spicy' && item.spiceLevel < 2) return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesCategory = item.category.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc && !matchesCategory) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      // Default recommended: best sellers first, then rating
      if (a.isBestSeller && !b.isBestSeller) return -1;
      if (!a.isBestSeller && b.isBestSeller) return 1;
      return b.rating - a.rating;
    });
  }, [activeCategory, dietaryFilter, searchQuery, sortBy]);

  const activeCategoryObj = CATEGORIES.find((c) => c.id === activeCategory);

  const resetFilters = () => {
    setSearchQuery('');
    setDietaryFilter('all');
    onSelectCategory('all');
    setSortBy('recommended');
  };

  return (
    <section id="menu" className="py-12 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-1">
              <Flame className="w-4 h-4 fill-brand-500" />
              <span>Full Cloud Kitchen Menu</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-crave-dark dark:text-white">
              {activeCategory === 'all'
                ? 'Explore All Cravings'
                : activeCategoryObj?.name || 'Explore Menu'}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Hand-prepared fresh in our Indiranagar kitchen. Cooked upon order dispatch.
            </p>
          </div>

          {/* Quick Stats on menu */}
          <div className="text-xs font-semibold text-gray-500 dark:text-gray-400">
            Showing <strong className="text-crave-dark dark:text-white">{filteredItems.length}</strong> delicious dishes
          </div>
        </div>

        {/* Search & Filter Controls Bar */}
        <div className="p-4 rounded-2xl bg-white dark:bg-crave-surface border border-crave-borderLight dark:border-crave-borderDark shadow-soft mb-8 space-y-3 sm:space-y-0 sm:flex sm:items-center sm:gap-4 sm:justify-between">
          
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search burgers, biryani, pizzas, fries..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2 text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Dietary Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            <button
              onClick={() => setDietaryFilter('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                dietaryFilter === 'all'
                  ? 'bg-crave-dark dark:bg-white text-white dark:text-crave-dark'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200'
              }`}
            >
              All
            </button>

            <button
              onClick={() => setDietaryFilter('veg')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 border ${
                dietaryFilter === 'veg'
                  ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                  : 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/60'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Veg Only</span>
            </button>

            <button
              onClick={() => setDietaryFilter('nonveg')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 border ${
                dietaryFilter === 'nonveg'
                  ? 'bg-rose-600 text-white border-rose-600 shadow-sm'
                  : 'bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-800/60'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <span>Non-Veg</span>
            </button>

            <button
              onClick={() => setDietaryFilter('spicy')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 border ${
                dietaryFilter === 'spicy'
                  ? 'bg-orange-600 text-white border-orange-600 shadow-sm'
                  : 'bg-orange-50 dark:bg-orange-950/40 text-orange-700 dark:text-orange-400 border-orange-200 dark:border-orange-800/60'
              }`}
            >
              <span>🔥 Spicy Only</span>
            </button>
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2 shrink-0">
            <ArrowUpDown className="w-4 h-4 text-gray-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-xs font-bold py-2 px-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500 cursor-pointer"
            >
              <option value="recommended">Sort: Chef's Pick</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Rating: Highest First</option>
            </select>
          </div>

        </div>

        {/* Product Cards Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((product) => (
              <FoodCard
                key={product.id}
                product={product}
                onOpenCustomization={onOpenCustomization}
              />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="py-16 px-4 text-center rounded-3xl bg-white dark:bg-crave-surface border border-dashed border-gray-300 dark:border-gray-700 max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-2xl bg-brand-500/10 text-brand-500 flex items-center justify-center mx-auto mb-4 text-2xl">
              🔍
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              No dishes found matching your filter
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 max-w-xs mx-auto">
              Try adjusting your search terms or dietary filters to view delicious options.
            </p>
            <button
              onClick={resetFilters}
              className="mt-5 px-5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs transition-colors shadow"
            >
              Reset Filters & Show All
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
