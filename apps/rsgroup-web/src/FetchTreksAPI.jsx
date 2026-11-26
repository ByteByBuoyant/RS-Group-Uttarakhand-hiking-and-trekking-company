import React from "react";
import { BACKEND_API_URL } from "@/lib/config";

const x2 = `${BACKEND_API_URL}/treks`;

export const KEDARKANTHA_TREK = {
  id: "kedarkantha",
  category_id: 2,
  name: "KEDARKANTHA TREK",
  title: "KEDARKANTHA TREK",
  slug: "kedarkantha-trek",
  location: "Uttarkashi, Uttarakhand",
  venue: "Sankri Village",
  difficulty: "Easy to Moderate",
  grade: "Easy to Moderate",
  duration_days: 5,
  duration_nights: 4,
  days: "5 Days / 4 Nights",
  max_altitude: 12500,
  altitude: 12500,
  price: "7500.00",
  featured_image: "/about_kedarkantha.webp",
  image: "/about_kedarkantha.webp",
  banner_image: "/about_kedarkantha.webp",
  itinerary_pdf: "/kedarkantha_itinerary.pdf",
  url: "/treks/kedarkantha-trek",
  short_description: "Queen of Winter Treks & 360-degree Himalayan Summit View",
  why_choose: `<p><strong>Kedarkantha Trek</strong> is universally acclaimed as the Queen of Winter Treks in the Indian Himalayas, situated inside the Govind Wildlife Sanctuary in Uttarkashi district.</p><p>With a summit elevation of 12,500 feet (3,810 m), it offers an unmatched 360-degree panoramic vista of iconic Himalayan giants including Swargarohini, Bandarpoonch, Black Peak (Kalanag), and the Chaunsar ridge.</p><p>The journey winds through enchanting pine and oak forests, frozen glacial lakes like the revered Juda Ka Talab, and vast snowfields, making it the most loved winter expedition for both beginners and experienced mountain enthusiasts.</p><p><strong>Expedition Highlights:</strong></p><p>• <strong>The Legendary Summit:</strong> Reach the 12,500 ft summit marked by a Trishul and cairn at sunrise for golden vistas across 13 major peaks.</p><p>• <strong>Juda Ka Talab:</strong> Camp beside the mythical high-altitude frozen lake surrounded by towering snow-draped pine trees.</p><p>• <strong>Scenic Winter Forests:</strong> Trek along pristine snowy trails under dense canopies of oak and deodar.</p><p>• <strong>Cultural Sankri Base:</strong> Experience authentic wooden Garhwali heritage architecture and mountain hospitality.</p>`,
  is_upcoming: true,
  is_popular: true,
  status: 1,
  category: {
    id: 2,
    name: "Winter Trek",
    slug: "winter",
    sort_order: 1,
    status: true,
    image: "category_winter.webp",
    short_description: "Traverse snow-covered trails and magical valleys.",
    icon: "Snowflake",
  },
  categories: ["winter"],
  season: "December to April (Peak Winter Snow)",
};

