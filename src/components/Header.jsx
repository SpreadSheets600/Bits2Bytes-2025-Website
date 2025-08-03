import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Slant as Hamburger } from "hamburger-react";
import { motion } from "framer-motion";
import Navlink from "@/components/Navlink";

export default function Header() {
  const [isVisible, setIsVisible] = React.useState(true);
  const [isOpen, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    //on  scroll down direction
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > window.innerHeight) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <>
      <header className="w-full h-[4.5rem] flex items-center py-2 fixed z-[25] border-b-[1.5px] bg-soothing_black/60 border-gray/40 backdrop-blur-md transition-all duration-300 ease-in-out" style={{ transform: isVisible ? "translateY(0)" : "translateY(-100%)" }}>
        <div className="ml-2 md:ml-4 z-[26]" style={{ opacity: isOpen ? 0 : 1 }}>
          <Hamburger
            color="white"
            label="Show menu"
            direction="right"
            size={25}
            rounded={true}
            toggle={setOpen}
            toggled={isOpen}
          />
        </div>
        <Link className="flex flex-row gap-4 absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 hover:scale-110 z-50 transition duration-300  ease-in-out" href="/">
          <Image
            src="/b2b.svg"
            width={45}
            height={45}
            alt="logo"
            className=""
          />
          <Image
            src="/25_logo.svg"
            width={45}
            height={45}
            alt="logo"
            className=""
          />
          <Image
            src="/tbit.svg"
            width={42}
            height={42}
            alt="logo"
            className=""
          />
        </Link>
        <progress max="100" value="0"></progress>

        <div className="flex flex-row items-center justify-end gap-2 absolute right-4 z-[26]">
          <Link href="/events">
            <button className="group relative overflow-hidden text-white  bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/30 
                       px-6 py-2.5 mx-2 rounded-full shadow-lg 
                       font-medium font-clash tracking-wide 
                       transition-all duration-200 ease-out transform 
                       hover:scale-105 hover:border-main_primary/60 hover:shadow-xl hover:shadow-main_primary/20 
                       active:translate-y-1 active:shadow-md
                       border-b-4 border-main_primary active:border-b-0">
              <span className="relative z-10">Events</span>
            </button>
          </Link>
        </div>
      </header>

      {isOpen && (
        <motion.div
          className="fixed top-0 menuPop left-0 w-[65vh] h-screen md:h-[95vh] md:ml-8 md:my-4 bg-black z-[26] backdrop-blur-sm rounded-xl border-[2px] border-gray/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative flex flex-col">
            <div className="pl-4 z-[26] h-[4.5rem] flex items-center border-[1.5px] rounded-t-xl bg-black border-gray/40">
              <Hamburger
                color="white"
                label="Show menu"
                direction="right"
                size={50}
                rounded={true}
                toggle={setOpen}
                toggled={isOpen}
              />
              <div className="ml-4 border-l-[1.5px] border-gray/40 h-full"></div>
            </div>
            <div className="text-5xl font-clash font-black flex flex-col mt-14 ml-8 md:mt-12 gap-4 ">
              <div className="relative bg-main_primary text-white w-fit text-left pl-2 pr-4 py-1 rounded-[4px]">
                <Navlink name={"HOME"} link={"/"} setToggle={setOpen} />
                <p className="absolute right-[-2rem] top-[2px] text-[8px] font-bold text-main_primary">
                  PAGE <br /> 01
                </p>
              </div>
              <div className="relative hackNav hover:bg-white hover:text-black text-white w-fit text-left pl-2 pr-4 py-1 rounded-[4px]">
                <Navlink name={"EVENTS"} link={"/events"} setToggle={setOpen} />
                <p className="absolute right-[-2rem] top-[2px] text-[8px] font-bold text-transparent navPageNo">
                  PAGE <br /> 02
                </p>
              </div>
              <div className="relative hackNav hover:bg-white hover:text-black text-white w-fit text-left pl-2 pr-4 py-1 rounded-[4px]">
                <Navlink name={"ABOUT"} link={"/#about"} setToggle={setOpen} />
                <p className="absolute right-[-2rem] top-[2px] text-[8px] font-bold text-transparent navPageNo">
                  PAGE <br /> 03
                </p>
              </div>
              <div className="relative hackNav hover:bg-white hover:text-black text-white w-fit text-left pl-2 pr-4 py-1 rounded-[4px]">
                <Navlink name={"FAQ"} link={"/#faq"} setToggle={setOpen} />
                <p className="absolute right-[-2rem] top-[2px] text-[8px] font-bold text-transparent navPageNo">
                  PAGE <br /> 04
                </p>
              </div>
              <div className="relative hackNav hover:bg-white hover:text-black text-white w-fit text-left pl-2 pr-4 py-1 rounded-[4px]">
                <Navlink
                  name={"BROCHURE"}
                  link={"/Brochure.pdf"}
                  setToggle={setOpen}
                />
                <p className="absolute right-[-2rem] top-[2px] text-[8px] font-bold text-transparent navPageNo">
                  PAGE <br /> 05
                </p>
              </div>
              <div className="relative hackNav hover:bg-white hover:text-black text-white w-fit text-left pl-2 pr-4 py-1 rounded-[4px]">
                <Navlink name={"TEAMS"} link={"/teams"} setToggle={setOpen} />
                <p className="absolute right-[-2rem] top-[2px] text-[8px] font-bold text-transparent navPageNo">
                  PAGE <br /> 06
                </p>
              </div>
              <div className="relative hackNav hover:bg-white hover:text-black text-white w-fit text-left pl-2 pr-4 py-1 rounded-[4px]">
                <Navlink name={"GALLERY"} link={"/gallery"} setToggle={setOpen} />
                <p className="absolute right-[-2rem] top-[2px] text-[8px] font-bold text-transparent navPageNo">
                  PAGE <br /> 07
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}
