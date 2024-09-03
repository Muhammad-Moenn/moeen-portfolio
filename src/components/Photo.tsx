'use client'
import profile  from '@/assets/profile.jpeg'
import { reverse } from 'dns'
import {easeIn, motion} from 'framer-motion'
import Image from 'next/image'

function Photo() {
  return (
    <div className="w-full h-full relative mb-[50px]">
      <motion.div 
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:0.4 ,delay:1.5, ease:easeIn}}
       className='flex items-center justify-center '
      >
        <motion.div className=' rounded-full mix-blend-lighten flex items-center justify-center'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.4 ,delay:2, ease:easeIn}}
        >
            <Image priority quality={100}  src={profile} alt='' className=' absolute w-[300px] h-[300px] md:w-[370px] md:h-[370px] lg:w-[420px] lg:h-[420px] rounded-full object-cover '/>

            <motion.svg
         className=' w-[320px] h-[320px] md:w-[390px] md:h-[390px] lg:w-[440px] lg:h-[440px]  m-2 '
         fill='tarnsparent'
         viewBox='0 0 509 509'
         xmlns='http://www.w3.org/2000/svg'
         >
         
         <motion.circle
         className='mx-auto '
         cx='253'
         cy='253'
         r='250'
         stroke='#00ff99'
         strokeWidth='5'
         strokeLinecap='round'
         strokeLinejoin='round'
         initial={{strokeDasharray:'24 10 0 0'}}
         animate={{
          strokeDasharray:['15 120 25 25','16 25 92 72','4 250 22 22'],
          rotate:['120','360']

         }}
         transition={{duration:20,repeat:Infinity,repeatType:"reverse"}}
         >
         
         </motion.circle>
        </motion.svg>
        </motion.div>

        
      </motion.div>
    </div>
  )
}

export default Photo