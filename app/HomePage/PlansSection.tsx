import Link from "next/link";
import React from "react";

interface PricingTier {
  id: number;
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    id: 1,
    name: "Silver",
    price: "$1000",
    period: "per episode",
    features: [
      "30-second mid-roll spot",
      "Social media mention",
      "Logo in show notes",
      "Basic analytics report",
      "1 revision included",
    ],
  },
  {
    id: 2,
    name: "Gold",
    price: "$2500",
    period: "per episode",
    features: [
      "60-second mid-roll spot",
      "2x Social media mentions",
      "Featured logo placement",
      "Detailed analytics dashboard",
      "Host-read ad script",
      "2 revisions included",
      "Priority support",
    ],
    isPopular: true,
  },
  {
    id: 3,
    name: "Platinum",
    price: "$5000",
    period: "per episode",
    features: [
      "90-second multi-spot placement",
      "Full social media campaign",
      "Custom segment sponsorship",
      "Live mention by host",
      "Advanced analytics & reporting",
      "Unlimited revisions",
      "Dedicated account manager",
      "Custom integration options",
    ],
  },
];

const PlansSection: React.FC = () => {
  return (
    <div className="min-h-screen text-white py-20 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-10">
          <p className="text-sm md:text-base uppercase tracking-wider text-gray-400">
            SPONSORS <span className="text-[#9e0cca]">×</span> PODCAST
          </p>
          <h1 className="md:pb-6 text-3xl md:text-5xl font-serif max-w-2xl mx-auto leading-tight">
            Get more eyeballs on your business through sponsoring us
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative bg-[#0c0014] p-8 rounded-2xl border transition-all duration-300
                ${tier.isPopular 
                  ? 'border-[#9e0cca] shadow-xl hover:shadow-purple-500/20 scale-105 md:scale-110' 
                  : 'border-[#9e0cca] shadow-xl hover:shadow-purple-500/20'}`}
            >
              {tier.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#9e0cca] text-sm px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-serif">{tier.name}</h2>
                
                <div>
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className="text-gray-400 ml-2">{tier.period}</span>
                </div>
                
                <ul className="space-y-4">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-purple-500 mt-1">•</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/SponsorsPage" className="block w-full">
                <button className={`w-full px-6 py-3 rounded-full border border-[#9e0cca] transition-all duration-300 uppercase text-xs tracking-wider 
                  ${tier.isPopular 
                    ? 'hover:bg-[#9e0cca] bg-purple-500/10 ' 
                    : 'hover:bg-[#9e0cca] bg-purple-500/10'}`}>
                  Get Started
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        
      </div>

      {/* Quote Section */}
      <div className="pt-32 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <blockquote className="text-3xl md:text-5xl font-serif leading-tight">
            <span className="text-[#9e0cca]">&quot;</span>
            STEP INTO THE REALM OF INTELLECTUALISM AND SUCCESS BE HONED AND SHARP IN THE PURSUIT OF YOUR WAY
            <span className="text-[#9e0cca]">&quot;</span>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default PlansSection;
