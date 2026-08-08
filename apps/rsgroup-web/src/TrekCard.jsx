import React from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Clock, Mountain, Activity, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function TrekCard({ event: t, className }) {
  const e = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{
        y: -10,
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(43, 36, 29, 0.12)",
      }}
      className={`relative bg-white rounded-2xl overflow-hidden 
                 border border-[#2b241d]/12 hover:border-[#f25b23]/30
                 transition-all duration-300 ${className}`}
    >
      <div className="relative h-48 overflow-hidden group">
        <img
          src={t.image}
          alt={t.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Soft gradient overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#2b241d]/80 via-transparent to-transparent opacity-85" />
      </div>

      <div className="p-5 space-y-4">
        <h3 className="text-xl font-display font-semibold text-[#2b241d] tracking-tight leading-snug line-clamp-1 group-hover:text-[#f25b23] transition-colors duration-300">
          {t.title}
        </h3>

        <div className="grid grid-cols-2 gap-3 text-[15px] font-semibold text-[#6f6357]">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#f25b23] shrink-0" />
            <span className="truncate">{t.venue}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#f25b23] shrink-0" />
            <span>{t.days}</span>
          </div>
          <div className="flex items-center gap-2">
            <Mountain className="w-4 h-4 text-[#f25b23] shrink-0" />
            <span>{t.altitude} ft</span>
          </div>
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#f25b23] shrink-0" />
            <span className="truncate">{t.grade}</span>
          </div>
        </div>

        <div className="pt-2 flex justify-start">
          <button
            onClick={() => e(t.url, { state: { event: t } })}
            className="group flex items-center justify-center gap-2 
                       px-5 py-2 rounded-full text-[#f4ede1] font-medium text-sm
                       bg-[#f25b23] hover:bg-[#2b241d]
                       transition-all duration-300"
          >
            Learn More
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default TrekCard;
