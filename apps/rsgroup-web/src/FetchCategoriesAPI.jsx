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
    image: "category_winter.webp",
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
    image: "category_summer_monsoon.webp",
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
  return { success: true, data: STATIC_CATEGORIES };
}

export default fetchCategories;
