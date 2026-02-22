import { MainContent } from "@/components/main-content";
import { ProfileSidebar } from "@/components/profile-sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  profileData,
  aboutData,
  resumeData,
  contactData,
} from "@/lib/portfolio-data";
import { Metadata } from "next";
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
      "Wael Slama is a Full Stack Developer from Tunisia specializing in Next.js, NestJS, PostgreSQL and AI-powered web applications. View projects, experience and skills.",
    url: "https://waelslama.com",
    siteName: "wael slama- Software Engineer",
    images: [
      {
        url: "https://waelslama.com/og-image.png",
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
};
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Wael Slama Portfolio",
  url: "https://waelslama.com",
};
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Wael Slama",
  url: "https://waelslama.com",
  image:
    "https://media.licdn.com/dms/image/v2/D4D03AQGP5hA9gEBlBg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1677586555880?e=1772668800&v=beta&t=sv2hSAPKdjPJ0Wj2kRAaCuhdhM6WIurEn19x1LSQO40", // add real photo
  jobTitle: "Full Stack Developer",
  description:
    "Full Stack Developer specializing in Next.js, NestJS, PostgreSQL and AI-powered applications.",
  knowsAbout: [
    "Next.js",
    "NestJS",
    "TypeScript",
    "PostgreSQL",
    "AI applications",
    "Socket.io",
  ],
  sameAs: [
    "https://www.linkedin.com/in/wael-slama/",
    "https://github.com/slama54",
  ],
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "EPI Digital School",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "TN",
  },
};
export default function Home() {
  return (
    <div className="min-h-screen bg-background p-3 sm:p-4 md:p-6 lg:p-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([structuredData, websiteSchema]) }}
      />
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-6">
          <ProfileSidebar data={profileData} />

          <main className="flex-1 bg-card rounded-xl md:rounded-2xl border border-border overflow-hidden">
            <MainContent
              aboutData={aboutData}
              resumeData={resumeData}
              contactData={contactData}
            />
          </main>
        </div>
      </div>
    </div>
  );
}
