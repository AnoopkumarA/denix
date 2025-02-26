import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6 flex justify-between items-center px-10">
        {/* Left Side - Navigation */}
        <ul className="flex space-x-6 text-lg text-gray-300">
          <li>
            <Link to="/" className="hover:text-orange-400">Home</Link>
          </li>
          <li>
            <Link to="/process" className="hover:text-orange-400">Process</Link>
          </li>
          <li>
            <Link to="/project" className="hover:text-orange-400">Project</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-orange-400">Contact</Link>
          </li>
        </ul>

        {/* Center - Logo */}
        <Link to="/">
          <img 
            src="/Echoes Logo.png"
            alt="Echoes Logo"
            className="w-32 h-auto"
          />
        </Link>
  
        {/* Right Side - Copyright */}
        <p className="text-gray-400 text-sm">
          Copyright 2025 · Echoes · All Rights Reserved
        </p>
      </footer>
    );
  };
  
  export default Footer;
