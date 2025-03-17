"use client"; // Ensure this runs on the client side

import React, { useEffect, useState } from "react";
import { notFound } from "next/navigation";
import rehypeDocument from "rehype-document";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import OnThisPage from "@/components/onthispage";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import ScrollToTopButton from "@/components/scrollToTopButton";
import matter from "gray-matter";

export default function Page({ params }) {
  const [blogData, setBlogData] = useState(null);
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(`/content/${params.slug}.md`);
        if (!response.ok) {
          notFound();
          return;
        }
        const markdownText = await response.text();

        // Parse front matter
        const { content, data } = matter(markdownText);

        // Convert Markdown to HTML
        const processor = unified()
          .use(remarkParse)
          .use(remarkRehype)
          .use(rehypeDocument, { title: data.title || "Blog Post" })
          .use(rehypeFormat)
          .use(rehypeStringify)
          .use(rehypeSlug)
          .use(rehypeAutolinkHeadings)
          .use(rehypePrettyCode, {
            theme: "github-dark",
            transformers: [
              transformerCopyButton({
                visibility: "always",
                feedbackDuration: 3_000,
              }),
            ],
          });

        const processedHtml = (await processor.process(content)).toString();
        setHtmlContent(processedHtml);
        setBlogData(data);
      } catch (error) {
        console.error("Error fetching markdown file:", error);
        notFound();
      }
    };

    fetchMarkdown();
  }, [params.slug]);

  if (!blogData)
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{blogData.title}</h1>
      <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic md:w-1/2">
        &quot;{blogData.description}&quot;
      </p>
      <div className="flex gap-2">
        <p className="text-sm text-gray-500 mb-4 italic">By {blogData.author}</p>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        className="prose dark:prose-invert"
      ></div>
      <OnThisPage htmlContent={htmlContent} />
      <ScrollToTopButton />
      <footer className=" text-white dark:text-black py-8 my-8">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className=" text-center text-gray-400 dark:text-white text-sm border-t border-gray-700 pt-4">
          <p>© {new Date().getFullYear()} Sai Kiran 💖 Preethi. All rights reserved.</p>
        </div>
      </div>
    </footer>

    </div>
  );
}
