import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

const qU = [
  {
    id: 1,
    name: "GA Day 1",
    type: "Day Pass",
    price: 999,
    details: ["GA Access area Day 1"],
  },
  {
    id: 2,
    name: "Fanpit Day 1",
    type: "Day Pass",
    price: 1499,
    details: [
      "Day 1 Fanpit tickets",
      "Special Fanpit area in front of the stage",
    ],
  },
  {
    id: 3,
    name: "VIP Day 1",
    type: "Day Pass",
    price: 1999,
    details: [
      "Special elevated VIP area in front of the stage",
      "Dedicated entry and access",
      "Dedicated VIP FnB area",
      "VIP Bar",
      "VIP area Day 1",
    ],
  },
];

function SelectTicket({ event: t, onClose: e }) {
  const navigate = useNavigate();
  const [ticketQuantities, setTicketQuantities] = useState({});

  const increment = (id) => {
    setTicketQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const decrement = (id) => {
    setTicketQuantities((prev) => {
      if (!prev[id]) return prev;
      const updated = { ...prev, [id]: prev[id] - 1 };
      if (updated[id] <= 0) {
        delete updated[id];
      }
      return updated;
    });
  };

  const total = qU.reduce(
    (sum, ticket) => sum + (ticketQuantities[ticket.id] || 0) * ticket.price,
    0,
  );

  const proceedToPayment = () => {
    if (total !== 0) {
      navigate("/payment", {
        state: {
          event: t,
          ticket: ticketQuantities,
          total: total,
        },
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm backdrop-blur-sm flex justify-center items-center z-[999] px-4">
      <div className="bg-[#efe5d5] border border-[#2b241d]/12 w-full max-w-xl rounded-2xl shadow-2xl shadow-[rgba(43,36,29,0.12)] overflow-hidden relative">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-[#2b241d]/12 bg-[#efe5d5] text-[#2b241d]">
          <h2 className="text-xl font-display font-semibold tracking-tight">
            Select Tickets
          </h2>
          <button
            onClick={e}
            className="p-1 rounded-full hover:bg-[#efe5d5]/30 text-[#6f6357] hover:text-[#2b241d] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Event Title */}
        <div className="px-6 py-5 border-b border-[#2b241d]/12 text-left">
          <h3 className="text-2xl font-display font-semibold text-[#2b241d] tracking-tight">
            {t.title}
          </h3>
          <p className="text-sm text-[#6f6357] mt-2">
            {t.date} | {t.venue} | {t.location}
          </p>
        </div>

        {/* Tickets Grid */}
        <div className="px-6 py-5 max-h-[50vh] overflow-y-auto space-y-4">
          {qU.map((ticket) => (
            <div
              key={ticket.id}
              className="border border-[#2b241d]/12 rounded-2xl p-5 bg-[#f4ede1]/60 transition-all duration-300 hover:border-[#f25b23]/20"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="text-left">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="bg-[#f25b23]/10 text-[#f25b23] border border-[#f25b23]/20 text-xs px-2.5 py-0.5 rounded-full uppercase tracking-wider font-semibold">
                      {ticket.type}
                    </span>
                    <h3 className="text-lg font-display font-semibold text-[#2b241d]">
                      {ticket.name}
                    </h3>
                  </div>
                  <p className="text-xl font-display font-semibold text-[#f25b23] my-2">
                    ₹ {ticket.price}
                  </p>
                  <ul className="text-sm text-[#6f6357] space-y-1 list-disc pl-4 mt-2">
                    {ticket.details.map((detail, idx) => (
                      <li key={idx} className="font-light">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-3">
                  {ticketQuantities[ticket.id] ? (
                    <div className="flex items-center bg-[#efe5d5] border border-[#2b241d]/12 rounded-xl px-3 py-1.5 shadow-inner">
                      <button
                        onClick={() => decrement(ticket.id)}
                        className="text-xl font-display font-semibold text-[#f25b23] hover:text-[#2b241d] px-2 py-0.5 transition-colors"
                      >
                        −
                      </button>
                      <span className="mx-3 text-[#2b241d] font-semibold">
                        {ticketQuantities[ticket.id]}
                      </span>
                      <button
                        onClick={() => increment(ticket.id)}
                        className="text-xl font-display font-semibold text-[#f25b23] hover:text-[#2b241d] px-2 py-0.5 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => increment(ticket.id)}
                      className="px-5 py-2 bg-[#f25b23] hover:bg-[#f25b23] text-[#2b241d] font-semibold rounded-xl shadow-lg shadow-[#f25b23]/10 hover:shadow-[#f25b23]/20 transition-all active:scale-95"
                    >
                      Add
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer actions */}
        <div className="px-6 py-5 border-t border-[#2b241d]/12 flex justify-between items-center bg-[#f4ede1]">
          <div className="text-left">
            <p className="text-2xl font-display font-semibold text-[#2b241d]">
              ₹ {total}
            </p>
            <p className="text-xs text-[#6f6357] mt-1">
              {Object.values(ticketQuantities).reduce(
                (acc, qty) => acc + qty,
                0,
              )}{" "}
              ticket(s) selected
            </p>
          </div>
          <button
            disabled={total === 0}
            onClick={proceedToPayment}
            className={`px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 ${
              total === 0
                ? "bg-zinc-800 text-[#6f6357]/60 cursor-not-allowed border border-[#2b241d]/12"
                : "bg-gradient-to-r from-[#f25b23] to-[#f25b23] text-[#2b241d] hover:shadow-xl shadow-[rgba(43,36,29,0.10)] hover:shadow-[#f25b23]/15 active:scale-95"
            }`}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectTicket;
