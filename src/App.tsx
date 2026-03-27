import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { Home } from './pages/Home.tsx';
import { Music } from './pages/Music.tsx';
import { Tour } from './pages/Tour.tsx';
import { Merch } from './pages/Merch.tsx';
import { About } from './pages/About.tsx';
import { Contact } from './pages/Contact.tsx';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-dark-bg">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/music" element={<Music />} />
            <Route path="/tour" element={<Tour />} />
            <Route path="/merch" element={<Merch />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
