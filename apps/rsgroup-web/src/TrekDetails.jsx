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
import fetchTreks, { BRAHMATAL_TREK, NITI_VALLEY_TREK, PANCHACHULI_TREK } from "./FetchTreksAPI";
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

const NITI_VALLEY_ITINERARY = [
  {
    day_number: 1,
    title: "RISHIKESH TO JOSHIMATH (DRIVE 250 KM | 9-10 HOURS)",
    description:
      "<p>Depart from Rishikesh early morning (5:00–6:00 AM) to avoid traffic and maximize daylight. Follow the scenic highway along the Alaknanda River, one of the most beautiful Himalayan road journeys.</p><p><strong>En Route Highlights:</strong><br>• <strong>Devprayag:</strong> Witness the sacred confluence of Alaknanda &amp; Bhagirathi, forming the holy Ganga.<br>• <strong>Rudraprayag:</strong> Confluence of Alaknanda &amp; Mandakini River.<br>• <strong>Karnaprayag:</strong> Mythological meeting point of Alaknanda and Pindar rivers.</p><p>Lunch en route at a highway dhaba. Arrive at Joshimath by evening (5:00–7:00 PM), check into your hotel, with an optional short walk in the local market or visit to Narasimha Temple. Dinner &amp; overnight stay.</p>",
  },
  {
    day_number: 2,
    title: "JOSHIMATH TO NITI VILLAGE (DRIVE 80 KM | 4-5 HOURS)",
    description:
      "<p>Morning breakfast at the hotel, followed by an exhilarating drive along the Dhauliganga River, famed for its rugged grandeur.</p><p><strong>Drive Highlights:</strong><br>• <strong>Malari Village:</strong> First major settlement in Niti Valley with traditional stone houses and Indo-Tibetan culture.<br>• Dramatic views of deep gorges, snow-clad peaks, and remote border landscapes.</p><p>Arrive at Niti Village by afternoon—one of India's last villages near the Indo-Tibetan border. Check in to your homestay or camp. In the evening, explore village lanes, interact with the local Bhotia tribe community, and savor sunset views over Himalayan ranges. Dinner &amp; overnight stay.</p>",
  },
  {
    day_number: 3,
    title: "NITI VILLAGE TO GAMSHALI BUGYAL TREK & RETURN (TREK 12 KM | 6-7 HOURS)",
    description:
      "<p>Wake up early to crisp mountain air and clear panoramic views. After breakfast, set out on the trek to Gamshali Bugyal.</p><p><strong>Trek Highlights:</strong><br>• Traverse scenic alpine meadows, rocky patches, and high-altitude grasslands.<br>• Admire vibrant alpine flora and seasonal Himalayan wildflowers.<br>• Packed lunch enjoyed amidst the open bugyal with panoramic views.</p><p>Descend back to Niti/Gamshali village by late afternoon. Rest with evening tea, enjoy a cozy bonfire (weather permitting), and stargaze under crystal-clear night skies with zero light pollution. Dinner &amp; overnight stay.</p>",
  },
  {
    day_number: 4,
    title: "NITI VILLAGE TO TIMMERSAIN MAHADEV & JOSHIMATH (DRIVE 80 KM | 4-5 HOURS)",
    description:
      "<p>Early morning departure for a spiritually uplifting excursion to <strong>Timmersain Mahadev (Chota Amarnath)</strong>.</p><p><strong>Highlights:</strong><br>• Short scenic trek to reach the ancient cave temple.<br>• Natural ice Shivling formation (seasonal, closely resembling Amarnath).<br>• Sacred and pristine pilgrimage atmosphere amidst raw Himalayan terrain.</p><p>Begin the return journey driving back to Joshimath. Arrive by evening, check into your hotel, and unwind after an eventful day. Dinner &amp; overnight stay in Joshimath.</p>",
  },
  {
    day_number: 5,
    title: "JOSHIMATH TO RISHIKESH (DRIVE 250 KM | 9-10 HOURS)",
    description:
      "<p>Morning breakfast and hotel checkout. Drive back via Karnaprayag, Rudraprayag, and Devprayag.</p><p>Enjoy optional stops at river-side cafés and local souvenir shops. Reach Rishikesh by evening where this unforgettable expedition completes.</p>",
  },
];

