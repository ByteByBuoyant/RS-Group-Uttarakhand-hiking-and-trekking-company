import React, { useState, useEffect, useRef, useContext } from "react";
import { Mountain } from "lucide-react";
function CancellationPolicy() {
  return (
    <div className="min-h-screen w-full bg-[#efe5d5]/60 border border-[#2b241d]/12 backdrop-blur-md text-[#6f6357]">
      
      {
        <main className="flex flex-col lg:flex-row px-8 py-1 gap-8 mt-[6rem]">
          {
            <section className="flex-1">
              {
                <div className="flex items-center justify-between mb-6">
                  {
                    <h2 className="text-3xl font-display font-display font-semibold text-[#2b241d] flex items-center gap-2 tracking-tight">
                      {<Mountain className="w-7 h-7 text-[#f25b23]" />}
                      Cancellation Policy
                    </h2>
                  }
                </div>
              }
              {
                <div className="h-[3px] bg-gradient-to-r from-[#f25b23] via-[#f25b23] to-black rounded-full mb-8" />
              }
              {
                <div className="bg-[#efe5d5]/60 border border-[#2b241d]/12 backdrop-blur-md rounded-2xl shadow-lg shadow-[rgba(43,36,29,0.12)]-lg border border-[#2b241d]/12 p-6 md:p-8 leading-relaxed text-[15px] tracking-wide">
                  {
                    <ul className="space-y-4 list-disc pl-5">
                      {
                        <li className="text-[#2b241d]">
                          If cancellations are made{" "}
                          {<strong>30 days before</strong>} the start date of
                          the trip,{<strong> 50% of the trip cost</strong>} will
                          be charged as cancellation fees.
                        </li>
                      }
                      {
                        <li className="text-[#2b241d]">
                          If cancellations are made{" "}
                          {<strong>15–30 days before</strong>} the start date of
                          the trip,{<strong> 75% of the trip cost</strong>} will
                          be charged as cancellation fees.
                        </li>
                      }
                      {
                        <li className="text-[#2b241d]">
                          If cancellations are made within{" "}
                          {<strong>0–15 days</strong>} before the start date of
                          the trip,{<strong> 100% of the trip cost</strong>}{" "}
                          will be charged as cancellation fees.
                        </li>
                      }
                      {
                        <li className="text-[#2b241d]">
                          In the case of{" "}
                          {<strong>unforeseen weather conditions</strong>} or
                          government restrictions, certain activities may be
                          canceled. The operator will try their best to provide
                          an alternate feasible activity.
                        </li>
                      }
                      {
                        <li className="text-[#2b241d]">
                          However, {<strong>no refund will be provided</strong>}{" "}
                          for such activity changes.
                        </li>
                      }
                      {
                        <li className="text-[#2b241d]">
                          If a trek/trip cannot be completed due to{" "}
                          {<strong>natural calamities</strong>} like rain,
                          snowfall, earthquake, landslides, strike, bandh, etc.,{" "}
                          {<strong>no refund</strong>} will be provided.
                        </li>
                      }
                    </ul>
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
export default CancellationPolicy;
