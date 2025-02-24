import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`flex justify-between items-center px-6 py-4  fixed w-full z-50 transition-colors duration-300 ${
        isMenuOpen ? 'bg-[#DF835B]' : 'bg-white'
      }`}>
        {/* Logo */}
        <h1 className={`text-2xl font-bold tracking-wide ${
          isMenuOpen ? 'text-white' : 'text-black'
        }`}>ECHOES</h1>

        {/* Custom Menu Icon */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="relative w-8 h-6 flex flex-col justify-between z-50">
          {isMenuOpen ? (
            <>
              <span className="block w-11.5 h-1 bg-white rounded transition-transform duration-300 relative -left-[1rem]"></span>
              <span className="block w-8 h-1 bg-white rounded transition-transform duration-300 relative -left-[0.9rem]"></span>
              <span className="block w-6 h-1 bg-white rounded transition-transform duration-300 relative -left-[0.8rem]"></span>
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
        className={`fixed inset-0 bg-[#DF835B] transition-all duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex items-center justify-center h-screen ">
          <ul className="text-center space-y-8 text-black font-semibold">
            <li>
              <a
                href="/process"
                className=" text-[2.6rem] hover:italic hover:font-light transition-colors"
                onClick={toggleMenu}
              >
                Process
              </a>
            </li>
            <li>
              <a
                href="/progress"
                className=" text-[2.6rem]  hover:italic hover:font-light transition-colors"
                onClick={toggleMenu}
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className=" text-[2.6rem]  hover:italic hover:font-light transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
