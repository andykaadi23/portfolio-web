import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import img1 from "../assets/portfolio-img1.png";
import img2 from "../assets/portfolio-img2.png";
import img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight text-gradient-2">
                My Latest <br />
                Work.
              </h2>
              <p className="max-w-sm mb-16">
                See the latest addition to my portfolio. Visit my latest work
                and observe the progression of my skills and techniques.
              </p>
              {/* <button className="btn btn-sm">View all projects</button> */}
              <div className="flex justify-between items-center">
                <a
                  href="https://www.instagram.com/timberdik/"
                  className="btn btn-sm flex justify-center items-center"
                  target="_blank"
                  rel="noreferrer"
                >
                  View all projects
                </a>
              </div>
            </div>

            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div
                className="group-hover:bg-black/70 w-full h-full absolute 
                          z-40 transition-all duration-300"
              ></div>

              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img1}
                alt="work1"
              />

              <div
                className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all
                        duration-500 z-50"
              >
                <span className="text-gradient-2">UI/UX Design</span>
              </div>

              <div
                className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all
                        duration-700 z-50"
              >
                <span className="text-3xl text-white">
                  Music App UI Design??????
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div
                className="group-hover:bg-black/70 w-full h-full absolute 
                          z-40 transition-all duration-300"
              ></div>

              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img2}
                alt="work2"
              />

              <div
                className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all
                        duration-500 z-50"
              >
                <span className="text-gradient-2">3D Design</span>
              </div>

              <div
                className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all
                        duration-700 z-50"
              >
                <span className="text-3xl text-white">Jar 3D Design</span>
              </div>
            </div>
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div
                className="group-hover:bg-black/70 w-full h-full absolute 
                          z-40 transition-all duration-300"
              ></div>

              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={img3}
                alt="work3"
              />

              <div
                className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all
                        duration-500 z-50"
              >
                <span className="text-gradient-2">Digital Imaging</span>
              </div>

              <div
                className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all
                        duration-700 z-50"
              >
                <span className="text-3xl text-white">
                  Happiness in Loneliness
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
