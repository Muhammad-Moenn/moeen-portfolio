'use client'
import { motion ,useInView} from "framer-motion";
import { useRef } from "react";
import  CountUp  from 'react-countup';
function Stats() {
    const ref = useRef();
    const isInView = useInView(ref);
    const stats=[
        {
            num:4,
            text:'Years of experience'
        },
        {
            num:14,
            text:'Projects completed'
        },
        {
            num:5,
            text:'Technologies mastered'
        },
        {
            num:50,
            text:'Code commits'
        },
    ]
  return (
    <div className="my-10 md:-mt-5">
        <motion.div 
        initial={{ y: 60, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
        transition={{ type: "spring", duration: 1.5, delay:2.6 }}
        className="container mx-auto  md:my-5 text-center" ref={ref}
        >
            <div className='flex flex-wrap gap-5 max-w-[80vw] mx-auto items-center justify-center '>
            {
                stats.map((item,i)=>{
                    return (
                        <div key={i} className='flex-1 gap-4 items-center justify-center  flex-row'>
                            <CountUp end={item.num}  duration={5} delay={3}
                            className='text-4xl lg:text-6xl font-semibold'/>
                            <p className={`${item.text.length<15?'max-w[100px]':'max-w[150px]'} leading-snug`}>{item.text}</p>
                        </div>
                    )
                })
            }
            </div>
        </motion.div>
    </div>
  )
}

export default Stats