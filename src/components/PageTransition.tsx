'use client'
import { AnimatePresence, easeIn, easeInOut, motion } from "framer-motion"
import { usePathname } from "next/navigation"
function PageTransition({children}) {
    const pathname=usePathname();

  return (
    <div>
        <AnimatePresence>
            <div key={pathname}>
                <motion.div
                 initial={{opacity:0}}
                 animate={{opacity:1,}}
                 transition={{ duration: 0.3 ,ease:easeIn}}
                 >
                   {children}
                </motion.div>
            </div>
            
        </AnimatePresence>
    </div>
  )
}

export default PageTransition