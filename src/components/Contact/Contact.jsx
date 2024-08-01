import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Contact = () => {
  return (
    <main className="bg-darkGray text-white">
      <div className="container py-24 lg:py-36">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          {/* left section */}
          <section className="space-y-8 lg:max-w-[380px]">
            <p className="text-sm opacity-50 tracking-widest font-serif translate-y-3">
              -Contact
            </p>
            <h1 className="text-2xl lg:text-3xl">
              Any type of Query & discussion
            </h1>
            <p className="text-sm leading-6 opacity-70">
              Got a question or need to discuss something? Feel free to reach
              out for any type of query or discussion. We're here to help and
              provide clarity on any concerns or topics you have in mind.
            </p>
            <button className="border-b-2 group  text-primary p-1 text-xl font-bold flex items-center gap-2 justify-center">
              {/* Linkedin Profile */}
              Reach Me Out{" "}
              <FaArrowRight className="text-sm group-hover:translate-x-3 transition duration-200" />
            </button>
          </section>
          {/* right side section */}
          <div className="space-y-7">
            <p className="text-3xl">
              You can't use up creativity, the more you use, more you have in
              your significant mind
            </p>
            <p className="text-sm leading-6 opacity-60">
              Creativity is an inexhaustible resource that thrives with use. The
              more you engage your creative mind, the more it expands, leading
              to greater innovation and inspiration. Each creative effort fuels
              further creativity, enhancing your ability to think imaginatively
              and inventively.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
