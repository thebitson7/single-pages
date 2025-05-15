"use client";

export default function NotificationCard() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div
        className="relative w-full max-w-[464px] rounded-xl bg-gradient-to-b from-[#FFFCF5] to-[#FFFDFB] p-6 md:p-8 shadow-xl ring-1 ring-gray-100 backdrop-blur-sm text-center transition-all duration-300 ease-in-out"
      >
        {/* Close Button */}
        <button
          aria-label="Close"
          className="absolute top-3 right-3 w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-500 hover:text-gray-700 hover:scale-105 transition duration-200 shadow-sm"
        >
          ×
        </button>

        {/* Title */}
        <h2
          className="text-[20px] font-medium text-[#272727] mb-1"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          Are you ok?
        </h2>

        {/* Subtitle */}
        <p className="text-sm text-gray-500 mb-6">Just checking in</p>

        {/* CTA Button */}
        <button
          className="w-full max-w-[385px] mx-auto h-[45px] rounded-md bg-[#FF7E21] text-white font-medium shadow-[0_1px_3px_rgba(242,121,33,0.2)] hover:bg-[#ff8a34] active:scale-[0.97] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#FF7E21] transition-all duration-200 ease-in-out"
        >
          Yeah, thanks!
        </button>
      </div>
    </div>
  );
}
