"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { easeIn, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Loading from "./Loading";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+92 3186588590",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "mianmoeen3610@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Bhrwon Bohar Gate ,Multan",
  },
];
function ContactInner() {
  const pathname = usePathname();

  
  return (
    <>
      {pathname === "/contact" ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.5, ease: easeIn }}
          className="mt-[140px]"
        >
          <div className="container mx-auto mt-[20px]">
            <div className="flex flex-col lg:flex-row gap-[30px] mt-13 mb-13">
              <div className="h-[54%] mx-auto lg:max-w-[65%] order-2 lg:order-none mb-[30px]">
                <form
                  className="flex flex-col gap-6 p-10 bg-[#1b1b20] rounded-lg"
                >
                  <h3 className="text-4xl text-green-500">
                    Let&#39;s work to gather
                  </h3>
                  <p className="text-white/60">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fugiat distinctio minima dicta facere Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Officia similique
                    asperiores velit. Voluptatum
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input type="firstname" placeholder="First Name" />
                    <Input type="lastname" placeholder="Last Name" />
                    <Input type="email" placeholder="Email Address" />
                    <Input type="phone" placeholder="Phone Number" />
                  </div>

                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue
                        className="placeholder:text-slate-300"
                        placeholder="Select a Service"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel className="text-white">
                          Select a Service
                        </SelectLabel>
                        <SelectItem value="est"> Web Development</SelectItem>
                        <SelectItem value="cst"> UI/UX Design</SelectItem>
                        <SelectItem value="ast"> Logo Design</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <Textarea
                    className="h-[200px] "
                    placeholder="Type your message here"
                  />
                  <Button
                    className="max-w-40 py-3 bg-green-600 text-[18px] font-medium"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
              <div className="flex-1 flex items-center lg:justify-start lg:ml-3 order-1 lg:order-none mb-6 lg:mb-0">
                <ul className="flex flex-col gap-10">
                  {info.map((item, i) => {
                    return (
                      <li key={i} className="flex gap-6 items-center">
                        <div className="w-[50px] h-[50px] bg-[#27272c] lg:w-[64px] lg:h-[64px] flex items-center justify-center rounded-md text-green-500 text-[23px] lg:text-[28px] cursor-pointer">
                          <div>{item.icon}</div>
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-300">{item.title}</p>
                          <h3 className="text-lg]">{item.description}</h3>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default ContactInner;
