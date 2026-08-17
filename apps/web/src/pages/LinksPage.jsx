import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Github, Linkedin, Instagram, Mail, Code2, ExternalLink, MapPin, Compass } from 'lucide-react';
import { CONTACT } from '@/data/portfolio';

// Typewriter prompts cycle
const PROMPTS = [
  "digital diary ‧ ₊ ˚ ✧ ﾟ *",
  "Ready to explore peace in the mountains…",
  "A scenic winter summit at Kedarkantha…",
  "Climbing high-altitude trails to Brahmatal…"
];

export default function LinksPage() {
  const [text, setText] = useState('');
  const [promptIdx, setPromptIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const fullText = PROMPTS[promptIdx];

    if (isDeleting) {
      // Deleting text: fast backspace
      timer = setTimeout(() => {
        setText(fullText.substring(0, text.length - 1));
      }, 25);
    } else {
      // Typing text: standard typing speed with slight random jitter
      timer = setTimeout(() => {
        setText(fullText.substring(0, text.length + 1));
      }, 50 + Math.random() * 30);
    }

    // State transitions
    if (!isDeleting && text === fullText) {
      // Completed typing: hold for 2 seconds
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === '') {
      // Completed deleting: transition to next prompt
      setIsDeleting(false);
      setPromptIdx((prev) => (prev + 1) % PROMPTS.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, promptIdx]);

  return (
    <div className="links-page-wrapper">
      <Helmet>
        <title>✿ samriddhi's little internet home</title>
        <meta name="description" content="Personal links directory for Samriddhi Gururani. Explore projects, photography, blogs, and trekking adventures." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Caveat:wght@600;700&family=Quicksand:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>

      {/* Ambient drifting blobs */}
      <div className="bg-blob b1"></div>
      <div className="bg-blob b2"></div>
      <div className="bg-blob b3"></div>
      <div className="bg-blob b4"></div>

      {/* Floating Viewport Emojis */}
      <div className="floating-emoji em-strawberry">🍓</div>
      <div className="floating-emoji em-sparkle">✨</div>
      <div className="floating-emoji em-heart">💖</div>

      {/* Main glassmorphic links container */}
      <div className="card-container animate-fade-rise">
        
        {/* Centered Portrait photo wrapper */}
        <div className="hero-wrap">
          <img 
            id="heroImg" 
            className="hero-img" 
            src="https://horizons-cdn.hostinger.com/a327e9ac-ed50-4fbc-a9cd-63a73a4a6614/77a1ff76c9a3df66a85f537f09cbb9a1.png" 
            alt="samriddhi" 
          />

          {/* Cute aesthetic stickers layered on the image */}
          <div className="sticker-photo sp-tl" style={{ '--r': '-12deg' }}>🎀</div>
          <div className="sticker-photo sp-tr" style={{ '--r': '15deg' }}>🎀</div>
          <div className="sticker-photo sp-ml" style={{ '--r': '-8deg' }}>🌸</div>
          <div className="sticker-photo sp-mr" style={{ '--r': '10deg' }}>🌸</div>
          <div className="sticker-photo sp-bl" style={{ '--r': '-15deg' }}>💖</div>
        </div>

        {/* Bio profile info section */}
        <div className="content">
          <h1 className="name">hi, i'm samriddhi</h1>
          <div className="flower-divider">✿</div>
          
          {/* Typewriter Prompt Display */}
          <div className="tagline-wrap">
            <span className="tagline">
              {text || "\u00A0"}
              <span className="caret-cursor">|</span>
            </span>
          </div>

          {/* Centered bio list */}
          <div className="bio-list">
            <div className="bio-item">♡ powered by curiosity & coffee</div>
            <div className="bio-item">♡ AI &nbsp;&nbsp; ♡ tiny side quests</div>
            <div className="bio-item">♡ professional tab hoarder</div>
          </div>

          {/* Social Grid (Instagram, GitHub, LinkedIn) */}
          <div className="socials">
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="social-btn" title="Instagram">
              <Instagram />
            </a>
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="social-btn" title="GitHub">
              <Github />
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn" title="LinkedIn">
              <Linkedin />
            </a>
          </div>

          {/* Directory Link Pills */}
          <div className="pill-list">
            <a href="/" className="pill">
              <span>my portfolio ·*˚.</span>
            </a>
            <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="pill">
              <span>my github ˙ᵕ˙</span>
            </a>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="pill">
              <span>my linkedin ✭</span>
            </a>
            <a href={CONTACT.leetcode} target="_blank" rel="noopener noreferrer" className="pill">
              <span>my leetcode ˚☆</span>
            </a>
            <a href={`mailto:${CONTACT.email}`} className="pill">
              <span>email me ✩</span>
            </a>
          </div>

          {/* Location & Contact badge */}
          <div className="contact-line">
            <div className="contact-top">
              <span>📍 Nainital, India · for collabs 💌</span>
            </div>
            <div className="contact-bottom">
              <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            </div>
          </div>

          {/* Footer */}
          <footer>
            <span>made with 💖 by samriddhi · 2026</span>
          </footer>
        </div>

      </div>

      {/* Styled Embed CSS */}
      <style>{`
        :root {
          --bg1: #FBEFFA;
          --bg2: #EFE7FB;
          --ink: #4A3E58;
          --muted: #8B7C99;
          --pink: #F3A9C6;
          --lav: #B9A6E8;
          --lav-deep: #9C86D8;
          --line: rgba(74, 62, 88, 0.08);
          --font-hand: 'Caveat', cursive;
          --font-body: 'Quicksand', sans-serif;
          --font-funky: 'Baloo 2', cursive;
        }

        .links-page-wrapper {
          position: relative;
          min-height: 100vh;
          width: 100%;
          background: radial-gradient(circle at 30% 0%, var(--bg1), var(--bg2) 65%);
          font-family: var(--font-body);
          color: var(--ink);
          overflow-x: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 20px;
          z-index: 1;
        }

        /* Ambient glowing background blobs */
        .bg-blob {
          position: fixed;
          border-radius: 50%;
          filter: blur(80px);
          z-index: -1;
          pointer-events: none;
          opacity: 0.6;
          animation: drift 20s ease-in-out infinite;
        }

        .bg-blob.b1 {
          width: 350px;
          height: 350px;
          top: -100px;
          left: -100px;
          background: radial-gradient(circle, #FFE08A, transparent 70%);
        }

        .bg-blob.b2 {
          width: 380px;
          height: 380px;
          top: 15%;
          right: -150px;
          background: radial-gradient(circle, #B9F3D4, transparent 70%);
          animation-delay: 4s;
        }

        .bg-blob.b3 {
          width: 320px;
          height: 320px;
          bottom: -80px;
          left: -80px;
          background: radial-gradient(circle, #F3B8DC, transparent 70%);
          animation-delay: 8s;
        }

        .bg-blob.b4 {
          width: 300px;
          height: 300px;
          bottom: 20%;
          right: -100px;
          background: radial-gradient(circle, #C9B6EE, transparent 70%);
          animation-delay: 12s;
        }

        @keyframes drift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.1); }
        }

        /* Cardless content layout */
        .card-container {
          width: 100%;
          max-width: 440px;
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        /* Entrance animation */
        .animate-fade-rise {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeRiseIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeRiseIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Portrait Wrap styling - Centered rounded square */
        .hero-wrap {
          position: relative;
          width: 240px;
          height: 240px;
          margin: 0 auto 28px;
          overflow: visible;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 40px;
          border: 2.5px solid rgba(74, 62, 88, 0.12);
          box-shadow: 0 12px 36px rgba(74, 62, 88, 0.08);
          display: block;
        }

        /* Stickers Bobbing animations */
        .sticker-photo {
          position: absolute;
          font-size: 28px;
          filter: drop-shadow(0 6px 12px rgba(74, 62, 88, 0.12));
          pointer-events: none;
          z-index: 5;
          animation: bob 5s ease-in-out infinite;
        }

        .sp-tl {
          top: -16px;
          left: -16px;
          animation-delay: 0s;
        }

        .sp-tr {
          top: -16px;
          right: -16px;
          animation-delay: 1.2s;
        }

        .sp-ml {
          top: 50%;
          left: -26px;
          transform: translateY(-50%);
          animation-delay: 0.6s;
        }

        .sp-mr {
          top: 60%;
          right: -26px;
          transform: translateY(-50%);
          animation-delay: 1.8s;
        }

        .sp-bl {
          bottom: -12px;
          left: -10px;
          font-size: 34px;
          animation-delay: 0.9s;
        }

        @keyframes bob {
          0%, 100% { transform: translateY(0) rotate(var(--r, 0deg)); }
          50% { transform: translateY(-8px) rotate(calc(var(--r, 0deg) + 3deg)); }
        }

        /* Bio Content Section styling */
        .content {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .name {
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 25px;
          color: var(--ink);
          text-transform: lowercase;
          margin-bottom: 4px;
          letter-spacing: 0.5px;
        }

        .flower-divider {
          font-size: 18px;
          color: var(--lav-deep);
          margin-bottom: 20px;
          opacity: 0.85;
        }

        .tagline-wrap {
          background: #FFE08A;
          border: 1.5px solid rgba(74, 62, 88, 0.1);
          padding: 6px 20px;
          border-radius: 99px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 16px rgba(255, 224, 138, 0.25);
          margin-bottom: 24px;
          min-height: 40px;
        }

        .tagline {
          font-family: var(--font-hand);
          font-weight: 700;
          font-size: 23px;
          color: #5B3E7A;
          display: inline-flex;
          align-items: center;
          padding: 0 4px;
        }

        .caret-cursor {
          display: inline-block;
          margin-left: 2px;
          font-weight: 300;
          color: var(--pink);
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          from, to { opacity: 1; }
          50% { opacity: 0; }
        }

        .bio-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 28px;
          align-items: center;
        }

        .bio-item {
          font-size: 15.5px;
          font-weight: 600;
          color: #5C4A6E;
          text-transform: lowercase;
          line-height: 1.4;
        }

        /* Social icons styling */
        .socials {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-bottom: 32px;
        }

        .social-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #FFFDFB;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1.5px solid rgba(74, 62, 88, 0.08);
          box-shadow: 0 4px 12px rgba(74, 62, 88, 0.04);
          color: var(--ink);
          transition: all 0.2s ease;
        }

        .social-btn svg {
          width: 19px;
          height: 19px;
        }

        .social-btn:hover {
          transform: translateY(-3px) scale(1.05);
          background: var(--bg1);
          border-color: rgba(156, 134, 216, 0.25);
          box-shadow: 0 6px 15px rgba(156, 134, 216, 0.15);
          color: var(--lav-deep);
        }

        /* Directory Pills List styling */
        .pill-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          width: 100%;
          margin-bottom: 32px;
        }

        .pill {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          padding: 15px 24px;
          background: #FFFDFB;
          border: 1.5px solid rgba(74, 62, 88, 0.08);
          border-radius: 99px;
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 15.5px;
          color: var(--ink);
          box-shadow: 0 4px 15px rgba(74, 62, 88, 0.03);
          transition: all 0.25s ease;
          position: relative;
        }

        .pill:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(156, 134, 216, 0.12);
          background: var(--bg1);
          border-color: rgba(156, 134, 216, 0.25);
          color: var(--lav-deep);
        }

        /* Location badge */
        .contact-line {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          font-size: 14px;
          font-weight: 700;
          color: #4A3A55;
          background: #FFFDFB;
          border: 1.5px solid rgba(156, 134, 216, 0.15);
          border-radius: 24px;
          padding: 12px 24px;
          box-shadow: 0 4px 15px rgba(156, 134, 216, 0.06);
          margin-bottom: 28px;
          width: 100%;
        }

        .contact-top {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .contact-bottom {
          margin-top: 2px;
        }

        .contact-bottom a {
          color: var(--lav-deep);
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: color 0.2s ease;
        }

        .contact-bottom a:hover {
          color: var(--ink);
        }

        /* Footer styling */
        footer {
          margin-top: 12px;
          font-size: 12.5px;
          color: var(--muted);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          opacity: 0.85;
          text-transform: lowercase;
        }

        /* Floating Viewport Emojis */
        .floating-emoji {
          position: absolute;
          pointer-events: none;
          z-index: 1;
          animation: floatEmoji 8s ease-in-out infinite;
          filter: drop-shadow(0 6px 12px rgba(74, 62, 88, 0.08));
        }

        .em-strawberry {
          font-size: 42px;
          bottom: 8%;
          left: 10%;
          animation-delay: 0s;
        }

        .em-sparkle {
          font-size: 30px;
          top: 15%;
          right: 10%;
          animation-delay: 2s;
        }

        .em-heart {
          font-size: 32px;
          top: 50%;
          left: 8%;
          animation-delay: 4s;
        }

        @keyframes floatEmoji {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(8deg);
          }
        }

        /* Mobile responsiveness */
        @media (max-width: 480px) {
          .links-page-wrapper {
            padding: 40px 16px;
          }
          .hero-wrap {
            width: 200px;
            height: 200px;
            margin-bottom: 24px;
          }
          .name {
            font-size: 22px;
          }
          .tagline-wrap {
            padding: 4px 16px;
            margin-bottom: 20px;
          }
          .tagline {
            font-size: 20px;
          }
          .bio-item {
            font-size: 14.5px;
          }
          .social-btn {
            width: 40px;
            height: 40px;
          }
          .social-btn svg {
            width: 17px;
            height: 17px;
          }
          .pill {
            padding: 13px 20px;
            font-size: 14.5px;
          }
          .floating-emoji.em-strawberry {
            font-size: 32px;
            left: 5%;
            bottom: 5%;
          }
          .floating-emoji.em-sparkle {
            font-size: 24px;
            right: 5%;
            top: 10%;
          }
          .floating-emoji.em-heart {
            font-size: 26px;
            left: 4%;
            top: 45%;
          }
        }

        /* Preferences reduced motion styling */
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-rise {
            opacity: 1;
            transform: none;
            animation: none;
          }
          .sticker-photo, .floating-emoji {
            animation: none;
          }
          .caret-cursor {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
