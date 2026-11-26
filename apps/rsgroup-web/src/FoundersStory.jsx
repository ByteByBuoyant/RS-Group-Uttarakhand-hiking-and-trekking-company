import React from "react";
import { useNavigate } from "react-router-dom";
import { Award, Bike, Flag, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ACHIEVEMENTS = [
  {
    icon: Flag,
    stat: "15,000 km • 4 Months",
    title: "Indian & Asian Book of Records",
    desc: "Sagar, Rishabh, and Pankaj cycled across all Indian states and 2 Union Territories, earning national and continental record recognition.",
  },
  {
    icon: Bike,
    stat: "2,500 km • 20 Days",
    title: "High-Altitude Ladakh Expedition",
    desc: "Sagar, Rishabh, and Pankaj conquered rugged Himalayan passes on a 2,500 km endurance cycling journey to Ladakh.",
  },
  {
    icon: Award,
    stat: "315 km • 5 Days",
    title: "Kumaon Ultra Run & Run2Live",
    desc: "Rishabh and Sagar ran 315 km across Kumaon in 5 days, and together the three friends help lead Nainital's annual Run2Live marathon.",
  },
];

function FoundersStory() {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#efe5d5]/65 border-y border-[#2b241d]/10 py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#f25b23]/30 text-xs font-semibold text-[#2b241d] mb-4">
              <MapPin className="w-3.5 h-3.5 text-[#f25b23]" />
              Based in Tallital, Nainital, Uttarakhand • Est. 2017
            </div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-display font-semibold text-[#2b241d] tracking-tight"
            >
              Founded by Three Friends —{" "}
              <span className="text-[#f25b23]">Sagar, Rishabh &amp; Pankaj</span>
            </motion.h2>
            <p className="mt-4 max-w-3xl text-[#2b241d]/85 text-base sm:text-lg leading-relaxed font-medium">
              Headquartered in <strong>Nainital, Uttarakhand</strong>,{" "}
              <strong>RS Group Uttarakhand</strong> began with three friends —{" "}
              <strong>Sagar, Rishabh, and Pankaj</strong> — united by a passion
              for mountain running, endurance cycling, and the Himalayas. Today,
              their record-setting mountain experience powers every trek, school
              camp, and expedition we lead.
            </p>
          </div>

          <button
            onClick={() => navigate("/aboutUs")}
            className="self-start lg:self-end shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2b241d] hover:bg-[#f25b23] text-[#f4ede1] text-sm font-semibold transition-all duration-200"
          >
            Read Our Full Story
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white rounded-2xl border border-[#2b241d]/12 hover:border-[#f25b23]/40 p-6 shadow-sm transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#f25b23]/12 text-[#f25b23]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#f25b23] bg-[#efe5d5]/70 px-3 py-1 rounded-full">
                    {item.stat}
                  </span>
                </div>
                <h3 className="text-lg font-display font-semibold text-[#2b241d] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6f6357] leading-relaxed">
                  {item.desc}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FoundersStory;
