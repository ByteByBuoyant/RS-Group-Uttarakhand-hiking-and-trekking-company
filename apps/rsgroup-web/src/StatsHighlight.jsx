import React from "react";
import {
  HeartHandshake,
  Award,
  Building2,
  HandHeart,
  Earth,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const BLe = [
  {
    id: 1,
    icon: HandHeart,
    title: "Community Initiatives",
    desc: "Supporting local Himalayan communities through eco-friendly tourism and skill programs.",
  },
  {
    id: 2,
    icon: Earth,
    title: "Environmental Impact",
    desc: "Organizing clean-up drives and reforestation projects across Uttarakhand’s trekking trails.",
  },
  {
    id: 3,
    icon: Users,
    title: "Volunteer Programs",
    desc: "Engaging adventure lovers to participate in sustainable travel and social outreach.",
  },
];

const _U = [
  {
    name: "Adventure Tour Operator",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbiJnW5rtaebKRSdGmDPMEmFgKeKB8yi2LbQ&s",
  },
  {
    name: "Eco Tourism Certified",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiS9Q1sZUCTFigbRhxmaoVnvv5lrfpexpHeg&s",
  },
  {
    name: "Government Approved",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw3tJlcISkGIphVNqT3huKm7BeK13mRbHl7Q&s",
  },
];

const PLe = [
  {
    name: "Incredible India",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg8BspNBeww95AXVVW_c7SZncZzLEBdihWNA&s",
  },
  {
    name: "Uttarakhand Tourism",
    logo: "https://i.pinimg.com/736x/37/1a/b7/371ab782282a30b3d71f2a82c633feb1.jpg",
  },
  {
    name: "TripAdvisor",
    logo: "https://1000logos.net/wp-content/uploads/2019/08/Tripadvisor-Logo.png",
  },
  {
    name: "Paytm Travel",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQafsJ79iTX_fTI5WBqZXj5Me5ORd4d22PxfA&s",
  },
];

function StatsHighlight() {
  return (
    <section className="relative w-full bg-[#f4ede1] pt-24 pb-8 overflow-hidden">
      {/* Background glow lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#f25b23]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 md:px-10 z-10 relative">
        {/* Contributions Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-display font-semibold text-[#2b241d] flex justify-center items-center gap-3 tracking-tight"
          >
            <HeartHandshake className="w-8 h-8 text-[#f25b23]" />
            <span>
              Our{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f25b23] to-[#f25b23]">
                Contributions & Partners
              </span>
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[#6f6357] mt-4 max-w-2xl mx-auto font-light sm:text-lg"
          >
            We take pride in creating sustainable adventures that empower
            people, protect nature, and connect communities.
          </motion.p>
        </div>

        <hr className="border-0 h-[1px] bg-[#efe5d5]/50 rounded-full mb-16" />

        {/* Contributions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {BLe.map(({ id: t, icon: IconComponent, title: n, desc: a }, idx) => (
            <motion.div
              key={t}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                scale: 1.03,
                y: -8,
                boxShadow: "0 20px 40px rgba(43, 36, 29, 0.12)",
                borderColor: "rgba(181, 118, 63, 0.25)",
              }}
              className="bg-white rounded-2xl border border-[#2b241d]/12 p-8 text-center transition-all duration-300"
            >
              <div className="mx-auto mb-6 p-4 rounded-2xl bg-gradient-to-br from-[#f25b23] via-[#f25b23] to-black w-fit shadow-lg shadow-[#f25b23]/10">
                <IconComponent className="w-6 h-6 text-[#f4ede1]" />
              </div>
              <h3 className="text-xl font-display font-semibold text-[#2b241d] mb-3">
                {n}
              </h3>
              <p className="text-sm text-[#6f6357] leading-relaxed font-light">
                {a}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Certified Excellence */}
        <div className="mb-24 text-center overflow-hidden">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-display font-semibold text-[#2b241d] mb-10 flex justify-center items-center gap-3"
          >
            <Award className="w-6 h-6 text-[#f25b23]" />
            Certified Excellence
          </motion.h3>

          {/* Infinite marquee */}
          <div className="relative w-full overflow-hidden py-4 mask-gradient">
            <motion.div
              className="flex gap-16 w-max"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                repeat: Infinity,
                duration: 25,
                ease: "linear",
              }}
            >
              {/* First loop */}
              {_U.map((t, idx) => (
                <div
                  key={`cert-1-${idx}`}
                  className="flex flex-col items-center justify-center min-w-[200px] bg-white border border-[#2b241d]/12 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <img
                    src={t.img}
                    alt={t.name}
                    className="h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                  <p className="text-xs text-[#6f6357] mt-4 tracking-wide uppercase font-semibold">
                    {t.name}
                  </p>
                </div>
              ))}
              {/* Second loop (duplication for infinite scrolling) */}
              {_U.map((t, idx) => (
                <div
                  key={`cert-2-${idx}`}
                  className="flex flex-col items-center justify-center min-w-[200px] bg-white border border-[#2b241d]/12 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <img
                    src={t.img}
                    alt={t.name}
                    className="h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
                  />
                  <p className="text-xs text-[#6f6357] mt-4 tracking-wide uppercase font-semibold">
                    {t.name}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Partners */}
        <div className="text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-display font-semibold text-[#2b241d] mb-10 flex justify-center items-center gap-3"
          >
            <Building2 className="w-6 h-6 text-[#f25b23]" />
            Our Trusted Partners
          </motion.h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-center">
            {PLe.map((t, idx) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 10px 25px rgba(43, 36, 29, 0.12)",
                  borderColor: "rgba(181, 118, 63, 0.25)",
                }}
                className="bg-white rounded-2xl border border-[#2b241d]/12 p-6 flex items-center justify-center transition-all duration-300 aspect-[16/9]"
              >
                <img
                  src={t.logo}
                  alt={t.name}
                  className="max-h-12 w-auto object-contain transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative subtle border line */}
      <hr className="mt-16 border-0 h-[2px] bg-[#f25b23]/30" />
    </section>
  );
}

export default StatsHighlight;
