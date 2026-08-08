import React, { useState, useEffect, useRef, useContext } from "react";
import {
  Mountain,
  Users,
  Flag,
  ShieldCheck,
  HeartHandshake,
  Award,
  Bike,
} from "lucide-react";
function AboutUs() {
  return (
    <div className="min-h-screen w-full bg-[#efe5d5]/60 border border-[#2b241d]/12 backdrop-blur-md text-[#2b241d]">
      
      {
        <main className="mt-[6rem]">
          {
            <section className="relative bg-[#efe5d5] py-20 text-center overflow-hidden border-b border-[#2b241d]/12">
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
              <div className="relative z-20 max-w-6xl mx-auto px-6">
                <h1 className="text-3xl md:text-5xl font-display font-semibold text-[#2b241d] mb-4">
                  About{" "}
                  <span className="text-[#f25b23]">
                    RS Group Uttarakhand
                  </span>
                </h1>
                <p className="max-w-3xl mx-auto text-lg text-[#2b241d]/85 leading-relaxed font-semibold">
                  We specialize in trekking and adventure activities, offering
                  safe, authentic, and memorable experiences in the heart of the
                  Himalayas.
                </p>
              </div>
            </section>
          }
          {
            <section className="py-16">
              {
                <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
                  {
                    <div>
                      {
                        <h2 className="text-2xl md:text-3xl font-display font-semibold text-[#2b241d] mb-4">
                          Who We Are
                        </h2>
                      }
                      {
                        <p className="text-[#6f6357] leading-relaxed mb-4">
                          We, {<strong>RS Group Uttarakhand</strong>}, conduct
                          treks across Uttarakhand, Himachal Pradesh, and other
                          Himalayan regions. Along with trekking, we organize
                          school programs where children are introduced to
                          camping and adventure activities.
                        </p>
                      }
                      {
                        <p className="text-[#6f6357] leading-relaxed">
                          We also plan customized tours to various destinations,
                          tailored to individual and group requirements.
                        </p>
                      }
                    </div>
                  }
                  {
                    <div className="bg-[#efe5d5]/40 border border-[#f25b23]/20 border border-[#2b241d]/12 rounded-2xl p-8">
                      {
                        <ul className="space-y-4">
                          {
                            <li className="flex gap-3">
                              {
                                <Mountain className="text-[#f25b23] w-5 h-5 mt-1" />
                              }
                              Himalayan trekking experts
                            </li>
                          }
                          {
                            <li className="flex gap-3">
                              {
                                <Users className="text-[#f25b23] w-5 h-5 mt-1" />
                              }
                              School & group adventure programs
                            </li>
                          }
                          {
                            <li className="flex gap-3">
                              {<Flag className="text-[#f25b23] w-5 h-5 mt-1" />}
                              Customized tours across India
                            </li>
                          }
                        </ul>
                      }
                    </div>
                  }
                </div>
              }
            </section>
          }
          {
            <section className="bg-gradient-to-b from-white via-orange-50 to-white py-16">
              {
                <div className="max-w-6xl mx-auto px-6 text-center">
                  {
                    <h2 className="text-2xl md:text-3xl font-display font-semibold text-[#2b241d] mb-6">
                      Why Our Treks Are{" "}
                      {<span className="text-[#f25b23]">Different</span>}
                    </h2>
                  }
                  {
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                      {[
                        {
                          icon: ShieldCheck,
                          title: "Highly Qualified Leaders",
                          desc: "Professionally trained trek leaders with deep mountain knowledge.",
                        },
                        {
                          icon: HeartHandshake,
                          title: "Safety & Medical Training",
                          desc: "Expertise in high-altitude safety and emergency response.",
                        },
                        {
                          icon: Users,
                          title: "Strong Group Management",
                          desc: "Experienced in leading teams through challenging terrain.",
                        },
                      ].map((t, e) => (
                        <div className="bg-[#efe5d5]/60 border border-[#2b241d]/12 backdrop-blur-md border border-[#2b241d]/12 rounded-2xl p-6 shadow-lg shadow-[rgba(43,36,29,0.12)]-lg shadow-lg shadow-[rgba(43,36,29,0.12)]-black/20 hover:shadow-lg shadow-[rgba(43,36,29,0.12)]-xl transition">
                          {
                            <t.icon className="w-8 h-8 text-[#f25b23] mx-auto mb-4" />
                          }
                          {
                            <h3 className="font-semibold text-[#2b241d] mb-2">
                              {t.title}
                            </h3>
                          }
                          {<p className="text-sm text-[#6f6357]">{t.desc}</p>}
                        </div>
                      ))}
                    </div>
                  }
                </div>
              }
            </section>
          }
          {
            <section className="py-16">
              {
                <div className="max-w-6xl mx-auto px-6">
                  {
                    <h2 className="text-2xl md:text-3xl font-display font-semibold text-[#2b241d] mb-6 text-center">
                      Our Story
                    </h2>
                  }
                  {
                    <p className="max-w-4xl mx-auto text-[#6f6357] leading-relaxed text-center">
                      Two friends met in 2017 and shared a common passion for
                      running and the mountains. What began as a running
                      expedition across Uttarakhand soon turned into a bigger
                      vision. This journey led to the formation of{" "}
                      {<strong>RS Group Uttarakhand</strong>}, which later
                      evolved into a full-fledged trekking company dedicated to
                      exploring and promoting Himalayan trails.
                    </p>
                  }
                </div>
              }
            </section>
          }
          {
            <section className="bg-gradient-to-b from-white via-orange-50 to-white py-16">
              {
                <div className="max-w-6xl mx-auto px-6">
                  {
                    <h2 className="text-2xl md:text-3xl font-display font-semibold text-[#2b241d] mb-10 text-center">
                      Our Achievements
                    </h2>
                  }
                  {
                    <div className="space-y-6 max-w-4xl mx-auto">
                      {
                        <div className="flex gap-4">
                          {<Award className="text-[#f25b23] w-6 h-6 mt-1" />}
                          {
                            <p>
                              {<strong>Rishabh & Sagar</strong>} completed an
                              extraordinary{" "}
                              {<strong>315 km run in just 5 days</strong>}{" "}
                              across the Kumaun region of Uttarakhand,
                              showcasing exceptional endurance and a deep
                              passion for mountain running.
                            </p>
                          }
                        </div>
                      }
                      {
                        <div className="flex gap-4">
                          {<Bike className="text-[#f25b23] w-6 h-6 mt-1" />}
                          {
                            <p>
                              {<strong>Rishabh, Sagar, and Pankaj</strong>},
                              along with three friends, undertook a challenging{" "}
                              {
                                <strong>
                                  2,500 km cycling expedition to Ladakh
                                </strong>
                              }
                              , completing it in 20 days through high-altitude
                              and rugged Himalayan terrain.
                            </p>
                          }
                        </div>
                      }
                      {
                        <div className="flex gap-4">
                          {<Flag className="text-[#f25b23] w-6 h-6 mt-1" />}
                          {
                            <p>
                              The biggest expedition to date was accomplished by{" "}
                              {<strong>Rishabh, Sagar, and Pankaj</strong>}, who
                              traveled across India by bicycle, covering an
                              incredible{" "}
                              {<strong>15,000 km in 4 months</strong>}. They
                              successfully covered all Indian states and 2 Union
                              Territories, earning recognition in the{" "}
                              {<strong>Indian Book of Records</strong>} and the{" "}
                              {<strong>Asian Book of Records</strong>}.
                            </p>
                          }
                        </div>
                      }
                    </div>
                  }
                </div>
              }
            </section>
          }
          {
            <section className="py-16">
              {
                <div className="max-w-6xl mx-auto px-6 text-center">
                  {
                    <h2 className="text-2xl md:text-3xl font-display font-semibold text-[#2b241d] mb-4">
                      Run2Live Association
                    </h2>
                  }
                  {
                    <p className="max-w-3xl mx-auto text-[#6f6357] leading-relaxed">
                      The founders are active members of the{" "}
                      {<strong>Run2Live Team</strong>}, which organizes an
                      annual monsoon marathon. This global event witnesses
                      participation from runners across the world every year.
                    </p>
                  }
                </div>
              }
            </section>
          }
          {
            <section className="bg-[#efe5d5]/40 border border-[#f25b23]/20 py-16">
              {
                <div className="max-w-6xl mx-auto px-6 text-center">
                  {
                    <h2 className="text-2xl md:text-3xl font-display font-semibold text-[#2b241d] mb-4">
                      Our Philosophy
                    </h2>
                  }
                  {
                    <p className="max-w-4xl mx-auto text-[#6f6357] leading-relaxed">
                      We focus on service — the best trek leaders, the best
                      stories, the best experience, strong medical &
                      high-altitude knowledge, and clear communication. We don’t
                      just organize treks — we make your journey special.
                    </p>
                  }
                </div>
              }
            </section>
          }
        </main>
      }
      
    </div>
  );
}
export default AboutUs;
