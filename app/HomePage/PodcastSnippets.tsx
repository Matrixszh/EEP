"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface Props {
  images1: string[];
  images2: string[];
}

const PodcastSnippets: React.FC<Props> = ({ images1, images2 }) => {
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const checkMobileView = useCallback(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    checkMobileView();
    window.addEventListener("resize", checkMobileView);
    return () => window.removeEventListener("resize", checkMobileView);
  }, [checkMobileView]);

  useEffect(() => {
    const timer1 = setInterval(() => {
      setCurrentIndex1((prev) => (prev + 1) % images1.length);
    }, 3000);
    return () => clearInterval(timer1);
  }, [images1.length]);

  useEffect(() => {
    const timer2 = setInterval(() => {
      setCurrentIndex2((prev) => (prev + 1) % images2.length);
    }, 3000);
    return () => clearInterval(timer2);
  }, [images2.length]);

  const renderSlideshow = (
    images: string[],
    currentIndex: number,
    side: "left" | "right"
  ) => (
    <div className="flex items-center justify-center w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl aspect-[16/9]">
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-2xl shadow-lg">
        <Image
          src={images[currentIndex]}
          alt={`Slideshow ${side} Image ${currentIndex + 1}`}
          className="object-cover w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-105"
          width={3839}
          height={1877}
          quality={100}
          priority={currentIndex === 0}
          sizes="(max-width: 768px) 100vw, 
                 (max-width: 1200px) 90vw, 
                 (max-width: 1600px) 80vw, 
                 70vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 rounded-2xl" />
        <div className="absolute bottom-3 left-3 right-3 h-1 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white/70 rounded-full transition-all duration-300" 
            style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }} 
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative w-full flex items-center justify-center px-3 sm:px-3 md:px-4 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="max-w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-12 text-center">
        {!isMobile && (
          <div className="flex items-center justify-center w-full md:w-1/2">
            {renderSlideshow(images1, currentIndex1, "left")}
          </div>
        )}

        <div className="flex flex-col items-center justify-center w-full md:w-1/2 text-center space-y-4 sm:space-y-6 lg:space-y-8 px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full backdrop-blur-md">
            <span className="text-sm md:text-base font-light text-gray-200">Passion</span>
            <ArrowRight className="w-4 sm:w-5 md:w-6 h-3 sm:h-4 md:h-5 text-purple-400" />
            <span className="text-sm md:text-base font-light text-gray-200">Goals</span>
          </div>

          <div className="space-y-3 sm:space-y-4 lg:space-y-6">
            <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Podcast Snippets
            </h2>

            <Link href="/SpeakersPage" className="inline-block">
              <button className="group  relative px-5 sm:px-6 md:px-8 lg:px-10 py-2 rounded-full bg-gradient-to-r from-purple-700 to-pink-700 text-white text-sm sm:text-base font-semibold overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/40">
                <span className="relative z-10">Join Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center w-full md:w-1/2">
          {renderSlideshow(images2, currentIndex2, "right")}
        </div>
      </div>
    </div>
  );
};

export default PodcastSnippets;
