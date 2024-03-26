import React from "react";
import Experience from "../assets/experience.png";
import heroVideo from "../assets/heroVideo.mp4";
import Education from "../assets/education.png";
import ArrowIcon from "../assets/arrow.png";

export default function AboutSection() {
  return (
    <section className="font-serif pb-12">
      <h1 className="text-[3.4rem] items-center flex justify-center">
        About Me
      </h1>
      <div className="grid grid-cols-2">
        <div className="flex h-auto w-auto ml-[80px]">
          <div className="min-h-[225px] min-w-[225px] overflow-hidden md:overflow-auto md:w-[660px] md:h-[660px]">
            <video
              autoPlay
              muted
              loop
              preload="none"
              className="sm:h-[225px] sm:w-[225px] md:h-[660px] md:w-[660px]"
              src={heroVideo}
            ></video>
          </div>
        </div>
        <div className="grid grid-rows-2 pr-[180px]">
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
              <p className="flex justify-center items-center">2+ years</p>
              <p className="flex justify-center items-center">
                FullStack Development
              </p>
            </div>
            <div className="border-2 border-slate-400 px-16 py-7 rounded-xl">
              <div className="flex justify-center items-center">
                <img src={Education} alt="education-icon" className="w-8 h-8" />
              </div>

              <h3 className="flex justify-center items-center text-xl font-semibold">
                Education
              </h3>
              <p className="flex justify-center items-center">
                B.Sc. Bachelors Degree
              </p>
            </div>
          </div>
          <div className="flex">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              voluptate, accusantium doloribus impedit soluta atque laboriosam
              nemo inventore minima odit iste odio. Officiis eum autem cum
              ducimus hic vel et. Perspiciatis tempora voluptatum, doloribus
              distinctio dolor nisi ab vitae, repellendus natus corrupti
              perferendis unde
            </p>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-end pr-14">
      <img src={ArrowIcon} alt="Arrow icon" className="w-8 h-8 cursor-pointer" />
      </div> */}
    </section>
  );
}
