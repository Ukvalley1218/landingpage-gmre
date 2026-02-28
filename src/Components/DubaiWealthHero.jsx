"use client";
import React from 'react';
import bookimage from '../assets/bookimg.png';
import bgimage from '../assets/bgimage.jpg';
import bookimages1 from '../assets/heroimage.webp';

// ---- COLOR PALETTE USED IN SECTION ----
const COLORS = {
  primary: '#5586B0',
  bannerGradient: 'linear-gradient(90deg, #FFFECE 0%, #C89B3C 100%)',
  iconBg: 'rgba(85,134,176,0.12)',
  cardBg: 'rgba(255,255,255,0.8)',
  cardText: 'rgba(32,52,74,1)',
  btnBg: '#C89B3C',
  btnText: 'rgba(255,255,255,1)',
  btnBorder: '#406890',
  subtitle: '#0D0D0D',
  heading: '#C89B3C',
  icon: 'black',
};
const messages = [
  { text: "Limited Stock", icon: "🛒" },
  { text: "Fast Delivery", icon: "🚚" },
  { text: "Bestseller Book", icon: "⭐" },
  { text: "10,000+ Readers", icon: "📚" },
  { text: "Ships Worldwide", icon: "🌍" },
  { text: "Top Rated", icon: "🔥" },
  { text: "Entrepreneur's Pick", icon: "💼" },
  { text: "Instant eBook Access", icon: "⚡" }
];

const MarqueeContent = () => {
  return (
    <>
      {messages.map((item, index) => (
        <span
          key={index}
          className="inline-flex items-center text-white   mx-6 font-medium hover:-translate-y-0.5 transition-transform whitespace-nowrap"
        >
          <span className="text-lg">{item.icon}</span>
          <span className="ml-2 font-semibold">{item.text}</span>
        </span>
      ))}
    </>
  );
};
// ---- END COLOR PALETTE ----

const CartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <g>
      <circle cx="9.5" cy="9.5" r="9.5" fill="rgba(255,255,255,0)" />
      <path
        d="M3 5H4.5L6.7 13.1C6.84877 13.6882 7.37675 14.1001 7.98701 14.1H15.35C15.9144 14.0991 16.4125 13.729 16.5567 13.1791L18 7.75H5.1"
        stroke="#2e2206"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8.45" cy="16" r="1.05" fill="#2e2206" />
      <circle cx="15.1" cy="16" r="1.05" fill="#2e2206" />
      <rect x="9.3" y="8" width="1.5" height="3.1" rx="0.7" fill="#2e2206" />
    </g>
  </svg>
);

