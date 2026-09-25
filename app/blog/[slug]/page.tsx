import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs, getBlog } from "@/lib/blogs";

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlog(slug);
  if (!blog) return {};
  return {
    title: blog.title,
    description: blog.excerpt,
    authors: [{ name: "Anjani Beesu" }],
    openGraph: { title: blog.title, description: blog.excerpt, type: "article", publishedTime: blog.date, authors: ["Anjani Beesu"] },
  };
}

export default async function BlogPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = getBlog(slug);
  if (!blog) notFound();

  const url = `https://the-ab-blogs.vercel.app/blog/${blog.slug}`;
  const jsonLd = { "@context": "https://schema.org", "@type": "BlogPosting", headline: blog.title, description: blog.excerpt, datePublished: blog.date, author: { "@type": "Person", name: "Anjani Beesu" }, url };

  return (
    <main className="site-shell article-shell">
      <aside className="ad-rail" aria-label="Advertisement space"><span>ADVERTISEMENT</span></aside>
      <article className="content-column">
        <header className="site-header article-header"><Link href="/" className="wordmark">AB BLOGS</Link><Link href="/">← all posts</Link></header>
        <div className="article-meta"><span>{blog.date}</span><span>{blog.readTime}</span></div>
        <h1 className="article-title">{blog.title}</h1>
        <p className="article-excerpt">{blog.excerpt}</p>
        <div className="article-tags">{blog.tags.map((tag) => <span key={tag}>#{tag}</span>)}</div>
        <div className="article-body">{blog.body.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
        <AuthorFooter />
      </article>
      <div className="mobile-ad" aria-label="Advertisement space">ADVERTISEMENT</div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </main>
  );
}

function AuthorFooter() {
  return (
    <footer className="author-footer">
      <p className="eyebrow">ABOUT THE HUMAN</p>
      <h2>Anjani Beesu</h2>
      <p>A CS sophomore exploring the things that catch my curiosity. I like to spend my time building random projects, experimenting with new technology, and turning whatever rabbit hole I fall into into something worth writing about. When I'm not coding, I'm probably reading a light novel or getting lost in a webcomic.</p>
      <div className="links">
        <a href="https://github.com/AnjaniBeesu" target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href="https://www.linkedin.com/in/anjanibeesu/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href="mailto:anjanibeesu@gmail.com">Email ↗</a>
      </div>
      <small>AB Blogs belongs to Anjani Beesu.</small>
    </footer>
  );
}