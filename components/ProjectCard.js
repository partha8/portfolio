import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { list, item } from "../animation.config";
import Image from "next/image";

import seeker from "../public/seeker.png";
import melonn from "../public/melonn.png";
import algernclothing from "../public/algernclothing.png";
import algernui from "../public/algernui.png";
import weebculture from "../public/weebculture.png";
export const ProjectCard = (project) => {
  const { name, description, live, github, image } = project;
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
      // animate="visible"
      animate={control}
      variants={list}
      className=" flex flex-col-reverse bg-gray-800 p-6 gap-4 rounded-lg lg:flex-row "
    >
      <motion.div
        variants={item}
        className="flex flex-col gap-6 justify-center flex-1"
      >
        <h3 className="dark:text-gray-200 text-3xl font-semibold ">{name}</h3>
        <p className="text-xl leading-8 text-gray-800 dark:text-gray-200 ">
          {description}
        </p>
        <div className="flex flex-wrap gap-6">
          <a
            href={live}
            target="__blank"
            className="text-xl bg-teal-500 text-white px-3 py-1 rounded-lg mr-4"
          >
            Live Demo
          </a>
          <a
            href={github}
            target="__blank"
            className="text-xl border border-teal-500 text-teal-500 px-3 py-1 rounded-lg"
          >
            Source Code
          </a>
        </div>
      </motion.div>

      <motion.div variants={item} className=" relative lg:w-6/12">
        {/* <Image
          className="rounded-lg object-cover"
          alt="cover"
          src={image}
          fill
        /> */}
        <img src={image} alt="" />
      </motion.div>
    </motion.div>
  );
};
