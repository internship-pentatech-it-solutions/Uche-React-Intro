import { useState } from 'react';
import { Link } from 'react-router-dom';  
import "boxicons"


const Navbar = () => {  
  const [toggle, setToggle] =useState(false)
  return (
    <nav className="bg-pink-700  relative py-10 shadow-md ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex">
          <div
            className="text-white mx-3 md:hidden cursor-pointer block"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="30"
              viewBox="0 0 30 30"
              className=""
            >
              <path
                fill="white"
                d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"
              ></path>
            </svg>
          </div>
          {/* togglelist */}
          <div className={`text-white ${toggle ? "block" : "hidden"} `}>
            <ul className=" absolute flex-col flex top-24 z-10 left-0 p-5  md:hidden bg-pink-700 ">
              <Link
                to="/"
                className="text-white py-2 hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="text-white py-2 hover:text-white transition-colors duration-300"
              >
                Shop
              </Link>
              <Link
                to="/about"
                className="text-white py-2 hover:text-white transition-colors duration-300"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-white py-2 hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
            </ul>
          </div>
          <Link to="/" className="text-white font-bold text-xl">
            RelaaxMattress
          </Link>
        </div>
        {/* serach field */}

        <div className="relative w-1/3">
          <input
            type="text"
            id="search"
            name="search"
            className="border border-gray-300 rounded-lg py-2 pl-10 pr-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Search..."
          />

          <div className="absolute  left-2 top-2 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width=""
              height="20"
              viewBox="0 0 30 30"
            >
              <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
            </svg>
          </div>
        </div>
        <div className=" space-x-4 md:block hidden">
          <Link
            to="/"
            className="text-white hover:text-white transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="text-white hover:text-white transition-colors duration-300"
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-white transition-colors duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-white transition-colors duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );  
};  

export default Navbar;