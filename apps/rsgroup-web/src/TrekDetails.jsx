import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  MapPin,
  Mountain,
  Calendar,
  CircleCheck,
  CircleX,
  CircleHelp,
} from "lucide-react";
import { motion } from "framer-motion";
import { BACKEND_API_URL, BACKEND_STORAGE_URL } from "@/lib/config";
import fetchTreks, { BRAHMATAL_TREK } from "./FetchTreksAPI";
import BookingModal from "./BookingModal";
import ItineraryRequestModal from "./ItineraryRequestModal";

const GTe = async (trekId) => {
  const res = await fetch(`${BACKEND_API_URL}/trek-itineraries/trek/${trekId}`);
  const data = await res.json();
  return data.data;
};

const _X = async (trekId) => {
  const res = await fetch(`${BACKEND_API_URL}/trek-inclusions/trek/${trekId}`);
  const data = await res.json();
  return data.data ?? [];
};

const CX = async (trekId) => {
  const res = await fetch(`${BACKEND_API_URL}/trek-exclusions/trek/${trekId}`);
  const data = await res.json();
  return data.data ?? [];
};

const MX = async (trekId) => {
  const res = await fetch(`${BACKEND_API_URL}/trek-attributes/trek/${trekId}`);
  const data = await res.json();
  return data.data ?? [];
};

const BRAHMATAL_ITINERARY = [
  {
    day_number: 1,
    title: "RISHIKESH TO LOHAJUNG (DRIVE 250KM | 9-10 HOURS)",
    description:
      "<p>Your journey kicks off with a long yet scenic drive from Rishikesh to Lohajung, the base camp of the Brahmatal trek.</p><p>The 250 km road trip takes you through the enchanting towns of Devprayag, Srinagar, Rudraprayag, and Karnaprayag, following the sacred rivers Ganga and Alaknanda.</p><p>Along the way, you'll witness breathtaking views of terraced fields, pine and oak forests, and distant Himalayan peaks.</p><p>By evening, you'll reach Lohajung — a serene Himalayan village surrounded by snow-clad mountains, where you check into a guesthouse and prepare for the trek ahead.</p>",
  },
  {
    day_number: 2,
    title: "LOHAJUNG TO BEKALTAL (TREK 6 KM | 4-5 HOURS)",
    description:
      "<p>Your first trekking day begins from Lohajung, gradually ascending through dense oak and rhododendron forests.</p><p>The trail is filled with the soothing sound of mountain streams and chirping birds, making the walk peaceful and refreshing.</p><p>During winters, the path is often covered with snow, adding to the charm of the trek. After a few hours of hiking, you'll reach the beautiful Bekaltal Lake, surrounded by thick forests and snow-laden trees.</p><p>The campsite near Bekaltal is serene and magical, offering a perfect Himalayan camping experience under the starry night sky.</p>",
  },
  {
    day_number: 3,
    title: "BEKALTAL TO BRAHMATAL (TREK 7 KM | 5-6 HOURS)",
    description:
      "<p>The trail today takes you on a gradual ascent from Bekaltal through enchanting oak and rhododendron forests, slowly opening up to snow-covered meadows.</p><p>As you trek higher, the forest gives way to breathtaking views of towering Himalayan ranges, including peaks like Mt. Trishul and Nanda Ghunti.</p><p>The serene beauty of the snow-laden landscapes makes the journey truly magical.</p><p>By afternoon, you reach the Brahmatal campsite, located in a wide meadow surrounded by snowy ridges, offering a mesmerizing setting for your overnight stay.</p>",
  },
  {
    day_number: 4,
    title: "BRAHMATAL TO BRAHMATAL TOP AND BACK (TREK 7 KM | 6-7 HOURS)",
    description:
      "<p>Today is the most awaited summit day of the Brahmatal trek! The trail begins with a steady ascent through snow-laden ridges, gradually opening up to vast alpine meadows.</p><p>As you climb higher, the majestic Himalayan panorama unfolds — with peaks like Mt. Trishul, Nanda Ghunti, and Chaukhamba dominating the skyline.</p><p>Reaching the Brahmatal Top feels rewarding as you stand amidst 360° views of the mighty mountains, an unforgettable Himalayan spectacle.</p><p>After spending some time at the summit, soaking in the beauty and capturing memories, you descend back to the campsite for the night.</p>",
  },
  {
    day_number: 5,
    title:
      "BRAHMATAL TO LOHAJUNG & DRIVE TO RISHIKESH (TREK 9 KM | 5-6 HOURS, DRIVE 250 KM | 9-10 HOURS)",
    description:
      "<p>Your final day begins with a descent from the Brahmatal campsite back to Lohajung.</p><p>The trail winds through snow-covered forests and meadows, offering one last chance to admire the pristine beauty of the Himalayas.</p><p>After reaching Lohajung by late morning or afternoon, you bid farewell to the mountains and begin the return journey.</p><p>A scenic drive along the Alaknanda and Ganga rivers brings you back to Rishikesh by late evening, marking the end of your unforgettable Brahmatal adventure.</p>",
  },
];

