import React, { useContext, useEffect, useState } from 'react'
import { webdata } from './App'
import Header from './Header'
import milk from './milk.png'
import { Link } from 'react-router-dom';

function Cart() {
  const { cartdata, setcartdata} = useContext(webdata)

  
 
  function removeProduct(names) {
    setcartdata(cartdata.filter((productInCart) => {
      return productInCart.id !== names.id
    }))
  }

  const initialvalue = 0;
  const total = cartdata.reduce((accumulator , current ) => accumulator + current.price, initialvalue)
  console.log("mera naam",total);

  return (
    <>
      <Header></Header>
      <div className='cart-main'>
        <div className="cart">
          {
            cartdata.map((names) => {
              return <div className='w-90 h-28  flex justify-between px-8 py-4 items-center mb-5'>
                <div className='flex h-full'>
                  <img src={names.image_url}></img>
                  <div className='pl-4 w-40'>
                    <p>{names.name}</p>
                    <p>{names.price}</p>
                  </div>
                </div>
                <div className='flex [&>*]:px-5 sm:pr-10'>
                  <button>-</button>
                  <p>50</p>
                  <button>+</button>
                </div>
                <button onClick={() => { removeProduct(names) }}>Remove</button>
              </div>
              
            }
            )
            
            
          }
        </div>
        <div className='items-center pl-5 text-center '>
          <p>Total order is: {total }</p>
          <button className='mx-auto border-2 border-black p-1'>Order Now</button>
        </div>
      </div>
    </>
  )
}

export default Cart