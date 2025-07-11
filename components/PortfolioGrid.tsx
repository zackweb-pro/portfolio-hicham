"use client";

import { useState, useMemo } from 'react';
import PortfolioCard from './PortfolioCard';
import VideoModal from './VideoModal';
import FilterSearch from './FilterSearch';
import { useLanguage } from './LanguageProvider';

export interface PortfolioItem {
  id: string;
  title: {
    en: string;
    fr: string;
  };
  type: 'video' | 'image' | 'gif';
  thumbnail: string;
  src: string;
  description?: {
    en: string;
    fr: string;
  };
  category: string;
  tags: string[];
}

const portfolioData: PortfolioItem[] = [
  {
    id: '1',
    title: { en: 'Brand Identity Design', fr: 'Design d\'Identité de Marque' },
    type: 'image',
    thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    src: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: { 
      en: 'Modern brand identity design with clean typography', 
      fr: 'Design d\'identité de marque moderne avec une typographie épurée' 
    },
    category: 'branding',
    tags: ['logo', 'identity', 'typography', 'modern']
  },
  {
    id: '2',
    title: { en: 'Motion Graphics Reel', fr: 'Bobine de Motion Graphics' },
    type: 'video',
    thumbnail: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    description: { 
      en: 'Dynamic motion graphics showcase', 
      fr: 'Vitrine de motion graphics dynamique' 
    },
    category: 'motion',
    tags: ['animation', 'motion', 'video', 'dynamic']
  },
  {
    id: '3',
    title: { en: 'UI Animation', fr: 'Animation UI' },
    type: 'gif',
    thumbnail: 'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&w=800',
    src: 'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: { 
      en: 'Interactive UI animation concept', 
      fr: 'Concept d\'animation UI interactive' 
    },
    category: 'ui-ux',
    tags: ['ui', 'animation', 'interactive', 'concept']
  },
  {
    id: '4',
    title: { en: 'Web Design Layout', fr: 'Mise en Page Web' },
    type: 'image',
    thumbnail: 'https://images.pexels.com/photos/326424/pexels-photo-326424.jpeg?auto=compress&cs=tinysrgb&w=800',
    src: 'https://images.pexels.com/photos/326424/pexels-photo-326424.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: { 
      en: 'Responsive web design layout', 
      fr: 'Mise en page web responsive' 
    },
    category: 'web-design',
    tags: ['web', 'responsive', 'layout', 'design']
  },
  {
    id: '5',
    title: { en: 'Product Showcase', fr: 'Vitrine Produit' },
    type: 'video',
    thumbnail: 'https://images.pexels.com/photos/3862612/pexels-photo-3862612.jpeg?auto=compress&cs=tinysrgb&w=800',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    description: { 
      en: '3D product visualization', 
      fr: 'Visualisation de produit 3D' 
    },
    category: 'corporate',
    tags: ['product', '3d', 'visualization', 'showcase']
  },
  {
    id: '6',
    title: { en: 'Logo Animation', fr: 'Animation de Logo' },
    type: 'gif',
    thumbnail: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800',
    src: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: { 
      en: 'Animated logo reveal', 
      fr: 'Révélation de logo animé' 
    },
    category: 'branding',
    tags: ['logo', 'animation', 'reveal', 'branding']
  },
  {
    id: '7',
    title: { en: 'Mobile App Design', fr: 'Design d\'Application Mobile' },
    type: 'image',
    thumbnail: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
    src: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: { 
      en: 'Modern mobile application interface', 
      fr: 'Interface d\'application mobile moderne' 
    },
    category: 'mobile',
    tags: ['mobile', 'app', 'interface', 'modern']
  },
  {
    id: '8',
    title: { en: 'Corporate Video', fr: 'Vidéo Corporate' },
    type: 'video',
    thumbnail: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=800',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    description: { 
      en: 'Professional corporate presentation', 
      fr: 'Présentation corporate professionnelle' 
    },
    category: 'corporate',
    tags: ['corporate', 'video', 'professional', 'presentation']
  },
  {
    id: '9',
    title: { en: 'Interactive Prototype', fr: 'Prototype Interactif' },
    type: 'gif',
    thumbnail: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
    src: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: { 
      en: 'Interactive user experience prototype', 
      fr: 'Prototype d\'expérience utilisateur interactive' 
    },
    category: 'ui-ux',
    tags: ['prototype', 'interactive', 'ux', 'user experience']
  },
  {
    id: '10',
    title: { en: 'E-commerce Design', fr: 'Design E-commerce' },
    type: 'image',
    thumbnail: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    src: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: { 
      en: 'Modern e-commerce website design', 
      fr: 'Design de site e-commerce moderne' 
    },
    category: 'web-design',
    tags: ['ecommerce', 'website', 'shopping', 'modern']
  },
  {
    id: '11',
    title: { en: 'Social Media Campaign', fr: 'Campagne Réseaux Sociaux' },
    type: 'video',
    thumbnail: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    description: { 
      en: 'Creative social media campaign video', 
      fr: 'Vidéo créative pour campagne réseaux sociaux' 
    },
    category: 'motion',
    tags: ['social media', 'campaign', 'creative', 'marketing']
  },
  {
    id: '12',
    title: { en: 'App Icon Design', fr: 'Design d\'Icône d\'App' },
    type: 'image',
    thumbnail: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
    src: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1200',
    description: { 
      en: 'Modern mobile app icon collection', 
      fr: 'Collection d\'icônes d\'applications mobiles modernes' 
    },
    category: 'mobile',
    tags: ['icons', 'mobile', 'app', 'collection']
  }
];

