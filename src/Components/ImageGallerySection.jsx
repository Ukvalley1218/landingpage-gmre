import React from 'react';

// Import your images here
import award1 from '../assets/Icon Of UAE 1.png'
import award2 from '../assets/heroimages2.png'
import award3 from '../assets/Awards/40 Under 40 – 2024.jpg'
import award4 from '../assets/Awards/Business Icons of the Year 2025.jpg'
import award5 from '../assets/Awards/Indo Global Awards 2025.jpg'
import award6 from '../assets/Awards/Most Influential CEOs 2025 Awards.jpg'
import award7 from '../assets/Awards/Ph.D. in Guerrilla Marketing.png'
import award8 from '../assets/Awards/Super 30 Visionary Leaders To Watch in 2025.jpg'
import award9 from '../assets/Awards/The Leader Behind An Admirable Company 2025 .jpg'
import award10 from '../assets/Awards/UAE Business Leader of the Year 2025 awards .jpg'
import award11 from '../assets/Awards/World Class Visionaries Leadership Beyond Borders awards.jpg'

const ImageGallerySection = () => {
    const ref = sessionStorage.getItem("reference") || "direct";

  // Award data with labels
const awardsRow1 = [
    { img: award1, label: "Iconic Power Couple of the UAE 2025 by the India Today Group" },
    { img: award2, label: "The Economic Times Indo Global Leaders 2025" },
  ];

  const awardsRow2 = [
    { img: award3, label: "40 Under 40 – 2024" },
    { img: award4, label: "Business Icons of the Year 2025" },
    { img: award5, label: "Indo Global Awards 2025" },
    { img: award6, label: "Most Influential CEOs 2025 Awards" },
    { img: award7, label: "PhD in Guerrilla Marketing" },
    { img: award8, label: "Super 30 Visionary Leaders To Watch in 2025" },
    { img: award9, label: "The Leader Behind An Admirable Company 2025" },
    { img: award10, label: "UAE Business Leader of the Year 2025" },
    { img: award11, label: "World Class Visionaries Leadership Beyond Borders" },
  ];
  return (
    <>
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee 35s linear infinite;
          }

          .marquee-container:hover .marquee-track {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* Awards Section */}
      <section className="py-12 bg-white px-4 sm:px-6 lg:px-8 mt-2">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-8">
            {/* First Row - Static (centered) */}
            <div className="overflow-hidden py-8">
              <div className="flex justify-center gap-6 md:gap-8 px-4 flex-wrap">
                {awardsRow1.map((award, idx) => (
                  <div
                    key={`award-row1-${idx}`}
                    className="flex-shrink-0 w-full max-w-[360px] sm:w-[360px]"
                  >
                    <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                      <div className="h-[240px] md:h-[260px] lg:h-[280px] flex items-center justify-center bg-gray-50">
                        <img loading = "lazy"
                          src={award.img}
                          alt={award.label}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="bg-white px-4 py-4">
                        <p className="text-[14px] md:text-[16px] font-semibold text-[#C89B3C] text-center">
                          {award.label}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Row - Infinite marquee with all 9 images */}
            <div className="marquee-container overflow-hidden w-full py-4">
  <div className="marquee-track flex gap-8">
    {[...Array(2)].map((_, setIndex) => (
      <React.Fragment key={setIndex}>
        {awardsRow2.map((award, idx) => (
          <div
            key={`row2-${setIndex}-${idx}`}
            className="flex-shrink-0 w-[320px]"
          >
            <div className="bg-white rounded-2xl shadow-md overflow-hidden h-[390px] flex flex-col">
              
              {/* Image Area (FIXED HEIGHT) */}
              <div className="h-[330px] flex items-center justify-center bg-gray-50">
                <img
                  loading="lazy"
                  src={award.img}
                  alt={award.label}
                  className="max-w-full w-[370px] max-h-full object-contain"
                />
              </div>

              {/* Text Area (FIXED HEIGHT) */}
              <div className="flex-1 px-4 flex items-center justify-center">
                <p className="text-[15px] font-semibold text-[#C89B3C] text-center leading-tight">
                  {award.label}
                </p>
              </div>

            </div>
          </div>
        ))}
      </React.Fragment>
    ))}
  </div>
</div>

          </div>

          {/* CTA Buttons */}
          <div
            className="
              flex flex-wrap justify-center md:justify-center 
              gap-7 mt-10 w-full px-2 sm:px-4 
              lg:mr-10 lg:pl-1 lg:pr-0
            "
          >
            {/* Hardcopy Button */}
            <button
            onClick={() =>
              (window.location.href = `/books/gmre/checkout?type=hardcopy&reference=${ref}`)
            }
            className="w-full sm:w-auto animate-bounce flex items-center justify-center gap-2 rounded-lg bg-[#C89B3C] px-6 py-3 text-white font-medium text-base sm:text-lg hover:bg-[#5a4311] transition-colors duration-200"
          >
            📘 Get Your Hard Copy Now
          </button>

            {/* eBook Button */}
            <button
              onClick={() =>
                (window.location.href = `/books/gmre/checkout?type=ebook&reference=${ref}`)
              }
              className="flex items-center gap-2 rounded-lg bg-white px-6 py-3
                text-black border border-[#C89B3C] font-medium text-[15px] 
                sm:text-[16px] md:text-[18px] hover:bg-[#C89B3C] hover:text-white 
                cursor-pointer transition-colors duration-200 shadow-xl 
                w-full sm:w-auto animate-bounce"
            >
              📥 Get Your Digital Copy Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImageGallerySection;
