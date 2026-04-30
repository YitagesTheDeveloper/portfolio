import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const ScreenshotModal = ({ isOpen, onClose, folder, title }) => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (isOpen && folder) {
      // Use Vite's import.meta.glob to dynamically load images from the specific folder
      const loadImages = async () => {
        const allImages = import.meta.glob('../../assets/images/**/*.PNG', { eager: true });
        const folderImages = Object.keys(allImages)
          .filter(path => path.includes(`/assets/images/${folder}/`))
          .map(path => allImages[path].default);
        
        // Sort images numerically if they are named 1.PNG, 2.PNG, etc.
        folderImages.sort((a, b) => {
          const aNum = parseInt(a.match(/\/(\d+)\./)?.[1] || 0);
          const bNum = parseInt(b.match(/\/(\d+)\./)?.[1] || 0);
          return aNum - bNum;
        });

        setImages(folderImages);
        setCurrentIndex(0);
      };
      loadImages();
    }
  }, [isOpen, folder]);

  if (!isOpen) return null;

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 z-[110] rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
      >
        <X size={24} />
      </button>

      <div className="relative max-w-5xl w-full h-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
        {images.length > 0 ? (
          <>
            <img 
              src={images[currentIndex]} 
              alt={`${title} screenshot ${currentIndex + 1}`}
              className="max-h-full max-w-full object-contain rounded-lg shadow-2xl animate-fade-in"
            />
            
            {images.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-all backdrop-blur-md"
                >
                  <ChevronLeft size={28} />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-all backdrop-blur-md"
                >
                  <ChevronRight size={28} />
                </button>
                
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/40 px-4 py-1.5 rounded-full text-white text-sm backdrop-blur-md border border-white/10">
                  {currentIndex + 1} / {images.length}
                </div>
              </>
            )}
          </>
        ) : (
          <div className="text-white text-xl font-medium">Loading screenshots...</div>
        )}
      </div>
    </div>
  );
};

export default ScreenshotModal;
