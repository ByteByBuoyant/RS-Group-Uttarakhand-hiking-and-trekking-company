import React from "react";
import { BACKEND_API_URL } from "@/lib/config";

const x2 = `${BACKEND_API_URL}/treks`;

async function fetchTreks(t = {}) {
  const e = new URLSearchParams(t).toString(),
    n = await fetch(`${x2}/${e ? `?${e}` : ""}`),
    a = await n.json();
  if (!n.ok) throw a;
  return a.data;
}

export default fetchTreks;
