import "./App.css";
import { CaseStudies } from "./components/CaseStudies";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { TechStack } from "./components/TechStack";

function App() {
  return (
    <div className="w-full h-full bg-background">
      <Navbar />
      <Hero />
      <TechStack />
      <CaseStudies />
      <Footer />
    </div>
  );
}

export default App;
