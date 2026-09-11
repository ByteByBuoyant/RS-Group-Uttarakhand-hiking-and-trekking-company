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
  categories: ["summer", "monsoon", "post-monsoon"],
  season: "Summer & Post-Monsoon (May - Jun & Sep - Oct)",
};

export const RUDRANATH_TREK = {
  id: "rudranath",
  category_id: 3,
  name: "RUDRANATH YATRA TREK",
  title: "RUDRANATH YATRA TREK",
  slug: "rudranath-yatra-trek",
  location: "Chamoli, Uttarakhand",
  venue: "Sagar Village, Gopeshwar",
  difficulty: "Moderate to Tough",
  grade: "Moderate to Tough",
  duration_days: 5,
  duration_nights: 4,
  days: "5 Days / 4 Nights",
  max_altitude: 11800,
  altitude: 11800,
  price: "7500.00",
  featured_image: "/rudranath_card.jpg",
  image: "/rudranath_card.jpg",
  banner_image: "/rudranath_banner.jpg",
  itinerary_pdf: "/rudranath_itinerary.pdf",
  url: "/treks/rudranath-yatra-trek",
  short_description: "The Second Kedar & Sacred Cave Shrine of Lord Shiva",
  why_choose: `<p><strong>Rudranath Trek</strong> leads to one of the most sacred Panch Kedar temples dedicated to Lord Shiva, where his divine face (<em>Mukha</em>) is worshipped in a natural rock formation.</p><p>Spiritually, the trek is considered a journey of pure devotion, with serene ancient forests, holy rivers, and vast alpine meadows enhancing meditation and inner peace. Historically linked to the Mahabharata, where the Pandavas sought forgiveness from Lord Shiva.</p><p>Rudranath seamlessly blends pristine nature, vibrant bugyals, ancient mythology, and deep Himalayan spirituality into an enriching pilgrimage and adventure.</p><p><strong>Expedition Highlights:</strong></p><p>• <strong>The Second Kedar Shrine:</strong> Pay homage at the remote rock-hewn temple surrounded by sacred silence and attend the soul-stirring evening Aarti.</p><p>• <strong>Vast Alpine Bugyals:</strong> Trek across the enchanting rolling grasslands of Pung Bugyal and Lweti Bugyal adorned with wildflowers and rhododendrons.</p><p>• <strong>Pitra Dhar &amp; Himalayan Panoramas:</strong> Stand atop the high ridge of Pitra Dhar offering dramatic panoramic views of Nanda Devi, Trishul, and Chaukhamba peaks.</p><p>• <strong>Sacred Saraswati Kund:</strong> Visit the tranquil, holy alpine tarn nestled amidst towering rocky knolls and prayer flags.</p>`,
  is_upcoming: true,
  is_popular: true,
  status: 1,
  category: {
    id: 3,
    name: "Summer & Post-Monsoon Trek",
    slug: "monsoon",
    sort_order: 3,
    status: true,
    image: "category_valley_of_flowers.jpg",
    short_description: "Experience divine shrines, alpine bugyals & crystal peaks in summer and post-monsoon.",
    icon: "Sun",
  },
  categories: ["summer", "monsoon", "post-monsoon"],
  season: "Summer & Post-Monsoon (May - Jun & Sep - Oct)",
};

