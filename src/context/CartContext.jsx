import React, { createContext, useContext, useState, useEffect } from 'react';
import { RESTAURANT_INFO, PROMO_CODES } from '../data/restaurantInfo';

const CartContext = createContext();

export function CartProvider({ children }) {
  // Load saved cart from localStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('crave_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [appliedCoupon, setAppliedCoupon] = useState(() => {
    try {
      const saved = localStorage.getItem('crave_coupon');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [orderType, setOrderType] = useState('delivery'); // 'delivery' | 'pickup'
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [toasts, setToasts] = useState([]);

  // Toast notification helper
  const showToast = (message, type = 'info') => {
    const id = Date.now() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('crave_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  // Sync applied coupon to localStorage
  useEffect(() => {
    try {
      if (appliedCoupon) {
        localStorage.setItem('crave_coupon', JSON.stringify(appliedCoupon));
      } else {
        localStorage.removeItem('crave_coupon');
      }
    } catch (e) {
      console.error('Failed to save coupon to localStorage', e);
    }
  }, [appliedCoupon]);

  // Add Item to cart
  const addToCart = (product, selectedAddons = [], customNote = '', quantity = 1) => {
    // Generate unique key for dish + its specific customizations
    const addonKey = selectedAddons
      .map((a) => a.id)
      .sort()
      .join('-');
    const cartItemId = `${product.id}__${addonKey}__${customNote.trim().toLowerCase()}`;

    // Calculate addon price
    const addonsTotal = selectedAddons.reduce((sum, item) => sum + item.price, 0);
    const unitPrice = product.price + addonsTotal;

    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.cartItemId === cartItemId);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [
          ...prev,
          {
            cartItemId,
            productId: product.id,
            name: product.name,
            category: product.category,
            price: product.price,
            unitPrice,
            image: product.image,
            isVeg: product.isVeg,
            selectedAddons,
            customNote,
            quantity,
          },
        ];
      }
    });

    showToast(`Added ${product.name} to cart!`, 'success');
  };

  // Update quantity
  const updateQuantity = (cartItemId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.cartItemId === cartItemId ? { ...item, quantity: newQty } : item
      )
    );
  };

  // Remove from cart
  const removeFromCart = (cartItemId) => {
    setCart((prev) => {
      const itemToRemove = prev.find((item) => item.cartItemId === cartItemId);
      if (itemToRemove) {
        showToast(`Removed ${itemToRemove.name} from cart`, 'info');
      }
      return prev.filter((item) => item.cartItemId !== cartItemId);
    });
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
    setAppliedCoupon(null);
    showToast('Cart cleared', 'info');
  };

  // Apply Coupon
  const applyCoupon = (code) => {
    const promo = PROMO_CODES.find((p) => p.code.toUpperCase() === code.trim().toUpperCase());
    if (!promo) {
      showToast(`Invalid coupon code: "${code}"`, 'error');
      return false;
    }

    if (itemsSubtotal < promo.minOrder) {
      showToast(`Coupon requires min food order of ₹${promo.minOrder}`, 'error');
      return false;
    }

    setAppliedCoupon(promo);
    showToast(`Coupon ${promo.code} applied successfully!`, 'success');
    return true;
  };

  // Remove Coupon
  const removeCoupon = () => {
    setAppliedCoupon(null);
    showToast('Coupon removed', 'info');
  };

  // Calculations
  const totalItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const itemsSubtotal = cart.reduce(
    (sum, item) => sum + item.unitPrice * item.quantity,
    0
  );

  // Discount calculation
  let discountAmount = 0;
  if (appliedCoupon && itemsSubtotal >= appliedCoupon.minOrder) {
    if (appliedCoupon.discountType === 'flat') {
      discountAmount = appliedCoupon.discountValue;
    } else if (appliedCoupon.discountType === 'percentage') {
      const rawDiscount = (itemsSubtotal * appliedCoupon.discountValue) / 100;
      discountAmount = appliedCoupon.maxDiscount
        ? Math.min(rawDiscount, appliedCoupon.maxDiscount)
        : rawDiscount;
    }
  }

  // Auto-remove coupon if order falls below minOrder
  useEffect(() => {
    if (appliedCoupon && itemsSubtotal > 0 && itemsSubtotal < appliedCoupon.minOrder) {
      setAppliedCoupon(null);
      showToast(`Coupon ${appliedCoupon.code} removed as order fell below ₹${appliedCoupon.minOrder}`, 'info');
    }
  }, [itemsSubtotal, appliedCoupon]);

  const deliveryFee =
    orderType === 'pickup' || itemsSubtotal === 0 || itemsSubtotal >= RESTAURANT_INFO.freeDeliveryThreshold
      ? 0
      : RESTAURANT_INFO.deliveryFee;

  const packagingFee = itemsSubtotal > 0 ? RESTAURANT_INFO.packagingFee : 0;

  const grandTotal = Math.max(0, itemsSubtotal - discountAmount + deliveryFee + packagingFee);

  const amountToFreeDelivery = Math.max(
    0,
    RESTAURANT_INFO.freeDeliveryThreshold - itemsSubtotal
  );

  // Helper to find quantity of a product currently in cart (for quick add steppers on product cards)
  const getProductCartQuantity = (productId) => {
    return cart
      .filter((item) => item.productId === productId)
      .reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
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
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        getProductCartQuantity,
        showToast,
        toasts,
        removeToast,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
