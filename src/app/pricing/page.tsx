"use client";

import { useState } from "react";

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <div className="min-h-screen bg-[#FCFCFD] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1216px] mx-auto text-center">
        {/* Title */}
        <h2
          className="text-[38px] sm:text-[48px] md:text-[60.75px] font-bold leading-tight tracking-tighter text-[#1A1A1A] mb-12 md:mb-16"
          style={{ fontFamily: 'Helvetica, sans-serif' }}
        >
          Our Pricing
        </h2>

        {/* Toggle Switch */}
        <div className="flex items-center justify-center gap-4 mb-12 md:mb-16">
          <span className={`text-sm ${!isYearly ? "text-[#1A1A1A]" : "text-[#667085]"}`}>Billed Monthly</span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-12 h-6 rounded-full bg-[#7F56D9] transition duration-300 focus:outline-none"
          >
            <span
              className={`absolute top-1 left-1 h-4 w-4 bg-white rounded-full shadow transform transition duration-300 ${
                isYearly ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>
          <span className={`text-sm font-medium ${isYearly ? "text-[#7F56D9]" : "text-[#667085]"}`}>
            Billed Yearly <span className="text-xs">(save 15%)</span>
          </span>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <Card
            title="Free"
            price="$0"
            description="Description of the tier list will go here, copy should be concise and impactful."
            features={[
              "Amazing feature one",
              "Wonderful feature two",
              "Priceless feature three",
              "Splended feature four",
            ]}
            button="Try for Free"
            variant="outline"
          />
          <Card
            title="Pro"
            price={isYearly ? "$120/year" : "$12/month"}
            description="Description of the tier list will go here, copy should be concise and impactful."
            features={[
              "Everything in the Free plan, plus",
              "Amazing feature one",
              "Wonderful feature two",
              "Priceless feature three",
              "Splended feature four",
              "Delightful feature five",
            ]}
            button="Subscribe Now"
            variant="filled"
          />
          <Card
            title="Enterprise"
            price="Custom"
            subText="yearly billing only"
            description="Description of the tier list will go here, copy should be concise and impactful."
            features={[
              "Everything in the Pro plan, plus",
              "Amazing feature one",
              "Wonderful feature two",
              "Priceless feature three",
              "Splended feature four",
              "Delightful feature five",
            ]}
            button="Contact Sales"
            variant="outline"
          />
        </div>
      </div>
    </div>
  );
}

type CardProps = {
  title: string;
  price: string;
  subText?: string;
  description: string;
  features: string[];
  button: string;
  variant: "filled" | "outline";
};

function Card({ title, price, subText, description, features, button, variant }: CardProps) {
  const isFilled = variant === "filled";

  return (
    <div
      className={`rounded-2xl border transition hover:shadow-lg transform hover:-translate-y-1 hover:scale-[1.01] duration-300 ${
        isFilled ? "border-[#7F56D9] ring-2 ring-[#7F56D9]/20" : "border-gray-100"
      } bg-white p-6 sm:p-8 text-left flex flex-col justify-between`}
    >
      <div>
        <h3 className="text-lg font-semibold text-[#1A1A1A]">{title}</h3>
        <p className="text-2xl font-bold text-[#1A1A1A] mt-1">
          {price}{" "}
          {subText && <span className="text-sm font-normal text-[#667085]">{subText}</span>}
        </p>
        <p className="text-sm text-[#667085] mt-3">{description}</p>
        <hr className="my-4 border-gray-100" />
        <ul className="space-y-3 text-sm text-[#1A1A1A]">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-1">
                <svg
                  className="h-5 w-5 text-[#7F56D9]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        className={`mt-6 w-full py-2 rounded-lg text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#7F56D9] ${
          isFilled
            ? "bg-[#7F56D9] text-white hover:bg-[#6948c5]"
            : "border-2 border-[#7F56D9] text-[#7F56D9] hover:bg-[#f4efff]"
        } hover:scale-[1.02] active:scale-100`}
      >
        {button}
      </button>
    </div>
  );
}
