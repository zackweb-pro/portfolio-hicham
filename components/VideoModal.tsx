"use client";

import { useState, useRef, useEffect } from 'react';
import { X, ArrowLeft, Expand } from 'lucide-react';
import dynamic from 'next/dynamic';
import { PortfolioItem } from './PortfolioGrid';
import { useLanguage } from './LanguageProvider';
import { useModal } from './ModalProvider';
import Gallery from './Gallery';

// Dynamically import Plyr with SSR disabled
const Plyr = dynamic(() => import('plyr-react'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-900 flex items-center justify-center text-white">Loading player...</div>
});

interface VideoModalProps {
  item: PortfolioItem;
  onClose: () => void;
}

export default function VideoModal({ item, onClose }: VideoModalProps) {
  const { language } = useLanguage();
  const { setIsModalExpanded } = useModal();
  const [showDetails, setShowDetails] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const plyrRef = useRef<any>(null);

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
    if (mediaType === 'video' && plyrRef.current?.plyr) {
      plyrRef.current.plyr.pause();
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
        <div className="relative w-full max-w-[1400px] bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
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
                // Plyr Video Player
                <Plyr
                  ref={plyrRef}
                  source={{
                    type: 'video',
                    sources: [
                      {
                        src: item.src || '',
                        type: 'video/mp4',
                      },
                    ],
                    poster: item.thumbnail,
                  }}
                  options={{
                    // Control buttons to display
                    controls: [
                      'play-large', // The large play button in the center
                      'restart', // Restart playback
                      'rewind', // Rewind by the seek time (default 10 seconds)
                      'play', // Play/pause playback
                      'fast-forward', // Fast forward by the seek time (default 10 seconds)
                      'progress', // The progress bar and scrubber for playback and buffering
                      'current-time', // The current time of playback
                      'duration', // The full duration of the media
                      'mute', // Toggle mute
                      'volume', // Volume control
                      'captions', // Toggle captions
                      'settings', // Settings menu
                      'pip', // Picture-in-picture (currently Safari only)
                      'airplay', // Airplay (currently Safari only)
                      'download', // Show a download button with a link to either the current source or a custom URL
                      'fullscreen', // Toggle fullscreen
                    ],
                    
                    // Playback settings
                    autoplay: true,
                    autopause: true, // Only allow one player playing at once
                    seekTime: 10, // The time, in seconds, to seek when a user hits fast forward or rewind
                    volume: 1, // A number, between 0 and 1, representing the initial volume of the player
                    muted: false, // Whether to start playback muted
                    
                    // Display settings  
                    clickToPlay: true, // Click (or tap) of the video container will toggle play/pause
                    disableContextMenu: true, // Disable right click menu on video to help prevent downloads
                    hideControls: true, // Hide video controls automatically after 2s of no mouse or focus movement
                    resetOnEnd: false, // Reset the playback to the start once playback is complete
                    
                    // Keyboard shortcuts
                    keyboard: { 
                      focused: true, // Only trigger keyboard shortcuts when the player has focus
                      global: false // Trigger keyboard shortcuts even when the player doesn't have focus
                    },
                    
                    // Tooltips
                    tooltips: { 
                      controls: true, // Display control labels as tooltips on :hover & :focus
                      seek: true // Display seek tooltip to indicate on click where the media would seek to
                    },
                    
                    // Captions settings
                    captions: { 
                      active: false, // Toggles if captions are active by default
                      language: 'auto', // Sets the default language to load (if available)
                      update: false // Listen to new tracks added after Plyr is initialized
                    },
                    
                    // Fullscreen settings
                    fullscreen: { 
                      enabled: true, // Toggles whether fullscreen is enabled
                      fallback: true, // Allow fallback to a full-window/viewport for older browsers
                      iosNative: false // Use the native fullscreen in iOS (disables custom controls)
                    },
                    
                    // Speed/Quality settings
                    speed: { 
                      selected: 1, // The default speed for playback
                      options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2] // Available playback speeds
                    },
                    
                    quality: {
                      default: 720, // Default quality level
                      options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
                      forced: false, // Force a quality level (no quality selection)
                    },
                    
                    // Loop settings
                    loop: { 
                      active: false // Whether to loop the current video
                    },
                    
                    // Loading and buffering
                    loadSprite: true, // Load the SVG sprite specified in the iconUrl option
                    iconPrefix: 'plyr', // Specify the id prefix for the icons used in the default controls
                    iconUrl: 'https://cdn.plyr.io/3.7.8/plyr.svg', // Specify a URL or path to the SVG sprite
                    
                    // Ads (if needed in the future)
                    ads: {
                      enabled: false, // Enable advertisements
                      publisherId: '', // Your Publisher ID from vi (https://vi.ai/publisher-video-monetization/?aid=plyrio)
                      tagUrl: '' // Your ad tag URL
                    },
                    
                    // Preview thumbnails (if available)
                    previewThumbnails: {
                      enabled: false, // Enable preview thumbnails
                      src: '' // Thumbnail sprite image or WebVTT file
                    },
                    
                    // Storage for user settings
                    storage: { 
                      enabled: true, // Allow use of local storage to store user settings
                      key: 'plyr' // The key name to use for local storage
                    },
                    
                    // Responsive settings
                    invertTime: true, // Display the current time as a countdown rather than an incremental counter
                    toggleInvert: true, // Allow users to click to toggle the above
                    
                    // Debug mode
                    debug: false, // Enable debugging mode (logs events to console)
                  }}
                />
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

            {/* Sliding Details Section - Full screen on mobile */}
            <div className={`
              absolute bg-white dark:bg-gray-900 transform transition-transform duration-500 ease-in-out z-10
              ${showDetails ? 'translate-y-0' : 'translate-y-full'}
              ${/* Mobile: Full screen height */ ''}
              md:inset-0
              ${/* Mobile: Full screen positioning */ ''}
              inset-x-0 top-0 bottom-0 h-screen md:h-auto
            `}>
              {/* Mobile Header - Only visible on mobile when details are shown */}
              {showDetails && (
                <div className="md:hidden flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Project Details</h3>
                  <button
                    onClick={handleHideDetails}
                    className="w-10 h-10 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-full flex items-center justify-center text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              )}

              {/* Scrollable Content */}
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
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
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
                          columns={showDetails ? (typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 3) : 3}
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
            <div className="p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white relative z-20 flex justify-center align-items-center">
              <button
                onClick={handleShowDetails}
                className="w-[100px] md:w-auto px-6 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-3xl transition-colors font-medium shadow-lg "
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