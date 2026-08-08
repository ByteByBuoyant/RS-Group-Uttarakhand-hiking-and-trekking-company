import React, { useState } from "react";
import { X } from "lucide-react";
import Swal from "sweetalert2";
import { BACKEND_API_URL } from "@/lib/config";

const submitItineraryEnquiry = async (body) => {
  const response = await fetch(`${BACKEND_API_URL}/trek-itinerary-enquiries`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    throw new Error("Failed to send itinerary enquiry");
  }
  return response.json();
};

function ItineraryRequestModal({ onClose: t, trekId: e }) {
  const [n, a] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [o, s] = useState(false);

  const c = (u) => {
    a((y) => ({
      ...y,
      [u.target.name]: u.target.value,
    }));
  };

  const d = async (u) => {
    u.preventDefault();
    if (!o) {
      s(true);
      Swal.fire({
        title: "Sending itinerary...",
        text: "Please wait while we send it to your email.",
        allowOutsideClick: false,
        allowEscapeKey: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      try {
        await submitItineraryEnquiry({
          trek_id: e,
          full_name: n.name,
          email: n.email,
          phone: n.phone,
        });
        Swal.fire({
          icon: "success",
          title: "Check your email 📩",
          text: "We’ve sent the itinerary to your email address.",
          confirmButtonText: "OK",
        });
        t();
      } catch {
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
          text: "Unable to send itinerary. Please try again.",
        });
      } finally {
        s(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm backdrop-blur-sm p-4">
      <div className="bg-[#efe5d5] border border-[#2b241d]/12 rounded-2xl w-full max-w-md p-6 relative shadow-2xl shadow-[rgba(43,36,29,0.12)] animate-[zoomIn_.2s]">
        <button
          onClick={t}
          disabled={o}
          className="absolute top-4 right-4 text-[#6f6357] hover:text-[#2b241d] transition-colors disabled:opacity-50"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-2xl font-display font-semibold mb-2 text-[#2b241d]">
          Download Itinerary
        </h2>
        <p className="text-sm text-[#6f6357] mb-6">
          Fill in your details to get the trek itinerary.
        </p>

        <form onSubmit={d} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            value={n.name}
            onChange={c}
            disabled={o}
            className="w-full bg-[#f4ede1] border border-[#2b241d]/12 rounded-xl px-4 py-3 text-[#2b241d] placeholder-[#6f6357]/60 focus:ring-2 focus:ring-[#f25b23]/20 focus:border-[#f25b23] outline-none transition disabled:bg-zinc-800 disabled:opacity-50"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={n.email}
            onChange={c}
            disabled={o}
            className="w-full bg-[#f4ede1] border border-[#2b241d]/12 rounded-xl px-4 py-3 text-[#2b241d] placeholder-[#6f6357]/60 focus:ring-2 focus:ring-[#f25b23]/20 focus:border-[#f25b23] outline-none transition disabled:bg-zinc-800 disabled:opacity-50"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={n.phone}
            onChange={c}
            disabled={o}
            className="w-full bg-[#f4ede1] border border-[#2b241d]/12 rounded-xl px-4 py-3 text-[#2b241d] placeholder-[#6f6357]/60 focus:ring-2 focus:ring-[#f25b23]/20 focus:border-[#f25b23] outline-none transition disabled:bg-zinc-800 disabled:opacity-50"
          />

          <button
            type="submit"
            disabled={o}
            className="w-full py-3.5 rounded-xl text-[#2b241d] font-semibold bg-gradient-to-r from-[#f25b23] to-[#f25b23] hover:shadow-lg hover:shadow-[#f25b23]/10 transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.98]"
          >
            {o ? "Sending..." : "Submit & Download"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ItineraryRequestModal;
