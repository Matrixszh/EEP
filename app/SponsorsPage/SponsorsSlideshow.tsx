"use client";

import React, { useState, useEffect, useRef } from "react";

interface Slide {
  id: string;
  collaborator: string;
  imageUrl: string;
}

interface SlideshowProps {
  autoPlayInterval?: number;
}

const slides: Slide[] = [
  { id: "01", collaborator: "SOMEONE", imageUrl: "/Podcast1.jpg" },
  { id: "02", collaborator: "SOMEONE", imageUrl: "/Podcast2.jpg" },
  { id: "03", collaborator: "SOMEONE", imageUrl: "/Podcast3.jpg" },
  { id: "04", collaborator: "SOMEONE", imageUrl: "/Podcast6.jpg" }, //choose better image
  { id: "05", collaborator: "SOMEONE", imageUrl: "/Podcast5.jpg" },
  { id: "06", collaborator: "SOMEONE", imageUrl: "/Podcast6.jpg" },
];

const SponsorsSlideshow: React.FC<SlideshowProps> = ({
  autoPlayInterval = 3000,
}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Function to start the auto-play interval
  const startAutoPlay = () => {
    stopAutoPlay(); // Clear any existing interval
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);
  };

  // Function to stop the auto-play interval
  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  // Manual Slide Change Handler
  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    startAutoPlay(); // Restart the auto-play timer after a manual change
  };

  useEffect(() => {
    startAutoPlay(); // Start auto-play on component mount
    return stopAutoPlay; // Cleanup on component unmount
  }, [autoPlayInterval]);

  return (
    <div>
      {/* Marquee Section */}
      <div className="overflow-hidden bg-transparent py-14 sm:py-14 md:py-16 lg:py-20">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(20)
            .fill(0)
            .map((_, index) => (
              <React.Fragment key={index}>
                <span className="text-white text-2xl md:text-[40px] font-normal font-serif uppercase mx-2">
                  Glimpses
                </span>
                <span className="text-[#9E0CCA] text-2xl md:text-[40px] font-normal font-serif uppercase mx-2">
                  .
                </span>
              </React.Fragment>
            ))}
        </div>
      </div>

      {/* Slideshow Section */}
      <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] bg-transparent overflow-hidden">
        <div
          className="relative h-full"
          aria-live="polite"
          role="region"
          aria-label="Sponsors Slideshow"
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700
              ${
                currentSlide === index
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              {/* Slide Image */}
              <img
                src={slide.imageUrl}
                alt={`Collaboration with ${slide.collaborator}`}
                className="w-full h-full object-fit"
                loading="lazy"
              />
              {/* Collaboration Text */}
              <h2 className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-white text-sm sm:text-sm md:text-2xl lg:text-4xl font-extrabold tracking-wider px-2 py-2 rounded-md z-20 pointer-events-none">
                ABDULLAH <span className="text-[#9e0cca]">X</span>{" "}
                {slide.collaborator}
              </h2>
            </div>
          ))}
        </div>

        {/* Tracking Numbers on the Left */}
        <nav className="absolute left-2 top-1/2 -translate-y-1/2 z-30 space-y-6">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleSlideChange(idx)}
              className={`transition-colors duration-300 flex items-center p-2 rounded-full bg-black/50
        ${
          currentSlide === idx
            ? "text-[#9e0cca]"
            : "text-white hover:text-[#9e0cca]"
        }`}
            >
              <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold font-mono">
                {String(idx + 1).padStart(2, "0")}
              </span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default SponsorsSlideshow;
