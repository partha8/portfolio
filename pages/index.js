import Head from "next/head";
import Image from "next/image";

//images, pngs
import logo from "../public/ps.png";
import { Introduction, Projects, Skills, AboutMe } from "../components";
import { motion } from "framer-motion";
import { list, item } from "../animation.config";
import { useEffect, useState } from "react";
import { Loader } from "../components/Loader";

export default function Home() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [loader]);

  return (
    <div className="dark scroll-smooth h-screen w-screen overflow-y overflow-x-hidden">
      <Head>
        <title>Partha Sarma</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      {loader ? (
        <Loader />
      ) : (
        <>
          <motion.main
            initial="hidden"
            animate="visible"
            variants={list}
            className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 "
          >
            <motion.nav
              variants={item}
              className="pt-10 mb-10 sm:mb-0 lg:mb-0 xl:mb-0 2xl:mb-0 flex justify-between items-center dark:text-white"
            >
              <motion.div>
                <Image alt="logo" width={80} height={80} src={logo} />
              </motion.div>
              <motion.a
                className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8 h-fit w-fit"
                href="https://drive.google.com/file/d/1TJa9pp85Yh5xylkWdCfyrYsG2ztjCSMP/view?usp=sharing"
                target="__blank"
              >
                Resume
              </motion.a>
            </motion.nav>

            <motion.div variants={item}>
              <Introduction />

              <AboutMe />

              <Skills />

              <Projects />
            </motion.div>
          </motion.main>
          <motion.footer className=" px-10 dark:bg-gray-900 md:px-20 lg:px-40 py-6 snap-start">
            <p className="text-xl text-center leading-8  text-gray-800 dark:text-gray-200">
              Made with love and <span className=" text-teal-500 ">NextJS</span>{" "}
              by <span className=" text-teal-500 ">Partha</span>
            </p>
          </motion.footer>
        </>
      )}
    </div>
  );
}
