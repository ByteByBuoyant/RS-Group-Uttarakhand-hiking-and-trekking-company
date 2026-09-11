import React from "react";
import { BACKEND_API_URL } from "@/lib/config";

const x2 = `${BACKEND_API_URL}/treks`;

export const BRAHMATAL_TREK = {
  id: "brahmatal",
  category_id: 2,
  name: "BRAHMATAL WINTER TREK",
  title: "BRAHMATAL WINTER TREK",
  slug: "brahmatal-winter-trek",
  location: "Lohajung, Uttarakhand",
  venue: "Lohajung, Uttarakhand",
  difficulty: "Easy to Moderate",
  grade: "Easy to Moderate",
  duration_days: 5,
  duration_nights: 4,
  days: "5 Days / 4 Nights",
  max_altitude: 12250,
  altitude: 12250,
  price: "7500.00",
  featured_image: "/brahmatal_card.jpg",
  image: "/brahmatal_card.jpg",
  banner_image: "/brahmatal_banner.jpg",
  itinerary_pdf: "/brahmatal_itinerary.pdf",
  url: "/treks/brahmatal-winter-trek",
  short_description: "The Skyline of Mt. Trishul & Nanda Ghunti",
  why_choose: `<p><strong>Brahmatal Trek</strong> is a stunning winter trek in Uttarakhand, known for its snow-covered trails, frozen lake, and breathtaking views of Trishul and Nanda Ghunti peaks.</p><p>It offers a perfect mix of dense forests, ridge walks, and high-altitude camps, making it ideal for both beginners and experienced trekkers. A serene and scenic Himalayan experience.</p><p><strong>Highlights of Brahmatal:</strong></p><p>• <strong>The Skyline of Mt. Trishul &amp; Nanda Ghunti:</strong> As you climb higher, the majestic Himalayan panorama unfolds — with peaks like Mt. Trishul, Nanda Ghunti, and Chaukhamba dominating the skyline.</p><p>• <strong>Frozen Alpine Lakes:</strong> Discover the enchanting Bekaltal and high-altitude Brahmatal lake, often completely frozen during the winter season.</p><p>• <strong>Dense Forests &amp; Ridge Walks:</strong> The trail ascends through ancient oak and rhododendron forests before opening into wide alpine snow meadows.</p><p>• <strong>360° Summit Panorama:</strong> Standing at Brahmatal Top (12,250 ft) offers unforgettable 360-degree vistas of the mighty Garhwal Himalayas.</p>`,
  is_upcoming: true,
  is_popular: true,
  status: 1,
  category: {
    id: 2,
    name: "Winter Trek",
    slug: "winter",
    sort_order: 1,
    status: true,
    image: "categories/wqGhpOrK5oqRdVdXKocR5hg7eLee3G93luRKDmhF.jpg",
    short_description: "Traverse snow-covered trails and magical valleys.",
    icon: "Snowflake",
  },
};

export const NITI_VALLEY_TREK = {
  id: "niti-valley",
  category_id: 2,
  name: "NITI VALLEY & TIMMERSAIN MAHADEV",
  title: "NITI VALLEY & TIMMERSAIN MAHADEV",
  slug: "niti-valley-timmersain-mahadev",
  location: "Chamoli, Uttarakhand",
  venue: "Niti Village, Joshimath",
  difficulty: "Easy to Moderate",
  grade: "Easy to Moderate",
  duration_days: 5,
  duration_nights: 4,
  days: "5 Days / 4 Nights",
  max_altitude: 11800,
  altitude: 11800,
  price: "7500.00",
  featured_image: "/niti_valley_card.jpg",
  image: "/niti_valley_card.jpg",
  banner_image: "/niti_valley_banner.jpg",
  itinerary_pdf: "/niti_valley_itinerary.pdf",
  url: "/treks/niti-valley-timmersain-mahadev",
  short_description: "Remote Indo-Tibetan Border & Chota Amarnath Cave Expedition",
  why_choose: `<p><strong>Niti Valley</strong> is a remote Himalayan valley near the Indo-Tibet border, offering raw alpine landscapes, traditional Bhotiya villages, and stunning views of snow-clad peaks. Known for its untouched beauty and restricted access.</p><p><strong>Timmersain Mahadev</strong> is a unique natural shrine where a towering ice Shivling forms inside a cave during winter, often compared to Amarnath Cave (revered as <em>Chota Amarnath</em>). Surrounded by dense forests and rugged terrain, it combines spiritual significance with an offbeat trekking experience.</p><p><strong>Expedition Highlights:</strong></p><p>• <strong>Last Villages of India:</strong> Explore Niti Village and Malari, ancient settlements steeped in Indo-Tibetan trade culture and stone architecture.</p><p>• <strong>Chota Amarnath Ice Shivling:</strong> Trek to the sacred Timmersain Mahadev cave to witness the miraculous natural ice Shivling formation.</p><p>• <strong>Gamshali Bugyal:</strong> Experience serene day treks through pristine alpine meadows with panoramic views of snow-clad Himalayan giants.</p><p>• <strong>The Grand Canyon of India:</strong> Marvel at the awe-inspiring gorge carved by the Dhauliganga river.</p>`,
  is_upcoming: true,
  is_popular: true,
  status: 1,
  category: {
    id: 2,
    name: "Summer & Winter Trek",
    slug: "winter",
    sort_order: 1,
    status: true,
    image: "category_summer_monsoon.png",
    short_description: "Traverse snow-covered trails and ice caves in winter and lush alpine border meadows in summer.",
    icon: "Sun",
  },
  categories: ["winter", "summer"],
  season: "Summer & Winter",
};

