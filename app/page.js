"use client";
import { Button } from "@/components/ui/button";
import Typed from "typed.js";
import React, { useRef, useEffect } from "react";
import Link from "next/link";

export default function Home() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Coding Enthusiast",
        "Web Developer",
        "Software Engineer",
        "Frontend Developer",
        "Full-Stack Developer",
        "JavaScript Developer",
        "Prompt Engineer",
        "React.js Developer",
        "Next.js Developer",
        "UI/UX Engineer",
        "Tech Innovator",
        "Open Source Contributor",
        "Problem Solver",
        "Tech Blogger",
        "AI-Powered Developer",
      ],
      typeSpeed: 100,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left  ">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            Hey, <span className="font-semibold">I am Sai Kiran</span>{" "}
            <span className="font-semibold underline decoration-primary">
              <span ref={el} />
            </span>
          </h1>
        </div>
        
      </section>
      <div className="h-screen flex items-center justify-center my-4 py-5 border-2 dark:bg-inherit bg-white text-blue-600 dark:text-blue-400 p-6">
        <Link href={"/blog"}>
          <div className="text-3xl font-bold ">Go to My Blogs</div>
        </Link>
        </div>
    </main>
    <div className="min-h-screen flex items-center justify-center  dark:bg-black bg-white text-black dark:text-white p-6">
      <div className="max-w-3xl bg-white dark:bg-inherit p-8 rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold my-4 py-4 text-blue-600 dark:text-blue-400">About me :</h1>

        <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400">Frontend Developer | React, JavaScript, HTML5, CSS3</h1>
        <p className="mt-4 text-gray-800 dark:text-gray-300">
          Specializing in high-performance, user-friendly web solutions with a focus on
          <span className="text-blue-600 dark:text-blue-300"> responsive design</span>, <span className="text-blue-600 dark:text-blue-300">data visualization</span>, and <span className="text-blue-600 dark:text-blue-300">web optimization</span>.
          Skilled in <span className="text-green-600 dark:text-green-300">React, Redux, TypeScript, Tailwind CSS, Bootstrap, and Webpack</span>, building scalable and maintainable applications.
        </p>
        <p className="mt-4 text-gray-800 dark:text-gray-300">
          With extensive experience in <span className="text-blue-600 dark:text-blue-300">responsive UI development</span>, I ensure seamless user experiences across all devices, leveraging modern design systems for intuitive, accessible, and visually appealing interfaces.
        </p>
        <p className="mt-4 text-gray-800 dark:text-gray-300">
          I thrive in <span className="text-blue-600 dark:text-blue-300">collaborative environments</span>, working closely with designers, backend developers, and stakeholders to align technical solutions with business goals. Strong communication and adaptability drive my ability to deliver high-quality results in fast-paced settings.
        </p>
        <p className="mt-4 text-gray-800 dark:text-gray-300">
          Passionate about building <span className="text-blue-600 dark:text-blue-300">scalable full-stack applications</span> with the <span className="text-green-600 dark:text-green-300">MERN stack (MongoDB, Express.js, React, Node.js)</span>. Proficient in <span className="text-green-600 dark:text-green-300">data structures and algorithms</span>, optimizing complex tasks for efficiency and scalability.
        </p>
        <p className="mt-4 text-lg font-semibold text-yellow-600 dark:text-yellow-400">
          Always eager to take on challenging projects, innovate, and create impactful solutions through code. 🚀
        </p>
      </div>
    </div>
    </>
  );
}
