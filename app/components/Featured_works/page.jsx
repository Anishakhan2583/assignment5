import Image from "next/image"; // 1. Image import ko add kiya
import box_image1 from '@/public/box_image1.png'; // 2. Paths ko theek kiya
import box_image2 from '@/public/box_image2.png';
import box_image3 from '@/public/box_image3.png';

function Featured_works() {
  // Teeno alag images ke liye data array banayi taake code clean rahe
  const works = [
    { id: 1, img: box_image1, title: "Designing Dashboard" },
    { id: 2, img: box_image2, title: "Vibrant Portraits" },
    { id: 3, img: box_image3, title: "36 Days of Malayalam type" }
  ];

  return (
    // Main full screen row wrapper
    <div className="w-full bg-white text-black px-6 sm:px-12 md:px-24 py-16">
      
      {/* SECTION HEADING */}
      <div className="max-w-5xl mx-auto mb-8">
        <h2 className="font-heebo font-normal text-[22px] text-[#21243D]">Featured works</h2>
      </div>

      {/* WORKS LIST */}
      <div className="max-w-5xl mx-auto flex flex-col gap-14">
        {works.map((work) => (
          <div 
            key={work.id} 
            className="flex flex-col md:flex-row items-start gap-6 border-b border-[#E0E0E0] pb-10 last:border-0"
          >
            {/* IMAGE CONTAINER (Figma Size: 246px width x 180px height) */}
            <div className="relative w-full md:w-[246px] h-[180px] flex-shrink-0 bg-gray-100 rounded-[6px] overflow-hidden">
              <Image
                src={work.img}
                alt={work.title}
                fill
                className="object-cover"
              />
            </div>

            {/* TEXT INFO CONTAINER */}
            <div className="flex-1 flex flex-col gap-3">
              {/* Title (Figma Size: ~30px) */}
              <h1 className="font-heebo font-bold text-[26px] md:text-[30px] leading-tight text-[#21243D]">
                {work.title}
              </h1>

              {/* Meta Tags Row (Year and Category) */}
              <div className="flex items-center gap-6">
                {/* Year Badge (Figma style background capsule) */}
                <span className="bg-[#14142B] text-white text-[18px] font-black px-3 py-0.5 rounded-full font-heebo">
                  2020
                </span>
                {/* Category */}
                <span className="text-[#8692A6] text-[20px] font-normal font-heebo">
                  Dashboard
                </span>
              </div>

              {/* Description Text (Figma Size Max Width 594px) */}
              <p className="font-heebo font-normal text-[16px] leading-[23px] text-[#21243D] max-w-[594px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae molestias dolor asperiores temporibus voluptates ea!
                Quisquam cupiditate voluptas accusamus neque ad blanditiis.
              </p>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}

export default Featured_works;
