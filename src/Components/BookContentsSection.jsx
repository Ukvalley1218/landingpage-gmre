import React from 'react'
import bookimage from '../assets/heroimges1.png'
import { MdMenuBook } from 'react-icons/md'
import section from '../assets/bgimg.png'
import imagetext from '../assets/countrytext.png'
// ---- COLOR PALETTE USED IN SECTION ----
const COLORS = {
  gold: '#C89B3C',
  goldLight: '#C89B3C',
  goldGradient: 'linear-gradient(90deg,#C89B3C1A 10%, #C89B3C1A 5%)',
  white: '#fff',
  textDark: '#151515',
  textBody: 'rgba(13,13,13,1)',
  background: '#fff',
  buttonShadow: '0 3px 8px rgba(29,26,11,0.13)',
  featureShadow: '0 1px 4px rgba(0,0,0,0.04)'
};

const featuresLeft = [
  "Turns Complex Real Estate Concepts into Simple, Actionable Strategies",
  "Breaks Down 30 Proven Guerrilla Campaigns You Can Deploy Immediately",
  "Teaches the 4T Gifting Model to Elevate Every Marketing Touchpoint"
];

const featuresRight = [
  "Shows How to Use Creativity Instead of Big Budgets to Generate Leads",
  "Reveals Buyer Psychology and Cultural Triggers That Boost Conversions",
  "Designed for UAE Markets Perfect for Developers, Marketers & Agencies"
];

