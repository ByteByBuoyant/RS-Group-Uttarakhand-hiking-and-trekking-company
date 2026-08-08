const ee = Swal;
import React, { useState, useEffect, useRef, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Plus, Pencil, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
function AdminTrekAttributes() {
  const { trekId: t } = useParams(),
    e = useNavigate(),
    [n, a] = React.useState([]),
    [o, s] = React.useState(null),
    c = async () => {
      try {
        const y = await MX(t);
        a(y);
      } catch {
        ee.fire("Error", "Failed to load attributes", "error");
      }
    };
  React.useEffect(() => {
    c();
  }, [t]);
  const d = async (y) => {
      try {
        ee.showLoading();
        o?.id
          ? (await KTe(o.id, y),
            ee.fire("Updated", "Attribute updated", "success"))
          : (await WTe(t, y), ee.fire("Added", "Attribute added", "success"));
        s(null);
        c();
      } catch {
        ee.fire("Error", "Save failed", "error");
      }
    },
    u = async (y) => {
      (
        await ee.fire({
          title: "Delete attribute?",
          icon: "warning",
          showCancelButton: !0,
          confirmButtonColor: "#e11d48",
        })
      ).isConfirmed &&
        (await ZTe(y), ee.fire("Deleted", "Attribute removed", "success"), c());
    };
  return (
    <div className="p-6 max-w-4xl mx-auto text-white">
      {
        <div className="flex justify-between items-center mb-6">
          {
            <button
              onClick={() => e("/admin/trek/list")}
              className="text-white/60 hover:text-white"
            >
              ← Back to Treks
            </button>
          }
          {<h2 className="text-2xl font-semibold">Trek Attributes</h2>}
          {
            <button
              onClick={() => s({})}
              className={`flex items-center gap-2 px-4 py-2
                     bg-green-600 rounded-lg`}
            >
              {<Plus size={16} />} Add
            </button>
          }
        </div>
      }
      {n.map((y) => (
        <div
          className={`bg-white/5 border border-white/10
                     rounded-lg p-4 flex justify-between mb-3`}
        >
          {
            <div>
              {<p className="font-semibold">{y.label}</p>}
              {<p className="text-white/70">{y.value}</p>}
            </div>
          }
          {
            <div className="flex gap-2">
              {
                <button
                  onClick={() => s(y)}
                  className="p-2 bg-blue-600 rounded"
                >
                  {<Pencil size={14} />}
                </button>
              }
              {
                <button
                  onClick={() => u(y.id)}
                  className="p-2 bg-red-600 rounded"
                >
                  {<Trash2 size={14} />}
                </button>
              }
            </div>
          }
        </div>
      ))}
      {o !== null && <HRe data={o} onSave={d} onClose={() => s(null)} />}
    </div>
  );
}
export default AdminTrekAttributes;
