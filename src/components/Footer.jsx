import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer footer-center bg-base-200 text-base-content p-4 ">
      <div className="container mx-auto">
      
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-4">
          <Link to="/" className="link link-hover">Home</Link>
          <Link to="/students" className="link link-hover">Estudantes</Link>
          <Link to="/mentors" className="link link-hover">Mentores</Link>
          <Link to="/communities" className="link link-hover">Comunidade</Link>
        </div>
        
        <div>
          <p>Copyright © {new Date().getFullYear()} - TechSolution</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;