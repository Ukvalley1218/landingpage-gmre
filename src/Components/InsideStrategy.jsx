import React from "react";

// update these imports/paths to your actual images
// import bookImage from "../assets/bookimages.png";
import bookShadow from "../assets/bookshadow.png";
import bookImage from '../assets/whatisinside.webp'

const GuerrillaMarketingSection = () => {
    const ref = sessionStorage.getItem("reference") || "direct";

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-[1100px] px-4 text-center">
        {/* Heading */}
        <h2 className="mb-4 text-[40px] font-bold leading-snug text-[#1b1b1b]">
          What is Inside{" "}
          <span className="text-[#c69227]" style={{fontFamily: 'Inter, sans-serif'}}>
            Guerrilla Marketing In Real Estate Book?
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mb-14 max-w-[818px] h-[55px] text-[18px] leading-relaxed text-[#000]" style={{fontFamily: 'Inter, sans-serif'}}>
          A complete, research-backed framework that blends psychology,
          creativity, and real-world case studies to transform how real estate
          is marketed in the UAE and global markets.
        </p>

        {/* Book area */}
        <div className="relative -mt-20 -mr-5 mb-4 flex w-full justify-center">
  {/* glow background */}
  <div
    className="
      pointer-events-none
      absolute
      top-1/2 left-1/2
      h-[420px] w-[390px]
      -translate-x-1/2 -translate-y-1/2
      rounded-full
      blur-5xl
      z-0
    "
    // style={{
    //   background:
    //     "radial-gradient(circle at center, rgba(244,228,194,0.9), rgba(255,255,255,0))",
    // }}
  />

  {/* book with shadow */}
  <div className="relative z-10 h-[600px] w-[609px] ">
    {/* <img loading = "lazy"
      src={bookShadow}
      alt=""
      aria-hidden="true"
      className="absolute inset-0 h-[600px] w-[609px] object-contain"
    /> */}
    <img loading = "lazy"
      src={bookImage}
      alt="Guerrilla Marketing in Real Estate book"
      className="relative h-[477px] w-[300px] sm:w-[300px] ml-20 justify-center  object-cover "
    />
  </div>
</div>



        {/* 4 cards */}
        <div className="grid gap-6 text-left md:grid-cols-2 -mt-20" >
          <div className="rounded-xl bg-white p-6 pb-7 shadow-[0_10px_24px_rgba(15,23,42,0.08)] lg:w-[511px]">
            <h3 className="mb-2 text-[18px] font-semibold text-[#111827]">
              1. Strategic Foundations
            </h3>
            <p className="text-[18px] leading-relaxed text-[#4b5563]">
              A deep dive into guerrilla marketing principles, buyer
              psychology, and why unconventional tactics outperform traditional
              real estate advertising.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 pb-7 shadow-[0_10px_24px_rgba(15,23,42,0.08)] lg:w-[511px]">
            <h3 className="mb-2 text-[18px] font-semibold text-[#111827]">
              2. The 4T Gifting Model
            </h3>
            <p className="text-[18px] leading-relaxed text-[#4b5563]">
              A practical framework built around Timing, Targeting, Touchpoint,
              and Tangibility — designed to create memorable buyer experiences.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 pb-7 shadow-[0_10px_24px_rgba(15,23,42,0.08)] lg:w-[511px]">
            <h3 className="mb-2 text-[18px] font-semibold text-[#111827]">
              3. 30 Ready-to-Use Campaigns
            </h3>
            <p className="text-[18px] leading-relaxed text-[#4b5563]">
              A collection of hyperlocal, experiential, and international
              guerrilla marketing case studies with step-by-step execution
              guidance.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 pb-7 shadow-[0_10px_24px_rgba(15,23,42,0.08)] lg:w-[511px]">
            <h3 className="mb-2 text-[18px] font-semibold text-[#111827]">
              4. Future-Ready Marketing Insights
            </h3>
            <p className="text-[18px] leading-relaxed text-[#4b5563]">
              A look at how AR, VR, AI targeting, and hybrid offline – online
              strategies are shaping the next era of real estate marketing.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4  mt-20 lg:mt-29 animate-bounce">
          {/* Hardcopy Button */}
          <button
            onClick={() =>
              (window.location.href = `/books/gmre/checkout?type=hardcopy&reference=${ref}`)
            }
            className="flex items-center justify-center gap-2 rounded-lg bg-[#C89B3C] px-6 py-3 text-white font-medium text-[18px] hover:bg-[#5a4311]"
          >
            📘 Get Your Hard Copy Now
          </button>

          {/* eBook Button */}
          <button
            onClick={() =>
              (window.location.href = `/books/gmre/checkout?type=ebook&reference=${ref}`)
            }
            className="flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-[#C89B3C] border border-[#C89B3C] font-medium text-[18px] hover:bg-[#C89B3C] hover:text-black transition-colors duration-200"
          >
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M7.238 3.044C5.652 2.182 3.75 3.32 3.75 5.033v13.934c0 1.714 1.902 2.851 3.488 1.989l12.812-6.967c1.6-.87 1.6-3.108 0-3.977zM2.25 5.033c0-2.905 3.167-4.687 5.705-3.306l12.812 6.967c2.644 1.438 2.644 5.174 0 6.612L7.955 22.273c-2.538 1.38-5.705-.4-5.705-3.306z" clip-rule="evenodd" /></svg> */}
            <span>📥  Get Your Digital Copy Now</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GuerrillaMarketingSection;
