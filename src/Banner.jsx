// components/Banner.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Banner = () => {
  return (
    <section className="banner w-full bg-no-repeat bg-cover bg- flex items-center  bg-fill-thumbnail py-20 lg:py-40">
      <div className="container mx-auto lg:w-3/6">
        <h2 className="text-4xl font-bold mb-4 mx-10 text-center">Healthy vegetable that you deserve to eat fresh</h2>
        <p className="text-lg mx-10 text-center mb-10">We source and sell the very best beef, lamb and pork, sourced with the greatest care from farmer.</p>
        <div className='flex  justify-center  items-center  rounded-full  mx-auto  '>

          <input type='text' placeholder='Search Grocery here...' className=' px-3  py-1 w-2/3 h-12 rounded-full font-semibold' ></input>
          <FontAwesomeIcon icon={faMagnifyingGlass} className=' h-7 px-2' />
        </div>
      </div>
    </section>
  );
}

export default Banner;
