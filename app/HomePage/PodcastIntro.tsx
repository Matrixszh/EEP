"use client";
import Image from 'next/image';
import React, { useState } from 'react';

const PodcastIntro = () => {
  const [showStory, setShowStory] = useState(false);

  return (
    <section id='aboutUs' className="pt-16 md:pt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-serif mb-8 leading-tight">
            A podcast with<br />
            masterminds at work<br />
            delve into the secrets<br />
            of success
          </h2>

          {/* Description Text */}
          <p className="text-gray-300 text-sm md:text-base mb-8 max-w-3xl text-justify md:text-center">
            Join <strong>Abdullah Ghaffar</strong> as he engages with the brightest minds in the real estate 
            industry! Discover actionable tips, inspiring stories, and insider knowledge from top performers 
            and experts in real estate investing and raising capital.
          </p>

          {/* Expandable Content */}
          <div className="text-gray-300 text-sm md:text-base max-w-3xl text-justify md:text-center">
            <p className="mb-4">
              This podcast offers you insight about the host Abdullah and his struggles to achieve 
              what is now, by measures, the most immaculate form of success.
            </p>
            {showStory && (
              <>
                <p className="mb-4">
                  Behind this podcast is a passion for real estate and a commitment to sharing knowledge. 
                  Abdullah Ghaffar brings together the industry&apos;s best and brightest to inspire and guide aspiring 
                  investors, entrepreneurs, and real estate enthusiasts.
                </p>
                <p className="mb-4">
                  Through candid conversations and valuable takeaways, this podcast empowers listeners to build a solid 
                  foundation in real estate investing, develop impactful strategies, and unlock new opportunities for growth. 
                  Whether you&apos;re just starting out or an experienced investor, there&apos;s something here for everyone.
                </p>
                <p>
                  Tune in for new episodes and join the conversation to stay ahead in the real estate game!
                </p>
              </>
            )}
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setShowStory(!showStory)}
                className="px-6 py-3 rounded-full border border-[#9e0cca] hover:bg-purple-500/10 transition-all duration-300 uppercase text-xs tracking-wider"
              >
                {showStory ? 'Show Less' : 'Read Our Story'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodcastIntro;
