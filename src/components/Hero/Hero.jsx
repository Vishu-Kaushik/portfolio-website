import React from "react";
import Person from "../../assets/Vishu-Preview.jpg";
import { FaArrowRight } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <main className="bg-gray text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-[500px] py-40 md:py-0 place-items-center gap-12">
            {/* Image */}
            <div className="grid col-span-2 h-full justify-center relative items-center">
              <div className="w-[280px] sm:w-[400px] md:w-[450px] ">
                <h1 className="text-4xl md:text-6xl font-semibold relative  z-20 right-12">
                  Vishu <br />
                  Kaushik
                </h1>
                <div className="h-1 w-[70px] bg-primary mt-3 right-12 relative"></div>
                {/* Social Contact Handles */}
                <div className="relative z-20 flex gap-6 mt-14 right-12">
                  <BiLogoGmail className="text-2xl hover:scale-125 cursor-pointer duration-200" />
                  <FaLinkedin className="text-2xl hover:scale-125 cursor-pointer duration-200" />
                  <FaInstagram className="text-2xl hover:scale-125 cursor-pointer duration-200" />
                </div>
              </div>

              <div className="absolute bottom-0 -right-10 md:-right-32">
                <img
                  src={Person}
                  alt=""
                  className=" w-[150px] sm:w-[250px] md:w-full scale-100 relative z-10"
                />
              </div>
            </div>
            {/* text content section */}
            <div className="space-y-8 ">
              <p className="text-sm opacity-50 tracking-widest font-serif translate-y-3">
                -Introduction
              </p>
              <h1 className="text-2xl lg:text-3xl">
                Software Engineer and Developer based in India
              </h1>
              <p className="text-sm leading-6 opacity-70">
                I'm an Indian software developer and engineer that is excellent
                at addressing problems and constantly comes up with creative
                solutions. My love of technology motivates me to keep becoming
                better and strives to create innovative apps that have a
                significant influence on users' lives.
              </p>
              <button className="border-b-2 group  text-primary p-1 text-xl font-bold flex items-center gap-2 justify-center">
                My Story{" "}
                <FaArrowRight className="text-sm group-hover:translate-x-3 transition duration-200" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Hero;
