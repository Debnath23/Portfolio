import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-around items-center h-[17vh] font-serif">
      <div className="text-[2rem]  text-slate-700 hover:text-slate-500 cursor-pointer">DM</div>
      <div className="">
        <ul className="flex gap-[2rem] text-[1.7rem]">
          <li>
            <a
              className="hover:text-slate-500 hover:underline hover:underline-offset-[12px] cursor-pointer"
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="hover:text-slate-500 hover:underline hover:underline-offset-[12px] cursor-pointer"
              href="#experiences"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              className="hover:text-slate-500 hover:underline hover:underline-offset-[12px] cursor-pointer"
              href="#projects"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="hover:text-slate-500 hover:underline hover:underline-offset-[12px] cursor-pointer"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
