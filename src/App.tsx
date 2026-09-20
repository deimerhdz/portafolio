import "./App.css";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="w-full h-full">
      <Navbar></Navbar>
      <Hero />
    </div>
  );
}

export default App;