const BRAHMATAL_INCLUSIONS = [
  { item: "Accommodation (Guest house, Home stay, Camping)" },
  { item: "Meals while on trek (Veg)" },
  { item: "Trek equipment: Sleeping bag, mattress, tent, kitchen & dinning" },
  { item: "Tent, toilet tent, Utensils" },
  { item: "All necessary permits and entry fees" },
  { item: "First aid medical kits" },
  {
    item: "Mountaineering qualified & professional trek Leader, guide and Support staff",
  },
  { item: "Transport from Rishikesh to Rishikesh" },
];

const BRAHMATAL_EXCLUSIONS = [
  { item: "Any kind of personal expenses" },
  { item: "Food during the transit" },
  { item: "Insurance" },
  { item: "Any kind of emergency evacuation charges" },
  { item: "Mules or porter to carry personal luggage" },
  { item: "Anything not specifically mentioned under the head" },
];

const BRAHMATAL_ATTRIBUTES = [
  { label: "Region", value: "Garhwal Himalayas, Uttarakhand" },
  { label: "Base Village", value: "Lohajung" },
  { label: "Nearest City", value: "Haldwani / Rishikesh" },
  { label: "Trek Distance", value: "~25-29 km total (round trip)" },
  {
    label: "Best Time to Visit",
    value: "December to February & March to Mid-April",
  },
  { label: "Difficulty Level", value: "Easy to Moderate" },
  { label: "Best For", value: "Beginners as well as experienced trekkers" },
];

const BRAHMATAL_FAQS = [
  {
    q: "Can a beginner go for Brahmatal trek?",
    a: "Yes! Brahmatal is an Easy to Moderate trek, highly recommended for beginners as well as experienced trekkers looking for snow trails.",
  },
  {
    q: "What is the summit altitude of Brahmatal?",
    a: "The summit point at Brahmatal Top is 12,250 ft (3,735 meters), offering panoramic 360° views of Mt. Trishul and Nanda Ghunti.",
  },
  {
    q: "Is there electricity or mobile network on the trek?",
    a: "Mobile connectivity and charging are available up to Lohajung base camp. Beyond Lohajung, network is scarce and there is no electricity at the campsites.",
  },
  {
    q: "What is the best time to visit Brahmatal?",
    a: "December to February is best for heavy snow lovers and frozen lakes. March to mid-April is ideal for pleasant weather and blooming rhododendrons.",
  },
  {
    q: "Where does the Brahmatal trek start and end?",
    a: "The trek starts from Lohajung village in Chamoli district, Uttarakhand, with transport provided from Rishikesh to Rishikesh.",
  },
];

const BRAHMATAL_GALLERY = [
  "/brahmatal_gallery_1.jpg",
  "/brahmatal_gallery_2.jpg",
  "/brahmatal_gallery_3.jpg",
  "/brahmatal_gallery_4.jpg",
  "/brahmatal_gallery_5.jpg",
  "/brahmatal_gallery_6.jpg",
  "/brahmatal_gallery_7.jpg",
  "/brahmatal_gallery_8.jpg",
];

