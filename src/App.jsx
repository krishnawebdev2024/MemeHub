import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Nav from "./components/NavBar";
import Footer from "./components/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}
