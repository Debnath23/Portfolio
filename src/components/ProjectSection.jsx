import React from "react";
import ProjectOne from "../assets/project-1.png";

export default function ProjectSection() {
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
                className="hover:text-slate-500 hover:underline hover:underline-offset-[12px] underline underline-offset-[12px] cursor-pointer"
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
      <div className="font-serif">
        <div className="grid grid-cols-1 mx-[520px] mt-5">
          <div className="border-2 p-6 border-slate-600 rounded-2xl">
            <div className="flex justify-center">
              <img
                src={ProjectOne}
                alt="project preview"
                className="w-[275px] h-[275px] rounded-2xl"
              />
            </div>
            <div className="flex justify-center mt-6">
              <p className="text-2xl font-semibold">Project One</p>
            </div>
            <div className="flex justify-center gap-6 mt-8">
              <div className="text-xl cursor-pointer border-2 rounded-3xl px-6 hover:bg-slate-500 hover:text-white py-2 border-slate-500">
                <a href="https://github.com/Debnath23/next_js" target="_blank">
                  GitHub
                </a>
                <p></p>
              </div>
              <div className="text-xl cursor-pointer border-2 rounded-3xl px-4 hover:bg-slate-500 hover:text-white py-2 border-slate-500">
                <a
                  href="https://next-js-debnath-mahapatras-projects.vercel.app/"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
