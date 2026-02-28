import React from 'react';
import bookimage from '../assets/heroimges1.png';
import { MdMenuBook } from 'react-icons/md';
import bookImage from '../assets/whatisinside.png'

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
  featureShadow: '0 1px 4px rgba(0,0,0,0.04)',
};

const featuresLeft = [
  'Turns Complex Real Estate Concepts into Simple, Actionable Strategies.',
  'Breaks Down 30 Proven Guerrilla Campaigns You Can Deploy Immediately.',
  'Teaches the 4T Gifting Model to Elevate Every Marketing Touchpoint.',
];

const featuresRight = [
  'Shows How to Use Creativity Instead of Big Budgets to Generate Leads.',
  'Reveals Buyer Psychology and Cultural Triggers That Boost Conversions.',
  'Designed for UAE Markets Perfect for Developers, Marketers & Agencies.',
];

const BookFeaturesSection = () => {
  const ref = sessionStorage.getItem("reference") || "direct";

  return (
    <div
      className="book-features-root"
      style={{
        background: COLORS.background,
        padding: '80px 0 60px 0',
        width: '100%',
        textAlign: 'center',
        overflowX: 'hidden',
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
            max-width: 100% !important;
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
            margin-top: 30px !important;
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

        /* --------- Medium screens (tablets: 769–1199px) --------- */
        @media (min-width: 769px) and (max-width: 1199px) {
          .book-features-root {
            padding: 60px 0 50px 0 !important;
          }

          .bf-heading {
            font-size: 46px !important;
            line-height: 1.25 !important;
            text-align: center !important;
            padding: 0 30px !important;
            margin-bottom: 12px !important;
          }

          .bf-subheading {
            font-size: 18px !important;
            line-height: 26px !important;
            max-width: 700px !important;
            margin: 0 auto 12px auto !important;
            text-align: center !important;
          }

          /* IMPORTANT: stack content on tablets / iPad Pro */
          .bf-content-layout {
            flex-direction: column !important;
            max-width: 900px !important;
            width: 100% !important;
            margin: 0 auto !important;
            gap: 16px !important;
            padding: 0 30px !important;
            align-items: center !important;
            justify-content: center !important;
          }

          .bf-feature-column {
            align-items: center !important;
            width: 100% !important;
          }

          .bf-feature-box {
            width: 100% !important;
            max-width: 600px !important;
            height: auto !important;
            font-size: 18px !important;
            line-height: 26px !important;
            margin-bottom: 14px !important;
          }

          .bf-book-image {
            width: 260px !important;
            height: 400px !important;
            order: 0 !important;
            margin: 25px auto !important;
          }

          .bf-book-image img {
            width: 240px !important;
            height: 380px !important;
          }

          .bf-cta-button {
            margin-top: 70px !important;
          }
        }

        /* --------- Large screens (desktop: 1200px+) --------- */
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
            margin: 0 auto !important;
            gap: 0 !important;
          }

          .bf-feature-column {
            align-items: flex-start !important;
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
            margin-top: 30px !important;
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
      <div style={{ marginBottom: 14 }}>
        <div id='about-book'
          className="bf-heading"
          style={{
            fontFamily: 'Tinos, serif',
            fontWeight: 700,
            color: COLORS.textDark,
            maxWidth: '1153px',
            margin: '0 auto',
          }}
        >
          What Is{' '}
          <span style={{ color: COLORS.gold }}>
            Guerrilla Marketing In Real Estate
            <br /> Book
          </span>
          <span style={{ color: COLORS.textDark }}> All About?</span>
        </div>
      </div>

      {/* Subheading */}
      <div
        className="bf-subheading"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400,
          color: COLORS.textBody,
          letterSpacing: '0px',
          textAlign: 'center',
          margin: '0 auto',
        }}
      >
        A breakthrough guide that reveals how unconventional, low-cost marketing
        can drive real estate sales, build trust, and outperform traditional
        advertising.
      </div>

      {/* Features & Book Layout */}
      <div
        className="bf-content-layout mb-15"
        style={{
          display: 'flex',
          margin: '0 auto',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: '100%',
        }}
      >
        {/* Left Feature List */}
        <div
          className="bf-feature-column lg:mb-[-50px] text-left"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          {featuresLeft.map((feature, idx) => (
            <div
              className="bf-feature-box"
              key={idx}
              style={{
                background: COLORS.goldGradient,
                borderRadius: 16,
                borderLeft: `4px solid ${COLORS.goldLight}`,
                display: 'flex',
                alignItems: 'center',
                boxShadow: COLORS.featureShadow,
                fontFamily: 'Inter, sans-serif',
                color: COLORS.textBody,
                fontWeight: 400,
              }}
            >
              <span
                className="bf-feature-icon"
                style={{
                  width: 24,
                  height: 24,
                  minWidth: 24,
                  minHeight: 24,
                  background: COLORS.goldLight,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: COLORS.white,
                  fontWeight: 700,
                  fontSize: 16,
                  marginRight: 18,
                  marginLeft: 10,
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                    fill="#C89B3C"
                  />
                  <path
                    d="M17.3385 8L10.0052 15.3333L6.67188 12"
                    stroke="white"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Book Image */}
        <div
          className="bf-book-image"
          style={{
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 38,
          }}
        >
           <img loading = "lazy"
                src={bookImage}
                alt="Guerrilla Marketing in Real Estate book"
                className="relative h-[477px] w-[300px] sm:w-[300px] ml-0 justify-center  object-cover "
              />
        </div>

        {/* Right Feature List */}
        <div
          className="bf-feature-column lg:mb-[-50px] text-left"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          {featuresRight.map((feature, idx) => (
            <div
              className="bf-feature-box"
              key={idx}
              style={{
                background: COLORS.goldGradient,
                borderRadius: 16,
                borderLeft: `4px solid ${COLORS.goldLight}`,
                display: 'flex',
                alignItems: 'center',
                boxShadow: COLORS.featureShadow,
                fontFamily: 'Inter, sans-serif',
                color: COLORS.textBody,
                fontWeight: 400,
              }}
            >
              <span
                className="bf-feature-icon"
                style={{
                  width: 24,
                  height: 24,
                  minWidth: 24,
                  minHeight: 24,
                  background: COLORS.goldLight,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: COLORS.white,
                  fontWeight: 700,
                  fontSize: 16,
                  marginRight: 18,
                  marginLeft: 10,
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
                    fill="#C89B3C"
                  />
                  <path
                    d="M17.3385 8L10.0052 15.3333L6.67188 12"
                    stroke="white"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Buttons */}
    <div
  className="
    flex flex-wrap justify-center gap-4 -mt-15      /* desktop */
    bf-cta-button
  "
>

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
  );
};

export default BookFeaturesSection;
