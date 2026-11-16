export const RESTAURANT_INFO = {
  name: 'CRAVE',
  tagline: 'Modern Cloud Kitchen & Takeaway',
  phone: '+91 98765 43210',
  whatsappNumber: '919876543210',
  address: 'Plot 42, Food Craft Hub, 100 Feet Road, Indiranagar, Bangalore - 560038',
  email: 'orders@cravecloudkitchen.com',
  hours: '11:30 AM – 03:00 AM Daily',
  minOrder: 149,
  freeDeliveryThreshold: 499,
  deliveryFee: 40,
  packagingFee: 20,
  deliveryTimeEstimate: '30-40 mins',
  instagram: '@cravecloudkitchen',
  googleMapsUrl: 'https://maps.google.com/?q=Indiranagar+Bangalore',
};

export const PROMO_CODES = [
  {
    code: 'CRAVE100',
    title: 'Flat ₹100 OFF',
    description: 'Valid on food orders above ₹499. One use per customer.',
    discountType: 'flat',
    discountValue: 100,
    minOrder: 499,
    tag: 'MOST POPULAR'
  },
  {
    code: 'FIRSTBITE',
    title: '20% OFF (Up to ₹120)',
    description: 'New to CRAVE? Enjoy 20% off your entire meal cart.',
    discountType: 'percentage',
    discountValue: 20,
    maxDiscount: 120,
    minOrder: 299,
    tag: 'NEW CUSTOMER'
  },
  {
    code: 'LATEFEAST',
    title: 'Flat ₹75 OFF',
    description: 'Late night cravings? Get ₹75 off on orders above ₹399.',
    discountType: 'flat',
    discountValue: 75,
    minOrder: 399,
    tag: 'MIDNIGHT CRAVE'
  }
];

export const DELIVERY_AREAS = [
  { area: 'Indiranagar (100ft & 12th Main)', time: '25-30 mins', distance: '1.8 km', available: true },
  { area: 'Koramangala (Blocks 1-6)', time: '30-35 mins', distance: '4.2 km', available: true },
  { area: 'Domlur & EGL Tech Park', time: '25-30 mins', distance: '2.5 km', available: true },
  { area: 'HSR Layout (Sectors 1-7)', time: '35-40 mins', distance: '6.5 km', available: true },
  { area: 'HAL & Old Airport Road', time: '25-30 mins', distance: '3.0 km', available: true },
  { area: 'MG Road, Richmond Town & CBD', time: '30-35 mins', distance: '5.0 km', available: true },
  { area: 'Ulsoor & Cambridge Layout', time: '25-30 mins', distance: '3.2 km', available: true },
  { area: 'Whitefield (Main Road)', time: '45-55 mins', distance: '11.0 km', available: false, note: 'Coming soon to second kitchen' },
];

export const WHY_CHOOSE_US = [
  {
    icon: '🍳',
    title: '100% Cooked to Order',
    description: 'No pre-cooked, reheating shortcuts. Every patty is smashed fresh, every biryani pot is unsealed hot upon your order.'
  },
  {
    icon: '🧼',
    title: '5-Star Hygiene Audited',
    description: 'Commercial stainless steel kitchen with hourly sanitization cycles, hairnets, contactless packing, and daily temperature checks.'
  },
  {
    icon: '📦',
    title: 'Thermal Shield Packaging',
    description: 'Food grade, eco-friendly insulated packaging engineered to lock in heat and crispiness for over 45 minutes.'
  },
  {
    icon: '🛵',
    title: 'Direct Local Dispatch',
    description: 'No middleman delays. Orders are handed directly to our local riders as soon as the kitchen bell dings.'
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: 'Rohit Shenoy',
    role: 'Tech Lead & Foodie',
    rating: 5,
    date: 'Yesterday',
    text: 'Hands down the juiciest smash burger in Bangalore! The Beast burger arrived piping hot at 1:30 AM with the fries still crunchy. CRAVE is on speed dial now.',
    ordered: 'The Beast Double Smash Burger, Peri-Peri Fries',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Ananya Deshmukh',
    role: 'Product Designer',
    rating: 5,
    date: '2 days ago',
    text: 'Ordered the Hyderabadi Dum Chicken Biryani Pot for a dinner party. The aroma when opening the seal was unreal. Real saffron and juicy chicken. Ordering on WhatsApp was super smooth.',
    ordered: 'Hyderabadi Dum Chicken Biryani Pot (x3)',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Karan Mehra',
    role: 'Startup Founder',
    rating: 5,
    date: '4 days ago',
    text: 'Nashville Hot Chicken burger actually has the real hot cayenne punch! Most places water it down, but CRAVE nailed the heat and crunch. 10/10.',
    ordered: 'Nashville Hot Crunchy Chicken Burger, Belgian Shake',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 4,
    name: 'Pooja Varman',
    role: 'Resident, Indiranagar',
    rating: 5,
    date: '1 week ago',
    text: 'Love that they show exact veg/non-veg tags and allow easy add-ons. The Woodfire Pepperoni pizza had an authentic sourdough crust with hot honey. Super impressed!',
    ordered: 'Woodfire Pepperoni Explosion Pizza',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop'
  }
];

export const FAQS = [
  {
    q: 'How do I place an order?',
    a: 'Browse our menu, select your dishes and any custom add-ons, add them to your cart, click checkout, and send your structured order enquiry directly to our kitchen WhatsApp. Our kitchen manager will confirm your order in under 2 minutes!'
  },
  {
    q: 'What are the delivery charges?',
    a: 'Delivery is 100% FREE on all orders of ₹499 and above. For orders under ₹499, a flat delivery fee of ₹40 applies.'
  },
  {
    q: 'How does payment work?',
    a: 'We accept Cash on Delivery (COD) and UPI on Delivery (Google Pay, PhonePe, Paytm QR). We do not charge your card online in advance — you pay safely when our rider arrives.'
  },
  {
    q: 'Can I pick up my food directly from your cloud kitchen?',
    a: 'Yes! Select "Self Pickup" during checkout. We will keep your order packed in an insulated thermal pouch ready at our Indiranagar kitchen pickup counter.'
  },
  {
    q: 'What if I have dietary preferences or food allergies?',
    a: 'All our dishes clearly display Green (100% Pure Veg) or Red (Non-Veg) indicators. You can also specify special preparation notes (e.g. less spice, no garlic, extra napkins) right during customization or checkout.'
  }
];