export const KUARI_PASS_TREK = {
  id: "kuari-pass",
  category_id: 2,
  name: "KUARI PASS TREK",
  title: "KUARI PASS TREK",
  slug: "kuari-pass-trek",
  location: "Chamoli, Uttarakhand",
  venue: "Joshimath / Dhak Village",
  difficulty: "Easy to Moderate",
  grade: "Easy to Moderate",
  duration_days: 6,
  duration_nights: 5,
  days: "6 Days / 5 Nights",
  max_altitude: 12516,
  altitude: 12516,
  price: "8500.00",
  featured_image: "/kuari_pass_card.webp",
  image: "/kuari_pass_card.webp",
  banner_image: "/kuari_pass_card.webp",
  itinerary_pdf: "/kuari_pass_itinerary.pdf",
  url: "/treks/kuari-pass-trek",
  short_description: "Lord Curzon's Historic Trail & Grand Views of Mt. Nanda Devi",
  why_choose: `<p><strong>Kuari Pass Trek</strong>, also known as Lord Curzon's Trail, is one of the most scenic alpine ridge traverses in the Garhwal Himalayas of Chamoli.</p><p>Standing at 12,516 ft, Kuari Pass delivers dramatic front-row views of India's second-highest peak — Mt. Nanda Devi (7,816 m) — alongside Kamet, Dronagiri, Chaukhamba, Hathi-Ghodi Parvat, and Trishul.</p><p>The trail traverses ancient oak and rhododendron forests, sprawling meadows of Gorson Bugyal and Chitrakantha, and quaint mountain hamlets like Dhak and Tugasi.</p><p><strong>Expedition Highlights:</strong></p><p>• <strong>Grand Mt. Nanda Devi Views:</strong> Unrivaled close-up views of the sacred twin peaks of Nanda Devi and surrounding sanctuaries.</p><p>• <strong>Gorson &amp; Chitrakantha Bugyals:</strong> Vast undulating alpine grasslands offering spectacular ridge walking.</p><p>• <strong>Lord Curzon's Heritage Trail:</strong> Historic mountain route established in 1905 through pristine Garhwal wilderness.</p><p>• <strong>Auli Alpine Meadows:</strong> Descend into world-famous ski slopes and cedar forests overlooking Joshimath.</p>`,
  is_upcoming: true,
  is_popular: true,
  status: 1,
  category: {
    id: 2,
    name: "Winter & Spring Trek",
    slug: "winter",
    sort_order: 1,
    status: true,
    image: "category_winter.webp",
    short_description: "Experience iconic mountain passes and alpine meadows.",
    icon: "Snowflake",
  },
  categories: ["winter", "spring"],
  season: "November to April (Winter) & May (Spring)",
};

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
    image: "category_summer_monsoon.webp",
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

export const ADI_KAILASH_TREK = {
  id: "adi-kailash",
  category_id: 3,
  name: "ADI KAILASH & OM PARVAT YATRA",
  title: "ADI KAILASH & OM PARVAT YATRA",
  slug: "adi-kailash-om-parvat-yatra",
  location: "Vyas Valley, Pithoragarh, Uttarakhand",
  venue: "Gunji & Nabi Village, Dharchula",
  difficulty: "Easy to Moderate",
  grade: "Easy to Moderate",
  duration_days: 5,
  duration_nights: 4,
  days: "5 Days / 4 Nights",
  max_altitude: 15000,
  altitude: 15000,
  price: "7500.00",
  featured_image: "/adi_kailash_card.jpg",
  image: "/adi_kailash_card.jpg",
  banner_image: "/adi_kailash_banner.jpg",
  itinerary_pdf: "/adi_kailash_itinerary.pdf",
  url: "/treks/adi-kailash-om-parvat-yatra",
  short_description: "Sacred Chhota Kailash, Parvati Sarovar & Mystical Om Parvat Expedition",
  why_choose: `<p><strong>Adi Kailash &amp; Om Parvat Yatra</strong> is a soul-stirring journey through the remote Vyas Valley in the Kumaon Himalayas near the Indo-Tibet and Indo-Nepal borders.</p><p>Revered as the sacred counterpart of Mount Kailash (Chhota Kailash), Adi Kailash stands majestically at 15,000 feet beside the holy <strong>Parvati Sarovar</strong>, whose mirror-like waters reflect the divine peak.</p><p>The pilgrimage also takes you to the mystical <strong>Om Parvat</strong>, where the sacred Vedic syllable <em>\"ॐ\"</em> naturally appears etched in snow on the dark mountain face. Far from commercial tourist trails, this expedition combines high spiritual devotion with raw Himalayan grandeur and warm Bhotiya village hospitality.</p><p><strong>Expedition Highlights:</strong></p><p>• <strong>Sacred Adi Kailash (Chhota Kailash):</strong> Seek divine blessings and meditate beneath the towering sacred peak at 15,000 ft.</p><p>• <strong>Mystical Om Parvat:</strong> Witness the miraculous natural snow formation of the sacred \"ॐ\" symbol.</p><p>• <strong>Holy Parvati Sarovar:</strong> Tranquil alpine lake reflection providing a deeply spiritual setting for prayers and rituals.</p><p>• <strong>Remote Vyas Valley Culture:</strong> Experience traditional stone-and-wood carved architecture, homestays, and Bhotiya culture in Nabi and Gunji villages.</p>`,
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
    short_description: "Sacred Himalayan pilgrimage to Chhota Kailash, Parvati Sarovar & Om Parvat.",
    icon: "Sun",
  },
  categories: ["summer", "monsoon", "post-monsoon"],
  season: "Summer & Post-Monsoon (May - Jun & Sep - Oct)",
};

