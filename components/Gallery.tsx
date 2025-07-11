import React, { useState, useEffect } from 'react';

interface GalleryProps {
  images?: Array<{
    src: string;
    alt: string;
    aspectRatio?: number;
  }>;
  columns?: number;
  gap?: number;
}

const Gallery: React.FC<GalleryProps> = ({ 
  images = [], 
  columns = 3, 
  gap = 16 
}) => {
  const [imageData, setImageData] = useState<Array<{
    src: string;
    alt: string;
    aspectRatio: number;
    height: number;
  }>>([]);
  const [loading, setLoading] = useState(true);

  // Default test images with various aspect ratios
  const defaultImages = [
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      alt: "Mountain landscape",
      aspectRatio: 4/3
    },
    {
      src: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=600&h=800&fit=crop",
      alt: "Forest path",
      aspectRatio: 3/4
    },
    {
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop",
      alt: "Forest canopy",
      aspectRatio: 2/1
    },
    {
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&h=600&fit=crop",
      alt: "Lake reflection",
      aspectRatio: 1
    },
    {
      src: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&h=500&fit=crop",
      alt: "Desert sunset",
      aspectRatio: 8/5
    },
    {
      src: "https://images.unsplash.com/photo-1502780402662-acc01917949e?w=500&h=800&fit=crop",
      alt: "Coastal cliffs",
      aspectRatio: 5/8
    },
    {
      src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=700&h=450&fit=crop",
      alt: "Ocean waves",
      aspectRatio: 7/4.5
    },
    {
      src: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600&h=900&fit=crop",
      alt: "Flower field",
      aspectRatio: 2/3
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&h=300&fit=crop",
      alt: "Panoramic mountain",
      aspectRatio: 3/1
    }
  ];

  const imagesToUse = images.length > 0 ? images : defaultImages;

  useEffect(() => {
    const loadImages = async () => {
      const loadedImages = await Promise.all(
        imagesToUse.map(async (img) => {
          return new Promise<{
            src: string;
            alt: string;
            aspectRatio: number;
            height: number;
          }>((resolve) => {
            if (img.aspectRatio) {
              // Use provided aspect ratio
              const baseHeight = 300;
              const height = baseHeight / img.aspectRatio;
              resolve({
                src: img.src,
                alt: img.alt,
                aspectRatio: img.aspectRatio,
                height
              });
            } else {
              // Calculate aspect ratio from image
              const image = new Image();
              image.onload = () => {
                const aspectRatio = image.width / image.height;
                const baseHeight = 300;
                const height = baseHeight / aspectRatio;
                resolve({
                  src: img.src,
                  alt: img.alt,
                  aspectRatio,
                  height
                });
              };
              image.onerror = () => {
                // Fallback if image fails to load
                resolve({
                  src: img.src,
                  alt: img.alt,
                  aspectRatio: 1,
                  height: 300
                });
              };
              image.src = img.src;
            }
          });
        })
      );
      
      setImageData(loadedImages);
      setLoading(false);
    };

    loadImages();
  }, [imagesToUse]);

  // Calculate responsive columns
  const getResponsiveColumns = () => {
    if (typeof window === 'undefined') return columns;
    
    const width = window.innerWidth;
    if (width < 640) return 1;
    if (width < 1024) return Math.min(2, columns);
    return columns;
  };

  const [responsiveColumns, setResponsiveColumns] = useState(getResponsiveColumns());

  useEffect(() => {
    const handleResize = () => {
      setResponsiveColumns(getResponsiveColumns());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [columns]);

  // Create column arrays for masonry layout
  const createColumns = () => {
    const cols = Array.from({ length: responsiveColumns }, () => []);
    const colHeights = Array(responsiveColumns).fill(0);

    imageData.forEach((img, index) => {
      // Find the shortest column
      const shortestColIndex = colHeights.indexOf(Math.min(...colHeights));
      cols[shortestColIndex].push({ ...img, index });
      colHeights[shortestColIndex] += img.height + gap;
    });

    return cols;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const columnArrays = createColumns();

  return (
    <div className="w-full">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Project Process Gallery</h2>
        <p className="text-gray-400">
          Step-by-step visualization of the creative process • {imageData.length} steps
        </p>
      </div>
      
      <div 
        className="flex gap-4 w-full"
        style={{ gap: `${gap}px` }}
      >
        {columnArrays.map((column, colIndex) => (
          <div 
            key={colIndex}
            className="flex-1 flex flex-col min-w-0"
            style={{ gap: `${gap}px` }}
          >
            {column.map((img) => (
              <div
                key={img.index}
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] group cursor-pointer bg-gray-700 w-full"
                style={{ 
                  aspectRatio: img.aspectRatio,
                  minHeight: '200px'
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                  <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-sm font-medium">{img.alt}</p>
                    <p className="text-xs opacity-80">
                      Aspect ratio: {img.aspectRatio.toFixed(2)}:1
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      
   
    </div>
  );
};

export default Gallery;