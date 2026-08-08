const xd = UT.Compass;
import * as UT from "lucide-react";
import fetchCategories from "./FetchCategoriesAPI";
const az = fetchCategories;
const ee = Swal;
import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Folder, Pencil, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
function AdminCategoryList() {
  const t = useNavigate(),
    [e, n] = React.useState([]),
    [a, o] = React.useState(!0),
    s = async () => {
      try {
        const d = await az();
        n(d.data ?? d);
      } catch (d) {
        ee.fire("Error", d.message, "error");
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
          title: "Delete Category?",
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
        await zLe(d);
        await s();
        ee.fire({
          title: "Deleted!",
          text: "Category has been deleted successfully.",
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
          {
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              Categories
            </h1>
          }
          {<_z />}
          {
            <button
              onClick={() => t("/admin/category/create")}
              className={`px-4 py-2 bg-gradient-to-r from-[#FF7A00] to-[#F15A24]
                     text-white rounded-lg flex items-center justify-center gap-2`}
            >
              {<Plus size={16} />} Add Category
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
                      {<th className="p-4">Icon</th>}
                      {<th className="p-4">Name</th>}
                      {<th className="p-4">Description</th>}
                      {<th className="p-4 text-right">Actions</th>}
                    </tr>
                  }
                </thead>
              }
              {
                <tbody>
                  {e.map((d) => {
                    const u = UT[d.icon] ?? Folder;
                    return (
                      <tr className="border-t border-white/10 text-white/90">
                        {
                          <td className="p-4">
                            {<u size={22} className="text-[#FF7A00]" />}
                          </td>
                        }
                        {<td className="p-4 font-medium">{d.name}</td>}
                        {
                          <td className="p-4 text-white/70">
                            {d.short_description || "-"}
                          </td>
                        }
                        {
                          <td className="p-4 text-right space-x-2">
                            {
                              <button
                                onClick={() =>
                                  t(`/admin/category/edit/${d.id}`)
                                }
                                className="p-2 bg-blue-600/80 hover:bg-blue-700 rounded-lg"
                              >
                                {<Pencil size={16} />}
                              </button>
                            }
                            {
                              <button
                                onClick={() => c(d.id, d.name)}
                                className="p-2 bg-red-600/80 hover:bg-red-700 rounded-lg"
                              >
                                {<Trash2 size={16} />}
                              </button>
                            }
                          </td>
                        }
                      </tr>
                    );
                  })}
                </tbody>
              }
            </table>
          }
        </div>
      }
      {
        <div className="md:hidden space-y-4">
          {e.map((d) => {
            const u = UT[d.icon] ?? Folder;
            return (
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                {
                  <div className="flex items-center gap-3 mb-2">
                    {<u size={22} className="text-[#FF7A00]" />}
                    {
                      <h3 className="text-white font-semibold text-lg">
                        {d.name}
                      </h3>
                    }
                  </div>
                }
                {
                  <p className="text-white/70 text-sm mb-4">
                    {d.short_description || "No description"}
                  </p>
                }
                {
                  <div className="flex justify-end gap-3">
                    {
                      <button
                        onClick={() => t(`/admin/category/edit/${d.id}`)}
                        className="px-3 py-2 bg-blue-600/80 rounded-lg"
                      >
                        {<Pencil size={16} />}
                      </button>
                    }
                    {
                      <button
                        onClick={() => c(d.id, d.name)}
                        className="px-3 py-2 bg-red-600/80 rounded-lg"
                      >
                        {<Trash2 size={16} />}
                      </button>
                    }
                  </div>
                }
              </div>
            );
          })}
          {e.length === 0 && (
            <p className="text-center text-white/60">No categories found</p>
          )}
        </div>
      }
    </div>
  );
}
export default AdminCategoryList;
