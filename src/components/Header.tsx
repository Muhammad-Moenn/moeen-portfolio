'use client'
import Link from "next/link"
import Nav from "./Nav"
import MobileMenu from "./MobileMenu"
import { Button } from "./ui/button"



function Header() {
  return (
    <header className="py-6 xl:py-8  text-white fixed top-0 left-0 right-0 bg-gray-950 z-10">
        <div className="container mx-auto flex items-center justify-between">
            <Link href="/">
            <h1 className="text-4xl font-semibold text-green-100 font-satisfy">
              MMFD<span className="text-[#00ff99] -pl-[3px]">.</span>    
            </h1>
            </Link>
           <div className="hidden md:flex items-center gap-10">
           <Nav/>

            <Link href='/contact'>
             <Button className="">Hire me</Button>
            </Link>
           </div>
          {/* mobile menu */}
          <div className="md:hidden ">
            <MobileMenu/>
          </div>
        </div>
    </header>
)
}

export default Header