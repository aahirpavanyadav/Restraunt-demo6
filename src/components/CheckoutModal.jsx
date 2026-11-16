import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { RESTAURANT_INFO } from '../data/restaurantInfo';
import { 
  X, 
  Send, 
  CheckCircle2, 
  Phone, 
  MapPin, 
  User, 
  Clock, 
  CreditCard, 
  Copy, 
  Check, 
  ArrowLeft,
  Sparkles,
  AlertCircle
} from 'lucide-react';

export default function CheckoutModal() {
  const {
    cart,
    isCheckoutOpen,
    setIsCheckoutOpen,
    itemsSubtotal,
    discountAmount,
    deliveryFee,
    packagingFee,
    grandTotal,
    appliedCoupon,
    orderType,
    clearCart,
    showToast,
  } = useCart();

  // Form state
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [landmark, setLandmark] = useState('');
  const [timing, setTiming] = useState('asap'); // 'asap' | 'lunch' | 'dinner'
  const [paymentMode, setPaymentMode] = useState('upi-cod'); // 'upi-cod' | 'cash' | 'whatsapp-pay'
  const [deliveryNotes, setDeliveryNotes] = useState('');

  // Form validation errors
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isCheckoutOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Please enter your name';
    if (!phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (!/^[6-9]\d{9}$/.test(phone.replace(/[\s-]/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (orderType === 'delivery') {
      if (!address.trim() || address.trim().length < 8) {
        newErrors.address = 'Please provide complete flat/house no and street address';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const constructWhatsAppMessage = () => {
    const cleanPhone = phone.replace(/[\s-]/g, '');
    const timingText =
      timing === 'asap'
        ? 'ASAP (Next 30-40 mins)'
        : timing === 'lunch'
        ? 'Scheduled for Lunch (1:00 PM - 2:00 PM)'
        : 'Scheduled for Dinner (8:00 PM - 9:00 PM)';

    const paymentText =
      paymentMode === 'upi-cod'
        ? 'UPI on Delivery (GPay / PhonePe / QR)'
        : paymentMode === 'cash'
        ? 'Cash on Delivery'
        : 'Pay via Payment Link in WhatsApp';

    let itemsList = cart
      .map((item, idx) => {
        let details = `${idx + 1}. *${item.name}* x ${item.quantity} = ₹${
          item.unitPrice * item.quantity
        }`;
        if (item.selectedAddons && item.selectedAddons.length > 0) {
          details += `\n   └ Addons: ${item.selectedAddons.map((a) => a.name).join(', ')}`;
        }
        if (item.customNote) {
          details += `\n   └ Note: "${item.customNote}"`;
        }
        return details;
      })
      .join('\n');

    const msg = `*🍽️ NEW ORDER ENQUIRY — CRAVE CLOUD KITCHEN*
----------------------------------------
*CUSTOMER DETAILS:*
👤 Name: ${name.trim()}
📱 Phone: +91 ${cleanPhone}
📦 Order Type: ${orderType === 'delivery' ? 'Home Delivery' : 'Self Kitchen Pickup'}
${
  orderType === 'delivery'
    ? `📍 Delivery Address: ${address.trim()}\n📌 Landmark: ${landmark.trim() || 'N/A'}`
    : `📍 Pickup Hub: ${RESTAURANT_INFO.address}`
}
⏰ Preferred Timing: ${timingText}

*ORDER SUMMARY:*
${itemsList}
----------------------------------------
💵 Item Subtotal: ₹${itemsSubtotal}
${appliedCoupon ? `🏷️ Coupon Discount (${appliedCoupon.code}): -₹${discountAmount}\n` : ''}🛵 Delivery Fee: ${deliveryFee === 0 ? 'FREE' : `₹${deliveryFee}`}
🥡 Packaging & Hygiene: ₹${packagingFee}
💰 *TOTAL AMOUNT PAYABLE: ₹${grandTotal}*
💳 Payment Preference: ${paymentText}
${deliveryNotes.trim() ? `📝 Rider / Delivery Notes: "${deliveryNotes.trim()}"\n` : ''}----------------------------------------
_Please confirm availability and share order acceptance!_`;

    return msg;
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const message = constructWhatsAppMessage();
    setGeneratedMessage(message);

    // Encode message for WhatsApp web / app link
    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encoded}`;

    // Open WhatsApp in new tab/app window
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setIsSubmitted(true);
    showToast('WhatsApp enquiry opened!', 'success');
  };

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(generatedMessage);
    setCopied(true);
    showToast('Order details copied to clipboard!', 'info');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDone = () => {
    clearCart();
    setIsSubmitted(false);
    setIsCheckoutOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={() => !isSubmitted && setIsCheckoutOpen(false)}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-xl bg-white dark:bg-crave-surface rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden z-10 max-h-[94vh] flex flex-col my-auto">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between bg-crave-warmWhite/80 dark:bg-crave-surfaceLight/40 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-brand-500 text-white flex items-center justify-center">
              <Send className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-extrabold text-lg text-crave-dark dark:text-white font-display">
                {isSubmitted ? 'Order Enquiry Sent' : 'Complete Your Order'}
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {isSubmitted
                  ? 'Awaiting kitchen confirmation via WhatsApp'
                  : 'Fast WhatsApp ordering with no upfront payment'}
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsCheckoutOpen(false)}
            className="p-2 rounded-xl text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          {isSubmitted ? (
            /* Confirmation Receipt State */
            <div className="text-center py-4 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-2xl font-black font-display text-crave-dark dark:text-white">
                  Order Enquiry Dispatched!
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1.5 max-w-md mx-auto leading-relaxed">
                  Your order items and delivery details have been formatted and sent to our kitchen WhatsApp.
                </p>
              </div>

              {/* Status Note adhering to prompt requirements */}
              <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-left text-xs text-amber-900 dark:text-amber-200 space-y-1">
                <p className="font-bold flex items-center gap-1.5 text-amber-800 dark:text-amber-300">
                  <Clock className="w-4 h-4 shrink-0" />
                  Order Confirmation Status: Pending Kitchen Approval
                </p>
                <p className="text-[11px] leading-relaxed">
                  Our kitchen manager in Indiranagar will review item availability and respond with live preparation confirmation and courier dispatch tracking on WhatsApp within 2 minutes. No money has been charged yet.
                </p>
              </div>

              {/* Order Message Preview & Copy */}
              <div className="text-left">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    Dispatched Message Preview:
                  </span>
                  <button
                    onClick={handleCopyMessage}
                    className="text-xs text-brand-600 dark:text-brand-400 font-bold hover:underline flex items-center gap-1"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy Text'}</span>
                  </button>
                </div>
                <pre className="p-3.5 rounded-xl bg-gray-900 text-gray-200 text-[11px] font-mono leading-relaxed whitespace-pre-wrap max-h-48 overflow-y-auto border border-gray-800">
                  {generatedMessage}
                </pre>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
                    generatedMessage
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow"
                >
                  <Send className="w-4 h-4" />
                  <span>Reopen WhatsApp Chat</span>
                </a>
                <button
                  onClick={handleDone}
                  className="px-6 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-crave-surface text-gray-800 dark:text-gray-200 font-bold text-xs sm:text-sm hover:bg-gray-50 transition-colors"
                >
                  Done / New Order
                </button>
              </div>
            </div>
          ) : (
            /* Checkout Form */
            <form onSubmit={handleCheckoutSubmit} className="space-y-4">
              
              {/* Order Type Indicator */}
              <div className="p-3 rounded-xl bg-brand-50/70 dark:bg-brand-950/30 border border-brand-500/20 flex items-center justify-between text-xs">
                <span className="font-semibold text-gray-700 dark:text-gray-300">
                  Order Mode: <strong className="text-brand-600 dark:text-brand-400">{orderType === 'delivery' ? 'Home Delivery' : 'Kitchen Pickup'}</strong>
                </span>
                <span className="font-bold text-crave-dark dark:text-white">
                  {cart.length} items • ₹{grandTotal}
                </span>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: null }));
                      }}
                      className={`w-full pl-9 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border ${
                        errors.name
                          ? 'border-rose-500 bg-rose-50/50'
                          : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60'
                      } text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500`}
                    />
                  </div>
                  {errors.name && (
                    <p className="text-[11px] text-rose-500 mt-0.5">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                    WhatsApp Phone Number *
                  </label>
                  <div className="relative">
                    <span className="text-xs font-bold text-gray-400 absolute left-3 top-1/2 -translate-y-1/2">
                      +91
                    </span>
                    <input
                      type="tel"
                      placeholder="98765 43210"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors((prev) => ({ ...prev, phone: null }));
                      }}
                      maxLength={12}
                      className={`w-full pl-11 pr-3 py-2.5 text-xs sm:text-sm rounded-xl border ${
                        errors.phone
                          ? 'border-rose-500 bg-rose-50/50'
                          : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60'
                      } text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-[11px] text-rose-500 mt-0.5">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Address (If delivery) */}
              {orderType === 'delivery' && (
                <>
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                      Delivery Address (Flat / House No, Street, Area) *
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                      <textarea
                        rows={2}
                        placeholder="e.g. Flat 304, Palm Heights, 12th Main, HAL 2nd Stage, Indiranagar"
                        value={address}
                        onChange={(e) => {
                          setAddress(e.target.value);
                          if (errors.address)
                            setErrors((prev) => ({ ...prev, address: null }));
                        }}
                        className={`w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl border ${
                          errors.address
                            ? 'border-rose-500 bg-rose-50/50'
                            : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60'
                        } text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500`}
                      />
                    </div>
                    {errors.address && (
                      <p className="text-[11px] text-rose-500 mt-0.5">{errors.address}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                      Nearest Landmark (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Opposite Sony Center, Behind Metro Pillar 42"
                      value={landmark}
                      onChange={(e) => setLandmark(e.target.value)}
                      className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                    />
                  </div>
                </>
              )}

              {/* Delivery Timing Preference */}
              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">
                  Delivery Slot Preference
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'asap', label: '⚡ ASAP (30-40 min)' },
                    { id: 'lunch', label: '🍱 Lunch Slot' },
                    { id: 'dinner', label: '🌙 Dinner Slot' },
                  ].map((slot) => (
                    <button
                      key={slot.id}
                      type="button"
                      onClick={() => setTiming(slot.id)}
                      className={`py-2 px-2 rounded-xl text-[11px] font-bold border transition-all ${
                        timing === slot.id
                          ? 'border-brand-500 bg-brand-50 dark:bg-brand-950/60 text-brand-600 dark:text-brand-400'
                          : 'border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400'
                      }`}
                    >
                      {slot.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment Mode Selection */}
              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1.5">
                  Payment Method (Pay Safely Upon Delivery)
                </label>
                <div className="space-y-2">
                  {[
                    {
                      id: 'upi-cod',
                      title: 'UPI on Delivery (Recommended)',
                      desc: 'Rider carries dynamic QR code. Pay with GPay, PhonePe, or Paytm.',
                    },
                    {
                      id: 'cash',
                      title: 'Cash on Delivery',
                      desc: 'Pay cash to delivery rider when food arrives.',
                    },
                    {
                      id: 'whatsapp-pay',
                      title: 'Pay via Payment Link on WhatsApp',
                      desc: 'Kitchen sends an instant payment link directly in chat.',
                    },
                  ].map((m) => (
                    <label
                      key={m.id}
                      className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                        paymentMode === m.id
                          ? 'border-brand-500 bg-brand-50/40 dark:bg-brand-950/30'
                          : 'border-gray-200 dark:border-gray-800'
                      }`}
                    >
                      <input
                        type="radio"
                        name="paymentMode"
                        value={m.id}
                        checked={paymentMode === m.id}
                        onChange={() => setPaymentMode(m.id)}
                        className="mt-1 text-brand-500 focus:ring-brand-500"
                      />
                      <div>
                        <p className="text-xs font-bold text-gray-900 dark:text-white">
                          {m.title}
                        </p>
                        <p className="text-[11px] text-gray-500 dark:text-gray-400">
                          {m.desc}
                        </p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Special Delivery Instructions */}
              <div>
                <label className="block text-xs font-bold text-gray-700 dark:text-gray-300 mb-1">
                  Rider Instructions (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Leave at door, don't ring bell, call upon arrival"
                  value={deliveryNotes}
                  onChange={(e) => setDeliveryNotes(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/60 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-extrabold text-sm sm:text-base flex items-center justify-between shadow-card hover:shadow-glow transition-all active:scale-95"
                >
                  <div className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    <span>Send Order to Kitchen WhatsApp</span>
                  </div>
                  <span className="text-base font-black">₹{grandTotal}</span>
                </button>
                <p className="text-[10px] text-gray-400 dark:text-gray-500 text-center mt-2">
                  Opens WhatsApp directly with your structured order inquiry. No payment charged right now.
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