const BookFeaturesSection = () => {
      const ref = sessionStorage.getItem("reference") || "direct";

  return (
    <div
      className="book-features-root -mt-15 xl:-mt-25"
      style={{
        background: COLORS.background,
        padding: "80px 0 60px 0",
        width: "100%",
        textAlign: "center"
      }}
    >
      <style>
        {`
        /* --------- Small screens (phones) --------- */
        @media (max-width: 768px) {
          .book-features-root {
            padding: 40px 0 30px 0 !important;
          }

          .bf-heading {
            font-size: 40px !important;
            line-height: 1.3 !important;
            text-align: center !important;
            padding: 0 15px !important;
            margin-bottom: 16px !important;
          }

          .bf-subheading {
            font-size: 1rem !important;
            line-height: 1.4 !important;
            padding: 0 15px !important;
            margin-bottom: 8px !important;
            max-width: 95vw !important;
            text-align: center !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }

          .bf-content-layout {
            flex-direction: column !important;
            gap: 8px !important;
            padding: 0 15px !important;
            align-items: center !important;
            justify-content: center !important;
          }

          .bf-feature-column {
            align-items: center !important;
            width: 100% !important;
          }

          .bf-feature-box {
            width: 95vw !important;
            max-width: 400px !important;
            height: auto !important;
            min-height: 70px !important;
            padding: 15px 12px !important;
            font-size: 16px !important;
            line-height: 1.4 !important;
            margin-bottom: 12px !important;
          }

          .bf-feature-icon {
            width: 20px !important;
            height: 20px !important;
            min-width: 20px !important;
            min-height: 20px !important;
            font-size: 14px !important;
            margin-right: 12px !important;
            margin-left: 8px !important;
            border-radius: 50% !important;
          }

          .bf-book-image {
            width: 200px !important;
            height: 325px !important;
            order: -1 !important;
            margin: 20px auto !important;
          }

          .bf-book-image img {
            width: 180px !important;
            height: 300px !important;
          }

          .bf-cta-button {
            margin-top: 20px !important;
            padding: 0 15px !important;
          }

          .bf-button {
            font-size: 18px !important;
            padding: 12px 30px !important;
            gap: 10px !important;
          }

          .bf-button svg {
            font-size: 22px !important;
            margin-right: 8px !important;
          }
        }

        /* Extra small screens */
        @media (max-width: 380px) {
          .bf-heading {
            font-size: 1.6rem !important;
            line-height: 1.25 !important;
            text-align: center !important;
          }

          .bf-subheading {
            font-size: 0.9rem !important;
          }

          .bf-feature-box {
            font-size: 15px !important;
            min-height: 65px !important;
            padding: 12px 10px !important;
          }

          .bf-book-image {
            width: 180px !important;
            height: 290px !important;
          }

          .bf-book-image img {
            width: 160px !important;
            height: 270px !important;
          }

          .bf-button {
            font-size: 16px !important;
            padding: 10px 25px !important;
          }
        }

        /* --------- Medium screens (tablets + small desktops: 769–1199px) --------- */
        @media (min-width: 769px) && (max-width: 1199px) {
          .book-features-root {
            padding: 60px 0 50px 0 !important;
          }

          .bf-heading {
            font-size: 40px !important;
            line-height: 1.25 !important;
            text-align: center !important;
            padding: 0 40px !important;
            margin-bottom: 16px !important;
          }

          .bf-subheading {
            font-size: 17px !important;
            line-height: 25px !important;
            max-width: 720px !important;
            margin: 0 auto 18px auto !important;
            text-align: center !important;
          }

          .bf-content-layout {
            flex-direction: column !important;
            max-width: 900px !important;
            margin: 0 auto !important;
            gap: 16px !important;
            padding: 0 40px !important;
            align-items: center !important;
            justify-content: center !important;
          }

          .bf-feature-column {
            align-items: center !important;
            width: 100% !important;
          }

          .bf-feature-box {
            width: 90vw !important;
            max-width: 650px !important;
            height: auto !important;
            font-size: 17px !important;
            line-height: 24px !important;
            margin-bottom: 14px !important;
          }

          .bf-book-image {
            width: 280px !important;
            height: 420px !important;
            order: 0 !important;
            margin: 24px auto 10px auto !important;
          }

          .bf-book-image img {
            width: 260px !important;
            height: 400px !important;
          }

          .bf-cta-button {
            margin-top: 28px !important;
          }
        }

        /* --------- Large screens (real desktop: 1200px+) – original layout --------- */
        @media (min-width: 1200px) {
          .book-features-root {
            padding: 80px 0 60px 0 !important;
          }

          .bf-heading {
            font-size: 53px !important;
            line-height: 58px !important;
            text-align: center !important;
            margin-bottom: 8px !important;
          }

          .bf-subheading {
            font-size: 20px !important;
            line-height: 28px !important;
            max-width: 898px !important;
            margin-bottom: 0px !important;
          }

          .bf-content-layout {
            flex-direction: row !important;
            max-width: 1120px !important;
            gap: 0 !important;
          }

          .bf-feature-column {
            align-items: flex-end !important;
            width: auto !important;
          }

          .bf-feature-box {
            width: 456px !important;
            height: 82px !important;
            font-size: 20px !important;
            line-height: 28px !important;
            margin-bottom: 18px !important;
          }

          .bf-feature-icon {
            width: 24px !important;
            height: 24px !important;
            font-size: 16px !important;
            margin-right: 18px !important;
            margin-left: 10px !important;
            border-radius: 50% !important;
          }

          .bf-book-image {
            width: 340px !important;
            height: 519px !important;
            order: 0 !important;
          }

          .bf-book-image img {
            width: 351px !important;
            height: 535px !important;
          }

          .bf-cta-button {
            margin-top: 15px !important;
          }

          .bf-button {
            font-size: 22px !important;
            padding: 15px 58px !important;
            gap: 14px !important;
          }

          .bf-button svg {
            font-size: 27px !important;
            margin-right: 11px !important;
          }
        }
        `}
      </style>

      {/* Heading */}
 <section
        id="benefits"
        className="relative py-12  lg:py-20 px-4 xl:-mt-35 lg:-mt-25 sm:px-6 sm:-mt-12 lg:px-6 h-auto lg:h-[500px]  "
        style={{
          backgroundImage: `url(${section})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto relative z-10">
          <p className="font-ibmplex text-center text-[#C89B3C] text-[20px] sm:text-[22px] lg:text-[24px] font-bold leading-tight mb-4 lg:mb-5">
            Start Transforming Your Real Estate Marketing Today
          </p>
          <p className="text-[23px] sm:text-[18px] lg:text-[23px] w-full max-w-[1110px] h-auto lg:h-[112px] mx-auto text-center text-white pt-5 px-4">
            Guerrilla marketing is more than a tactic it’s a catalyst for deeper buyer trust, stronger brand recall, and higher sales. Elevate your projects with the unconventional strategies revealed in Guerrilla Marketing in Real Estate and stand out in a competitive market.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 mt-2 lg:mt-0 justify-center px-4">
          <div className="w-full text-center mt-5">
            {/* Buttons Wrapper */}
            <div className="flex flex-wrap justify-center gap-7 mt-10 w-full px-2 sm:px-4 lg:mr-12 lg:pl-1 lg:pr-10">
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
              onClick={() => (window.location.href = `/books/gmre/checkout?type=ebook&reference=${ref}`)}
              className="flex items-center gap-2 rounded-lg bg-white px-6 py-3
              text-black border border-[#C89B3C] font-medium text-[15px] 
              sm:text-[16px] md:text-[18px] hover:bg-[#C89B3C] hover:text-white 
              cursor-pointer transition-colors duration-200 shadow-xl 
              w-full sm:w-auto animate-bounce">
              📥 Get Your Digital Copy Now
            </button>
            </div>
          </div>
        </div>
        <img loading = "lazy"
  src={imagetext}
  alt="Available in India and UAE | Physical & Digital Formats"
  className="mx-auto mt-6 lg:mt-8 lg:px-45 md: px-10 sm:px-30 w-full max-w-[533px] h-auto"
 />

      </section>  
      </div>
      )
}

export default BookFeaturesSection
