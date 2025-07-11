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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="flex">
        {/* Main Content */}
        <div className="flex-1 pr-20">
          <div className="max-w-7xl mx-auto p-8">
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {translations.title[language]}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
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