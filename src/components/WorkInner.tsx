"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import netflix from "../assets/netflix-img.png";
import gemini from "../assets/gemini-img.png";
import edusity from "../assets/edusity-img.png";
import restaurent from "../assets/restaurent-img.png";
import Wishyoo from "../assets/wishyoo-img.png";
import homyz from "../assets/homyz-img.png";
import movie_app1 from "../assets/movie_player.png";
import cuurency_converter from "../assets/cuurency-converter-img.png";
import { easeIn, easeInOut, motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { MdOutlineTrendingUp } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import "swiper/css";
import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import WorkSlideBtn from "./WorkSlideBtn";
import { usePathname } from "next/navigation";
import Loading from "./Loading";

const projects = [
  {
    num: "01",
    category: "Fronted Project",
    title: "Edusity",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sequi facilis",
    stack: [{ name: "React" }, { name: "CSS" }, { name: "Web3Form" }],
    image: edusity,
    live: "https://edusity-website-project.vercel.app/",
    github: "https://github.com/Muhammad-Moenn/Edusityclone",
  },
  {
    num: "02",
    title: "Netflix Clone",
    category: "Full Stack Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sequi facilis",
    stack: [
      { name: "React" },
      { name: "CSS" },
      { name: "FireStore" },
      { name: "Swiper" },
    ],
    image: netflix,
    live: "https://netflixwebsite-mfd.vercel.app/login",
    github: "https://github.com/Muhammad-Moenn/Netflixwebsite-mfd",
  },

  {
    num: "03",
    title: "Gemini AI Clone",
    category: "Full Stack Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sequi facilis",
    stack: [{ name: "React" }, { name: "CSS" }],
    image: gemini,
    live: "https://geminiai-seven.vercel.app/",
    github: "https://github.com/Muhammad-Moenn/Geminiai",
  },
  {
    num: "04",
    title: "Restaurent",
    category: "Fronted Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sequi facilis",
    stack: [
      { name: "React" },
      { name: "CSS" },
      { name: "Framer Motion" },
      { name: "Swiper" },
    ],
    image: restaurent,
    live: "https://restaurant-website-five-beryl.vercel.app/",
    github: "https://github.com/Muhammad-Moenn/restaurant-website",
  },
  {
    num: "05",
    title: "Homyz",
    category: "Fronted Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sequi facilis",
    stack: [
      { name: "React" },
      { name: "CSS" },
      { name: "Framer Motion" },
      { name: "Swiper" },
      { name: "Accessible Accordion" },
    ],
    image: homyz,
    live: "https://homyz-website-project.vercel.app/",
    github: "https://github.com/Muhammad-Moenn/homyz",
  },
  {
    num: "06",
    title: "Movie Player",
    category: "Full Stack Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sequi facilis",
    stack: [
      { name: "React" },
      { name: "CSS" },
      { name: "Redux Toolkit" },
      { name: "React-Redux" },
      { name: "Swiper" },
    ],
    image: movie_app1,
    live: "https://movieplayer-mfd.netlify.app/login",
    github: "https://github.com/Muhammad-Moenn/movieplayer",
  },
  
  {
    num: "07",
    title: "Cuurency Converter",
    category: "Fronted Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sequi facilis",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JS" }],
    image: cuurency_converter,
    live: "",
    github: "",
  },
];
function WorkInner() {
  const [project, setproject] = useState(projects[0]);
  const handleslidechange = (swiper:{activeIndex:number}) => {
    const currentindex = swiper.activeIndex;
    setproject(projects[currentindex]);
  };
  const pathname = usePathname();

  return (
    <>
      {pathname === "/work" ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.5, ease: easeIn }}
          className="text-white mt-[100px] min-h-[80vh] py-10 lg:py-3 flex items-center justify-center"
        >
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row lg:gap-[30px] md:px-[20px]">
              <div className="w-full lg:w-[50%] lg:h-[480px] flex flex-col lg:justify-between order-2 lg:order-none">
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9, delay: 2, ease: easeInOut }}
                  className="flex flex-col gap-6 h-[50%]"
                >
                  <div className="text-7xl font-bold leading-none text-ww">
                    {project.num}
                  </div>
                  <h2 className="text-[43px] font-semibold leading-none text-green-400">
                    {project.title}
                  </h2>
                  <h3 className="text-[37px] font-medium leading-none text-white transition-all duration-500 ">
                    {project.category}
                  </h3>
                  <p className="text-white/65">{project.description}</p>
                  <ul className="flex gap-[6px] ">
                    {project.stack.map((item, i) => {
                      return (
                        <li key={i} className="text-lg text-green-500">
                          {item.name}
                          {i !== project.stack.length - 1 && ","}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="border border-gray-500"></div>
                  <div className="flex items-center gap-[16px]">
                    <Link href={project.live} target="_blank">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[60px] h-[60px] flex items-center justify-center bg-gray-700 group rounded-full border-white/50 border-[2px] hover:border-green-500">
                            <MdOutlineTrendingUp className="text-white group-hover:text-green-500 transition-all duration-500 text-3xl" />
                          </TooltipTrigger>

                          <TooltipContent className="bg-white text-gray-950 px-2 rounded-sm">
                            <p className="text-[14px]">Go to Live Project</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                    <Link href={project.github} target="_blank">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-[60px] h-[60px] flex items-center justify-center bg-gray-700 group rounded-full  border-white/50 border-[2px] hover:border-green-500">
                            <BsGithub className="text-white group-hover:text-green-500 transition-all duration-500 text-4xl" />
                          </TooltipTrigger>

                          <TooltipContent className="bg-white text-gray-950 px-2 rounded-sm">
                            <p className="text-[14px]">GitHub Repository</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </Link>
                  </div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 1.5, ease: easeInOut }}
                className="w-full lg:w-[50%] "
              >
                <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  className="lg:h-[520px] mb-12"
                  onSlideChange={handleslidechange}
                >
                  {projects.map((project, i) => {
                    return (
                      <SwiperSlide key={i} className="w-full rounded-sm">
                        <div className="h-[450px] flex items-center justify-center group relative bg-pink-50/60">
                          <div className="absolute top-0 left-0 right-0 bg-black/15 z-10 bottom-0 w-full h-full"></div>
                          <div className="reletive h-ful w-full">
                            <Image
                              src={project.image}
                              fill
                              className="object-fill"
                              alt=""
                            ></Image>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                  <WorkSlideBtn />
                </Swiper>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default WorkInner;
