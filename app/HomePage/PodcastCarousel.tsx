import React, { useState, useEffect, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import podcastData from "../../data/podcastData";

interface PodcastSlide {
  id: string;
  title: string;
  video: string; // Ensure this is the embed URL: e.g., "https://www.youtube.com/embed/{VIDEO_ID}"
  thumbnail: string;
}

const PodcastCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = useCallback(() => {
    if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);

    if (!isHovered) {
      autoPlayTimerRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === podcastData.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);
    }
  }, [isHovered]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isHovered, startAutoPlay]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === podcastData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? podcastData.length - 1 : prevIndex - 1
    );
  };

  const getVisibleSlides = useCallback(() => {
    const prev = currentIndex === 0 ? podcastData.length - 1 : currentIndex - 1;
    const next = currentIndex === podcastData.length - 1 ? 0 : currentIndex + 1;
    return [podcastData[prev], podcastData[currentIndex], podcastData[next]];
  }, [currentIndex]);

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8">
          <span className="text-gray-400 text-xs uppercase tracking-wider">successful</span>
          <h2 className="text-white text-4xl font-serif mt-2">Podcasts</h2>
        </div>

        <div className="relative flex justify-center items-center gap-4 overflow-hidden">
          <button
            onClick={handlePrev}
            aria-label="Previous podcast"
            className="absolute z-30 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 left-2 top-1/2 transform -translate-y-1/2 sm:left-6"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {getVisibleSlides().map((slide, index) => (
            <div
              key={`${slide.id}-${index}`}
              className={`transition-all duration-700 ease-in-out relative overflow-hidden ${
                index === 1
                  ? "w-[300px] h-[180px] sm:w-[480px] sm:h-[270px] md:w-[640px] md:h-[360px] z-20 opacity-100 scale-100"
                  : "w-[140px] h-[80px] sm:w-[200px] sm:h-[120px] md:w-[280px] md:h-[160px] opacity-40 blur-[1px] scale-95"
              } ${index !== 1 ? "hidden sm:block" : ""}`}
            >
              {index === 1 ? (
                <div
                  className="relative w-full h-full"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {isHovered ? (
                    <iframe
                      src={slide.video}
                      className="w-full h-full"
                      title={slide.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  ) : (
                    <>
                      <img
                        src={slide.thumbnail}
                        alt={slide.title}
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute inset-0 flex justify-center items-center">
                        <div className="w-12 h-12 bg-black/60 rounded-full flex justify-center items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="white"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 3l14 9-14 9V3z"
                            />
                          </svg>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <img
                  src={slide.thumbnail}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          ))}

          <button
            onClick={handleNext}
            aria-label="Next podcast"
            className="absolute z-30 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 right-2 top-1/2 transform -translate-y-1/2 sm:right-6"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {podcastData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "bg-purple-500 w-4"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PodcastCarousel;
