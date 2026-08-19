import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Paperclip, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const prompts = [
  "Ready to explore peace in the mountains…",
  "A scenic winter summit at Kedarkantha…",
  "Climbing high-altitude trails to Brahmatal…"
];

function Categories() {
  const navigate = useNavigate();
  const [typedText, setTypedText] = useState("");
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768;
    }
    return false;
  });
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const shouldReduceMotion = prefersReduced || isMobile;

  useEffect(() => {
    if (shouldReduceMotion) {
      setTypedText(prompts[0]);
      return;
    }

    let timer;
    const fullText = prompts[currentIdx];

    if (isDeleting) {
      // Deleting character backspaces: 22ms
      timer = setTimeout(() => {
        setTypedText((prev) => prev.substring(0, prev.length - 1));
      }, 22);

      if (typedText === "") {
        setIsDeleting(false);
        setCurrentIdx((prev) => (prev + 1) % prompts.length);
        // Pause between phrases: 300ms
        clearTimeout(timer);
        timer = setTimeout(() => {}, 300);
      }
    } else {
      // Typing entry: 42ms + jitter
      timer = setTimeout(() => {
        setTypedText(fullText.substring(0, typedText.length + 1));
      }, 42 + Math.random() * 20);

      if (typedText === fullText) {
        // Hold full text: 1900ms
        clearTimeout(timer);
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1900);
      }
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentIdx, shouldReduceMotion]);

  const HeadingTag = shouldReduceMotion ? "h1" : motion.h1;
  const ParagraphTag = shouldReduceMotion ? "p" : motion.p;
  const DivTag = shouldReduceMotion ? "div" : motion.div;
  const ImgTag = shouldReduceMotion ? "img" : motion.img;

  return (
    <div className="relative w-full min-h-[85vh] md:h-[90vh] flex flex-col justify-start md:justify-center items-center text-center bg-[#f4ede1] overflow-hidden px-4 md:px-6 pt-36 md:pt-32 pb-20 select-none">
      {/* Ambient glow washes */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-gradient-to-b from-[#f25b23]/10 to-transparent rounded-full blur-3xl pointer-events-none z-10" />
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-gradient-to-b from-[#f25b23]/5 to-transparent rounded-full blur-3xl pointer-events-none z-10" />

      {/* Pinned Bottom Adventure Landscape */}
      <div className="absolute bottom-0 left-0 right-0 h-[55vh] pointer-events-none overflow-hidden select-none z-0">
        <ImgTag
          src="https://zxdefgavgwfxastwmmjm.supabase.co/storage/v1/object/public/assets/rove.png"
          alt="Adventure Landscape"
          className="w-full h-full object-cover object-[center_42%] origin-[center_68%]"
          {...(!shouldReduceMotion && {
            initial: { scale: 1 },
            animate: { scale: 1.05 },
            transition: {
              duration: 22,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }
          })}
        />
        {/* Melt dissolve overlay gradient from top to bottom (exactly like ROVE) */}
        <div 
          className="absolute inset-0 z-10" 
          style={{
            background: "linear-gradient(to bottom, #f4ede1 0%, rgba(244, 237, 225, 0.88) 16%, rgba(244, 237, 225, 0.38) 36%, rgba(244, 237, 225, 0) 60%, rgba(244, 237, 225, 0.12) 100%)"
          }}
        />
      </div>

      {/* Centered Content Container */}
      <div className="relative z-20 flex flex-col items-center max-w-4xl">
        {/* Headline */}
        <HeadingTag
          className="font-display font-semibold text-3xl sm:text-6xl md:text-7xl lg:text-[92px] text-[#2b241d] tracking-tight leading-[1.1] sm:leading-[1.0] mb-6 px-2"
          {...(!shouldReduceMotion && {
            initial: { opacity: 0, y: 26, filter: "blur(12px)" },
            animate: { opacity: 1, y: 0, filter: "blur(0)" },
            transition: { delay: 0.1, duration: 0.95, ease: [0.2, 0.7, 0.2, 1] }
          })}
        >
          Where should we<br />take <span className="text-[#f25b23]">you?</span>
        </HeadingTag>

        {/* Description Subline */}
        <ParagraphTag
          className="text-sm sm:text-lg md:text-xl text-[#2b241d] max-w-xl mb-10 leading-relaxed font-semibold px-2 sm:px-0"
          {...(!shouldReduceMotion && {
            initial: { opacity: 0, y: 15 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.25, duration: 0.8 }
          })}
        >
          Tell us where you're headed and what you love — get a trip built just for you.
        </ParagraphTag>

        {/* Prompt Input Card */}
        <DivTag
          className="w-full max-w-[680px] bg-white/62 backdrop-blur-xl border border-white/50 rounded-[22px] shadow-2xl shadow-[rgba(43,36,29,0.15)] p-2.5 pl-4 sm:p-3.5 sm:pl-7 flex items-center gap-3 sm:gap-5 mb-6 overflow-hidden"
          {...(!shouldReduceMotion && {
            initial: { opacity: 0, y: 20, filter: "blur(8px)" },
            animate: { opacity: 1, y: 0, filter: "blur(0)" },
            transition: { delay: 0.4, duration: 0.8 }
          })}
        >
          <div className="flex-1 text-left min-w-0 flex items-center">
            <span
              className={`block text-xs sm:text-base font-normal truncate w-full ${
                typedText === "" ? "text-[#6f6357]/60" : "text-[#2b241d]"
              }`}
            >
              {typedText || "\u00A0"}
            </span>
            {!shouldReduceMotion && (
              <span className="inline-block w-[2px] h-[19px] bg-[#f25b23] ml-1 animate-pulse shrink-0" />
            )}
          </div>

          {/* Action CTA */}
          <button
            onClick={() => navigate("/alltreks")}
            className="group bg-[#2b241d] hover:bg-[#f25b23] text-[#f4ede1] font-semibold text-xs sm:text-base px-4 py-2.5 sm:px-7 sm:py-3.5 rounded-[12px] sm:rounded-[16px] flex items-center gap-1.5 sm:gap-2.5 shrink-0 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg shadow-[rgba(43,36,29,0.15)]"
          >
            Plan my trip
            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </button>
        </DivTag>

        {/* Suggestion Chips */}
        <DivTag
          className="flex flex-wrap gap-3 justify-center"
          {...(!shouldReduceMotion && {
            initial: { opacity: 0, y: 15 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.55, duration: 0.8 }
          })}
        >
          {["Winter summits", "High-altitude passes", "Hidden alpine lakes"].map((chip) => (
            <button
              key={chip}
              onClick={() => navigate(`/alltreks?search=${encodeURIComponent(chip)}`)}
              className="flex items-center gap-2 px-5 py-2.5 bg-white/55 backdrop-blur-md border border-[#2b241d]/15 rounded-full text-sm font-bold text-[#2b241d] hover:bg-white/90 hover:border-[#f25b23]/30 transition-all duration-200 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#f25b23]" />
              {chip}
            </button>
          ))}
        </DivTag>
      </div>
    </div>
  );
}

export default Categories;
