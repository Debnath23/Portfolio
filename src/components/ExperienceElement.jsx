import React from "react";
import CheckMark from "../assets/checkmark.png";

export default function ExperienceElement({
    children, className = "", ...props
}) {
  return (
    <article className="flex items-center">
      <img src={CheckMark} alt="Experience icon" 
      className="w-10 h-10 mr-4" />
      <div>
        <h3 className={`text-semibold text-xl ${className}`} {...props}>{children}</h3>
      </div>
    </article>
  );
}