const NITI_VALLEY_INCLUSIONS = [
  { item: "Accommodation (Guest house, Home stay, Camping)" },
  { item: "Meals while on trek/trip (Veg)" },
  { item: "Trek equipment: Sleeping bag, mattress, tent, Utensils" },
  { item: "Kitchen & dining Tent, toilet tent" },
  { item: "All necessary permits and entry fees (Inner Line Permit for Niti Valley)" },
  { item: "First aid medical kits" },
  { item: "Mountaineering qualified & professional trek Leader, Guide and Support staff" },
  { item: "Transport from Rishikesh to Rishikesh" },
];

const NITI_VALLEY_EXCLUSIONS = [
  { item: "Any kind of personal expenses" },
  { item: "Food during the transit" },
  { item: "Insurance" },
  { item: "Any kind of emergency evacuation charges" },
  { item: "Mules or porter to carry personal luggage" },
  { item: "Anything not specifically mentioned under the head" },
];

const NITI_VALLEY_ATTRIBUTES = [
  { label: "Region", value: "Chamoli District, Garhwal Himalayas, Uttarakhand" },
  { label: "Base Village", value: "Niti Village (Last Indian Village)" },
  { label: "Nearest Town", value: "Joshimath" },
  { label: "Nearest Major City", value: "Rishikesh / Dehradun" },
  { label: "Trek Distance", value: "~12 km total (round trip)" },
  { label: "Altitude", value: "~3,600 m (11,800 ft)" },
  { label: "Difficulty Level", value: "Easy to Moderate" },
  { label: "Season", value: "Summer & Winter (All-Season Himalayan Destination)" },
  { label: "Best Time to Visit", value: "Summer (April - June) & Winter (September - March)" },
  { label: "Special Highlight", value: "Timmersain Mahadev (Chota Amarnath Ice Shivling)" },
];

const NITI_VALLEY_FAQS = [
  {
    q: "Is an Inner Line Permit required for Niti Valley?",
    a: "Yes, since Niti Valley is located close to the Indo-Tibetan border, an Inner Line Permit is required for all visitors. RS Group arranges all necessary permits and paperwork for you.",
  },
  {
    q: "What is Timmersain Mahadev and when does the ice Shivling form?",
    a: "Timmersain Mahadev is a sacred cave temple revered as 'Chota Amarnath' where a natural ice Shivling forms during the winter and early spring months.",
  },
  {
    q: "Can beginners and families join the Niti Valley expedition?",
    a: "Yes! The trip is rated Easy to Moderate, featuring scenic drives and manageable day treks suitable for beginners, nature enthusiasts, and spiritual seekers.",
  },
  {
    q: "What kind of stay is provided in Niti Village?",
    a: "Authentic local homestays or high-quality alpine camping, offering warm hospitality and an opportunity to experience traditional Bhotia culture.",
  },
  {
    q: "Where does the trip start and end?",
    a: "The expedition starts and ends in Rishikesh with full round-trip private transport included.",
  },
];

const NITI_VALLEY_GALLERY = [
  "/niti_valley_gallery_1.jpg",
  "/niti_valley_gallery_2.jpg",
  "/niti_valley_gallery_3.jpg",
  "/niti_valley_gallery_4.jpg",
  "/niti_valley_gallery_5.jpg",
  "/niti_valley_gallery_6.jpg",
  "/niti_valley_gallery_7.jpg",
  "/niti_valley_gallery_8.jpg",
];

