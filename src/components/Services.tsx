'use client'
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { easeInOut, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Loading from "./Loading";
import { useSelector } from "react-redux";
const services=[
  {
  num:'01',
  title:'Web Developer',
  description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  ref:''
},
  {
  num:'02',
  title:'UI/UX Design',
  description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  ref:''
},
  {
  num:'03',
  title:'Logo Design',
  description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  ref:''
},
  {
  num:'04',
  title:'SEO',
  description:'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  ref:''
}]
function Servicescontext() {
  const pathname=usePathname();
  return (
       <>
       {
    pathname==='/services' ? (
    <div className="min-h-[80vh] flex flex-col justify-center py-10 lg:py-2">
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px] px-7 mt-[60px]"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-6 justify-center group"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 2,
                delay: 0.4 + index * 0.2,
                ease: "easeInOut",
              }}
            >
              <div className="flex justify-between w-full items-center">
                <div
                  className="text-5xl font-semibold group-hover:text-green-400 transition-all duration-500"
                >
                  {service.num}
                </div>
                <Link
                  href={service.ref}
                  className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-green-400 flex justify-center items-center transition-all duration-500 hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-2xl text-black" />
                </Link>
              </div>
              <h2
                className="text-[42px] font-semibold text-white leading-8 group-hover:text-green-500"
              >
                {service.title}
              </h2>
              <p className="text-white/70">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  ) : (
    <Loading />
  )
}</>   
  )
}

export default Servicescontext