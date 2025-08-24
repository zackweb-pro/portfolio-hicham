"use client";

import Sidebar from '@/components/Sidebar';
import PortfolioGrid from '@/components/PortfolioGrid';
import { ThemeProvider } from '@/components/ThemeProvider';
import { ModalProvider } from '@/components/ModalProvider';
import { useLanguage } from '@/components/LanguageProvider';

function PageContent() {
  const { language } = useLanguage();
  const translations = {
    title: {
      en: 'Works',
      fr: 'Œuvres'
    },
    subtitle: {
      en: 'A curated collection of design projects showcasing creativity, innovation, and attention to detail.',
      fr: 'Une collection soignée de projets de design mettant en valeur la créativité, l\'innovation et l\'attention aux détails.'
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 dark:from-black dark:via-gray-950 dark:to-slate-950 transition-colors duration-300 relative overflow-hidden ">
      {/* Bubbles Background - Like lights behind */}
      <div className="absolute inset-0 z-0">
        {/* Large bubble - top right corner */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-white/8 to-gray-300/6 dark:from-blue-400/12 dark:to-purple-400/8 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-20 w-[250px] h-[250px] bg-gradient-to-br from-gray-200/6 to-white/8 dark:from-cyan-400/10 dark:to-blue-400/12 rounded-full blur-2xl"></div>
        {/* Medium bubble - top left */}
        <div className="absolute top-20 left-20 w-[280px] h-[280px] bg-gradient-to-br from-gray-200/5 to-white/7 dark:from-indigo-400/8 dark:to-blue-400/10 rounded-full blur-2xl"></div>
        {/* Small bubble - center right */}
        <div className="absolute top-1/2 right-1/3 w-[200px] h-[200px] bg-gradient-to-br from-white/10 to-gray-100/8 dark:from-purple-400/12 dark:to-pink-400/8 rounded-full blur-xl"></div>
        {/* Medium bubble - bottom left */}
        <div className="absolute bottom-20 left-1/4 w-[220px] h-[220px] bg-gradient-to-br from-gray-300/6 to-white/5 dark:from-blue-400/10 dark:to-cyan-400/8 rounded-full blur-2xl"></div>
        {/* Small bubble - bottom right */}
        <div className="absolute bottom-40 right-20 w-[160px] h-[160px] bg-gradient-to-br from-white/12 to-gray-200/8 dark:from-teal-400/10 dark:to-blue-400/12 rounded-full blur-xl"></div>
        {/* Tiny bubble - center */}
        <div className="absolute top-1/3 left-1/2 w-[120px] h-[120px] bg-gradient-to-br from-gray-100/8 to-white/10 dark:from-violet-400/8 dark:to-indigo-400/10 rounded-full blur-lg"></div>
      </div>
      {/* Light Glassy Foreground Overlay - Very subtle */}
      <div className="absolute inset-0 z-5 bg-white/2 dark:bg-black/3 backdrop-blur-[0.2px]"></div>
      <div className="flex relative z-10">
        {/* Left Side - Title with Cyan Quarter Circle */}
        <div className="w-80 absolute flex items-start justify-start pt-5 pl-8">
          {/* Cyan Blurry Quarter Circle Background */}
          <div className="absolute top-[-40px] left-[-40px] w-60 h-60 bg-gradient-to-br from-cyan-400/90 to-cyan-600/900 dark:from-cyan-400/900 dark:to-cyan-600/90 rounded-br-full blur-xl"></div>
          
          {/* Title */}
          <div className="relative z-10">
            <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-black mb-5 mt-2">
              {/* Glow background layer */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 bg-clip-text text-transparent blur-md opacity-50"></span>
              {/* Main readable text */}
              <span className="relative bg-blue-500 dark:bg-white bg-clip-text text-transparent font-black" style={{
                textShadow: '0 0 40px rgba(59, 130, 246, 0.3), 0 0 80px rgba(147, 51, 234, 0.2)'
              }}>
                {translations.title[language].toUpperCase()}
              </span>
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 pr-20 relative z-20 pt-[60px]">
          <div className="px-4 py-2">
            <PortfolioGrid />
          </div>
        </div>
        {/* Sidebar - Now inside ModalProvider context */}
        <Sidebar />
      </div>
    </div>
  );
}

export default function WorkPage() {
  return (
    <ThemeProvider>
      <ModalProvider>
        <PageContent />
      </ModalProvider>
    </ThemeProvider>
  );
}
