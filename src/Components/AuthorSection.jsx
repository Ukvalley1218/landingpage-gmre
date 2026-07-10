import React from 'react'
import mainimage from '../assets/mainimage.png'

// ---- COLOR PALETTE USED IN SECTION ----
const COLORS = {
  gold: '#C89B3C',
  goldLight: '#FFD700',
  goldGradient: 'radial-gradient(circle at 50% 63%, rgb(85, 134, 176) 75%, rgb(85, 134, 176) 100%)',
  white: '#fff',
  black: '#2C548A',
  textDark: '#151515',
  background: '#fff'
};

// ---- END COLOR PALETTE ----

const IMAGE_WIDTH = 498
const IMAGE_HEIGHT = 652
const BG_HEIGHT = Math.round(IMAGE_HEIGHT * 0.7)

const iconStyle = {
  width: 34,
  height: 34,
  objectFit: 'contain',
  borderRadius: '8px',
  marginRight: 9
}

const AuthorSection = () => {
  return (
    <div className="author-root -mt-20" style={{
      width: "100%",
      padding: "54px 0 36px 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: COLORS.background
    }}>
      <style>
        {`
        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
          .author-root {
            padding: 30px 0 20px 0 !important;
          }
          .author-content-wrapper {
            flex-direction: column !important;
            gap: 30px !important;
            padding: 0 15px !important;
          }
          .author-content-left {
            width: 100% !important;
            text-align: center !important;
          }
          .author-heading {
            font-size: 2rem !important;
            line-height: 1.3 !important;
            text-align: center !important;
            margin-bottom: 20px !important;
          }
          .author-name {
            font-size: 1.4rem !important;
            line-height: 1.3 !important;
            margin-bottom: 30px !important;
            text-align: center !important;
          }
          .author-info-list {
            font-size: 16px !important;
            line-height: 1.5 !important;
            text-align: left !important;
            padding-left: 20px !important;
          }
          .author-info-list li {
            margin-bottom: 15px !important;
          }
          .author-image-container {
            width: 100% !important;
            max-width: 300px !important;
            height: auto !important;
            margin: 0 auto !important;
          }
          .author-gold-bg {
            width: 100% !important;
            max-width: 300px !important;
            height: 273px !important;
          }
          .author-image {
            width: 100% !important;
            max-width: 300px !important;
            height: auto !important;
          }
        }

        /* Medium screens (769px - 1024px) */
        @media (min-width: 769px) and (max-width: 1024px) {
          .author-root {
            padding: 40px 20px 30px 20px !important;
          }
          .author-content-wrapper {
            flex-direction: row !important;
            gap: 40px !important;
            max-width: 100% !important;
            padding: 0 20px !important;
          }
          .author-content-left {
            flex: 1 !important;
            min-width: auto !important;
            text-align: left !important;
          }
          .author-heading {
            font-size: 2.5rem !important;
            line-height: 1.2 !important;
            text-align: left !important;
            margin-bottom: 25px !important;
          }
          .author-name {
            font-size: 1.6rem !important;
            line-height: 1.3 !important;
            margin-bottom: 40px !important;
            text-align: left !important;
          }
          .author-info-list {
            font-size: 17px !important;
            line-height: 1.6 !important;
          }
          .author-image-container {
            width: 400px !important;
            height: 520px !important;
            flex-shrink: 0 !important;
          }
          .author-gold-bg {
            width: 400px !important;
            height: 366px !important;
          }
          .author-image {
            width: 400px !important;
            height: 480px !important;
          }
        }

        /* Large screens (1025px and up) - unchanged */
        @media (min-width: 1025px) {
          .author-root {
            padding: 54px 0 36px 0 !important;
          }
          .author-content-wrapper {
            flex-direction: row !important;
            max-width: 1250px !important;
            gap: 30px !important;
            margin: 0 auto !important;
          }
          .author-content-left {
            min-width: 480px !important;
            text-align: justify !important;
          }
          .author-heading {
            font-size: 53px !important;
            line-height: 60px !important;
            margin-bottom: 37px !important;
            text-align: left !important;
          }
          .author-name {
            font-size: 25px !important;
            line-height: 32px !important;
            margin-bottom: 53px !important;
            text-align: left !important;
          }
          .author-info-list {
            font-size: 18px !important;
            line-height: 32px !important;
            text-align: justify !important;
            padding: 0 !important;
          }
          .author-info-list li {
            margin-bottom: 0 !important;
          }
          .author-image-container {
            width: 498px !important;
            height: 652px !important;
            min-width: 260px !important;
            min-height: 332px !important;
          }
          .author-gold-bg {
            width: 498px !important;
            height: 456px !important;
          }
          .author-image {
            width: 498px !important;
            height: 600px !important;
          }
        }

        /* Information section responsive styles */
        @media (max-width: 768px) {
          .author-black-section {
            margin: 40px 0 0 0 !important;
            padding: 30px 20px 25px 20px !important;
          }
          .author-black-heading {
            font-size: 1.8rem !important;
            line-height: 1.3 !important;
            margin-bottom: 20px !important;
            padding: 0 10px !important;
          }
          .author-black-text {
            font-size: 16px !important;
            line-height: 1.5 !important;
            margin-bottom: 20px !important;
            text-align: left !important;
          }
          .author-black-content {
            width: 100% !important;
            height: auto !important;
          }
          .author-arrow {
            display: none !important;
          }
          .author-social-icons {
            flex-wrap: wrap !important;
            gap: 8px !important;
            justify-content: center !important;
          }
          .author-social-icon {
            width: 30px !important;
            height: 30px !important;
            margin-right: 8px !important;
          }
        }

       @media (min-width: 769px) and (max-width: 1024px) {
  .author-black-section {
    margin: 50px 0 50px 0 !important;  /* Changed from 50px 50px 50px 50px */
    padding: 40px 20px 40px 20px !important;  /* Changed from 40px 40px 40px 40px */
  }
  .author-black-heading {
    font-size: 2.2rem !important;
    line-height: 1.3 !important;
    margin-bottom: 25px !important;
  }
  .author-black-text {
    font-size: 18px !important;
    line-height: 1.6 !important;
    margin-bottom: 25px !important;
    text-align: center !important;
  }
  .author-black-content {
    width: 100% !important;
    height: auto !important;
    max-width: none !important;  /* Changed from 800px */
    margin: 0 auto !important;
  }
}

        /* Extra small devices */
        @media (max-width: 480px) {
          .author-heading {
            font-size: 1.6rem !important;
            line-height: 1.25 !important;
          }
          .author-name {
            font-size: 1.3rem !important;
          }
          .author-info-list {
            font-size: 15px !important;
            padding-left: 15px !important;
          }
          .author-image-container {
            max-width: 280px !important;
          }
          .author-gold-bg {
            max-width: 280px !important;
            height: 255px !important;
          }
          .author-image {
            max-width: 280px !important;
          }
          .author-black-heading {
            font-size: 1.5rem !important;
          }
          .author-black-text {
            font-size: 15px !important;
          }
          .author-social-icon {
            width: 28px !important;
            height: 28px !important;
          }
        }
        `}
      </style>
      
      <div id='about-author' className="author-content-wrapper" style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        {/* Left: Content */}
        <div className="author-content-left mt-12" style={{ flex: 1}}>
          {/* Heading */}
          <div className="author-heading" style={{
            fontFamily: "Tinos, serif",
            fontWeight: 700,
            color: COLORS.textDark,
          }}>
            Meet The <span style={{ color: COLORS.gold }}>Visionary</span> Behind 
            <br />
            The Book
          </div>
          {/* Name */}
          <div className="author-name" style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            color: COLORS.gold,
            textDecoration: "underline",
          }}>
           <a 
  href="https://drdhirajjain.com/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="cursor-pointer"
