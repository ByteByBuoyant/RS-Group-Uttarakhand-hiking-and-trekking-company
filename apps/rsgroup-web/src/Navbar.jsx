import { useAuth } from "@/lib/AuthContext";
import React, { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LogOut, Search, X, Menu } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { createPortal } from "react-dom";
import LoginModal from "./LoginModal";

const Portal = ({ children }) => createPortal(children, document.body);

const jLe = [
  "Kedarkantha Trek",
  "Brahmatal Trek",
  "Har Ki Dun Trek",
  "Valley of Flowers",
  "Dayara Bugyal",
  "Sandakphu Trek",
  "Bali Pass Trek",
  "Kuang Chaur Trek",
  "Kedar Kantha Trek",
];

function Navbar() {
  const t = useNavigate(),
    [e, n] = React.useState(false),
    [a, o] = React.useState(false),
    [s, c] = React.useState(false),
    [d, u] = React.useState(""),
    { user: y, logout: m } = useAuth(),
    k = () => n(!e),
    v = [
      {
        name: "Home",
        path: "/",
      },
      {
        name: "Upcoming Treks",
        path: "/alltreks?type=Upcoming",
      },
      {
        name: "All Treks",
        path: "/alltreks",
      },
      {
        name: "About",
        path: "/aboutUs",
      },
      {
        name: "Contact",
        path: "/contact",
      },
    ],
    b = jLe.filter((w) => w.toLowerCase().includes(d.toLowerCase()));

  // Desktop search execution
  const handleSearchKeyPress = (event) => {
    if (event.key === "Enter" && event.target.value.trim()) {
      t(`/alltreks?search=${encodeURIComponent(event.target.value.trim())}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full Division-container z-50 flex items-center justify-between px-4 py-2 md:px-6 md:py-3">
      <div
        onClick={() => t("/")}
        className="flex items-center gap-3 cursor-pointer select-none"
      >
        <img
          src="/logoExtraLarge.jpg"
          alt="RS Group Uttarakhand"
          className="h-14 md:h-20 w-auto object-contain rounded-lg shadow-lg border border-white/20"
        />
        <div className="leading-tight">
          <div className="text-white font-display font-bold text-lg md:text-xl tracking-wide select-none drop-shadow">
            RS Group Uttarakhand
          </div>
          <div className="text-white text-xs md:text-sm mt-0.5 font-semibold tracking-wider select-none drop-shadow-sm">
            Your Trusted Path To Adventure
          </div>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <div className="relative">
          <input
            type="text"
            onKeyDown={handleSearchKeyPress}
            placeholder="Search treks..."
            className="w-64 px-4 py-1.5 text-sm font-medium text-white border border-white/30 rounded-full bg-white/10 placeholder-white/80 focus:outline-none focus:ring-1 focus:ring-white focus:w-80 transition-all duration-300"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/80 pointer-events-none" />
        </div>

        <ul className="flex items-center gap-8 text-white font-semibold text-[16.5px]">
          {v.map((w) => (
            <li
              key={w.name}
              onClick={() => t(w.path)}
              className="cursor-pointer hover:text-white/90 hover:scale-105 transition-all duration-200 tracking-wide font-semibold"
            >
              {w.name}
            </li>
          ))}
          <li>
            {y ? (
              <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-full py-1 pl-3 pr-1.5">
                <span className="text-white text-xs font-medium">
                  Hi, {y.given_name}
                </span>
                <button
                  onClick={m}
                  className="bg-white/20 hover:bg-red-500/20 hover:text-red-400 p-1.5 rounded-full text-white/85 transition-all duration-200"
                >
                  <LogOut size={14} />
                </button>
              </div>
            ) : (
              <button
                onClick={() => o(true)}
                className="bg-white text-[#f25b23] font-semibold rounded-full px-5 py-2 text-xs shadow-lg hover:bg-white/90 hover:scale-[1.03] transition-all duration-200"
              >
                Login
              </button>
            )}
          </li>
        </ul>
      </div>

      <div className="md:hidden flex items-center gap-2">
        <button
          onClick={() => c((w) => !w)}
          className="p-2 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20"
        >
          <Search size={20} />
        </button>
        <button
          onClick={k}
          className="p-2 rounded-xl bg-white/10 border border-white/20 text-white hover:bg-white/20"
        >
          {e ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {s && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 top-full w-full px-4 mt-2 md:hidden"
          >
            <div className="relative">
              <input
                type="text"
                value={d}
                onChange={(w) => u(w.target.value)}
                onKeyDown={(evt) => {
                  if (evt.key === "Enter" && d.trim()) {
                    c(false);
                    t(`/alltreks?search=${encodeURIComponent(d.trim())}`);
                  }
                }}
                placeholder="Search treks..."
                className="w-full px-4 py-3 rounded-xl bg-[#efe5d5] border border-[#2b241d]/12 text-[#2b241d] focus:outline-none focus:ring-2 focus:ring-[#f25b23]"
              />
              {d && (
                <div className="mt-2 bg-[#efe5d5] border border-[#2b241d]/12 rounded-xl shadow-2xl shadow-[rgba(43,36,29,0.12)] overflow-hidden max-h-60 overflow-y-auto">
                  {b.map((w) => (
                    <div
                      key={w}
                      onClick={() => {
                        u("");
                        c(false);
                        t(`/alltreks?search=${encodeURIComponent(w)}`);
                      }}
                      className="px-4 py-3 text-sm text-[#2b241d] hover:bg-[#efe5d5]/30 hover:text-[#2b241d] cursor-pointer"
                    >
                      {w}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {e && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-4 top-full mt-2 w-72 md:hidden bg-[#f4ede1]/95 backdrop-blur-xl border border-[#2b241d]/12 rounded-2xl shadow-2xl shadow-[rgba(43,36,29,0.12)] p-4 z-40"
          >
            <ul className="flex flex-col space-y-2">
              {v.map((w) => (
                <li key={w.name}>
                  <button
                    onClick={() => {
                      t(w.path);
                      n(false);
                    }}
                    className="w-full text-left px-4 py-2.5 rounded-xl text-[#2b241d] font-medium hover:bg-[#efe5d5]/30"
                  >
                    {w.name}
                  </button>
                </li>
              ))}
              <li className="pt-2">
                {y ? (
                  <button
                    onClick={() => {
                      m();
                      n(false);
                    }}
                    className="w-full flex items-center justify-center gap-2 bg-[#efe5d5]/30 hover:bg-red-500/10 hover:text-red-400 border border-[#2b241d]/12 text-[#2b241d] font-semibold py-3 rounded-xl transition-all duration-200"
                  >
                    <LogOut size={16} />
                    <span>Logout ({y.given_name})</span>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      o(true);
                      n(false);
                    }}
                    className="w-full bg-gradient-to-r from-[#f25b23] to-[#f25b23] text-[#2b241d] font-semibold py-3 rounded-xl shadow-lg"
                  >
                    Login
                  </button>
                )}
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      {a && (
        <Portal>
          <LoginModal onClose={() => o(false)} />
        </Portal>
      )}
    </header>
  );
}

export default Navbar;
