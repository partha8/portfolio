import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { list, item } from "../animation.config";
import Image from "next/image";

import reactjs from "../public/reactjs.png";
import js from "../public/js.png";
import html from "../public/html.png";
import css from "../public/css.png";
import nodejs from "../public/nodejs.png";
import redux from "../public/redux.png";
import mongodb from "../public/mongodb.png";
import tailwindcss from "../public/tailwindcss.png";

export const Skills = () => {
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
    <motion.section
      ref={ref}
      initial="hidden"
      animate={control}
      variants={list}
      className="snap-center mb-20"
    >
      <motion.h2
        variants={item}
        className="text-5xl text-center font-semibold dark:text-white mb-8 border-b border-b-gray-600 pb-6 "
      >
        Skills
      </motion.h2>
      <motion.div
        variants={item}
        className=" flex flex-wrap gap-6 justify-center items-center"
      >
        <Image alt="html" src={html} width={70} />
        <Image alt="css" src={css} width={90} />
        <Image alt="js" src={js} width={60} />
        <Image alt="reactjs" src={reactjs} width={75} />
        <Image alt="nodejs" src={nodejs} width={70} />
        <Image alt="mongodb" src={mongodb} width={70} />
        <Image alt="redux" src={redux} width={70} />
        <Image alt="tailwindcss" src={tailwindcss} width={70} />
      </motion.div>
    </motion.section>
  );
};