function TrekDetails() {
  const [t, e] = React.useState(!1),
    [n, a] = React.useState(!1),
    o = useNavigate(),
    { state: s } = useLocation(),
    { slug } = useParams(),
    initialEvent =
      s?.event ||
      (slug === "brahmatal-winter-trek" || slug?.toLowerCase().includes("brahmatal")
        ? BRAHMATAL_TREK
        : null),
    [c, setTrekEvent] = React.useState(initialEvent),
    [d, u] = React.useState(!1),
    [y, m] = React.useState(null),
    [k, v] = React.useState([]),
    [b, w] = React.useState(!0);

  const isBrahmatal =
    c?.slug === "brahmatal-winter-trek" ||
    c?.id === "brahmatal" ||
    c?.title?.toLowerCase().includes("brahmatal") ||
    slug === "brahmatal-winter-trek" ||
    slug?.toLowerCase().includes("brahmatal");

  React.useEffect(() => {
    if (!c && slug) {
      if (slug === "brahmatal-winter-trek" || slug?.toLowerCase().includes("brahmatal")) {
        setTrekEvent(BRAHMATAL_TREK);
      } else {
        fetchTreks().then((treks) => {
          const found = treks.find((item) => item.slug === slug);
          if (found) {
            setTrekEvent({
              id: found.id,
              title: found.name ?? "-",
              grade: found.difficulty ?? "-",
              days: `${found.duration_days} Days / ${found.duration_nights} Nights`,
              venue: found.location ?? "-",
              altitude: found.max_altitude ?? "-",
              image:
                found.slug === "kuari-pass-trek"
                  ? "/kuari_pass_card.png"
                  : found.featured_image?.startsWith("/")
                  ? found.featured_image
                  : `${BACKEND_STORAGE_URL}/${found.featured_image}`,
              banner_image:
                found.slug === "brahmatal-winter-trek"
                  ? "/brahmatal_banner.jpg"
                  : found.banner_image?.startsWith("/")
                  ? found.banner_image
                  : `${BACKEND_STORAGE_URL}/${found.banner_image}`,
              url: `/treks/${found.slug}`,
              price: found.price ?? "00",
              short_description: found.short_description,
              why_choose: found.why_choose,
            });
          }
        });
      }
    }
  }, [c, slug]);

  React.useEffect(() => {
    if (isBrahmatal) {
      v(BRAHMATAL_ITINERARY);
      w(!1);
      return;
    }
    c?.id &&
      GTe(c.id)
        .then(v)
        .catch((Q) => {
          console.error("Failed to load itinerary", Q);
          v([]);
        })
        .finally(() => w(!1));
  }, [c, isBrahmatal]);

  const [_, C] = React.useState([]),
    [N, j] = React.useState([]),
    [z, P] = React.useState(!0);

  React.useEffect(() => {
    if (isBrahmatal) {
      C(BRAHMATAL_INCLUSIONS);
      j(BRAHMATAL_EXCLUSIONS);
      P(!1);
      return;
    }
    c?.id &&
      Promise.all([_X(c.id), CX(c.id)])
        .then(([Q, be]) => {
          C(Q || []);
          j(be || []);
        })
        .catch((Q) => {
          console.error("Failed to load inclusions/exclusions", Q);
          C([]);
          j([]);
        })
        .finally(() => P(!1));
  }, [c, isBrahmatal]);

  const [D, U] = React.useState([]),
    [H, Z] = React.useState(!0);

  React.useEffect(() => {
    if (isBrahmatal) {
      U(BRAHMATAL_ATTRIBUTES);
      Z(!1);
      return;
    }
    c?.id &&
      MX(c.id)
        .then((Q) => U(Q || []))
        .catch((Q) => {
          console.error("Failed to load trek attributes", Q);
          U([]);
        })
        .finally(() => Z(!1));
  }, [c, isBrahmatal]);

  const defaultFaqs = [
    {
      q: "Can a beginner go for Kedarkantha trek?",
      a: "Yes, it is a beginner friendly trek.",
    },
    {
      q: "Is there electricity available on the Kedarkantha trek?",
      a: "No, there is no electricity available on the Kedarkantha trek beyond Sankari village.",
    },
    {
      q: "Is there an offloading service available on the trek?",
      a: "Yes, it is available (charges are additional).",
    },
    {
      q: "Is there a cloakroom available to keep extra luggage?",
      a: "Yes, it is available (at your own risk).",
    },
    {
      q: "Is there any ATM available on the Kedarkantha trek?",
      a: "Yes, an ATM is available at Mori (before Sankri), but sometimes cash may not be available, so we suggest carrying sufficient cash with you.",
    },
  ];

  const te = isBrahmatal ? BRAHMATAL_FAQS : defaultFaqs;

  if (c) console.log("event details passed : ", c);
  else
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        {
          <h1 className="text-2xl font-display font-semibold mb-4">
            No Event Selected
          </h1>
        }
        {
          <button
            onClick={() => o(-1)}
            className="px-4 py-2 bg-[#f25b23] text-white rounded-lg hover:bg-[#d44816]"
          >
            Go Back
          </button>
        }
      </div>
    );

  return (
    <div className="bg-[#f4ede1] min-h-screen">
      {
        <div className="relative">
          {
            <img
              src={c.banner_image}
              alt={c.title}
              className="w-full h-[430px] object-cover"
              style={{ objectPosition: "center 35%" }}
            />
          }
          {
            <div className="absolute inset-0 bg-black/30 p-10 flex flex-col justify-end">
                <motion.button
                  onClick={() => o(-1)}
                  initial={{
                    opacity: 0,
                    y: -5,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  whileHover={{
                    scale: 1.07,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="absolute top-28 left-6 flex items-center gap-2 px-4 py-2 rounded-full bg-[#f25b23] text-white font-medium shadow-md hover:bg-[#d44816] transition-all z-20"
                >
                  {<ArrowLeft className="w-5 h-5" />}Back
                </motion.button>
              {
                <motion.button
                  onClick={() => a(!0)}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  whileHover={{
                    scale: 1.07,
                    boxShadow: "0 0 18px rgba(255,122,0,0.7)",
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  className={`absolute bottom-1 right-6 flex items-center gap-2 px-5 py-2
                        bg-[#f25b23] text-white rounded-xl font-medium shadow-lg shadow-[rgba(43,36,29,0.12)]-lg
                        hover:bg-[#d44816] transition-all`}
                >
                  {<Download className="w-5 h-5" />}Itinerary
                </motion.button>
              }
              {
                <h1 className="text-3xl font-display font-semibold text-white drop-shadow-md">
                  {c.title}
                </h1>
              }
              {<p className="text-gray-200 mt-2">{c.short_description}</p>}
            </div>
          }
        </div>
      }
      {
        <div className="max-w-5xl mx-auto px-6 py-10 space-y-10">
          {
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {
                <div className="bg-[#efe5d5]/60 border border-[#2b241d]/12 backdrop-blur-md p-5 rounded-xl shadow-lg shadow-[rgba(43,36,29,0.12)] flex flex-col items-center">
                  {<MapPin className="text-[#f25b23] w-7 h-7" />}
                  {<p className="text-sm text-[#6f6357] mt-1">Location</p>}
                  {<p className="font-semibold">{c.venue}</p>}
                </div>
              }
              {
                <div className="bg-[#efe5d5]/60 border border-[#2b241d]/12 backdrop-blur-md p-5 rounded-xl shadow-lg shadow-[rgba(43,36,29,0.12)] flex flex-col items-center">
                  {<Mountain className="text-[#f25b23] w-7 h-7" />}
                  {<p className="text-sm text-[#6f6357] mt-1">Altitude</p>}
                  {<p className="font-semibold">{c.altitude} ft</p>}
                </div>
              }
              {
                <div className="bg-[#efe5d5]/60 border border-[#2b241d]/12 backdrop-blur-md p-5 rounded-xl shadow-lg shadow-[rgba(43,36,29,0.12)] flex flex-col items-center">
                  {<Calendar className="text-[#f25b23] w-7 h-7" />}
                  {<p className="text-sm text-[#6f6357] mt-1">Duration</p>}
                  {<p className="font-semibold">{c.days}</p>}
                </div>
              }
              {
                <div className="bg-[#efe5d5]/60 border border-[#2b241d]/12 backdrop-blur-md p-5 rounded-xl shadow-lg shadow-[rgba(43,36,29,0.12)] flex flex-col items-center">
                  {<Mountain className="text-[#f25b23] w-7 h-7" />}
                  {<p className="text-sm text-[#6f6357] mt-1">Grade</p>}
                  {<p className="font-semibold">{c.grade}</p>}
                </div>
              }
            </div>
          }
          {
            <div className="w-full flex justify-center">
              {
                <button
                  onClick={() => e(!0)}
                  className={`relative w-full max-w-[500px] 
                      bg-gradient-to-r from-[#f25b23] via-[#f25b23] to-[#D94E04]
                      text-[#2b241d] font-semibold 
                      py-4 px-6 rounded-2xl shadow-lg shadow-[rgba(43,36,29,0.12)]-lg
                      border border-[#2b241d]/20
                      transition-all duration-300
                      hover:shadow-lg shadow-[rgba(43,36,29,0.12)]-[0_0_25px_#f25b23aa]
                      hover:scale-[1.02]
                      active:scale-[0.98]
                      overflow-hidden group`}
                >
                  {
                    <span className="absolute inset-0 rounded-xl border border-white/25 pointer-events-none" />
                  }
                  {
                    <div className="flex items-center justify-between w-full">
                      {
                        <span className="text-3xl sm:text-xl md:text-3xl font-display font-display font-semibold">
                          ₹ {c.price}
                          {
                            <span className="font-large text-base">
                              {" "}
                              /Person
                            </span>
                          }
                        </span>
                      }
                    </div>
                  }
                  {
                    <p className="text-xs opacity-90 pt-1">
                      (All Taxes Included)
                    </p>
                  }
                </button>
              }
            </div>
          }
          {
            <div className="bg-[#efe5d5]/60 border border-[#2b241d]/12 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-lg shadow-[rgba(43,36,29,0.12)]-lg shadow-lg shadow-[rgba(43,36,29,0.12)]-black/20 shadow-lg shadow-[rgba(43,36,29,0.12)]-black/10 border border-[#2b241d]/12">
              {
                <h2 className="text-3xl font-display font-semibold mb-4 text-[#2b241d]">
                  Why to do Winter Trek – {c.title}?
                </h2>
              }
              {
                <div className="space-y-6 text-[#2b241d] leading-relaxed">
                  {
                    <div
                      className="prose max-w-none"
                      dangerouslySetInnerHTML={{
                        __html: c.why_choose,
                      }}
                    />
                  }
                </div>
              }
            </div>
          }
          {
            <div className="bg-[#efe5d5]/60 border border-[#2b241d]/12 backdrop-blur-md p-6 rounded-2xl shadow-lg shadow-[rgba(43,36,29,0.12)]">
              {
                <h2 className="text-2xl font-display font-semibold mb-3">
                  Complete Trek Information
                </h2>
              }
              {<p className="text-lg font-semibold mb-4">Overview</p>}
              {H && (
                <p className="text-[#6f6357]/60">Loading trek information...</p>
              )}
              {
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-[#2b241d]">
                  {
                    <div>
                      {<p className="font-semibold">Trek Name:</p>}
                      {<p>{c.title}</p>}
                    </div>
                  }
                  {
                    <div>
                      {<p className="font-semibold">Days:</p>}
                      {<p>{c.days}</p>}
                    </div>
                  }
                  {
                    <div>
                      {<p className="font-semibold">Grade:</p>}
                      {<p>{c.grade}</p>}
                    </div>
                  }
                  {
                    <div>
                      {<p className="font-semibold">Location:</p>}
                      {<p>{c.venue}</p>}
                    </div>
                  }
                  {
                    <div>
                      {<p className="font-semibold">Altitude:</p>}
                      {<p>{c.altitude} Ft.</p>}
                    </div>
                  }
                  {D.map((Q) => (
                    <div>
                      {<p className="font-semibold">{Q.label}:</p>}
                      {<p>{Q.value}</p>}
                    </div>
                  ))}
                </div>
              }
            </div>
          }
          {
            <div className="bg-[#efe5d5]/60 border border-[#2b241d]/12 backdrop-blur-md p-6 rounded-2xl shadow-lg shadow-[rgba(43,36,29,0.12)]">
              {
                <h2 className="text-2xl font-display font-semibold mb-4">
                  Quick Itinerary
                </h2>
              }
              {b && <p className="text-[#6f6357]/60">Loading itinerary...</p>}
              {!b && k.length === 0 && (
                <p className="text-[#6f6357]/60">
                  Itinerary will be updated soon.
                </p>
              )}
              {
                <div className="space-y-5 text-[#2b241d]">
                  {k.map((Q) => (
                    <div>
                      {
                        <p className="font-display font-semibold text-lg">
                          Day {Q.day_number}: {Q.title}
                        </p>
                      }
                      {
                        <div
                          className="prose max-w-none text-[#2b241d]"
                          dangerouslySetInnerHTML={{
                            __html: Q.description,
                          }}
                        />
                      }
                    </div>
                  ))}
                </div>
              }
            </div>
          }
          {
            <div className="grid md:grid-cols-2 gap-6">
              {
                <div className="bg-[#efe5d5]/60 border border-[#2b241d]/12 backdrop-blur-md p-6 rounded-2xl shadow-lg shadow-[rgba(43,36,29,0.12)]">
                  {
                    <h2 className="text-2xl font-display font-semibold mb-3">
                      Inclusions
                    </h2>
                  }
                  {z && (
                    <p className="text-[#6f6357]/60">Loading inclusions...</p>
                  )}
                  {!z && _.length === 0 && (
                    <p className="text-[#6f6357]/60">
                      Details will be updated soon.
                    </p>
                  )}
                  {
                    <ul className="space-y-2">
                      {_.map((Q) => (
                        <li className="flex items-center gap-2">
                          {
                            <CircleCheck className="text-green-600 w-5 h-5 shrink-0" />
                          }
                          {Q.item}
                        </li>
                      ))}
                    </ul>
                  }
                </div>
              }
              {
                <div className="bg-[#efe5d5]/60 border border-[#2b241d]/12 backdrop-blur-md p-6 rounded-2xl shadow-lg shadow-[rgba(43,36,29,0.12)]">
                  {
                    <h2 className="text-2xl font-display font-semibold mb-3">
                      Exclusions
                    </h2>
                  }
                  {z && (
                    <p className="text-[#6f6357]/60">Loading exclusions...</p>
                  )}
                  {!z && N.length === 0 && (
                    <p className="text-[#6f6357]/60">
                      Details will be updated soon.
                    </p>
                  )}
                  {
                    <ul className="space-y-2">
                      {N.map((Q) => (
                        <li className="flex items-center gap-2">
                          {
                            <CircleX className="text-red-600 w-5 h-5 shrink-0" />
                          }
                          {Q.item}
                        </li>
                      ))}
                    </ul>
                  }
                </div>
              }
            </div>
          }
          {
            <div className="bg-[#efe5d5]/60 border border-[#2b241d]/12 backdrop-blur-md p-6 rounded-2xl shadow-lg shadow-[rgba(43,36,29,0.12)]">
                    {
                <h2 className="text-2xl font-display font-semibold mb-3">
                  Things to Carry
                </h2>
              }
              {
                <p className="text-[#6f6357] mb-5">
                  Here is a detailed list of essential items you must carry for{" "}
                  {c?.title || "the trek"}.
                </p>
              }
              {isBrahmatal ? (
                <div className="space-y-6 text-[#2b241d]">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      1. Essential Documents
                    </h3>
                    <ul className="pl-3 space-y-1 text-[#2b241d]">
                      <li>• Authentic Government ID Card (Aadhar card / Voter ID / Passport)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      2. Bags & Backpacks
                    </h3>
                    <ul className="pl-3 space-y-1 text-[#2b241d]">
                      <li>• A rucksack bag (50–60L) and a day pack</li>
                      <li>• Rain cover for backpacks</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      3. Clothing & Warm Layers
                    </h3>
                    <ul className="pl-3 space-y-1 text-[#2b241d]">
                      <li>• Thermals (base layer inners)</li>
                      <li>• 1 cotton long sleeve and 2 short sleeve t-shirts</li>
                      <li>• 1 fleece jacket</li>
                      <li>• 1 heavy thick jacket / down jacket</li>
                      <li>• At least 2 long pants (trek pants and cargo pants are favorable)</li>
                      <li>• 4 pairs of socks</li>
                      <li>• 1 pair of gloves and neck warmer</li>
                      <li>• A sun cap and a woollen cap</li>
                      <li>• A rain jacket or a poncho</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      4. Footwear & Trail Gear
                    </h3>
                    <ul className="pl-3 space-y-1 text-[#2b241d]">
                      <li>• Above-the-ankle waterproof and breathable hiking boots</li>
                      <li>• Trekking pole</li>
                      <li>• UV protected sunglasses</li>
                      <li>• LED torchlight / Headlamp (Must Carry)</li>
                      <li>• 1-liter water bladder or water bottle</li>
                      <li>• Power bank</li>
                      <li>• A small towel</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      5. Personal Accessories & Toiletries
                    </h3>
                    <ul className="pl-3 space-y-1 text-[#2b241d]">
                      <li>• Toothpaste, toothbrush, paper soap, or sanitizer</li>
                      <li>• Sunscreen minimum of SPF 40, lip balm, cold creams</li>
                      <li>• Body spray / deodorant</li>
                      <li>• Personal toiletries and toilet paper</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      6. Health & Medical
                    </h3>
                    <ul className="pl-3 space-y-1 text-[#2b241d]">
                      <li>• Glucose powder (ORS / Electral)</li>
                      <li>• Personal medicines and first aid supplies</li>
                    </ul>
                  </div>

                  <div className="bg-[#efe5d5]/40 border border-[#f25b23]/20 p-4 rounded-xl mt-5">
                    <h4 className="font-semibold text-[#f25b23] mb-1">Tips</h4>
                    <p className="text-[#2b241d]">
                      Layering is key for sub-zero Himalayan weather. Pack light and carry only essential items.
                    </p>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="font-semibold text-lg mb-2">
                    1. Essential Documents
                  </h3>
                  <ul className="pl-3 space-y-1 mb-3 text-[#2b241d]">
                    <li>• Original + photocopies of ID proof (Aadhar card)</li>
                  </ul>
                  <h3 className="font-semibold text-lg mb-2">2. Clothing</h3>
                  <p className="font-medium mt-2 mb-1">Base Layers</p>
                  <ul className="pl-3 space-y-1 mb-3 text-[#2b241d]">
                    <li>• Thermal inners (1 pair)</li>
                    <li>• Moisture-wicking T-shirts (3–4)</li>
                    <li>• Trek pants (2, quick-dry)</li>
                  </ul>
                  <p className="font-medium mb-1">Mid Layers</p>
                  <ul className="pl-3 space-y-1 mb-3 text-[#2b241d]">
                    <li>• Fleece jacket (1–2)</li>
                  </ul>
                  <p className="font-medium mb-1">Outer Layers</p>
                  <ul className="pl-3 space-y-1 mb-3 text-[#2b241d]">
                    <li>• Insulated jacket (down/synthetic)</li>
                    <li>• Windproof jacket</li>
                    <li>• Waterproof pants (optional)</li>
                  </ul>
                  <p className="font-medium mb-1">Accessories</p>
                  <ul className="pl-3 space-y-1 mb-4 text-[#2b241d]">
                    <li>• Woolen cap/beanie</li>
                    <li>• Neck gaiter/scarf</li>
                    <li>• Woolen gloves (1 pair)</li>
                    <li>• Waterproof gloves (1 pair)</li>
                    <li>• Woolen socks (2 pairs)</li>
                    <li>• Synthetic socks (3–4 pairs)</li>
                  </ul>
                  <h3 className="font-semibold text-lg mt-4 mb-2">3. Footwear</h3>
                  <ul className="pl-3 space-y-2 mb-3 text-[#2b241d]">
                    <li>• Trekking shoes with ankle support</li>
                    <li>• Lightweight sandals/slippers</li>
                  </ul>
                  <h3 className="font-semibold text-lg mb-2">
                    4. Trekking Equipment
                  </h3>
                  <ul className="pl-3 space-y-2 mb-3 text-[#2b241d]">
                    <li>• Backpack (40–60L) + rain cover</li>
                    <li>• Daypack (optional)</li>
                    <li>• Trekking poles</li>
                    <li>• Headlamp + extra batteries</li>
                  </ul>
                  <h3 className="font-semibold text-lg mb-2">5. Toiletries</h3>
                  <ul className="pl-3 space-y-2 mb-3 text-[#2b241d]">
                    <li>• Biodegradable soap, toothpaste, toothbrush</li>
                    <li>• Towel</li>
                    <li>• Sunscreen (SPF 50+)</li>
                    <li>• Lip balm</li>
                    <li>• Moisturizer</li>
                    <li>• Wet wipes</li>
                    <li>• Hand sanitizer</li>
                  </ul>
                  <h3 className="font-semibold text-lg mb-2">6. Medical Kit</h3>
                  <ul className="pl-3 space-y-2 mb-4 text-[#2b241d]">
                    <li>• Personal medication</li>
                    <li>• Pain relief spray/ointment</li>
                    <li>• ORS packets</li>
                  </ul>
                  <h3 className="font-semibold text-lg mb-2">
                    7. Snacks & Hydration
                  </h3>
                  <ul className="pl-3 space-y-2 mb-4 text-[#2b241d]">
                    <li>• Energy bars, dry fruits, chocolates</li>
                    <li>• 2L water bottle</li>
                    <li>• Insulated flask for hot water</li>
                  </ul>
                  <h3 className="font-semibold text-lg mb-2">
                    8. Protective Gear
                  </h3>
                  <ul className="pl-3 space-y-2 mb-4 text-[#2b241d]">
                    <li>• Sunglasses (UV protection)</li>
                    <li>• Sun hat/cap</li>
                    <li>• Poncho or raincoat</li>
                  </ul>
                  <h3 className="font-semibold text-lg mb-2">
                    9. Optional but Useful
                  </h3>
                  <ul className="pl-3 space-y-2 mb-1 text-[#2b241d]">
                    <li>• Small lock for backpack</li>
                    <li>• Ziplock bags for waterproofing</li>
                  </ul>
                  <div className="bg-[#efe5d5]/40 border border-[#f25b23]/20 p-4 rounded-xl mt-5 border border-[#2b241d]/12">
                    <h4 className="font-semibold text-[#f25b23] mb-1">Tips</h4>
                    <p className="text-[#2b241d]">
                      Layering is key for cold weather. Pack light and carry
                      only essential items.
                    </p>
                  </div>
                </div>
              )}
            </div>
          }
          {
            <div className="bg-[#efe5d5]/60 border border-[#2b241d]/12 backdrop-blur-md p-6 rounded-2xl shadow-lg shadow-[rgba(43,36,29,0.12)]">
              {
                <h2 className="text-3xl font-display font-semibold mb-6 text-[#2b241d] text-center">
                  Trek Gallery
                </h2>
              }
              {
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {(isBrahmatal
                    ? BRAHMATAL_GALLERY
                    : [
                        "/gallery_1.png",
                        "/gallery_2.png",
                        "/gallery_3.png",
                        "/gallery_4.png",
                        "/gallery_5.png",
                        "/gallery_6.png",
                        "/gallery_7.png",
                        "/gallery_8.png",
                      ]
                  ).map((Q, be) => (
                    <div
                      className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg shadow-[rgba(43,36,29,0.12)]-lg shadow-lg shadow-[rgba(43,36,29,0.12)]-black/20"
                      onClick={() => {
                        m({
                          type: "image",
                          src: Q,
                        });
                        u(!0);
                      }}
                    >
                      {
                        <img
                          src={Q}
                          alt="trek gallery item"
                          className="w-full h-40 object-cover group-hover:scale-110 transition-all duration-300"
                        />
                      }
                      {
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                          {<p className="text-white text-sm font-semibold">View</p>}
                        </div>
                      }
                    </div>
                  ))}
                </div>
              }
            </div>
          }
          {d && (
            <div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm backdrop-blur-sm flex items-center justify-center z-50 p-4"
              onClick={() => u(!1)}
            >
              {
                <div
                  className="relative max-w-3xl w-full"
                  onClick={(Q) => Q.stopPropagation()}
                >
                  {
                    <button
                      className="absolute -top-10 right-0 text-[#2b241d] text-3xl"
                      onClick={() => u(!1)}
                    >
                      ✕
                    </button>
                  }
                  {y?.type === "image" && (
                    <img
                      src={y.src}
                      className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg shadow-[rgba(43,36,29,0.12)]-lg"
                      alt="Preview"
                    />
                  )}
                  {y?.type === "video" && (
                    <video
                      src={y.src}
                      controls={!0}
                      autoPlay={!0}
                      className="w-full max-h-[80vh] rounded-lg shadow-lg shadow-[rgba(43,36,29,0.12)]-lg"
                    />
                  )}
                </div>
              }
            </div>
          )}
          {
            <div className="bg-[#efe5d5]/60 border border-[#2b241d]/12 backdrop-blur-md p-6 rounded-2xl shadow-lg shadow-[rgba(43,36,29,0.12)] mb-20">
              {
                <h2 className="text-2xl font-display font-semibold mb-4">
                  Frequently Asked Questions
                </h2>
              }
              {te.map((Q, be) => (
                <div className="mb-4">
                  {
                    <div className="flex gap-2 items-center font-semibold">
                      {
                        <CircleHelp className="text-[#f25b23] w-5 h-5 shrink-0" />
                      }
                      {Q.q}
                    </div>
                  }
                  {<p className="text-[#6f6357] mt-1">{Q.a}</p>}
                </div>
              ))}
            </div>
          }
        </div>
      }
      {
        <div className="fixed bottom-0 left-0 w-full bg-[#efe5d5]/60 border border-[#2b241d]/12 backdrop-blur-md border-t shadow-lg shadow-[rgba(43,36,29,0.12)]-lg p-4 flex justify-between items-center z-40">
          {<h3 className="font-semibold text-lg">Interested in this trek?</h3>}
          {
            <button
              onClick={() => e(!0)}
              className="px-6 py-2 bg-[#f25b23] text-white rounded-xl font-semibold shadow-lg shadow-[rgba(43,36,29,0.12)]-lg hover:bg-[#d44816] transition-all"
            >
              Let's Connect
            </button>
          }
        </div>
      }
      {t && <BookingModal event={c} onClose={() => e(!1)} />}
      {n && <ItineraryRequestModal trekId={c.id} onClose={() => a(!1)} />}
    </div>
  );
}
export default TrekDetails;
