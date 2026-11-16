import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryNav from './components/CategoryNav';
import MenuSection from './components/MenuSection';
import OffersSection from './components/OffersSection';
import WhyChooseUs from './components/WhyChooseUs';
import ReviewsSection from './components/ReviewsSection';
import DeliveryInfo from './components/DeliveryInfo';
import Footer from './components/Footer';
import CustomizationModal from './components/CustomizationModal';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import StickyMobileBar from './components/StickyMobileBar';
import Toast from './components/Toast';

function AppContent() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [customizingProduct, setCustomizingProduct] = useState(null);

  const handleSelectCategory = (categoryId) => {
    setActiveCategory(categoryId);
    // Smooth scroll down to menu section if clicked from shortcuts
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-crave-warmWhite dark:bg-crave-darker text-crave-dark dark:text-gray-100 transition-colors duration-300">
      {/* Navigation */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <CategoryNav
          activeCategory={activeCategory}
          onSelectCategory={handleSelectCategory}
        />
        <MenuSection
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          onOpenCustomization={(product) => setCustomizingProduct(product)}
        />
        <OffersSection
          onOpenCustomization={(product) => setCustomizingProduct(product)}
        />
        <WhyChooseUs />
        <ReviewsSection />
        <DeliveryInfo />
      </main>

      {/* Footer */}
      <Footer />

      {/* Overlays & Drawers */}
      {customizingProduct && (
        <CustomizationModal
          product={customizingProduct}
          onClose={() => setCustomizingProduct(null)}
        />
      )}
      <CartDrawer />
      <CheckoutModal />
      <StickyMobileBar />
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </ThemeProvider>
  );
}
