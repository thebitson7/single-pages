"use client";

export default function UploadFile() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-[480px] rounded-xl border border-[#EAEAEA] bg-white p-6 shadow-sm relative">
        {/* Close button */}
        <button className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 text-xl rounded-full transition">
          ×
        </button>

        {/* Header */}
        <h2 className="text-lg font-semibold text-gray-900">Upload File</h2>
        <p className="text-sm text-gray-500 mb-6">Upload and attach files to this project.</p>

        {/* Dropzone */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center text-sm text-gray-500 mb-6 h-40">
          <div className="w-10 h-10 rounded-full bg-gray-200 mb-4 flex items-center justify-center">
            📎
          </div>
          <p>
            Drag and drop your files here or{" "}
            <span className="text-[#664AFC] font-medium cursor-pointer hover:underline">Browse</span>
          </p>
          <p className="text-xs text-gray-400 mt-1">SVG, PNG, JPG or GIF (max. 800×400px)</p>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button className="h-[45px] px-5 rounded-lg border border-gray-300 text-gray-800 text-sm font-medium hover:bg-gray-50 transition">
            Cancel
          </button>
          <button className="h-[45px] w-[110px] rounded-lg text-white text-sm font-medium bg-gradient-to-t from-[#664AFC] to-[#7F5DFF] shadow hover:brightness-110 transition">
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}
