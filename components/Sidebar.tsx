"use client";

import { Home, Briefcase, Mail, Sun, Moon, Globe } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '@/components/ThemeProvider';
import { useLanguage } from '@/components/LanguageProvider';
import { useModal } from '@/components/ModalProvider';

export default function Sidebar() {
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { isModalExpanded } = useModal();

  // Determine active item based on current pathname
  const getActiveItem = () => {
    if (pathname === '/home') return 'home';
    if (pathname === '/work') return 'work';
    if (pathname === '/contact') return 'contact';
    return null;
  };

  const activeItem = getActiveItem();

  // Debug logging
  // console.log('Sidebar: isModalExpanded =', isModalExpanded);

  const menuItems = [
    { icon: Home, label: language === 'en' ? 'Home' : 'Accueil', href: '/home', key: 'home' },
    { icon: Briefcase, label: language === 'en' ? 'Works' : 'Travaux', href: '/work', key: 'work' },
    { icon: Mail, label: 'Contact', href: '/contact', key: 'contact' },
  ];

  // Dynamic z-index based on modal state
  const sidebarZIndex = isModalExpanded ? 'z-[0]' : 'z-[50]';
  console.log('Sidebar: Using z-index class:', sidebarZIndex);

  return (
    <div className={`fixed right-0 top-0 h-full w-20 bg-white/95 dark:bg-black/20 backdrop-blur-lg ${sidebarZIndex} flex flex-col justify-between align-items-center`}>
      {/* Vertical glowing line on the left side */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-70 shadow-lg shadow-blue-500/50"></div>
      
      {/* Logo */}
      <div className="p-4 relative">
        <div className="w-12 h-12 bg-gradient-to-br from-blue-400/90 to-blue-600/90 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm">
          <span className="text-white font-bold text-xl drop-shadow-sm">JB</span>
        </div>
        {/* Glowing bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70 shadow-lg shadow-blue-500/50"></div>
      </div>

      {/* Navigation */}
      <nav className="py-8 m-auto">
        <div className="space-y-4">
          {menuItems.map((item, index) => (
            <div key={item.key} className="relative group">
              <Link href={item.href} legacyBehavior>
                <a
                  className={`
                    w-12 h-12 flex items-center justify-center rounded-3xl mx-2 transition-all duration-300
                    ${activeItem === item.key
                      ? 'bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-white/10 hover:scale-105'
                    }
                  `}
                >
                  <item.icon size={20} />
                </a>
              </Link>
              {/* Tooltip */}
              <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900/90 dark:bg-white/80 text-white dark:text-black px-2 py-1 rounded text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap backdrop-blur-sm">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </nav>

      {/* Bottom Controls */}
      <div className="p-4 space-y-4 relative">
        {/* Glowing top border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70 shadow-lg shadow-blue-500/50"></div>
        
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