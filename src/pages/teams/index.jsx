import { useState } from "react";
import { FaInstagram, FaGithub } from "react-icons/fa";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import fsPromises from "fs/promises";
import path from "path";

function Team(props) {
  const [index, setIndex] = useState(0);
  const tabs = props.tabs;
  console.log("tabs", tabs);

  return (
    <div className="h-fit w-screen bg-soothing_black">
      <Head>
        <title>BITS2BYTES 2025 Teams</title>
      </Head>
      <Header id="navbar" />

      <main>
        <div className='h-[15rem] z-20 md:h-[20rem] bg-[url("/banner.png")] object-fill text-white font-clash tracking-wide font-black 
        flex flex-col items-center justify-center'>
          <span className="text-[1rem] pt-12 md:pt-16 md:text-[4rem]">
            BITS2BYTES' 2025
          </span>
          <span className="text-[2.5rem] tracking-wider">TEAM</span>
        </div>

        <div className="text-[.8rem] md:text-[1rem] p-8 font-semibold font-chakra flex gap-4 md:gap-12 items-center justify-center text-white">
          {tabs.map((tab, i) => (
            <span
              key={i}
              className="rounded-full px-4 py-[.3rem] hover:bg-white/20 transition-all duration-500 ease-in-out"
              style={{ border: index === i ? "1.75px solid #9747ff" : "none" }}
              onClick={() => setIndex(i)}
            >
              {tab.name}
            </span>
          ))}
        </div>

        <div className="w-full h-fit pb-10 flex justify-center">
          <div className="flex flex-col gap-10 px-4 lg:px-[6rem] md:pt-6 ">
            {tabs[index].sections.map((section) => (
              <div key={section.id}>
                <h1 className="text-white font-clash uppercase font-semibold text-4xl py-4 pb-8">
                  {section.name}
                </h1>

                <div className="flex flex-wrap justify-evenly gap-16 w-fit h-fit pt-6 rounded-sm">
                  {section.members.map((member) => (
                    <div
                      key={member.id}
                      className="flex flex-col items-center text-center group"
                    >
                      <div className="relative">
                        <Image
                          src={member.img}
                          alt={member.name}
                          width={300}
                          height={300}
                          className="object-cover w-[10rem] h-[10rem] rounded-full transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex flex-col items-center p-2">
                        <h1 className="text-white font-chakra font-semibold text-[1.5rem] pt-4 group-hover:text-main_primary transition-colors duration-300">
                          {member.name}
                        </h1>
                        <p className="text-white/80 font-chakra font-medium text-[1rem]">
                          {member.post}
                        </p>
                        <div className="flex justify-center gap-4 mt-2">
                          {member.github && (
                            <Link href={`${member.github}`} className="">
                              <FaGithub
                                size="1.5rem"
                                className="text-white/80 hover:text-main_primary transition-colors duration-300"
                              />
                            </Link>
                          )}
                          <Link href={`${member.insta}`} className="">
                            <FaInstagram
                              size="1.5rem"
                              className="text-white/80 hover:text-main_primary transition-colors duration-300"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Team;

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "/teams.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: objectData,
  };
}
