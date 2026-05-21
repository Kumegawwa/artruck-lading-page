import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { BrandsMarquee } from "@/components/site/BrandsMarquee";
import { Services } from "@/components/site/Services";
import { Differentials } from "@/components/site/Differentials";
import { About } from "@/components/site/About";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

const TITLE = "Ar Truck Freios — Especialistas em Freios Pneumáticos | Joinville/SC";
const DESC = "Oficina especializada em freios pneumáticos, ABS, EBS, compressores e suspensão pneumática para caminhões e ônibus. BR-101, Joinville/SC. Desde 1998.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "oficina freio pneumático Joinville, manutenção freios caminhão SC, oficina pesada BR-101, manutenção ABS caminhão, freio pneumático ônibus, reparo válvulas Wabco, manutenção Knorr-Bremse, suspensão pneumática" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoRepair",
          name: "Ar Truck Freios Peças e Serviços Ltda",
          description: DESC,
          image: "/og.jpg",
          telephone: "+55-47-3222-2222",
          address: {
            "@type": "PostalAddress",
            streetAddress: "BR-101 KM 34, Sentido Sul",
            addressLocality: "Joinville",
            addressRegion: "SC",
            addressCountry: "BR",
          },
          areaServed: "Santa Catarina",
          priceRange: "$$",
          openingHours: "Mo-Fr 08:00-18:00 Sa 08:00-12:00",
          sameAs: [],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      <main>
        <Hero />
        <BrandsMarquee />
        <Services />
        <Differentials />
        <About />
        <BeforeAfter />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
