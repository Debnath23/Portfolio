import React from "react";
import ExperienceElement from "./ExperienceElement";
import ArrowIcon from "../assets/arrow.png";

export default function ExperienceSection() {
  return (
    <section className="font-serif mt-0 mb-20">
      <p className="text-[1.2rem] items-center flex justify-center text-slate-600">
        Explore My
      </p>
      <h1 className="text-[3.4rem] items-center flex justify-center">
        Experience
      </h1>
      <div className="grid grid-cols-2 mt-16 mx-[150px] gap-14">
        <div className="border-2 border-slate-600 rounded-3xl p-14">
          <h2 className="text-3xl flex justify-center mb-8 text-slate-700">Frontend Development</h2>
          <div className="flex justify-center gap-12">
            <div className="">
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
        <div className="border-2 border-slate-600 rounded-3xl p-12">
          <h2 className="text-3xl flex justify-center mb-8 text-slate-700">Backend Development</h2>
          <div className="ml-[25%]">
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
          </div>
        </div>
      </div>
      {/* <div className="flex justify-end pr-14 pt-8">
      <img src={ArrowIcon} alt="Arrow icon" className="w-8 h-8 cursor-pointer" />
      </div> */}
    </section>
  );
}
