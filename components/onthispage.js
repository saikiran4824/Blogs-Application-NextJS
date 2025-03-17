"use client";
import React, { useEffect, useState } from "react";
import parse from "html-react-parser";

const OnThisPage = ({ htmlContent }) => {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    // Parse the HTML content and extract h2 headings
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlContent;
    const h2Elements = tempDiv.querySelectorAll("h2");
    const h2Data = Array.from(h2Elements).map((h2) => ({
      text: h2.textContent,
      id: h2.id,
    }));
    setHeadings(h2Data);
  }, [htmlContent]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-50px 0px -80% 0px", threshold: 0.1 }
    );

    headings.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [headings]);

  return (
    <div className="hidden md:block">
      <div className="on-this-page fixed top-24 right-14 w-64 p-4 bg-white dark:bg-inherit shadow-lg rounded-lg">
        <h2 className="text-md font-bold my-2 text-gray-900 dark:text-gray-100">
          On This Page
        </h2>
        <ul className="text-sm space-y-1">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className={`block text-gray-800 dark:text-gray-100 px-2 py-1 rounded-md transition-colors ${
                  activeId === heading.id
                    ? "underline"
                    : "hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OnThisPage;