>
  Dhiraj Jain
</a>

          </div>
          {/* Info List */}
          <ul className="author-info-list" style={{
            fontFamily: "Inter, sans-serif",
            color: COLORS.textDark,
            fontWeight: 400,
            margin: 0,
            padding: 0,
            
            listStyle: "disc outside",
          }}>
            <li>
              He is a transformative <span style={{ fontWeight: 700 }}>Business mentor, Entrepreneur, and Philanthropist,</span> widely recognised for his influence across real estate, technology, and leadership development. With <span style={{ fontWeight: 700 }}>20+ years of experience,</span> he has helped countless businesses achieve sustainable growth through strategic thinking and innovation.
            </li>
             <li>
  As{" "}
  <strong>
    Chairman of{" "}
    <span className="inline-flex items-center whitespace-nowrap ">
      <svg
        width="13px"
        height="13px"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="inline-block align-middle mr-1"
      >
        <path
          d="M6.64594 0L2.32922 2.15836L3.67086 4.84164L7.00004 3.17705V13H3.00004V16H13V13H10V0H6.64594Z"
          fill="#000000"
        />
      </svg>
      <span>XL Ventures</span>
    </span>
  </strong>{" "}
  he empowers entrepreneurs with <strong>Proven business models, Mentorship systems</strong>, and{" "}
  <strong>Growth frameworks</strong>, enabling them to turn ideas into scalable enterprises.
