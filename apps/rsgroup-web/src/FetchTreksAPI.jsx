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

async function fetchTreks(t = {}) {
  const e = new URLSearchParams(t).toString(),
    n = await fetch(`${x2}/${e ? `?${e}` : ""}`),
    a = await n.json();
  if (!n.ok) throw a;
  const list = a.data ? [...a.data] : [];
  if (
    !list.some(
      (item) =>
        item.slug === "brahmatal-winter-trek" ||
        item.name?.toLowerCase().includes("brahmatal")
    )
  ) {
    const cat = t.category;
    if (!cat || cat === "all" || cat === "winter" || t.upcoming) {
      list.push(BRAHMATAL_TREK);
    }
  }
  return list;
}

export default fetchTreks;
