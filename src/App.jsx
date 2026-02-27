import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import RSVP from './pages/RSVP';
import Travel from './pages/Travel';
import WeddingParty from './pages/WeddingParty';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;