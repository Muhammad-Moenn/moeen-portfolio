'use client'
import { FaHtml5 ,FaSquareJs} from "react-icons/fa6";
import { FaCss3,FaReact,FaNodeJs } from "react-icons/fa";
import { SiTailwindcss,SiRedux } from "react-icons/si";
import { PiFramerLogoFill } from "react-icons/pi";
import { RiNextjsFill } from "react-icons/ri";
import { Tabs,TabsContent,TabsList,TabsTrigger } from "@radix-ui/react-tabs";
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from "@radix-ui/react-tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { easeIn, easeInOut, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Loading from "./Loading";

const tabtriggerclass='inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-balance font-medium  transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-green-500 data-[state=active]:text-gray-950 data-[state=active]:shadow-sm  bg-gray-800'

  const about={
    title:'About me',
    description:'I am a Frounted developer with a passion for creating innovative solutions.',
    info:[
      {
        fieldname:'Name',
        fieldvalue:'Muhammad Moeen'
      },
      {
        fieldname:'Phone',
        fieldvalue:'+92 3186588590',
      },
      {
        fieldname:'Experience',
        fieldvalue:'12 Years',
      },
      {
        fieldname:'Nationality',
        fieldvalue:'Pakistan',
      },
      {
        fieldname:'Freelance',
        fieldvalue:'Available',
      },
      {
        fieldname:'Email',
        fieldvalue:'mianmoeen3610@gmail.com',
      },
      {
        fieldname:'Language',
        fieldvalue:'English,Urdu,Hindi',
      },
      
    ]
  }

  const experience={
    icon:'',
    title:'My Experience',
    descrption:'I am a Frounted developer with a passion for creating innovative solutions.',
    items:[
      {
         company:'MMFD Inc',
         position:'Frontend Developer',
         duration:'2019-2020',
      },
      {
         company:'Web Design Studio',
         position:'UI/UX Designer',
         duration:'2019-2020',
      },
      {
         company:'MMFD Inc',
         position:'Backend Developer',
         duration:'2021-2022',
      },
      {
         company:'Software Firm',
         position:'junior Developer',
         duration:'2022-2023',
      },
      {
         company:'MMFD Inc',
         position:'Full Stack Developer',
         duration:'2023-2024',
      },
      {
         company:'E-commerce StartUp',
         position:'Freelance Web Development',
         duration:'2024-2025',
      },
      
      
      
    ]
  }
  const education={
    icon:'',
    title:'My Education',
    descrption:'I am a Frounted developer with a passion for creating innovative solutions.',
    items:[
      {
         institution:'Online Course Platform',
         degree:'Full Stack Developer',
         duration:'2023-2024',
      },
      {
         institution:'Codecamp',
         degree:'Backend Developer',
         duration:'2022-2023',
      },
      {
         institution:'Step By Step Code',
         degree:'Fronted Developer',
         duration:'2021-2022',
      },
      {
         institution:'Online Course',
         degree:'UI/UX Designer',
         duration:'2021-2022',
      },
      
      
      
    ]
  }
  const skills={
    
    title:'My Skills',
    descrption:'I have these skills with a passion for creating innovative solutions.',
    skillslist:[
      {
        icon:<FaHtml5 />,
        name:'HTML'
      },
      {
        icon:<FaCss3 />,
        name:'CSS'
      },
      {
        icon:<FaSquareJs />,
        name:'JavaScript'
      },
      {
        icon:<FaReact/>,
        name:'React js'
      },
      {
        icon:<RiNextjsFill />,
        name:'Next js'
      },
      {
        icon:<SiTailwindcss />,
        name:'Tailwind css'
      },
      {
        icon:<FaNodeJs />,
        name:'Node js'
      },
      {
        icon:<SiRedux />,
        name:'Redux Toolkit'
      },
      
    ]
  }
