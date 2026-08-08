const ee = Swal;
import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
function AdminFAQCreateEdit() {
  const t = useNavigate(),
    { id: e } = useParams(),
    n = !!e,
    [a, o] = React.useState(!1),
    [s, c] = React.useState({
      question: "",
      answer: "",
      sort_order: 0,
    });
  React.useEffect(() => {
    if (!n) return;
    async function u() {
      try {
        const y = await ZRe(e);
        c({
          question: y.question || "",
          answer: y.answer || "",
          sort_order: y.sort_order || 0,
        });
      } catch {
        ee.fire("Error", "Failed to load FAQ", "error");
        t("/admin/faqs/list");
      }
    }
    u();
  }, [e, n, t]);
  const d = async (u) => {
    if ((u.preventDefault(), !a))
      try {
        o(!0);
        ee.fire({
          title: n ? "Updating..." : "Saving...",
          allowOutsideClick: !1,
          didOpen: () => ee.showLoading(),
        });
        n
          ? (await YRe(e, s),
            ee.fire("Updated", "FAQ updated successfully", "success"))
          : (await XRe(s),
            ee.fire("Added", "FAQ added successfully", "success"));
        t("/admin/faqs/list");
      } catch (y) {
        ee.fire("Error", y?.message || "Failed to save FAQ", "error");
      } finally {
        o(!1);
      }
  };
  return (
    <div className="p-6 max-w-4xl mx-auto text-white">
      {
        <div className="flex justify-between items-center mb-6">
          {
            <button
              onClick={() => t("/admin/faqs/list")}
              className={`flex items-center gap-2
                     px-3 py-2 text-sm
                     text-white/70 hover:text-white
                     hover:bg-white/10 rounded-lg`}
            >
              ← Back to FAQs
            </button>
          }
          {
            <h2 className="text-2xl font-semibold">
              {n ? "Edit FAQ" : "Add FAQ"}
            </h2>
          }
        </div>
      }
      {
        <form
          onSubmit={d}
          className={`bg-white/5 border border-white/10
                   rounded-2xl p-6 space-y-5`}
        >
          {
            <div className="space-y-1">
              {<label className="text-sm text-white/60">Question</label>}
              {
                <input
                  type="text"
                  value={s.question}
                  onChange={(u) =>
                    c({
                      ...s,
                      question: u.target.value,
                    })
                  }
                  className={`w-full rounded-lg bg-white/5 border border-white/10
                       px-3 py-2 text-white
                       focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  placeholder="What is the best time for this trek?"
                  required={!0}
                  disabled={a}
                />
              }
            </div>
          }
          {
            <div className="space-y-1">
              {<label className="text-sm text-white/60">Answer</label>}
              {
                <textarea
                  rows="6"
                  value={s.answer}
                  onChange={(u) =>
                    c({
                      ...s,
                      answer: u.target.value,
                    })
                  }
                  className={`w-full rounded-lg bg-white/5 border border-white/10
                       px-3 py-2 text-white resize-none
                       focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                  placeholder="December to April is the best time..."
                  required={!0}
                  disabled={a}
                />
              }
            </div>
          }
          {
            <div className="space-y-1">
              {<label className="text-sm text-white/60">Sort Order</label>}
              {
                <input
                  type="number"
                  value={s.sort_order}
                  onChange={(u) =>
                    c({
                      ...s,
                      sort_order: u.target.value,
                    })
                  }
                  className={`w-full rounded-lg bg-white/5 border border-white/10
                       px-3 py-2 text-white`}
                  disabled={a}
                />
              }
            </div>
          }
          {
            <div className="flex justify-end gap-3 pt-4">
              {
                <button
                  type="button"
                  onClick={() => t("/admin/faqs/list")}
                  disabled={a}
                  className={`px-4 py-2 rounded-lg border border-white/20
                       text-white/70 hover:bg-white/10`}
                >
                  Cancel
                </button>
              }
              {
                <button
                  type="submit"
                  disabled={a}
                  className={`px-5 py-2 rounded-lg
                       bg-indigo-600 hover:bg-indigo-700
                       font-medium`}
                >
                  {a ? "Saving..." : "Save FAQ"}
                </button>
              }
            </div>
          }
        </form>
      }
    </div>
  );
}
export default AdminFAQCreateEdit;
