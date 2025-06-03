import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar bg-black shadow-sm">
      <div className="navbar-start ">
        <div className="dropdown ">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-neutral btn-circle hover:bg-yellow-500 transition-transform duration-200 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-yellow-500"
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
            <li><Link to="/" className='text-yellow-500'>Home</Link></li>
            <li><Link to="/students" className='text-yellow-500'>Estudantes</Link></li>
            <li><Link to="/mentors" className='text-yellow-500'>Mentores</Link></li>
            <li><Link to="/communities" className='text-yellow-500'>Comunidade</Link></li>
            <li><Link to="/about" className='text-yellow-500'>Sobre nós</Link></li>
      
          </ul>
        </div>
      </div>  
      <div className="navbar-center">
        <Link to="/" className="btn btn-ghost text-xl text-yellow-500">TechSolution</Link>
      </div>
      <div className="navbar-end">
        
      </div>
    </div>
  );
}

export default Navbar;