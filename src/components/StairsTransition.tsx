"use client";
import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { usePathname } from "next/navigation";
// import Stairs from "./Stairs";

function StairsTransition() {
  const pathname = usePathname();

  const reverseIndex = (index:number) => {
    const totalstep = 6;
    return totalstep - index - 1;
  };
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className=" h-screen w-screen fixed top-0 left-0 right-0 flex pointer-events-none z-40">
            {/* <Stairs/> */}
            {[...Array(6)]
        .map((_, index) => (
          <motion.div
            key={index}
            initial={{ top: "0%" }}
            animate={{ top: "100%" }}
            exit={{ top:  "0%"}} 
            transition={{
              duration: 0.4,
              ease: easeInOut,
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          ></motion.div>
        ))}
          </div>
          
        
        <motion.div
           initial={{opacity:1}}
           animate={{opacity:0}}
           transition={{duration:0.4 , delay:0 ,ease:easeInOut}}   
           className="w-screen h-screen pointer-events-none bg-gray-950 top-0 left-0 fixed"       
          ></motion.div>
          </div>
      </AnimatePresence>
    </>
  );
}

export default StairsTransition;
