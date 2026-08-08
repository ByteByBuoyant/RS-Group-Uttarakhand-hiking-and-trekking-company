import fetchCategories from "./FetchCategoriesAPI";
const az = fetchCategories;
const ee = Swal;
import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
import Swal from "sweetalert2";
function AdminTrekCreateEdit() {
  const t = useNavigate(),
    { id: e } = useParams(),
    n = !!e,
    [a, o] = React.useState(!1),
    [s, c] = React.useState([]),
    [d, u] = React.useState({
      featured_image: null,
      banner_image: null,
      itinerary_pdf: null,
    }),
    [y, m] = React.useState({
      category_id: "",
      name: "",
      slug: "",
      location: "",
      difficulty: "Easy",
      duration_days: "",
      duration_nights: "",
      max_altitude: "",
      price: "",
      short_description: "",
      why_choose: "",
      is_upcoming: !1,
      is_popular: !1,
      status: !0,
      featured_image: null,
      banner_image: null,
      itinerary_pdf: null,
    });
  React.useEffect(() => {
    az()
      .then((b) => c(b.data ?? b))
      .catch(() => {
        ee.fire({
          icon: "error",
          title: "Failed to load categories",
          text: "Please refresh the page or try again later.",
          confirmButtonColor: "#FF7A00",
        });
      });
  }, []);
  React.useEffect(() => {
    if (!n) return;
    async function b() {
      try {
        const w = await OLe(e),
          _ = w.data ?? w;
        m({
          category_id: String(_.category_id || ""),
          name: _.name || "",
          slug: _.slug || "",
          location: _.location || "",
          difficulty: _.difficulty || "Easy",
          duration_days: _.duration_days || "",
          duration_nights: _.duration_nights || "",
          max_altitude: _.max_altitude || "",
          price: _.price || "",
          short_description: _.short_description || "",
          why_choose: _.why_choose || "",
          is_upcoming: !!_.is_upcoming,
          is_popular: !!_.is_popular,
          status: !!_.status,
          featured_image: null,
          banner_image: null,
          itinerary_pdf: null,
        });
        console.log("form data :", {
          category_id: String(_.category_id || ""),
          name: _.name || "",
          slug: _.slug || "",
          location: _.location || "",
          difficulty: _.difficulty || "Easy",
          duration_days: _.duration_days || "",
          duration_nights: _.duration_nights || "",
          max_altitude: _.max_altitude || "",
          price: _.price || "",
          short_description: _.short_description || "",
          why_choose: _.why_choose || "",
          is_upcoming: !!_.is_upcoming,
          is_popular: !!_.is_popular,
          status: !!_.status,
          featured_image: null,
          banner_image: null,
          itinerary_pdf: null,
        });
        u({
          featured_image: _.featured_image ? `${Kq}/${_.featured_image}` : null,
          banner_image: _.banner_image ? `${Kq}/${_.banner_image}` : null,
          itinerary_pdf: _.itinerary_pdf ? `${Kq}/${_.itinerary_pdf}` : null,
        });
      } catch {
        t("/admin/trek/list");
      }
    }
    b();
  }, [e, n, t]);
  const k = (b, w) =>
      m((_) => ({
        ..._,
        [b]: w,
      })),
    v = async () => {
      try {
        o(!0);
        ee.fire({
          title: n ? "Updating Trek..." : "Saving Trek...",
          text: "Please wait",
          allowOutsideClick: !1,
          didOpen: () => ee.showLoading(),
        });
        const b = bIe(y);
        n ? await HLe(e, b) : await DLe(b);
        ee.fire({
          icon: "success",
          title: n ? "Trek Updated" : "Trek Created",
          text: "Changes have been saved successfully.",
          timer: 1500,
          showConfirmButton: !1,
        });
        setTimeout(() => {
          t("/admin/trek/list");
        }, 1500);
      } catch (b) {
        ee.fire({
          icon: "error",
          title: "Save Failed",
          text: b.message || "Something went wrong. Please try again.",
          confirmButtonColor: "#FF7A00",
        });
      } finally {
        o(!1);
      }
    };
  return (
    <div className="max-w-5xl mx-auto px-4 pb-28 md:pb-6">
      {
        <div className="flex justify-between items-center mb-6">
          {
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              {n ? "Edit Trek" : "Create Trek"}
            </h1>
          }
          {
            <button
              onClick={async () => {
                (
                  await ee.fire({
                    title: "Discard changes?",
                    text: "Any unsaved changes will be lost.",
                    icon: "warning",
                    showCancelButton: !0,
                    confirmButtonText: "Yes, go back",
                    cancelButtonText: "Stay",
                    confirmButtonColor: "#e11d48",
                    cancelButtonColor: "#64748b",
                    reverseButtons: !0,
                  })
                ).isConfirmed && t(-1);
              }}
              className="flex items-center gap-2 text-white/70 hover:text-white"
            >
              {<ArrowLeft size={18} />} Back
            </button>
          }
        </div>
      }
      {
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 space-y-5">
          {
            <MRe
              label="Category"
              value={y.category_id}
              options={s}
              onChange={(b) => k("category_id", b)}
            />
          }
          {
            <Qo
              label="Trek Name"
              value={y.name}
              onChange={(b) => k("name", b)}
            />
          }
          {<Qo label="Slug" value={y.slug} onChange={(b) => k("slug", b)} />}
          {
            <Qo
              label="Location"
              value={y.location}
              onChange={(b) => k("location", b)}
            />
          }
          {
            <_Re
              label="Difficulty"
              value={y.difficulty}
              onChange={(b) => k("difficulty", b)}
            />
          }
          {
            <div className="grid grid-cols-2 gap-4">
              {
                <Qo
                  type="number"
                  label="Duration Days"
                  value={y.duration_days}
                  onChange={(b) => k("duration_days", b)}
                />
              }
              {
                <Qo
                  type="number"
                  label="Duration Nights"
                  value={y.duration_nights}
                  onChange={(b) => k("duration_nights", b)}
                />
              }
            </div>
          }
          {
            <div className="grid grid-cols-2 gap-4">
              {
                <Qo
                  type="number"
                  label="Max Altitude (In ft)"
                  value={y.max_altitude}
                  onChange={(b) => k("max_altitude", b)}
                />
              }
              {
                <Qo
                  type="number"
                  label="Price (In Rs)"
                  value={y.price}
                  onChange={(b) => k("price", b)}
                />
              }
            </div>
          }
          {
            <wRe
              label="Short Description"
              value={y.short_description}
              onChange={(b) => k("short_description", b)}
            />
          }
          {
            <bRe
              label="Why Choose Us"
              value={y.why_choose}
              onChange={(b) => k("why_choose", b)}
            />
          }
          {
            <mW
              label="Upcoming"
              value={y.is_upcoming}
              onChange={(b) => k("is_upcoming", b)}
            />
          }
          {
            <mW
              label="Popular"
              value={y.is_popular}
              onChange={(b) => k("is_popular", b)}
            />
          }
          {
            <CRe
              label="Status"
              value={y.status}
              onChange={(b) => k("status", b)}
            />
          }
          {
            <Zq
              label="Featured Image"
              preview={d.featured_image}
              onChange={(b) => k("featured_image", b)}
            />
          }
          {
            <Zq
              label="Banner Image"
              preview={d.banner_image}
              onChange={(b) => k("banner_image", b)}
            />
          }
          {
            <Zq
              label="Itinerary PDF"
              preview={d.itinerary_pdf}
              isFile={!0}
              onChange={(b) => k("itinerary_pdf", b)}
            />
          }
        </div>
      }
      {
        <div
          className={`fixed md:static bottom-0 left-0 right-0 p-4
                      bg-gradient-to-t from-[#0b1626] via-[#0b1626]/80 to-transparent`}
        >
          {
            <button
              onClick={v}
              disabled={a}
              className={`w-full px-6 py-3 bg-gradient-to-r from-[#FF7A00] to-[#F15A24]
                     text-white rounded-xl flex items-center justify-center gap-2
                     disabled:opacity-50 shadow-xl`}
            >
              {<Save size={18} />}
              {a ? "Saving..." : n ? "Update Trek" : "Save Trek"}
            </button>
          }
        </div>
      }
    </div>
  );
}
export default AdminTrekCreateEdit;
