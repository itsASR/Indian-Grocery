import React, { useContext, useEffect, useState } from 'react'
import { webdata } from './App'
import Header from './Header'
import milk from './milk.png'
import { Link } from 'react-router-dom';

function Cart() {
  const { cartdata, setcartdata } = useContext(webdata)



  function removeProduct(names) {
    setcartdata(cartdata.filter((productInCart) => {
      return productInCart.id !== names.id
    }))
  }

  const initialvalue = 0;
  const total = cartdata.reduce((accumulator, current) => accumulator + current.price, initialvalue)
  console.log("mera naam", total);

  return (
    <>
      <div className="div h-20">
        <Header></Header>
      </div>
      <div className='cart-main md:flex '>
        <div className="cart overflow-scroll h-80 w-3/4 md:h-96 ">
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
        <div className='items-center  text-center w-1/4 border-black border mr-5 h-56'>
          <h2 className='text-4xl'>Item Value</h2>
          <div className='px-2 pt-10 '>
            <div className='flex justify-between'>
              <p>Total Item Value:</p>
              <p>{total} RS</p></div>

            <div className='flex justify-between '>
              <p>Shipping Charges:</p>
              <p>45 RS Fixed</p>
            </div>
            <button className='mx-auto border-2 border-black p-1 mt-10'>Order Now</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Cart