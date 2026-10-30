
import Footer from '../components/Footer/page';

function Blogs() {
  // Figma design ke mutabiq data array banayi taake code redundant na ho
  const blogPosts = [
    { id: 1, title: "UI Interactions of the week", date: "12 Feb 2020", tags: "Express, Handlebars" },
    { id: 2, title: "UI Interactions of the week", date: "12 Feb 2020", tags: "Express, Handlebars" },
    { id: 3, title: "UI Interactions of the week", date: "12 Feb 2020", tags: "Express, Handlebars" },
    { id: 4, title: "UI Interactions of the week", date: "12 Feb 2020", tags: "Express, Handlebars" },
    { id: 5, title: "UI Interactions of the week", date: "12 Feb 2020", tags: "Express, Handlebars" }
  ];

  return (
    // Main Container: Laptop screen par left spacing (left: 235px) ko emulate karne ke liye standard max-w aur mx-auto lagaya hai
    <div className="w-full bg-white text-black px-6 sm:px-12 md:px-24 lg:px-[235px] py-16 min-h-screen flex flex-col gap-12">
      
      {/* 1. MAIN PAGE TITLE (Figma: Size 44px, Weight Bold) */}
      <div className="mb-4">
        <h1 className="font-heebo font-black text-[36px] md:text-[44px] text-[#21243D] leading-tight">
          Blog
        </h1>
      </div>

      {/* 2. BLOG POSTS LIST */}
      <div className="w-full flex flex-col gap-8 max-w-[682px]">
        {blogPosts.map((post) => (
          <div key={post.id} className="flex flex-col gap-3 border-b border-[#E0E0E0] pb-8 last:border-0">
            
            {/* Post Title (Figma Max Width: 682px, Font Size: ~26px) */}
            <h2 className="font-heebo font-bold text-[22px] md:text-[26px] text-[#21243D] leading-snug hover:text-[#e55555] cursor-pointer transition">
              {post.title}
            </h2>

            {/* Meta Row: Date & Tags */}
            <div className="font-heebo font-normal text-[16px] md:text-[18px] text-[#21243D] flex items-center gap-4">
              <span className="text-[#21243D] font-normal">{post.date}</span>
              <span className="text-gray-300">|</span> 
              <span className="text-[#8692A6]">{post.tags}</span>
            </div>

            {/* Description Text */}
            <p className="font-heebo font-normal text-[15px] md:text-[16px] leading-[23px] text-[#21243D]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio consequatur beatae ipsa omnis blanditiis iusto!
              Laborum ratione placeat blanditiis impedit consequatur error.
            </p>
            
          </div>
        ))}
      </div>
      <Footer/>

    </div>
  );
}

export default Blogs;
