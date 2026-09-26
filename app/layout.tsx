import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://the-ab-blogs.vercel.app"),
  title: { default: "AB Blogs — Random Tech Shit by Anjani Beesu", template: "%s — AB Blogs" },
  description: "Random tech shit by Anjani Beesu — a CS sophomore exploring, building, breaking and learning things on the internet.",
  authors: [{ name: "Anjani Beesu" }],
  openGraph: { title: "AB Blogs", description: "Random tech shit by Anjani Beesu.", type: "website" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2947456082690864"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
