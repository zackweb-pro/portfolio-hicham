"use client";

import { useState, useEffect, useRef } from 'react';
import { X, Expand } from 'lucide-react';

interface GalleryImage {
  src: string;
  alt: string;
  aspectRatio: number;
}

interface GalleryImageWithIndex extends GalleryImage {
  index: number;
  height: number;
}

interface GalleryProps {
  images: GalleryImage[];
  columns?: number;
  gap?: number;
}

export default function Gallery({ images, columns = 3, gap = 16 }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [imageColumns, setImageColumns] = useState<GalleryImageWithIndex[][]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate column layout
  useEffect(() => {
    if (!images.length) return;

    const containerWidth = containerRef.current?.offsetWidth || 1200;
    const columnWidth = (containerWidth - gap * (columns - 1)) / columns;

    // Create empty columns array with proper typing
    const cols: GalleryImageWithIndex[][] = Array.from({ length: columns }, () => []);
    const colHeights = new Array(columns).fill(0);

    images.forEach((img, index) => {
      const height = columnWidth / img.aspectRatio;
      
      // Find the shortest column
      const shortestColIndex = colHeights.indexOf(Math.min(...colHeights));
      cols[shortestColIndex].push({ ...img, index, height });
      colHeights[shortestColIndex] += height + gap;
    });

    setImageColumns(cols);
  }, [images, columns, gap]);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImage === null) return;

      switch (event.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowRight':
          goToNext();
          break;
        case 'ArrowLeft':
          goToPrevious();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <>
      <div 
        ref={containerRef}
        className="w-full"
        style={{ 
          display: 'grid', 
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: `${gap}px`
        }}
      >
        {imageColumns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col" style={{ gap: `${gap}px` }}>
            {column.map((img) => (
              <div
                key={img.index}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
                onClick={() => openModal(img.index)}
                style={{ height: `${img.height}px` }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Expand 
                    size={24} 
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[200] flex items-center justify-center p-4">
          <div className="relative max-w-7xl max-h-full">
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-full object-contain"
            />
            
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-12 h-12 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <X size={24} />
            </button>
            
            {/* Previous button */}
            {images.length > 1 && (
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white transition-colors"
              >
                ←
              </button>
            )}
            
            {/* Next button */}
            {images.length > 1 && (
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white transition-colors"
              >
                →
              </button>
            )}
            
            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
              {selectedImage + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}