export const PANCHACHULI_TREK = {
  id: "panchachuli",
  category_id: 3,
  name: "PANCHACHULI BASE CAMP TREK",
  title: "PANCHACHULI BASE CAMP TREK",
  slug: "panchachuli-base-camp-trek",
  location: "Darma Valley, Pithoragarh, Uttarakhand",
  venue: "Dugtu & Dantu Village, Dharchula",
  difficulty: "Easy to Moderate",
  grade: "Easy to Moderate",
  duration_days: 5,
  duration_nights: 4,
  days: "5 Days / 4 Nights",
  max_altitude: 14000,
  altitude: 14000,
  price: "7500.00",
  featured_image: "/panchachuli_card.jpg",
  image: "/panchachuli_card.jpg",
  banner_image: "/panchachuli_banner.jpg",
  itinerary_pdf: "/panchachuli_itinerary.pdf",
  url: "/treks/panchachuli-base-camp-trek",
  short_description: "Darma Valley & The Five Himalayan Peaks of Pandavas Expedition",
  why_choose: `<p><strong>Panchachuli Base Camp Trek</strong> is a spectacular Himalayan journey in Uttarakhand near Dharchula in the remote Darma Valley.</p><p>It offers breathtaking up-close views of the five snow-covered Panchachuli peaks and the vast Panchachuli Glacier. The journey winds through pristine alpine villages like Dugtu and Dantu with traditional Kumaoni stone architecture.</p><p>The trail passes vibrant rhododendron forests, lush meadows (bugyals), roaring mountain rivers, and untouched Himalayan valleys. Ideal for nature lovers, photographers, and adventurers seeking a peaceful offbeat expedition.</p><p><strong>Expedition Highlights:</strong></p><p>• <strong>The Five Legendary Peaks:</strong> Stand beneath the towering Panchachuli massif revered as the legendary chimneys where the Pandavas cooked their last meal.</p><p>• <strong>Remote Darma Valley:</strong> Experience ancient Himalayan lifestyle, carved wooden windows, and warm hospitality in Dugtu and Dantu villages.</p><p>• <strong>Glacial Moraines &amp; Wildflowers:</strong> Hike to the base of the massive Panchachuli glacier surrounded by blooming rhododendrons and alpine flora.</p><p>• <strong>Kumaon Border Route:</strong> Scenic mountain drives connecting Kathgodam, Almora, Didihat, and Dharchula along the Kali River bordering Nepal.</p>`,
  is_upcoming: true,
  is_popular: true,
  status: 1,
  category: {
    id: 3,
    name: "Summer & Monsoon Trek",
    slug: "summer",
    sort_order: 2,
    status: true,
    image: "category_valley_of_flowers.jpg",
    short_description: "Explore lush green meadows, border valleys & alpine passes in summer and post-monsoon.",
    icon: "Sun",
  },
  categories: ["summer", "monsoon"],
  season: "Summer & Post-Monsoon (May - Jun & Sep - Oct)",
};

async function fetchTreks(t = {}) {
  const e = new URLSearchParams(t).toString(),
    n = await fetch(`${x2}/${e ? `?${e}` : ""}`),
    a = await n.json();
  if (!n.ok) throw a;
  const list = a.data ? [...a.data] : [];
  const cat = (t.category || t.type || "").toLowerCase();

  if (
    !list.some(
      (item) =>
        item.slug === "brahmatal-winter-trek" ||
        item.name?.toLowerCase().includes("brahmatal")
    )
  ) {
    if (!cat || cat === "all" || cat === "winter" || t.upcoming) {
      list.push(BRAHMATAL_TREK);
    }
  }
  if (
    !list.some(
      (item) =>
        item.slug === "niti-valley-timmersain-mahadev" ||
        item.name?.toLowerCase().includes("niti valley") ||
        item.name?.toLowerCase().includes("timmersain")
    )
  ) {
    if (!cat || cat === "all" || cat === "winter" || cat === "summer" || t.upcoming) {
      const adaptedNiti = {
        ...NITI_VALLEY_TREK,
        category: {
          ...NITI_VALLEY_TREK.category,
          name: cat === "summer" ? "Summer Trek" : cat === "winter" ? "Winter Trek" : "Summer & Winter Trek",
          slug: cat === "summer" ? "summer" : "winter",
        },
      };
      list.push(adaptedNiti);
    }
  }
  if (
    !list.some(
      (item) =>
        item.slug === "panchachuli-base-camp-trek" ||
        item.name?.toLowerCase().includes("panchachuli")
    )
  ) {
    if (!cat || cat === "all" || cat === "summer" || cat === "monsoon" || t.upcoming) {
      const adaptedPanchachuli = {
        ...PANCHACHULI_TREK,
        category: {
          ...PANCHACHULI_TREK.category,
          name:
            cat === "monsoon"
              ? "Monsoon Trek"
              : cat === "summer"
              ? "Summer Trek"
              : "Summer & Monsoon Trek",
          slug: cat === "monsoon" ? "monsoon" : "summer",
        },
      };
      list.push(adaptedPanchachuli);
    }
  }
  return list;
}

export default fetchTreks;
