import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function School() {
    // Format time with leading zeros

    return (
        <>
            <section className="w-full min-h-screen flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-br from-soothing_black via-primary to-black text-white relative overflow-hidden"
            >
                <div className="relative border-2 border-white/20 rounded-2xl p-8 md:p-12 w-full max-w-7xl shadow-2xl bg-gradient-to-br from-soothing_black/95 via-primary/20 to-soothing_black/95 backdrop-blur-sm hover:border-main_primary/40 transition-all duration-500 group"
                >
                    <p className="text-center text-lg md:text-2xl font-medium font-clash pb-2">&#123;   Welcome &#125;</p>

                    {/* Title Section */}
                    <div className="flex justify-between items-center w-full mb-10">
                        {/* Left */}
                        <div className="flex-1 text-left">
                            <h1 className="text-2xl md:text-4xl lg:text-5xl text-white font-clash font-semibold tracking-wider group-hover:text-main_primary transition-colors duration-300">
                                JUNIOR
                            </h1>
                        </div>

                        {/* Center */}
                        <div className="flex-1 text-center">
                            <h1 className="text-2xl md:text-4xl lg:text-5xl text-main_primary font-clash font-semibold tracking-wider animate-pulse">
                                GENIUS
                            </h1>
                        </div>

                        {/* Right */}
                        <div className="flex-1 text-right">
                            <h1 className="text-2xl md:text-4xl lg:text-5xl text-white font-clash font-semibold tracking-wider group-hover:text-main_primary transition-colors duration-300">
                                ZONE
                            </h1>
                        </div>
                    </div>


                    {/* events Display */}
                    <div className="text-center mb-16 " >

                        <img
                            src="/school.png"
                            alt="School Logo"
                            className="w-38 h-38 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-56 xl:w-80 xl:h-64 mx-auto mb-4 animate-pulse object-contain"
                        />
                    </div>

                    <div className="text-center mb-8">
                        <p className="text-lg md:text-2xl text-white font-chakra font-semibold tracking-wide leading-relaxed">
                            Friday, August 15 <span className="dot-text-color p-2">&#x25CF;</span> 12:00 PM
                        </p>
                        <p className="text-lg md:text-2xl text-white font-chakra  tracking-wide leading-relaxed"> Join us for an exciting journey of learning and discovery at the Junior Genius Zone!</p>
                    </div>

                    {/* Message Section */}
                    <div className=" text-center ">
                        <button className="mt-4 px-11 py-3 bg-main_primary text-white font-semibold font-clash rounded-md shadow-lg hover:bg-white  hover:text-main_primary transition-colors duration-300">
                            <a href=""
                                target="_blank"
                                rel="noopener noreferrer"
                                className=""
                            >Register Now
                            </a>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}