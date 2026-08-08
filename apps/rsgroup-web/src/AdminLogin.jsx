import { useAuth } from "@/lib/AuthContext";
import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Mail } from "lucide-react";
function AdminLogin() {
  const [t, e] = React.useState(""),
    [n, a] = React.useState(""),
    [o, s] = React.useState(""),
    { adminLogin: c } = useAuth(),
    d = useNavigate(),
    u = (y) => {
      y.preventDefault();
      t === "admin@gmail.com" && n === "12345"
        ? (c({
            email: t,
            role: "admin",
          }),
          d("/admin/", {
            replace: !0,
          }))
        : s("Invalid admin credentials");
    };
  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#020617] to-black overflow-hidden">
      {
        <div className="absolute inset-0">
          {
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          }
          {
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
          }
        </div>
      }
      {
        <form
          onSubmit={u}
          className="relative z-10 w-[380px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-8"
        >
          {
            <div className="text-center mb-8">
              {
                <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-purple-600">
                  {<Lock className="w-6 h-6 text-white" />}
                </div>
              }
              {
                <h2 className="text-2xl font-semibold text-white">
                  Admin Panel
                </h2>
              }
              {
                <p className="text-sm text-white/60 mt-1">
                  Secure administrator access
                </p>
              }
            </div>
          }
          {o && (
            <div className="mb-4 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm px-3 py-2 animate-shake">
              {o}
            </div>
          )}
          {
            <div className="mb-4">
              {
                <label className="text-xs text-white/60 mb-1 block">
                  Email
                </label>
              }
              {
                <div className="relative">
                  {
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  }
                  {
                    <input
                      type="email"
                      placeholder="admin@gmail.com"
                      className="w-full rounded-lg bg-white/10 border border-white/10 pl-10 pr-3 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/60"
                      value={t}
                      onChange={(y) => e(y.target.value)}
                    />
                  }
                </div>
              }
            </div>
          }
          {
            <div className="mb-6">
              {
                <label className="text-xs text-white/60 mb-1 block">
                  Password
                </label>
              }
              {
                <div className="relative">
                  {
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  }
                  {
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full rounded-lg bg-white/10 border border-white/10 pl-10 pr-3 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/60"
                      value={n}
                      onChange={(y) => a(y.target.value)}
                    />
                  }
                </div>
              }
            </div>
          }
          {
            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 py-2.5 font-medium text-white shadow-lg hover:opacity-90 transition-all"
            >
              Login to Dashboard
            </button>
          }
          {
            <p className="mt-6 text-center text-xs text-white/40">
              Restricted access · Authorized personnel only
            </p>
          }
        </form>
      }
    </div>
  );
}
export default AdminLogin;
