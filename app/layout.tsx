import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://the-ab-blogs.vercel.app"),
  title: { default: "The AB Blogs", template: "%s — The AB Blogs" },
  description: "The AB Blogs by Anjani Beesu, a CS sophomore exploring, building, and writing about technology.",
  authors: [{ name: "Anjani Beesu" }],
  openGraph: { title: "The AB Blogs", description: "The AB Blogs by Anjani Beesu.", type: "website" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head />
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
