import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navbar/Navbar";
import { Clients } from "./pages/clients/Clients";
import { Contact } from "./pages/contact/Contact";
import { Home } from "./pages/home/Home";
import { HowWeWork } from "./pages/howWeWork/HowWeWork";
import { Services } from "./pages/services/Services";
import { Technologies } from "./pages/technologies/Technologies";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/services" element={<Services />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/how-we-work" element={<HowWeWork />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
