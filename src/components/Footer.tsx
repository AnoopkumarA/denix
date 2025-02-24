const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6 flex justify-between items-center px-10">
        {/* Left Side - Navigation */}
        <ul className="flex space-x-6 text-lg text-gray-300">
          <li className="hover:text-orange-400 cursor-pointer">Home</li>
          <li className="hover:text-orange-400 cursor-pointer">Process</li>
          <li className="hover:text-orange-400 cursor-pointer">Project</li>
          <li className="hover:text-orange-400 cursor-pointer">Contact</li>
        </ul>
  
        {/* Center - Logo */}
        <div className="flex items-center justify-center">
          <img 
            src="/Echoes Logo.png"
            alt="Echoes Logo"
            className="w-32 h-auto"
          />
        </div>
  
        {/* Right Side - Copyright */}
        <p className="text-gray-400 text-sm">
          Copyright 2025 · Echoes · All Rights Reserved
        </p>
      </footer>
    );
  };
  
  export default Footer;
