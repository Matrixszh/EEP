"use client"
import React, { useState, useRef } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";

interface HeroProps {
  media: {
    type: "image" | "video";
    src: string;
  };
  title: string[];
  isSpecial?: boolean;
}

const Hero: React.FC<HeroProps> = ({ media, title, isSpecial = false }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const backgroundStyle =
    media.type === "image"
      ? {
          backgroundImage: `url(${media.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }
      : {};

  return (
    <section
      className="relative w-full h-[60vh] md:h-[80vh] lg:h-[90vh] text-white"
      style={backgroundStyle}
    >
      {media.type === "video" && (
        <video
          autoPlay
          muted={isMuted}
          loop
          playsInline
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-contain"
        >
          <source src={media.src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="font-extrabold tracking-wider text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          {isSpecial ? (
            title[0] === "ELITE ENTREPRENEURS" ? (
              // Home page layout
              <>
                <span className="block mb-2">{title[0]}</span>
                <span className="block">
                  {title[1]}{" "}
                  <span className="text-[#9E0CCA]">{title[2]}</span>{" "}
                  {title[3]}
                </span>
              </>
            ) : (
              // Speakers page layout
              <>
                <span className="block mb-2">
                  {title[0]}{" "}
                  <span className="text-[#9E0CCA]">{title[1]}</span>{" "}
                </span>
                <span className="block">{title[2]}</span>
              </>
            )
          ) : (
            // Default rendering for normal cases
            title.map((part, index) => (
              <span key={index} className="block">
                {part}
              </span>
            ))
          )}
        </h1>
      </div>

      {/* Mute/Unmute Button */}
      {media.type === "video" && (
        <button
          onClick={toggleMute}
          className="absolute bottom-4 left-4 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition"
        >
          {isMuted ? <FaVolumeMute size={24} /> : <FaVolumeUp size={24} />}
        </button>
      )}
    </section>
  );
};

export default Hero;
