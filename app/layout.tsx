import type { Metadata } from "next";
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
      <body>{children}</body>
    </html>
  );
}