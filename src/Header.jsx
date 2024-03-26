// Navbar.js
import React, { useContext, useState } from 'react';
import logo from './logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPencil, faMagnifyingGlass, faBars, faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { webdata } from './App';


const Header = () => {

  const {addressbar , setaddressbar,address2 , setaddress2,address , setaddress} = useContext(webdata)

  function addressbarfunc(){
    setaddress2(address)
    setaddressbar("none")

  }

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
              <div className='text-sm text-blue-600 pl-5' >
                <span className=''>{address2}</span>
                <FontAwesomeIcon icon={faPencil} className='px-1' onClick={()=>{setaddressbar("block")}}/>
              </div>
            </div>
            <div>
              <ul className='[&>*]:px-4 font-semibold pl-5 pt-1 hidden lg:flex'>
                <li><FontAwesomeIcon icon={faHeart} className='text-red-800' /></li>
                <Link to='/cart'><li onClick={() => { console.log("rs") }}><FontAwesomeIcon icon={faCartShopping} className='text-blue-800' /></li></Link>
                <Link to='/login'><li>Sign In</li></Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center p-4' style={{ display: addressbar }}>
        <div>
          <input type='number' placeholder='Enter Your Postal Code' autoFocus className='border-2 border-blue-500 rounded-xl p-1 m-1' onChange={(e)=>{setaddress(e.target.value)}} ></input>
          <span onClick={()=>{addressbarfunc()}}>OK</span>
        </div>
      </div>
    </nav>

  );
};

export default Header;
