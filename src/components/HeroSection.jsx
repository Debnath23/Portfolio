import React from "react";
import ProfilePicture from "../assets/profile-pic.png";
import Linkedin from "../assets/linkedin.png";
import GitHub from "../assets/github.png";
import Resume from "../assets/Resume.pdf";

export default function HeroSection() {
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
                className="hover:text-slate-500 hover:underline hover:underline-offset-[12px] underline underline-offset-[12px] cursor-pointer"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="hover:text-slate-500 hover:underline hover:underline-offset-[12px] cursor-pointer"
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
      <section className="flex justify-center gap-[5rem] h-[80vh] font-serif mb-8">
        <div className="flex h-[400px] w-[400px] my-auto mx-0">
          <img
            src={ProfilePicture}
            alt="Profile picture"
            className="rounded-full"
          />
        </div>
        <div className="items-center mt-[20vh]">
          <p className="text-slate-600 text-2xl flex justify-center font-semibold">
            Hello, I'm
          </p>
          <h1 className="text-[3rem] items-center flex justify-center">
            Debnath Mahapatra
          </h1>
          <p className="text-[1.75rem] text-slate-600 mb-[1rem] flex justify-center font-semibold">
            FullStack Developer
          </p>
          <div className="flex justify-center gap-[2rem]">
            <button
              className="border-2 border-slate-600 rounded-full px-4 py-2 hover:bg-slate-700 hover:text-slate-50"
              onClick={() => {
                window.open(Resume);
              }}
            >
              Download CV
            </button>
            <a href="/contact">
              <button className="border-2 border-slate-600 bg-slate-700 text-slate-50 rounded-full px-4 py-2">
                Contact Info
              </button>
            </a>
          </div>
          <div className="flex justify-center mt-[1rem] gap-[1rem]">
            <a
              href="https://www.linkedin.com/in/debnath-mahapatra-36a1a720a/"
              target="_blank"
            >
              <img
                src={Linkedin}
                alt="Linkedin profile"
                className="h-[2rem] cursor-pointer"
              />
            </a>
            <a href="https://github.com/Debnath23" target="_blank">
              <img
                src={GitHub}
                alt="GitHub profile"
                className="h-[2rem] cursor-pointer"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
