"use client";

import { useState, useRef } from 'react';
import { X, ArrowLeft } from 'lucide-react';
import { PortfolioItem } from './PortfolioGrid';
import { useLanguage } from './LanguageProvider';
import Gallery from './Gallery';

interface VideoModalProps {
  item: PortfolioItem;
  onClose: () => void;
}

export default function VideoModal({ item, onClose }: VideoModalProps) {
  const { language } = useLanguage();
  const [showDetails, setShowDetails] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Mock gallery images for video steps - in real app, these would come from item.gallery
  const galleryImages = [
    {
      src: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Step 1: Initial concept design and storyboard',
      aspectRatio: 16/9
    },
    {
      src: 'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Step 2: Character modeling and rigging',
      aspectRatio: 4/3
    },
    {
      src: 'https://images.pexels.com/photos/326424/pexels-photo-326424.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Step 3: Environment setup and lighting',
      aspectRatio: 1
    },
    {
      src: 'https://images.pexels.com/photos/3862612/pexels-photo-3862612.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Step 4: Animation keyframes and timing',
      aspectRatio: 3/4
    },
    {
      src: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Step 5: Rendering and post-production effects',
      aspectRatio: 16/9
    },
    {
      src: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Step 6: Color grading and final touches',
      aspectRatio: 2/1
    },
    {
      src: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Step 7: Sound design and audio mixing',
      aspectRatio: 5/8
    },
    {
      src: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Step 8: Final export and optimization',
      aspectRatio: 8/5
    }
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

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative w-full max-w-6xl bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
        {/* Top Section - Title and Description */}
        <div className="p-6 bg-gray-900 text-white relative z-20">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">{item.title[language]}</h2>
              {item.description && (
                <p className="text-gray-300 mb-4">{item.description[language]}</p>
              )}
            </div>
            
            {/* Back Button - Only visible when details are showing */}
            {showDetails && (
              <button
                onClick={handleHideDetails}
                className="absolute top-4 right-20 z-30 w-12 h-12 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white hover:text-blue-400 transition-colors"
              >
                <ArrowLeft size={24} />
                
              </button>
            )}
          </div>
          
          {/* Glowing line separator - Only visible when details are showing */}
          {showDetails && (
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70 shadow-lg shadow-blue-500/50 "></div>
          )}
        </div>
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-12 h-12 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm hover:text-red-800"
        >
          <X size={24} />
        </button>

        {/* Video Player Container */}
        <div className="relative">
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

          {/* Sliding Details Section - Only covers video area */}
          <div className={`
            absolute inset-0 bg-gray-900 transform transition-transform duration-500 ease-in-out z-10
            ${showDetails ? 'translate-y-0' : 'translate-y-full'}
          `}>
            {/* Scrollable Content - No header */}
            <div className="h-full overflow-y-auto">
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

                {/* Project Steps Gallery using Gallery Component */}
                <div className="mb-8">
                  <div className="rounded-xl p-6 overflow-hidden">
                    <div className="w-full">
                      <Gallery 
                        images={galleryImages}
                        columns={3}
                        gap={16}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Details Button */}
        {!showDetails && (
          <div className="p-6 bg-gray-900 text-white relative z-20">
            <button
              onClick={handleShowDetails}
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
            >
              Details
            </button>
          </div>
        )}
      </div>
    </div>
  );
}