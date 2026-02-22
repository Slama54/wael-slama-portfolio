import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export function BlogSection() {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/wael_slama.pdf";
    link.download = "wael_slama_cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="CV" className="space-y-6 md:space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Curriculum Vitae (CV)
          </h2>
          <div className="w-10 h-1 bg-accent rounded-full" />
        </div>

        <Button className="bg-accent" size="sm" onClick={handleDownloadCV}>
          Download CV PDF <ArrowRight className="ml-2" />
        </Button>
      </div>

      <Image
        src="/wael_slama_page-0001.jpg"
        alt="wael slama cv"
        width={800}
        height={400}
        className="w-full h-auto rounded-xl md:rounded-2xl border border-border"
      />
    </section>
  );
}
