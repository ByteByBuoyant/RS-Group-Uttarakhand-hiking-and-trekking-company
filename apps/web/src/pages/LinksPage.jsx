import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Github, Linkedin, Instagram, Mail, Code2, ExternalLink, MapPin, Compass } from 'lucide-react';
import { CONTACT } from '@/data/portfolio';

// Typewriter prompts cycle
const PROMPTS = [
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

      {/* Main glassmorphic links container */}
      <div className="card-container animate-fade-rise">
        <div className="card">
          
          {/* Header portrait panel with custom stickers */}
          <div className="hero-wrap">
            <img 
              id="heroImg" 
              className="hero-img" 
              src="https://horizons-cdn.hostinger.com/a327e9ac-ed50-4fbc-a9cd-63a73a4a6614/77a1ff76c9a3df66a85f537f09cbb9a1.png" 
              alt="Samriddhi Gururani" 
            />
            <div className="hero-fade"></div>

            {/* Left Sticker: Mountain Badge */}
            <div className="sticker-on-photo sticker-left" style={{ '--r': '-8deg' }}>
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="46" fill="#F3A9C6" stroke="#4A3E58" strokeWidth="4" />
                <circle cx="50" cy="50" r="38" fill="#FFFDFB" />
                <path d="M50 25 L75 70 L25 70 Z" fill="#B9A6E8" stroke="#4A3E58" strokeWidth="3" strokeLinejoin="round" />
                <path d="M50 25 L62 47 L45 42 L38 52 Z" fill="#FFFDFB" opacity="0.6" />
                <circle cx="50" cy="38" r="4" fill="#FFE08A" />
                <text x="50" y="82" textAnchor="middle" fontFamily="'Baloo 2', cursive" fontSize="12" fontWeight="bold" fill="#4A3E58">WANDER</text>
              </svg>
            </div>

            {/* Right Sticker: Hiking Badge */}
            <div className="sticker-on-photo sticker-right" style={{ '--r': '12deg' }}>
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="10" width="80" height="80" rx="18" fill="#FFE08A" stroke="#4A3E58" strokeWidth="4" />
                <circle cx="50" cy="50" r="22" fill="#B9A6E8" stroke="#4A3E58" strokeWidth="3" />
                <path d="M50 34 L50 66 M34 50 L66 50" stroke="#FFFDFB" strokeWidth="4" strokeLinecap="round" />
                <path d="M44 44 L56 56 M56 44 L44 56" stroke="#4A3E58" strokeWidth="2.5" />
                <text x="50" y="84" textAnchor="middle" fontFamily="'Baloo 2', cursive" fontSize="11" fontWeight="bold" fill="#4A3E58">EXPLORE</text>
              </svg>
            </div>
          </div>

          {/* Bio profile info section */}
          <div className="content">
            <h1 className="name">✿ samriddhi</h1>
            
            {/* Typewriter Prompt Display */}
            <div className="tagline-wrap">
              <span className="tagline">
                {text || "\u00A0"}
                <span className="caret-cursor">|</span>
              </span>
            </div>

            <p className="bio-lines">
              B.Tech CSE student specializing in <span className="highlight-tag">AI/ML & Computer Vision</span>. 
              Always chasing summits, high-altitude passes, and building code in the mountains. <span className="heart">🏔️</span>
            </p>

            {/* Social Grid */}
            <div className="socials">
              <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="social-btn" title="GitHub">
                <Github />
              </a>
              <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn" title="LinkedIn">
                <Linkedin />
              </a>
              <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="social-btn" title="Instagram">
                <Instagram />
              </a>
              <a href={`mailto:${CONTACT.email}`} className="social-btn" title="Email">
                <Mail />
              </a>
              <a href={CONTACT.leetcode} target="_blank" rel="noopener noreferrer" className="social-btn" title="Leetcode">
                <Code2 />
              </a>
            </div>

            {/* Directory Link Pills */}
            <div className="pill-list">
              <a href="/" className="pill featured">
                <Compass className="pill-icon" />
                <span>Personal Portfolio</span>
                <span className="badge">New</span>
              </a>
              <a href="https://rsgroup-web.vercel.app" target="_blank" rel="noopener noreferrer" className="pill">
                <span>Winter summits</span>
                <ExternalLink className="pill-icon-mini" />
              </a>
              <a href="https://rsgroup-web.vercel.app" target="_blank" rel="noopener noreferrer" className="pill">
                <span>High-altitude passes</span>
                <ExternalLink className="pill-icon-mini" />
              </a>
              <a href="https://rsgroup-web.vercel.app" target="_blank" rel="noopener noreferrer" className="pill">
                <span>Hidden alpine lakes</span>
                <ExternalLink className="pill-icon-mini" />
              </a>
              <a href={CONTACT.resume} target="_blank" rel="noopener noreferrer" className="pill">
                <span>Download Resume</span>
              </a>
            </div>

            {/* Location & Contact badge */}
            <div className="contact-line">
              <MapPin size={15} className="pink-icon" />
              <span>Nainital, Uttarakhand</span>
              <span className="dot">•</span>
              <a href={`mailto:${CONTACT.email}`}>Get in Touch</a>
            </div>

            {/* Footer */}
            <footer>
              <span>made with</span>
              <svg viewBox="0 0 24 24" fill="currentColor" className="heart-svg">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span>by samriddhi · 2026</span>
            </footer>
          </div>

          {/* Floating Background Stickers */}
          <div className="sticker-float sf1" style={{ top: '65%', left: '-20px', '--r': '-15deg' }}>
            <svg width="40" height="40" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <polygon points="50,5 95,90 5,90" fill="#FFFDFB" stroke="#4A3E58" strokeWidth="6" />
              <polygon points="50,22 82,82 18,82" fill="#B9A6E8" />
              <polygon points="50,22 65,58 58,54 50,68" fill="#FFFDFB" opacity="0.7" />
            </svg>
          </div>
          <div className="sticker-float sf2" style={{ top: '80%', right: '-25px', '--r': '18deg' }}>
            <svg width="45" height="45" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 10 L62 38 L90 50 L62 62 L50 90 L38 62 L10 50 L38 38 Z" fill="#FFE08A" stroke="#4A3E58" strokeWidth="6" strokeLinejoin="round" />
              <circle cx="50" cy="50" r="10" fill="#F3A9C6" />
            </svg>
          </div>

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
          padding: 40px 20px;
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

        /* Main card setup */
        .card-container {
          width: 100%;
          max-width: 440px;
          position: relative;
          z-index: 2;
        }

        .card {
          background: rgba(255, 253, 251, 0.65);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1.5px solid rgba(255, 253, 251, 0.8);
          border-radius: 40px;
          box-shadow: 0 20px 50px rgba(74, 62, 88, 0.08), 
                      0 4px 12px rgba(74, 62, 88, 0.02);
          overflow: visible;
          position: relative;
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

        /* Portrait Wrap styling */
        .hero-wrap {
          position: relative;
          width: 100%;
          height: 340px;
          overflow: hidden;
          border-radius: 40px 40px 0 0;
        }

        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 25%;
          display: block;
        }

        .hero-fade {
          position: absolute;
          left: 0;
          right: 0;
          bottom: -1px;
          height: 100px;
          background: linear-gradient(to bottom, transparent, rgba(255, 253, 251, 0.65) 95%);
          pointer-events: none;
        }

        /* Stickers Bobbing animations */
        .sticker-on-photo {
          position: absolute;
          width: 72px;
          height: 72px;
          filter: drop-shadow(0 6px 12px rgba(74, 62, 88, 0.16));
          pointer-events: none;
          z-index: 10;
          animation: bob 5s ease-in-out infinite;
        }

        .sticker-left {
          top: 15px;
          left: 15px;
          animation-delay: 0.2s;
        }

        .sticker-right {
          top: 25px;
          right: 15px;
          animation-delay: 1.2s;
        }

        @keyframes bob {
          0%, 100% { transform: translateY(0) rotate(var(--r, 0deg)); }
          50% { transform: translateY(-8px) rotate(var(--r, 0deg)); }
        }

        /* Bio Content Section styling */
        .content {
          padding: 24px 32px 32px;
          text-align: center;
        }

        .name {
          font-family: var(--font-funky);
          font-weight: 800;
          font-size: 40px;
          letter-spacing: 0.2px;
          background: linear-gradient(100deg, var(--pink), var(--lav-deep) 90%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: var(--pink);
          line-height: 1.15;
          margin-bottom: 8px;
        }

        .tagline-wrap {
          display: inline-block;
          margin-bottom: 16px;
          position: relative;
          min-height: 38px;
        }

        .tagline-wrap::before {
          content: '';
          position: absolute;
          left: -10px;
          right: -10px;
          bottom: 2px;
          top: 36%;
          background: linear-gradient(100deg, #FFE08A, var(--pink) 85%);
          opacity: 0.45;
          transform: rotate(-1.5deg);
          border-radius: 6px;
          z-index: -1;
        }

        .tagline {
          font-family: var(--font-hand);
          font-weight: 700;
          font-size: 24px;
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

        .bio-lines {
          font-size: 15.5px;
          font-weight: 600;
          color: #5C4A6E;
          line-height: 1.75;
          margin-bottom: 24px;
        }

        .highlight-tag {
          color: #9C86D8;
          font-weight: 700;
        }

        .heart {
          color: var(--pink);
          font-size: 17px;
        }

        /* Social icons styling */
        .socials {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-bottom: 28px;
        }

        .social-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #FFFDFB;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(74, 62, 88, 0.06);
          box-shadow: 0 3px 0 rgba(74, 62, 88, 0.05);
          color: var(--ink);
          transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .social-btn svg {
          width: 20px;
          height: 20px;
        }

        .social-btn:hover {
          transform: translateY(-4px) scale(1.1) rotate(-6deg);
          background: var(--bg1);
          color: var(--lav-deep);
          border-color: rgba(156, 134, 216, 0.2);
          box-shadow: 0 6px 12px rgba(156, 134, 216, 0.15);
        }

        /* Directory Pills List styling */
        .pill-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 28px;
        }

        .pill {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 16px 24px;
          background: #FFFDFB;
          border: 1.5px solid var(--line);
          border-radius: 999px;
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 15px;
          color: var(--ink);
          box-shadow: 0 3px 0 rgba(74, 62, 88, 0.04);
          transition: all 0.25s ease;
          position: relative;
        }

        .pill:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(156, 134, 216, 0.15);
          background: var(--bg1);
          border-color: rgba(156, 134, 216, 0.2);
          color: var(--lav-deep);
        }

        .pill.featured {
          background: linear-gradient(135deg, #FFFDFB 0%, var(--bg1) 100%);
          border: 1.5px solid rgba(156, 134, 216, 0.25);
          box-shadow: 0 4px 10px rgba(156, 134, 216, 0.08);
        }

        .pill.featured:hover {
          background: linear-gradient(135deg, var(--bg1) 0%, #EFE7FB 100%);
          border-color: rgba(156, 134, 216, 0.4);
        }

        .pill-icon {
          width: 18px;
          height: 18px;
          color: var(--pink);
        }

        .pill-icon-mini {
          width: 14px;
          height: 14px;
          color: var(--muted);
          opacity: 0.7;
          margin-left: 2px;
          transition: transform 0.2s ease;
        }

        .pill:hover .pill-icon-mini {
          transform: translate(1px, -1px);
          color: var(--lav-deep);
        }

        .badge {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          background: var(--pink);
          color: #FFFDFB;
          font-size: 10px;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 99px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        /* Location badge */
        .contact-line {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 8px;
          font-size: 14px;
          font-weight: 700;
          color: #5C4A6E;
          background: linear-gradient(100deg, #FFFDFB, var(--bg1));
          border: 1px solid rgba(156, 134, 216, 0.15);
          border-radius: 99px;
          padding: 10px 20px;
          box-shadow: 0 4px 12px rgba(156, 134, 216, 0.08);
          margin-bottom: 24px;
        }

        .pink-icon {
          color: var(--pink);
        }

        .contact-line .dot {
          color: var(--pink);
          opacity: 0.8;
        }

        .contact-line a {
          color: var(--lav-deep);
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: color 0.2s ease;
        }

        .contact-line a:hover {
          color: var(--ink);
        }

        /* Footer styling */
        footer {
          margin-top: 16px;
          font-size: 12px;
          color: var(--muted);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          opacity: 0.8;
        }

        .heart-svg {
          width: 14px;
          height: 14px;
          color: var(--pink);
          animation: beat 1.2s ease-in-out infinite;
        }

        @keyframes beat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }

        /* Floating content stickers */
        .sticker-float {
          position: absolute;
          filter: drop-shadow(0 6px 12px rgba(74, 62, 88, 0.1));
          pointer-events: none;
          z-index: 10;
          animation: floatSticker 6s ease-in-out infinite;
        }

        .sf1 {
          animation-delay: 0.5s;
        }

        .sf2 {
          animation-delay: 2s;
        }

        @keyframes floatSticker {
          0%, 100% { transform: translateY(0) rotate(var(--r, 0deg)); }
          50% { transform: translateY(-10px) rotate(calc(var(--r, 0deg) + 3deg)); }
        }

        /* Mobile responsiveness */
        @media (max-width: 480px) {
          .links-page-wrapper {
            padding: 20px 10px;
          }
          .card {
            border-radius: 30px;
          }
          .hero-wrap {
            height: 280px;
            border-radius: 30px 30px 0 0;
          }
          .content {
            padding: 20px 20px 24px;
          }
          .name {
            font-size: 32px;
          }
          .tagline {
            font-size: 20px;
          }
          .bio-lines {
            font-size: 14.5px;
            line-height: 1.6;
          }
          .social-btn {
            width: 42px;
            height: 42px;
          }
          .social-btn svg {
            width: 18px;
            height: 18px;
          }
          .pill {
            padding: 12px 18px;
            font-size: 14px;
          }
        }

        /* Preferences reduced motion styling */
        @media (prefers-reduced-motion: reduce) {
          .animate-fade-rise {
            opacity: 1;
            transform: none;
            animation: none;
          }
          .sticker-on-photo, .sticker-float, .heart-svg {
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
