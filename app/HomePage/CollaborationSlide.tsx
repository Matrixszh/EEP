"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface SlideImage {
  id: number;
  image: string;
  name1: string;
  name2: string;
}

const slideImages: SlideImage[] = [
  { id: 1, image: "/Podcast1.jpg", name1: "Abdullah", name2: "Disruptors" },
  { id: 2, image: "/Podcast2.jpg", name1: "Abdullah", name2: "King Khang" },
  // { id: 3, image: "/Podcast3.jpg", name1: "Abdullah", name2: "Brent Daniels" },
  // { id: 4, image: "/Podcast4.jpg", name1: "Abdullah", name2: "Troy Kearns" },
  { id: 5, image: "/Podcast5.jpg", name1: "Abdullah", name2: "Minsetmarlon" },
  // { id: 6, image: "/Podcast6.jpg", name1: "Abdullah", name2: "Someone" },
  { id: 7, image: "/Podcast7.jpg", name1: "Abdullah", name2: "Brad Blazar" },
  { id: 8, image: "/Podcast8.jpg", name1: "Abdullah", name2: "Rafay Qamar" },
  { id: 9, image: "/Podcast9.jpg", name1: "Abdullah", name2: "Antonio Garcia" },
  // { id: 10, image: "/Podcast10.jpg", name1: "Abdullah", name2: "Someone" },
  // { id: 11, image: "/Podcast11.jpg", name1: "Abdullah", name2: "Someone" },
  { id: 12, image: "/Podcast12.jpg", name1: "Abdullah", name2: "Troy Kearns" },
  // { id: 13, image: "/Podcast13.jpg", name1: "Abdullah", name2: "Someone" },
  // { id: 14, image: "/Podcast14.jpg", name1: "Abdullah", name2: "Someone" },
  { id: 15, image: "/Podcast15.jpg", name1: "Abdullah", name2: "Josh & Stas" },
  { id: 16, image: "/Podcast16.jpg", name1: "Abdullah", name2: " Fareed Abedini & Aram Ghazaryan" },
  { id: 17, image: "/Podcast17.jpg", name1: "Abdullah", name2: "Antonio Hernandez" },
  { id: 18, image: "/Podcast18.jpg", name1: "Abdullah", name2: "Angel King" },
  // { id: 19, image: "/Podcast19.jpg", name1: "Abdullah", name2: "Someone" },
];

const CollaborationsSlide: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pb-16 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="md:w-1/2 text-white text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-2 leading-snug">
              Collaborations
            </h2>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-[#9E0CCA] text-5xl font-bold">&</span>
              <h2 className="text-4xl md:text-5xl font-bold leading-snug">
                Directives
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed text-justify max-w-xl mt-6 text-base mx-auto md:mx-0">
              Our podcast has successfully formed collaborations with some of the most influential figures in the real estate industry. 
              Each partnership adds unique insights, strategies, and inspiration that help listeners stay ahead of the curve.
            </p>
            <p className="text-gray-300 leading-relaxed text-justify max-w-xl mt-4 text-base mx-auto md:mx-0">
              These collaborations foster growth, share knowledge, and provide actionable tips to help aspiring investors and entrepreneurs 
              achieve success in the real estate market. Our vision for empowering individuals through these connections is what drives the podcast forward.
            </p>
          </div>

          {/* Right Slideshow */}
          <div className="md:w-1/2 relative w-full">
            <motion.div
              className="relative w-full h-[40vh] sm:h-[50vh] md:h-[70vh] rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {slideImages.map((slide, index) => (
                <motion.div
                  key={slide.id}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0"
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === currentSlide ? 1 : 0 }}
                  transition={{ duration: 1 }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={slide.image}
                      alt={`${slide.name1} X ${slide.name2}`}
                      className="object-fit"
                      fill
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-8 left-0 right-0 text-center text-white">
                    <div className="text-lg sm:text-2xl font-light tracking-wide">
                      {slide.name1}
                      <span className="text-[#9E0CCA] mx-2 font-semibold">
                        X
                      </span>
                      {slide.name2}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationsSlide;
