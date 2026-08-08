import {
  Mountain,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
} from "lucide-react";
function Footer() {
  return (
    <footer className="bg-[#f4ede1] mt-0">
      {
        <div className="w-full px-6 md:px-10 lg:px-20 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-[#6f6357]">
          {
            <div>
              {
                <div className="flex items-center gap-2 mb-4">
                  {<Mountain className="w-6 h-6 text-[#f25b23]" />}
                  {
                    <h3 className="text-xl font-semibold text-[#2b241d]">
                      RS Group Uttarakhand
                    </h3>
                  }
                </div>
              }
              {
                <p className="text-[15px] leading-relaxed font-semibold text-[#6f6357] mb-4">
                  Experience adventure, culture, and nature with our curated
                  trekking and travel packages across Uttarakhand. Your journey
                  begins here.
                </p>
              }
              {
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/rsgroup_uttarakhand/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-[#efe5d5]/30 hover:bg-[#efe5d5]/50 border border-[#2b241d]/12 text-[#2b241d] transition"
                  >
                    <Instagram className="w-5 h-5 text-[#f25b23]" />
                  </a>
                  <a
                    href="https://wa.me/919259376982"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-[#efe5d5]/30 hover:bg-[#efe5d5]/50 border border-[#2b241d]/12 text-[#2b241d] transition"
                  >
                    <MessageCircle className="w-5 h-5 text-[#f25b23]" />
                  </a>
                  <a
                    href="mailto:info@rsgrouputtarakhand.in"
                    className="p-2 rounded-full bg-[#efe5d5]/30 hover:bg-[#efe5d5]/50 border border-[#2b241d]/12 text-[#2b241d] transition"
                  >
                    <Mail className="w-5 h-5 text-[#f25b23]" />
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded-full bg-[#efe5d5]/30 hover:bg-[#efe5d5]/50 border border-[#2b241d]/12 text-[#2b241d] transition"
                  >
                    <Youtube className="w-5 h-5 text-[#f25b23]" />
                  </a>
                </div>
              }
            </div>
          }
          {
            <div>
              {
                <h3 className="text-lg font-semibold text-[#2b241d] mb-4">
                  Quick Links
                </h3>
              }
              {
                <ul className="space-y-2 text-[15px] font-semibold">
                  {
                    <li>
                      {
                        <a href="/" className="hover:text-[#f25b23] transition">
                          Home
                        </a>
                      }
                    </li>
                  }
                  {
                    <li>
                      {
                        <a
                          href="/aboutUs"
                          className="hover:text-[#f25b23] transition"
                        >
                          About Us
                        </a>
                      }
                    </li>
                  }
                  {
                    <li>
                      {
                        <a
                          href="/alltreks?type=Upcoming"
                          className="hover:text-[#f25b23] transition"
                        >
                          Upcoming Treks
                        </a>
                      }
                    </li>
                  }
                  {
                    <li>
                      {
                        <a
                          href="/faqs"
                          className="hover:text-[#f25b23] transition"
                        >
                          FAQ's
                        </a>
                      }
                    </li>
                  }
                  {
                    <li>
                      {
                        <a
                          href="/cancellationPolicy"
                          className="hover:text-[#f25b23] transition"
                        >
                          Cancellation Policy
                        </a>
                      }
                    </li>
                  }
                  {
                    <li>
                      {
                        <a
                          href="/termsAndConditions"
                          className="hover:text-[#f25b23] transition"
                        >
                          Terms & Condition
                        </a>
                      }
                    </li>
                  }
                </ul>
              }
            </div>
          }
          {
            <div>
              {
                <h3 className="text-lg font-semibold text-[#2b241d] mb-4">
                  Explore More
                </h3>
              }
              {
                <ul className="space-y-2 text-[15px] font-semibold">
                  {
                    <li>
                      {
                        <a
                          href="/alltreks?type=winter"
                          className="hover:text-[#f25b23] transition"
                        >
                          Winter Treks
                        </a>
                      }
                    </li>
                  }
                  {
                    <li>
                      {
                        <a
                          href="/alltreks?type=summer"
                          className="hover:text-[#f25b23] transition"
                        >
                          Summer Treks
                        </a>
                      }
                    </li>
                  }
                  {
                    <li>
                      {
                        <a
                          href="/alltreks?type=monsoon"
                          className="hover:text-[#f25b23] transition"
                        >
                          Monsoon Treks
                        </a>
                      }
                    </li>
                  }
                  {
                    <li>
                      {
                        <a
                          href="/alltreks?type=autumn"
                          className="hover:text-[#f25b23] transition"
                        >
                          Autumn Treks
                        </a>
                      }
                    </li>
                  }
                  {
                    <li>
                      {
                        <a
                          href="/privateTours"
                          className="hover:text-[#f25b23] transition"
                        >
                          Private Tours
                        </a>
                      }
                    </li>
                  }
                  {
                    <li>
                      {
                        <a
                          href="/alltreks?type=all"
                          className="hover:text-[#f25b23] transition"
                        >
                          All Treks
                        </a>
                      }
                    </li>
                  }
                </ul>
              }
            </div>
          }
          {
            <div>
              {
                <h3 className="text-lg font-semibold text-[#2b241d] mb-4">
                  Contact Us
                </h3>
              }
              {
                <ul className="space-y-2 text-[15px] font-semibold">
                  {
                    <li className="flex items-start gap-2">
                      {<MapPin className="w-4 h-4 text-[#f25b23] mt-1 shrink-0" />}
                      {
                        <a
                          href="https://maps.google.com/?q=Caselton+compound+near+Shiv+Mandir+tallital+Nainital+Pin-+263001,+Uttarakhand,+India"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#f25b23] transition-colors duration-200"
                        >
                          Caselton compound near Shiv Mandir tallital Nainital
                          Pin- 263001, Uttarakhand, India
                        </a>
                      }
                    </li>
                  }
                  {
                    <li className="flex items-start gap-2">
                      {<Phone className="w-4 h-4 text-[#f25b23] mt-1 shrink-0" />}
                      {
                        <a
                          href="tel:+919259376982"
                          className="hover:text-[#f25b23] transition-colors duration-200"
                        >
                          +91 92593 76982
                        </a>
                      }
                    </li>
                  }
                  {
                    <li className="flex items-start gap-2">
                      {<Mail className="w-4 h-4 text-[#f25b23] mt-1 shrink-0" />}
                      {
                        <a
                          href="mailto:info@rsgrouputtarakhand.in"
                          className="hover:text-[#f25b23] transition-colors duration-200"
                        >
                          info@rsgrouputtarakhand.in
                        </a>
                      }
                    </li>
                  }
                </ul>
              }
              {
                <div className="mt-4 rounded-lg overflow-hidden shadow-md shadow-[rgba(43,36,29,0.08)] border border-orange-100">
                  {
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d902.3153478960734!2d79.46327042921835!3d29.387035233589614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDIzJzEzLjEiTiA3OcKwMjcnNDguNSJF!5e0!3m2!1sen!2sin!4v1765953417057!5m2!1sen!2sin"
                      width="100%"
                      height="200"
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
      }
      {
        <hr className="border-0 h-[2px] bg-gradient-to-r from-[#f25b23] via-[#f25b23] to-[#000000]" />
      }
      {
        <div className="w-full px-6 md:px-10 lg:px-20 py-5 flex flex-col md:flex-row justify-between items-center gap-4 text-[15px] font-bold text-[#6f6357]">
          {
            <div className="flex items-center gap-3">
              {<span className="font-medium text-gray-800">We Accept:</span>}
               {
                <img
                  src="/visa.png"
                  alt="Visa"
                  className="h-6"
                />
              }
              {
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg"
                  alt="MasterCard"
                  className="h-6"
                />
              }
              {
                <img
                  src="/rupay.png"
                  alt="Rupay"
                  className="h-6"
                />
              }
              {
                <img
                  src="/upi.png"
                  alt="UPI"
                  className="h-6"
                />
              }
            </div>
          }
          {
            <div className="text-center md:text-right">
              {
                <p className="text-[15px] font-bold text-[#6f6357]">
                  Powered by{" "}
                  {
                    <span className="font-semibold text-[#f25b23]">
                      RS Group Uttarakhand
                    </span>
                  }{" "}
                  © {new Date().getFullYear()}
                </p>
              }
            </div>
          }
        </div>
      }
    </footer>
  );
}
export default Footer;
