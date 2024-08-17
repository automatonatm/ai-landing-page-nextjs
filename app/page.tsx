import { Banner } from "./components/Banner";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import LogoTicker from "./components/LogoTicker";
import Features from "./components/Features";
import ProductShowCase from "./components/ProductShowCase";
import Faqs from "./components/Faqs";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="font-dmSans">
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowCase />
      <Faqs />
      <CallToAction />
      <Footer />
    </main>
  );
}
