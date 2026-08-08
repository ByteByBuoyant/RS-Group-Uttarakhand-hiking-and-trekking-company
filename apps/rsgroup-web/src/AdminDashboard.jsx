import React, { useState, useEffect, useRef, useContext } from "react";
import { Mountain, Layers, PhoneCall, Users, TrendingUp } from "lucide-react";
function AdminDashboard() {
  const t = [
    {
      label: "Total Treks",
      value: 24,
      icon: Mountain,
      color: "from-[#FF7A00] to-[#F15A24]",
    },
    {
      label: "Categories",
      value: 8,
      icon: Layers,
      color: "from-blue-500 to-cyan-500",
    },
    {
      label: "Enquiries",
      value: 126,
      icon: PhoneCall,
      color: "from-green-500 to-emerald-500",
    },
    {
      label: "Users",
      value: 1248,
      icon: Users,
      color: "from-purple-500 to-pink-500",
    },
  ];
  return (
    <div className="space-y-8">
      {
        <div>
          {<h1 className="text-2xl font-semibold">Dashboard</h1>}
          {
            <p className="text-white/50 text-sm mt-1">
              Overview of platform activity
            </p>
          }
        </div>
      }
      {
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {t.map((e, n) => (
            <div
              className={`relative rounded-2xl p-5 bg-white/5 border border-white/10
                         backdrop-blur-xl overflow-hidden`}
            >
              {
                <div
                  className={`absolute inset-0 opacity-20 bg-gradient-to-br ${e.color}`}
                />
              }
              {
                <div className="relative flex items-center justify-between">
                  {
                    <div>
                      {<p className="text-sm text-white/60">{e.label}</p>}
                      {<p className="text-3xl font-semibold mt-1">{e.value}</p>}
                    </div>
                  }
                  {
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center
                             bg-gradient-to-br ${e.color}`}
                    >
                      {<e.icon className="text-white" />}
                    </div>
                  }
                </div>
              }
            </div>
          ))}
        </div>
      }
      {
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {
            <div className="xl:col-span-2 rounded-2xl bg-white/5 border border-white/10 p-6">
              {<h3 className="font-semibold mb-4">Recent Activity</h3>}
              {
                <ul className="space-y-3 text-sm">
                  {
                    <li className="flex justify-between text-white/70">
                      {<span>New trek added: Kedarkantha</span>}
                      {<span className="text-white/40">2 hrs ago</span>}
                    </li>
                  }
                  {
                    <li className="flex justify-between text-white/70">
                      {<span>Category updated: Winter Treks</span>}
                      {<span className="text-white/40">5 hrs ago</span>}
                    </li>
                  }
                  {
                    <li className="flex justify-between text-white/70">
                      {<span>New enquiry received</span>}
                      {<span className="text-white/40">1 day ago</span>}
                    </li>
                  }
                </ul>
              }
            </div>
          }
          {
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              {<h3 className="font-semibold mb-4">Insights</h3>}
              {
                <div className="space-y-4">
                  {
                    <div className="flex items-center gap-3">
                      {<TrendingUp className="text-green-400" />}
                      {
                        <span className="text-sm text-white/70">
                          Bookings up {<span className="text-white">18%</span>}{" "}
                          this month
                        </span>
                      }
                    </div>
                  }
                  {
                    <div className="flex items-center gap-3">
                      {<TrendingUp className="text-orange-400" />}
                      {
                        <span className="text-sm text-white/70">
                          Enquiries up {<span className="text-white">12%</span>}
                        </span>
                      }
                    </div>
                  }
                  {
                    <div className="flex items-center gap-3">
                      {<TrendingUp className="text-blue-400" />}
                      {
                        <span className="text-sm text-white/70">
                          New users {<span className="text-white">+95</span>}
                        </span>
                      }
                    </div>
                  }
                </div>
              }
            </div>
          }
        </div>
      }
      {
        <div
          className={`rounded-2xl bg-gradient-to-r from-[#FF7A00]/20 to-[#F15A24]/20
                        border border-white/10 p-6`}
        >
          {<h3 className="font-semibold">Admin Tips</h3>}
          {
            <p className="text-sm text-white/70 mt-2">
              Keep trek itineraries updated and respond to enquiries within 24
              hours to improve conversion.
            </p>
          }
        </div>
      }
    </div>
  );
}
export default AdminDashboard;
