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
  const [totalorder , settotalorder] = ([0])
  



  useEffect(() => {
    axios.get("../server/categories.json")
      .then((result) => {setproductkadata(result.data.categories) 
      setsuggestedproduct(result.data.categories)}
      )
      .catch((err) => console.log(err));
  }, [])


  return (
    <>

      <webdata.Provider value={{popup, setpopup,totalorder , settotalorder,btn, setbtn , productkadata, setproductkadata, suggestedproduct, setsuggestedproduct,cartdata, setcartdata , warning, setWarning}}>
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