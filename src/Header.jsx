// Navbar.js
import React, { useContext } from 'react';
import logo from './logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPencil, faMagnifyingGlass, faBars, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const Header = () => {

  return (
    <nav className="bg-white shadow-lg fixed w-screen top-0  ">
      <div className=" mx-auto px-4 ">
        <div className="flex justify-between items-center py-4">
          <div className="flex justify-start items-center">
            <FontAwesomeIcon icon={faBars} className='pr-5 h-6 hidden md:block lg:hidden' />
            <Link to='/'><img src={logo} alt="Borobazar" className=" mr-2" /></Link>
            <ul className='hidden [&>*]:px-4 font-semibold  pl-5 pt-1 lg:flex'>
              <li>Categories</li>
              <li>Shops</li>
              <li>Pages</li>
            </ul>
            {/* <span className="text-xl font-bold text-gray-800">Borobazar</span> */}
          </div>

          <div className='flex'>
            <div>
              <div className='text-xs'>
                <FontAwesomeIcon icon={faLocationDot} className='px-1' />
                <span>Delivering at</span>
              </div>
              <div className='text-sm text-blue-600' >
                <span className=''>Ganesh Kira...</span>
                <FontAwesomeIcon icon={faPencil} className='px-1' />
              </div>
            </div>
            <div>
              <ul className='[&>*]:px-4 font-semibold pl-5 pt-1 hidden lg:flex'>
                <li><FontAwesomeIcon icon={faHeart} className='text-red-800'/></li>
                <Link to='/cart'><li onClick={()=>{console.log("rs")}}><FontAwesomeIcon icon={faCartShopping} className='text-blue-800'/></li></Link>
                <Link to='/login'><li>Sign In</li></Link>
              </ul>
            </div>
          </div>





          {/* <div className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
            <a href="#" className="text-gray-800 hover:text-gray-600">Shop</a>
            <a href="#" className="text-gray-800 hover:text-gray-600">About</a>
            <a href="#" className="text-gray-800 hover:text-gray-600">Contact</a>
          </div> */}
          {/* <div className="md:hidden">
            <button className="focus:outline-none">
              <svg className="w-6 h-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
