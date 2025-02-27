

import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <div className="h-[30px] w-full bg-transparent">
      <nav className="bg-black  mx-auto relative z-50">
        <div className="flex items-center justify-between px-4 py-3 md:py-4 md:px-6 max-w-[1200px] mx-auto">
          {/* Logo Section */}
          <div className="flex items-center">
            <ul>
          <li className="text-3xl text-white">
              <Link to="/">Shubham </Link>
            </li> 
            </ul>
            {/* <h1 className="text-3xl text-white">Shubham</h1> */}
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-gray-400">
            <li>
              <Link to="/" className="hover:text-white">Home</Link>
            </li>
            <li>
              <Link to="/education" className="hover:text-white">Education</Link>
            </li>
            <li>
            </li>
            <li>
              <Link to="/skills" className="hover:text-white">Skills</Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-white">Projects</Link>
            </li>
            <li>
              <Link to="/experience" className="hover:text-white">EXPERIENCE</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">Contact</Link>
            </li>
          </ul>

          {/* Mobile Hamburger Menu */}
          <button
            className="text-white text-2xl md:hidden"
            onClick={() => setIsNavbarOpen(true)}
          >
            &#9776;
          </button>
        </div>

        {/* Mobile Menu */}
        {isNavbarOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-90">
            <div className="flex flex-col gap-6 text-gray-400 text-lg px-6 py-8">
              <button
                className="text-white text-2xl self-end"
                onClick={() => setIsNavbarOpen(false)}
              >
                &#10005;
              </button>
              <Link
                to="/"
                onClick={() => setIsNavbarOpen(false)}
                className="hover:text-white"
              >
                Home
              </Link>
              <Link
                to="/education"
                onClick={() => setIsNavbarOpen(false)}
                className="hover:text-white"
              >
                Education
              </Link>
              <Link
                to="/skills"
                onClick={() => setIsNavbarOpen(false)}
                className="hover:text-white"
              >
                Skills
              </Link>
              <Link
                to="/projects"
                onClick={() => setIsNavbarOpen(false)}
                className="hover:text-white"
              >
                Projects
              </Link>
              <Link
                to="/experience"
                onClick={() => setIsNavbarOpen(false)}
                className="hover:text-white"
              >
               Experience
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsNavbarOpen(false)}
                className="hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
