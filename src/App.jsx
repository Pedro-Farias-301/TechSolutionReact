import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Estudantes from './pages/Estudantes';
import Comunidade from './pages/Comunidade';
import Mentores from './pages/Mentores';
import About from './pages/About';



function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Estudantes" element={<Estudantes/>} />
            <Route path="/Comunidade" element={<Comunidade/>} />
            <Route path="/Mentores" element={<Mentores/>} />
            <Route path="/About" element={<About/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
