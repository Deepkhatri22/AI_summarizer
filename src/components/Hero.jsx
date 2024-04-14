import React from "react";
import { SiOpenai } from "react-icons/si";
import logo from "../assets/ailogo.png"

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3 flex-col sm:flex-row">
        <div className="flex gap-3 flex-wrap mb-4 sm:mb-0">
          <h1 className="text-white text-4xl sm:text-5xl">
            <SiOpenai />
          </h1>
          <p className="text-white pt-2 text-lg sm:text-xl italic">
            Summarize Smarter with OpenAI
          </p>
        </div>
        <div className="flex gap-2 flex-wrap justify-center items-center">
          <p className="text-white text-sm sm:text-xl italic">Powered by</p>
          <img src= {logo} className="w-6 h-5 sm:w-9 sm:h-7" alt="" />
        </div>
      </nav>
      <h1 className="head_text text-3xl sm:text-7xl text-center mb-4">
        Summarize Articles with <br className="hidden md:block" />
        <span className="orange_gradient">Artificial Intelligence</span>
      </h1>
      <h2 className="desc text-center text-sm sm:text-lg mb-8">
        Transforming lengthy reads into concise insights our AI-powered tool
        revolutionizes article summarization for efficient and effortless
        understanding.
      </h2>
    </header>
  );
};

export default Hero;