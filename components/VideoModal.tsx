"use client";

import { useState } from 'react';
import { X } from 'lucide-react';
import { PortfolioItem } from './PortfolioGrid';
import { useLanguage } from './LanguageProvider';

interface VideoModalProps {
  item: PortfolioItem;
  onClose: () => void;
}

export default function VideoModal({ item, onClose }: VideoModalProps) {
  const { language } = useLanguage();

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-6xl bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
         <div className="p-6 bg-gray-900 text-white">
          <h2 className="text-2xl font-bold mb-2">{item.title[language]}</h2>
        </div>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-12 h-12 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
        >
          <X size={24} />
        </button>

        {/* Video Player */}
        <div className="relative bg-black aspect-video">
          <video
            className="w-full h-full object-cover"
            controls
            autoPlay
            poster={item.thumbnail}
            onError={() => console.error('Native video error')}
          >
            <source src={item.src} type="video/mp4" />
            <source src={item.src} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Video Info */}
        <div className="video-details p-6 bg-gray-900 text-white">
          <button>Details</button>
        </div>
      </div>
    </div>
  );
}