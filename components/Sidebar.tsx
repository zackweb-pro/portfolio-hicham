"use client";

import { Home, Briefcase, Mail, Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { useLanguage } from '@/components/LanguageProvider';

export default function Sidebar() {
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { icon: Home, label: language === 'en' ? 'Home' : 'Accueil', active: false },
    { icon: Briefcase, label: language === 'en' ? 'Works' : 'Travaux', active: true },
    { icon: Mail, label: 'Contact', active: false },
  ];

  return (
    <div className="fixed right-0 top-0 h-full w-20 bg-white/95 dark:bg-black/20 backdrop-blur-lg border-l-0 dark:border-l dark:border-white/10 z-50 flex flex-col justify-between align-items-center">
      {/* Logo */}
      <div className="p-4 border-b-0 dark:border-b dark:border-white/10">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-400/90 to-blue-600/90 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm border-0 dark:border dark:border-white/10">
          <span className="text-white font-bold text-xl drop-shadow-sm">JB</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="py-8 m-auto">
        <div className="space-y-4">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              <button
                className={`
                  w-12 h-12 flex items-center justify-center rounded-3xl mx-2 transition-all duration-300
                  ${item.active 
                    ? 'bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg' 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-white/10 hover:scale-105'
                  }
                `}
              >
                <item.icon size={20} />
              </button>
              
              {/* Tooltip */}
              <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900/90 dark:bg-white/80 text-white dark:text-black px-2 py-1 rounded text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap backdrop-blur-sm">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </nav>

      {/* Bottom Controls */}
      <div className="p-4 space-y-4 border-t-0 dark:border-t dark:border-white/10">
        {/* Language Toggle */}
        <button
          onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
          className="w-full h-12 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105"
        >
          <div className="flex flex-col items-center">
            <Globe size={16} />
            <span className="text-xs mt-1 font-medium">{language.toUpperCase()}</span>
          </div>
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="w-full h-12 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-white/10 transition-all duration-300 hover:scale-105"
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
    </div>
  );
}