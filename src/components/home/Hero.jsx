import React from "react";
import { home } from "../data/yummyData";
import Typewriter from "typewriter-effect";

export const Hero = () => {
  return (
    <>
      <section className="hero">
        {home.map((val, i) => (
          <div key={i} className="heroContainer">
            <h3 data-aos="fade-right">{val.text}</h3>
            <h1>
              <Typewriter
                options={{
                  strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p data-aos="fade-up-left">{val.desc}</p>
            <button data-aos="fade-up-right" className="primaryBtn">
              Download CV
            </button>
          </div>
        ))}
      </section>
    </>
  );
};
