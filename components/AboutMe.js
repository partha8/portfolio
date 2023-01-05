import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { list, item } from "../animation.config";
import Image from "next/image";
import partha from "../public/partha.jpg";

export const AboutMe = () => {
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
      className=" min-h-screen flex flex-col justify-evenly mb-20 snap-center"
    >
      <motion.h2
        variants={item}
        className="text-5xl text-center font-semibold dark:text-white mb-8 border-b border-b-gray-600 pb-6"
      >
        About Me
      </motion.h2>
      <div className=" w-full flex flex-col items-center justify-center">
        <motion.div
          variants={item}
          className="bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 relative overflow-hidden  md:h-80 md:w-80 border-4 "
        >
          <Image src={partha} alt="profile" />
        </motion.div>
        <motion.p
          variants={item}
          className="text-xl text-center py-5 leading-8 text-gray-800 dark:text-gray-200 flex-1"
        >
          Hi, I am Partha Pratim Sarma, a{" "}
          <span className=" text-teal-500 ">mechanical engineer</span> turned{" "}
          <span className=" text-teal-500 ">frontend developer</span> from
          India, who just loves building and breaking stuff. I have been
          creating applications since the beginning of the pandemic, and made
          countless side projects, and possess magical powers of using react to
          build delightful user interfaces.
          <br />
          <br />
          When I am not coding, you will find me cooking, baking, or sketching!
        </motion.p>
      </div>
    </motion.section>
  );
};
