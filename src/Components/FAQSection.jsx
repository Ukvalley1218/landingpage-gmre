import { Minus, Plus } from 'lucide-react';
import React, { useState } from 'react';
import logo from "../assets/logo.png"




const FAQSection = () => {
      const ref = sessionStorage.getItem("reference") || "direct";

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Who is this book meant for?",
      answer:
        "Anyone curious about Dubai real estate — first-time buyers, investors, NRIs, aspiring realtors, or professionals wanting to expand globally.",
    },
    {
      question:
        "Who should read this book?",
      answer:
        "Not at all! The book is written in simple, beginner-friendly language while also offering advanced strategies for experts.",
    },
    {
      question: "Do I need marketing experience to understand the book?",
      answer:
        "Unlike generic real estate books, this guide focuses only on Dubai — one of the fastest-growing property markets in the world — and offers practical, step-by-step insights.",
    },
    {
      question: "Are the strategies suitable for the UAE market?",
      answer:
        "Yes! Many global investors, especially NRIs, invest in Dubai without living there. The book explains exactly how you can do this too.",
    },
    {
      question: "Does the book include real case studies?",
      answer:
        "Absolutely. Beyond buying and investing, the book covers property management, legalities, and even branding yourself as a professional.",
    },
    {
      question: "What is the 4T Gifting Model mentioned in the book?",
      answer:
        "Both print and digital versions (depending on availability) so you can choose what works best for you.",
    },
    {
      question: "Is this book useful for small or mid-sized developers?",
      answer:
        "Dr. Dhiraj Jain has empowered 50,000+ people, leads philanthropic initiatives, and hosts MJLifeTalk podcast. She combines professional expertise with a passion for making knowledge accessible.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // quick links
  const links = [
     {
      id: 1,
      link: "About the Book",
      src: "#about-book",
    },
   
    {
      id: 2,
      link: "About the Author",
      src: "#about-author"
    },
    {
      id: 3,
      link: "Reader Reviews",
      src: "#reader-reviews"
    },
    {
      id: 4,
      link: "FAQs",
      src: "#faqs"
    },


  ]

  return (
    <>
      {/* faq section */}
      <div id="faqs" className=" bg-[#FFFDF9] py-8 sm:py-12 md:py-16 px-4 xl:py-0 sm:px-6 lg:px-2  ">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <h2 className="text-3xl sm:text-4xl md:text-[45px] font-tinos text-[#C89B3C] text-center mb-8 sm:mb-10 md:mb-12 px-2 lg:mb-25">
            Frequently Asked Questions
          </h2>

          {/* FAQ Items */}
          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white overflow-hidden transition-all duration-300 hover:shadow-2xl"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="cursor-pointer rounded-lg w-full flex items-center border-2 border-[#C89B3C] justify-between p-4 sm:p-5 md:p-6 text-left"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-base sm:text-lg md:text-xl lg:text-[27px] font-semibold text-gray-900 pr-4 sm:pr-6 md:pr-8 leading-snug">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="cursor-pointer w-5 h-5 sm:w-6 sm:h-6 text-[#C89B3C] font-extrabold transition-transform duration-300" />
                    ) : (
                      <Plus className="cursor-pointer w-5 h-5 sm:w-6 sm:h-6 text-[#C89B3C] font-extrabold transition-transform duration-300" />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                    }`}
                >
                  <div className="rounded-b-lg px-4 sm:px-5 border-b border-[#C89B3C] md:px-6 pb-4 sm:pb-5 md:pb-6 pt-2">
                    <div className="flex items-start gap-2 sm:gap-3">

                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        👉 {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* CTA Button */}
      <div className="flex animate-bounce justify-center items-center my-6 lg:my-20">
        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-2">
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
            <span>📥 Get Your Digital Copy Now</span>
          </button>
        </div>
      </div>

      <footer className="bg-[#1F2023] text-white   ">
  <div className="max-w-7xl mx-auto px-6 pb-28">

    {/* Logo */}
    <div className="flex justify-center md:justify-start ">
      <img
        loading="lazy"
        src={logo}
        alt="1XL Infra Logo"
        className="h-10 md:h-12 w-auto mt-20"
      />
    </div>

    {/* Main Footer Content */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

      {/* About the Book */}
      <div className="xl:mt-6 text-center md:text-left">
        <p className="text-gray-200 text-[18px] leading-relaxed text-justify lg:max-w-6xl xl:w-6xl">
          The definitive resource for mastering guerrilla marketing techniques tailored to multicultural real estate markets.
        </p>
      </div>

      {/* Quick Links */}
      <div className="xl:ml-12 xl:-mt-10 md: text-center md:text-left text-start justify-start xl:ml-24 xl:pl-5">
        <h3 className="text-[20px] ml-2 font-bold mb-4 text-[#C89B3C]">
          Quick Links
        </h3>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.src}
                className="text-gray-200 hover:text-white text-[18px] inline-block px-2 py-1 rounded-md hover:bg-white/10"
              >
                {link.link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Legal */}
      <div className="xl:ml-10 xl:-mt-10   md:text-left">
        <h3 className="text-[20px] xl:ml-1 ml-2 font-bold mb-4 text-[#C89B3C]">
          Legal
        </h3>
        <ul>
          {[
            { name: "Privacy Policy", path: "/books/gmre/privacy-policy" },
            { name: "Terms & Conditions", path: "/books/gmre/terms" },
            { name: "Return Policy", path: "/books/gmre/return-policy" },
            { name: "Shipping Policy", path: "/books/gmre/shipping-policy" },
            { name: "Payment Policy", path: "/books/gmre/payment-policy" },
            { name: "Cookie Policy", path: "/books/gmre/cookie-policy" },
          ].map((item, idx) => (
            <li key={idx}>
              <a
                href={item.path}
                className="text-gray-200 hover:text-white text-[18px] inline-block px-2 py-1 rounded-md hover:bg-white/10"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

   


            {/* Connect With Us */}
            <div className='xl:-mt-10 xl:-ml-5'>
              <h3 className="text-[20px] font-bold mb-4 text-[#C89B3C]">Connect With Us</h3>

              {/* Email */}
             <a
  href="mailto:support@1XL.com"
  onClick={(e) => {
    if (window.innerWidth > 768) {
      window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=support@1XL.com",
        "_blank"
      );
      e.preventDefault();
    }
  }}
  className="flex items-center gap-2 text-gray-200 hover:text-white hover:bg-white/10 text-sm mb-6 group cursor-pointer"
>
                  <svg
                    className="w-5 h-5 xl:mt-1.5 flex-shrink-0"
                    fill="none" npm
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="break-all text-[18px]">
                    support@1XL.com
                  </span>
                </a>

              <div className="flex flex-nowrap gap-2 pb-2">
                <a
                  href="https://www.instagram.com/DhirajJain1XL/"
                  className="relative group w-8 h-8 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="Instagram"
                  target="blank"
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
                  className="relative group w-8 h-8 bg-[#0077b5] rounded flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="LinkedIn"
                  target="blank"
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
                  className="relative group w-8 h-8 bg-[#1877f2] rounded flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="Facebook"
                  target="blank"
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
                  className="relative group w-8 h-8 bg-[#ff0000] rounded flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="YouTube"
                  target="blank"
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
                  className="relative group w-8 h-8 bg-black rounded flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="X"
                  target="blank"
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
                  className="relative group w-8 h-8 bg-black rounded flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="Threads"
                  target="blank"
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
                  className="relative group w-8 h-8 bg-[#e60023] rounded flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="Pinterest"
                  target="blank"
                >
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-200 whitespace-nowrap z-10">
                    Pinterest
                  </span>
                  <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 my-8"></div>

          {/* Copyright */}


          <p className="text-center text-gray-300 text-sm">
            © 2026
            <a href="https://drdhirajjain.com/" target="blank" className="hover:text-yellow-400 cursor-pointer"> Dr. Dhiraj Jain. </a>
            All Rights Reserved.
          </p>

        </div>
      </footer>
    </>
  );
};

export default FAQSection;
