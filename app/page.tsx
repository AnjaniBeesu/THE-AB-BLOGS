import Link from "next/link";
import { blogs } from "@/lib/blogs";

export default function Home() {
  return (
    <main className="site-shell">
      <aside className="ad-rail" aria-label="Advertisement space"><span>ADVERTISEMENT</span></aside>
      <section className="content-column">
        <header className="site-header">
          <Link href="/" className="wordmark">AB BLOGS</Link>
          <p>random tech shit by <strong>Anjani Beesu</strong></p>
        </header>

        <section className="hero">
          <p className="eyebrow">THE INTERNET CORNER</p>
          <h1>Things I build,<br />break &amp; obsess over.</h1>
          <p className="hero-copy">I&apos;m Anjani, a CS sophomore exploring technology one weird rabbit hole at a time.</p>
        </section>

        <div className="section-heading"><span>01 / LATEST</span><span>{blogs.length} posts</span></div>
        <section className="post-list">
          {blogs.map((blog) => (
            <Link className="post-card" href={`/blog/${blog.slug}`} key={blog.slug}>
              <div><span className="post-date">{blog.date}</span><h2>{blog.title}</h2><p>{blog.excerpt}</p></div>
              <span className="arrow">↗</span>
            </Link>
          ))}
        </section>

        <AuthorFooter />
      </section>
      <div className="mobile-ad" aria-label="Advertisement space">ADVERTISEMENT</div>
    </main>
  );
}

function AuthorFooter() {
  return (
    <footer className="author-footer">
      <p className="eyebrow">ABOUT THE HUMAN</p>
      <h2>Anjani Beesu</h2>
      <p>CS sophomore exploring shit, building things, and documenting the rabbit holes.</p>
      <div className="links">
        <a href="https://github.com/AnjaniBeesu" target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href="#">LinkedIn ↗</a>
        <a href="mailto:YOUR_EMAIL_HERE">Email ↗</a>
      </div>
      <small>AB Blogs belongs to Anjani Beesu.</small>
    </footer>
  );
}