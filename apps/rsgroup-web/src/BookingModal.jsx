import React, { useState } from "react";
import { X } from "lucide-react";

function BookingModal({ onClose: t, event: e }) {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    place: "",
    preference: "",
    mobile: "",
    email: "",
  });

  const whatsappNumber = "919259376982";

  const handleSubmit = (c) => {
    c.preventDefault();
    const textMessage = `Hello, I am interested in the trek.\n\nTrek: ${e?.title}\n\nName: ${formData.name}\nGender: ${formData.gender}\nPlace: ${formData.place}\nTrek Preference: ${formData.preference}\nMobile: ${formData.mobile}\nEmail: ${formData.email}\n\nPlease share more details.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");
    t();
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm backdrop-blur-sm flex justify-center items-center z-[999] px-4">
      <div className="bg-[#efe5d5] border border-[#2b241d]/12 w-full max-w-md rounded-2xl shadow-2xl shadow-[rgba(43,36,29,0.12)] p-6 relative animate-[zoomIn_.2s]">
        <button
          onClick={t}
          className="absolute right-4 top-4 text-[#6f6357] hover:text-[#2b241d] transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-2xl font-display font-semibold text-[#2b241d] mb-1 text-center">
          Let's Connect
        </h2>
        <p className="text-sm text-[#6f6357] text-center mb-6">
          regarding:{" "}
          <span className="font-semibold text-[#2b241d]">{e?.title}</span>
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm text-[#2b241d] block mb-1">Name</label>
            <input
              type="text"
              required
              placeholder="Your Name"
              className="w-full bg-[#f4ede1] border border-[#2b241d]/12 rounded-xl px-4 py-2.5 text-[#2b241d] placeholder-[#6f6357]/60 focus:ring-2 focus:ring-[#f25b23]/20 focus:border-[#f25b23] outline-none transition"
              value={formData.name}
              onChange={(c) =>
                setFormData({
                  ...formData,
                  name: c.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="text-sm text-[#2b241d] block mb-1">Gender</label>
            <div className="flex items-center gap-6 py-1">
              {["Male", "Female", "Other"].map((c) => (
                <label
                  key={c}
                  className="flex items-center gap-2 text-[#2b241d] cursor-pointer"
                >
                  <input
                    type="radio"
                    name="gender"
                    value={c}
                    required
                    checked={formData.gender === c}
                    onChange={() =>
                      setFormData({
                        ...formData,
                        gender: c,
                      })
                    }
                    className="accent-[#f25b23]"
                  />
                  {c}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm text-[#2b241d] block mb-1">Place</label>
            <input
              type="text"
              required
              placeholder="Your City/State"
              className="w-full bg-[#f4ede1] border border-[#2b241d]/12 rounded-xl px-4 py-2.5 text-[#2b241d] placeholder-[#6f6357]/60 focus:ring-2 focus:ring-[#f25b23]/20 focus:border-[#f25b23] outline-none transition"
              value={formData.place}
              onChange={(c) =>
                setFormData({
                  ...formData,
                  place: c.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="text-sm text-[#2b241d] block mb-1">Mobile</label>
            <input
              type="tel"
              required
              maxLength={10}
              placeholder="10-digit Mobile Number"
              className="w-full bg-[#f4ede1] border border-[#2b241d]/12 rounded-xl px-4 py-2.5 text-[#2b241d] placeholder-[#6f6357]/60 focus:ring-2 focus:ring-[#f25b23]/20 focus:border-[#f25b23] outline-none transition"
              value={formData.mobile}
              onChange={(c) =>
                setFormData({
                  ...formData,
                  mobile: c.target.value,
                })
              }
            />
          </div>

          <div>
            <label className="text-sm text-[#2b241d] block mb-1">Email</label>
            <input
              type="email"
              required
              placeholder="Your Email Address"
              className="w-full bg-[#f4ede1] border border-[#2b241d]/12 rounded-xl px-4 py-2.5 text-[#2b241d] placeholder-[#6f6357]/60 focus:ring-2 focus:ring-[#f25b23]/20 focus:border-[#f25b23] outline-none transition"
              value={formData.email}
              onChange={(c) =>
                setFormData({
                  ...formData,
                  email: c.target.value,
                })
              }
            />
          </div>

          <div className="pt-2">
            <span className="text-xs text-[#f25b23]/80 italic">
              We Value Your Privacy. Your Information is Secure and
              Confidential.
            </span>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl text-[#2b241d] font-semibold bg-gradient-to-r from-[#f25b23] to-[#f25b23] hover:shadow-lg hover:shadow-[#f25b23]/10 transition duration-300 active:scale-[0.98] mt-4"
          >
            Send on WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookingModal;
