import React from "react";
import ExperienceElement from "./ExperienceElement";

export default function ExperienceSection() {
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
                className="hover:text-slate-500 hover:underline hover:underline-offset-[12px] underline underline-offset-[12px] cursor-pointer"
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
      <section className="font-serif mt-0 mb-20">
        <div className="grid grid-cols-2 mt-16 mx-[150px] gap-14">
          <div className="border-2 border-slate-600 rounded-3xl p-14">
            <h2 className="text-3xl flex justify-center mb-8 text-slate-700">
              Frontend Development
            </h2>
            <div className="flex justify-center gap-12">
              <div>
                <ExperienceElement>
                  HTML
                  <p className="text-lg text-slate-500">Experienced</p>
                </ExperienceElement>
                <ExperienceElement>
                  CSS
                  <p className="text-lg text-slate-500">Experienced</p>
                </ExperienceElement>
                <ExperienceElement>
                  JavaScript
                  <p className="text-lg text-slate-500">Experienced</p>
                </ExperienceElement>
                <ExperienceElement>
                  Typescript
                  <p className="text-lg text-slate-500">Basic</p>
                </ExperienceElement>
              </div>
              <div>
                <ExperienceElement>
                  React.js
                  <p className="text-lg text-slate-500">Experienced</p>
                </ExperienceElement>
                <ExperienceElement>
                  Next.js
                  <p className="text-lg text-slate-500">Intermediate</p>
                </ExperienceElement>
                <ExperienceElement>
                  Tailwind CSS
                  <p className="text-lg text-slate-500">Experienced</p>
                </ExperienceElement>
              </div>
            </div>
          </div>
          <div className="border-2 border-slate-600 rounded-3xl p-14">
            <h2 className="text-3xl flex justify-center mb-8 text-slate-700">
              Backend Development
            </h2>
            <div className="flex justify-center gap-12">
              <div>
                <ExperienceElement>
                  Node.js
                  <p className="text-lg text-slate-500">Intermediate</p>
                </ExperienceElement>
                <ExperienceElement>
                  Express
                  <p className="text-lg text-slate-500">Intermediate</p>
                </ExperienceElement>
                <ExperienceElement>
                  MONGODB
                  <p className="text-lg text-slate-500">Intermediate</p>
                </ExperienceElement>
                <ExperienceElement>
                  Cloudinary
                  <p className="text-lg text-slate-500">Intermediate</p>
                </ExperienceElement>
              </div>
              <div>
                <ExperienceElement>
                  Postman
                  <p className="text-lg text-slate-500">Intermediate</p>
                </ExperienceElement>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
