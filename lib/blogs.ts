export type Blog = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  body: string[];
  project?: { label: string; href: string };
};

export const blogs: Blog[] = [
  {
    slug: "welcome-to-ab-blogs",
    title: "Welcome to AB Blogs",
    excerpt: "A tiny corner of the internet for the things I build, break, learn, and become unnecessarily obsessed with.",
    date: "2026-09-25",
    readTime: "2 min read",
    tags: ["meta", "web", "building"],
    body: [
      "I wanted somewhere to write about tech without pretending every experiment needs to become a serious case study.",
      "So this is AB Blogs: random tech shit by Anjani Beesu. I am a CS sophomore exploring the internet one rabbit hole at a time.",
      "Some posts will be polished. Some will be chaotic. A few will probably start with me trying one small thing and somehow ending up three hours deep in documentation.",
      "The goal is simple: build interesting things, understand what I am building, and document the process along the way."
    ]
  }
];

export function getBlog(slug: string) {
  return blogs.find((blog) => blog.slug === slug);
}