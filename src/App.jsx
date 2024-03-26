// App.js
import React, { createContext, useState, useEffect } from 'react';
import Header from './Header';
import Banner from './Banner';
import Products from './Products';
import Footer from './Footer';
import './App.css'
import Offers from './Offers';
import ProductDisplay from './ProductDisplay';
import ProductDisplay2 from './ProductDisplay2';
import AllProducts from './AllProducts';
import Footer2 from './Footer2';
import Login from './Login Pages/Login';
import Register from './Login Pages/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import axios from 'axios';
import Cart from './Cart';
import Popup from './Popup';

export const webdata = createContext()
function App() {

  const [warning, setWarning] = useState("none")
  const [popup, setpopup] = useState("none")
  const [productkadata, setproductkadata] = useState([])
  const [suggestedproduct, setsuggestedproduct] = useState([])
  const [cartdata, setcartdata] = useState([])
  const [btn, setbtn] = useState([0])
  const [totalorder, settotalorder] = ([0])
  const [address, setaddress] = useState('')
  const [address2, setaddress2] = useState('000000')
  const [addressbar, setaddressbar] = useState("block")




  useEffect(() => {
    const datas = async () => {
      try {const res = await axios.get("src/categories.json")
      
    
      {
        setproductkadata(res.data.categories)
        setsuggestedproduct(res.data.categories)
      }
        
      } catch (error) {
        console.log("this is error abhishek:  ",error);
      }

    }
    datas()
  }, [])


  return (
    <>

      <webdata.Provider value={{ addressbar, setaddressbar, address2, setaddress2, address, setaddress, popup, setpopup, totalorder, settotalorder, btn, setbtn, productkadata, setproductkadata, suggestedproduct, setsuggestedproduct, cartdata, setcartdata, warning, setWarning }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage></Homepage>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/cart' element={<Cart></Cart>}></Route>
          </Routes>
        </BrowserRouter>
      </webdata.Provider>
    </>
  );
}

export default App;
