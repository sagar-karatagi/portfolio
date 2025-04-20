import { Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar'
import Card from './pages/Card';
import NotFound from './pages/NotFound';
function App() {
  return (
    <div className="font-sans bg-white text-gray-800">
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path = "/" element= {<Card/>}/>
        <Route path = "*" element = {<NotFound/>}/>
      </Routes>
      {/* Footer here */}
    </div>
  );
}

export default App;
