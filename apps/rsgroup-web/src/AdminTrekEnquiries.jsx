import React, { useState, useEffect, useRef, useContext } from "react";
import { User, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
function AdminTrekEnquiries() {
  return (
    <div className="space-y-6">
      {
        <div>
          {<h1 className="text-2xl font-semibold">Trek Enquiries</h1>}
          {
            <p className="text-sm text-white/50 mt-1">
              Manage and track trek lead enquiries
            </p>
          }
          {<_z />}
        </div>
      }
      {
        <div className="flex flex-wrap gap-3">
          {
            <select className="appearance-none bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm">
              {<option>All Status</option>}
              {<option>New</option>}
              {<option>Contacted</option>}
              {<option>Converted</option>}
              {<option>Closed</option>}
            </select>
          }
          {
            <select className="appearance-none bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm">
              {<option>All Sources</option>}
              {<option>WhatsApp</option>}
              {<option>Website</option>}
            </select>
          }
        </div>
      }
      {
        <div className="hidden md:block rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
          {
            <table className="w-full text-sm">
              {
                <thead className="bg-white/5 text-white/60">
                  {
                    <tr>
                      {<th className="text-left px-4 py-3">Trek</th>}
                      {<th className="text-left px-4 py-3">User</th>}
                      {<th className="text-left px-4 py-3">Contact</th>}
                      {<th className="text-left px-4 py-3">Source</th>}
                      {<th className="text-left px-4 py-3">Status</th>}
                      {<th className="text-left px-4 py-3">Date</th>}
                    </tr>
                  }
                </thead>
              }
              {
                <tbody>
                  {gW.map((t) => (
                    <tr className="border-t border-white/10 hover:bg-white/5 transition">
                      {<td className="px-4 py-3 font-medium">{t.trek}</td>}
                      {
                        <td className="px-4 py-3">
                          {
                            <div className="flex items-center gap-2">
                              {<User size={14} />}
                              {t.name}
                            </div>
                          }
                          {
                            <div className="flex items-center gap-2 text-white/50 text-xs mt-1">
                              {<MapPin size={12} />}
                              {t.place}
                            </div>
                          }
                        </td>
                      }
                      {
                        <td className="px-4 py-3 space-y-1">
                          {
                            <div className="flex items-center gap-2">
                              {<Phone size={14} />}
                              {t.mobile}
                            </div>
                          }
                          {t.email && (
                            <div className="flex items-center gap-2 text-white/50">
                              {<Mail size={14} />}
                              {t.email}
                            </div>
                          )}
                        </td>
                      }
                      {<td className="px-4 py-3 capitalize">{t.source}</td>}
                      {
                        <td className="px-4 py-3">
                          {<kW status={t.status} />}
                        </td>
                      }
                      {
                        <td className="px-4 py-3 text-white/60">
                          {t.created_at}
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
          {gW.map((t) => (
            <div className="rounded-xl bg-white/5 border border-white/10 p-4 space-y-2">
              {
                <div className="flex justify-between">
                  {<span className="font-medium">{t.trek}</span>}
                  {<kW status={t.status} />}
                </div>
              }
              {
                <div className="text-sm text-white/70">
                  {t.name} • {t.place}
                </div>
              }
              {
                <div className="flex gap-4 text-sm">
                  {
                    <a
                      href={`tel:${t.mobile}`}
                      className="flex items-center gap-1 text-green-400"
                    >
                      {<Phone size={14} />}Call
                    </a>
                  }
                  {
                    <a
                      href={`https://wa.me/91${t.mobile}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-green-500"
                    >
                      {<MessageCircle size={14} />}WhatsApp
                    </a>
                  }
                </div>
              }
              {<div className="text-xs text-white/50">{t.created_at}</div>}
            </div>
          ))}
        </div>
      }
    </div>
  );
}
export default AdminTrekEnquiries;
