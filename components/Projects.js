import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { list, item } from "../animation.config";
import { ProjectCard } from "./ProjectCard";
import { projects } from "../data";

export const Projects = () => {
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
      // animate="visible"
      animate={control}
      variants={list}
      className=" min-h-screen snap-start"
    >
      <motion.h2
        variants={item}
        className="text-5xl text-center font-semibold dark:text-white mb-8 border-b border-b-gray-600 pb-6 "
      >
        Projects
      </motion.h2>

      <div className="flex flex-col gap-10">
        {projects.map((project, index) => {
          return <ProjectCard key={index} {...project} />;
        })}
      </div>
    </motion.section>
  );
};
