import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const dIe = [
  {
    q: "How to book a trek?",
    a: `Booking a trek is simple:
1. Choose your preferred trek and date from our website!
2. Fill out the booking form!
3. Pay the advance amount to confirm your seat!
4. Receive booking confirmation and trek details via email!
Our team will guide you through the process if you need any assistance.`,
  },
  {
    q: "I’m a solo woman. Is it safe for me?",
    a: "Yes, absolutely. We welcome many solo women trekkers on our expeditions. Your safety is our top priority. All our treks are led by experienced guides, supported by trained staff, and conducted in groups. We ensure safe accommodations, well-planned itineraries, and constant supervision throughout the trek. Solo women regularly join our groups and often find the experience empowering and enjoyable.",
  },
  {
    q: "What are some easy treks for beginners?",
    a: "We offer several beginner-friendly treks that require no prior trekking experience. These treks feature well-marked trails, gradual ascents, comfortable walking hours, and ample rest breaks. They are ideal for first-time trekkers, families, and those looking to experience the mountains at a relaxed pace. Our team will happily recommend the best option based on your fitness level and preferences.",
  },
  {
    q: "Can I join your groups as a solo trekker?",
    a: "Definitely. Many of our participants join as solo trekkers. You’ll be grouped with like-minded adventurers, making it a great opportunity to meet new people and share memorable experiences. Our fixed-departure treks are perfect for solo travelers.",
  },
  {
    q: "Do you have any group discounts?",
    a: "Yes, we offer attractive group discounts for friends, families, corporate teams, and educational groups. The discount depends on the group size and trek duration. If you’re planning to trek with a group, feel free to contact us with your details for a customized quote.",
  },
  {
    q: "What documents do I need to carry on the trek?",
    a: `You should carry:
• A valid government-issued photo ID (passport, Aadhaar, driving license, etc.)
• Trek permits (we assist with these where applicable)
• Medical certificate (if required for high-altitude treks)
• Personal travel insurance (recommended)
Please ensure you have both physical and digital copies.`,
  },
  {
    q: "What happens if some members of the team need to turn back before the summit?",
    a: "Safety always comes first. If a trekker feels unwell or is unable to continue due to health, weather, or other reasons, our guides will assess the situation. The trekker will be safely escorted back by a staff member while the rest of the group continues if conditions permit. Turning back is a responsible decision and is treated with complete understanding—reaching the summit is optional, returning safely is mandatory.",
  },
  {
    q: "How fit do I need to be for a trek?",
    a: "Basic fitness is sufficient for easy treks. For moderate and difficult treks, regular walking, light cardio, and stamina training are recommended. We provide a fitness guide after booking to help you prepare.",
  },
  {
    q: "What is the age limit for your treks?",
    a: "The minimum age generally ranges from 8–12 years depending on the trek. There is no strict upper age limit as long as the participant is medically fit and comfortable with the trek difficulty.",
  },
  {
    q: "What safety measures do you follow on treks?",
    a: "We follow strict safety protocols including trained guides, first-aid kits, oxygen support (where required), regular health checks, and emergency evacuation plans. Your safety is our top priority at all times.",
  },
  {
    q: "How do you handle altitude sickness?",
    a: "Our guides are trained to recognize early symptoms of altitude sickness. We follow proper acclimatization schedules and monitor trekkers closely. If symptoms persist, the trekker is immediately escorted to a lower altitude.",
  },
  {
    q: "Is travel insurance mandatory?",
    a: "Travel insurance is not mandatory but strongly recommended, especially for high-altitude or multi-day treks. It provides coverage for medical emergencies, evacuation, and trip cancellations.",
  },
  {
    q: "What kind of accommodation is provided?",
    a: "Accommodation varies by trek and includes tents, guesthouses, or mountain lodges. All stays are clean, safe, and suitable for mountain conditions.",
  },
  {
    q: "What kind of food is provided on the trek?",
    a: "We serve fresh, nutritious, and hygienically prepared meals suitable for trekking. Vegetarian meals are always available, and special dietary requirements can be accommodated with prior notice.",
  },
  {
    q: "Do you provide trekking equipment?",
    a: "Basic equipment such as tents, sleeping bags, and mattresses are included. Personal gear like trekking shoes, jackets, and backpacks need to be carried by participants. Rental options may be available for select items.",
  },
  {
    q: "How big are your trekking groups?",
    a: "We maintain small group sizes to ensure safety, better coordination, and a personalized experience.",
  },
  {
    q: "Can I charge my phone or camera during the trek?",
    a: "Charging facilities are limited. We recommend carrying power banks for your electronic devices.",
  },
  {
    q: "Do you organize private or customized treks?",
    a: "Yes, we organize private, customized, and corporate treks tailored to your schedule, fitness level, and preferences.",
  },
];

function FAQs() {
  const [activeIdx, setActiveIdx] = useState(null);

  const toggleFAQ = (idx) => {
    setActiveIdx(activeIdx === idx ? null : idx);
  };

  return (
    <div className="min-h-screen w-full bg-[#f4ede1] text-[#2b241d] font-sans">
      

      <main className="max-w-4xl mx-auto px-6 py-28 md:py-36">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-4 text-[#f25b23]"
          >
            <HelpCircle className="w-8 h-8" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Support Center
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-display font-display font-semibold text-[#2b241d] tracking-tight"
          >
            Frequently Asked{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f25b23] to-[#f25b23]">
              Questions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#6f6357] mt-4 max-w-lg mx-auto font-light"
          >
            Got questions about trekking with RS Group? Find answers below or
            contact our team directly.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          {dIe.map((faq, idx) => (
            <div
              key={idx}
              className="border border-[#2b241d]/12 rounded-2xl overflow-hidden bg-[#efe5d5]/40 backdrop-blur-md shadow-lg transition-all duration-300 hover:border-[#f25b23]/20"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full flex justify-between items-center px-6 py-5 text-left font-medium text-[#2b241d] hover:bg-[#efe5d5]/30 transition duration-200"
              >
                <span className="text-base sm:text-lg pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#6f6357] transition-transform duration-300 ${activeIdx === idx ? "rotate-180 text-[#f25b23]" : ""}`}
                />
              </button>

              <AnimatePresence initial={false}>
                {activeIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-1 text-[#6f6357] text-sm sm:text-base leading-relaxed whitespace-pre-line border-t border-[#2b241d]/12">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </main>

      
    </div>
  );
}

export default FAQs;
