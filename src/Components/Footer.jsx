import React from 'react'
import logo from '../assets/logo.png'
import insta from '../assets/insta.png'
import link from '../assets/link.png'
import face from '../assets/face.png'
import you from '../assets/you.png'
import twitter from '../assets/twi.png'
import threa from '../assets/thr.png'
import q from '../assets/q.png'
import p from '../assets/p.png'

// ---- COLOR PALETTE USED IN SECTION ----
const COLORS = {
  background: '#2c548a',   // main background (blue)
  white: '#fff',           // pure white text for everything
  heading: '#fff',         // headings (white)
  text: '#fff',            // normal text (white)
  linkText: '#fff',        // links/email (white)
  border: '#fff',          // optional: use white or a lighter blue if you want divider lines to show up subtly
  socialBg: '#4693d2',     // slightly darker blue for social icon background, optional
  socialBorder: '#5baae3', // for border around social icons, same as background for a seamless look
  emailIcon: '#fff',       // envelope/mail icon, pure white for clarity
}


// ---- END COLOR PALETTE ----

const socialIcons = [
  { src: insta, alt: 'Instagram' },
  { src: link, alt: 'LinkedIn' },
  { src: face, alt: 'Facebook' },
  { src: you, alt: 'YouTube' },
  { src: twitter, alt: 'X/Twitter' },
  { src: threa, alt: 'Threads' },
  { src: q, alt: 'Quora' },
  { src: p, alt: 'Pinterest' },
];

