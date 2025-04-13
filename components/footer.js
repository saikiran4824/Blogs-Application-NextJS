'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

export default function Footer() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const blogData = [
      {
        title: 'A Comprehensive Guide to Frontend Frameworks',
        slug: 'A-Comprehensive-Guide-to-Frontend-Frameworks',
      },
      {
        title: 'The Role of AI in Development – Should You Learn Everything or Leverage AI?',
        slug: 'ai-in-development',
      },
      {
        title: 'Software Architecture Patterns- Monolithic, Microservices, MVC, and More',
        slug: 'software-architecture-patterns',
      },
      {
        title: 'How to Deploy a Full Stack Application',
        slug: 'deploy-fullstack-app',
      },
      {
        title: 'Comprehensive Guide to Major AWS Services and Their Use Cases',
        slug: 'aws-services-guide',
      },
      {
        title: 'System Design: Importance, Approach, and Best Practices',
        slug: 'system-design-guide',
      },
      {
        title: 'DevOps Life Cycle: Tools and Approach for Continuous Integration and Delivery',
        slug: 'devops-lifecycle-guide',
      },
      {
        title: 'UI-UX Design Principles',
        slug: 'ui-ux-design-principles',
      },
      {
        title: 'PHP Development & CRUD Operations',
        slug: 'php-development-and-crud-operatons',
      },
      {
        title: 'Introduction to Spring Boot',
        slug: 'introduction-to-spring-boot',
      },
      {
        title: 'Introduction to Tailwind CSS',
        slug: 'introduction-to-tailwind-css',
      },
      {
        title: 'MERN Stack Tutorial',
        slug: 'mern-stack-tutorial',
      },
      {
        title: 'Introduction to MongoDB',
        slug: 'introduction-to-mongodb',
      },
      {
        title: 'Introduction to Node.js',
        slug: 'introduction-to-nodejs',
      },
      {
        title: 'SSR Next.js',
        slug: 'ssr-nextjs',
      }
    ];
    
    const shuffledBlogs = [...blogData].sort(() => Math.random() - 0.5);
    setBlogs(shuffledBlogs.slice(0, 6));
  }, []);

  return (
    <footer className="bg-inherit text-gray-700 dark:text-white py-8 mt-10 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div>
          <h3 className="text-2xl my-4 underline font-bold text-gray-700 dark:text-white">
            Featured Blogs
          </h3>
          <ul className="mt-2">
            {blogs.map((blog, index) => (
              <li key={index} className="mt-2 text-lg font-semibold">
                <Link
                  href={`/blogpost/${blog.slug}`}
                  className="hover:text-gray-400"
                >
                  ➡️{blog.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <Button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          variant="default"
          size="sm"
          className="w-full sm:w-auto mt-4   shadow-lg hover:bg-primary/90 dark:hover:bg-primary/80 transition-all"
        >
          Move to Top 🔝
        </Button>

      </div>
      <div className="underline mt-6 pt-4 text-center text-xl">
          &copy; {new Date().getFullYear()} Sai Kiran Tech Blogs.
        </div>
    </footer>
  );
}