export const PANCH_KEDAR_TREK = {
  id: "panch-kedar",
  category_id: 3,
  name: "PANCH KEDAR YATRA",
  title: "PANCH KEDAR YATRA",
  slug: "panch-kedar-yatra",
  location: "Garhwal Himalayas, Uttarakhand",
  venue: "Kedarnath, Madhyamaheshwar, Tungnath, Rudranath, Kalpeshwar",
  difficulty: "Moderate to Challenging",
  grade: "Moderate to Challenging",
  duration_days: 12,
  duration_nights: 11,
  days: "12 Days / 11 Nights",
  max_altitude: 12073,
  altitude: 12073,
  price: "14500.00",
  featured_image: "/panch_kedar_card.jpg",
  image: "/panch_kedar_card.jpg",
  banner_image: "/panch_kedar_banner.jpg",
  itinerary_pdf: "/panch_kedar_itinerary.pdf",
  url: "/treks/panch-kedar-yatra",
  short_description: "The Ultimate Holy Pilgrimage to All Five Sacred Shiva Temples in One Journey",
  why_choose: `<p><strong>Panch Kedar Yatra</strong> is the ultimate sacred pilgrimage across the Garhwal Himalayas, paying homage to all five revered shrines of Lord Shiva: <strong>Kedarnath, Madhyamaheshwar, Tungnath, Rudranath, and Kalpeshwar</strong>.</p><p>Rooted in the timeless epic of the Mahabharata, this legendary circuit takes you through diverse landscapes — from snow-covered mountain ridges and ancient rhododendron forests to tranquil alpine bugyals and roaring glacial rivers.</p><p>Covering approximately 785 km of scenic mountain drives and 107–115 km of trekking, it is a life-transforming journey of deep faith, inner discovery, and raw Himalayan adventure.</p><p><strong>Expedition Highlights:</strong></p><p>• <strong>All Five Shrines of Shiva:</strong> Complete darshan of Kedarnath (Hump), Madhyamaheshwar (Navel), Tungnath (Arms), Rudranath (Face), and Kalpeshwar (Hair/Jata).</p><p>• <strong>World's Highest Shiva Temple:</strong> Trek to Tungnath at 12,073 ft with optional sunrise summit to Chandrashila.</p><p>• <strong>Budha Madhyamaheshwar:</strong> Pristine morning reflections of the mighty Chaukhamba massif in alpine tarns.</p><p>• <strong>Spiritual &amp; Cultural Immersion:</strong> Traditional Garhwali village stays in Bantoli, Ransi, Sagar, and Chopta.</p>`,
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
    short_description: "Visit all five sacred Panch Kedar temples in one epic Himalayan pilgrimage.",
    icon: "Sun",
  },
  categories: ["summer", "monsoon", "post-monsoon"],
  season: "Summer & Post-Monsoon (May - Jun & Sep - Oct)",
};

