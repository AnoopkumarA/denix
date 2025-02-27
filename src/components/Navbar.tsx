import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`flex justify-between items-center px-6 py-4 fixed w-full z-[100] transition-colors duration-300 ${
        isMenuOpen ? 'bg-[#DF835B]' : 'bg-white'
      }`}>
        {/* Empty div for spacing */}
        <div className="w-8"></div>

        {/* Centered Logo */}
        <h1 className={`text-[2.3rem] font-semibold tracking-wide absolute left-1/2 transform -translate-x-1/2  ${
          isMenuOpen ? 'text-white' : 'text-black'
        }`}>ECHOES</h1>

        {/* Menu Button - keep it on the right */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="relative w-8 h-6 flex flex-col justify-between z-50 cursor-pointer">
          {isMenuOpen ? (
            <>
              <span className="block w-6 h-1 bg-white rounded transition-transform duration-300 relative -left-[1rem]"></span>
              <span className="block w-8 h-1 bg-white rounded transition-transform duration-300 relative -left-[0.9rem]"></span>
              <span className="block w-11.5 h-1 bg-white rounded transition-transform duration-300 relative -left-[0.8rem]"></span>
            </>
          ) : (
            <>
              <span className="block w-6 h-1 bg-black rounded transition-transform duration-300"></span>
              <span className="block w-8 h-1 bg-black rounded transition-transform duration-300 relative -left-[0.43rem]"></span>
              <span className="block w-11.5 h-1 bg-black rounded transition-transform duration-300 relative -left-[1.3rem]"></span>
            </>
          )}
        </button>
      </nav>

      {/* Full-screen Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#DF835B] transition-all duration-300 ease-in-out z-[90] ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex items-center justify-center h-screen ">
          <ul className="text-center space-y-8 text-black font-semibold">
            <li>
              <Link
                to="/"
                className="text-[2.6rem] hover:italic hover:font-light transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/process"
                className="text-[2.6rem] hover:italic hover:font-light transition-colors"
                onClick={toggleMenu}
              >
                Process
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                className="text-[2.6rem] hover:italic hover:font-light transition-colors"
                onClick={toggleMenu}
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-[2.6rem] hover:italic hover:font-light transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
