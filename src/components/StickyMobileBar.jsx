import React from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export default function StickyMobileBar() {
  const { totalItemCount, grandTotal, setIsCartOpen } = useCart();

  if (totalItemCount === 0) return null;

  return (
    <div className="fixed bottom-3 inset-x-3 z-40 sm:hidden">
      <button
        onClick={() => setIsCartOpen(true)}
        className="w-full p-3.5 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-500 text-white font-extrabold shadow-2xl flex items-center justify-between border border-white/20 active:scale-[0.98] transition-all"
      >
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
            <ShoppingBag className="w-5 h-5 text-white" />
          </div>
          <div className="text-left">
            <span className="text-[11px] block uppercase tracking-wider text-white/80 font-bold leading-none">
              {totalItemCount} {totalItemCount === 1 ? 'Item' : 'Items'} in Cart
            </span>
            <span className="text-lg font-black leading-tight">
              ₹{grandTotal}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs font-black bg-white text-brand-600 px-3.5 py-2 rounded-xl shadow-sm">
          <span>View Cart</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </button>
    </div>
  );
}
