const ee = Swal;
import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Plus, Pencil, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
function AdminTrekCarrySectionModal() {
  const t = useNavigate(),
    { trekId: e, sectionId: n } = useParams(),
    [a, o] = React.useState([]),
    [s, c] = React.useState(null),
    d = async () => {
      const y = await fetch(`/api/trek-carry-sections/${n}`).then((m) =>
        m.json(),
      );
      o(y.subsections || []);
    };
  React.useEffect(() => {
    d();
  }, [n]);
  const u = async (y) => {
    (
      await ee.fire({
        title: "Delete subsection?",
        icon: "warning",
        showCancelButton: !0,
        confirmButtonColor: "#e11d48",
      })
    ).isConfirmed && (await URe(y), d());
  };
  return (
    <div className="p-6 max-w-4xl mx-auto text-white">
      {
        <div className="flex justify-between items-center mb-6">
          {
            <button
              onClick={() => t(`/admin/trek/${e}/carry`)}
              className="text-white/70 hover:text-white"
            >
              ← Back to Sections
            </button>
          }
          {
            <div className="flex items-center gap-3">
              {<h2 className="text-2xl font-semibold">Carry Subsections</h2>}
              {
                <button
                  onClick={() => c({})}
                  className={`flex items-center gap-2 px-4 py-2
                       bg-green-600 hover:bg-green-700 rounded-lg`}
                >
                  {<Plus size={16} />} Add Subsection
                </button>
              }
            </div>
          }
        </div>
      }
      {
        <div className="space-y-4">
          {a.map((y) => (
            <div
              className={`bg-white/5 border border-white/10
                       rounded-lg p-4 flex justify-between`}
            >
              {<p className="font-medium">{y.name}</p>}
              {
                <div className="flex gap-2">
                  {
                    <button
                      onClick={() => c(y)}
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
        </div>
      }
      {s !== null && (
        <AdminTrekCarrySectionModal
          sectionId={n}
          data={s}
          onClose={() => {
            c(null);
            d();
          }}
        />
      )}
    </div>
  );
}
export default AdminTrekCarrySectionModal;
