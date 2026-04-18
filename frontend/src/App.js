import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@/App.css";
import Home from "@/pages/Home";
import Menu from "@/pages/Menu";
import About from "@/pages/About";
import Gallery from "@/pages/Gallery";
import Contact from "@/pages/Contact";
import Navigation from "@/components/Navigation";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <FloatingWhatsApp />
      </BrowserRouter>
    </div>
  );
}

export default App;
