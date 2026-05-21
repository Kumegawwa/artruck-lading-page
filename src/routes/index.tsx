// src/routes/index.tsx
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

const TITLE = "Ar Truck Freios — Especialistas em Freios Pneumáticos na BR-101";
const DESC = "Autoridade em manutenção pesada, freios pneumáticos, ABS, EBS e compressores. Localização estratégica na BR-101 KM 34, Sentido Sul - Joinville/SC.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "oficina freio pneumático Joinville, manutenção freios caminhão SC, oficina pesada BR-101 Sentido Sul, manutenção ABS caminhão, freio pneumático ônibus, reparo válvulas Wabco, manutenção Knorr-Bremse, suspensão pneumática" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
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
          telephone: "+55-47-3028-6999",
          email: "financeiro@artruckfreios.com.br",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Rodovia BR-101, KM 34, Sentido Sul",
            addressLocality: "Joinville",
            addressRegion: "SC",
            postalCode: "89219-503",
            addressCountry: "BR",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: "-26.2625",
            longitude: "-48.8569"
          },
          taxID: "02.704.801/0001-63",
          areaServed: "Região Sul e Ecossistema Rodoviário BR-101",
          priceRange: "$$$",
          openingHours: "Mo-Fr 08:00-18:00 Sa 08:00-12:00",
          sameAs: [
            "https://www.instagram.com/artruckfreios",
            "https://www.facebook.com/artruckfreios",
            "https://www.tiktok.com/@artruckfreios"
          ],
          department: [
            {
              "@type": "AutoPartsStore",
              name: "Ar Truck Parts e Service Ltda",
              taxID: "64.378.200/0001-65"
            }
          ]
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-brand selection:text-white">
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