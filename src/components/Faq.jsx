import React from "react";

export default function Faq() {
  return (
    <div className="px-2 py-4 xl:px-20">
      <div className="flex justify-start w-full font-clash font-bold">
        <span className="text-white text-[5.5rem] xl:text-[7rem]">FAQs</span>
      </div>

      <div className="flex flex-col gap-4 xl:p-2">
        <div className="font-chakra">
          <div className="border-t-2 border-b-2 border-gray/40">
            <input
              id="collapsible1"
              className="toggle hidden"
              type="checkbox"
            />
            <label
              htmlFor="collapsible1"
              className="lbl-toggle block cursor-pointer font-semibold text-white text-xl md:text-2xl p-7"
            >
              What is BITS2BYTES ?
            </label>

            <div className="collapsible-content">
              <div className="content-inner text-white pl-8 text-lg">
                <p>
                  BITS2BYTES is the annual technical fest of our college Techno Bengal Institute of Technology, first launched in 2006. It brings together students, developers, and innovators to compete, learn, and explore in the world of fast growing technology.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="font-chakra">
          <div className="border-t-2 border-b-2 border-gray/40">
            <input
              id="collapsible2"
              className="toggle hidden"
              type="checkbox"
            />
            <label
              htmlFor="collapsible2"
              className="lbl-toggle block cursor-pointer font-semibold text-white text-xl md:text-2xl p-7"
            >
              What are the prerequisites for Bits2Bytes ?
            </label>

            <div className="collapsible-content">
              <div className="content-inner text-white pl-8 text-lg">
                <p>
                  All students with a valid college ID can enter to the fest for
                  free
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="font-chakra">
          <div className="border-t-2 border-b-2  border-gray/40">
            <input
              id="collapsible3"
              className="toggle hidden"
              type="checkbox"
            />
            <label
              htmlFor="collapsible3"
              className="lbl-toggle block cursor-pointer font-semibold text-white text-xl md:text-2xl p-7"
            >
              Who can participate in BITS2BYTES ?
            </label>
            <div className="collapsible-content">
              <div className="content-inner text-white pl-8 text-lg">
                <p>
                  Students from all colleges and universities are welcome to participate. Some events may require prior registration or team formation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="font-chakra">
          <div className="border-t-2 border-b-2  border-gray/40">
            <input
              id="collapsible4"
              className="toggle hidden"
              type="checkbox"
            />
            <label
              htmlFor="collapsible4"
              className="lbl-toggle block cursor-pointer font-semibold text-white text-xl md:text-2xl p-7"
            >
              Is there any registration fee ?
            </label>
            <div className="collapsible-content">
              <div className="content-inner text-white pl-8 text-lg">
                <p>
                  Some events are free, while others may have a nominal registration fee. Details will be available on the official event page or brochure.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="font-chakra">
          <div className="border-t-2 border-b-2  border-gray/40">
            <input
              id="collapsible5"
              className="toggle hidden"
              type="checkbox"
            />
            <label
              htmlFor="collapsible5"
              className="lbl-toggle block cursor-pointer font-semibold text-white text-xl md:text-2xl p-7"
            >
              How can I register for the fest ?
            </label>
            <div className="collapsible-content">
              <div className="content-inner text-white pl-8 text-lg">
                <p>
                  Registrations can be done through our official website or on-spot (depending on the event). Keep an eye on our Instagram and website for updates.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="font-chakra">
          <div className="border-t-2 border-b-2  border-gray/40">
            <input
              id="collapsible6"
              className="toggle hidden"
              type="checkbox"
            />
            <label
              htmlFor="collapsible6"
              className="lbl-toggle block cursor-pointer font-semibold text-white text-xl md:text-2xl p-7"
            >
              Will participants receive certificates or prizes ?
            </label>
            <div className="collapsible-content">
              <div className="content-inner text-white pl-8 text-lg">
                <p>
                  Yes, all participants will receive certificates, and winners will be awarded with exciting prizes, cash rewards, and recognition.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="font-chakra">
          <div className="border-t-2 border-b-2  border-gray/40">
            <input
              id="collapsible7"
              className="toggle hidden"
              type="checkbox"
            />
            <label
              htmlFor="collapsible7"
              className="lbl-toggle block cursor-pointer font-semibold text-white text-xl md:text-2xl p-7"
            >
              What kind of events are organized ?
            </label>
            <div className="collapsible-content">
              <div className="content-inner text-white pl-8 text-lg">
                <p>
                  The fest features a wide range of events, including coding competitions, hackathons, robotics challenges, tech quizzes, paper presentations, gaming tournaments, workshops, and expert talks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
