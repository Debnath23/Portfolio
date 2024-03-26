import React from "react";
import LinkedinIcon from "../assets/linkedin.png";
import EmailIcon from '../assets/email.png'

export default function ContactSection() {
  return (
    <section className="font-serif">
      <div className="mt-[200px]">
        <p className="text-[1.2rem] items-center flex justify-center text-slate-600">Get in Touch</p>
        <h1 className="text-[3.4rem] items-center flex justify-center">Contact Me</h1>
      </div>
      <div className="flex justify-center">
      <div className="flex justify-center gap-16 w-[600px] items-center border-2 border-slate-500 p-8 rounded-3xl mb-40 mt-20">
        <div className="flex gap-2 items-center">
        <img
            src={EmailIcon}
            alt="Linkedin profile"
            className="cursor-pointer w-12 h-12"
          />
          <p className="text-lg">
            <a href="mailto:debnathmahapatra740@gmail.com"
            target="_blank">
              debnathmahapatra740@gmail.com
            </a>
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <img
            src={LinkedinIcon}
            alt="Linkedin profile"
            className="w-12 h-12 cursor-pointer"
          />
          <p className="text-lg">
            <a
              href="https://www.linkedin.com/in/debnath-mahapatra-36a1a720a/"
              target="_blank"
            >
              Linkedin
            </a>
          </p>
        </div>
        </div>
      </div>
    </section>
  );
}
