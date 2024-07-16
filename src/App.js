import { Download } from "./components/Download";
import { Faq } from "./components/Faq";
import { Features } from "./components/Features";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { End } from "./components/End";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Download />
      <Faq />
      <End />
      <Footer />
    </div>
  );
}

export default App;
