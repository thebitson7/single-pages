"use client";

export default function PaymentUpdate() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4 py-10">
      <div className="w-[700px] rounded-[24px] bg-[#F2F2F2] border border-[#E3E3E3] shadow-[0_4px_14px_rgba(207,207,207,0.15)] px-8 py-8 transition-all duration-300 ease-in-out">
        
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 bg-gray-300 rounded-md" />
            <div>
              <h2 className="text-base font-semibold text-[#1A1A1A]">Update payment info</h2>
              <p className="text-sm text-gray-500 mt-0.5">Update your card details.</p>
            </div>
          </div>
          <button className="text-xl text-gray-400 hover:text-gray-600 transition">×</button>
        </div>

        {/* Form fields */}
        <div className="space-y-6">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row gap-[24px] justify-between">
            <div className="flex flex-col" style={{ width: '468px' }}>
              <label className="text-sm text-gray-700 mb-1">Name on card</label>
              <input
                type="text"
                defaultValue="Shawn Corey Carter"
                className="h-[44px] px-4 rounded-[10px] border border-gray-300 bg-white text-sm outline-none focus:ring-2 focus:ring-gray-400 transition-all"
              />
            </div>
            <div className="flex flex-col" style={{ width: '160px' }}>
              <label className="text-sm text-gray-700 mb-1">Expiry</label>
              <input
                type="text"
                defaultValue="01 / 2026"
                className="h-[44px] px-4 rounded-[10px] border border-gray-300 bg-white text-sm outline-none focus:ring-2 focus:ring-gray-400 transition-all"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row gap-[24px] justify-between">
            <div className="flex flex-col" style={{ width: '468px' }}>
              <label className="text-sm text-gray-700 mb-1">Card number</label>
              <div className="flex items-center h-[44px] rounded-[10px] border border-gray-300 bg-white px-3 focus-within:ring-2 focus-within:ring-gray-400 transition">
                <div className="w-6 h-4 bg-gray-300 rounded-sm mr-2" />
                <input
                  type="text"
                  defaultValue="5262 8733 5262 5263"
                  className="flex-1 bg-transparent text-sm outline-none border-none focus:ring-0 focus:outline-none placeholder-gray-400"
                />
              </div>
            </div>
            <div className="flex flex-col" style={{ width: '160px' }}>
              <label className="text-sm text-gray-700 mb-1">CVV</label>
              <input
                type="password"
                defaultValue="•••"
                className="h-[44px] px-4 rounded-[10px] border border-gray-300 bg-white text-sm outline-none focus:ring-2 focus:ring-gray-400 transition-all"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-end mt-8 gap-4">
          <button
            className="h-[40px] w-[79px] text-sm rounded-[8px] border border-gray-300 text-[#1A1A1A] hover:bg-gray-100 transition"
          >
            Cancel
          </button>
          <button
            className="h-[40px] w-[79px] text-sm font-medium rounded-[8px] bg-[#1A1A1A] text-white hover:bg-black transition"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
