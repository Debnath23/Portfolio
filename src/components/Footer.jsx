import React from "react";

export default function Footer() {
  return (
    <footer>
      <nav>
        <ul className="flex gap-[2rem] text-[1.7rem] justify-center mb-12">
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
              href="#experience"
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
      </nav>
      <div className="flex justify-center mb-16">
        <p className="text-md text-slate-700">Copyright &#169; 2024 Debnath Mahapatra. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
