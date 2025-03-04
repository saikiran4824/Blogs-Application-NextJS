import React from 'react';  
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import fs from "fs";
import matter from 'gray-matter';


const dirContent = fs.readdirSync("content", "utf-8")

const blogs = dirContent.map(file=>{
    const fileContent = fs.readFileSync(`content/${file}`, "utf-8")
    const {data} = matter(fileContent)
    return data
})

const Blog = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Main heading for the blog section */}
      <h1 className="text-4xl font-bold mb-8 text-center">Blogs By Sai Kiran</h1>
      
      {/* Grid layout for blog posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="rounded-lg shadow-md overflow-hidden  dark:border-2">
            {/* Blog post image */}
            <img src={blog.image} alt={blog.title} className="h-64 object-cover" />
            
            {/* Blog post content */}
            <div className="p-4">
              {/* Blog post title */}
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              
              {/* Blog post description */}
              <p className=" mb-4">{blog.description}</p>
              
              {/* Blog post author and date */}
              <div className="text-sm  mb-4">
                <span>By {blog.author}</span>
              </div>
              
              {/* Link to the full blog post */}
              <Link href={`/blogpost/${blog.slug}`} className={buttonVariants({ variant: "outline" })}>Read</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Blog;