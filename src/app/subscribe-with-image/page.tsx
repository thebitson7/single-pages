"use client";

export default function SubscribeWithImage() {
  return (
    <div className="min-h-screen bg-[#f2f2f2] flex items-center justify-center px-4">
      <div className="relative w-full max-w-[465px] rounded-xl bg-white p-6 md:p-8 shadow-[0_4px_14px_rgba(137,137,137,0.25)] ring-1 ring-[#EBEBEB] text-center transition-all duration-300 ease-in-out">
        
        {/* Close Button */}
        <button
          aria-label="Close"
          className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-500 hover:text-gray-700 hover:scale-105 hover:bg-gray-50 transition-all duration-200 shadow-sm"
        >
          <svg
            className="w-3.5 h-3.5"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            fill="none"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Banner Image */}
        <div className="w-[385px] h-[158px] mx-auto mb-6">
          <img
            src="/images/newsletter-cover.png"
            alt="newsletter banner"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Title */}
        <h2
          className="text-[20px] font-medium text-[#272727] mb-1"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Subscribe to our Newsletter
        </h2>

        {/* Subtitle */}
        <p className="text-sm text-gray-500 mb-6">
          Join thousands getting emails in their inbox.
        </p>

        {/* Input */}
        <input
          type="text"
          placeholder="Your Name"
          className="w-full max-w-[385px] mx-auto mb-4 h-[45px] rounded-md border border-gray-300 text-sm px-4 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#625BF6] focus:border-[#625BF6] shadow-inner transition-all duration-200"
        />

        {/* CTA Button */}
        <button
          className="w-full max-w-[385px] mx-auto h-[45px] rounded-[6px] bg-[#625BF6] text-white font-medium shadow-[0_3px_20px_rgba(98,91,246,0.4)] hover:bg-[#574ee5] active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#625BF6] transition-all duration-200 ease-in-out"
        >
          Yeah, thanks!
        </button>
      </div>
    </div>
  );
}
