import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
