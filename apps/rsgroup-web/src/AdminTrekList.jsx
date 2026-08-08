const xd = UT.Compass;
import * as UT from "lucide-react";
const ee = Swal;
import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Pencil, Trash2 } from "lucide-react";
import fetchTreks from "./FetchTreksAPI";
import Swal from "sweetalert2";
function AdminTrekList() {
  const t = useNavigate(),
    [e, n] = React.useState([]),
    [a, o] = React.useState(!0),
    s = async () => {
      try {
        const d = await fetchTreks();
        n(d.data ?? d);
      } catch (d) {
        ee.fire("Error", d.message || "Failed to load treks", "error");
      } finally {
        o(!1);
      }
    };
  React.useEffect(() => {
    s();
  }, []);
  const c = async (d, u) => {
    if (
      (
        await ee.fire({
          title: "Delete Trek?",
          text: `Are you sure you want to delete "${u}"?`,
          icon: "warning",
          showCancelButton: !0,
          confirmButtonColor: "#e11d48",
          cancelButtonColor: "#64748b",
          confirmButtonText: "Yes, delete",
          cancelButtonText: "Cancel",
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
        await RLe(d);
        await s();
        ee.fire({
          title: "Deleted!",
          text: "Trek has been deleted successfully.",
          icon: "success",
          timer: 1500,
          showConfirmButton: !1,
        });
      } catch (m) {
        ee.fire("Error", m.message || "Delete failed", "error");
      }
  };
  return a ? (
    <p className="text-white p-6">Loading...</p>
  ) : (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      {
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
          {<h1 className="text-2xl sm:text-3xl font-bold text-white">Treks</h1>}
          {
            <button
              onClick={() => t("/admin/trek/create")}
              className={`px-4 py-2 bg-gradient-to-r from-[#FF7A00] to-[#F15A24]
                     text-white rounded-lg flex items-center justify-center gap-2`}
            >
              {<Plus size={16} />} Add Trek
            </button>
          }
        </div>
      }
      {
        <div className="hidden md:block bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          {
            <table className="w-full text-left">
              {
                <thead className="bg-white/10 text-white">
                  {
                    <tr>
                      {<th className="p-4">Name</th>}
                      {<th className="p-4">Location</th>}
                      {<th className="p-4">Difficulty</th>}
                      {<th className="p-4">Price</th>}
                      {<th className="p-4 text-right">Actions</th>}
                    </tr>
                  }
                </thead>
              }
              {
                <tbody>
                  {e.map((d) => (
                    <tr className="border-t border-white/10 text-white/90">
                      {<td className="p-4 font-medium">{d.name}</td>}
                      {
                        <td className="p-4 text-white/70">
                          {d.location || "-"}
                        </td>
                      }
                      {
                        <td className="p-4">
                          {
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold
                      ${d.difficulty === "Easy" ? "bg-green-500/20 text-green-300" : d.difficulty === "Moderate" ? "bg-yellow-500/20 text-yellow-300" : "bg-red-500/20 text-red-300"}
                    `}
                            >
                              {d.difficulty}
                            </span>
                          }
                        </td>
                      }
                      {<td className="p-4">{d.price ? `₹${d.price}` : "-"}</td>}
                      {
                        <td className="p-4 text-right space-x-2">
                          {
                            <Xn
                              color="indigo"
                              onClick={() => t(`/admin/trek/${d.id}/itinerary`)}
                            >
                              Itinerary
                            </Xn>
                          }
                          {
                            <Xn
                              color="green"
                              onClick={() =>
                                t(`/admin/trek/${d.id}/inclusions`)
                              }
                            >
                              Inclusions
                            </Xn>
                          }
                          {
                            <Xn
                              color="red"
                              onClick={() =>
                                t(`/admin/trek/${d.id}/exclusions`)
                              }
                            >
                              Exclusions
                            </Xn>
                          }
                          {
                            <Xn
                              color="orange"
                              onClick={() =>
                                t(`/admin/trek/${d.id}/attributes`)
                              }
                            >
                              Info
                            </Xn>
                          }
                          {
                            <Xn
                              color="emerald"
                              onClick={() => t(`/admin/trek/${d.id}/carry`)}
                            >
                              Carry
                            </Xn>
                          }
                          {
                            <Xn
                              color="blue"
                              title="Edit Trek"
                              onClick={() => t(`/admin/trek/edit/${d.id}`)}
                            >
                              {<Pencil size={16} />}
                            </Xn>
                          }
                          {
                            <Xn
                              color="red"
                              title="Delete Trek"
                              onClick={() => c(d.id, d.name)}
                            >
                              {<Trash2 size={16} />}
                            </Xn>
                          }
                        </td>
                      }
                    </tr>
                  ))}
                </tbody>
              }
            </table>
          }
        </div>
      }
      {
        <div className="md:hidden space-y-4">
          {e.map((d) => (
            <div
              className={`group relative bg-white/5 border border-white/10
                    rounded-2xl p-5 transition
                    hover:bg-white/8 hover:border-white/20`}
            >
              {
                <div className="flex justify-between items-start">
                  {
                    <div>
                      {
                        <h3 className="text-white font-semibold text-lg leading-tight">
                          {d.name}
                        </h3>
                      }
                      {
                        <p className="text-white/60 text-sm mt-1">
                          {d.location || "No location"}
                        </p>
                      }
                    </div>
                  }
                  {
                    <div className="text-right">
                      {
                        <span className="text-lg font-semibold text-white">
                          {d.price ? `₹${d.price}` : "-"}
                        </span>
                      }
                    </div>
                  }
                </div>
              }
              {
                <div className="mt-3">
                  {
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold
               ${d.difficulty === "Easy" ? "bg-green-500/20 text-green-300" : d.difficulty === "Moderate" ? "bg-yellow-500/20 text-yellow-300" : "bg-red-500/20 text-red-300"}
             `}
                    >
                      {d.difficulty}
                    </span>
                  }
                </div>
              }
              {
                <div className="flex flex-wrap gap-2 mt-4">
                  {
                    <Xn
                      color="indigo"
                      className="flex-1"
                      onClick={() => t(`/admin/trek/${d.id}/itinerary`)}
                    >
                      Itinerary
                    </Xn>
                  }
                  {
                    <Xn
                      color="green"
                      className="flex-1"
                      onClick={() => t(`/admin/trek/${d.id}/inclusions`)}
                    >
                      Inclusions
                    </Xn>
                  }
                  {
                    <Xn
                      color="violet"
                      className="flex-1"
                      onClick={() => t(`/admin/trek/${d.id}/exclusions`)}
                    >
                      Exclusions
                    </Xn>
                  }
                  {
                    <Xn
                      color="orange"
                      onClick={() => t(`/admin/trek/${d.id}/attributes`)}
                    >
                      Info
                    </Xn>
                  }
                  {
                    <Xn
                      color="emerald"
                      className="flex-1"
                      onClick={() => t(`/admin/trek/${d.id}/carry`)}
                    >
                      Carry
                    </Xn>
                  }
                </div>
              }
              {
                <div className="flex justify-end gap-2 mt-4 pt-3 border-t border-white/10">
                  {
                    <button
                      onClick={() => t(`/admin/trek/edit/${d.id}`)}
                      className={`p-2 rounded-lg bg-blue-600/80 hover:bg-blue-700
                        transition hover:scale-105`}
                      title="Edit"
                    >
                      {<Pencil size={16} />}
                    </button>
                  }
                  {
                    <button
                      onClick={() => c(d.id, d.name)}
                      className={`p-2 rounded-lg bg-red-700/80 hover:bg-red-800
                        transition hover:scale-105`}
                      title="Delete"
                    >
                      {<Trash2 size={16} />}
                    </button>
                  }
                </div>
              }
            </div>
          ))}
          {e.length === 0 && (
            <p className="text-center text-white/60">No treks found</p>
          )}
        </div>
      }
    </div>
  );
}
export default AdminTrekList;
