"use client";

export default function Button() {
  const handleDownload = () => {
    window.open("/CV.pdf", "_blank");
  };

  return (
    <div>
      <button
        onClick={handleDownload}
        className="bg-[#FF6464] text-white font-bold px-6 py-3 rounded hover:scale-95 transition shadow-md duration-200"
      >
        Download Resume
      </button>
    </div>
  );
}