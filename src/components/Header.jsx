import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import { 
  Flame, 
  ShoppingBag, 
  Sun, 
  Moon, 
  Menu as MenuIcon, 
  X, 
  Clock, 
  PhoneCall, 
  Percent, 
  MapPin,
  Sparkles
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantInfo';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { totalItemCount, itemsSubtotal, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'Offers', href: '#offers' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Delivery', href: '#delivery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-brand-600 via-brand-500 to-amber-500 text-white text-xs sm:text-sm py-1.5 px-4 font-medium transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="font-semibold tracking-wide">KITCHEN OPEN</span>
            <span className="hidden sm:inline text-white/70">•</span>
            <span className="hidden sm:inline">Delivering hot till 3:00 AM</span>
            <span className="text-white/70">•</span>
            <span className="truncate">Use code <strong className="underline underline-offset-2">CRAVE100</strong> for ₹100 OFF</span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-xs shrink-0">
            <span className="flex items-center gap-1 opacity-90">
              <Clock className="w-3.5 h-3.5" /> 30-40 mins delivery
            </span>
            <a 
              href={`tel:${RESTAURANT_INFO.phone}`} 
              className="flex items-center gap-1 hover:underline opacity-90"
            >
              <PhoneCall className="w-3.5 h-3.5" /> {RESTAURANT_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-crave-warmWhite/90 dark:bg-crave-darker/90 backdrop-blur-md shadow-md border-b border-crave-borderLight dark:border-crave-borderDark py-2.5'
            : 'bg-crave-warmWhite dark:bg-crave-darker border-b border-crave-borderLight/60 dark:border-crave-borderDark/60 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white shadow-glow group-hover:scale-105 transition-transform duration-200">
              <Flame className="w-6 h-6 fill-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-2xl tracking-tighter text-crave-dark dark:text-white uppercase font-display">
                  CRAVE
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-brand-500/10 text-brand-600 dark:bg-brand-500/20 dark:text-brand-400 border border-brand-500/20">
                  Kitchen
                </span>
              </div>
              <p className="text-[10px] text-gray-500 dark:text-gray-400 font-medium tracking-wide -mt-0.5">
                Cloud Kitchen & Takeaway
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-brand-500 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className="p-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-500/30 transition-all focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400 animate-spin-slow" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600" />
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Open Shopping Cart"
              className="relative flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-sm shadow-md hover:shadow-glow transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 dark:focus:ring-offset-crave-darker"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5" />
                {totalItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-amber-400 text-crave-dark text-[11px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center border-2 border-brand-500 animate-bounce">
                    {totalItemCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline">
                {totalItemCount > 0 ? `₹${itemsSubtotal}` : 'Cart'}
              </span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2.5 rounded-xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 text-gray-700 dark:text-gray-300 hover:text-brand-600 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative ml-auto w-full max-w-xs bg-crave-warmWhite dark:bg-crave-surface h-full shadow-2xl p-6 flex flex-col justify-between z-10 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center text-white">
                    <Flame className="w-5 h-5 fill-white" />
                  </div>
                  <span className="font-extrabold text-xl font-display text-gray-900 dark:text-white">
                    CRAVE
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="mt-6 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl text-base font-semibold text-gray-800 dark:text-gray-200 hover:bg-brand-50 dark:hover:bg-brand-950/40 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                  >
                    <span>{link.name}</span>
                    <span className="text-gray-400 text-xs">→</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Footer Area */}
            <div className="pt-6 border-t border-gray-200 dark:border-gray-800 flex flex-col gap-3">
              <div className="bg-amber-500/10 dark:bg-amber-500/20 border border-amber-500/30 rounded-xl p-3">
                <p className="text-xs font-bold text-amber-700 dark:text-amber-300 flex items-center gap-1">
                  <Sparkles className="w-4 h-4 shrink-0" />
                  Free Delivery on orders above ₹499
                </p>
              </div>

              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=Hi%20CRAVE!%20I%20have%20an%20enquiry%20regarding%20today%27s%20menu.`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm text-center flex items-center justify-center gap-2 shadow"
              >
                💬 Chat with Kitchen Manager
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
