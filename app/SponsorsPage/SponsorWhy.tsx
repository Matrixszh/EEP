"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface TabContent {
  id: number;
  title: string;
  description: string;
  imageUrl?: string;
}

const SponsorWhy = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabContent: TabContent[] = [
    {
      id: 1,
      title: 'Engaged Audience',
      description: "Abdullah's podcast attracts a community of entrepreneurs, investors, and motivated individuals eager to learn and grow. Collaborating with the podcast puts you directly in front of a niche, engaged audience that aligns with your brand's goals or expertise.",
      imageUrl: '/tabs-guy.png'
    },
    {
      id: 2,
      title: 'Credibility Boost',
      description: "As a guest or sponsor, you have the opportunity to highlight your expertise, products, or services in a way that adds value to the audience. Sharing your journey or brand through Abdullah's platform positions you as an authority in your field, fostering trust and loyalty.",
      imageUrl: '/tabs-guy.png'
    },
    {
      id: 3,
      title: 'Platform Growth',
      description: "Abdullah's growing influence and dynamic presence in the entrepreneurial and real estate community make his podcast an ideal platform to elevate your message. Sponsors benefit from increased visibility, while speakers gain credibility through association with a respected name in the industry.",
      imageUrl: '/tabs-guy.png'
    }
  ];

  return (
    <div className="bg-transparent text-white px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Header Section */}
      <div className="max-w-3xl mx-auto text-center mb-8 md:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 md:mb-6">Why Our Podcast</h1>
        <p className="text-base md:text-lg text-gray-300 px-4">
          Join a growing community of successful entrepreneurs and industry leaders who have chosen our platform to share their expertise and expand their reach.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="bg-purple-500/10 rounded-full p-1 flex justify-center flex-wrap gap-2">
          {tabContent.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 px-4 rounded-full transition-all duration-300 text-xs sm:text-xs md:text-base ${
                activeTab === tab.id
                  ? 'bg-[#9e0cca] text-white'
                  : 'bg-transparent text-white hover:bg-purple-500/10'
              }`}
            >
              POINT {tab.id}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      {tabContent.map((content) => (
        <div
          key={content.id}
          className={`transition-opacity duration-300 ${
            activeTab === content.id ? 'opacity-100' : 'opacity-0 hidden'
          }`}
        >
          <div className="max-w-5xl mx-auto bg-black/20 rounded-3xl overflow-hidden border border-[#9e0cca]">
            <div className="flex flex-col md:flex-row items-center p-4 md:p-8 gap-8">
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-4">{content.title}</h2>
                <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                  {content.description}
                </p>
              </div>
              <div className="w-full md:w-1/2 aspect-square max-w-[384px] relative rounded-[50px] overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src={content.imageUrl || ''}
                    alt={`${content.title} illustration`}
                    fill
                    className="object-cover rounded-[50px]"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 384px"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* CTA Button */}
      <div className="text-center mt-8 md:mt-12">
      <Link href="/FormSponsor">
        <button className="px-6 py-3 rounded-full border border-[#9e0cca] hover:bg-purple-500/10 transition-all duration-300 uppercase text-xs md:text-sm tracking-wider">
          BECOME A SPONSOR
        </button>
        </Link>
      </div>
    </div>
  );
};

export default SponsorWhy;