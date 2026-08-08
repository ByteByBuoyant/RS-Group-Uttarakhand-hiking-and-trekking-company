import { useAuth } from "@/lib/AuthContext";
import { GOOGLE_CLIENT_ID } from "@/lib/config";
import React, { useState, useEffect, useRef } from "react";
import { X } from "lucide-react";
import GoogleLoginIcon from "./GoogleLoginIcon";

function LoginModal({ onClose }) {
  const { login } = useAuth();
  const googleBtnRef = useRef(null);

  const handleCredentialResponse = (response) => {
    login(response.credential);
    onClose();
  };

  useEffect(() => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
        use_fedcm_for_prompt: false,
      });
      window.google.accounts.id.renderButton(googleBtnRef.current, {
        theme: "outline",
        size: "large",
        width: "100%",
      });
    }
  }, []);

  const triggerGoogleLogin = () => {
    googleBtnRef.current?.querySelector("div[role=button]")?.click();
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="bg-white border border-[#2b241d]/12 w-full max-w-md rounded-2xl shadow-2xl p-8 relative z-10 text-[#2b241d] transform scale-100 transition-all duration-300">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-1.5 rounded-full hover:bg-[#f4ede1]/40 text-[#2b241d]/60 hover:text-[#2b241d] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-3xl font-display font-semibold text-center mb-2 tracking-tight">
          Welcome
        </h2>
        <p className="text-center text-sm text-[#6f6357] mb-8 font-light">
          Your portal to adventure in Uttarakhand
        </p>

        <button
          onClick={triggerGoogleLogin}
          className="w-full flex items-center justify-center gap-3 py-3.5 px-4 rounded-xl bg-white border border-[#2b241d]/12 hover:bg-[#f4ede1]/30 hover:border-[#f25b23]/30 shadow-sm transition-all duration-300 text-sm font-semibold"
        >
          <GoogleLoginIcon />
          <span>Continue with Google</span>
        </button>

        <p className="text-center text-xs text-[#6f6357]/60 mt-6 font-light">
          Easy & secure one-tap login
        </p>

        {/* Hidden native Google button */}
        <div ref={googleBtnRef} className="hidden" />
      </div>
    </div>
  );
}

export default LoginModal;

