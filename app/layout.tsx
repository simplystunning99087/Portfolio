import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manivel Mughilan | AI/ML Engineer & Full-Stack Developer | Portfolio",
  description: "Professional portfolio of Manivel Mughilan - AI/ML Engineer specializing in end-to-end AI systems, computer vision, embedded ML, and full-stack development. B.Tech student at VIT Chennai. Available for internships.",
  keywords: "AI Engineer, Machine Learning, Python, Computer Vision, Embedded ML, ESP32, Full-Stack Developer, RAG Systems, LLM, Web Development, DevOps, Hackathon Winner",
  authors: [{ name: "Manivel Mughilan" }],
  openGraph: {
    title: "Manivel Mughilan | AI/ML Engineer & Full-Stack Developer",
    description: "Building end-to-end AI systems from data capture to hardware deployment. Passionate about intelligent automation and real-world impact.",
    type: "website",
    url: "https://manivel-mughilan.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manivel Mughilan | AI/ML Engineer",
    description: "AI/ML Engineer specializing in end-to-end intelligent systems and full-stack development.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0a0e27" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="description" content="Professional portfolio of Manivel Mughilan - AI/ML Engineer & Full-Stack Developer" />
        <link rel="canonical" href="https://manivel-mughilan.vercel.app" />
      </head>
      <body className="bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
