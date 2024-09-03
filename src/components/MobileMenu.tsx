"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiMenuFries } from "react-icons/ci";
function MobileMenu() {
    const pathname=usePathname();
  const links = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "services",
      path: "/services",
    },
    {
      name: "resume",
      path: "/resume",
    },
    {
      name: "work",
      path: "/work",
    },
    {
      name: "contact",
      path: "/contact",
    },
  ];
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center ">
        <CiMenuFries className="text-3xl text-green-400" />
      </SheetTrigger>
      <SheetContent className="flex flex-col ">
        <div className="text-white text-center  mt-32 mb40">
          <Link href="/">
            <h1 className="text-5xl font-semibold font-satisfy">
              MMFD <span className="text-green-500 -ml-5">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap:10">
          {links.map((link, i) => {
            return (
              <Link
                key={i}
                href={link.path}
                className={`${link.path===pathname && 'text-[#00ff99] border-b-2 border-[#00ff99]'} capitalize font-medium transition-all hover:text-[#00ff99] hover:scale-[1.1] hover:transition hover:duration-500 text-2xl mt-7`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenu;
