import React from "react";
import ProfilePicture from "../assets/profile-pic.png";
import Linkedin from "../assets/linkedin.png";
import GitHub from "../assets/github.png";

export default function HeroSection() {
  return (
    <section className="flex justify-center gap-[5rem] h-[80vh] font-serif mb-8">
      <div className="flex h-[400px] w-[400px] my-auto mx-0">
        <img src={ProfilePicture} alt="Profile picture" className="rounded-full" />
      </div>
      <div className="items-center mt-[20vh]">
        <p className="text-slate-600 text-2xl flex justify-center font-semibold">Hello, I'm</p>
        <h1 className="text-[3rem] items-center flex justify-center">Debnath Mahapatra</h1>
        <p className="text-[1.75rem] text-slate-600 mb-[1rem] flex justify-center font-semibold">FullStack Developer</p>
        <div className="flex justify-center gap-[2rem]">
          <button className="border-2 border-slate-600 rounded-full px-4 py-2 hover:bg-slate-700 hover:text-slate-50">Download CV</button>
          <button className="border-2 border-slate-600 bg-slate-700 text-slate-50 rounded-full px-4 py-2">Contact Info</button>
        </div>
        <div className="flex justify-center mt-[1rem] gap-[1rem]">
          <a href="https://www.linkedin.com/in/debnath-mahapatra-36a1a720a/"
          target="_blank">
            <img src={Linkedin} alt="Linkedin profile"
            className="h-[2rem] cursor-pointer" />
          </a>
          <a href="https://github.com/Debnath23"
          target="_blank">
            <img src={GitHub} alt="GitHub profile" 
            className="h-[2rem] cursor-pointer" />
          </a>
        </div>
      </div>
    </section>
  );
}
