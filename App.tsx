
import * as React from 'react';
import { useState } from 'react';
import { Book } from './components/Book';
import { ChatWidget } from './components/ChatWidget';
import { LanguageToggle } from './components/LanguageToggle';
import { getLocalizedData } from './lib/data';

function App() {
  const [lang, setLang] = useState('en');
  const catalogData = getLocalizedData(lang);

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden relative bg-[#2A2E35]">
      {/* Background - Abstract texture */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-50 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <LanguageToggle currentLang={lang} onToggle={setLang} />

      {/* Main Content Area */}
      <main className="flex-1 flex items-center justify-center relative">
         <Book sheets={catalogData} currentLang={lang} />
      </main>

      {/* Floating Widget - Global overlay */}
      <ChatWidget currentLang={lang} />
    </div>
  );
}

export default App;
