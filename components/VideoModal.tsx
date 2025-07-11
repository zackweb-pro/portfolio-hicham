"use client";

import { useState, useRef } from 'react';
import { X, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { PortfolioItem } from './PortfolioGrid';
import { useLanguage } from './LanguageProvider';

interface VideoModalProps {
  item: PortfolioItem;
  onClose: () => void;
}

export default function VideoModal({ item, onClose }: VideoModalProps) {
  const { language } = useLanguage();
  const [showDetails, setShowDetails] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Mock gallery images - in real app, these would come from item.gallery
  const galleryImages = [
    { src: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800', aspect: '16:9' },
    { src: 'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&w=800', aspect: '4:3' },
    { src: 'https://images.pexels.com/photos/326424/pexels-photo-326424.jpeg?auto=compress&cs=tinysrgb&w=800', aspect: '1:1' },
    { src: 'https://images.pexels.com/photos/3862612/pexels-photo-3862612.jpeg?auto=compress&cs=tinysrgb&w=800', aspect: '3:4' },
    { src: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800', aspect: '16:9' },
  ];

  const handleShowDetails = () => {
    // Pause video when showing details
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setShowDetails(true);
  };

  const handleHideDetails = () => {
    setShowDetails(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const getAspectClass = (aspect: string) => {
    switch (aspect) {
      case '16:9': return 'aspect-video';
      case '4:3': return 'aspect-[4/3]';
      case '3:4': return 'aspect-[3/4]';
      case '1:1': return 'aspect-square';
      default: return 'aspect-video';
    }
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-6xl bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-12 h-12 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
        >
          <X size={24} />
        </button>

        {/* Video Player */}
        <div className="relative bg-black aspect-video">
          <video
            ref={videoRef}
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
        <div className="p-6 bg-gray-900 text-white">
          <h2 className="text-2xl font-bold mb-2">{item.title[language]}</h2>
          {item.description && (
            <p className="text-gray-300 mb-4">{item.description[language]}</p>
          )}
          <button
            onClick={handleShowDetails}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
          >
            Details
          </button>
        </div>

        {/* Sliding Details Section */}
        <div className={`
          absolute inset-0 bg-gray-900 transform transition-transform duration-500 ease-in-out z-10
          ${showDetails ? 'translate-y-0' : 'translate-y-full'}
        `}>
          {/* Details Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <button
              onClick={handleHideDetails}
              className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back to Video</span>
            </button>
            <h3 className="text-xl font-bold text-white">{item.title[language]} - Details</h3>
          </div>

          {/* Scrollable Content */}
          <div className="h-full overflow-y-auto pb-20">
            <div className="p-6">
              {/* Detailed Description */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">Project Description</h4>
                <div className="prose prose-invert max-w-none">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    This is a detailed description of the video project. Here you can include comprehensive information about the creative process, technical specifications, tools used, and the story behind the creation.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    The project involved multiple stages of development including concept design, storyboarding, production, and post-production. Each phase required careful attention to detail and collaboration with various team members.
                  </p>
                  <div className="grid grid-cols-2 gap-4 my-6">
                    <div>
                      <h5 className="text-white font-medium mb-2">Technical Details</h5>
                      <ul className="text-gray-400 text-sm space-y-1">
                        <li>Duration: 2:30 minutes</li>
                        <li>Resolution: 1920x1080</li>
                        <li>Frame Rate: 30fps</li>
                        <li>Format: MP4</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-white font-medium mb-2">Tools Used</h5>
                      <ul className="text-gray-400 text-sm space-y-1">
                        <li>Adobe After Effects</li>
                        <li>Adobe Premiere Pro</li>
                        <li>Cinema 4D</li>
                        <li>Adobe Photoshop</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Gallery */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-6">Project Steps Gallery</h4>
                
                {/* Pinterest-style Grid Gallery */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-max">
                  {galleryImages.map((image, index) => (
                    <div
                      key={index}
                      className="relative rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl group cursor-pointer"
                    >
                      <div className={`${getAspectClass(image.aspect)} bg-gray-800`}>
                        <img
                          src={image.src}
                          alt={`Gallery image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-white font-semibold text-lg">
                            Step {index + 1}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}