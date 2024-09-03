"use client";
import { motion ,useInView} from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";
import Nametextanimation from "@/components/nametext";
import { useRef } from "react";
function HomeText() {
    const ref = useRef();
    const isInView = useInView(ref);
  return (
    <div>
      <div className=" text-center md:pl-3 lg:text-left" ref={ref}>
        <motion.span 
        initial={{ y: 60, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
        transition={{ type: "spring", duration: 2,delay:1.7 }}
        className="text-4xl">Frounted Developer</motion.span>
        <motion.h1 
        initial={{ y: 60, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
        transition={{ type: "spring", duration: 2,delay:2 }}
        className="text-[40px] sm:text-[49px] md:text-[55px]lg:text-[63px] leading-[1.1] font-semibold mb-6">
          Hello, I am
          <br />
          <span className="text-green-400 text-[43px] sm:text-[52px] md:text-[57px]lg:text-[66px]">
            <Nametextanimation />
          </span>
        </motion.h1>
        <motion.p 
        initial={{ y: 60, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
        transition={{ type: "spring", duration: 2,delay:2.3 }}
        className="max-w-[490px]">
          I excel in crafting elegant digital experiences and I am proficient in
          various programming languages technologies
        </motion.p>
        <motion.div 
        initial={{ y: 60, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
        transition={{ type: "spring", duration: 2,delay:2.6 }}
        className="flex flex-col gap-7 items-center justify-center md:flex-row md:justify-normal md:items-center">
          <Button className="flex gap-2 text-green-400 bg-[#0c0c0e]  border-2 border-green-500 hover:text-gray-950 mt-8">
            <span>Download CV</span>
            <FiDownload />
          </Button>
          <motion.div 
          initial={{ y: 60, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
          transition={{ type: "spring", duration: 2,delay:3 }}
          className="mb-10 flex gap-3 items-end justify-center md:mb-0">
            <Link
              href=""
              className=" group flex items-center justify-center w-9 h-9 rounded-full  border-2 border-green-400 bg-black hover:scale-[1.03] hover:bg-green-400  hover:border-none mt-5"
            >
              <FaGithub className="text-[22px] text-green-400 group-hover:text-black  hover:transition-all duration-500" />
            </Link>
            <Link
              href=""
              className="group flex items-center justify-center w-9 h-9 rounded-full  border-2 border-green-400 bg-black hover:scale-[1.03] hover:bg-green-400  hover:border-none mt-5 "
            >
              <CiLinkedin className="text-[22px] text-green-400 group-hover:text-black  hover:transition-all duration-500" />
            </Link>
            <Link
              href=""
              className="group flex items-center justify-center w-9 h-9 rounded-full  border-2 border-green-400 bg-black hover:scale-[1.03] hover:bg-green-400  hover:border-none mt-5 "
            >
              <CiFacebook className="text-[22px] text-green-400 group-hover:text-black  hover:transition-all duration-500" />
            </Link>
            <Link
              href=""
              className="group flex items-center justify-center w-9 h-9 rounded-full  border-2 border-green-400 bg-black hover:scale-[1.03] hover:bg-green-400  hover:border-none mt-5"
            >
              <CiYoutube className="text-[22px] text-green-400 group-hover:text-black  hover:transition-all duration-500" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default HomeText;