const PANCHACHULI_ITINERARY = [
  {
    day: 1,
    title: "KATHGODAM to DHARCHULA",
    distance: "Drive 300 km",
    duration: "9-11 Hours",
    description:
      "<p>Early morning departure from Kathgodam, the gateway to Kumaon Himalayas.</p><p>Enjoy a scenic mountain drive through the picturesque hill regions of Almora and Didihat, witnessing deep valleys, pine forests, gushing rivers, and traditional mountain villages.</p><p>Experience peaceful tea stops and authentic Kumaoni landscapes along the route. By evening, arrive at Dharchula, a beautiful border town on the banks of the Kali River overlooking Nepal. Check-in at hotel and relax after the journey.</p><p><strong>Overnight Stay:</strong> Hotel in Dharchula.</p>",
  },
  {
    day: 2,
    title: "DHARCHULA to DUGTU VILLAGE",
    distance: "Drive 80-90 km",
    duration: "4-6 Hours",
    description:
      "<p>After breakfast at Dharchula, begin the drive towards Dugtu Village in the remote and enchanting Darma Valley.</p><p>The route traces the scenic Kali River through rugged Himalayan terrain, passing waterfalls, steep cliff roads, hanging bridges, and remote border-region landscapes.</p><p>Pass through army checkpoints and small alpine villages before reaching Dugtu Village by afternoon. As you enter the valley, witness the first breathtaking close-up views of the five snow-capped Panchachuli peaks. Soak in the peaceful village surroundings and traditional mountain lifestyle.</p><p><strong>Overnight Stay:</strong> Authentic homestay / alpine camp at Dugtu Village.</p>",
  },
  {
    day: 3,
    title: "DUGTU to PANCHACHULI BASE CAMP & BACK",
    distance: "Trek 12-14 km",
    duration: "6-7 Hours",
    description:
      "<p>Wake up early to golden morning rays illuminating the Panchachuli peaks. After a hearty breakfast, begin the trek towards Panchachuli Base Camp (~4,260 m / 14,000 ft).</p><p>The trail winds through lush alpine meadows (bugyals), rocky trails, bubbling mountain streams, blooming rhododendrons, and pristine glacier landscapes.</p><p>Reach Panchachuli Base Camp and spend quality time exploring the snout of the Panchachuli Glacier, photography, and absorbing the awe-inspiring presence of the five peaks of the Pandavas.</p><p>Begin the return hike to Dugtu Village by afternoon/evening. Enjoy an optional walk to neighboring Dantu Village, renowned for its heritage stone houses and dramatic panoramic viewpoints. Enjoy hot dinner and stargazing.</p><p><strong>Overnight Stay:</strong> Dugtu Village.</p>",
  },
  {
    day: 4,
    title: "DUGTU to DHARCHULA / PITHORAGARH",
    distance: "Drive 90 km / 190 km",
    duration: "6-9 Hours",
    description:
      "<p>Post breakfast, bid farewell to the warm locals of Dugtu and the majestic Panchachuli peaks as you commence the return drive.</p><p>Take in final vistas of the Darma Valley landscapes, descending along mountain roads, cascading waterfalls, and riverside terrain.</p><p>Reach Dharchula or continue further towards the scenic district headquarters of Pithoragarh depending on the customized travel schedule. Relax and unwind after the mountain road journey.</p><p><strong>Overnight Stay:</strong> Hotel in Dharchula or Pithoragarh.</p>",
  },
  {
    day: 5,
    title: "DHARCHULA / PITHORAGARH to KATHGODAM",
    distance: "Drive 210 / 300 km",
    duration: "8-11 Hours",
    description:
      "<p>After breakfast, depart on the return drive to Kathgodam through the picturesque mountain roads of Kumaon.</p><p>Enjoy scenic views of terraced hills, pine and oak forests, and serene lake towns near Bhimtal.</p><p>Arrive at Kathgodam railway station by evening, where your memorable Panchachuli Base Camp adventure concludes with unforgettable Himalayan memories.</p>",
  },
];

const PANCHACHULI_INCLUSIONS = [
  { item: "Accommodation (Guest house, Home stay, Alpine Camping)" },
  { item: "Meals while on trek/trip (Nutritious Vegetarian meals)" },
  { item: "Trek equipment: Sleeping bag, mattress, tent, utensils" },
  { item: "Kitchen & dining Tent, toilet tent" },
  { item: "All necessary Inner Line permits and entry fees (Darma Valley border pass)" },
  { item: "First aid medical kits and basic emergency equipment" },
  { item: "Mountaineering qualified & professional trek Leader, Guide and Support staff" },
  { item: "Transport from Kathgodam to Kathgodam (all drives included)" },
];

const PANCHACHULI_EXCLUSIONS = [
  { item: "Any kind of personal expenses" },
  { item: "Food during the transit" },
  { item: "Insurance" },
  { item: "Any kind of emergency evacuation charges" },
  { item: "Mules or porter to carry personal luggage" },
  { item: "Anything not specifically mentioned under the head" },
];

