import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import LandingPages from "@/components/LandingPages";
import FullSystems from "@/components/FullSystems";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="content-wrapper min-h-screen">
      <Header />
      <main>
        <Hero />
        <Skills />
        <LandingPages />
        <FullSystems />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
