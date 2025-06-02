import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-neutral btn-circle hover:bg-neutral-focus transition-transform duration-200 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow border-box "
          >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/students">Estudantes</Link></li>
            <li><Link to="/mentors">Mentores</Link></li>
            <li><Link to="/communities">Comunidade</Link></li>
            <li><Link to="/about">Sobre nós</Link></li>
      
          </ul>
        </div>
      </div>  
      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost text-xl">TechSolution</Link>
      </div>
      <div className="navbar-end">
        
      </div>
    </div>
  );
}

export default Navbar;