import Navbar from "./components/Navbar";
import Beranda from "./pages/Beranda";
import TentangKami from "./pages/TentangKami";
import Faktorresiko from "./pages/Faktorresiko";
import Footer from "./components/Footer";
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/tentang-kami" element={<TentangKami />} />
        <Route path="/faktor-resiko" element={<Faktorresiko />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
