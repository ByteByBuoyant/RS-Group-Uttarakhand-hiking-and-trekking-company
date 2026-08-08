const ee = Swal;
import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Plus, Pencil, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
function AdminTrekCarry() {
  const t = useNavigate(),
    { trekId: e } = useParams(),
    [n, a] = React.useState([]),
    [o, s] = React.useState(null),
    c = async () => {
      try {
        const u = await VRe(e);
        a(u || []);
      } catch {
        ee.fire("Error", "Failed to load carry sections", "error");
      }
    };
  React.useEffect(() => {
    c();
  }, [e]);
  const d = async (u) => {
    if (
      (
        await ee.fire({
          title: "Delete section?",
          text: "This action cannot be undone",
          icon: "warning",
          showCancelButton: !0,
          confirmButtonColor: "#e11d48",
          cancelButtonColor: "#64748b",
          reverseButtons: !0,
        })
      ).isConfirmed
    )
      try {
        ee.fire({
          title: "Deleting...",
          allowOutsideClick: !1,
          didOpen: () => ee.showLoading(),
        });
        await FRe(u);
        ee.fire("Deleted", "Section removed", "success");
        c();
      } catch {
        ee.fire("Error", "Failed to delete section", "error");
      }
  };
  return (
    <div className="p-6 max-w-5xl mx-auto text-white">
      {
        <div className="flex justify-between items-center mb-6">
          {
            <button
              onClick={() => t("/admin/trek/list")}
              className={`flex items-center gap-2 px-3 py-2 text-sm
                     text-white/70 hover:text-white
                     hover:bg-white/10 rounded-lg`}
            >
              ← Back to Treks
            </button>
          }
          {
            <div className="flex items-center gap-3">
              {<h2 className="text-2xl font-semibold">Things to Carry</h2>}
              {
                <button
                  onClick={() => s({})}
                  className={`flex items-center gap-2 px-4 py-2
                       bg-green-600 hover:bg-green-700 rounded-lg`}
                >
                  {<Plus size={16} />} Add Section
                </button>
              }
            </div>
          }
        </div>
      }
      {n.length === 0 && (
        <p className="text-white/60">No carry sections added yet.</p>
      )}
      {
        <div className="space-y-4">
          {n.map((u) => (
            <div
              className={`bg-white/5 border border-white/10
                       rounded-lg p-4 flex justify-between gap-6`}
            >
              {
                <div>
                  {<p className="font-semibold">{u.name}</p>}
                  {
                    <p className="text-sm text-white/50">
                      Subsections: {u.subsections?.length || 0}
                    </p>
                  }
                </div>
              }
              {
                <div className="flex flex-col gap-2">
                  {
                    <button
                      onClick={() => t(`/admin/trek/${e}/carry/${u.id}`)}
                      className={`px-3 py-2 rounded bg-purple-600
                        hover:bg-purple-700 text-sm`}
                    >
                      Subsections →
                    </button>
                  }
                  {
                    <button
                      onClick={() => s(u)}
                      className="p-2 bg-blue-600 hover:bg-blue-700 rounded"
                      title="Edit Section"
                    >
                      {<Pencil size={14} />}
                    </button>
                  }
                  {
                    <button
                      onClick={() => d(u.id)}
                      className="p-2 bg-red-600 hover:bg-red-700 rounded"
                      title="Delete Section"
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
      {o !== null && (
        <GRe
          trekId={e}
          data={o}
          onClose={() => {
            s(null);
            c();
          }}
        />
      )}
    </div>
  );
}
export default AdminTrekCarry;