async function fetchTreks(t = {}) {
  let list = [];

  const cat = (t.category || t.type || "").toLowerCase();
  const isPostMonsoonCat = cat === "monsoon" || cat === "post-monsoon";
  const isUpcoming = Boolean(t.upcoming || cat === "upcoming");

  // 1. Kedarkantha Trek
  if (
    !list.some(
      (item) =>
        item.slug === "kedarkantha-trek" ||
        item.slug === "kedarkantha" ||
        item.name?.toLowerCase().includes("kedarkantha")
    )
  ) {
    if (!cat || cat === "all" || cat === "winter" || isUpcoming) {
      list.unshift(KEDARKANTHA_TREK);
    }
  }

  // 2. Kuari Pass Trek
  if (
    !list.some(
      (item) =>
        item.slug === "kuari-pass-trek" ||
        item.slug === "kuari-pass" ||
        item.name?.toLowerCase().includes("kuari")
    )
  ) {
    if (!cat || cat === "all" || cat === "winter" || isUpcoming) {
      list.push(KUARI_PASS_TREK);
    }
  }

  // 3. Brahmatal Winter Trek
  if (
    !list.some(
      (item) =>
        item.slug === "brahmatal-winter-trek" ||
        item.name?.toLowerCase().includes("brahmatal")
    )
  ) {
    if (!cat || cat === "all" || cat === "winter" || isUpcoming) {
      list.push(BRAHMATAL_TREK);
    }
  }

  // 4. Niti Valley & Timmersain Mahadev
  if (
    !list.some(
      (item) =>
        item.slug === "niti-valley-timmersain-mahadev" ||
        item.name?.toLowerCase().includes("niti valley") ||
        item.name?.toLowerCase().includes("timmersain")
    )
  ) {
    if (!cat || cat === "all" || cat === "winter" || cat === "summer" || isUpcoming) {
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

  // 5. Panchachuli Base Camp Trek
  if (
    !list.some(
      (item) =>
        item.slug === "panchachuli-base-camp-trek" ||
        item.name?.toLowerCase().includes("panchachuli")
    )
  ) {
    if (!cat || cat === "all" || cat === "summer" || isPostMonsoonCat || isUpcoming) {
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

  // 6. Rudranath Yatra Trek
  if (
    !list.some(
      (item) =>
        item.slug === "rudranath-yatra-trek" ||
        item.name?.toLowerCase().includes("rudranath")
    )
  ) {
    if (!cat || cat === "all" || cat === "summer" || isPostMonsoonCat || isUpcoming) {
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

  // 7. Valley of Flowers & Hemkund Sahib
  if (
    !list.some(
      (item) =>
        item.slug === "valley-of-flowers-trek" ||
        item.slug === "valley-of-flowers" ||
        item.name?.toLowerCase().includes("valley of flowers")
    )
  ) {
    if (!cat || cat === "all" || isPostMonsoonCat || isUpcoming) {
      list.push(VALLEY_OF_FLOWERS_TREK);
    }
  }

  // 8. Adi Kailash & Om Parvat Yatra
  if (
    !list.some(
      (item) =>
        item.slug === "adi-kailash-om-parvat-yatra" ||
        item.name?.toLowerCase().includes("adi kailash")
    )
  ) {
    if (!cat || cat === "all" || cat === "summer" || isPostMonsoonCat || isUpcoming) {
      const adaptedAdiKailash = {
        ...ADI_KAILASH_TREK,
        category: {
          ...ADI_KAILASH_TREK.category,
          name:
            isPostMonsoonCat
              ? "Post-Monsoon Trek"
              : cat === "summer"
              ? "Summer Trek"
              : "Summer & Post-Monsoon Trek",
          slug: isPostMonsoonCat ? "monsoon" : "summer",
        },
      };
      list.push(adaptedAdiKailash);
    }
  }

  // 9. Panch Kedar Yatra
  if (
    !list.some(
      (item) =>
        item.slug === "panch-kedar-yatra" ||
        item.name?.toLowerCase().includes("panch kedar")
    )
  ) {
    if (!cat || cat === "all" || cat === "summer" || isPostMonsoonCat || isUpcoming) {
      const adaptedPanchKedar = {
        ...PANCH_KEDAR_TREK,
        category: {
          ...PANCH_KEDAR_TREK.category,
          name:
            isPostMonsoonCat
              ? "Post-Monsoon Trek"
              : cat === "summer"
              ? "Summer Trek"
              : "Summer & Post-Monsoon Trek",
          slug: isPostMonsoonCat ? "monsoon" : "summer",
        },
      };
      list.push(adaptedPanchKedar);
    }
  }

  return list;
}

export default fetchTreks;
