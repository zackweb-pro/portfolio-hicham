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
    if (item.type === 'video') {
      onVideoClick(item);
    }
  };

  return (
    <div
      className="group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Glowing border animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse p-1">
        <div className="w-full h-full bg-white dark:bg-gray-900 rounded-2xl"></div>
      </div>

      {/* Content */}
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
        {/* Image/Thumbnail */}
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Video Play Button */}
        {item.type === 'video' && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Play size={24} className="text-gray-900 ml-1" />
            </div>
          </div>
        )}

        {/* Title Overlay */}
        <div className={`
          absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 
          transform transition-transform duration-300 
          ${isHovered ? 'translate-y-0' : 'translate-y-full'}
        `}>
          <h3 className="text-white font-semibold text-lg mb-1">{item.title[language]}</h3>
          {item.description && (
            <p className="text-white/80 text-sm">{item.description[language]}</p>
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