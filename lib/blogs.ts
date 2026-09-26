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
    slug: "how-to-choose-the-right-programming-language",
    title: "How to Choose the Right Programming Language",
    excerpt: "You do not need to pick the perfect programming language. You need to pick the one that gets you building.",
    date: "2026-09-26",
    readTime: "7 min read",
    tags: ["programming", "beginners", "languages"],
    body: [
      "If you are new to programming, choosing a language can feel weirdly important. You open a search tab and suddenly there are people arguing about Python, JavaScript, Java, C++, Rust, Go, C#, Kotlin and approximately seventeen other things you have never heard of. Everyone has a favorite. Everyone has a reason. And somehow you are supposed to decide which one will define your entire career.",
      "Here is the first thing I wish someone had told me: it does not work like that. Your first programming language is not a tattoo. The useful part is learning how to think like a programmer: breaking a problem into smaller pieces, working with data, controlling program flow, designing functions, debugging, reading documentation and figuring out why the thing you wrote five minutes ago has suddenly decided to stop working. Once those ideas make sense, learning another language becomes much less dramatic.",
      "So instead of asking, \"What is the best programming language?\", ask a better question: \"What do I want to build?\"",
      "## Start with the thing you want to build",
      "The project you want to make should narrow the list for you. If you want to build websites, JavaScript or TypeScript is difficult to avoid because they are central to interactive web applications. If you want to explore data analysis, automation or machine learning, Python is a very practical starting point. If you want native Android development, Kotlin is a natural choice. For Apple platforms, Swift is the obvious native option. If you want to work close to the hardware or learn systems programming, C, C++, Rust or a combination of them can make much more sense.",
      "There is a reason this approach works: languages are tools. You would not choose a screwdriver by asking which screwdriver is objectively the best. You would look at the job in front of you. Programming languages are the same. The interesting question is not which language wins. It is which tool gives you the shortest path from an idea to a working thing.",
      "## A quick map",
      "For web development, JavaScript and TypeScript are the obvious places to look. JavaScript runs in browsers and also has a huge server-side ecosystem through environments such as Node.js. TypeScript builds on JavaScript with static typing, which can make larger codebases easier to reason about.",
      "For data science, scripting and machine learning, Python is a strong general-purpose choice. Its syntax is relatively approachable and its ecosystem is enormous. The official Python documentation describes it as easy to learn and highlights its usefulness for scripting and rapid application development. That does not mean Python is the answer to every problem. It means it is a very useful tool to have.",
      "For mobile development, Kotlin and Swift are the main native choices for Android and Apple platforms respectively. There are also cross-platform technologies that let you target multiple platforms from one codebase, which can be useful when that is the actual constraint of your project.",
      "For games and performance-heavy applications, C++ and C# are both worth knowing about, depending on the engine and ecosystem you want to work with. C++ is common in high-performance game technology, while C# is closely associated with Unity and is also used well beyond games.",
      "For systems programming, operating systems, embedded work and performance-sensitive infrastructure, C, C++ and Rust become much more relevant. These languages make you think more deeply about memory, performance and how software interacts with the machine underneath it.",
      "And then there is Java, which is still a major language in enterprise software and a useful language for learning object-oriented programming and large-scale application development. There is no prize for avoiding it just because it has been around for a while.",
      "## But what if I have absolutely no idea what I want to build?",
      "Then I would not spend three weeks researching languages. Pick one and make something.",
      "Python is a good default if your main goal is to learn programming concepts with relatively little syntactic friction. JavaScript or TypeScript is a good default if the idea of making something visual on the web sounds exciting. C is a good choice if you specifically want to understand what is happening closer to the machine. Java is also perfectly reasonable if it is what your course, college or current projects already use.",
      "The important part is that you actually use the language. Write a calculator. Make a tiny game. Build a command-line tool. Make a terrible website. Automate something annoying. Store some data. Break it. Fix it. Then make the next version slightly less terrible.",
      "The programming community discussion around this question tends to arrive at the same useful conclusion from different directions: choose something relevant to the project you want to work on, and do not collect languages just for the sake of collecting them. One Reddit discussion on choosing a first language includes advice to focus on a language you can get support with, while another commenter argues that learning one language deeply through several increasingly difficult projects is more valuable than knowing many languages superficially. The exact language recommendations in old discussions can age, but that underlying principle is still useful.",
      "## Do not choose based only on salary",
      "Job demand matters. You should absolutely look at the kinds of roles available where you want to work. But choosing a language solely because somebody said it pays well is a questionable strategy.",
      "Languages are only one part of a developer's skill set. Your ability to solve problems, understand data structures, work with databases, use version control, read unfamiliar code, design systems and actually ship software matters too. A language can get you through a door, but knowing how to build things is what makes you useful once you are inside.",
      "Also, job markets change. Frameworks change. Languages evolve. A language that is everywhere today may be less fashionable later, while a language you ignored may suddenly become useful. Build transferable fundamentals instead of betting your entire future on a trend chart.",
      "## What about AI?",
      "This is where the question gets more interesting. AI coding tools can generate syntax, translate code between languages and produce surprisingly large chunks of an application. That makes memorizing language syntax less valuable than it used to be.",
      "It does not make programming knowledge useless. Quite the opposite. If an AI gives you code and you cannot tell whether it is correct, secure, maintainable or even appropriate for your project, you have not really removed the difficult part. You have just moved it somewhere else.",
      "Understanding the language you use helps you review generated code, debug it, modify it and make architectural decisions. The more complicated the project becomes, the more important that understanding gets.",
      "## My actual rule for choosing a language",
      "If I had to reduce this entire post to one decision tree, it would be this:",
      "Want to build websites? Start with JavaScript or TypeScript. Want to learn programming with a gentle starting point or explore automation and data? Try Python. Want native Android apps? Look at Kotlin. Want native Apple apps? Learn Swift. Want games? Look at C# with Unity or C++ with Unreal and other performance-oriented tools. Want systems and low-level programming? Explore C, C++ or Rust. Already have a college course using Java? Congratulations, you have a perfectly valid reason to learn Java.",
      "And if you are still staring at the list thinking, \"But which one should I pick?\" Pick the one that makes you want to open your editor and build something tonight.",
      "Because the best first programming language is not necessarily the most powerful, the newest or the one with the highest salary. It is the one you will actually use long enough to stop being a beginner."
    ]
  }
];

export function getBlog(slug: string) {
  return blogs.find((blog) => blog.slug === slug);
}