const PANCHACHULI_ATTRIBUTES = [
  { label: "Region", value: "Darma Valley, Pithoragarh District, Kumaon Himalayas, Uttarakhand" },
  { label: "Base Village", value: "Dugtu Village & Dantu Village" },
  { label: "Nearest Town", value: "Dharchula" },
  { label: "Nearest Railhead / Major City", value: "Kathgodam / Pithoragarh" },
  { label: "Trek Distance", value: "~14 km total (round trip)" },
  { label: "Altitude", value: "~4,260 m (14,000 ft)" },
  { label: "Difficulty Level", value: "Easy to Moderate" },
  { label: "Season", value: "Summer & Post-Monsoon" },
  { label: "Best Time to Visit", value: "May to June (Summer) & September to October (Post-Monsoon)" },
  { label: "Special Highlight", value: "Panchachuli Glacier & Five Peaks of Pandavas" },
];

const PANCHACHULI_FAQS = [
  {
    q: "What is the best time to visit Panchachuli Base Camp?",
    a: "The ideal seasons are May to June (pre-monsoon/summer) with blooming rhododendrons and September to October (post-monsoon) with crisp skies and clear mountain panoramas.",
  },
  {
    q: "Is an Inner Line Permit required for Darma Valley?",
    a: "Yes, because Darma Valley borders Tibet/Nepal, an Inner Line Permit / SDM border permit is mandatory. RS Group takes care of all documentation and permit arrangements for you.",
  },
  {
    q: "Can beginners undertake the Panchachuli Base Camp trek?",
    a: "Yes! The trek from Dugtu to Base Camp is only about 12-14 km round trip and graded Easy to Moderate, making it very accessible for beginners with basic fitness as well as families.",
  },
  {
    q: "Where does the expedition start and end?",
    a: "The trip starts and ends in Kathgodam (the main railway station of Kumaon) with full round-trip mountain transit included.",
  },
  {
    q: "What kind of stay is provided during the trip?",
    a: "Comfortable hotel accommodation in Dharchula/Pithoragarh, and traditional Kumaoni homestays or high-quality alpine tents in Dugtu Village.",
  },
];

