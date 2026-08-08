import React, { useState, useEffect, useRef, useContext } from "react";
import { User, Mail, MessageSquare, Phone } from "lucide-react";
function AdminContactEnquiries() {
  return (
    <div className="space-y-6">
      {
        <div>
          {<h1 className="text-2xl font-semibold">Contact Enquiries</h1>}
          {
            <p className="text-sm text-white/50 mt-1">
              Messages submitted via Contact Us page
            </p>
          }
          {<_z />}
        </div>
      }
      {
        <div className="flex flex-wrap gap-3">
          {
            <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm">
              {<option>All Status</option>}
              {<option>Pending</option>}
              {<option>Replied</option>}
              {<option>Closed</option>}
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
                      {<th className="text-left px-4 py-3">User</th>}
                      {<th className="text-left px-4 py-3">Message</th>}
                      {<th className="text-left px-4 py-3">Contact</th>}
                      {<th className="text-left px-4 py-3">Status</th>}
                      {<th className="text-left px-4 py-3">Received</th>}
                    </tr>
                  }
                </thead>
              }
              {
                <tbody>
                  {vW.map((t) => (
                    <tr className="border-t border-white/10 hover:bg-white/5 transition">
                      {
                        <td className="px-4 py-3">
                          {
                            <div className="flex items-center gap-2">
                              {<User size={14} />}
                              {<span className="font-medium">{t.name}</span>}
                            </div>
                          }
                          {
                            <div className="flex items-center gap-2 text-white/50 text-xs mt-1">
                              {<Mail size={12} />}
                              {t.email}
                            </div>
                          }
                        </td>
                      }
                      {
                        <td className="px-4 py-3 text-white/70 max-w-md">
                          {
                            <div className="flex items-start gap-2">
                              {<MessageSquare size={14} className="mt-1" />}
                              {
                                <span className="line-clamp-3">
                                  {t.message}
                                </span>
                              }
                            </div>
                          }
                        </td>
                      }
                      {
                        <td className="px-4 py-3">
                          {t.phone ? (
                            <div className="flex items-center gap-2">
                              {<Phone size={14} />}
                              {t.phone}
                            </div>
                          ) : (
                            <span className="text-white/40 text-sm">—</span>
                          )}
                        </td>
                      }
                      {
                        <td className="px-4 py-3">
                          {<bW status={t.status} />}
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
          {vW.map((t) => (
            <div className="rounded-xl bg-white/5 border border-white/10 p-4 space-y-3">
              {
                <div className="flex justify-between items-center">
                  {<span className="font-medium">{t.name}</span>}
                  {<bW status={t.status} />}
                </div>
              }
              {<div className="text-sm text-white/70">{t.message}</div>}
              {
                <div className="space-y-1 text-sm">
                  {
                    <div className="flex items-center gap-2">
                      {<Mail size={14} />}
                      {t.email}
                    </div>
                  }
                  {t.phone && (
                    <div className="flex items-center gap-2">
                      {<Phone size={14} />}
                      {t.phone}
                    </div>
                  )}
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
export default AdminContactEnquiries;
