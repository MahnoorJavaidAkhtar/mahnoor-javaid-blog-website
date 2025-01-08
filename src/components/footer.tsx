import Image from "next/image";
import {
  BsFacebook,
  BsTwitter,
  BsYoutube,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full py-10 bg-[#2a2a2a] text-white/80 px-4"> {/* Dark purple or grey background */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-center items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Image src="/images/logoLight.png" width={80} height={80} alt="logo" />
          <p className="flex items-center text-sm font-titleFont gap-1">
            <AiOutlineCopyrightCircle className="mt-[1px]" />
            reactBD || all rights reserved
          </p>
        </div>

        <div className="flex gap-6">
          <BsYoutube className="w-6 h-6 text-white/50 hover:text-[#FF0000] duration-300 cursor-pointer" /> {/* YouTube hover color */}
          <BsFacebook className="w-6 h-6 text-white/50 hover:text-[#1877F2] duration-300 cursor-pointer" /> {/* Facebook hover color */}
          <BsGithub className="w-6 h-6 text-white/50 hover:text-[#181717] duration-300 cursor-pointer" /> {/* GitHub hover color */}
          <BsLinkedin className="w-6 h-6 text-white/50 hover:text-[#0077B5] duration-300 cursor-pointer" /> {/* LinkedIn hover color */}
          <BsTwitter className="w-6 h-6 text-white/50 hover:text-[#1DA1F2] duration-300 cursor-pointer" /> {/* Twitter hover color */}
        </div>
      </div>
    </div>
  );
};

export default Footer;