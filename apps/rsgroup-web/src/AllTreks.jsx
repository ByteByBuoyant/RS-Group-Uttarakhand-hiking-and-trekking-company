import fetchCategories from "./FetchCategoriesAPI";
const az = fetchCategories;
import React, { useState, useEffect, useRef, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Mountain } from "lucide-react";
import { BACKEND_STORAGE_URL } from "@/lib/config";
import fetchTreks from "./FetchTreksAPI";
import TrekCard from "./TrekCard";
const oIe = {
  upcoming: "upcoming",
  winter: "winter",
  summer: "summer",
  monsoon: "monsoon",
  "post-monsoon": "monsoon",
  autumn: "autumn",
  spring: "spring",
};

function AllTreks() {
  const t = useLocation(),
    e = useNavigate(),
    searchParams = new URLSearchParams(t.search),
    a = searchParams.get("type")?.toLowerCase() || searchParams.get("category")?.toLowerCase() || "all",
    o = oIe[a] || (a === "winter" ? "winter" : "all"),
    [s, c] = React.useState(o),
    [d, u] = React.useState([]),
    [y, m] = React.useState([]),
    [k, v] = React.useState(!0);

  React.useEffect(() => {
    const newCategory = new URLSearchParams(t.search).get("category")?.toLowerCase() || new URLSearchParams(t.search).get("type")?.toLowerCase();
    if (newCategory) {
      c(newCategory);
    }
  }, [t.search]);

  React.useEffect(() => {
    async function w() {
      try {
        const _ = await az();
        m(_.data ?? []);
      } catch (_) {
        console.error(_);
        m([]);
      }
    }
    w();
  }, []);
  React.useEffect(() => {
    async function w() {
      v(!0);
      const _ = {};
      s === "upcoming" ? (_.upcoming = 1) : s !== "all" && (_.category = s);
      const searchParam = new URLSearchParams(t.search).get("search")?.toLowerCase();
      let rawTreks = await fetchTreks(_);
      if (searchParam) {
        rawTreks = rawTreks.filter(
          (j) =>
            j.name?.toLowerCase().includes(searchParam) ||
            j.title?.toLowerCase().includes(searchParam) ||
            j.location?.toLowerCase().includes(searchParam) ||
            j.venue?.toLowerCase().includes(searchParam) ||
            j.short_description?.toLowerCase().includes(searchParam) ||
            j.category?.name?.toLowerCase().includes(searchParam) ||
            j.category?.slug?.toLowerCase().includes(searchParam) ||
            (Array.isArray(j.categories) &&
              j.categories.some((cat) => cat.toLowerCase().includes(searchParam))) ||
            j.why_choose?.toLowerCase().includes(searchParam)
        );
      }
      const N = rawTreks.map((j) => ({
        id: j.id,
        title: j.name ?? "-",
        grade: j.difficulty ?? "-",
        days: `${j.duration_days} Days / ${j.duration_nights} Nights`,
        venue: j.location ?? "-",
        altitude: j.max_altitude ?? "-",
        image: j.slug === "kuari-pass-trek"
          ? "/kuari_pass_card.png"
          : j.slug === "brahmatal-winter-trek" || j.id === "brahmatal"
          ? "/brahmatal_card.jpg"
          : j.slug === "niti-valley-timmersain-mahadev" || j.id === "niti-valley"
          ? "/niti_valley_card.jpg"
          : j.slug === "panchachuli-base-camp-trek" || j.id === "panchachuli"
          ? "/panchachuli_card.jpg"
          : j.slug === "rudranath-yatra-trek" || j.slug === "rudranath-yatra" || j.id === "rudranath"
          ? "/rudranath_card.jpg"
          : j.slug === "valley-of-flowers-trek" || j.slug === "valley-of-flowers" || j.id === "valley-of-flowers"
          ? "/valley_of_flowers_card.jpg"
          : j.featured_image
          ? (j.featured_image.startsWith("/") ? j.featured_image : `${BACKEND_STORAGE_URL}/${j.featured_image}`)
          : "https://rsgrouputtarakhand.in/images/trek_list_home.JPG",
        banner_image: j.slug === "brahmatal-winter-trek" || j.id === "brahmatal"
          ? "/brahmatal_banner.jpg"
          : j.slug === "niti-valley-timmersain-mahadev" || j.id === "niti-valley"
          ? "/niti_valley_banner.jpg"
          : j.slug === "panchachuli-base-camp-trek" || j.id === "panchachuli"
          ? "/panchachuli_banner.jpg"
          : j.slug === "rudranath-yatra-trek" || j.slug === "rudranath-yatra" || j.id === "rudranath"
          ? "/rudranath_banner.jpg"
          : j.slug === "valley-of-flowers-trek" || j.slug === "valley-of-flowers" || j.id === "valley-of-flowers"
          ? "/valley_of_flowers_banner.jpg"
          : j.banner_image
          ? (j.banner_image.startsWith("/") ? j.banner_image : `${BACKEND_STORAGE_URL}/${j.banner_image}`)
          : "https://rsgrouputtarakhand.in/images/trek_banner.JPG",
        url: `/treks/${j.slug}`,
        price: j.price ?? "00",
        short_description: j.short_description,
        why_choose: j.why_choose,
      }));
      u(N);
      v(!1);
    }
    w();
  }, [s, t.search]);

  const categoryList = Array.isArray(y) ? [...y] : [];
  if (!categoryList.some((item) => item.slug === "winter")) {
    categoryList.unshift({ name: "Winter Trek", slug: "winter" });
  }
  if (!categoryList.some((item) => item.slug === "summer")) {
    categoryList.push({ name: "Summer Trek", slug: "summer" });
  }
  if (!categoryList.some((item) => item.slug === "monsoon" || item.slug === "post-monsoon")) {
    categoryList.push({ name: "Post-Monsoon Trek", slug: "monsoon" });
  }

  const b = [
    {
      label: "All Treks",
      value: "all",
    },
    {
      label: "Upcoming",
      value: "upcoming",
    },
    ...categoryList.map((w) => ({
      label:
        w.slug === "summer"
          ? "Summer Trek"
          : w.slug === "monsoon" || w.slug === "post-monsoon"
          ? "Post-Monsoon Trek"
          : w.name,
      value: w.slug,
    })),
  ];

  return (
    <div className="min-h-screen w-full bg-[#efe5d5]/60 border border-[#2b241d]/12 backdrop-blur-md">
      
      {
        <div className="px-5 md:px-12 mt-[8rem] mb-12">
          {
            <div className="flex items-center justify-between mb-6">
              {
                <h1 className="text-3xl font-display font-semibold text-[#2b241d] flex items-center gap-2">
                  {<Mountain className="text-[#f25b23]" />}All Trekking
                  Adventures
                </h1>
              }
              {
                <button
                  onClick={() => e(-1)}
                  className="px-4 py-2 text-sm font-semibold border border-gray-300 rounded-lg hover:bg-[#efe5d5]"
                >
                  ← Back
                </button>
              }
            </div>
          }
          {
            <hr className="border-0 h-[2px] bg-gradient-to-r from-[#f25b23] via-[#f25b23] to-black rounded-full mb-8" />
          }
          {
            <div className="flex flex-wrap gap-3 mb-8">
              {b.map((w) => (
                <button
                  onClick={() => c(w.value)}
                  className={`px-4 py-2 text-sm rounded-full font-medium border transition
                ${s === w.value ? "bg-gradient-to-r from-[#f25b23] to-[#f25b23] text-[#2b241d] border-transparent shadow-lg shadow-[rgba(43,36,29,0.12)]" : "bg-[#efe5d5]/60 border border-[#2b241d]/12 backdrop-blur-md text-[#2b241d] border-gray-300 hover:border-[#f25b23]"}`}
                >
                  {w.label}
                </button>
              ))}
            </div>
          }
          {k ? (
            <p className="text-center text-[#6f6357]/60">Loading treks...</p>
          ) : d.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {d.map((w) => (
                <TrekCard event={w} />
              ))}
            </div>
          ) : (
            <p className="text-center text-[#6f6357]/60 mt-10">
              No treks available.
            </p>
          )}
        </div>
      }
      
    </div>
  );
}
export default AllTreks;