const styles = `
.footer-bg {
  margin-bottom:90px;
  background: ${COLORS.background};
  color: ${COLORS.white};
  width: 100vw;
  padding: 0;
  position: relative;
}
.footer-container {
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 70px;
  padding: 38px 0 0 0;
  box-sizing: border-box;
}
.footer-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.footer-col.footer-about {
  min-width: 440px;
  max-width: 540px;
}
.footer-col:not(.footer-about) {
  justify-content: flex-start;
  min-width: 210px;
  margin-top:74px;
}

.footer-logo-img {
  width: 118px;
  height: 58px;
  object-fit: cover;
  margin-bottom: 18px;
}
.footer-heading {
  font-family: 'Georgia', serif;
  color: ${COLORS.gold};
  font-size: 23px;
  font-weight: bold;
  margin-bottom: 12px;
  margin-top: 0;
  letter-spacing: 0.2px;
}
.footer-text {
  color: ${COLORS.white};
  font-size: 18px;
  font-family: 'Inter', sans-serif;
  margin-bottom: 0;
  font-weight: 400;
  line-height: 1.42;
  max-width: 410px;
}
.footer-small-links {
  color: ${COLORS.textLight};
  font-size: 18px;
  font-family: 'Inter', sans-serif;
  text-decoration: none;
  margin-bottom: 10px;
  transition: color 0.13s;
  display: block;
  cursor: pointer;
}
.footer-small-links:hover {
  color: ${COLORS.gold};
}
.footer-legal-link {
  color: ${COLORS.textLight};
  font-size: 18px;
  margin-bottom: 9px;
  display: block;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
}
.footer-legal-link:hover {
  color: ${COLORS.gold};
}
.footer-email-row {
  display: flex;
  align-items: center;
  gap: 7px;
  color: ${COLORS.white};
  font-size: 18px;
  margin-bottom: 18px;
  font-family: 'Inter', sans-serif;
  margin-top: 0;
  justify-content: center;
}
.footer-email-row svg {
  font-size: 22px;
  color: ${COLORS.goldLight};
}
.footer-social-row {
  display: flex;
  gap: 7px;
  align-items: center;
  margin-top: 2px;
  justify-content: center;
}
.footer-social-icon {
  width: 28px;
  height: 28px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2px;
  transition: filter 0.13s;
}
.footer-social-icon img {
  width: 22px;
  height: 22px;
  object-fit: contain;
  display: block;
}
.footer-social-icon:hover {
  filter: brightness(1.22) drop-shadow(0 0 2px #caa956);
  background: #31280f;
  border-color: ${COLORS.gold};
}
.footer-divider {
  width: 97vw;
  height: 1px;
  background: ${COLORS.border};
  margin: 38px auto 0 auto;
  border: none;
}
.footer-bottom {
  width: 100vw;
  min-height: 22px;
  padding: 13px 0 15px 0;
  color: ${COLORS.white};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-family: 'Inter', sans-serif;
  background: ${COLORS.background};
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
}

/* Mobile Responsive Styles */
@media (max-width: 768px) {
  .footer-bg {
    margin-bottom: 60px !important;
  }
  .footer-container {
    flex-direction: column !important;
    gap: 30px !important;
    align-items: center !important;
    padding: 30px 15px 0 15px !important;
    margin-bottom:150px;
  }
  .footer-col {
    align-items: center !important;
    text-align: center !important;
    width: 100% !important;
    max-width: 95vw !important;
  }
  .footer-col.footer-about {
    min-width: 100% !important;
    max-width: 95vw !important;
    margin-bottom: 0 !important;
  }
  .footer-col:not(.footer-about) {
    margin-top: 0 !important;
    min-width: 100% !important;
  }
  .footer-logo-img {
    margin-bottom: 15px !important;
  }
  .footer-heading {
    font-size: 20px !important;
    margin-bottom: 10px !important;
  }
  .footer-text,
  .footer-small-links,
  .footer-legal-link,
  .footer-email-row {
    font-size: 16px !important;
  }
  .footer-social-icon {
    width: 24px !important;
    height: 24px !important;
  }
  .footer-social-icon img {
    width: 18px !important;
    height: 18px !important;
  }
  .footer-divider {
    margin: 30px auto 0 auto !important;
  }
  .footer-bottom {
    padding: 10px 15px 10px 15px !important;
    font-size: 12px !important;
    line-height: 1.4 !important;
    text-align: center !important;
  }
}

/* Extra small devices */
@media (max-width: 380px) {
  .footer-bg {
    margin-bottom: 40px !important;
  }
  .footer-container {
    gap: 25px !important;
    padding: 25px 10px 0 10px !important;
    margin-bottom:150px;
  }
  .footer-heading {
    font-size: 18px !important;
    margin-bottom: 8px !important;
  }
  .footer-text,
  .footer-small-links,
  .footer-legal-link,
  .footer-email-row {
    font-size: 14px !important;
  }
  .footer-logo-img {
    width: 100px !important;
    height: 50px !important;
    margin-bottom: 12px !important;
  }
  .footer-social-icon {
    width: 22px !important;
    height: 22px !important;
  }
  .footer-social-icon img {
    width: 16px !important;
    height: 16px !important;
  }
  .footer-bottom {
    font-size: 11px !important;
    padding: 8px 10px 8px 10px !important;
  }
}

/* Desktop styles remain unchanged */
@media (min-width: 769px) {
  .footer-bg {
    margin-bottom: 90px !important;
  }
  .footer-container {
    flex-direction: row !important;
    justify-content: center !important;
    align-items: flex-start !important;
    gap: 70px !important;
    padding: 38px 0 0 0 !important;
  }
  .footer-col {
    align-items: flex-start !important;
    text-align: left !important;
  }
  .footer-col.footer-about {
    min-width: 440px !important;
    max-width: 540px !important;
  }
  .footer-col:not(.footer-about) {
    min-width: 210px !important;
    margin-top: 74px !important;
  }
  .footer-logo-img {
    width: 118px !important;
    height: 58px !important;
    margin-bottom: 18px !important;
  }
  .footer-heading {
    font-size: 23px !important;
    margin-bottom: 12px !important;
  }
  .footer-text,
  .footer-small-links,
  .footer-legal-link,
  .footer-email-row {
    font-size: 18px !important;
  }
  .footer-email-row {
    justify-content: flex-start !important;
  }
  .footer-social-row {
    justify-content: flex-start !important;
  }
  .footer-social-icon {
    width: 28px !important;
    height: 28px !important;
  }
  .footer-social-icon img {
    width: 22px !important;
    height: 22px !important;
  }
  .footer-divider {
    margin: 38px auto 0 auto !important;
  }
  .footer-bottom {
    padding: 13px 0 15px 0 !important;
    font-size: 14px !important;
    text-align: center !important;
  }
}

@media (max-width: 1280px) and (min-width: 769px) {
  .footer-container {
    gap: 40px;
    flex-wrap: wrap;
    padding-left: 0;
  }
  .footer-col.footer-about {
    min-width: 300px;
    max-width: 99vw;
  }
}
@media (max-width: 900px) and (min-width: 769px) {
  .footer-container {
    flex-direction: column;
    gap: 25px;
    align-items: center;
    padding: 25px 0 0 0;
  }
  .footer-col.footer-about {
    min-width: 220px;
    max-width: 99vw;
    margin-bottom: 16px;
  }
  .footer-logo-img {
    margin-bottom: 10px;
  }
}
@media (max-width: 600px) and (min-width: 769px) {
  .footer-container {
    gap: 12px;
    padding: 12px 0 0 0;
  }
  .footer-heading {
    font-size: 16px;
    margin-bottom: 3px;
  }
  .footer-text,
  .footer-small-links,
  .footer-legal-link,
  .footer-email-row {
    font-size: 11px;
  }
  .footer-social-icon {
    width: 14px;
    height: 14px;
    border-radius: 2px;
    padding: 0.4px;
  }
  .footer-social-icon img {
    width: 8px;
    height: 8px;
  }
  .footer-logo-img {
    width: 70px;
    height: 34px;
    margin-bottom: 7px;
  }
  .footer-bottom {
    font-size: 8px;
    padding: 4px 0 3px 0;
    line-height: 12px;
  }
}
`;

