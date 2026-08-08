import React, { useState, useEffect } from "react";
import { ChevronLeft, Quote, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Zh = [
  {
    name: "Aarav Sharma",
    role: "Trekking Enthusiast",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    quote:
      "The Kedarkantha trek organized by RS Group Uttarakhand was absolutely breathtaking! The team ensured safety and comfort throughout. Highly recommended!",
  },
  {
    name: "Priya Mehta",
    role: "Travel Blogger",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
    quote:
      "Such a well-planned adventure! I loved how professional and warm the guides were. The scenic beauty was beyond words!",
  },
  {
    name: "Rahul Verma",
    role: "Adventure Seeker",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    quote:
      "An unforgettable experience! From base camp to summit, every moment was magical. RS Group made my dream trek possible.",
  },
  {
    name: "Sneha Kapoor",
    role: "Nature Lover",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
    quote:
      "The attention to detail and the hospitality of RS Group were amazing. I’ve already booked my next trek with them!",
  },
];

function Testimonials() {
  const [t, e] = useState(0);

  useEffect(() => {
    const o = setInterval(() => {
      n();
    }, 6000);
    return () => clearInterval(o);
  }, [t]);

  const n = () => {
    e((o) => (o + 1) % Zh.length);
  };

  const a = () => {
    e((o) => (o - 1 + Zh.length) % Zh.length);
  };

  return (
    <section className="relative w-full bg-[#efe5d5] py-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#f25b23]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 text-center z-10 relative">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-semibold text-[#2b241d] tracking-tight"
          >
            What Our{" "}
            <span className="text-[#f25b23]">
              Adventurers
            </span>{" "}
            Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#2b241d]/85 mt-4 max-w-xl mx-auto font-medium"
          >
            Hear stories from trekkers who’ve experienced the thrill and beauty
            of Uttarakhand with us.
          </motion.p>
        </div>

        <div className="relative flex flex-col items-center justify-center min-h-[380px]">
          {/* Navigation Arrows */}
          <button
            onClick={a}
            className="absolute left-0 sm:left-4 z-30 bg-white/60 hover:bg-white/80 border border-[#2b241d]/12 text-[#2b241d] rounded-full p-3 shadow-md transition-all duration-200 hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={n}
            className="absolute right-0 sm:right-4 z-30 bg-white/60 hover:bg-white/80 border border-[#2b241d]/12 text-[#2b241d] rounded-full p-3 shadow-md transition-all duration-200 hover:scale-110 active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Testimonial Card */}
          <div className="relative w-full max-w-3xl px-8 sm:px-16 min-h-[260px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={t}
                initial={{ opacity: 0, scale: 0.96, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.96, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white rounded-3xl border border-[#2b241d]/12 p-8 sm:p-10 text-[#2b241d] w-full shadow-lg flex flex-col items-center justify-center"
              >
                <Quote className="w-10 h-10 text-[#f25b23] mb-6 opacity-90" />

                <p className="text-base sm:text-lg italic mb-8 leading-relaxed font-semibold text-[#2b241d]/90 text-center max-w-2xl">
                  “{Zh[t].quote}”
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={Zh[t].image}
                    alt={Zh[t].name}
                    className="w-12 h-12 rounded-full border-2 border-[#f25b23]/50 object-cover shadow-lg"
                  />
                  <div className="text-left">
                    <h4 className="text-base font-display font-bold text-[#2b241d] tracking-wide">
                      {Zh[t].name}
                    </h4>
                    <p className="text-xs text-[#6f6357] font-semibold">
                      {Zh[t].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bullet dots indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {Zh.map((_, s) => (
            <button
              key={s}
              onClick={() => e(s)}
              className={`h-1.5 rounded-full transition-all duration-300 ${s === t ? "w-6 bg-[#f25b23]" : "w-1.5 bg-[#2b241d]/20 hover:bg-[#2b241d]/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
