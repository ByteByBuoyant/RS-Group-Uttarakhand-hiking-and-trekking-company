import React, { useState } from "react";
import { Users, CirclePlay, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ULe = [
  {
    id: 1,
    type: "image",
    src: "/about_kedarkantha.png",
    title: "Kedarkantha Summit",
  },
  {
    id: 2,
    type: "image",
    src: "/about_highlights.png",
    title: "Team Adventure Highlights",
  },
  {
    id: 3,
    type: "image",
    src: "/about_campsite.png",
    title: "Campsite Morning",
  },
  {
    id: 4,
    type: "image",
    src: "/about_trail.png",
    title: "Trail Through the Pines",
  },
  {
    id: 5,
    type: "image",
    src: "/about_madhmaheshwar.jpg",
    title: "Divine Shrine of Madhmaheshwar",
  },
  {
    id: 6,
    type: "image",
    src: "/about_alpine_lakes.png",
    title: "Experience Hidden Alpine Lakes",
  },
];

function AboutHighlight() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section className="relative w-full bg-[#e0ccb3] py-24 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-0 w-80 h-80 rounded-full bg-[#f25b23]/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 rounded-full bg-[#f25b23]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 z-10 relative">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-semibold text-[#2b241d] flex justify-center items-center gap-3 tracking-tight"
          >
            <Users className="w-8 h-8 text-[#f25b23]" />
            <span>
              Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f25b23] to-[#f25b23]">
                Trek Moments
              </span>
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[#2b241d]/85 mt-4 max-w-2xl mx-auto font-semibold sm:text-lg"
          >
            Glimpse into our amazing trekking experiences — from sunrise peaks
            to laughter-filled trails.
          </motion.p>
        </div>

        <hr className="border-0 h-[1px] bg-[#2b241d]/12 rounded-full mb-16" />

        {/* Moments Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {ULe.map((moment, idx) => (
            <motion.div
              key={moment.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 40px rgba(43, 36, 29, 0.15)",
              }}
              className="relative rounded-2xl overflow-hidden border border-[#2b241d]/12 hover:border-[#f25b23]/40 bg-white group cursor-pointer aspect-[4/3]"
              onClick={() =>
                moment.type === "video" ? setActiveVideo(moment.src) : null
              }
            >
              {moment.type === "image" ? (
                <img
                  src={moment.src}
                  alt={moment.title}
                  className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              ) : (
                <div className="relative h-full w-full bg-black/20">
                  <video
                    src={moment.src}
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center transition-colors group-hover:bg-black/20">
                    <CirclePlay className="w-14 h-14 text-white/90 group-hover:text-[#f25b23] group-hover:scale-110 transition-all duration-300" />
                  </div>
                </div>
              )}
              {/* Image title overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-95 p-5 flex flex-col justify-end">
                <p className="text-white font-medium text-sm sm:text-base tracking-wide translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {moment.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal Popup */}
      <AnimatePresence>
        {activeVideo && (
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-md backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl rounded-2xl overflow-hidden border border-[#2b241d]/12 bg-[#f4ede1] shadow-2xl shadow-[rgba(43,36,29,0.12)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-50 text-[#2b241d]/70 hover:text-[#2b241d] bg-black/20 hover:bg-black/60 p-2 rounded-full border border-[#2b241d]/12 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <video
                src={activeVideo}
                controls
                autoPlay
                className="w-full h-auto aspect-video object-contain"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default AboutHighlight;
