import { Banner } from "./components/Banner";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import LogoTicker from "./components/LogoTicker";

export default function Home() {
  return (
    <main className="font-dmSans">
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
    </main>
  );
}
