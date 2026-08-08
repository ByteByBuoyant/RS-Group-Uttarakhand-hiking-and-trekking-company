import React, { useState, useEffect, useRef, useContext } from "react";
import { Send, Phone, Mail, Clock, MapPin } from "lucide-react";
function Contact() {
  const [t, e] = React.useState({
      name: "",
      email: "",
      phone: "",
      message: "",
    }),
    n = (o) => {
      e({
        ...t,
        [o.target.name]: o.target.value,
      });
    },
    a = (o) => {
      o.preventDefault();
      console.log("Contact Form Data:", t);
      alert("Your query has been submitted!");
      e({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    };
  return (
    <div className="bg-[#f4ede1] min-h-screen">
      
      {
        <div className="relative bg-[#efe5d5] py-20 mt-[5rem] text-center overflow-hidden border-b border-[#2b241d]/12">
          {/* Pinned Adventure Landscape */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
            <img
              src="https://zxdefgavgwfxastwmmjm.supabase.co/storage/v1/object/public/assets/rove.png"
              alt="Adventure Landscape"
              className="w-full h-full object-cover object-[center_42%]"
            />
            {/* Melt dissolve overlay gradient from top to bottom */}
            <div 
              className="absolute inset-0 z-10" 
              style={{
                background: "linear-gradient(to bottom, rgba(244, 237, 225, 0.45) 0%, rgba(244, 237, 225, 0.75) 100%)"
              }}
            />
          </div>
          <div className="relative z-20">
            <h1 className="text-4xl md:text-5xl font-display font-semibold text-[#2b241d] tracking-tight">
              Contact Us
            </h1>
            <p className="text-[#2b241d]/85 mt-2 font-semibold">
              Do you have any queries? We’re happy to help.
            </p>
          </div>
        </div>
      }
      {
        <div className="max-w-6xl mx-auto px-6 py-12">
          {
            <div className="grid md:grid-cols-3 gap-8">
              {
                <div className="md:col-span-2 bg-[#efe5d5]/60 border border-[#2b241d]/12 backdrop-blur-md rounded-2xl shadow-lg shadow-[rgba(43,36,29,0.12)] p-6 md:p-8">
                  {
                    <h2 className="text-2xl font-display font-semibold mb-4">
                      Do you have any query?
                    </h2>
                  }
                  {
                    <form onSubmit={a} className="space-y-4">
                      {
                        <div className="grid sm:grid-cols-2 gap-4">
                          {
                            <input
                              type="text"
                              name="name"
                              value={t.name}
                              onChange={n}
                              placeholder="Full Name"
                              required={!0}
                              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                          }
                          {
                            <input
                              type="email"
                              name="email"
                              value={t.email}
                              onChange={n}
                              placeholder="Email Address"
                              required={!0}
                              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                          }
                        </div>
                      }
                      {
                        <input
                          type="tel"
                          name="phone"
                          value={t.phone}
                          onChange={n}
                          placeholder="Phone Number"
                          required={!0}
                          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                      }
                      {
                        <textarea
                          name="message"
                          value={t.message}
                          onChange={n}
                          rows="5"
                          placeholder="Detailed Description"
                          required={!0}
                          className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
                        />
                      }
                      {
                        <button
                          type="submit"
                          className={`flex items-center gap-2 px-6 py-3 
                           bg-gradient-to-r from-[#f25b23] to-[#f25b23]
                           text-[#2b241d] font-semibold rounded-xl shadow-lg shadow-[rgba(43,36,29,0.12)]-lg
                           hover:scale-105 transition`}
                        >
                          {<Send className="w-5 h-5" />}Submit Query
                        </button>
                      }
                    </form>
                  }
                </div>
              }
              {
                <div className="bg-[#efe5d5]/60 border border-[#2b241d]/12 backdrop-blur-md rounded-2xl shadow-lg shadow-[rgba(43,36,29,0.12)] p-6">
                  {
                    <h2 className="text-xl font-display font-semibold mb-4">
                      Help & Support
                    </h2>
                  }
                  {
                    <div className="space-y-4 text-[#2b241d]">
                      {
                        <div className="flex gap-3 items-start">
                          {
                            <Phone className="text-[#f25b23] w-5 h-5 shrink-0" />
                          }
                          {
                            <div>
                              {<p className="font-semibold">Call Us</p>}
                              {<p>+91 92593 76982</p>}
                            </div>
                          }
                        </div>
                      }
                      {
                        <div className="flex gap-3 items-start">
                          {<Mail className="text-[#f25b23] w-5 h-5 shrink-0" />}
                          {
                            <div>
                              {<p className="font-semibold">Email</p>}
                              {<p>info@rsgrouputtarakhand.in</p>}
                            </div>
                          }
                        </div>
                      }
                      {
                        <div className="flex gap-3 items-start">
                          {
                            <Clock className="text-[#f25b23] w-5 h-5 shrink-0" />
                          }
                          {
                            <div>
                              {<p className="font-semibold">Office Hours</p>}
                              {<p>Mon–Sat: 10:00 AM – 9:30 PM</p>}
                              {<p>Sun: 10:00 AM – 5:30 PM</p>}
                            </div>
                          }
                        </div>
                      }
                      {
                        <div className="flex gap-3 items-start">
                          {
                            <MapPin className="text-[#f25b23] w-5 h-5 shrink-0" />
                          }
                          {
                            <div>
                              {<p className="font-semibold">Office Address</p>}
                              {
                                <p>
                                  Caselton compound near Shiv Mandir tallital
                                  Nainital Pin- 263001, Uttarakhand, India
                                </p>
                              }
                            </div>
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
            <div className="mt-12 bg-[#efe5d5]/60 border border-[#2b241d]/12 backdrop-blur-md rounded-2xl shadow-lg shadow-[rgba(43,36,29,0.12)] overflow-hidden">
              {
                <h2 className="text-2xl font-display font-semibold p-6">
                  Where to find us
                </h2>
              }
              {
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d902.3153478960734!2d79.46327042921835!3d29.387035233589614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDIzJzEzLjEiTiA3OcKwMjcnNDguNSJF!5e0!3m2!1sen!2sin!4v1765953417057!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{
                    border: 0,
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen={!0}
                  title="Office Location"
                />
              }
            </div>
          }
        </div>
      }
      
    </div>
  );
}
export default Contact;
