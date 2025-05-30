import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero'
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Home from './pages/Home';
import About from './pages/About';
import Students from './pages/Students';
import Mentors from './pages/Mentors';
import Communities from './pages/Communities';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <div className="data-theme-techsolution">
        <Navbar/>
        <Hero/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/students" element={<Students />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/communities" element={<Communities />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/portfolio" element={<div>Portfolio</div>} />
          </Routes>
          <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;