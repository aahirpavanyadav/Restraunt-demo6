import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  Tag, 
  Bike, 
  Store, 
  Sparkles, 
  AlertCircle 
} from 'lucide-react';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalItemCount,
    itemsSubtotal,
    discountAmount,
    deliveryFee,
    packagingFee,
    grandTotal,
    amountToFreeDelivery,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    orderType,
    setOrderType,
    setIsCheckoutOpen,
  } = useCart();

  const [couponInput, setCouponInput] = useState('');

  if (!isCartOpen) return null;

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!couponInput.trim()) return;
    const success = applyCoupon(couponInput);
    if (success) {
      setCouponInput('');
    }
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Slide-in Panel */}
      <div className="relative w-full max-w-md bg-white dark:bg-crave-surface h-full shadow-2xl z-10 flex flex-col justify-between border-l border-crave-borderLight dark:border-crave-borderDark overflow-hidden animate-slide-left">
        
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-crave-warmWhite/80 dark:bg-crave-surfaceLight/40">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-brand-500/10 text-brand-600 dark:bg-brand-500/20 dark:text-brand-400 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-extrabold text-lg text-crave-dark dark:text-white font-display">
                Your Food Cart
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                {totalItemCount} {totalItemCount === 1 ? 'item' : 'items'} selected
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {cart.length > 0 && (
              <button
                onClick={clearCart}
                className="text-xs text-rose-500 hover:text-rose-600 font-semibold px-2 py-1 rounded hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors"
                title="Clear all items"
              >
                Clear
              </button>
            )}
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-xl text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Free Delivery Goal Bar */}
        {cart.length > 0 && orderType === 'delivery' && (
          <div className="px-5 py-2.5 bg-amber-50 dark:bg-amber-950/40 border-b border-amber-200/80 dark:border-amber-800/60">
            {amountToFreeDelivery > 0 ? (
              <div>
                <div className="flex items-center justify-between text-xs font-bold text-amber-800 dark:text-amber-300 mb-1.5">
                  <span className="flex items-center gap-1.5">
                    <Bike className="w-4 h-4 text-amber-600" />
                    Add ₹{amountToFreeDelivery} more for FREE Delivery!
                  </span>
                  <span>₹{itemsSubtotal}/₹{RESTAURANT_INFO.freeDeliveryThreshold}</span>
                </div>
                <div className="w-full bg-amber-200 dark:bg-amber-900 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-amber-500 h-1.5 rounded-full transition-all duration-300"
                    style={{
                      width: `${Math.min(
                        100,
                        (itemsSubtotal / RESTAURANT_INFO.freeDeliveryThreshold) * 100
                      )}%`,
                    }}
                  />
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 dark:text-emerald-300">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                <span>Congratulations! You unlocked FREE Delivery!</span>
              </div>
            )}
          </div>
        )}

        {/* Scrollable Cart Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {cart.length === 0 ? (
            /* Empty State */
            <div className="h-full flex flex-col items-center justify-center text-center p-6 my-auto">
              <div className="w-20 h-20 rounded-3xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-3xl mb-4 text-gray-400">
                🥡
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                Your cart is hungry!
              </h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 max-w-xs mb-6">
                You haven't added any dishes yet. Explore our mouth-watering smash burgers, biryanis, and artisan pizzas.
              </p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-extrabold text-sm shadow-md transition-all active:scale-95"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            <>
              {/* Order Type Selector */}
              <div className="p-1 rounded-xl bg-gray-100 dark:bg-gray-800/80 flex items-center text-xs font-bold">
                <button
                  onClick={() => setOrderType('delivery')}
                  className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                    orderType === 'delivery'
                      ? 'bg-white dark:bg-crave-surface text-brand-600 dark:text-brand-400 shadow-sm'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  <Bike className="w-3.5 h-3.5" />
                  <span>Home Delivery</span>
                </button>
                <button
                  onClick={() => setOrderType('pickup')}
                  className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-1.5 transition-all ${
                    orderType === 'pickup'
                      ? 'bg-white dark:bg-crave-surface text-brand-600 dark:text-brand-400 shadow-sm'
                      : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  <Store className="w-3.5 h-3.5" />
                  <span>Kitchen Pickup</span>
                </button>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                {cart.map((item) => (
                  <div
                    key={item.cartItemId}
                    className="p-3.5 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 flex gap-3"
                  >
                    {/* Thumbnail */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-xl object-cover shrink-0"
                    />

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-1">
                        <div className="flex items-center gap-1.5 truncate">
                          <span
                            className={`p-0.5 rounded ${
                              item.isVeg ? 'veg-badge' : 'non-veg-badge'
                            }`}
                          />
                          <h4 className="font-bold text-sm text-crave-dark dark:text-white truncate">
                            {item.name}
                          </h4>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="text-gray-400 hover:text-rose-500 p-1"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Add-ons list if any */}
                      {item.selectedAddons && item.selectedAddons.length > 0 && (
                        <p className="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-1 mt-0.5">
                          + {item.selectedAddons.map((a) => a.name).join(', ')}
                        </p>
                      )}

                      {/* Custom note */}
                      {item.customNote && (
                        <p className="text-[10px] italic text-amber-600 dark:text-amber-400 line-clamp-1">
                          Note: "{item.customNote}"
                        </p>
                      )}

                      {/* Pricing and Stepper */}
                      <div className="flex items-center justify-between mt-2">
                        <span className="font-black text-sm text-crave-dark dark:text-white">
                          ₹{item.unitPrice * item.quantity}
                        </span>

                        <div className="flex items-center rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-0.5">
                          <button
                            onClick={() =>
                              updateQuantity(item.cartItemId, item.quantity - 1)
                            }
                            className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 rounded"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-bold text-crave-dark dark:text-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.cartItemId, item.quantity + 1)
                            }
                            className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 rounded"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Coupon Code Section */}
              <div className="pt-2">
                {appliedCoupon ? (
                  <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Tag className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      <div>
                        <p className="text-xs font-bold text-emerald-800 dark:text-emerald-300">
                          {appliedCoupon.code} Applied!
                        </p>
                        <p className="text-[11px] text-emerald-600 dark:text-emerald-400">
                          You save ₹{discountAmount} on this order
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={removeCoupon}
                      className="text-xs font-bold text-rose-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleApplyCoupon}
                    className="flex items-center gap-2"
                  >
                    <input
                      type="text"
                      placeholder="Enter promo code (e.g. CRAVE100)"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                      className="flex-1 px-3 py-2 text-xs rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60 uppercase font-mono tracking-wider text-gray-900 dark:text-white placeholder:normal-case placeholder:font-sans focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-crave-dark dark:bg-brand-500 hover:bg-black text-white text-xs font-bold rounded-xl transition-colors"
                    >
                      Apply
                    </button>
                  </form>
                )}
              </div>

              {/* Bill Details Breakdown */}
              <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 space-y-2 text-xs">
                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Item Subtotal</span>
                  <span className="font-semibold text-crave-dark dark:text-white">
                    ₹{itemsSubtotal}
                  </span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-600 dark:text-emerald-400 font-bold">
                    <span>Coupon Discount</span>
                    <span>-₹{discountAmount}</span>
                  </div>
                )}

                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span className="flex items-center gap-1">
                    Delivery Partner Fee
                    {orderType === 'pickup' && ' (Self Pickup)'}
                  </span>
                  <span className="font-semibold text-crave-dark dark:text-white">
                    {deliveryFee === 0 ? (
                      <span className="text-emerald-600 uppercase font-bold">FREE</span>
                    ) : (
                      `₹${deliveryFee}`
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-gray-600 dark:text-gray-400">
                  <span>Thermal Packaging & Hygiene</span>
                  <span className="font-semibold text-crave-dark dark:text-white">
                    ₹{packagingFee}
                  </span>
                </div>

                <div className="pt-2 border-t border-gray-200 dark:border-gray-700 flex justify-between text-sm font-black text-crave-dark dark:text-white">
                  <span>To Pay (Estimated)</span>
                  <span className="text-brand-600 dark:text-brand-400 text-base">
                    ₹{grandTotal}
                  </span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Drawer Action Footer */}
        {cart.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-gray-100 dark:border-gray-800 bg-white dark:bg-crave-surface">
            {itemsSubtotal < RESTAURANT_INFO.minOrder && (
              <p className="text-[11px] text-rose-500 font-semibold mb-2 text-center flex items-center justify-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                Minimum order amount is ₹{RESTAURANT_INFO.minOrder} (Add ₹{RESTAURANT_INFO.minOrder - itemsSubtotal} more)
              </p>
            )}

            <button
              onClick={handleProceedToCheckout}
              disabled={itemsSubtotal < RESTAURANT_INFO.minOrder}
              className={`w-full py-3.5 px-6 rounded-2xl text-white font-extrabold text-sm sm:text-base flex items-center justify-between shadow-card transition-all active:scale-95 ${
                itemsSubtotal < RESTAURANT_INFO.minOrder
                  ? 'bg-gray-400 cursor-not-allowed opacity-60'
                  : 'bg-brand-500 hover:bg-brand-600 hover:shadow-glow'
              }`}
            >
              <div className="text-left">
                <span className="block text-[10px] uppercase tracking-wider text-white/80 font-bold">
                  {orderType === 'delivery' ? 'Deliver to door' : 'Pickup at Kitchen'}
                </span>
                <span className="text-base font-black">₹{grandTotal}</span>
              </div>
              <div className="flex items-center gap-1.5 font-bold">
                <span>Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