export default function DubaiWealthHero() {
  const ref = sessionStorage.getItem("reference") || "direct";

  return (
    <div className="min-h-screen -mb-10 relative">
      <style>{`
        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
          .marquee-mobile {
            font-size: 13px !important;
            margin-left: 7px !important;
            margin-right: 7px !important;
          }
          .hero-heading {
            font-size: 2rem !important;
            line-height: 2.35rem !important;
            margin-bottom: 16px !important;
            padding: 0 10px !important;
          }
          .hero-subtitle {
            font-size: 1rem !important;
            line-height: 1.4rem !important;
            width: 95vw !important;
            max-width: 100% !important;
            word-break: break-word;
            padding: 0 10px !important;
            margin-bottom: 24px !important;
          }
          .feature-icons-row {
            flex-direction: column !important;
            align-items: center !important;
            gap: 12px !important;
            padding: 0 10px !important;
            margin-bottom: 24px !important;
          }
          .feature-card {
            width: 95vw !important;
            max-width: 320px !important;
            height: 60px !important;
            padding: 12px 16px !important;
            margin: 0 auto !important;
            gap: 12px !important;
          }
          .feature-card span:last-child {
            font-size: 16px !important;
            width: auto !important;
            flex: 1 !important;
          }
          .hero-cta-row {
            flex-direction: column !important;
            gap: 12px !important;
            padding: 0 10px !important;
            margin-bottom: 30px !important;
          }
          .hero-btn, .hero-btn-trailer {
            width: 95vw !important;
            max-width: 320px !important;
            font-size: 16px !important;
            height: 48px !important;
            border-radius: 8px !important;
            margin: 0 auto !important;
          }
          .book-row {
            min-height: 300px !important;
            height: auto !important;
            margin-bottom: 30px !important;
            padding: 0 10px !important;
          }
          .book-viewer {
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
          }
          .book-viewer img {
            width: 268px !important;
            height: 350px !important;
            object-fit: cover !important;
          }
          .rating-badge {
            position: static !important;
            margin: 20px auto 0 auto !important;
            display: flex !important;
            justify-content: center !important;
            transform: none !important;
            padding: 12px 20px 8px 20px !important;
          }
          .rating-badge span:first-child {
            font-size: 18px !important;
          }
          .rating-badge span:last-child {
            font-size: 14px !important;
          }
          
          /* Reduced background image spread for mobile */
          .bg-image-container {
            background-size: 60% !important;
          }
          
          /* Reduced book blur background for mobile */
          .book-blur-bg {
            width: 300px !important;
            height: 300px !important;
            filter: blur(30px) !important;
          }
        }
          
        /* Extra small devices */
        @media (max-width: 380px) {
          .hero-heading {
            font-size: 1.8rem !important;
            line-height: 2.1rem !important;
          }
          .hero-subtitle {
            font-size: 0.9rem !important;
            line-height: 1.3rem !important;
          }
          .feature-card {
            height: 55px !important;
            padding: 10px 14px !important;
          }
          .feature-card span:last-child {
            font-size: 15px !important;
          }
          .hero-btn, .hero-btn-trailer {
            height: 45px !important;
            font-size: 15px !important;
          }
          .book-viewer img {
            width: 180px !important;
            height: 320px !important;
          }
          
          /* Further reduced background for extra small screens */
          .bg-image-container {
            background-size: 70% !important;
          }
          
          .book-blur-bg {
            width: 250px !important;
            height: 250px !important;
            filter: blur(25px) !important;
          }
        }

        /* iPhone SE Specific Button Styles Only (320px-375px) */
        @media (max-width: 375px) {
          .feature-card {
            width: 239px !important;
            max-width: 280px !important;
            height: 50px !important;
            padding: 10px 12px !important;
            gap: 10px !important;
          }
          .feature-card span:last-child {
            font-size: 14px !important;
          }
          .feature-card span:first-child {
            min-width: 28px !important;
            min-height: 28px !important;
            font-size: 16px !important;
          }
          .hero-btn, .hero-btn-trailer {
            width: 239px !important;
            max-width: 280px !important;
            height: 42px !important;
            font-size: 14px !important;
            margin: 0 auto !important;
          }
        }

        /* Desktop styles */
        @media (min-width: 769px) {
          .hero-heading {
            font-size: 65px !important;
            line-height: normal !important;
          }
          .hero-subtitle {
            font-size: 18px !important;
            line-height: 28px !important;
            width: 890px !important;
          }
          .feature-icons-row {
            flex-direction: row !important;
            gap: 24px !important;
          }
          .feature-card {
            width: 270px !important;
            height: 72px !important;
          }
          .hero-cta-row {
            flex-direction: row !important;
            gap: 16px !important;
          }
          .hero-btn, .hero-btn-trailer {
            width: 265px !important;
            height: 52px !important;
          }
          .book-viewer img {
            width: 451px !important;
            height: 600px !important;
          }
          .rating-badge {
            position: absolute !important;
            bottom: 24px !important;
            right: -40px !important;
          }
          
          /* Desktop background settings */
          .bg-image-container {
             background-size: cover !important;
          }
        }

        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          min-width: 200%;
          animation: marquee 15s linear infinite;
        }
      `}</style>

      {/* Limited Stock Banner */}
       <div className="flex items-center gap-2 text-[14px] sm:text-[16px] md:text-[18px] font-medium overflow-hidden">
           <div className="flex animate-marquee items-center gap-2 text-[14px] sm:text-[16px] md:text-[18px] font-medium overflow-hidden py-2 bg-[#C89B3C]">
    {[...Array(3)].map((_, i) => (
      <MarqueeContent key={i} />
    ))}
  </div>
  
  <style>{`
    @keyframes marquee {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-33.333%);
      }
    }

    .animate-marquee {
      animation: marquee 25s linear infinite;
    }

    .animate-marquee:hover {
      animation-play-state: paused;
    }
  `}</style>
</div>

      {/* Background Image Section */}
      <div
        className="w-full h-[820px] absolute bg-image-container"
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: '0.08',
        }}
      />

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto pt-12 md:py-8 lg:py-16 text-center relative z-10 px-4">
        {/* HEADING */}
        <div className="w-full flex justify-center">
          <h1
            className="
              hero-heading
              font-bold text-[#0D0D0D] mb-6
              text-2xl sm:text-3xl md:text-4xl lg:text-[50px]
              max-w-[1183px] mx-auto text-center
            "
            style={{ fontFamily: 'Tinos, serif' }}
          >
            The Book That’s{' '}
            <span style={{ color: COLORS.heading }}>
              Quietly Reshaping Real Estate Marketing{' '}
            </span>
            In The UAE
          </h1>
        </div>

        {/* SUBTITLE */}
        <div className="mt-4 md:mt-7">
          <p
            className="
              hero-subtitle
              mx-auto text-center capitalize mb-4
              text-sm sm:text-base md:text-lg lg:text-[18px]
              max-w-[95%] md:max-w-[720px] lg:max-w-[890px]
            "
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 400,
              letterSpacing: '-0.45px',
              color: COLORS.subtitle,
            }}
          >
            A groundbreaking guide revealing 30 unconventional guerrilla marketing
            strategies that help developers cut costs, boost sales, and emotionally
            connect with the UAE’s multicultural buyer segments.
          </p>
        </div>

        {/* FEATURE BOXES */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mb-5 px-2 feature-icons-row  lg: mt-10">
          {/* Box 1 */}
          <div
            className="
              feature-card
              flex items-center gap-2 sm:gap-3 px-0 sm:px-2 py-3 sm:py-4 lg:pt-2
              rounded-xl bg-white shadow-lg
              w-full sm:w-[90%] md:w-[90%] lg:w-auto
            "
          >
            <span className="w-12 h-12 rounded-full bg-[#C89B3C33] flex items-center justify-center flex-shrink-0">
              <svg
                className="w-12 h-12"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"
                  fill="#C89B3C"
                  fillOpacity="0.2"
                />
                <path
                  d="M19.6031 11.9137C19.6396 11.8399 19.696 11.7778 19.7659 11.7344C19.8359 11.691 19.9166 11.668 19.9989 11.668C20.0812 11.668 20.1619 11.691 20.2319 11.7344C20.3018 11.7778 20.3582 11.8399 20.3947 11.9137L22.3197 15.8129C22.4465 16.0695 22.6337 16.2916 22.8653 16.4599C23.0968 16.6283 23.3657 16.738 23.6489 16.7795L27.9539 17.4095C28.0355 17.4214 28.1121 17.4558 28.1751 17.5089C28.2382 17.562 28.2851 17.6317 28.3106 17.7101C28.3361 17.7884 28.3391 17.8724 28.3194 17.9524C28.2996 18.0324 28.2579 18.1053 28.1989 18.1629L25.0856 21.1945C24.8802 21.3946 24.7266 21.6416 24.6379 21.9142C24.5492 22.1869 24.5281 22.477 24.5764 22.7595L25.3114 27.0429C25.3258 27.1244 25.317 27.2083 25.286 27.2851C25.255 27.3619 25.203 27.4284 25.136 27.477C25.069 27.5257 24.9897 27.5545 24.9071 27.5603C24.8245 27.566 24.742 27.5485 24.6689 27.5095L20.8206 25.4862C20.567 25.3531 20.2849 25.2835 19.9985 25.2835C19.7121 25.2835 19.43 25.3531 19.1764 25.4862L15.3289 27.5095C15.2558 27.5482 15.1734 27.5656 15.0909 27.5598C15.0085 27.5539 14.9293 27.525 14.8625 27.4764C14.7956 27.4278 14.7438 27.3614 14.7128 27.2847C14.6818 27.2081 14.6729 27.1243 14.6872 27.0429L15.4214 22.7604C15.4699 22.4777 15.4489 22.1874 15.3602 21.9146C15.2715 21.6418 15.1177 21.3947 14.9122 21.1945L11.7989 18.1637C11.7394 18.1062 11.6972 18.0332 11.6772 17.9529C11.6572 17.8727 11.6601 17.7884 11.6856 17.7097C11.7112 17.631 11.7583 17.5611 11.8216 17.5079C11.885 17.4547 11.962 17.4203 12.0439 17.4087L16.3481 16.7795C16.6316 16.7383 16.9009 16.6288 17.1327 16.4604C17.3645 16.292 17.552 16.0698 17.6789 15.8129L19.6031 11.9137Z"
                  stroke="#C89B3C"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>

            <span
              className="font-inter text-sm sm:text-base md:text-[16px] lg:text-[17px] text-gray-800 font-normal flex-1 lg:w-[193px] lg:h-[40px]"
              style={{ letterSpacing: '-0.15px' }}
            >
              30 Guerrilla Campaign Blueprints
            </span>
          </div>

          {/* Box 2 */}
          <div
            className="
              feature-card
              flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-3 sm:py-4
              rounded-xl bg-white shadow-lg
              w-full sm:w-[90%] md:w-[70%] lg:w-auto
            "
          >
            <span className="w-14 h-14 sm:w-12 sm:h-12 rounded-full bg-[#C89B3C33] flex items-center justify-center flex-shrink-0">
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#C89B3C"
                  d="M12 22q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.262 6.913T12 22m0-2.1q2.6-.825 4.3-3.3t1.7-5.5V6.375l-6-2.25l-6 2.25V11.1q0 3.025 1.7 5.5t4.3 3.3m0-7.9"
                />
              </svg>
            </span>

            <span className="font-inter text-sm sm:text-base md:text-[17px] py-1 lg:text-[17px] text-gray-800 font-normal flex-1 lg:w-[198px] lg:h-[37px] text-center">
              UAE-Focused Insights
            </span>
          </div>

          {/* Box 3 */}
          <div
            className="
              feature-card
              flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-0 sm:py-4
              rounded-xl bg-white shadow-lg 
              w-full sm:w-[90%] md:w-[70%] lg:w-auto
            "
          >
            <span className="w-14 h-14 sm:w-12 sm:h-12 rounded-full bg-[#C89B3C33] flex items-center justify-center flex-shrink-0">
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#C89B3C"
                  d="M21.92 6.62a1 1 0 0 0-.54-.54A1 1 0 0 0 21 6h-5a1 1 0 0 0 0 2h2.59L13 13.59l-3.29-3.3a1 1 0 0 0-1.42 0l-6 6a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L9 12.41l3.29 3.3a1 1 0 0 0 1.42 0L20 9.41V12a1 1 0 0 0 2 0V7a1 1 0 0 0-.08-.38"
                />
              </svg>
            </span>

            <span className="font-inter text-sm sm:text-base md:text-[17px] lg:text-[17px] text-gray-800 font-normal flex-1 text-center lg:w-[198px] lg:h-[45px] -mt-1">
              For Developers &amp; Marketers
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap animate-bounce sm:mt-12 justify-center gap-4 mt-10 lg:mt-[60px]">
          {/* Hardcopy Button */}
          <button
            onClick={() =>
              (window.location.href = `/books/gmre/checkout?type=hardcopy&reference=${ref}`)
            }
            className="flex items-center justify-center gap-2 cursor-pointer rounded-lg bg-[#C89B3C] px-6 py-3 text-white font-medium text-[18px] hover:bg-[#5a4311] shadow-lg"
          >
            📘 Get Your Hard Copy Now
          </button>


          {/* eBook Button */}
          <button
            onClick={() =>
              (window.location.href = `/books/gmre/checkout?type=ebook&reference=${ref}`)
            }
            className="flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-[#C89B3C] border border-[#C89B3C] font-medium text-[18px] hover:bg-[#C89B3C] hover:text-white transition-colors duration-200 shadow-lg"
          >
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M7.238 3.044C5.652 2.182 3.75 3.32 3.75 5.033v13.934c0 1.714 1.902 2.851 3.488 1.989l12.812-6.967c1.6-.87 1.6-3.108 0-3.977zM2.25 5.033c0-2.905 3.167-4.687 5.705-3.306l12.812 6.967c2.644 1.438 2.644 5.174 0 6.612L7.955 22.273c-2.538 1.38-5.705-.4-5.705-3.306z" clip-rule="evenodd" /></svg> */}
            <span>📥  Get Your Digital Copy Now</span>
          </button>
        </div>

        {/* Mobile / Tablet Book Image */}
        <section className="w-full md:mt-15 lg:hidden">
          <div className="flex justify-center sm:-mt-10 ">
            <img loading = "lazy"
              src={bookimages1}
              alt="Book preview"
              className="
                lg:w-full 
                lg:h-[600px]
                sm:w-[760px] sm:h-[300px]
                sm:max-w-[400px] 
                md:max-w-[480px] md: -mt-10
                object-contain
              "
            />
          </div>
        </section>

        {/* Desktop Book Image */}
        <section className="relative w-full lg: -mt-1 -mb-10   hidden lg:block">
          {/* Top background area */}


          {/* Full-height area that contains rest of section content (if any) */}
          <div className="w-full bg-white pt-0" />

          {/* ABSOLUTE centered image (desktop only) */}
          {/* <div
            className="
              absolute left-[55%] -translate-x-1/2 -translate-y-1/2
              top-[30%] w-[926px]
              pl-2 
            "
          >
            <img loading = "lazy"
              src={bookimages1}
              alt="Book preview"
              className="
                max-w-[604px]
                h-[630px] md: mt-5 md: pt-20
                object-contain
              "
            />
          </div> */}   <div className="book-row" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            minHeight: '500px',
            position: 'relative',
          }}>
            <div className="book-viewer lg:mb-12 " style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>


              <img loading = "lazy"
                src={bookimages1}
                alt="Dubai Rental Wealth Simplified Book"
                style={{
                  objectFit: 'cover',
                  borderRadius: '18px',
                  position: 'relative',
                  zIndex: 1,
                  boxShadow: 'none',
                  maxWidth: '700px',
                  width: '100%',
                  display: 'block',
                  margin: '0 auto',
                }}
              />



            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
