import React from 'react';

const SponsorshipPackages = () => {
  const plans = [
    {
      number: 1,
      badge: "BASE",
      podcasts: "5",
      hours1: "+10",
      hours2: "+5k"
    },
    {
      number: 2,
      badge: "STANDARD",
      podcasts: "10",
      hours1: "+20",
      hours2: "+10k"
    },
    {
      number: 3,
      badge: "PREMIUM",
      podcasts: "15",
      hours1: "+30",
      hours2: "+15k"
    }
  ];

  return (
    <div className="min-h-screen bg-transparent text-white p-4 sm:p-6 md:p-8">
      {/* Navigation */}
      <nav className="flex justify-center items-center gap-2 text-xs sm:text-sm uppercase tracking-wider mb-8 sm:mb-10 md:mb-12">
        <span>Sponsors</span>
        <span className="text-[#9e0cca]">X</span>
        <span>Podcast</span>
      </nav>

      {/* Header */}
      <div className="text-center mb-8 sm:mb-12 md:mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif">Sponsorship Packages</h1>
      </div>

      {/* Package Cards */}
      <div className="max-w-xs sm:max-w-2xl md:max-w-3xl mx-auto space-y-6 sm:space-y-8">
        {plans.map((plan, index) => (
          <div key={index} className="bg-[#0A0A0A] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 relative shadow-[0_0_60px_rgba(128,0,255,0.2)]">
            {/* Plan Header */}
            <div className="flex justify-between items-center mb-6 sm:mb-8 md:mb-12">
              <h2 className="text-xl sm:text-2xl font-serif">
                <span className="text-white/80">PLAN</span>{" "}
                <span>{plan.number}</span>
              </h2>
              <span className="bg-[#9e0cca] px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-light">
                {plan.badge}
              </span>
            </div>

            {/* Description */}
            <div className="mb-8 sm:mb-12 md:mb-16">
              <p className="text-base sm:text-lg md:text-xl text-center text-white/90 leading-relaxed">
                Our first plan comes with a comprehensive deal of marketing where you can 
                market your company and gain influence over the market with this
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 divide-x divide-white/20 border-t border-white/10 pt-6 sm:pt-8">
              <div className="flex flex-col items-center px-2 sm:px-4">
                <span className="text-3xl sm:text-5xl md:text-6xl font-light mb-2 sm:mb-3">{plan.podcasts}</span>
                <span className="text-[#9e0cca] text-xs sm:text-sm md:text-base">Podcasts</span>
              </div>
              <div className="flex flex-col items-center px-2 sm:px-4">
                <span className="text-3xl sm:text-5xl md:text-6xl font-light mb-2 sm:mb-3">{plan.hours1}</span>
                <span className="text-[#9e0cca] text-xs sm:text-sm md:text-base">Hours</span>
              </div>
              <div className="flex flex-col items-center px-2 sm:px-4">
                <span className="text-3xl sm:text-5xl md:text-6xl font-light mb-2 sm:mb-3">{plan.hours2}</span>
                <span className="text-[#9e0cca] text-xs sm:text-sm md:text-base">Hours</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      {/* <div className="text-center mt-8 sm:mt-10 md:mt-12">
        <button className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full border border-[#9e0cca] text-[#9e0cca] hover:bg-[#8A00FF]/10 transition-all duration-300 text-xs sm:text-sm tracking-wider">
          READ MY STORY
        </button>
      </div> */}
    </div>
  );
};

export default SponsorshipPackages;