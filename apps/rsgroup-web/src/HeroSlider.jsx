const $Le = "Compass";
const ELe = "https://rsgrouputtarakhand.in/images/category_winter.heif";
import * as UT from "lucide-react";
import fetchCategories from "./FetchCategoriesAPI";
const az = fetchCategories;
import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Mountain, SquareBottomDashedScissors } from "lucide-react";
import { BACKEND_STORAGE_URL } from "@/lib/config";
import { motion } from "framer-motion";

function HeroSlider() {
  const t = useNavigate(),
    [e, n] = React.useState([]),
    [a, o] = React.useState(!0);

  React.useEffect(() => {
    (async () => {
      try {
        const c = await az();
        let list = c.data ? [...c.data] : [];
        list = list.map((item) => {
          if (
            item.slug === "winter" ||
            item.name.toLowerCase().includes("winter")
          ) {
            return {
              ...item,
              short_description:
                "Traverse snow-covered trails and magical valleys.",
            };
          }
          return item;
        });
        if (!list.some((item) => item.slug === "summer")) {
          const winterIndex = list.findIndex(
            (item) =>
              item.slug === "winter" ||
              item.name.toLowerCase().includes("winter")
          );
          const customSummer = {
            id: "summer-monsoon-custom",
            name: "Summer/Monsoon Trek",
            slug: "summer",
            icon: "Sun",
            image: "category_summer_monsoon.png",
            short_description: "Explore lush green meadows and clear skies.",
            isLocal: true,
          };
          const customMonsoon = {
            id: "monsoon-custom",
            name: "Monsoon Trek",
            slug: "monsoon",
            icon: "CloudRain",
            image: "category_valley_of_flowers.jpg",
            short_description: "Experience the majestic Valley of Flowers in full bloom.",
            isLocal: true,
          };
          if (winterIndex !== -1) {
            list.splice(winterIndex + 1, 0, customSummer, customMonsoon);
          } else {
            list.push(customSummer, customMonsoon);
          }
        }
        n(list);
      } catch (c) {
        console.error(c);
      } finally {
        o(!1);
      }
    })();
  }, []);
  return a ? (
    <div className="p-6 text-[#6f6357]/60">Loading categories...</div>
  ) : (
    <div className="max-w-6xl mx-auto px-6 md:px-10 mt-12 py-6">
      {
        <div className="flex items-center justify-between mb-5">
          {
            <h2 className="text-2xl font-display font-semibold text-[#2b241d] flex items-center gap-2">
              {<Mountain className="w-6 h-6 text-[#f25b23]" />}Explore by
              Categories
            </h2>
          }
        </div>
      }
      {
        <hr
          className="border-0 h-[1px] bg-[#efe5d5] rounded-full mb-8"
        />
      }
      {
        <div className="flex flex-wrap gap-6">
          {e.map((s, idx) => {
            const c = UT[s.icon] || UT[$Le],
              d = s.slug === "winter" || s.name.toLowerCase().includes("winter")
                ? "/category_winter.png"
                : s.isLocal
                ? `/${s.image}`
                : s.image
                ? `${BACKEND_STORAGE_URL}/${s.image}`
                : ELe;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                onClick={() => t(`/alltreks?category=${s.slug}`)}
                className="w-full sm:w-[280px] shrink-0 bg-white rounded-2xl overflow-hidden border border-[#2b241d]/12 hover:border-[#f25b23]/40 shadow-sm cursor-pointer transition-all duration-300"
              >
                {
                  <div className="relative h-36 w-full">
                    {
                      <img
                        src={d}
                        alt={s.name}
                        className={`h-full w-full object-cover
                             group-hover:scale-110
                             transition-transform duration-500`}
                      />
                    }
                    {
                      <div
                        className={`absolute inset-0 bg-gradient-to-t
                                from-black/50 via-black/20 to-transparent`}
                      />
                    }
                  </div>
                }
                {
                  <div className="p-3">
                    {
                      <div className="flex items-center gap-2 mb-1">
                        {
                          <div
                            className={`p-2 rounded-full
                                  bg-gradient-to-br from-[#f25b23]
                                  via-[#f25b23] to-[#000000]
                                  text-[#2b241d]`}
                          >
                            {React.createElement(c, { className: "w-4 h-4" })}
                          </div>
                        }
                        {
                          <h3
                            className={`text-base font-semibold text-[#2b241d]
                                 group-hover:text-[#f25b23] transition-colors`}
                          >
                            {s.name}
                          </h3>
                        }
                      </div>
                    }
                    {
                      <p className="text-[15px] font-semibold text-[#6f6357] leading-snug line-clamp-2">
                        {s.short_description || "Explore curated treks"}
                      </p>
                    }
                  </div>
                }
              </motion.div>
            );
          })}
        </div>
      }
    </div>
  );
}
export default HeroSlider;
