import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const FixedFooter = () => {
  // Check localStorage first, then use default
   
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  
  const [pricing, setPricing] = useState(() => {
    const saved = localStorage.getItem("userPricing");
    return saved ? JSON.parse(saved) : { symbol: "$", amount: "4.99", discount: "9.99" };
  });
  const reference = params.get("reference") || "direct";
const utm_source = params.get("utm_source") || sessionStorage.getItem("utm_source") || null;
const utm_medium = params.get("utm_medium") || sessionStorage.getItem("utm_medium") || null;
const utm_campaign = params.get("utm_campaign") || sessionStorage.getItem("utm_campaign") || null;
const utm_content = params.get("utm_content") || sessionStorage.getItem("utm_content") || null;
const ref = sessionStorage.getItem("reference") || "direct";

// 📌 STORE IN SESSION
sessionStorage.setItem("reference", reference);
if (utm_source) sessionStorage.setItem("utm_source", utm_source);
if (utm_medium) sessionStorage.setItem("utm_medium", utm_medium);
if (utm_campaign) sessionStorage.setItem("utm_campaign", utm_campaign);
if (utm_content) sessionStorage.setItem("utm_content", utm_content);

  const [timeLeft, setTimeLeft] = useState({ hours: 7, minutes: 30, seconds: 23 });
  const [isLoading, setIsLoading] = useState(!localStorage.getItem("userPricing")); // Only show loading if no saved data

  useEffect(() => {
  const savedPricing = localStorage.getItem("userPricing");

  if (savedPricing) {
    setIsLoading(false);
  } else {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        const country = data.country_code;
        let newPricing;

        if (country === "IN") newPricing = { symbol: "₹", amount: "99", discount: "199" };
        else if (country === "AE") newPricing = { symbol: "AED", amount: "9", discount: "19" };
        else newPricing = { symbol: "$", amount: "4.99", discount: "9.99" };

        setPricing(newPricing);
        localStorage.setItem("userPricing", JSON.stringify(newPricing));
        setIsLoading(false);
      })
      .catch(() => {
        const defaultPricing = { symbol: "$", amount: "4.99", discount: "9.99" };
        setPricing(defaultPricing);
        localStorage.setItem("userPricing", JSON.stringify(defaultPricing));
        setIsLoading(false);
      });
  }

  // ✅ TIMER MUST ALWAYS RUN
  const timer = setInterval(() => {
    setTimeLeft((prev) => {
      let { hours, minutes, seconds } = prev;
      if (hours === 0 && minutes === 0 && seconds === 0) return prev;

      if (seconds > 0) seconds--;
      else if (minutes > 0) {
        minutes--;
        seconds = 59;
      } else if (hours > 0) {
        hours--;
        minutes = 59;
        seconds = 59;
      }

      return { hours, minutes, seconds };
    });
  }, 1000);

  return () => clearInterval(timer);
}, []);


  // Optional: Show nothing or skeleton while loading first time
  if (isLoading) {
    return <div>Loading...</div>; // Or return null, or a skeleton component
  }
  return (
    <div className="fixed-footer-bar">
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#C89B3C] bg-[#FAFAF7] shadow-xl rounded-t-xl">
        {/* ✅ Responsive container */}
        <div
          className="
            mx-auto w-full max-w-6xl
            px-3 sm:px-5 md:px-8
            py-2 sm:py-3
          "
        >
          {/* ✅ Mobile: stack | md+: 3 columns */}
          <div
            className="
              flex flex-col gap-2
              md:flex-row md:items-center md:justify-between md:gap-4
            "
          >
            {/* 💰 Price Section */}
            <div
              className="
                cta-dynamic-footer
                flex items-center justify-center
                px-3 sm:px-4
                rounded-md
                py-2 sm:py-2.5 md:py-3
                space-x-2
                w-full md:w-auto
                md:min-w-[160px] 
              "
            >
              <span onClick={() => (window.location.href = `/books/gmre/checkout?type=ebook&reference=${ref}`)} className="text-white cta-text font-bold text-[18px] sm:text-[22px] md:text-[25px] whitespace-nowrap">
                {pricing.symbol}
                {pricing.amount}
              </span>
              <span className="text-white line-through text-[12px] sm:text-[15px] md:text-[18px] font-medium whitespace-nowrap">
                {pricing.symbol}
                {pricing.discount}
              </span>
            </div>

            {/* ⏳ Countdown Timer Section */}
            <div className="w-full md:flex-1 flex items-center justify-center text-center">
              <div>
                <p className="text-black text-[10px] sm:text-[12px] md:text-[13px] mb-1">
                  Offer Will Expire In
                </p>

                <div className="flex items-center justify-center gap-2">
                  {/* Hours */}
                  <div className="text-center">
                    <div className="text-[#C89B3C] font-bold text-[18px] sm:text-[22px] md:text-[32px] leading-none">
                      {String(timeLeft.hours).padStart(2, "0")}
                    </div>
                    <div className="text-black text-[9px] sm:text-[11px] md:text-[12px] leading-none mt-[2px]">
                      Hours
                    </div>
                  </div>

                  <div className="text-[#C89B3C] font-bold text-[18px] sm:text-[22px] md:text-[24px] leading-none">
                    :
                  </div>

                  {/* Minutes */}
                  <div className="text-center">
                    <div className="text-[#C89B3C] font-bold text-[18px] sm:text-[22px] md:text-[32px] leading-none">
                      {String(timeLeft.minutes).padStart(2, "0")}
                    </div>
                    <div className="text-black text-[9px] sm:text-[11px] md:text-[12px] leading-none mt-[2px]">
                      Minutes
                    </div>
                  </div>

                  <div className="text-[#C89B3C] font-bold text-[18px] sm:text-[22px] md:text-[24px] leading-none">
                    :
                  </div>

                  {/* Seconds */}
                  <div className="text-center">
                    <div className="text-[#C89B3C] font-bold text-[18px] sm:text-[22px] md:text-[32px] leading-none">
                      {String(timeLeft.seconds).padStart(2, "0")}
                    </div>
                    <div className="text-black text-[9px] sm:text-[11px] md:text-[12px] leading-none mt-[2px]">
                      Seconds
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 🛒 Order Now Button */}
            <button
              onClick={() => (window.location.href = `/books/gmre/checkout?type=ebook&reference=${ref}`)}
              className="
                cursor-pointer bg-white border border-[#C89B3C] text-black
                cta-text font-semibold
                rounded-md hover:bg-gray-100 transition duration-200 hover:scale-105
                w-full md:w-auto
                px-4 sm:px-6
                py-2 sm:py-2.5 md:py-3
                text-[14px] sm:text-[18px] md:text-[22px]
                whitespace-nowrap
                hover:text-black hover:bg-[#C89B3C]
              "
            >
              Order Now
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.05); }
          50% { transform: scale(1); }
          75% { transform: scale(1.05); }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes ripple {
          0% { transform: scale(0); opacity: 0.8; }
          100% { transform: scale(3); opacity: 0; }
        }
        .cta-text {
          animation: heartbeat 1.2s ease-in-out infinite;
          display: inline-block;
          
        }
          .cta-text:hover{
                    background: #C89B3C;
                   text: yellow;
          }
        .cta-dynamic-footer {
          position: relative;
          background: #C89B3C;
          background-size: 400% 400%;
          animation: gradientShift 6s ease infinite, float 3s ease-in-out infinite;
          color: white;
          font-weight: 600;
          transition: all 0.4s ease;
          box-shadow: 0 6px 18px rgba(255, 215, 100, 0.5);
          cursor: pointer;
        }
        .cta-dynamic-footer:hover {
          transform: scale(1.05) translateY(-3px);
          box-shadow: 0 8px 25px rgba(255, 230, 120, 0.8);
          color: black;

        }
        .cta-dynamic-footer::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 20px;
          height: 20px;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 50%;
          transform: translate(-50%, -50%) scale(0);
          opacity: 0;
          pointer-events: none;
        }
        .cta-dynamic-footer:hover::after {
          animation: ripple 0.6s ease-out;
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default FixedFooter;
