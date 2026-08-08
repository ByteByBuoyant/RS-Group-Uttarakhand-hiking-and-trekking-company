import React, { useState, useEffect, useRef, useContext } from "react";
function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#efe5d5]/60 border border-[#2b241d]/12 backdrop-blur-md text-[#2b241d]">
      
      {
        <main className="max-w-5xl mx-auto px-5 md:px-8 pt-28 pb-16">
          {
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-2">
              {
                <div>
                  {
                    <h1 className="text-3xl md:text-4xl font-display font-semibold text-[#2b241d]">
                      Terms & Conditions
                    </h1>
                  }
                  {
                    <p className="text-sm text-[#6f6357]/60">
                      Terms & Conditions of Service & Trip Participation
                      Agreement
                    </p>
                  }
                </div>
              }
              {
                <a
                  href="/Terms-Conditions.pdf"
                  download={!0}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`self-start md:self-center inline-flex items-center gap-2
                            text-sm font-medium px-4 py-2 rounded-md
                            border border-gray-300 text-[#2b241d]
                            hover:text-[#2b241d] hover:border-black transition`}
                >
                  ⬇ Download PDF
                </a>
              }
            </div>
          }
          {
            <hr className="border-0 h-[2px] bg-gradient-to-r from-[#f25b23] via-[#f25b23] to-black mb-8" />
          }
          {
            <div className="mb-10 space-y-1 text-sm">
              {
                <p>
                  {
                    <span className="font-semibold text-[#2b241d]">
                      Registered Address:
                    </span>
                  }{" "}
                  Caselton Compound, Near Shiv Mandir, Tallital, Nainital –
                  263001, Uttarakhand, India
                </p>
              }
              {
                <p>
                  {
                    <span className="font-semibold text-[#2b241d]">
                      Mobile:
                    </span>
                  }{" "}
                  +91 92593 76982
                </p>
              }
              {
                <p>
                  {<span className="font-semibold text-[#2b241d]">Email:</span>}{" "}
                  info@rsgrouputtarakhand.in
                </p>
              }
            </div>
          }
          {
            <div className="space-y-8 leading-relaxed text-[15px]">
              {
                <section>
                  {
                    <h2 className="text-xl font-semibold text-[#2b241d] mb-2">
                      1. Risk Acknowledgement & Participant Responsibility
                    </h2>
                  }
                  {
                    <p>
                      Participation in trekking and adventure activities
                      involves inherent risks including injury, illness,
                      accidents, altitude sickness, weather changes, and
                      unforeseen conditions. Participants voluntarily assume all
                      risks and confirm that they are physically and mentally
                      fit. Medical conditions must be disclosed prior to
                      booking.
                    </p>
                  }
                </section>
              }
              {
                <section>
                  {
                    <h2 className="text-xl font-semibold text-[#2b241d] mb-2">
                      2. Booking & Payments
                    </h2>
                  }
                  {
                    <p>
                      Bookings are confirmed only after payment. Participants
                      are responsible for verifying all trip details. Failure to
                      complete payment timelines may lead to cancellation
                      without refund.
                    </p>
                  }
                </section>
              }
              {
                <section>
                  {
                    <h2 className="text-xl font-semibold text-[#2b241d] mb-2">
                      3. Cancellation & Refund Policy
                    </h2>
                  }
                  {
                    <p>
                      No refund shall be provided for voluntary withdrawal,
                      no-show, early departure, or non-utilisation of services.
                      If RS Group Uttarakhand cancels a trip due to safety,
                      weather, or force majeure, an alternate date or credit
                      voucher may be offered.
                    </p>
                  }
                </section>
              }
              {
                <section>
                  {
                    <h2 className="text-xl font-semibold text-[#2b241d] mb-2">
                      4. Minor Participation Policy
                    </h2>
                  }
                  {
                    <p>
                      Participants below 18 years must provide written consent
                      from a parent or legal guardian. Participants below 15
                      years must be accompanied by a guardian.
                    </p>
                  }
                </section>
              }
              {
                <section>
                  {
                    <h2 className="text-xl font-semibold text-[#2b241d] mb-2">
                      5. Medical Fitness & Safety
                    </h2>
                  }
                  {
                    <p>
                      RS Group Uttarakhand reserves the right to deny or
                      discontinue participation if a participant shows signs of
                      illness, altitude sickness, unsafe vitals, inability to
                      maintain pace, or behavior risking group safety. No refund
                      shall be applicable.
                    </p>
                  }
                </section>
              }
              {
                <section>
                  {
                    <h2 className="text-xl font-semibold text-[#2b241d] mb-2">
                      6. Force Majeure
                    </h2>
                  }
                  {
                    <p>
                      RS Group Uttarakhand shall not be liable for delays,
                      cancellations, or modifications caused by events beyond
                      control including natural disasters, landslides, weather
                      conditions, government restrictions, or emergencies.
                    </p>
                  }
                </section>
              }
              {
                <section>
                  {
                    <h2 className="text-xl font-semibold text-[#2b241d] mb-2">
                      7. Itinerary Changes
                    </h2>
                  }
                  {
                    <p>
                      Itineraries may be modified for safety or operational
                      reasons. Any additional expenses arising due to such
                      changes shall be borne by the participant.
                    </p>
                  }
                </section>
              }
              {
                <section>
                  {
                    <h2 className="text-xl font-semibold text-[#2b241d] mb-2">
                      8. Inclusions & Exclusions
                    </h2>
                  }
                  {
                    <p>
                      Only services specifically mentioned are included.
                      Exclusions include insurance, emergency evacuation,
                      medical expenses, personal expenses, and additional
                      transport or accommodation.
                    </p>
                  }
                </section>
              }
              {
                <section>
                  {
                    <h2 className="text-xl font-semibold text-[#2b241d] mb-2">
                      9. Luggage & Personal Belongings
                    </h2>
                  }
                  {
                    <p>
                      Participants are solely responsible for their belongings.
                      RS Group Uttarakhand shall not be liable for loss, theft,
                      or damage.
                    </p>
                  }
                </section>
              }
              {
                <section>
                  {
                    <h2 className="text-xl font-semibold text-[#2b241d] mb-2">
                      10. Third-Party Services
                    </h2>
                  }
                  {
                    <p>
                      Guides, porters, transport, and support staff may be
                      arranged through third parties. RS Group Uttarakhand is
                      not liable for their non-performance or misconduct.
                    </p>
                  }
                </section>
              }
              {
                <section>
                  {
                    <h2 className="text-xl font-semibold text-[#2b241d] mb-2">
                      11. Photography & Media Usage
                    </h2>
                  }
                  {
                    <p>
                      Participants grant RS Group Uttarakhand permission to use
                      photographs and videos taken during the trip for
                      promotional purposes unless stated otherwise in writing.
                    </p>
                  }
                </section>
              }
              {
                <section>
                  {
                    <h2 className="text-xl font-semibold text-[#2b241d] mb-2">
                      12. Behaviour & Conduct
                    </h2>
                  }
                  {
                    <p>
                      Alcohol, drugs, misbehavior, or unsafe conduct is strictly
                      prohibited. RS Group Uttarakhand reserves the right to
                      remove participants violating rules without refund.
                    </p>
                  }
                </section>
              }
              {
                <section>
                  {
                    <h2 className="text-xl font-semibold text-[#2b241d] mb-2">
                      13. Complaints & Grievances
                    </h2>
                  }
                  {
                    <p>
                      Any complaints must be raised during the trip or within 7
                      days of completion via official communication channels.
                    </p>
                  }
                </section>
              }
              {
                <section>
                  {
                    <h2 className="text-xl font-semibold text-[#2b241d] mb-2">
                      14. Data Privacy
                    </h2>
                  }
                  {
                    <p>
                      Participant data is collected for operational and legal
                      purposes only and will not be shared except where legally
                      required.
                    </p>
                  }
                </section>
              }
              {
                <section>
                  {
                    <h2 className="text-xl font-semibold text-[#2b241d] mb-2">
                      15. Governing Law & Jurisdiction
                    </h2>
                  }
                  {
                    <p>
                      This Agreement shall be governed by Indian law, and all
                      disputes shall fall under the jurisdiction of courts in
                      Uttarakhand.
                    </p>
                  }
                </section>
              }
            </div>
          }
        </main>
      }
      
    </div>
  );
}
export default TermsAndConditions;