function ResumeInner() {
  const pathname=usePathname();
  return (
    <>
    {
      pathname==="/resume" ?(
        <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:0.4,delay:0.4,ease:easeIn}}
    className="min-h-[80vh] flex items-center justify-center py-12 md:py-0 mt-[140px]"
    > 
      <div 
      className="container mx-auto ">
        <Tabs defaultValue="experience" className=" flex flex-col lg:flex-row gap-[60px] mx-auto  ">
          <motion.div
           initial={{opacity:0,x:-60}}
           animate={{opacity:1,x:0}}
           transition={{duration:0.7,delay:0.8,ease:easeInOut}}
          className="w-full max-w-[280px] mx-auto lg:h-[80vh] lg:relative">
          <TabsList className="flex flex-col mx-auto w-full max-w-[270px]  gap-[30px] text-center lg:absolute top-[40px] left-[10px]">
            <TabsTrigger className={tabtriggerclass} value="experience">Experience</TabsTrigger>
            <TabsTrigger className={tabtriggerclass} value="education">Education</TabsTrigger>
            <TabsTrigger className={tabtriggerclass} value="skills">Skills</TabsTrigger>
            <TabsTrigger className={tabtriggerclass} value="about">About US</TabsTrigger>
          </TabsList>
          </motion.div>
          <motion.div
          initial={{opacity:0,x:30}}
          animate={{opacity:1,x:0}}
          transition={{duration:0.7,delay:0.8,ease:easeInOut}}
          className="min-h-[50vh] w-full">
            <TabsContent className="w-full mb-5" value="experience">
              <div className="flex flex-col items-center justify-center gap-[30px]  lg:items-start text-center lg:text-left">
                <h3 className="text-4xl font-semibold ml-4">{experience.title}</h3>
                <p className="max-w-[500px] text-gray-400 ml-4 text-[19px]">{experience.descrption}</p>
                <ScrollArea className="h-[570px] sm:w-[70%] lg:w-full overflow-y-scroll">
                  <ul className="grid grid-cols-1 p-6 lg:grid-cols-2 gap-5 lg:p-4">
                    {
                      experience.items.map((item,i)=>{
                        return (
                          <li key={i} className="bg-gray-800 h-[180px] px-12 py-6 rounded-lg flex flex-col items-center justify-center lg:items-start gap-1 transition-all duration-500 hover:scale-[1.05]">
                            <span className="text-green-500" >{item.duration}</span>
                            <h3 className="text-xl font-semibold ">{item.position}</h3>
                            <div className="flex items-center gap-2 my-4">
                              <span className="bg-green-500 w-[6px] h-[6px] rounded-full"></span>
                              <p className="text-gray-200">{item.company}</p>
                            </div>
                          </li>
                        )
                      })
                    }
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent className="w-full mb-5" value="education">
            <div className="flex flex-col items-center justify-center gap-[30px] mx-auto lg:items-start text-center lg:text-left">
                <h3 className="text-4xl ml-4 font-semibold">{education.title}</h3>
                <p className="text-[19px] max-w-[500px] text-gray-400 ml-4 ">{education.descrption}</p>
                <ScrollArea className="h-[500px] sm:w-[70%] lg:w-full  stylish-scroll overflow-y-auto">
                  <ul className="grid grid-cols-1 p-7 lg:grid-cols-2 gap-5 lg:p-4">
                    {
                      education.items.map((item,i)=>{
                        return (
                          <li key={i} className="bg-gray-800 h-[180px] px-12 py-6 rounded-lg flex flex-col items-center justify-center lg:items-start gap-1 transition-all duration-500 hover:scale-[1.06]">
                            <span className="text-green-500" >{item.duration}</span>
                            <h3 className="text-xl font-semibold ">{item.degree}</h3>
                            <div className="flex items-center gap-2 my-4">
                              <span className="bg-green-500 w-[6px] h-[6px] rounded-full"></span>
                              <p className="text-gray-200">{item.institution}</p>
                            </div>
                          </li>
                        )
                      })
                    }
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent className="w-full mb-5" value="skills">
            <div className="flex flex-col items-center justify-center gap-[30px] mx-auto  text-center lg:text-left lg:items-start">
                <h3 className="text-4xl font-semibold ml-4">{skills.title}</h3>
                <p className=" text-[19px] max-w-[500px] text-gray-400 ml-4">{skills.descrption}</p>
                <ScrollArea className="h-[500px]  sm:w-[60%] lg:w-full  stylish-scroll overflow-y-auto">
                  <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 p-3 lg:mx-0 ">
                    {
                      skills.skillslist.map((skill,i)=>{
                        return (
                          <li key={i} className="">
                            <TooltipProvider delayDuration={100}>
                              <Tooltip >
                                <TooltipTrigger className="group flex items-center justify-center h-[130px] min-w-[114px] w-full rounded-lg bg-gray-900 hover:scale-[1.08] transition-all duration-500">
                                  <div className="text-6xl group-hover:text-green-500 transition-all duration-500">{skill.icon}</div>
                                </TooltipTrigger>
                                <TooltipContent className=" bg-white px-3 py-1 text-sm text-slate-950 rounded-sm">
                                  <p>{skill.name}</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        )
                      })
                    }
                  </ul>
                </ScrollArea>
              </div>                   
            </TabsContent>
            <TabsContent className="w-full text-center lg:text-left " value="about">
               <div className="flex flex-col items-center justify-center gap-[30px] mx-auto    lg:items-start  ">
                <h3 className="text-4xl ml-4 font-semibold">{about.title}</h3>
                <p className="text-[19px] max-w-[500px] text-gray-400 ml-4">{about.description}</p>
               </div>
               <ul className="grid grid-cols-1 lg:grid-cols-2 place-items-center lg:place-items-start gap-8 p-3 max-w-[700px] mx-auto lg:mx-0  ">
                 {
                  about.info.map((info,i)=>{
                    return(
                      <li key={i} className="flex gap-3 items-center justify-center">
                        <span className="text-gray-400 min-w-[80px]">{info.fieldname}</span>
                        <span className="text-xl text-white">{info.fieldvalue}</span>
                      </li>
                    )
                  })
                 }
               </ul>
            </TabsContent>
          </motion.div>
          
        </Tabs>
      </div>
    </motion.div>
      ):(
        <Loading/>
      ) 
    }
    </>
  )
}

export default ResumeInner