</li>
            <li>
              He holds a <span style={{ fontWeight: 700 }}>PhD in Guerrilla Marketing for Real Estate</span> and has authored <span style={{ fontWeight: 700 }}>Multiple influential books</span> on leadership, strategy, and business evolution.
            </li>
          </ul>
        </div>
        
        {/* Right: Image with gold bg */}
        <div className="author-image-container" style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          position: "relative",
          overflow: "visible"
        }}>
          {/* Gold bg circle only covering 70% of image height */}
          <div
            className="author-gold-bg"
            style={{
              position: "absolute",
            }}
          />
          {/* Image above, clipped to a circle */}
          <img loading = "lazy"
            src={mainimage}
            alt="Mamata Dhiraj Jain"
            className="author-image pb-12 lg:pb-0"
          />
        </div>
      </div>
      
      {/* Information section */}
   <section className="author-black-section bg-[#1C1D20] py-10 px-5 md:px-10 lg:px-16 lg:mt-[80px] w-full">
  <center className="author-black-heading flex lg:text-[40px] md:text-[36px] text-[28px] sm:text-[32px] mx-auto text-center justify-center text-[#C89B3C] leading-tight">
    Beyond the Book: A Legacy of Impact
  </center>
  <div className='author-black-content w-full mx-auto text-center'>
    <center className="author-black-text lg:text-[18px] md:text-[17px] text-[16px] sm:text-[17px] md:text-justify lg:text-justify text-center text-white mt-5 px-4 md:px-8 lg:px-16 leading-relaxed">
      Dhiraj Jain has been honoured with prestigious recognitions such as {" "}
      <span className="text-[#C89B3C] font-bold">The Economic Times Indo Global Leaders Award,</span> being listed among 
      <span className="text-[#C89B3C] font-bold"> The Most Influential CEOs,</span> and receiving {" "}
      <span className="text-[#C89B3C] font-bold">The Iconic Power Couple of the UAE, award by India Today Group</span> a testament to his leadership, vision, and industry-defining contributions. Through
        <span className="text-[#C89B3C] font-bold"> <span style={{fontFamily: 'Lato'}}>1</span>XL Ventures</span> and <span className="text-[#C89B3C] font-bold">The Jainam Jivika Foundation (JJF),</span> he leads initiatives focused on education, healthcare, sustainability, entrepreneurship, and community upliftment. His mission extends beyond business success it is about creating meaningful, long-lasting positive change.
    </center>
    <center className="flex author-black-text mx-auto justify-center lg:text-[22px] md:text-[20px] text-[18px] sm:text-[20px] text-white font-bold mt-5 px-4 md:px-8 lg:px-16" style={{lineHeight: '32px'}}>
      Follow his journey and insights on @DhirajJain<span className='mt-0.5' style={{fontFamily: 'Nonito'}}>1</span>XL
    </center>
  </div>
  <center className="author-social-icons flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-2 mt-6">
          <a
            href="https://www.instagram.com/DhirajJain1XL/"
            className="author-social-icon relative group w-8 h-8 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Instagram"
            target='blank'
          >
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 whitespace-nowrap z-10">
              Instagram
            </span>
            <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/company/DhirajJain1XL/"
            className="author-social-icon relative group w-8 h-8 bg-[#0077b5] rounded flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="LinkedIn"
            target='blank'
          >
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 whitespace-nowrap z-10">
              LinkedIn
            </span>
            <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          <a
            href="https://www.facebook.com/DhirajJain1XL/"
            className="author-social-icon relative group w-8 h-8 bg-[#1877f2] rounded flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Facebook"
            target='blank'
          >
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 whitespace-nowrap z-10">
              Facebook
            </span>
            <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          <a
            href="https://www.youtube.com/@DhirajJain1XL"
            className="author-social-icon relative group w-8 h-8 bg-[#ff0000] rounded flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="YouTube"
            target='blank'
          >
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 whitespace-nowrap z-10">
              YouTube
            </span>
            <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>

          <a
            href="https://x.com/DhirajJain1XL"
            className="author-social-icon relative group w-8 h-8 bg-black rounded flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="X"
            target='blank'
          >
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 whitespace-nowrap z-10">
              X
            </span>
            <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>

          <a
            href="https://www.threads.com/@DhirajJain1XL"
            className="author-social-icon relative group w-8 h-8 bg-black rounded flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Threads"
            target='blank'
          >
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 whitespace-nowrap z-10">
              Threads
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 16 16"
            >
              <path
                fill="#fff"
                d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802c.756-1.081 1.753-1.502 3.132-1.502c.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137c0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994C1 2.034 4.482 0 8.044 0C9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79c0 4.143 2.254 6.343 5.63 6.343c2.777 0 4.847-1.443 4.847-3.556c0-1.438-1.208-2.127-1.27-2.127c-.236 1.234-.868 3.31-3.644 3.31c-1.618 0-3.013-1.118-3.013-2.582c0-2.09 1.984-2.847 3.55-2.847c.586 0 1.294.04 1.663.114c0-.637-.54-1.728-1.9-1.728c-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416c0 .878 1.043 1.168 1.6 1.168c1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161"
              />
            </svg>
          </a>
        

          <a
            href="https://www.pinterest.com/DhirajJain1XL/"
            className="author-social-icon relative group w-8 h-8 bg-[#e60023] rounded flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="Pinterest"
            target='blank'
          >
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 whitespace-nowrap z-10">
              Pinterest
            </span>
            <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
            </svg>
          </a>
        </center>
      </section>
    </div>
  )
}

export default AuthorSection