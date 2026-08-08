import React, { useState, useEffect, useRef, useContext } from "react";
import { User, Mail, Phone } from "lucide-react";
function AdminItineraryEnquiries() {
  const [t, e] = React.useState([]),
    [n, a] = React.useState(""),
    [o, s] = React.useState(1),
    [c, d] = React.useState(null),
    [u, y] = React.useState(!0),
    [m, k] = React.useState(null),
    v = async () => {
      try {
        y(!0);
        k(null);
        const b = await RTe({
          page: o,
          status: n,
        });
        e(b.data);
        d(b.meta);
      } catch {
        k("Failed to load enquiries");
        e([]);
      } finally {
        y(!1);
      }
    };

  React.useEffect(() => {
    v();
  }, [o, n]);
  React.useEffect(() => {
    s(1);
  }, [n]);
  return (
    <div className="space-y-6">
      {
        <div>
          {<h1 className="text-2xl font-semibold">Itinerary Enquiries</h1>}
          {
            <p className="text-sm text-white/50 mt-1">
              Requests for trek itinerary emails
            </p>
          }
          {<_z />}
        </div>
      }
      {
        <div className="flex gap-3">
          {
            <select
              value={n}
              onChange={(b) => a(b.target.value)}
              className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm"
            >
              {<option value="">All Status</option>}
              {<option value="pending">Pending</option>}
              {<option value="sent">Sent</option>}
              {<option value="failed">Failed</option>}
            </select>
          }
        </div>
      }
      {u && <div className="text-white/50">Loading enquiries…</div>}
      {m && <div className="text-red-400">{m}</div>}
      {!u && !m && (
        <div className="hidden md:block rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
          {
            <table className="w-full text-sm">
              {
                <thead className="bg-white/5 text-white/60">
                  {
                    <tr>
                      {<th className="px-4 py-3 text-left">Trek</th>}
                      {<th className="px-4 py-3 text-left">User</th>}
                      {<th className="px-4 py-3 text-left">Contact</th>}
                      {<th className="px-4 py-3 text-left">Status</th>}
                      {<th className="px-4 py-3 text-left">Requested</th>}
                    </tr>
                  }
                </thead>
              }
              {
                <tbody>
                  {t.map((b) => (
                    <tr className="border-t border-white/10">
                      {<td className="px-4 py-3">{b.trek_id}</td>}
                      {
                        <td className="px-4 py-3 flex items-center gap-2">
                          {<User size={14} />} {b.full_name}
                        </td>
                      }
                      {
                        <td className="px-4 py-3">
                          {
                            <div className="flex gap-2">
                              {<Mail size={14} />} {b.email}
                            </div>
                          }
                          {b.phone && (
                            <div className="flex gap-2 text-white/50">
                              {<Phone size={14} />} {b.phone}
                            </div>
                          )}
                        </td>
                      }
                      {
                        <td className="px-4 py-3">
                          {<xW status={b.status} />}
                        </td>
                      }
                      {
                        <td className="px-4 py-3 text-white/60">
                          {b.created_at}
                        </td>
                      }
                    </tr>
                  ))}
                  {t.length === 0 && (
                    <tr>
                      {
                        <td
                          colSpan="5"
                          className="px-4 py-6 text-center text-white/50"
                        >
                          No enquiries found
                        </td>
                      }
                    </tr>
                  )}
                </tbody>
              }
            </table>
          }
        </div>
      )}
      {!u && !m && (
        <div className="md:hidden space-y-4">
          {t.map((b) => (
            <div className="rounded-xl bg-white/5 border border-white/10 p-4 space-y-3">
              {
                <div className="flex justify-between items-center">
                  {
                    <span className="font-medium text-white">
                      Trek #{b.trek_id}
                    </span>
                  }
                  {<xW status={b.status} />}
                </div>
              }
              {
                <div className="flex items-center gap-2 text-sm">
                  {<User size={14} />}
                  {b.full_name}
                </div>
              }
              {
                <div className="space-y-1 text-sm text-white/80">
                  {
                    <div className="flex items-center gap-2">
                      {<Mail size={14} />}
                      {b.email}
                    </div>
                  }
                  {b.phone && (
                    <div className="flex items-center gap-2">
                      {<Phone size={14} />}
                      {b.phone}
                    </div>
                  )}
                </div>
              }
              {
                <div className="text-xs text-white/50">
                  Requested: {b.created_at_formatted ?? b.created_at}
                </div>
              }
              {b.status === "failed" && b.error_message && (
                <div className="text-xs text-red-400">
                  Error: {b.error_message}
                </div>
              )}
            </div>
          ))}
          {t.length === 0 && (
            <div className="text-center text-white/50 py-6">
              No enquiries found
            </div>
          )}
        </div>
      )}
      {c && c.last_page > 1 && (
        <div className="flex justify-center gap-2 pt-4">
          {
            <button
              disabled={o === 1}
              onClick={() => s(o - 1)}
              className="px-3 py-1 bg-white/5 rounded disabled:opacity-40"
            >
              Prev
            </button>
          }
          {Array.from({
            length: c.last_page,
          }).map((b, w) => {
            const _ = w + 1;
            return (
              <button
                onClick={() => s(_)}
                className={`px-3 py-1 rounded ${_ === o ? "bg-orange-500 text-white" : "bg-white/5"}`}
              >
                {_}
              </button>
            );
          })}
          {
            <button
              disabled={o === c.last_page}
              onClick={() => s(o + 1)}
              className="px-3 py-1 bg-white/5 rounded disabled:opacity-40"
            >
              Next
            </button>
          }
        </div>
      )}
    </div>
  );
}
export default AdminItineraryEnquiries;
