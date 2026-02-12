
import * as React from 'react';
import { useState } from 'react';
import { MessageSquare, X, Facebook, Instagram, MessageCircle, Music2 } from 'lucide-react';

const SOCIAL_LINKS = [
  { name: 'Facebook', icon: <Facebook size={18} />, color: 'hover:bg-[#1877F2]' },
  { name: 'Instagram', icon: <Instagram size={18} />, color: 'hover:bg-[#E4405F]' },
  { name: 'Tiktok', icon: <Music2 size={18} />, color: 'hover:bg-[#000000]' },
  { name: 'Line', icon: <MessageCircle size={18} />, color: 'hover:bg-[#06C755]' },
];

export const ChatWidget = ({ currentLang = 'en' }: { currentLang?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-28 right-5 md:bottom-8 md:right-8 z-[300] flex flex-col items-end font-sans mb-safe">
      <div className="flex flex-col items-end gap-3 mb-4 pointer-events-none">
        {SOCIAL_LINKS.map((social, index) => (
          <button
            key={social.name}
            onPointerDown={(e) => e.stopPropagation()}
            onClick={() => {
              console.log(`Navigating to ${social.name}`);
            }}
            className={`
              flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/90 backdrop-blur-md 
              text-white border border-white/10 shadow-xl pointer-events-auto
              transition-all duration-300 transform
              ${isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-50'}
              ${social.color} hover:border-transparent group
            `}
            style={{ 
              transitionDelay: isOpen ? `${index * 50}ms` : '0ms' 
            }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity">
              {social.name}
            </span>
            <div className="flex items-center justify-center">
              {social.icon}
            </div>
          </button>
        ))}
      </div>

      <button 
        onPointerDown={(e) => e.stopPropagation()}
        onClick={() => setIsOpen(!isOpen)}
        className={`
          group relative w-10 h-10 md:w-14 md:h-14 rounded-full shadow-2xl transition-all duration-500 flex items-center justify-center
          ${isOpen ? 'bg-supr-gold text-white rotate-90' : 'bg-[#0F1115] text-white hover:scale-110 active:scale-95'}
        `}
        aria-label="Social Menu"
      >
        {isOpen ? (
          <X className="w-5 h-5 md:w-6 md:h-6" />
        ) : (
          <div className="relative">
            <MessageSquare className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
            <div className="absolute -top-0.5 -right-0.5 w-2 h-2 md:-top-1 md:-right-1 md:w-3 md:h-3 bg-supr-gold rounded-full border-2 border-[#0F1115] animate-pulse"></div>
          </div>
        )}
      </button>
    </div>
  );
};
