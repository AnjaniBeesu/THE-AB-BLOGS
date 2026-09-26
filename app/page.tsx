import Link from "next/link";
import { blogs } from "@/lib/blogs";

export default function Home() {
  return (
    <main className="site-shell landing-shell">
      <aside className="landing-about">
        <AuthorFooter />
      </aside>

      <section className="content-column landing-content">
        <section className="hero">
          <p className="eyebrow">THE INTERNET CORNER</p>
          <h1>Things I build,<br />think &amp; obsess over.</h1>
          <p className="hero-copy">I&apos;m Anjani, a CS sophomore exploring technology one weird rabbit hole at a time.</p>
        </section>

        <div className="section-heading"><span>01 / LATEST</span><span>{blogs.length} posts</span></div>
        <section className="post-list">
          {blogs.map((blog) => (
            <Link className="post-card" href={`/blog/${blog.slug}`} key={blog.slug}>
              <div>
                <span className="post-date">{blog.date}</span>
                <h2>{blog.title}</h2>
                <p>{blog.excerpt}</p>
              </div>
              <span className="arrow">↗</span>
            </Link>
          ))}
        </section>
      </section>
    </main>
  );
}

function AuthorFooter() {
  return (
    <div className="author-footer">
      <p className="eyebrow">ABOUT THE HUMAN</p>
      <h2>Anjani Beesu</h2>
      <p>A CS sophomore exploring the things that catch my curiosity. I like to spend my time building random projects, experimenting with new technology, and turning whatever rabbit hole I fall into into something worth writing about. When I&apos;m not coding, I&apos;m probably reading a light novel or getting lost in a webcomic.</p>
      <div className="links">
        <a href="https://github.com/AnjaniBeesu" target="_blank" rel="noreferrer">GitHub ↗</a>
        <a href="https://www.linkedin.com/in/anjanibeesu/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href="mailto:anjanibeesu@gmail.com">Email ↗</a>
      </div>
      <small>AB Blogs belongs to Anjani Beesu.</small>
    </div>
  );
}
