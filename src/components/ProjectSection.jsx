import React from "react";
import ProjectOne from "../assets/project-1.png";
import ProjectTwo from "../assets/project-2.png";
import ProjectThree from "../assets/project-3.png";

export default function ProjectSection() {
  return (
    <div className="font-serif">
        <div className="mt-[200px] mb-8">
        <p className="text-[1.2rem] items-center flex justify-center text-slate-600">Browse My Recent</p>
        <h1 className="text-[3.4rem] items-center flex justify-center">Projects</h1>
        </div>
    <div className="grid grid-cols-3 gap-10 mx-36">
      <div className="border-2 p-8 border-slate-600 rounded-2xl">
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
            <p>GitHub</p>
          </div>
          <div className="text-xl cursor-pointer border-2 rounded-3xl px-4 hover:bg-slate-500 hover:text-white py-2 border-slate-500">
            <p>Live Demo</p>
          </div>
        </div>
      </div>
      <div className="border-2 p-8 border-slate-600 rounded-2xl">
        <div className="flex justify-center">
          <img
            src={ProjectTwo}
            alt="project preview"
            className="w-[275px] h-[275px] rounded-2xl"
          />
        </div>
        <div className="flex justify-center mt-6">
          <p className="text-2xl font-semibold">Project Two</p>
        </div>
        <div className="flex justify-center gap-6 mt-8">
          <div className="text-xl cursor-pointer border-2 rounded-3xl px-6 hover:bg-slate-500 hover:text-white py-2 border-slate-500">
            <p>GitHub</p>
          </div>
          <div className="text-xl cursor-pointer border-2 rounded-3xl px-4 hover:bg-slate-500 hover:text-white py-2 border-slate-500">
            <p>Live Demo</p>
          </div>
        </div>
      </div>
      <div className="border-2 p-8 border-slate-600 rounded-2xl">
        <div className="flex justify-center">
          <img
            src={ProjectThree}
            alt="project preview"
            className="w-[275px] h-[275px] rounded-2xl"
          />
        </div>
        <div className="flex justify-center mt-6">
          <p className="text-2xl font-semibold">Project Three</p>
        </div>
        <div className="flex justify-center gap-6 mt-8">
          <div className="text-xl cursor-pointer border-2 rounded-3xl px-6 hover:bg-slate-500 hover:text-white py-2 border-slate-500">
            <p>GitHub</p>
          </div>
          <div className="text-xl cursor-pointer border-2 rounded-3xl px-4 hover:bg-slate-500 hover:text-white py-2 border-slate-500">
            <p>Live Demo</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