const PANCHACHULI_GALLERY = [
  "/panchachuli_gallery_1.jpg",
  "/panchachuli_gallery_2.jpg",
  "/panchachuli_gallery_3.jpg",
  "/panchachuli_gallery_4.jpg",
  "/panchachuli_gallery_5.jpg",
  "/panchachuli_gallery_6.jpg",
  "/panchachuli_gallery_7.jpg",
  "/panchachuli_gallery_8.jpg",
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
        : slug === "niti-valley-timmersain-mahadev" || slug?.toLowerCase().includes("niti")
        ? NITI_VALLEY_TREK
        : slug === "panchachuli-base-camp-trek" || slug?.toLowerCase().includes("panchachuli")
        ? PANCHACHULI_TREK
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

  const isNiti =
    c?.slug === "niti-valley-timmersain-mahadev" ||
    c?.id === "niti-valley" ||
    c?.title?.toLowerCase().includes("niti") ||
    c?.title?.toLowerCase().includes("timmersain") ||
    slug === "niti-valley-timmersain-mahadev" ||
    slug?.toLowerCase().includes("niti");

  const isPanchachuli =
    c?.slug === "panchachuli-base-camp-trek" ||
    c?.id === "panchachuli" ||
    c?.title?.toLowerCase().includes("panchachuli") ||
    slug === "panchachuli-base-camp-trek" ||
    slug?.toLowerCase().includes("panchachuli");

  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [slug]);

  React.useEffect(() => {
    if (!c && slug) {
      if (slug === "brahmatal-winter-trek" || slug?.toLowerCase().includes("brahmatal")) {
        setTrekEvent(BRAHMATAL_TREK);
      } else if (slug === "niti-valley-timmersain-mahadev" || slug?.toLowerCase().includes("niti")) {
        setTrekEvent(NITI_VALLEY_TREK);
      } else if (slug === "panchachuli-base-camp-trek" || slug?.toLowerCase().includes("panchachuli")) {
        setTrekEvent(PANCHACHULI_TREK);
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
                  : found.slug === "brahmatal-winter-trek"
                  ? "/brahmatal_card.jpg"
                  : found.slug === "niti-valley-timmersain-mahadev"
                  ? "/niti_valley_card.jpg"
                  : found.slug === "panchachuli-base-camp-trek"
                  ? "/panchachuli_card.jpg"
                  : found.featured_image?.startsWith("/")
                  ? found.featured_image
                  : `${BACKEND_STORAGE_URL}/${found.featured_image}`,
              banner_image:
                found.slug === "brahmatal-winter-trek"
                  ? "/brahmatal_banner.jpg"
                  : found.slug === "niti-valley-timmersain-mahadev"
                  ? "/niti_valley_banner.jpg"
                  : found.slug === "panchachuli-base-camp-trek"
                  ? "/panchachuli_banner.jpg"
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
    if (isNiti) {
      v(NITI_VALLEY_ITINERARY);
      w(!1);
      return;
    }
    if (isPanchachuli) {
      v(PANCHACHULI_ITINERARY);
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
  }, [c, isBrahmatal, isNiti, isPanchachuli]);

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
    if (isNiti) {
      C(NITI_VALLEY_INCLUSIONS);
      j(NITI_VALLEY_EXCLUSIONS);
      P(!1);
      return;
    }
    if (isPanchachuli) {
      C(PANCHACHULI_INCLUSIONS);
      j(PANCHACHULI_EXCLUSIONS);
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
  }, [c, isBrahmatal, isNiti, isPanchachuli]);

  const [D, U] = React.useState([]),
    [H, Z] = React.useState(!0);

  React.useEffect(() => {
    if (isBrahmatal) {
      U(BRAHMATAL_ATTRIBUTES);
      Z(!1);
      return;
    }
    if (isNiti) {
      U(NITI_VALLEY_ATTRIBUTES);
      Z(!1);
      return;
    }
    if (isPanchachuli) {
      U(PANCHACHULI_ATTRIBUTES);
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
  }, [c, isBrahmatal, isNiti, isPanchachuli]);

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

  const te = isBrahmatal
    ? BRAHMATAL_FAQS
    : isNiti
    ? NITI_VALLEY_FAQS
    : isPanchachuli
    ? PANCHACHULI_FAQS
    : defaultFaqs;

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
              className="w-full h-[380px] sm:h-[430px] object-cover"
              style={{ objectPosition: "center 35%" }}
            />
          }
          {
            <div className="absolute inset-0 bg-black/35 p-6 sm:p-10 flex flex-col justify-end">
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
                  className="absolute top-24 sm:top-28 left-4 sm:left-6 flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#f25b23] text-white font-medium text-sm sm:text-base shadow-md hover:bg-[#d44816] transition-all z-20"
                >
                  {<ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />}Back
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
                  className={`absolute bottom-4 sm:bottom-6 right-4 sm:right-6 flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-5 sm:py-2
                        bg-[#f25b23] text-white rounded-xl font-medium text-sm sm:text-base shadow-lg shadow-[rgba(43,36,29,0.12)]-lg
                        hover:bg-[#d44816] transition-all z-20`}
                >
                  {<Download className="w-4 h-4 sm:w-5 sm:h-5" />}Itinerary
                </motion.button>
              }
              {
                <h1 className="text-2xl sm:text-3xl font-display font-semibold text-white drop-shadow-md pr-24 sm:pr-0">
                  {c.title}
                </h1>
              }
              {<p className="text-gray-200 mt-1 sm:mt-2 text-sm sm:text-base pr-20 sm:pr-0">{c.short_description}</p>}
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
                  {isNiti
                    ? `Why to do Summer & Winter Trek – ${c.title}?`
                    : isPanchachuli
                    ? `Why to do Summer & Post-Monsoon Trek – ${c.title}?`
                    : `Why to do ${c?.category?.name || "Winter Trek"} – ${c.title}?`}
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
              {isBrahmatal || isNiti || isPanchachuli ? (
                <div className="space-y-6 text-[#2b241d]">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                       1. Essential Documents
                    </h3>
                    <ul className="pl-3 space-y-1 text-[#2b241d]">
                      <li>
                        • Authentic Government ID Card (Aadhar card / Voter ID / Passport
                        {isNiti ? " - Mandatory for Niti Valley Inner Line Permit" : isPanchachuli ? " - Mandatory for Darma Valley Border Permit" : ""})
                      </li>
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
                    : isNiti
                    ? NITI_VALLEY_GALLERY
                    : isPanchachuli
                    ? PANCHACHULI_GALLERY
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
