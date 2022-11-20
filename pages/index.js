import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";
import { SiHashnode } from "react-icons/si";

import Image from "next/image";
import seeker from "../public/seeker.png";
import melonn from "../public/melonn.png";
import algernclothing from "../public/algernclothing.png";
import algernui from "../public/algernui.png";
import weebculture from "../public/weebculture.png";

import partha from "../public/partha.jpg";
import logo from "../public/ps.png";

import reactjs from "../public/reactjs.png";
import js from "../public/js.png";
import html from "../public/html.png";
import css from "../public/css.png";
import nodejs from "../public/nodejs.png";
import redux from "../public/redux.png";
import mongodb from "../public/mongodb.png";
import tailwindcss from "../public/tailwindcss.png";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="dark">
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

      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40 scroll-smooth">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <Image alt="logo" width={80} height={80} src={logo} />
            <ul className="flex items-center">
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/file/d/1RvfHQ6q82_IQRZEvAXuMi79NjSvy_Ak1/view?usp=share_link"
                  target="__blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="h-[60vh] flex flex-col justify-center items-center">
            <h3 className="text-xl dark:text-white md:text-2xl">Hello, I am</h3>
            <h3 className="text-6xl text-center my-4 text-teal-600 font-medium dark:text-teal-400 md:text-7xl xl:text-8xl">
              Partha Sarma
            </h3>
            <h3 className="text-xl py-4 text-center  dark:text-white md:text-2xl">
              CREATIVE FRONT-END WEB DEVELOPER
            </h3>
            <div className="text-4xl flex flex-wrap justify-center gap-16 py-10 text-gray-600 dark:text-gray-400">
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
            </div>
          </div>
        </section>

        <section className=" min-h-screen flex flex-col">
          <h2 className="text-5xl text-center font-semibold dark:text-white mb-8 border-b border-b-gray-600 pb-6">
            About me
          </h2>
          <div className=" w-full flex flex-col items-center justify-center">
            <div className="bg-gradient-to-b from-teal-500 rounded-full w-60 h-60 relative overflow-hidden  md:h-80 md:w-80 border-4 ">
              <Image src={partha} alt="profile" />
            </div>
            <p className="text-xl text-center py-5 leading-8 text-gray-800 dark:text-gray-200 flex-1">
              Hi, I am Partha Pratim Sarma, a{" "}
              <span className=" text-teal-500 ">mechanical engineer</span>{" "}
              turned <span className=" text-teal-500 ">frontend developer</span>{" "}
              from India, who just loves building and breaking stuff. I started
              with HTML/CSS during the pandemic and never looked back.
              <br />
            </p>
          </div>
        </section>

        <section className="mb-20  ">
          <h2 className="text-5xl text-center font-semibold dark:text-white mb-8 border-b border-b-gray-600 pb-6 ">
            Skills
          </h2>
          <div className=" flex flex-wrap gap-6 justify-center  items-center">
            <Image alt="html" src={html} width={70} />
            <Image alt="css" src={css} width={90} />
            <Image alt="js" src={js} width={60} />
            <Image alt="reactjs" src={reactjs} width={75} />
            <Image alt="nodejs" src={nodejs} width={70} />
            <Image alt="mongodb" src={mongodb} width={70} />
            <Image alt="redux" src={redux} width={70} />
            <Image alt="tailwindcss" src={tailwindcss} width={70} />
          </div>
        </section>

        <section className=" min-h-screen ">
          <h2 className="text-5xl text-center font-semibold dark:text-white mb-8 border-b border-b-gray-600 pb-6 ">
            Side Projects
          </h2>

          <div className="flex flex-col gap-10">
            <div className=" flex flex-col-reverse bg-gray-800 p-6 gap-4 rounded-lg lg:flex-row ">
              <div className="flex flex-col gap-6 justify-center flex-1">
                <h3 className="dark:text-gray-200 text-3xl font-semibold ">
                  Seeker
                </h3>
                <p className="text-xl leading-8 text-gray-800 dark:text-gray-200 ">
                  Seeker is a social media application built using ReactJS with
                  TypeScript with Redux-Toolkit for state management. You can
                  share your views, follow/unfollow your friends, like/dislike
                  their posts and more!
                </p>
                <div>
                  <a
                    href="https://seeker-f3c5d.web.app/"
                    target="__blank"
                    className="text-xl bg-teal-500 text-white px-3 py-1 rounded-lg mr-4"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/partha8/seeker"
                    target="__blank"
                    className="text-xl border border-teal-500 text-teal-500 px-3 py-1 rounded-lg"
                  >
                    Source Code
                  </a>
                </div>
              </div>

              <div className="lg:w-6/12">
                <Image
                  className="rounded-lg object-cover"
                  alt="cover"
                  src={seeker}
                />
              </div>
            </div>

            <div className=" flex flex-col-reverse  bg-gray-800 p-6 gap-4 rounded-lg lg:flex-row ">
              <div className="flex flex-col gap-6 justify-center flex-1">
                <h3 className="dark:text-gray-200 text-3xl font-semibold ">
                  Melonn
                </h3>

                <p className="text-xl leading-8 text-gray-800 dark:text-gray-200 ">
                  Melonn is a note taking application made using ReactJS with
                  Firebase as the backend. Various customisation options are
                  available to better classify your notes!
                </p>
                <div>
                  <a
                    href="https://melonn-8c85c.web.app/"
                    target="__blank"
                    className="text-xl bg-teal-500 text-white px-3 py-1 rounded-lg mr-4"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/partha8/melonn"
                    target="__blank"
                    className="text-xl border border-teal-500 text-teal-500 px-3 py-1 rounded-lg"
                  >
                    Source Code
                  </a>
                </div>
              </div>

              <div className=" lg:w-6/12 ">
                <Image
                  className="rounded-lg object-cover"
                  alt="cover"
                  src={melonn}
                />
              </div>
            </div>

            <div className=" flex flex-col-reverse  bg-gray-800 p-6 gap-4 rounded-lg lg:flex-row ">
              <div className="flex flex-col gap-6 justify-center flex-1">
                <h3 className="dark:text-gray-200 text-3xl font-semibold ">
                  Weeb Culture
                </h3>

                <p className="text-xl leading-8 text-gray-800 dark:text-gray-200 ">
                  A fun video library for people who love anime!
                </p>
                <div>
                  <a
                    href="https://weeb-culture.netlify.app/"
                    target="__blank"
                    className="text-xl bg-teal-500 text-white px-3 py-1 rounded-lg mr-4"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/partha8/weeb-culture"
                    target="__blank"
                    className="text-xl border border-teal-500 text-teal-500 px-3 py-1 rounded-lg"
                  >
                    Source Code
                  </a>
                </div>
              </div>

              <div className=" lg:w-6/12 ">
                <Image
                  className="rounded-lg object-cover"
                  alt="cover"
                  src={weebculture}
                />
              </div>
            </div>

            <div className=" flex flex-col-reverse  bg-gray-800 p-6 gap-4 rounded-lg lg:flex-row ">
              <div className="flex flex-col gap-6 justify-center flex-1">
                <h3 className="dark:text-gray-200 text-3xl font-semibold ">
                  AlgernUI
                </h3>

                <p className="text-xl leading-8 text-gray-800 dark:text-gray-200 ">
                  A components library built using HTML and CSS, consisting of
                  more than 14 component categories and incorporates custom
                  typography system. User can utilise this library to build
                  their projects without any difficulties.
                </p>
                <div>
                  <a
                    href="https://algernui.netlify.app/"
                    target="__blank"
                    className="text-xl bg-teal-500 text-white px-3 py-1 rounded-lg mr-4"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/partha8/algernUI"
                    target="__blank"
                    className="text-xl border border-teal-500 text-teal-500 px-3 py-1 rounded-lg"
                  >
                    Source Code
                  </a>
                </div>
              </div>

              <div className=" lg:w-6/12 ">
                <Image
                  className="rounded-lg object-cover"
                  alt="cover"
                  src={algernui}
                />
              </div>
            </div>

            <div className=" flex flex-col-reverse  bg-gray-800 p-6 gap-4 rounded-lg lg:flex-row ">
              <div className="flex flex-col gap-6 justify-center flex-1">
                <h3 className="dark:text-gray-200 text-3xl font-semibold ">
                  Algern Clothing
                </h3>

                <p className="text-xl leading-8 text-gray-800 dark:text-gray-200 ">
                  Algern Clothing is an e-commerce platform that focuses on
                  stylish and luxury clothing.
                </p>
                <div>
                  <a
                    href="https://algern-clothing-react.netlify.app/"
                    target="__blank"
                    className="text-xl bg-teal-500 text-white px-3 py-1 rounded-lg mr-4"
                  >
                    Live Demo
                  </a>
                  <a
                    href="https://github.com/partha8/algern-clothing-react"
                    target="__blank"
                    className="text-xl border border-teal-500 text-teal-500 px-3 py-1 rounded-lg"
                  >
                    Source Code
                  </a>
                </div>
              </div>

              <div className=" lg:w-6/12 ">
                <Image
                  className="rounded-lg object-cover"
                  alt="cover"
                  src={algernclothing}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className=" px-10 dark:bg-gray-900 md:px-20 lg:px-40 py-6">
        <p className="text-xl text-center leading-8  text-gray-800 dark:text-gray-200">
          Made with love and <span className=" text-teal-500 ">NextJS</span> by{" "}
          <span className=" text-teal-500 ">Partha</span>
        </p>
      </footer>
    </div>
  );
}
