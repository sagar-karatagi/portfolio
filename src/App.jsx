import { Routes, Route, useLocation } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Card from './pages/Card';
import NotFound from './pages/NotFound';
import ScrollToTopButton from './components/ScrollToTopButton';
import { AnimatePresence } from "framer-motion";
import PageWrapper from './components/PageWrapper';

function App() {
  const location = useLocation();

  return (
    <div className="font-sans bg-white text-gray-800">
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/home" element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
          <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="/" element={<PageWrapper><Card /></PageWrapper>} />
          <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
        </Routes>
      </AnimatePresence>
      {/* Footer here */}
      <ScrollToTopButton />
    </div>
  );
}

export default App;
