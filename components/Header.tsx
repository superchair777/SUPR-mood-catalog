import * as React from 'react';

export const Header = () => {
  return (
    <header className="w-full px-8 py-6 flex justify-between items-center z-10">
         <div className="flex items-center gap-4">
             <div className="w-10 h-10 bg-white flex items-center justify-center font-sans font-black text-2xl text-slate-900">S</div>
         </div>
         <nav className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Collection 2026</a>
            <a href="#" className="hover:text-white transition-colors">Materials</a>
            <a href="#" className="text-white transition-colors border-b border-white pb-1">Catalog</a>
         </nav>
      </header>
  );
};