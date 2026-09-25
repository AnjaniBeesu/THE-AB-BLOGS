import type { MetadataRoute } from "next";
import { blogs } from "@/lib/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://the-ab-blogs.vercel.app";
  return [
    { url: base, lastModified: new Date() },
    ...blogs.map((blog) => ({ url: `${base}/blog/${blog.slug}`, lastModified: new Date(blog.date) }))
  ];
}