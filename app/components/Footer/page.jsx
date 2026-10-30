import Link from 'next/link';
// Figma design ke mutabiq exact icons import kiye
import { FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="w-full bg-white text-black py-12 flex flex-col items-center justify-center gap-6 border-t border-gray-100">
      
      {/* SOCIAL MEDIA ICONS ROW */}
      <div className="flex items-center gap-8">
        
        {/* Facebook Link */}
        <Link 
          href="https://facebook.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#21243D] text-[30px] hover:text-[#e55555] hover:scale-110 transition duration-200"
        >
          <FaFacebookSquare />
        </Link>

        {/* Instagram Link */}
        <Link 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#21243D] text-[30px] hover:text-[#e55555] hover:scale-110 transition duration-200"
        >
          <FaInstagram />
        </Link>

        {/* Twitter/X Link */}
        <Link 
          href="https://twitter.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#21243D] text-[30px] hover:text-[#e55555] hover:scale-110 transition duration-200"
        >
          <FaTwitter />
        </Link>

        {/* LinkedIn Link */}
        <Link 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#21243D] text-[30px] hover:text-[#e55555] hover:scale-110 transition duration-200"
        >
          <FaLinkedin />
        </Link>

      </div>

      {/* COPYRIGHT TEXT */}
      <div className="text-center font-heebo font-normal text-[14px] text-[#21243D]">
        <p>Copyright ©2020 All rights reserved</p>
      </div>

    </footer>
  );
}

export default Footer;
