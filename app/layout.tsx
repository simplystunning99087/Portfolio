import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Manivel Mughilan | AI/ML Engineer & Full-Stack Developer",
  description: "AI/ML Engineer and Full-Stack Developer specializing in end-to-end AI systems, computer vision, and embedded machine learning. Available for internships.",
  keywords: "AI, ML, Machine Learning, Python, Computer Vision, Web Development, DevOps",
  openGraph: {
    title: "Manivel Mughilan | AI/ML Engineer & Full-Stack Developer",
    description: "Building end-to-end AI systems from data capture to hardware deployment",
    type: "website",
    url: "https://portfolio-p9.vercel.app",
    images: [
      {
        url: "https://portfolio-p9.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Manivel Mughilan - AI/ML Engineer & Full-Stack Developer",
      },
    ],
  },
  authors: [{ name: "Manivel Mughilan" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0f0f14" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-background text-foreground transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
