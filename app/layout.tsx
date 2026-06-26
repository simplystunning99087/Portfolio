import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manivel Mughilan | AI/ML Engineer & Full-Stack Developer",
  description: "AI/ML Engineer and Full-Stack Developer specializing in end-to-end AI systems, computer vision, and embedded machine learning. Available for internships.",
  keywords: "AI, ML, Machine Learning, Python, Computer Vision, Web Development, DevOps",
  openGraph: {
    title: "Manivel Mughilan | AI/ML Engineer & Full-Stack Developer",
    description: "Building end-to-end AI systems from data capture to hardware deployment",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#0a0e27" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
