import React from 'react';
import { useCart } from '../context/CartContext';
import { Plus, Minus, Star, Flame, SlidersHorizontal, Check } from 'lucide-react';

export default function FoodCard({ product, onOpenCustomization }) {
  const { cart, addToCart, updateQuantity, getProductCartQuantity } = useCart();

  const currentCartQty = getProductCartQuantity(product.id);

  // Find if this product is already in cart without customizations (for direct +/-)
  const defaultCartItem = cart.find(
    (item) => item.productId === product.id && item.selectedAddons.length === 0 && !item.customNote
  );

  const handleQuickAdd = () => {
    if (product.customizable) {
      onOpenCustomization(product);
    } else {
      addToCart(product, [], '', 1);
    }
  };

  const handleIncrement = () => {
    if (defaultCartItem) {
      updateQuantity(defaultCartItem.cartItemId, defaultCartItem.quantity + 1);
    } else if (product.customizable) {
      onOpenCustomization(product);
    } else {
      addToCart(product, [], '', 1);
    }
  };

  const handleDecrement = () => {
    if (defaultCartItem) {
      updateQuantity(defaultCartItem.cartItemId, defaultCartItem.quantity - 1);
    }
  };

  const renderSpice = (level) => {
    if (level === 0) return null;
    return (
      <span className="flex items-center text-[11px] font-semibold text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-950/60 px-1.5 py-0.5 rounded">
        {'🌶️'.repeat(level)} {level === 1 ? 'Mild' : level === 2 ? 'Medium' : 'Spicy'}
      </span>
    );
  };

  return (
    <div className="group rounded-3xl bg-white dark:bg-crave-surface border border-crave-borderLight dark:border-crave-borderDark overflow-hidden shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
      
      {/* Top Media Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-gray-800">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Top Floating Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap items-center gap-1.5 z-10">
          {/* Veg/Non-Veg Tag */}
          <span
            className={`p-1 rounded-md bg-white/95 dark:bg-crave-surface/95 shadow-sm ${
              product.isVeg ? 'veg-badge' : 'non-veg-badge'
            }`}
            title={product.isVeg ? 'Pure Vegetarian' : 'Non-Vegetarian'}
          />

          {product.isBestSeller && (
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1">
              <Star className="w-3 h-3 fill-current" /> Best Seller
            </span>
          )}
        </div>

        {/* Serves Info badge bottom right */}
        <div className="absolute bottom-2.5 right-2.5 bg-black/60 backdrop-blur-md text-white text-[10px] font-semibold px-2 py-0.5 rounded-md">
          {product.serves}
        </div>
      </div>

      {/* Content Container */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Meta bar: Rating & Spice */}
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <div className="flex items-center gap-1 text-xs font-bold text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-500" />
              <span>{product.rating}</span>
              <span className="text-[11px] text-gray-400 font-normal">
                ({product.reviewsCount})
              </span>
            </div>
            {renderSpice(product.spiceLevel)}
          </div>

          {/* Title */}
          <h3 className="font-bold text-base sm:text-lg text-crave-dark dark:text-white line-clamp-1 group-hover:text-brand-500 transition-colors">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Price & Action Footer */}
        <div className="pt-4 mt-3 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between gap-2">
          
          {/* Pricing display */}
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg sm:text-xl font-black text-crave-dark dark:text-white font-display">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-gray-400 line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>
            {product.customizable && (
              <span className="text-[10px] text-brand-600 dark:text-brand-400 font-semibold block">
                Customizable
              </span>
            )}
          </div>

          {/* Add to Cart / Quantity Stepper */}
          <div className="shrink-0">
            {currentCartQty > 0 && defaultCartItem ? (
              <div className="flex items-center rounded-xl bg-brand-50 dark:bg-brand-950/60 border border-brand-500/40 p-1 text-brand-600 dark:text-brand-400">
                <button
                  onClick={handleDecrement}
                  aria-label="Decrease quantity"
                  className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-brand-500 hover:text-white transition-colors"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-7 text-center font-bold text-xs sm:text-sm text-crave-dark dark:text-white">
                  {currentCartQty}
                </span>
                <button
                  onClick={handleIncrement}
                  aria-label="Increase quantity"
                  className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-brand-500 hover:text-white transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={handleQuickAdd}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 active:scale-95 text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow-glow transition-all"
              >
                {product.customizable ? (
                  <>
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                    <span>Add +</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add</span>
                  </>
                )}
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
