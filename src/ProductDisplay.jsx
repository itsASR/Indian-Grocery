// components/ProductDisplay.js

import React, { useContext, useState } from 'react';
import milk from './milk.png'
import { webdata } from './App';
import Popup from './Popup';



function ProductDisplay() {


  const [show,setshow] = useState(true);
  // const [cart, setcart] = useState([])
  
  function myfunc(a, b) {
    return a + b;
  }


  const handleclick = (productpri)=>{
    setpopup("block")
    setTimeout(()=>{
      setpopup("none");

    },1000)
    setbtn([...btn , productpri.price])
    let isPresent = false;
    cartdata.forEach((product)=>{
      if (productpri.id === product.id)
      isPresent = true;
    })
    if (isPresent){
      setWarning("block");
      setTimeout(()=>{
        setWarning("none");
      },2000)
      return;
    }
    setcartdata([...cartdata,productpri]);
    console.log("nsmu",productpri)

  }



  const {popup, setpopup,suggestedproduct, cartdata, setcartdata, setWarning, btn, setbtn} = useContext(webdata)
  
  console.log("suggestedproduct",suggestedproduct)

  console.log("cart",cartdata);



  return (
    <>
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Deal Of The Day</h2>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-5">
        {/* Product cards */}
       {
        suggestedproduct.map((result)=>{
          return  result.products.map((ramu)=>{
            return <div className="bg-white rounded shadow-md p-4 text-center">
            <img src={ramu.image_url} alt="Product" className="w-full mb-4" />
            <div className="text-lg font-semibold mb-2">
              <p>{ramu.name}</p></div>
            <div className="text-gray-600 mb-2">Price: {ramu.price}</div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={()=>{handleclick(ramu)}} >Add to Cart</button>
          </div>
          })
        })
       }
           </div>
    </div>
    </>
  );
}

export default ProductDisplay;
