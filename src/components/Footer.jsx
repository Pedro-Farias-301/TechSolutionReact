import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer footer-center bg-black text-base-content p-4 ">
      <div className="container mx-auto">
      
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-4 ">
          <Link to="/" className="link link-hover text-yellow-500">Home</Link>
          <Link to="/students" className="link link-hover text-yellow-500">Estudantes</Link>
          <Link to="/mentors" className="link link-hover text-yellow-500">Mentores</Link>
          <Link to="/communities" className="link link-hover text-yellow-500">Comunidade</Link>
        </div>
        
        <div>
          <p className='text-yellow-500'>Copyright © {new Date().getFullYear()} - TechSolution</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;