import { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://wael-slama-portfolio.vercel.app";
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
