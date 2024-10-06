import { Link } from 'react-router-dom';  

const Navbar = () => {  
  return (  
    <nav className="bg-gray-800 py-4 shadow-md">  
      <div className="container mx-auto flex justify-between items-center">  
        <Link to="/" className="text-white font-bold text-xl">  
        Shop with Uche
        </Link>  
        <div className="flex space-x-4">  
          <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">  
            Home  
          </Link>  
          <Link to="/shop" className="text-gray-300 hover:text-white transition-colors duration-300">  
            Shop  
          </Link>  
          <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300">  
            About  
          </Link>  
          <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">  
            Contact  
          </Link>  
        </div>  
      </div>  
    </nav>  
  );  
};  

export default Navbar;