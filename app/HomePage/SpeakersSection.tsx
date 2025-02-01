import Image from "next/image";
import React from "react";
import speakersData, { Speaker } from '../../data/speakersData';

type SpeakerCardProps = Omit<Speaker, 'id'>;

const SpeakerCard: React.FC<SpeakerCardProps> = ({
  firstName,
  lastName,
  image,
  bio,
  keyTraits
}) => (
  <div
    className="bg-black/30 h-auto p-4 md:p-6 mb-14 backdrop-blur-sm relative rounded-[20px] overflow-hidden flex items-center 
                  shadow-[0_0_15px_rgba(158,12,202,0.3)] hover:shadow-[0_0_25px_rgba(158,12,202,0.5)] transition-shadow duration-300"
  >
    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 w-full">
      <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
        <div className="relative w-full h-full">
          <Image
            src={image}
            alt={`${firstName} ${lastName}`}
            className="rounded-lg object-cover"
            fill
          />
        </div>
      </div>

      <div className="flex-1">
        <div className="text-white text-xl md:text-2xl text-center md:text-left">
          <span className="text-[#9E0CCA]">{firstName}</span> {lastName}
        </div>
        <p className="text-white/80 text-sm md:text-base mt-2 text-center md:text-left">
          {bio}
        </p>
        <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
          {keyTraits.map((trait, index) => (
            <span
              key={index}
              className="bg-[#9E0CCA]/20 text-[#9E0CCA] px-3 py-1 rounded-full text-sm"
            >
              {trait.trait}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

interface SpeakersSectionProps {
  speakers?: Speaker[];
}

const SpeakersSection: React.FC<SpeakersSectionProps> = ({ speakers = speakersData }) => {
  return (
    <div className="space-y-6 mt-10">
      <div className="overflow-hidden bg-transparent py-8">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(20)
            .fill(0)
            .map((_, index) => (
              <React.Fragment key={index}>
                <span className="text-white text-2xl md:text-[40px] font-normal font-serif uppercase mx-2">
                  Speakers
                </span>
                <span className="text-[#9E0CCA] text-2xl md:text-[40px] font-normal font-serif uppercase mx-2">
                  .
                </span>
              </React.Fragment>
            ))}
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        {speakers.map((speaker) => (
          <SpeakerCard key={speaker.id} {...speaker} />
        ))}
      </div>
    </div>
  );
};

export default SpeakersSection;