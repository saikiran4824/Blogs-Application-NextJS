"use client"

import React, { useEffect, useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const Blog = () => {
  // State to store blogs
  const [blogs, setBlogs] = useState([]);

  // Fetch blogs from JSON file or API
  useEffect(() => {
    fetch("/blogs.json") // Fetching from public folder
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Blogs By Sai Kiran</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="rounded-lg shadow-md overflow-hidden dark:border-2">
          <Link href={`/blogpost/${blog.slug}`}>
            <img src={blog.image} alt={blog.title} className="h-64 object-cover w-full" />
</Link>
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              <p className="mb-4">{blog.description}</p>
              <div className="text-sm mb-4">
                <span>By {blog.author}</span>
              </div>
              <Link href={`/blogpost/${blog.slug}`} className={buttonVariants({ variant: "outline" })}>
                Read
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
