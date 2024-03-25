import React, { useState } from 'react'
import Header from './Header'
import Banner from './Banner'
import ProductDisplay from './ProductDisplay'
import ProductDisplay2 from './ProductDisplay2'
import Products from './Products'
import AllProducts from './AllProducts'
import Footer from './Footer'
import Footer2 from './Footer2'
import Offers from './Offers'
import Popup from './Popup'

function Homepage() {

  

  return (
    <>
    <Popup></Popup>
    <Header></Header>
    <Banner></Banner>
    <Offers></Offers>
    <ProductDisplay></ProductDisplay>
    <ProductDisplay2></ProductDisplay2>
    <AllProducts></AllProducts>
    <Footer></Footer>
    <Footer2></Footer2>
    </>
  )
}

export default Homepage