import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Wael Slama | Full Stack Developer (Next.js, NestJS) Tunisia",
  description:
    "Wael Slama is a Full Stack Developer from Tunisia specializing in Next.js, NestJS, PostgreSQL and AI-powered web applications. View projects, experience and skills.",
  keywords: [
    "Wael Slama",
    "Full Stack Developer Tunisia",
    "Next.js developer",
    "NestJS developer",
    "Software Engineer Tunisia",
    "React developer",
    "Node.js developer",
    "PostgreSQL developer",
    "Web developer Monastir",
    "Web developer Tunis",
  ],
  openGraph: {
    title: "Wael Slama | Full Stack Developer (Next.js, NestJS) Tunisia",
    description:
  "Wael Slama is a Full Stack Developer from Tunisia specializing in Next.js, NestJS, PostgreSQL and AI-powered web applications. Explore my work.",
    url: "https://wael-slama-portfolio.vercel.app",
    siteName: "wael slama- Software Engineer",
    images: [
      {
        url: "https://wael-slama-portfolio.vercel.app/wael_slama_Banner.png",
        width: 1200,
        height: 630,
        alt: "wael slama- Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  creator: "wael slama",
  publisher: "wael slama",
  applicationName: "wael slama",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/logoWhite.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logoWhite.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logoWhite.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/logoWhite.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
