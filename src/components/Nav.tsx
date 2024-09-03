'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const links=[
  {
      name:'home',
      path:'/'
  },
  {
      name:'services',
      path:'/services'
  },
  {
      name:'resume',
      path:'/resume'
  },
  {
      name:'work',
      path:'/work'
  },
  {
      name:'contact',
      path:'/contact'
  },
  
]

function Nav() {
    const pathname=usePathname()
   
  
   
  return (
    <div className="flex gap-7"> {
      links.map((link,i)=>{
        return(
            <Link key={i} href={link.path} className={`${link.path===pathname && 'text-[#00ff99] border-b-2 border-[#00ff99]'} capitalize font-medium transition-all hover:text-[#00ff99] hover:scale-[1.1] hover:transition hover:duration-500`}>{link.name}</Link>
        )
      })
    }</div>
  )
}

export default Nav