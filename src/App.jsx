import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Students from './pages/Students';
import Communities from './pages/Communities';
import Mentors from './pages/Mentors';
import About from './pages/About';



function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Estudantes" element={<Students/>} />
            <Route path="/Comunidade" element={<Communities/>} />
            <Route path="/Mentores" element={<Mentors/>} />
            <Route path="/About" element={<About/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
