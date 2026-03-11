import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuSection from "@/components/Menu";
import Locations from "@/components/Locations";
import Purpose from "@/components/Purpose";
import Catering from "@/components/Catering";
import Footer from "@/components/Footer";

// Main page — single-page landing assembling all Zule Coffee sections
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <Locations />
        <Purpose />
        <Catering />
      </main>
      <Footer />
    </>
  );
}
