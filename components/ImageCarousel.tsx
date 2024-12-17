"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import ImageModal from "./ImageModal";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const timer = setInterval(goToNext, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const openModal = () => {
    console.log("Opening modal"); // Debugging line
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log("Closing modal"); // Debugging line
    setIsModalOpen(false);
  };

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-t-lg">
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.div
          key={currentIndex}
          custom={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 cursor-zoom-in transition-transform duration-300 hover:scale-105"
          onClick={openModal}
        >
          <Image
            src={images[currentIndex]}
            alt={`${alt} - Image ${currentIndex + 1}`}
            fill
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white hover:bg-black/20"
        onClick={(e) => {
          e.stopPropagation();
          goToPrevious();
        }}
        aria-label="Previous image"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:bg-black/20"
        onClick={(e) => {
          e.stopPropagation();
          goToNext();
        }}
        aria-label="Next image"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-all ${
              index === currentIndex ? "bg-white w-4" : "bg-white/50"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(index);
            }}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm pointer-events-none">
        Click para ampliar
      </div>
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageSrc={images[currentIndex]}
        alt={`${alt} - Image ${currentIndex + 1}`}
      />
    </div>
  );
};

export default ImageCarousel;
