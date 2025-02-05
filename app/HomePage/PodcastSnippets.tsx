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

  const renderSlideshow = (images: string[], currentIndex: number, side: 'left' | 'right') => (
    <div className={`w-full ${!isMobile ? 'md:w-1/3' : ''} aspect-square relative`}>
      <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl">
        <Image
          src={images[currentIndex]}
          alt={`Slideshow ${side} Image ${currentIndex + 1}`}
          className="object-fit transition-all duration-500"
          fill
          quality={100}
          priority={currentIndex === 0}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
      </div>
    </div>
  );

  return (
    <div className="relative w-full py-16 md:py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {!isMobile && renderSlideshow(images1, currentIndex1, 'left')}

        <div className="w-full md:w-1/3 text-center space-y-8 px-4">
          <div className="inline-flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm">
            <span className="text-sm font-medium text-gray-200">Passion</span>
            <ArrowRight className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-gray-200">Goals</span>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Podcast Snippets
            </h2>

            <Link href="/SpeakersPage" className="inline-block">
              <button className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30">
                <span className="relative z-10">Join Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </Link>
          </div>

          <div className="w-full max-w-xs mx-auto h-1.5 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full animate-gradient" />
          </div>
        </div>

        {renderSlideshow(images2, currentIndex2, 'right')}
      </div>
    </div>
  );
};

export default PodcastSnippets;