import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import RSVP from './pages/RSVP';
import Travel from './pages/Travel';
import WeddingParty from './pages/WeddingParty';
import Gallery from './pages/Gallery';
import FAQ from './pages/FAQ';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/rsvp" element={<RSVP />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/wedding-party" element={<WeddingParty />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;