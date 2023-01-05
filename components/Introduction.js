import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { list, item } from "../animation.config";

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { SiHashnode } from "react-icons/si";
export const Introduction = () => {
  const control = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={control}
      variants={list}
      className="h-[70vh] flex flex-col m-auto justify-center items-center mb-20"
    >
      <motion.h3
        variants={item}
        className="text-xl dark:text-white md:text-2xl"
      >
        Hello, I am
      </motion.h3>
      <motion.h3
        variants={item}
        className="text-6xl text-center my-4 text-teal-600 font-medium dark:text-teal-400 md:text-7xl xl:text-8xl"
      >
        Partha Sarma
      </motion.h3>
      <motion.h3
        variants={item}
        className="text-xl py-4 text-center  dark:text-white md:text-2xl"
      >
        CREATIVE FRONT-END WEB DEVELOPER
      </motion.h3>
      <motion.div
        variants={item}
        className="text-4xl flex flex-wrap justify-center gap-16 py-10 text-gray-600 dark:text-gray-400"
      >
        <a href="https://twitter.com/partha_sarma8" target="__blank">
          <AiFillTwitterCircle />
        </a>
        <a href="https://www.linkedin.com/in/partha8/" target="__blank">
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/partha8" target="__blank">
          <AiFillGithub />
        </a>
        <a href="https://parthasarma.hashnode.dev/" target="__blank">
          <SiHashnode />
        </a>
      </motion.div>
    </motion.div>
  );
};
