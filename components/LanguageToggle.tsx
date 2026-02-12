
import * as React from 'react';

interface LanguageToggleProps {
  currentLang: string;
  onToggle: (lang: string) => void;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ currentLang, onToggle }) => {
  return (
    <div className="fixed top-6 right-6 z-[400] flex bg-[#0F1115]/80 backdrop-blur-md p-1 rounded-full border border-white/10 shadow-2xl">
      <button
        onClick={() => onToggle('en')}
        className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest transition-all duration-300 ${
          currentLang === 'en' ? 'bg-supr-gold text-white shadow-lg' : 'text-slate-500 hover:text-white'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => onToggle('th')}
        className={`px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest transition-all duration-300 ${
          currentLang === 'th' ? 'bg-supr-gold text-white shadow-lg' : 'text-slate-500 hover:text-white'
        }`}
      >
        TH
      </button>
    </div>
  );
};
