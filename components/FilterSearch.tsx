"use client";

import { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

export interface FilterSearchProps {
  onSearch: (query: string) => void;
  onFilter: (categories: string[], types: string[]) => void;
  searchQuery: string;
  selectedCategories: string[];
  selectedTypes: string[];
}

const categories = [
  { id: 'branding', en: 'Branding', fr: 'Image de Marque' },
  { id: 'web-design', en: 'Web Design', fr: 'Design Web' },
  { id: 'motion', en: 'Motion Graphics', fr: 'Motion Graphics' },
  { id: 'ui-ux', en: 'UI/UX', fr: 'UI/UX' },
  { id: 'mobile', en: 'Mobile', fr: 'Mobile' },
  { id: 'corporate', en: 'Corporate', fr: 'Corporate' }
];

const types = [
  { id: 'video', en: 'Videos', fr: 'Vidéos' },
  { id: 'image', en: 'Images', fr: 'Images' },
  { id: 'gif', en: 'GIFs', fr: 'GIFs' }
];

export default function FilterSearch({
  onSearch,
  onFilter,
  searchQuery,
  selectedCategories,
  selectedTypes
}: FilterSearchProps) {
  const { language } = useLanguage();
  const [showFilters, setShowFilters] = useState(false);

  const translations = {
    search: {
      en: 'Search projects...',
      fr: 'Rechercher des projets...'
    },
    filters: {
      en: 'Filters',
      fr: 'Filtres'
    },
    categories: {
      en: 'Categories',
      fr: 'Catégories'
    },
    types: {
      en: 'Types',
      fr: 'Types'
    },
    clearAll: {
      en: 'Clear All',
      fr: 'Tout Effacer'
    },
    showingResults: {
      en: 'Showing {count} results',
      fr: 'Affichage de {count} résultats'
    }
  };

  const handleCategoryChange = (categoryId: string) => {
    const newCategories = selectedCategories.includes(categoryId)
      ? selectedCategories.filter(id => id !== categoryId)
      : [...selectedCategories, categoryId];
    onFilter(newCategories, selectedTypes);
  };

  const handleTypeChange = (typeId: string) => {
    const newTypes = selectedTypes.includes(typeId)
      ? selectedTypes.filter(id => id !== typeId)
      : [...selectedTypes, typeId];
    onFilter(selectedCategories, newTypes);
  };

  const clearAllFilters = () => {
    onFilter([], []);
    onSearch('');
  };

  const hasActiveFilters = selectedCategories.length > 0 || selectedTypes.length > 0 || searchQuery.length > 0;

  return (
    <div className="mb-8">
      {/* Search and Filter Toggle */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={20} />
          <input
            type="text"
            placeholder={translations.search[language]}
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          />
        </div>

        {/* Filter Toggle Button */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`
            flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200
            ${showFilters || hasActiveFilters
              ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg'
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700'
            }
          `}
        >
          <Filter size={20} />
          <span>{translations.filters[language]}</span>
          {hasActiveFilters && (
            <span className="bg-white/20 text-xs px-2 py-1 rounded-full">
              {selectedCategories.length + selectedTypes.length + (searchQuery ? 1 : 0)}
            </span>
          )}
        </button>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Categories */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {translations.categories[language]}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {categories.map((category) => (
                  <label
                    key={category.id}
                    className="flex items-center space-x-2 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category.id)}
                      onChange={() => handleCategoryChange(category.id)}
                      className="w-4 h-4 text-purple-500 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded focus:ring-purple-500 focus:ring-2"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-purple-500 transition-colors">
                      {category[language]}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Types */}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {translations.types[language]}
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {types.map((type) => (
                  <label
                    key={type.id}
                    className="flex items-center space-x-2 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={selectedTypes.includes(type.id)}
                      onChange={() => handleTypeChange(type.id)}
                      className="w-4 h-4 text-purple-500 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded focus:ring-purple-500 focus:ring-2"
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-purple-500 transition-colors">
                      {type[language]}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Clear All Button */}
          {hasActiveFilters && (
            <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={clearAllFilters}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors"
              >
                <X size={16} />
                <span className="text-sm font-medium">{translations.clearAll[language]}</span>
              </button>
            </div>
          )}
        </div>
      )}

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <div className="mt-4 flex flex-wrap gap-2">
          {searchQuery && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200">
              Search: "{searchQuery}"
              <button
                onClick={() => onSearch('')}
                className="ml-2 hover:text-purple-600 dark:hover:text-purple-300"
              >
                <X size={14} />
              </button>
            </span>
          )}
          {selectedCategories.map((categoryId) => {
            const category = categories.find(c => c.id === categoryId);
            return (
              <span
                key={categoryId}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
              >
                {category?.[language]}
                <button
                  onClick={() => handleCategoryChange(categoryId)}
                  className="ml-2 hover:text-blue-600 dark:hover:text-blue-300"
                >
                  <X size={14} />
                </button>
              </span>
            );
          })}
          {selectedTypes.map((typeId) => {
            const type = types.find(t => t.id === typeId);
            return (
              <span
                key={typeId}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
              >
                {type?.[language]}
                <button
                  onClick={() => handleTypeChange(typeId)}
                  className="ml-2 hover:text-green-600 dark:hover:text-green-300"
                >
                  <X size={14} />
                </button>
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}