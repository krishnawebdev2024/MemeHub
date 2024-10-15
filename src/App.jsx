import Home from "./pages/Home.jsx";

import Nav from "./components/NavBar";
import Footer from "./components/Footer.jsx";
import MemeGallery from "./components/MemeGallery.jsx";
import CraftedMemes from "./components/CraftedMemes.jsx";
import CreateMeme from "./components/CreateMeme.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MemeProvider } from "./context-and-reducer/MemeContext.jsx";

export default function App() {
  return (
    <MemeProvider>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/MemeGallery" element={<MemeGallery />} />
          <Route path="/CraftedMemes" element={<CraftedMemes />} />
          <Route path="/create-meme" element={<CreateMeme />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </MemeProvider>
  );
}
