const ee = Swal;
import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Plus, Pencil, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
function AdminFAQList() {
  const t = useNavigate(),
    { trekId: e } = useParams(),
    [n, a] = React.useState([]),
    o = async () => {
      try {
        const c = await KRe(e);
        a(c.data || c);
      } catch {
        ee.fire("Error", "Failed to load FAQs", "error");
      }
    };
  React.useEffect(() => {
    o();
  }, [e]);
  const s = async (c) => {
    (
      await ee.fire({
        title: "Delete FAQ?",
        icon: "warning",
        showCancelButton: !0,
        confirmButtonColor: "#e11d48",
      })
    ).isConfirmed &&
      (await JRe(c), ee.fire("Deleted", "FAQ removed", "success"), o());
  };
  return (
    <div className="p-6 max-w-5xl mx-auto text-white">
      {
        <div className="flex justify-between items-center mb-6">
          {
            <button
              onClick={() => t("/admin/trek/list")}
              className="text-white/70 hover:text-white"
            >
              ← Back to Treks
            </button>
          }
          {
            <div className="flex items-center gap-3">
              {<h2 className="text-2xl font-semibold">Trek FAQs</h2>}
              {
                <button
                  onClick={() => t(`/admin/trek/${e}/faqs/create`)}
                  className={`flex items-center gap-2 px-4 py-2
                       bg-green-600 hover:bg-green-700 rounded-lg`}
                >
                  {<Plus size={16} />} Add FAQ
                </button>
              }
            </div>
          }
        </div>
      }
      {
        <div className="space-y-4">
          {n.map((c) => (
            <div
              className={`bg-white/5 border border-white/10
                       rounded-lg p-4 flex justify-between gap-4`}
            >
              {
                <div>
                  {<p className="font-semibold">{c.question}</p>}
                  {
                    <p className="text-sm text-white/60 line-clamp-2">
                      {c.answer.replace(/<[^>]*>/g, "")}
                    </p>
                  }
                </div>
              }
              {
                <div className="flex gap-2">
                  {
                    <button
                      onClick={() => t(`/admin/trek/${e}/faqs/edit/${c.id}`)}
                      className="p-2 bg-blue-600 rounded"
                    >
                      {<Pencil size={14} />}
                    </button>
                  }
                  {
                    <button
                      onClick={() => s(c.id)}
                      className="p-2 bg-red-600 rounded"
                    >
                      {<Trash2 size={14} />}
                    </button>
                  }
                </div>
              }
            </div>
          ))}
        </div>
      }
    </div>
  );
}
export default AdminFAQList;
