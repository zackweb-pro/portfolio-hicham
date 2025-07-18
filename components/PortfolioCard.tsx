"use client";

import { useState } from 'react';
import { Play, Video, Image as ImageIcon, Zap } from 'lucide-react';
import { PortfolioItem } from './PortfolioGrid';
import { useLanguage } from './LanguageProvider';

interface PortfolioCardProps {
  item: PortfolioItem;
  onVideoClick: (item: PortfolioItem) => void;
}

export default function PortfolioCard({ item, onVideoClick }: PortfolioCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { language } = useLanguage();

  const handleClick = () => {
    // All media types now open in the modal
    onVideoClick(item);
  };

  return (
    <div
      className="portfolio-card group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >

      {/* Content */}
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
        {/* Image/Thumbnail */}
        <div className="aspect-video overflow-hidden">
          <img
            src={item.thumbnail}
            alt={typeof item.title === 'string' ? item.title : item.title[language]}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Video Play Button */}
        {item.type === 'video' && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm dark:bg-gray-800/90">
              <Play size={20} className="text-blue-900 dark:text-blue-400" />
            </div>
          </div>
        )}

        {/* Title Overlay */}
        <div className={`
          absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 
          transform transition-transform duration-300 
          ${isHovered ? 'translate-y-0' : 'translate-y-full'}
        `}>
          <h3 className="text-white font-semibold text-lg mb-1">
            {typeof item.title === 'string' ? item.title : item.title[language]}
          </h3>
          {item.description && (
            <p className="text-white/80 text-sm">
              {typeof item.description === 'string' ? item.description : item.description[language]}
            </p>
          )}
        </div>

        {/* Type indicator */}
        <div className="absolute top-4 right-4">
          <div className="w-8 h-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
            {item.type === 'video' && <Video size={16} className="text-red-500" />}
            {item.type === 'gif' && <Zap size={16} className="text-green-500" />}
            {item.type === 'image' && <ImageIcon size={16} className="text-blue-500" />}
          </div>
        </div>
      </div>
    </div>
  );
}