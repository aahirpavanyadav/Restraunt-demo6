# CRAVE — Modern Cloud Kitchen & Takeaway Website

A bold, conversion-focused, mobile-first web application for **CRAVE**, a modern local cloud kitchen and takeaway food business specializing in chef-crafted gourmet smash burgers, artisan stone-baked pizzas, slow-cooked dum biryani pots, and fiery wraps.

---

## 🚀 Key Highlights & Conversion Features

1. **Brand Identity & Aesthetic**
   - **Vibrant & Food-Focused**: Warm off-white backgrounds, tomato red/fiery orange primary accents (`#FF441F`), deep charcoal tones (`#121316`), and warm amber highlights (`#FFB703`).
   - **High-Res Food Visuals**: Custom-curated photography showcasing crispy textures, melted cheeses, and steaming hot biryanis.
   - **Distinct Cloud Kitchen Personality**: Avoids generic aggregator looks; focuses on direct kitchen-to-doorstep freshness.

2. **Complete Light & Dark Themes**
   - **Light Theme**: Warm cream/neutral backgrounds, crisp dark charcoal typography, vibrant tomato red buttons.
   - **Dark Theme**: Deep charcoal/slate surfaces, warm white typography, subtle contrast-safe borders.
   - **Persistence & Synchronization**: Auto-detects OS `prefers-color-scheme`, allows manual toggle, and persists choices in `localStorage` without page flash.

3. **Ordering & Conversion Engine**
   - **Real-Time Menu Search & Filter**: Search by dish name, category, or ingredients (e.g. "truffle", "biryani", "paneer").
   - **Dietary Toggles**: Quick filter for *Pure Veg 🟢*, *Non-Veg 🔴*, and *Spicy Only 🔥*.
   - **Dish Customization Modal**: Choose single options (crust, bun, roll style), multiple add-ons (extra cheese, bacon, dips), and custom kitchen instructions (e.g. "less spicy", "pack dips separately").
   - **Interactive Quantity Steppers**: Change quantities directly from the food card once added to cart.
   - **Shopping Cart Drawer**: Slide-over cart displaying item breakdown, customizable add-ons, free delivery progress bar (Free above ₹499), packaging fee, and instant coupon code redemption.
   - **Sticky Mobile Cart Bar**: Floating mobile summary pill showing items count, total price, and one-tap checkout access.

4. **WhatsApp Order Enquiry Checkout**
   - Form fields: Customer Name, WhatsApp Phone (validated), Delivery Address, Landmark, Delivery Timing Slot (ASAP 30-40 mins, Lunch, Dinner), Payment Mode preference (UPI on Delivery, COD, WhatsApp Payment link), and Rider Notes.
   - Generates a beautifully formatted, structured WhatsApp order enquiry message.
   - Deep-links directly to kitchen WhatsApp chat (`https://wa.me/...`).
   - Clearly adheres to truthful commerce practices: displays an on-screen Order Receipt with transparent notice that the kitchen manager will confirm availability within 2 minutes before order dispatch.

5. **Local Cloud Kitchen Business Features**
   - **Daily Deals & Promo Codes**: `CRAVE100` (₹100 OFF), `FIRSTBITE` (20% OFF), `LATEFEAST` (₹75 OFF) with 1-click apply.
   - **Locality Delivery Speed Checker**: Enter any Bangalore locality (e.g., Indiranagar, Koramangala, Domlur, HSR) to check estimated delivery times.
   - **Why Choose Us**: 100% Cooked to Order, 5-Star Kitchen Hygiene, Thermal Insulated Packaging, Direct Local Dispatch.
   - **Verified Customer Reviews**: Authentic reviews with dish mentions and ratings.
   - **Collapsible FAQ Accordion & Live Kitchen Hours**: Full details on ordering, hygiene, delivery radius, and payment.

---

## 🛠️ Tech Stack

- **Framework**: React 19 (Vite)
- **Styling**: Tailwind CSS 3.4 with custom design tokens & CSS variables
- **Icons**: Lucide Icons
- **State Management**: React Context (`CartContext` + `ThemeContext`) with `localStorage` sync
- **SEO & Microdata**: Structured Schema.org `FastFoodRestaurant` JSON-LD metadata and OpenGraph tags

---

## 🏃 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) or [http://localhost:3001](http://localhost:3001) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 📁 Project Structure

```
restaurant-demo6/
├── index.html                     # HTML5 entry with SEO tags & Schema.org JSON-LD
├── package.json                   # Project config & scripts
├── tailwind.config.js             # Custom brand colors, fonts & animations
├── vite.config.js                 # Vite bundler configuration
└── src/
    ├── main.jsx                   # React root entry point
    ├── App.jsx                    # Core page orchestrator
    ├── index.css                  # Tailwind styles & veg/non-veg badges
    ├── context/
    │   ├── ThemeContext.jsx       # Dark/Light theme manager
    │   └── CartContext.jsx        # Cart state, discounts, fees & persistence
    ├── data/
    │   ├── menuData.js            # Menu categories & 24 mouth-watering dishes
    │   └── restaurantInfo.js      # Business info, delivery zones, coupons & reviews
    └── components/
        ├── Header.jsx             # Sticky navigation, logo, announcement & cart pill
        ├── Hero.jsx               # Hero headline, trust chips & locality speed checker
        ├── CategoryNav.jsx        # Horizontal category shortcuts
        ├── FoodCard.jsx           # Appetizing dish card with direct stepper
        ├── MenuSection.jsx        # Search, dietary filters, sorting & grid
        ├── CustomizationModal.jsx # Add-ons, sauce options & kitchen notes
        ├── OffersSection.jsx      # Click-to-apply coupon codes & saver combos
        ├── CartDrawer.jsx         # Slide-in cart with free delivery meter
        ├── CheckoutModal.jsx      # Address form & WhatsApp message generator
        ├── StickyMobileBar.jsx    # Floating mobile cart pill
        ├── WhyChooseUs.jsx        # Cloud kitchen hygiene & thermal packaging
        ├── ReviewsSection.jsx     # Customer testimonials & dish tags
        ├── DeliveryInfo.jsx       # Delivery zones table & contact details
        ├── Footer.jsx             # FAQ accordion, operating hours & copyright
        └── Toast.jsx              # Lightweight notification toasts
```
