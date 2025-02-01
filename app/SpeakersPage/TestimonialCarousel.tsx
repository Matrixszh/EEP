"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Testimonial {
  id: number;
  quote: string;
  speaker: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Random testimonial of a happy customer that enjoyed the service and would definitely recommend it to her friends and colleagues in the near future. She absolutely loved the service that was provided and looks forward to doing business again",
    speaker: "Name of the Speaker",
  },
  {
    id: 2,
    quote:
      "Another random testimonial showcasing the quality and value of the services provided. It was a pleasure working with the team, and I will surely be back in the future for more collaborations.",
    speaker: "Another Speaker",
  },
  {
    id: 3,
    quote:
      "Fantastic experience overall! I cannot recommend this enough to anyone looking for professional and high-quality services. Great job!",
    speaker: "Third Speaker",
  },
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const getTestimonialStyle = (index: number): string => {
    if (index === currentIndex) {
      return "opacity-100 scale-100 translate-x-0 z-20";
    } else if (
      index ===
      (currentIndex - 1 + testimonials.length) % testimonials.length
    ) {
      return "opacity-30 scale-75 -translate-x-full z-10";
    } else if (index === (currentIndex + 1) % testimonials.length) {
      return "opacity-30 scale-75 translate-x-full z-10";
    }
    return "opacity-0 scale-50 z-0";
  };

  return (
    <div className="bg-transparent pt-4 sm:pt-4 md:pt-10 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-serif mb-10 sm:mb-12 md:mb-16">
          Listen To What Our{" "}
          <span className="text-[#9e0cca]">Speakers</span> Have To Say
        </h2>

        {/* Carousel */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-2xl mb-10">
          <div className="absolute inset-0 flex items-center justify-center rounded-2xl">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`absolute w-full max-w-lg transform transition-all duration-700 ease-in-out ${getTestimonialStyle(
                  index
                )}`}
              >
                <div className="bg-black/80 backdrop-blur-lg rounded-2xl p-6 sm:p-8 md:p-12">
                  <blockquote className="text-sm sm:text-md md:text-xl lg:text-2xl text-gray-200 italic">
                    <span className="text-[#9e0cca] text-sm sm:text-md md:text-xl lg:text-2xl font-serif">
                      &quot;
                    </span>
                    {testimonial.quote}
                    <span className="text-[#9e0cca] text-sm sm:text-md md:text-xl lg:text-2xl font-serif">
                      &quot;
                    </span>
                  </blockquote>
                  <p className="mt-6 text-gray-400">— {testimonial.speaker}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-6 mb-10 sm:mb-12">
          <button
            onClick={handlePrev}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#9e0cca] hover:bg-purple-700 text-white flex items-center justify-center text-2xl z-30 transition-colors duration-300"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#9e0cca] hover:bg-purple-700 text-white flex items-center justify-center text-2xl z-30 transition-colors duration-300"
          >
            ›
          </button>
        </div>

        {/* Footer Quote */}
        <div className="text-center">
          <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-200 font-serif">
            <span className="text-[#9e0cca]">&quot;</span>
            CHANNEL YOUR VOICE THROUGH OUR PODCAST, BE BOLD, BE RELENTLESS
            <span className="text-[#9e0cca]">&quot;</span>
          </blockquote>
        </div>
        <div className="text-center mt-6 sm:mt-8">
        <Link href="/FormSpeaker">
      <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-[#9e0cca] hover:bg-purple-500/10 transition-all duration-300 uppercase text-xs sm:text-sm tracking-wider">
        JOIN US
      </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
