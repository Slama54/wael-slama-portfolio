"use client";

import { useState } from "react";
import { AboutSection } from "./about-section";
import { ResumeSection } from "./resume-section";
import { BlogSection } from "./blog-section";
import { ContactSection } from "./contact-section-new";
import { Navigation } from "./navigation";

interface MainContentProps {
  aboutData: any;
  resumeData: any;
  contactData: any;
}

export function MainContent({ aboutData, resumeData, contactData }: MainContentProps) {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <>
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />
      
      <div className="p-4 sm:p-5 md:p-6 lg:p-8">
        {activeSection === "about" && <AboutSection data={aboutData} />}
        {activeSection === "resume" && <ResumeSection data={resumeData} />}
        {activeSection === "CV" && <BlogSection />}
        {activeSection === "contact" && <ContactSection data={contactData} />}
      </div>
    </>
  );
}