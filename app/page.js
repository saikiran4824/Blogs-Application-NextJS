'use client';
import { Button } from '@/components/ui/button';
import Typed from 'typed.js';
import React, { useRef, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Coding Enthusiast',
        'Web Developer',
        'Software Engineer',
        'Frontend Developer',
        'Full-Stack Developer',
        'JavaScript Developer',
        'Prompt Engineer',
        'React.js Developer',
        'Next.js Developer',
        'UI/UX Engineer',
        'Tech Innovator',
        'Open Source Contributor',
        'Problem Solver',
        'Tech Blogger',
        'AI-Powered Developer',
        'TypeScript Enthusiast',

        'DevOps Enthusiast',
        'Performance Optimizer',

        'GraphQL Developer',
        'API Integration Expert',
        'Agile Practitioner',
        'Data Structures & Algorithms Enthusiast',
        'Automation Engineer',
        'CI/CD Specialist',
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
  <section className="container px-4 py-10 mx-auto lg:h-128 lg:flex lg:items-center">
    <div className="w-full text-center lg:text-left lg:w-full">
      <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
        Hey, <span className="font-semibold">I am Sai Kiran</span>{' '}
        <br className="block md:hidden" />
        <span className="font-semibold underline decoration-primary">
          <span ref={el} />
        </span>
      </h1>
    </div>
  </section>
</main>


      <div className="min-h-screen flex items-center justify-center dark:bg-black bg-white text-black dark:text-white p-2">
        <div className="max-w-4xl bg-white dark:bg-inherit p-8 rounded-2xl shadow-lg">
          <h1 className="text-4xl font-bold my-4  text-blue-600 dark:text-blue-400">
            About Me
          </h1>

          <h2 className="text-3xl font-bold text-purple-600 dark:text-purple-400">
            Frontend Developer | Full Stack Developer
          </h2>

          <h2 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mt-6">
            Professional Skills
          </h2>
          <ul className="list-disc list-inside mt-2 text-gray-800 dark:text-gray-300">
            <li>
              <span className="text-pink-600 dark:text-pink-300">
                Frontend Frameworks & Libraries:
              </span>{' '}
              React, Vue.js, Next.js, Angular, Svelte
            </li>
            <li>
              <span className="text-cyan-600 dark:text-cyan-300">
                Programming Languages:
              </span>{' '}
              JavaScript, TypeScript, Python, Java
            </li>
            <li>
              <span className="text-teal-600 dark:text-teal-300">
                UI/UX & Styling:
              </span>{' '}
              Responsive web design, Sass, Material UI, Chakra UI, Bootstrap,
              Tailwind CSS, ShadCN, Framer Motion, Figma, Adobe XD
            </li>
            <li>
              <span className="text-lime-600 dark:text-lime-300">
                State Management:
              </span>{' '}
              Redux, RxJS, Context API, NgRx, Mobx, Vuex
            </li>
            <li>
              <span className="text-purple-600 dark:text-purple-300">
                Data Visualization:
              </span>{' '}
              D3.js, Chart.js, Recharts
            </li>
            <li>
              <span className="text-orange-600 dark:text-orange-300">
                Debugging & Testing:
              </span>{' '}
              Chrome DevTools, Cypress, Selenium, Protractor, Jest, Enzyme,
              React Testing Library, Postman
            </li>
            <li>
              <span className="text-yellow-600 dark:text-yellow-300">
                Version Control & CI/CD:
              </span>{' '}
              Git, GitHub, GitLab, CI/CD pipelines
            </li>
            <li>
              <span className="text-red-600 dark:text-red-300">
                Agile Methodologies:
              </span>{' '}
              Scrum, Kanban, Jira
            </li>
            <li>
              <span className="text-blue-600 dark:text-blue-300">
                Backend & API Integration:
              </span>{' '}
              RESTful APIs, GraphQL, Firebase, Node.js (Express.js), Python
              (Flask/Django)
            </li>
            <li>
              <span className="text-green-600 dark:text-green-300">
                Cloud & Deployment:
              </span>{' '}
              AWS, Docker, Kubernetes, Vercel, Netlify
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 mt-6">
            Professional Strengths
          </h2>
          <ul className="list-disc list-inside mt-2 text-gray-800 dark:text-gray-300">
            <li>
              Collaborative team player with{' '}
              <span className="text-green-600 dark:text-green-300">
                excellent communication skills
              </span>
            </li>
            <li>
              Results-driven with a strong focus on{' '}
              <span className="text-yellow-600 dark:text-yellow-300">
                delivering high-quality, scalable solutions
              </span>
            </li>
            <li>
              Adaptable and responsive to{' '}
              <span className="text-blue-600 dark:text-blue-300">
                changing project requirements
              </span>
            </li>
            <li>
              Passionate about{' '}
              <span className="text-red-600 dark:text-red-300">innovation</span>{' '}
              and staying up-to-date with industry trends
            </li>
          </ul>

          <p className="mt-6 text-lg font-semibold text-yellow-600 dark:text-yellow-400">
            Enthusiastic about building scalable, maintainable applications with
            intuitive user experiences. Open to contract roles, full-time
            opportunities, and collaborations to drive innovation and deliver
            exceptional results. 🚀
          </p>
        </div>
      </div>
    </>
  );
}
