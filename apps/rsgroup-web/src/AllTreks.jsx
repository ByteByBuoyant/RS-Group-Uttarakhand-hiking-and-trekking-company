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
  autumn: "autumn",
  spring: "spring",
};

function AllTreks() {
  const t = useLocation(),
    e = useNavigate(),
    a = new URLSearchParams(t.search).get("type")?.toLowerCase() || "all",
    o = oIe[a] || "all",
    [s, c] = React.useState(o),
    [d, u] = React.useState([]),
    [y, m] = React.useState([]),
    [k, v] = React.useState(!0);
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
      const N = (await fetchTreks(_)).map((j) => ({
        id: j.id,
        title: j.name ?? "-",
        grade: j.difficulty ?? "-",
        days: `${j.duration_days} Days / ${j.duration_nights} Nights`,
        venue: j.location ?? "-",
        altitude: j.max_altitude ?? "-",
        image: j.slug === "kuari-pass-trek"
          ? "/kuari_pass_card.png"
          : j.featured_image
          ? `${BACKEND_STORAGE_URL}/${j.featured_image}`
          : "https://rsgrouputtarakhand.in/images/trek_list_home.JPG",
        banner_image: j.banner_image
          ? `${BACKEND_STORAGE_URL}/${j.banner_image}`
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
  }, [s]);
  const b = [
    {
      label: "All Treks",
      value: "all",
    },
    {
      label: "Upcoming",
      value: "upcoming",
    },
    ...(Array.isArray(y)
      ? y.map((w) => ({
          label: w.name,
          value: w.slug,
        }))
      : []),
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
