import React, { useState, useEffect, useRef, useContext } from "react";
import { Mountain } from "lucide-react";
import { BACKEND_STORAGE_URL } from "@/lib/config";
import fetchTreks from "./FetchTreksAPI";
import Categories from "./Categories";
import HeroSlider from "./HeroSlider";
import TrekCard from "./TrekCard";
import Testimonials from "./Testimonials";
import AboutHighlight from "./AboutHighlight";
import StatsHighlight from "./StatsHighlight";
function HomePage() {
  const [t, e] = React.useState(""),
    [n, a] = React.useState([]),
    [o, s] = React.useState(!0);
  React.useEffect(() => {
    async function d() {
      try {
        const u = await fetchTreks();
        console.log("res", u);
        const y = u.map((m) => ({
          id: m.id,
          title: m.name ?? "-",
          grade: m.difficulty ?? "-",
          days: `${m.duration_days} Days / ${m.duration_nights} Nights`,
          venue: m.location ?? "-",
          altitude: m.max_altitude ?? "-",
          image: m.featured_image
            ? `${BACKEND_STORAGE_URL}/${m.featured_image}`
            : "https://rsgrouputtarakhand.in/images/trek_list_home.JPG",
          banner_image: m.banner_image
            ? `${BACKEND_STORAGE_URL}/${m.banner_image}`
            : "https://rsgrouputtarakhand.in/images/trek_banner.JPG",
          url: `/treks/${m.slug}`,
          price: m.price ?? "00",
          short_description: m.short_description,
          why_choose: m.why_choose,
        }));
        console.log("mapped", y);
        a(y);
      } catch (u) {
        console.error("Failed to load treks", u);
      } finally {
        s(!1);
      }
    }
    d();
  }, []);
  const c = n;
  return (
    <div className="min-h-screen w-full bg-[#f4ede1] text-[#2b241d] font-sans selection:bg-[#f25b23]/25 selection:text-[#2b241d]">
      {<Categories />}
      {<HeroSlider />}{" "}
      {/* Separation Line */}
      <hr className="border-0 h-[1.5px] bg-[#f25b23]/20 max-w-6xl mx-auto my-12" />

      {/* Explore by Treks Section */}
      <main className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row gap-8 pb-16">
        <section className="flex-1">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-2xl font-display font-semibold text-[#2b241d] flex items-center gap-2 tracking-tight">
              <Mountain className="w-6 h-6 text-[#f25b23]" />
              Explore by Treks
            </h2>
            <a
              href="/alltreks"
              className="flex items-center gap-2 text-sm font-semibold text-[#f25b23] hover:text-[#2b241d] transition-all px-4 py-2 rounded-full border border-[#f25b23]/40 hover:border-[#f25b23] bg-[#efe5d5]/20 shadow-sm"
            >
              Explore More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </a>
          </div>
          <hr className="border-0 h-[1px] bg-[#2b241d]/12 rounded-full mb-10" />
          {c.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {c.map((d) => (
                <TrekCard
                  key={d.id}
                  event={d}
                  className="bg-white border border-[#2b241d]/12 hover:border-[#f25b23]/30 transition-all duration-300 rounded-2xl overflow-hidden"
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-[#6f6357]/60 mt-10">
              No trekking events available.
            </p>
          )}
        </section>
      </main>

      {<Testimonials />}
      {<AboutHighlight />}
      {<StatsHighlight />}
    </div>
  );
}
export default HomePage;