const ITEMS_PER_PAGE = 6;

export default function PortfolioGrid() {
  const [selectedVideo, setSelectedVideo] = useState<PortfolioItem | null>(null);
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const { language } = useLanguage();

  // Filter and search logic
  const filteredData = useMemo(() => {
    return portfolioData.filter(item => {
      // Search filter
      const matchesSearch = searchQuery === '' || 
        item.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description?.[language]?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      // Category filter
      const matchesCategory = selectedCategories.length === 0 || 
        selectedCategories.includes(item.category);

      // Type filter
      const matchesType = selectedTypes.length === 0 || 
        selectedTypes.includes(item.type);

      return matchesSearch && matchesCategory && matchesType;
    });
  }, [searchQuery, selectedCategories, selectedTypes, language]);

  const handleVideoClick = (item: PortfolioItem) => {
    if (item.type === 'video') {
      setSelectedVideo(item);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setVisibleItems(ITEMS_PER_PAGE); // Reset visible items when searching
  };

  const handleFilter = (categories: string[], types: string[]) => {
    setSelectedCategories(categories);
    setSelectedTypes(types);
    setVisibleItems(ITEMS_PER_PAGE); // Reset visible items when filtering
  };

  const loadMore = () => {
    setVisibleItems(prev => Math.min(prev + ITEMS_PER_PAGE, filteredData.length));
  };

  const displayedItems = filteredData.slice(0, visibleItems);
  const hasMore = visibleItems < filteredData.length;

  const translations = {
    loadMore: {
      en: 'Load More',
      fr: 'Charger Plus'
    },
    showingResults: {
      en: 'Showing {current} of {total} projects',
      fr: 'Affichage de {current} sur {total} projets'
    },
    noResults: {
      en: 'No projects found matching your criteria',
      fr: 'Aucun projet trouvé correspondant à vos critères'
    },
    tryDifferent: {
      en: 'Try adjusting your search or filters',
      fr: 'Essayez d\'ajuster votre recherche ou vos filtres'
    }
  };

  return (
    <>
      {/* Filter and Search */}
      <FilterSearch
        onSearch={handleSearch}
        onFilter={handleFilter}
        searchQuery={searchQuery}
        selectedCategories={selectedCategories}
        selectedTypes={selectedTypes}
      />

      {/* Results */}
      {filteredData.length === 0 ? (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {translations.noResults[language]}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {translations.tryDifferent[language]}
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedItems.map((item) => (
              <PortfolioCard
                key={item.id}
                item={item}
                onVideoClick={handleVideoClick}
              />
            ))}
          </div>

          {/* Load More Section */}
          <div className="mt-16 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {translations.showingResults[language]
                .replace('{current}', Math.min(visibleItems, filteredData.length).toString())
                .replace('{total}', filteredData.length.toString())}
            </p>
            
            {hasMore && (
              <button
                onClick={loadMore}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {/* Glowing background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Button content */}
                <span className="relative z-10 flex items-center space-x-2">
                  <span>{translations.loadMore[language]}</span>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </span>
                
                {/* Ripple effect */}
                <div className="absolute inset-0 bg-white/20 scale-0 group-active:scale-100 rounded-full transition-transform duration-200"></div>
              </button>
            )}
          </div>
        </>
      )}

      {selectedVideo && (
        <VideoModal
          item={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </>
  );
}