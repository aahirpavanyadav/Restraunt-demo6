import React, { useState } from 'react';
import { RESTAURANT_INFO, FAQS } from '../data/restaurantInfo';
import { 
  Flame, 
  Phone, 
  MapPin, 
  Clock, 
  Mail, 
  ChevronDown, 
  ChevronUp, 
  MessageCircle, 
  ArrowUp,
  Heart
} from 'lucide-react';

export default function Footer() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-crave-dark text-gray-300 pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* FAQs Section */}
        <div className="max-w-3xl mx-auto mb-16 pb-16 border-b border-gray-800">
          <div className="text-center mb-8">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-400">
              Got Questions?
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-display text-white mt-1">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-gray-900/60 border border-gray-800 overflow-hidden"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-gray-800/40 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-white">
                    {faq.q}
                  </span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-brand-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 shrink-0" />
                  )}
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-5 sm:px-5 text-xs sm:text-sm text-gray-400 leading-relaxed border-t border-gray-800/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 flex items-center justify-center text-white shadow-glow">
                <Flame className="w-6 h-6 fill-white" />
              </div>
              <span className="font-black text-2xl tracking-tighter text-white uppercase font-display">
                CRAVE
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Modern cloud kitchen & takeaway serving gourmet double smash burgers, slow-cooked dum biryanis, artisan pizzas, and fiery rolls. Pure food indulgence, hot at your door.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}`}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-pink-600/20 text-pink-400 border border-pink-500/30 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all"
                title="Follow Instagram"
              >
                <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="w-10 h-10 rounded-xl bg-brand-500/20 text-brand-400 border border-brand-500/30 flex items-center justify-center hover:bg-brand-500 hover:text-white transition-all"
                title="Call Dispatch"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li>
                <a href="#home" className="hover:text-brand-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-brand-400 transition-colors">Full Menu</a>
              </li>
              <li>
                <a href="#offers" className="hover:text-brand-400 transition-colors">Offers & Deals</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-brand-400 transition-colors">Why CRAVE</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-brand-400 transition-colors">Reviews</a>
              </li>
              <li>
                <a href="#delivery" className="hover:text-brand-400 transition-colors">Delivery Zones</a>
              </li>
            </ul>
          </div>

          {/* Operating Hours (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-400" />
              Kitchen Hours
            </h4>
            <div className="space-y-2 text-xs text-gray-400">
              <p className="flex justify-between">
                <span>Monday – Sunday:</span>
                <span className="text-white font-bold">11:30 AM – 3:00 AM</span>
              </p>
              <p className="flex justify-between">
                <span>Lunch Window:</span>
                <span className="text-white font-medium">11:30 AM – 4:00 PM</span>
              </p>
              <p className="flex justify-between">
                <span>Dinner & Late Night:</span>
                <span className="text-white font-medium">6:30 PM – 3:00 AM</span>
              </p>
              <div className="mt-3 p-2.5 rounded-xl bg-gray-900 border border-gray-800 text-[11px] text-amber-300">
                ⚡ Late night delivery available across Indiranagar, Domlur & Koramangala!
              </div>
            </div>
          </div>

          {/* Kitchen Hub Address & Contact (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-400" />
              Kitchen Hub
            </h4>
            <div className="space-y-3 text-xs text-gray-400">
              <p className="leading-relaxed">
                {RESTAURANT_INFO.address}
              </p>
              <p className="flex items-center gap-2 text-white font-semibold">
                <Phone className="w-3.5 h-3.5 text-brand-400" />
                <a href={`tel:${RESTAURANT_INFO.phone}`} className="hover:underline">
                  {RESTAURANT_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2 text-white font-semibold">
                <Mail className="w-3.5 h-3.5 text-brand-400" />
                <a href={`mailto:${RESTAURANT_INFO.email}`} className="hover:underline">
                  {RESTAURANT_INFO.email}
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} CRAVE Cloud Kitchen & Takeaway. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Freshly Cooked to Order</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
