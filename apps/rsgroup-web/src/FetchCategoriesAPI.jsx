import React from "react";
import { BACKEND_API_URL } from "@/lib/config";

const k2 = `${BACKEND_API_URL}/categories`;

export const STATIC_CATEGORIES = [
  {
    id: 2,
    name: "Winter Trek",
    slug: "winter",
    sort_order: 1,
    status: true,
    image: "category_winter.png",
    short_description: "Traverse snow-covered trails and magical valleys.",
    icon: "Snowflake",
    isLocal: true,
  },
  {
    id: "summer-custom",
    name: "Summer Trek",
    slug: "summer",
    sort_order: 2,
    status: true,
    image: "category_summer_monsoon.png",
    short_description: "Explore lush green meadows, border valleys & alpine passes.",
    icon: "Sun",
    isLocal: true,
  },
  {
    id: "monsoon-custom",
    name: "Post-Monsoon Trek",
    slug: "monsoon",
    sort_order: 3,
    status: true,
    image: "category_valley_of_flowers.jpg",
    short_description: "Crisp mountain air, crystal clear peaks & golden meadows.",
    icon: "CloudRain",
    isLocal: true,
  },
];

async function fetchCategories() {
  try {
    const t = await fetch(k2),
      e = await t.json();
    if (!t.ok) throw e;
    let list = e.data ? [...e.data] : [];
    list = list.map((item) => {
      if (item.slug === "monsoon" || item.slug === "post-monsoon") {
        return {
          ...item,
          name: "Post-Monsoon Trek",
          short_description: "Crisp mountain air, crystal clear peaks & golden meadows.",
        };
      }
      return item;
    });
    if (!list.some((item) => item.slug === "summer")) {
      list.push(STATIC_CATEGORIES[1]);
    }
    if (!list.some((item) => item.slug === "monsoon" || item.slug === "post-monsoon")) {
      list.push(STATIC_CATEGORIES[2]);
    }
    return { success: true, data: list };
  } catch (err) {
    console.warn("fetchCategories failed, using static categories fallback:", err);
    return { success: true, data: STATIC_CATEGORIES };
  }
}

export default fetchCategories;
