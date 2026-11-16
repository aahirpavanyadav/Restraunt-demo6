import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, Check, Star, Sparkles } from 'lucide-react';

export default function CustomizationModal({ product, onClose }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [customNote, setCustomNote] = useState('');

  // Preselect first option of any single-choice group
  useEffect(() => {
    if (!product || !product.addonGroups) return;
    const initialAddons = [];
    product.addonGroups.forEach((group) => {
      if (group.type === 'single' && group.options.length > 0) {
        initialAddons.push(group.options[0]);
      }
    });
    setSelectedAddons(initialAddons);
  }, [product]);

  if (!product) return null;

  const handleSingleSelect = (group, option) => {
    setSelectedAddons((prev) => {
      // Remove any existing option from this group
      const filtered = prev.filter(
        (a) => !group.options.some((opt) => opt.id === a.id)
      );
      return [...filtered, option];
    });
  };

  const handleMultipleToggle = (option) => {
    setSelectedAddons((prev) => {
      const exists = prev.some((a) => a.id === option.id);
      if (exists) {
        return prev.filter((a) => a.id !== option.id);
      } else {
        return [...prev, option];
      }
    });
  };

  const addonsTotal = selectedAddons.reduce((sum, item) => sum + item.price, 0);
  const unitPrice = product.price + addonsTotal;
  const totalPrice = unitPrice * quantity;

  const handleConfirm = () => {
    addToCart(product, selectedAddons, customNote, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-white dark:bg-crave-surface rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto">
        
        {/* Header Media */}
        <div className="relative h-48 sm:h-56 shrink-0 bg-gray-100 dark:bg-gray-800">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badges */}
          <div className="absolute bottom-3 left-4 flex items-center gap-2">
            <span
              className={`p-1 rounded-md bg-white/95 shadow-sm ${
                product.isVeg ? 'veg-badge' : 'non-veg-badge'
              }`}
            />
            <span className="text-xs font-bold text-white bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full">
              {product.serves}
            </span>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {/* Title & Info */}
          <div>
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-xl font-extrabold text-crave-dark dark:text-white font-display">
                {product.name}
              </h2>
              <span className="text-xl font-black text-brand-600 dark:text-brand-400">
                ₹{product.price}
              </span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Add-on Groups */}
          {product.addonGroups &&
            product.addonGroups.map((group, gIdx) => (
              <div
                key={gIdx}
                className="pt-4 border-t border-gray-100 dark:border-gray-800"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                    {group.name}
                  </h4>
                  <span className="text-[11px] font-semibold text-gray-400">
                    {group.type === 'single' ? 'Choose 1' : 'Optional'}
                  </span>
                </div>

                <div className="space-y-2">
                  {group.options.map((option) => {
                    const isSelected = selectedAddons.some((a) => a.id === option.id);
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() =>
                          group.type === 'single'
                            ? handleSingleSelect(group, option)
                            : handleMultipleToggle(option)
                        }
                        className={`w-full flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                          isSelected
                            ? 'border-brand-500 bg-brand-50/60 dark:bg-brand-950/40 text-brand-700 dark:text-brand-300'
                            : 'border-gray-200 dark:border-gray-800 hover:border-gray-300 text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-4 h-4 rounded-${
                              group.type === 'single' ? 'full' : 'md'
                            } border flex items-center justify-center ${
                              isSelected
                                ? 'border-brand-500 bg-brand-500 text-white'
                                : 'border-gray-300 dark:border-gray-600'
                            }`}
                          >
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span className="text-xs sm:text-sm font-semibold">
                            {option.name}
                          </span>
                        </div>
                        <span className="text-xs font-bold">
                          {option.price > 0 ? `+₹${option.price}` : 'Free'}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}

          {/* Cooking Instructions / Special Requests */}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
              Kitchen Instructions (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Less spicy, pack dips separately, extra crispy..."
              value={customNote}
              onChange={(e) => setCustomNote(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60 text-xs sm:text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
              maxLength={120}
            />
          </div>
        </div>

        {/* Sticky Action Footer */}
        <div className="p-4 sm:p-5 border-t border-gray-100 dark:border-gray-800 bg-gray-50/80 dark:bg-crave-surfaceLight/50 flex items-center justify-between gap-4 shrink-0">
          
          {/* Quantity Stepper */}
          <div className="flex items-center rounded-xl bg-white dark:bg-crave-surface border border-gray-200 dark:border-gray-700 p-1">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
              aria-label="Decrease quantity"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-8 text-center font-bold text-sm text-gray-900 dark:text-white">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300"
              aria-label="Increase quantity"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleConfirm}
            className="flex-1 py-3 px-5 rounded-xl bg-brand-500 hover:bg-brand-600 active:scale-95 text-white font-extrabold text-sm sm:text-base flex items-center justify-between shadow-md hover:shadow-glow transition-all"
          >
            <span>Add Item</span>
            <span>₹{totalPrice}</span>
          </button>

        </div>

      </div>
    </div>
  );
}