export const VALLEY_OF_FLOWERS_TREK = {
  id: "valley-of-flowers",
  category_id: 3,
  name: "VALLEY OF FLOWERS & HEMKUND SAHIB",
  title: "VALLEY OF FLOWERS & HEMKUND SAHIB",
  slug: "valley-of-flowers-trek",
  location: "Chamoli, Uttarakhand",
  venue: "Ghangaria, Joshimath",
  difficulty: "Moderate",
  grade: "Moderate",
  duration_days: 6,
  duration_nights: 5,
  days: "6 Days / 5 Nights",
  max_altitude: 14200,
  altitude: 14200,
  price: "7500.00",
  featured_image: "/valley_of_flowers_card.jpg",
  image: "/valley_of_flowers_card.jpg",
  banner_image: "/valley_of_flowers_banner.jpg",
  itinerary_pdf: "/valley_of_flowers_itinerary.pdf",
  url: "/treks/valley-of-flowers-trek",
  short_description: "UNESCO World Heritage Alpine Paradise & World's Highest Gurdwara",
  why_choose: `<p><strong>Valley of Flowers (\"Phoolon ki Ghati\")</strong> is one of the most celebrated trekking expeditions in the world, flawlessly nestled in the Western Garhwal Himalayas at an elevation of 3,600 m.</p><p>Recognized as a UNESCO World Heritage Site, this alpine valley transforms during monsoon and early autumn into a mesmerizing floral carpet with hundreds of rare Himalayan wildflowers, including the legendary Blue Poppy, Brahmakamal, and Meadow Geranium.</p><p>The expedition also ascends to <strong>Hemkund Sahib</strong>, the world's highest Gurdwara situated at 4,329 meters beside a crystal-clear glacial lake reflecting the sacred Saptrishi peaks.</p><p><strong>Expedition Highlights:</strong></p><p>• <strong>UNESCO World Heritage Valley:</strong> Traverse endless vibrant meadows of rare alpine blossoms framed by majestic snow-clad Himalayan peaks.</p><p>• <strong>Sacred Hemkund Sahib:</strong> Climb to the revered high-altitude shrine and crystal glacial lake at 14,200 ft with views of Hathi Parvat and Saptrishi peaks.</p><p>• <strong>Pushpavati River &amp; Waterfalls:</strong> Follow the dramatic alpine trail along the Pushpavati river passing roaring cascades like Laxman Waterfall.</p><p>• <strong>Panchaprayag Confluences:</strong> Scenic mountain journey tracing the holy confluences of Devprayag, Rudraprayag, Karnaprayag, Nandaprayag, and Vishnuprayag.</p>`,
  is_upcoming: true,
  is_popular: true,
  status: 1,
  category: {
    id: 3,
    name: "Post-Monsoon Trek",
    slug: "monsoon",
    sort_order: 3,
    status: true,
    image: "category_valley_of_flowers.jpg",
    short_description: "Explore the legendary UNESCO World Heritage floral paradise & sacred Hemkund Sahib.",
    icon: "CloudRain",
  },
  categories: ["monsoon", "post-monsoon"],
  season: "July to September (Post-Monsoon & Bloom Season)",
};

async function fetchTreks(t = {}) {
  const e = new URLSearchParams(t).toString(),
    n = await fetch(`${x2}/${e ? `?${e}` : ""}`),
    a = await n.json();
  if (!n.ok) throw a;
  const list = a.data ? [...a.data] : [];
  const cat = (t.category || t.type || "").toLowerCase();
  const isPostMonsoonCat = cat === "monsoon" || cat === "post-monsoon";

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
    if (!cat || cat === "all" || cat === "summer" || isPostMonsoonCat || t.upcoming) {
      const adaptedPanchachuli = {
        ...PANCHACHULI_TREK,
        category: {
          ...PANCHACHULI_TREK.category,
          name:
            isPostMonsoonCat
              ? "Post-Monsoon Trek"
              : cat === "summer"
              ? "Summer Trek"
              : "Summer & Post-Monsoon Trek",
          slug: isPostMonsoonCat ? "monsoon" : "summer",
        },
      };
      list.push(adaptedPanchachuli);
    }
  }
  if (
    !list.some(
      (item) =>
        item.slug === "rudranath-yatra-trek" ||
        item.name?.toLowerCase().includes("rudranath")
    )
  ) {
    if (!cat || cat === "all" || cat === "summer" || isPostMonsoonCat || t.upcoming) {
      const adaptedRudranath = {
        ...RUDRANATH_TREK,
        category: {
          ...RUDRANATH_TREK.category,
          name:
            isPostMonsoonCat
              ? "Post-Monsoon Trek"
              : cat === "summer"
              ? "Summer Trek"
              : "Summer & Post-Monsoon Trek",
          slug: isPostMonsoonCat ? "monsoon" : "summer",
        },
      };
      list.push(adaptedRudranath);
    }
  }
  if (
    !list.some(
      (item) =>
        item.slug === "valley-of-flowers-trek" ||
        item.slug === "valley-of-flowers" ||
        item.name?.toLowerCase().includes("valley of flowers")
    )
  ) {
    if (!cat || cat === "all" || isPostMonsoonCat || t.upcoming) {
      list.push(VALLEY_OF_FLOWERS_TREK);
    }
  }
  return list;
}

export default fetchTreks;