const Footer = () => (
  <footer className="footer-bg">
    <style>{styles}</style>
    <div className="footer-container">
      <div className="footer-col footer-about">
        <img loading = "lazy" src={logo} alt="1XL Infra" className="footer-logo-img" />
        <div className="footer-heading">About the Book</div>
        <div className="footer-text">
          Unlock the secrets of Dubai's booming real estate market. Your complete step-by-step guide to buying, investing, and growing wealth in the world's most dynamic city.
        </div>
      </div>
      <div className="footer-col ">
        <div className="footer-heading">Quick Links</div>
        <div className="footer-small-links">About the Book</div>
        <div className="footer-small-links">About the Author</div>
        <div className="footer-small-links">Reader Reviews</div>
        <div className="footer-small-links">FAQ</div>
      </div>
      <div className="footer-col">
        <div className="footer-heading">Legal</div>
        <div className="footer-legal-link">Privacy Policy</div>
        <div className="footer-legal-link">Terms &amp; Conditions</div>
        <div className="footer-legal-link">Return Policy</div>
      </div>
      <div className="footer-col">
        <div className="footer-heading">Connect With Us</div>
        <div className="footer-email-row">
          <svg
            width="22"
            height="22"
            fill="none"
            viewBox="0 0 18 18"
            style={{ marginBottom: '-2px' }}
          >
            <path
              d="M3 4.5C3 3.67157 3.67157 3 4.5 3H13.5C14.3284 3 15 3.67157 15 4.5V13.5C15 14.3284 14.3284 15 13.5 15H4.5C3.67157 15 3 14.3284 3 13.5V4.5Z"
              stroke={COLORS.gold}
              strokeWidth="1.3"
            />
            <path
              d="M4.5 6.75L9 10.5L13.5 6.75"
              stroke={COLORS.gold}
              strokeWidth="1.3"
              strokeLinejoin="round"
            />
          </svg>
          dhiraj@1XLInfra.com
        </div>
        <div className="footer-social-row">
          {socialIcons.map((icon, idx) => (
            <span className="footer-social-icon" key={idx}>
              <img loading = "lazy" src={icon.src} alt={icon.alt} />
            </span>
          ))}
        </div>
      </div>
    </div>
    <div className="footer-divider" />
    <div className="footer-bottom">
      © 2026 Dhiraj Jain. All rights reserved.
    </div>
  </footer>
);

export default Footer;