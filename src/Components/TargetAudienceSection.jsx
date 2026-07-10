import React from "react";
 import { Building2, Users, Target, Globe, Shield,  GraduationCap } from 'lucide-react';

// ---- COLOR PALETTE USED IN SECTION ----
const COLORS = {
  gold: '#C89B3C',
  goldLight: 'rgba(85, 134, 176, 0.1)',
  goldLighter: 'rgba(85, 134, 176, 0.05)',
  goldBorder: 'rgba(85, 134, 176, 0.2)',
  white: '#fff',
  textDark: '#111',
  textHeading: '#232323',
  textBody: '#444',
  textFeatures: '#222',
  textNote: 'rgb(85, 134, 176)',
  background: '#FAF9F6',
  cardShadow: '0px 8px 20px rgba(0,0,0,0.10)',
  iconBg: 'rgba(85, 134, 176, 0.1)'
};

const BENEFIT_CARDS = [


 {
  icon: <Building2 size={28} color="#C89B3C" strokeWidth={1.5} />,
  heading: "Real Estate Developers",
  description: "Use innovative, low-cost campaigns to increase project visibility and boost qualified leads.",
  points: [
    "Budget-efficient marketing",
    "Higher campaign recall",
    "Stronger buyer engagement",
  ],
},
{
  icon: <Users size={28} color="#C89B3C" strokeWidth={1.5} />,
  heading: "Marketing & Sales Teams",
  description: "Enhance conversions using creative touchpoints and behaviour-driven strategies.",
  points: [
    "Improved lead nurturing",
    "Emotion-based messaging",
    "Better funnel performance",
  ],
},
{
  icon: <Target size={28} color="#C89B3C" strokeWidth={1.5} />,
  heading: "Real Estate Agencies & Brokers",
  description: "Stand out in a crowded market with unconventional, hyperlocal tactics.",
  points: [
    "Stronger personal branding",
    "Faster lead generation",
    "Increased referrals",
  ],
},
{
  icon: <Globe size={28} color="#C89B3C" strokeWidth={1.5} />,
  heading: "Property Launch & Branding Teams",
  description: "Design memorable activations that elevate project positioning and drive footfall.",
  points: [
    "Experiential campaigns",
    "High-impact storytelling",
    "Community-based engagement",
  ],
},
{
  icon: <Shield size={28} color="#C89B3C" strokeWidth={1.5} />,
  heading: "Entrepreneurs & PropTech Startups",
  description: "Apply guerrilla techniques to disrupt traditional markets and attract early adopters.",
  points: [
    "Differentiated market entry",
    "Cost-effective outreach",
    "Viral campaign potential",
  ],
},
{
  icon: <GraduationCap size={28} color="#C89B3C" strokeWidth={1.5} />,
  heading: "Marketing Students & Researchers",
  description: "Gain deep insight into real world guerrilla strategies, marketing psychology, and UAE buyer behaviour.",
  points: [
    "Research-backed frameworks",
    "Practical case studies",
    "Industry-ready learning",
  ],
}
];

export default function TargetAudienceSection() {
    const ref = sessionStorage.getItem("reference") || "direct";

  return (
    <div className="w-full bg-[#FAF9F6] py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 px-4">
          Who Is <span className="text-[#C89B3C]">Guerrilla Marketing In Real Estate </span>Book For?
        </h2>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-gray-600 text-center max-w-4xl mx-auto mb-12 px-4">
A practical guide designed for professionals and investors who want smarter, more creative, and more cost-effective ways to market and sell real estate in the UAE and beyond.        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 mb-12">
          {BENEFIT_CARDS.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 bg-white rounded-2xl shadow-lg border-l-4 border-[#C89B3C] p-5 sm:p-7 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-14 h-14 sm:w-14 sm:h-14 rounded-xl bg-[#F3EBDC] flex items-center justify-center">
                {card.icon}
              </div>

              {/* Text Content */}
              <div className="flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 leading-tight">
                  {card.heading}
                </h3>

                <p className="text-[18px] sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-3 sm:mb-4">
                  {card.description}
                </p>

                <ul className="space-y-1.5 sm:space-y-2 text-gray-700 text-[18px] sm:text-base lg:text-lg">
                  {card.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#C89B3C] text-lg leading-none mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Container Image */}
      <div className="relative w-[1202px] h-[153px] mb-10">
        {/* Main quote box */}
        <div className="w-full h-full bg-black rounded-2xl flex flex-col items-center justify-center px-12 py-8 shadow-2xl">
          {/* Quote text */}
          <p className="text-white text-center italic text-[27px] font-light leading-relaxed mb-4">
            Guerrilla marketing isn't about bigger budgets it's about creating unforgettable moments that turn buyers into loyal believers.
          </p>
          
          {/* Author name */}
          <p className="text-yellow-500 font-semibold text-lg">
            — Dhiraj Jain
          </p>
        
        {/* Red arrow pointing down */}
        
      </div>
    </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-bounce mt-20">
          {/* Hardcopy Button */}
          <button
            onClick={() =>
              (window.location.href = `/books/gmre/checkout?type=hardcopy&reference=${ref}`)
            }
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-[#C89B3C] px-6 py-3 text-white font-medium text-base sm:text-lg hover:bg-[#5a4311] transition-colors duration-200"
          >
            📘 Get Your Hard Copy Now
          </button>

          {/* eBook Button */}
          <button
            onClick={() =>
              (window.location.href = `/books/gmre/checkout?type=ebook&reference=${ref}`)
            }
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-[#C89B3C] border-2 border-[#C89B3C] font-medium text-base sm:text-lg hover:bg-[#C89B3C] hover:text-white transition-colors duration-200"
          >
            📥 Get Your Digital Copy Now
          </button>
        </div>
      </div>
    </div>
  );
}