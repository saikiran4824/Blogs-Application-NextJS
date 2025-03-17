---
title: SSR Next.js
description: Learn how to build modern web applications using Next.js, a powerful React framework.
slug: ssr-nextjs
author: Sai Kiran
image: https://miro.medium.com/v2/resize:fit:1400/1*1itDSqxMNCT_XMksG99r-A.png
---

# Next.js Tutorial: A Complete Guide

Next.js is a React framework that enables server-side rendering (SSR) and static site generation (SSG) for modern web applications. This guide will introduce you to Next.js, its core features, and how to set up a project using it.

## What is Next.js?

Next.js is an open-source framework built on top of React that provides features like:

- **Server-Side Rendering (SSR)** – Improves performance by rendering pages on the server.
- **Static Site Generation (SSG)** – Pre-renders pages at build time for faster load speeds.
- **Client-Side Rendering (CSR)** – Allows dynamic fetching and rendering of data on the client.
- **Automatic Code Splitting** – Optimizes performance by loading only the required JavaScript.
- **API Routes** – Allows backend logic directly within a Next.js app.
- **Image Optimization** – Built-in support for optimized image handling.

## Setting Up Next.js

### 1. Install Next.js

To create a Next.js application, run the following command:

```bash
npx create-next-app@latest my-next-app
cd my-next-app
npm run dev
```

This will start the development server at `http://localhost:3000/`.

### 2. Project Structure

A Next.js project typically contains the following directories:

- **pages/** – Stores application routes and pages.
- **public/** – Contains static assets (images, icons, etc.).
- **styles/** – CSS files and global styles.
- **components/** – Reusable UI components.

### 3. Creating Pages in Next.js

Next.js follows a file-based routing system. Any file inside the `pages/` directory automatically becomes a route.

#### Example: Creating a Home Page

```jsx
// pages/index.js
export default function Home() {
  return <h1>Welcome to Next.js!</h1>;
}
```

### 4. Linking Between Pages

Use the `next/link` component to navigate between pages without reloading.

```jsx
import Link from 'next/link';
export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/about">Go to About Page</Link>
    </div>
  );
}
```

### 5. Fetching Data in Next.js

Next.js provides three ways to fetch data:

- **getServerSideProps** – Fetches data at request time (SSR).
- **getStaticProps** – Fetches data at build time (SSG).
- **getStaticPaths** – Prepares dynamic routes at build time.

#### Example: Server-Side Rendering (SSR)

```jsx
export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await res.json();
  return { props: { data } };
}
export default function Post({ data }) {
  return <h1>{data.title}</h1>;
}
```

#### Example: Static Site Generation (SSG)

```jsx
export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await res.json();
  return { props: { data } };
}
export default function Post({ data }) {
  return <h1>{data.title}</h1>;
}
```

### 6. Creating API Routes

Next.js allows you to create API endpoints using the `/pages/api` directory.

#### Example: Creating an API Route

```javascript
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello, API!' });
}
```

Access the endpoint at `http://localhost:3000/api/hello`.

### 7. Deploying Next.js Applications

Next.js applications can be deployed on platforms like:

- **Vercel** (Recommended)
- **Netlify**
- **AWS, Firebase, or DigitalOcean**

To deploy on Vercel, run:

```bash
npm install -g vercel
vercel
```

## Advantages of Next.js Over Other Frameworks

1. **Improved Performance** – Server-side rendering enhances page load speed.
2. **SEO-Friendly** – Pre-rendered pages improve search engine rankings.
3. **Automatic Code Splitting** – Loads only necessary JavaScript.
4. **Full-Stack Capabilities** – Built-in API routes enable backend logic.
5. **Hybrid Rendering** – Supports SSR, SSG, and CSR in one application.
6. **Image Optimization** – Provides automatic image resizing and compression.

## Conclusion

Next.js is a powerful framework that simplifies building React applications with enhanced performance, SEO, and flexibility. Whether you are building static sites, dynamic applications, or full-stack projects, Next.js is a great choice. 🚀
