import React from "react";
import Experience from "../assets/experience.png";
import heroVideo from "../assets/heroVideo.mp4";
import Education from "../assets/education.png";

export default function AboutSection() {
  return (
    <>
      <nav className="flex justify-around items-center h-[17vh] font-serif">
        <div className="text-[2rem]  text-slate-700 hover:text-slate-500 cursor-pointer">
          DM
        </div>
        <div className="">
          <ul className="flex gap-[2rem] text-[1.7rem]">
            <li>
              <a
                className="hover:text-slate-500 hover:underline hover:underline-offset-[12px] cursor-pointer"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="hover:text-slate-500 hover:underline hover:underline-offset-[12px] underline underline-offset-[12px]
              cursor-pointer"
                href="/about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="hover:text-slate-500 hover:underline hover:underline-offset-[12px] cursor-pointer"
                href="/experience"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                className="hover:text-slate-500 hover:underline hover:underline-offset-[12px] cursor-pointer"
                href="/project"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="hover:text-slate-500 hover:underline hover:underline-offset-[12px] cursor-pointer"
                href="/contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <section className="font-serif pb-12">
        <div className="grid grid-cols-2">
          <div className="flex h-auto w-auto ml-[80px]">
            <div className="min-h-[225px] min-w-[225px] overflow-hidden md:overflow-auto md:w-[600px] md:h-[600px]">
              <video
                autoPlay
                muted
                loop
                preload="none"
                className="sm:h-[225px] sm:w-[225px] md:h-[600px] md:w-[600px]"
                src={heroVideo}
              ></video>
            </div>
          </div>
          <div className="grid grid-rows-2 pr-[80px]">
            <div className="flex justify-center items-center gap-[1.5rem]">
              <div className="border-2 border-slate-400 px-16 py-4 rounded-xl">
                <div className="flex justify-center items-center">
                  <img
                    src={Experience}
                    alt="experience-icon"
                    className="w-8 h-8"
                  />
                </div>

                <h3 className="flex justify-center items-center text-xl font-semibold">
                  Experience
                </h3>
                <p className="flex justify-center items-center">Beginner</p>

                <p className="flex justify-center items-center">
                  FullStack Development
                </p>
              </div>
              <div className="border-2 border-slate-400 px-16 py-7 rounded-xl">
                <div className="flex justify-center items-center">
                  <img
                    src={Education}
                    alt="education-icon"
                    className="w-8 h-8"
                  />
                </div>

                <h3 className="flex justify-center items-center text-xl font-semibold">
                  Education
                </h3>
                <p className="flex justify-center items-center">
                  B.Sc. in Computer Science
                </p>
              </div>
            </div>
            <div className="flex">
              <p>
                I'm a FullStack Developer. Belived that we can help human being
                and nature through technology.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
