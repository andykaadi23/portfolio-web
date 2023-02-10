import React from "react";
import Image from "../assets/avatar.svg";
import { FaGithub, FaInstagram, FaDribbble } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[35px] font-bold leading-[0.8] lg:text-[90px]"
            >
              ANDYKA <span>ADI</span>
            </motion.h1>

            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[32px] lg:text-[50px] font-secondary font-semibold 
            uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={[
                  "Frontend Enginner",
                  2000,
                  "UI/UX Designer",
                  2000,
                  "Digital Imaging Artist",
                  2000,
                ]}
                speed={50}
                // className="text-accent"
                className="text-gradient-2"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 mx-w-lg mx-auto lg:mx-0"
            >
              I'm interested in UI/UX Design and Frontend Development and am
              currently exploring it. I also enjoy learning new things and am
              able to work in groups or individually.
            </motion.p>

            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <a
                href="https://www.linkedin.com/in/andyka-adi-pratama/"
                className="btn btn-lg flex justify-center items-center"
                target="_blank"
                rel="noreferrer"
              >
                Contact me
              </a>
              <Link
                to="work"
                smooth={true}
                spy={true}
                className="text-gradient btn-link cursor-pointer"
              >
                My Portfolio
              </Link>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a
                href="https://www.instagram.com/timberdik/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://github.com/andykaadi23?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://dribbble.com/andykaadi"
                target="_blank"
                rel="noreferrer"
              >
                <FaDribbble />
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[400px]"
          >
            <img src={Image} alt="foto" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
