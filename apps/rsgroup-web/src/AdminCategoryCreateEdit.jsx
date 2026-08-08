const ee = Swal;
import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Save } from "lucide-react";
import Swal from "sweetalert2";
function AdminCategoryCreateEdit() {
  const t = useNavigate(),
    { id: e } = useParams(),
    n = !!e,
    [a, o] = React.useState(!1),
    [s, c] = React.useState(null),
    [d, u] = React.useState({
      name: "",
      slug: "",
      sort_order: 0,
      status: !0,
      short_description: "",
      image: null,
      icon: "",
    });
  React.useEffect(() => {
    if (!n) return;
    async function k() {
      try {
        const v = await TLe(e),
          b = v.data ?? v;
        u({
          name: b.name || "",
          slug: b.slug || "",
          sort_order: b.sort_order ?? 0,
          status: !!b.status,
          short_description: b.short_description || "",
          image: null,
          icon: b.icon || "",
        });
        c(b.image ? `${kIe}/${b.image}` : null);
      } catch {
        ee.fire({
          icon: "error",
          title: "Failed",
          text: "Unable to load category details",
        });
        t("/admin/category/list");
      }
    }
    k();
  }, [e, n, t]);
  const y = (k, v) =>
      u((b) => ({
        ...b,
        [k]: v,
      })),
    m = async () => {
      try {
        o(!0);
        const k = yIe(d);
        n ? await ILe(e, k) : await ALe(k);
        await ee.fire({
          icon: "success",
          title: "Success",
          text: n
            ? "Category updated successfully"
            : "Category created successfully",
          timer: 1500,
          showConfirmButton: !1,
        });
        t("/admin/category/list");
      } catch (k) {
        ee.fire({
          icon: "error",
          title: "Operation Failed",
          text: k?.message || "Something went wrong. Please try again.",
        });
      } finally {
        o(!1);
      }
    };
  return (
    <div className="max-w-5xl mx-auto px-4 pb-28 md:pb-6">
      {
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-6">
          {
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#FF7A00] to-[#F15A24] bg-clip-text text-transparent">
              {n ? "Edit Category" : "Create Category"}
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
        <div className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-6 space-y-5 backdrop-blur-xl">
          {
            <yq
              label="Category Name"
              value={d.name}
              onChange={(k) => y("name", k)}
            />
          }
          {<yq label="Slug" value={d.slug} onChange={(k) => y("slug", k)} />}
          {
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {
                <yq
                  label="Sort Order"
                  type="number"
                  value={d.sort_order}
                  onChange={(k) => y("sort_order", k)}
                />
              }
              {
                <vIe
                  label="Status"
                  value={d.status}
                  onChange={(k) => y("status", k)}
                />
              }
            </div>
          }
          {
            <xIe
              label="Short Description"
              value={d.short_description}
              onChange={(k) => y("short_description", k)}
            />
          }
          {
            <div>
              {<label className="text-sm text-white/70">Category Image</label>}
              {s && (
                <div className="mt-3 flex flex-col sm:flex-row sm:items-center gap-4">
                  {
                    <img
                      src={s}
                      alt="Current"
                      className="h-28 w-full sm:w-40 object-cover rounded-xl border border-white/20"
                    />
                  }
                  {
                    <p className="text-xs text-white/50">
                      Upload a new image to replace
                    </p>
                  }
                </div>
              )}
              {
                <input
                  type="file"
                  accept="image/*"
                  className="mt-3 block w-full text-white text-sm"
                  onChange={(k) => y("image", k.target.files[0])}
                />
              }
            </div>
          }
          {
            <div>
              {
                <label className="text-sm text-white/70 mb-2 block">
                  Category Icon
                </label>
              }
              {<gIe value={d.icon} onSelect={(k) => y("icon", k)} />}
            </div>
          }
        </div>
      }
      {
        <div
          className={`fixed md:static bottom-0 left-0 right-0 p-4 md:p-0
                      bg-gradient-to-t from-[#0b1626] via-[#0b1626]/80 to-transparent
                      md:bg-none`}
        >
          {
            <button
              onClick={m}
              disabled={a}
              className={`w-full px-6 py-3 bg-gradient-to-r from-[#FF7A00] to-[#F15A24]
                     text-white rounded-xl flex items-center justify-center gap-2
                     disabled:opacity-50 shadow-xl`}
            >
              {<Save size={18} />}
              {a ? "Saving..." : n ? "Update Category" : "Save Category"}
            </button>
          }
        </div>
      }
    </div>
  );
}
export default AdminCategoryCreateEdit;
