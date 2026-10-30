import Link from "next/link";

function Recent_posts() {
  return (
    // Poore section ka background light blue (#EDF7FA) karne ke liye wrapper div
    <div className="bg-[#EDF7FA] p-8 md:p-14 text-black">
      
      {/* HEADER ROW: Title aur View All Link */}
      <div className="flex items-center justify-between max-w-5xl mx-auto mb-6">
        <h2 className="font-heebo font-normal text-[22px] text-[#21243D]">Recent posts</h2>
        <Link href='/blogs' className="font-heebo text-base text-[#00A8CC] hover:underline">
          View all
        </Link>
      </div>

      {/* POSTS GRID: Desktop par side-by-side (2 columns), Mobile par upar-niche */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        
        {/* CARD 1 */}
        <div className="bg-white p-6 rounded shadow-sm flex flex-col gap-4">
          <h1 className="font-heebo font-bold text-[26px] md:text-[30px] leading-tight text-[#21243D]">
            Making a design system from scratch
          </h1>
          
          {/* Date & Tags Section */}
          <div className="font-heebo font-normal text-[18px] text-[#21243D] flex items-center gap-4">
            <span>12 Feb 2020</span>
            <span className="text-gray-400">|</span> {/* hr ki jagah clean separator line */}
            <span>Design, Pattern</span>
          </div>

          {/* Description */}
          <p className="font-heebo font-normal text-[16px] leading-relaxed text-[#21243D]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio consequatur beatae ipsa omnis blanditiis iusto!
            Laborum ratione placeat blanditiis impedit consequatur error.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="bg-white p-6 rounded shadow-sm flex flex-col gap-4">
          <h1 className="font-heebo font-bold text-[26px] md:text-[30px] leading-tight text-[#21243D]">
            Creating vibrant masterpieces in Next.js
          </h1>
          
          {/* Date & Tags Section */}
          <div className="font-heebo font-normal text-[18px] text-[#21243D] flex items-center gap-4">
            <span>12 Feb 2020</span>
            <span className="text-gray-400">|</span>
            <span>Design, Pattern</span>
          </div>

          {/* Description */}
          <p className="font-heebo font-normal text-[16px] leading-relaxed text-[#21243D]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio consequatur beatae ipsa omnis blanditiis iusto!
            Laborum ratione placeat blanditiis impedit consequatur error.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Recent_posts;
 