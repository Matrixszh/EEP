import Link from 'next/link';
import React from 'react';

const SpeakerIntro= () => {
  return (
    <section className="relative w-full py-16 md:py-24 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Section: Heading */}
        <div className="flex flex-col items-center justify-center md:justify-start md:items-start w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-center md:text-left font-bold leading-tight">
            Want to be a <br />
            <span className="text-[#9e0cca]">Speaker</span> on our <br />
            Podcast <span className="text-purple-300">?</span>
          </h1>
           <Link href="/HomePage">
              <button className="mt-6 px-6 py-3 rounded-full border border-[#9e0cca] text-[#9e0cca] font-medium hover:bg-[#9e0cca] hover:text-white transition">
                Read Our Story
              </button>
            </Link>
        </div>

        {/* Right Section: Description */}
        <div className="w-full md:w-1/2">
          <p className="text-sm md:text-base leading-relaxed text-gray-300">
            This podcast offers you an insight about the host Abdullah and his
            struggles to achieve what is now by measures the most immaculate
            form of success. This podcast offers you an insight about the host
            Abdullah and his struggles to achieve what is now by measures the
            most immaculate form of success. This podcast offers you an insight
            about the host Abdullah and his struggles to achieve what is now by
            measures the most immaculate form of success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpeakerIntro;
