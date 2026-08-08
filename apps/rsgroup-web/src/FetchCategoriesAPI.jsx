import React from "react";
import { BACKEND_API_URL } from "@/lib/config";

const k2 = `${BACKEND_API_URL}/categories`;

async function fetchCategories() {
  const t = await fetch(k2),
    e = await t.json();
  if (!t.ok) throw e;
  return e;
}

export default fetchCategories;
