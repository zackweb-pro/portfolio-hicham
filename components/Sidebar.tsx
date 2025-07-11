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
    <div className="fixed right-0 top-0 h-full w-20 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-l border-gray-200/50 dark:border-gray-700/50 z-50 flex flex-col">
      {/* Logo */}
      <div className="p-4 border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
          <span className="text-white font-bold text-xl">D</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-8">
        <div className="space-y-4">
          {menuItems.map((item, index) => (
            <div key={index} className="relative group">
              <button
                className={`
                  w-full h-12 flex items-center justify-center rounded-lg mx-2 transition-all duration-300
                  ${item.active 
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg' 
                    : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-105'
                  }
                `}
              >
                <item.icon size={20} />
              </button>
              
              {/* Tooltip */}
              <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-2 py-1 rounded text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </nav>

      {/* Bottom Controls */}
      <div className="p-4 space-y-4 border-t border-gray-200/50 dark:border-gray-700/50">
        {/* Language Toggle */}
        <button
          onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
          className="w-full h-12 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105"
        >
          <div className="flex flex-col items-center">
            <Globe size={16} />
            <span className="text-xs mt-1 font-medium">{language.toUpperCase()}</span>
          </div>
        </button>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="w-full h-12 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105"
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
    </div>
  );
}