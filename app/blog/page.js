'use client';

import React, { useState, useEffect } from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

const Blog = () => {
  // State to store blogs and pagination variables
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(6); // Show 6 blogs per page (can be adjusted)

  // Fetch blogs from JSON file or API
  useEffect(() => {
    fetch('/blogs.json') // Fetching from public folder
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error('Error fetching blogs:', error));
  }, []);

  // Pagination logic
  const totalBlogs = blogs.length;
  const totalPages = Math.ceil(totalBlogs / blogsPerPage);

  // Slice the blogs based on the current page
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  // Handlers for pagination buttons
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Scroll to top when the page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Blogs By Sai Kiran</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentBlogs.map((blog, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md overflow-hidden dark:border-2"
          >
            <Link href={`/blogpost/${blog.slug}`}>
              {/* Image with Lazy Loading and Fade-in Transition */}
              <div className="relative h-64 w-full">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-64 w-full object-cover rounded-md transition-opacity duration-500 opacity-0"
                  loading="lazy"
                  onLoad={(e) => e.target.classList.add('opacity-100')} // Fade-in effect
                />
              </div>
            </Link>

            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              <p className="mb-4">{blog.description}</p>
              <div className="text-sm mb-4">
                <span>By {blog.author}</span>
              </div>
              <Link
                href={`/blogpost/${blog.slug}`}
                className={buttonVariants({ variant: 'outline' })}
              >
                Read
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between my-8">
        <Button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded disabled:opacity-50 bg-black text-white dark:bg-white dark:text-black"
        >
          Previous
        </Button>
        
        <Button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded disabled:opacity-50 bg-black text-white dark:bg-white dark:text-black"
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default Blog;
