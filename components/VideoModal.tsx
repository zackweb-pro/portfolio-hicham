"use client";

import { useState, useRef, useEffect } from 'react';
import { X, ArrowLeft, Expand } from 'lucide-react';
import { PortfolioItem } from './PortfolioGrid';
import { useLanguage } from './LanguageProvider';
import { useModal } from './ModalProvider';
import Gallery from './Gallery';

interface VideoModalProps {
  item: PortfolioItem;
  onClose: () => void;
}

export default function VideoModal({ item, onClose }: VideoModalProps) {
  const { language } = useLanguage();
  const { setIsModalExpanded } = useModal();
  const [showDetails, setShowDetails] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Debug: Log the item data
  console.log('VideoModal item:', item);

  // Set modal as expanded when component mounts
  useEffect(() => {
    console.log('VideoModal: Component mounted - Setting modal as expanded');
    setIsModalExpanded(true);
    
    return () => {
      console.log('VideoModal: Component unmounting - Setting modal as not expanded');
      setIsModalExpanded(false);
    };
  }, [setIsModalExpanded]);

  // Update expanded state when image is expanded/collapsed
  useEffect(() => {
    if (isExpanded) {
      console.log('VideoModal: Image expanded - Setting modal as expanded');
      setIsModalExpanded(true);
    } else {
      console.log('VideoModal: Image collapsed - Setting modal as expanded (normal modal state)');
      setIsModalExpanded(true); // Keep modal expanded even when image is not expanded
    }
  }, [isExpanded, setIsModalExpanded]);

  // Determine media type from file extension if type is not available
  const getMediaType = (item: PortfolioItem) => {
    if (item.type) return item.type;
    
    // Check both src and thumbnail for file extensions
    const src = (item.src || item.thumbnail || '').toLowerCase();
    if (src.includes('.mp4') || src.includes('.webm') || src.includes('.mov')) {
      return 'video';
    } else if (src.includes('.gif')) {
      return 'gif';
    } else if (src.includes('.jpg') || src.includes('.jpeg') || src.includes('.png') || src.includes('.webp')) {
      return 'image';
    } else {
      // Default to image if no clear indication
      return 'image';
    }
  };

  const mediaType = getMediaType(item);
  console.log('Detected media type:', mediaType);

  // Get the best available image source
  const getImageSrc = () => {
    // Priority: src > thumbnail > fallback
    return item.src || item.thumbnail || 'https://via.placeholder.com/800x450?text=Image+Not+Found';
  };

  const imageSrc = getImageSrc();
  console.log('Image source:', imageSrc);

  // Keyboard event handler for ESC key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isExpanded) {
          setIsExpanded(false);
        } else {
          handleClose();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isExpanded]);

  // Mock gallery images for project steps - in real app, these would come from item.gallery
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
    // Pause video when showing details (only for videos)
    if (mediaType === 'video' && videoRef.current) {
      videoRef.current.pause();
    }
    setShowDetails(true);
  };

  const handleHideDetails = () => {
    setShowDetails(false);
  };

  const handleExpand = () => {
    console.log('VideoModal: Expanding image');
    setIsExpanded(true);
  };

  const handleCloseExpanded = () => {
    console.log('VideoModal: Closing expanded image');
    setIsExpanded(false);
  };

  const handleClose = () => {
    console.log('VideoModal: Closing modal');
    setIsModalExpanded(false);
    onClose();
  };

  return (
    <>
      {/* Main Modal */}
      <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
        <div className="relative w-full max-w-6xl bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
          {/* Top Section - Title and Description */}
          <div className="p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white relative z-20">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">{item.title[language]}</h2>
                {item.description && (
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description[language]}</p>
                )}
                {/* Debug info */}
              </div>
              
              {/* Back Button - Only visible when details are showing */}
              {showDetails && (
                <button
                  onClick={handleHideDetails}
                  className="absolute top-4 right-20 z-30 w-12 h-12 bg-white/70 hover:bg-white/90 dark:bg-black/70 dark:hover:bg-black/90 rounded-full flex items-center justify-center text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition-colors"
                >
                  <ArrowLeft size={24} />
                </button>
              )}
            </div>
            
            {/* Glowing line separator - Only visible when details are showing */}
            {showDetails && (
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70 shadow-lg shadow-blue-500/50"></div>
            )}
          </div>
          
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-30 w-12 h-12 bg-white/70 hover:bg-white/90 dark:bg-black/70 dark:hover:bg-black/90 rounded-full flex items-center justify-center text-gray-900 hover:text-red-600 dark:text-white dark:hover:text-red-400 transition-colors backdrop-blur-sm"
          >
            <X size={24} />
          </button>

          {/* Media Container */}
          <div className="relative">
            {/* Media Display */}
            <div className="relative bg-black aspect-video">
              {mediaType === 'video' ? (
                // Video Player
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  poster={item.thumbnail}
                  onError={(e) => {
                    console.error('Video failed to load:', item.src);
                    console.error('Video error event:', e);
                  }}
                >
                  <source src={item.src} type="video/mp4" />
                  <source src={item.src} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                // Image/GIF Display
                <div className="relative w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800">
                  <img
                    src={imageSrc}
                    alt={item.title[language]}
                    className="max-w-full max-h-full object-contain"
                    onLoad={() => {
                      console.log('Image loaded successfully:', imageSrc);
                    }}
                    onError={(e) => {
                      console.error('Image failed to load:', imageSrc);
                      console.error('Image error event:', e);
                      console.error('Item data:', item);
                      
                      // Try alternative sources
                      const target = e.currentTarget as HTMLImageElement;
                      if (target.src === item.src && item.thumbnail) {
                        console.log('Trying thumbnail fallback:', item.thumbnail);
                        target.src = item.thumbnail;
                      } else if (!target.src.includes('placeholder')) {
                        console.log('Using placeholder fallback');
                        target.src = 'https://via.placeholder.com/800x450?text=Image+Not+Found';
                      }
                    }}
                  />
                  
                  {/* Expand Button */}
                  <button
                    onClick={handleExpand}
                    className="absolute top-4 right-4 w-12 h-12 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
                  >
                    <Expand size={20} />
                  </button>
                </div>
              )}
            </div>

            {/* Sliding Details Section - Only covers media area */}
            <div className={`
              absolute inset-0 bg-white dark:bg-gray-900 transform transition-transform duration-500 ease-in-out z-10
              ${showDetails ? 'translate-y-0' : 'translate-y-full'}
            `}>
              {/* Scrollable Content - No header */}
              <div className="h-full overflow-y-auto">
                <div className="p-6">
                  {/* Detailed Description */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Project Description</h4>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        This is a detailed description of the {mediaType} project. Here you can include comprehensive information about the creative process, technical specifications, tools used, and the story behind the creation.
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                        The project involved multiple stages of development including concept design, preparation, production, and post-production. Each phase required careful attention to detail and collaboration with various team members.
                      </p>
                      <div className="grid grid-cols-2 gap-4 my-6">
                        <div>
                          <h5 className="text-gray-900 dark:text-white font-medium mb-2">Technical Details</h5>
                          <ul className="text-gray-500 dark:text-gray-400 text-sm space-y-1">
                            {mediaType === 'video' ? (
                              <>
                                <li>Duration: 2:30 minutes</li>
                                <li>Resolution: 1920x1080</li>
                                <li>Frame Rate: 30fps</li>
                                <li>Format: MP4</li>
                              </>
                            ) : (
                              <>
                                <li>Type: {mediaType.toUpperCase()}</li>
                                <li>Resolution: 1920x1080</li>
                                <li>Format: {mediaType === 'gif' ? 'GIF' : 'JPEG/PNG'}</li>
                                <li>Size: Optimized</li>
                              </>
                            )}
                          </ul>
                        </div>
                        <div>
                          <h5 className="text-gray-900 dark:text-white font-medium mb-2">Tools Used</h5>
                          <ul className="text-gray-500 dark:text-gray-400 text-sm space-y-1">
                            {mediaType === 'video' ? (
                              <>
                                <li>Adobe After Effects</li>
                                <li>Adobe Premiere Pro</li>
                                <li>Cinema 4D</li>
                                <li>Adobe Photoshop</li>
                              </>
                            ) : (
                              <>
                                <li>Adobe Photoshop</li>
                                <li>Adobe Illustrator</li>
                                <li>Figma</li>
                                <li>Sketch</li>
                              </>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Steps Gallery using Gallery Component */}
                  <div className="mb-8">
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 overflow-hidden">
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
            <div className="p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white relative z-20">
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

      {/* Expanded Image Modal - Full Screen */}
      {isExpanded && (
        <div className="fixed inset-0 bg-black z-[200] flex items-center justify-center">
          <img
            src={imageSrc}
            alt={item.title[language]}
            className="w-full h-full object-contain"
          />
          
          {/* Small X Close Button */}
          <button
            onClick={handleCloseExpanded}
            className="absolute top-4 right-4 w-8 h-8 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors"
          >
            <X size={16} />
          </button>
        </div>
      )}
    </>
  );
}