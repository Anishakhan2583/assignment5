import Image from "next/image";
import client_image from '@/public/client_image.png';
import Button from './components/Button/page'; 
import Recent_posts from './components/Recent_posts/page';
import Featured_works from './components/Featured_works/page';
import Footer from './components/Footer/page';

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white text-black flex flex-col overflow-x-hidden">
      
      {/* 1. HERO SECTION (Height aur padding ko kafi barha diya hai) */}
      {/* py-20 lg:py-36 se ab button aur posts ke darmiyan kafi behtar space banega */}
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-between px-6 sm:px-12 md:px-24 lg:px-32 py-20 lg:py-36 gap-12 max-w-[1200px] mx-auto">
        
        {/* Left Content Box */}
        <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
          <h1 className="font-heebo font-bold text-[36px] md:text-[44px] leading-tight md:leading-[60px] tracking-normal text-[#21243D]">
            HI, I AM JOHN <br className="hidden sm:inline" /> CREATIVE TECHNOLOGIST
          </h1>
          
          {/* Paragraph ke niche gap barhane ke liye mb-8 lagaya */}
          <div className="mt-6 mb-8 max-w-xl">
            <p className="text-[#21243D] text-base leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae nisi quis, eligendi at adipisci totam.<br className="hidden md:inline" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam cupiditate voluptas accusamus neque ad blanditiis.
            </p>
          </div>
          
          <Button />
        </div>

        {/* Right Image Box */}
        <div className="relative w-[243px] h-[243px] flex-shrink-0">
          <Image
            src={client_image}
            alt='John Portfolio Pic'
            fill 
            className="object-cover rounded-full" 
            priority
          />
        </div>

      </div>

      {/* 2. RECENT POSTS SECTION */}
      <div className="w-full">
        <Recent_posts />
      </div>

      {/* 3. FEATURED WORKS SECTION */}
      <div className="w-full">
        <Featured_works />
      </div>

<div>
  <Footer/>
</div>
    </div>
  );
}
