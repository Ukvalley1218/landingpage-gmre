import React from "react";

import threeimages from '../assets/Group 1938 (2).png'
const TestimonialsSection = () => {
      const ref = sessionStorage.getItem("reference") || "direct";


  return (
    <section className="bg-[#1B1B1B] text-white py-16 md:py-24" id="reader-reviews">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* --- Title --- */}
        <h2 className="lg:text-[40px] md:text-3xl font-bold -mt-6 " style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700,
            lineHeight: '45px'
            }}>
          What Users Are Saying About
          <br />
        
        <span className=' text-amber-400  pt-12  mb-5' style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 700}}>
          Guerrilla Marketing In Real Estate Book?
          </span>
        </h2>

        {/* --- Description --- */}
        <p className="mt-4 max-w-2xl  lg:text-[18px] lg:w-[715px] mx-auto text-gray-300 text-sm md:text-base">
          Discover why professionals across the UAE are calling this the most
          practical marketing guide for today’s real estate market.
        </p>

        {/* --- IMAGE (your 3-cards image) --- */}
        <div className="flex justify-center w-full h-full mt-12 -mb-13">
          <img loading = "lazy"
            src={threeimages}
            alt="User testimonials"
            className="w-full "
          />
        </div>

        {/* --- BUTTONS --- */}
         <div className="mt-15 flex justify-center">
            <div className="w-full text-center mt-12">
              <div className="
          flex flex-wrap justify-center md:justify-center 
          gap-7 mt-10 w-full px-2 sm:px-4 
          lg:mr-10 lg:pl-1 lg:pr-0">

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

      </div>
    </section>
  );
};

export default TestimonialsSection;
