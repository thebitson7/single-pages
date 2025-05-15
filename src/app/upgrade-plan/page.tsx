"use client";

import { useState } from "react";

export default function UpgradePlan() {
  const [selected, setSelected] = useState("pro");

  const plans = [
    {
      id: "pro",
      name: "Professional Plan",
      price: "$15/month",
      description: "For power users, maximize your productivity effortlessly.",
    },
    {
      id: "team",
      name: "Team Plan",
      price: "$45/month",
      description: "Maximize teamwork. Elevate your team's productivity.",
    },
    {
      id: "enterprise",
      name: "Enterprise Plan",
      price: "$75/month",
      description: "Boost productivity and seamless collaboration.",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-[480px] relative rounded-2xl bg-[#141414] p-6 text-white shadow-xl">

        {/* Close Button */}
        <button className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-[#2A2A2A] text-lg text-white hover:bg-[#3A3A3A] transition">
          ×
        </button>

        {/* Header */}
        <div className="flex flex-col items-start mb-6 text-left">
          <div className="w-12 h-12 bg-gradient-to-tr from-orange-300 to-orange-600 rounded-xl shadow-inner mb-3" />
          <h2 className="text-lg font-semibold">Upgrade your plan</h2>
          <p className="text-sm text-[#B3B3B3] mt-1">Grow faster with Saru</p>
        </div>

        {/* Plan Label */}
        <p className="text-sm text-[#B3B3B3] mb-3">Pick a plan</p>

        {/* Plan Options */}
        <div className="space-y-3">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelected(plan.id)}
              className={`w-full text-left p-4 rounded-xl border transition-all ${
                selected === plan.id
                  ? "border-[#FF7715] bg-[#2D1C11]"
                  : "border-[#3A3A3A] bg-[#1E1E1E]"
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="font-medium text-white">
                  {plan.name}{" "}
                  <span className="text-sm text-[#B3B3B3]">{plan.price}</span>
                </span>
                <span
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selected === plan.id
                      ? "border-[#FF7715] bg-[#FF7715]"
                      : "border-[#666]"
                  }`}
                >
                  {selected === plan.id && (
                    <span className="w-2 h-2 bg-white rounded-full" />
                  )}
                </span>
              </div>
              <p className="text-sm text-[#B3B3B3]">{plan.description}</p>
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="w-full h-[45px] rounded-[8px] bg-gradient-to-t from-[#3A3A3A] to-[#555555] text-white text-sm font-medium hover:brightness-110 transition">
            Cancel
          </button>
          <button className="w-full h-[45px] rounded-[8px] bg-gradient-to-t from-[#FF7715] to-[#FFA14C] text-white text-sm font-medium hover:brightness-110 transition">
            Confirm
          </button>
        </div>

        {/* Footer Link */}
        <div className="text-center mt-5">
          <a
            href="#"
            className="text-sm text-[#B3B3B3] underline hover:text-white"
          >
            View Plan Comparison
          </a>
        </div>
      </div>
    </div>
  );
}
