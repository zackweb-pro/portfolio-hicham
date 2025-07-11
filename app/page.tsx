"use client";

import Sidebar from '@/components/Sidebar';
import PortfolioGrid from '@/components/PortfolioGrid';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LanguageProvider, useLanguage } from '@/components/LanguageProvider';

function PageContent() {
  const { language } = useLanguage();
  
  const translations = {
    title: {
      en: 'Creative Works',
      fr: 'Œuvres Créatives'
    },
    subtitle: {
      en: 'A curated collection of design projects showcasing creativity, innovation, and attention to detail.',
      fr: 'Une collection soignée de projets de design mettant en valeur la créativité, l\'innovation et l\'attention aux détails.'
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950 transition-colors duration-300 relative overflow-hidden">
      {/* Animated Bubbles Background */}
      <div className="absolute inset-0 z-0">
        {/* Large bubbles behind menu */}
        <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-blue-400/5 dark:from-blue-400/10 to-cyan-400/5 dark:to-cyan-400/10 rounded-full animate-pulse"></div>
        <div className="absolute top-60 right-5 w-24 h-24 bg-gradient-to-br from-teal-400/8 dark:from-teal-400/15 to-blue-400/8 dark:to-blue-400/15 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '3s'}}></div>
        <div className="absolute bottom-40 right-8 w-20 h-20 bg-gradient-to-br from-cyan-400/6 dark:from-cyan-400/12 to-blue-500/6 dark:to-blue-500/12 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Medium bubbles scattered */}
        <div className="absolute top-32 left-20 w-16 h-16 bg-gradient-to-br from-blue-300/4 dark:from-blue-300/8 to-indigo-400/4 dark:to-indigo-400/8 rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '4s'}}></div>
        <div className="absolute top-80 left-40 w-12 h-12 bg-gradient-to-br from-cyan-300/6 dark:from-cyan-300/12 to-blue-300/6 dark:to-blue-300/12 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-60 left-60 w-28 h-28 bg-gradient-to-br from-teal-400/4 dark:from-teal-400/8 to-cyan-400/4 dark:to-cyan-400/8 rounded-full animate-bounce" style={{animationDelay: '2.5s', animationDuration: '5s'}}></div>
        
        {/* Small bubbles */}
        <div className="absolute top-40 left-80 w-8 h-8 bg-gradient-to-br from-blue-200/8 dark:from-blue-200/15 to-cyan-200/8 dark:to-cyan-200/15 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute top-96 left-32 w-6 h-6 bg-gradient-to-br from-indigo-300/5 dark:from-indigo-300/10 to-blue-300/5 dark:to-blue-300/10 rounded-full animate-bounce" style={{animationDelay: '1.8s', animationDuration: '3.5s'}}></div>
        <div className="absolute bottom-32 left-96 w-10 h-10 bg-gradient-to-br from-cyan-200/6 dark:from-cyan-200/12 to-teal-200/6 dark:to-teal-200/12 rounded-full animate-pulse" style={{animationDelay: '2.8s'}}></div>
        
        {/* Additional scattered bubbles */}
        <div className="absolute top-56 right-40 w-14 h-14 bg-gradient-to-br from-blue-400/4 dark:from-blue-400/8 to-cyan-500/4 dark:to-cyan-500/8 rounded-full animate-bounce" style={{animationDelay: '0.3s', animationDuration: '4.5s'}}></div>
        <div className="absolute bottom-80 right-60 w-18 h-18 bg-gradient-to-br from-teal-300/5 dark:from-teal-300/10 to-blue-400/5 dark:to-blue-400/10 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-72 left-10 w-22 h-22 bg-gradient-to-br from-indigo-400/4 dark:from-indigo-400/8 to-cyan-400/4 dark:to-cyan-400/8 rounded-full animate-bounce" style={{animationDelay: '1.2s', animationDuration: '6s'}}></div>
      </div>
      
      <div className="flex relative z-10">
        {/* Main Content */}
        <div className="flex-1 pr-20 relative z-20">
          <div className="max-w-7xl mx-auto p-8">
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 drop-shadow-lg">
                {translations.title[language]}
              </h1>
              <p className="text-xl text-gray-700 dark:text-blue-100 max-w-2xl drop-shadow-md">
                {translations.subtitle[language]}
              </p>
            </div>
            <PortfolioGrid />
          </div>
        </div>

        {/* Sidebar */}
        <Sidebar />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PageContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}