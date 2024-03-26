import React, { useState } from 'react'
import backimg from '../bg-home.png'
import Header from '../Header'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import Footer2 from '../Footer2'
import axios from 'axios'

function pop(result){
    console.log(result);
    alert("done")
}


function Register() {
    const [name, setname] = useState('')
    const [phone, setphone] = useState('')
    const [mail, setmail] = useState('')
    const [password, setpassword] = useState('')

    const show = (e) => {
        e.preventDefault()
        console.log("lolo",{name,phone,mail,password})
        axios.post('http://localhost:8000/register',{name,phone,mail,password})
        .then(result => pop(result))
        .catch(err => console.log(err))
        
    }

    return (
        <>
            <Header></Header>

            <div className='h-screen pt-10 lg:flex lg:pt-6'>
                <div className="upperdiv w-screen xl:h-full">
                    <img src={backimg} className='h-full w-full'></img>
                </div>
                <div className="lowerdiv bg-white h-1/2 rounded-3xl -mt-5 relative bottom-36 md:bottom-24 lg:static lg:w-1/2">
                    <h5 className='text-4xl text-blue-600 font-bold pt-5 pl-10 lg:text-center lg:text-4xl lg:pt-20'>Register Now</h5>
                    <p className='pt-2 pl-10 lg:text-center lg:pt-4'>Let's Rock Together to Save More Money.</p>
                    <form className='pt-5  text-center [&>*]:my-2  mx-auto' onSubmit={show}  >
                        <input type='text' placeholder='Name' className=' w-5/6 trans p-4 lg:p-2 ' onChange={(e) => { setname(e.target.value) }}></input><br></br>
                        <input type='number' placeholder='Phone Number' className=' w-5/6 trans p-4 lg:p-2' onChange={(e) => { setphone(e.target.value) }}></input><br></br>
                        <input type='email' placeholder='Email' value={mail} className=' w-5/6 trans p-4 lg:p-2' onChange={(e) => { setmail(e.target.value) }}></input><br></br>
                        <input type='password' placeholder='Password' className='w-5/6 p-4 trans lg:p-2' onChange={(e) => { setpassword(e.target.value) }}></input><br></br>
                        <input type='submit' value='Register' className=' text-center bg-blue-600 py-3 rounded-2xl w-4/5 text-white' ></input>
                    </form>
                    <p className='text-black text-center pt-3'>Already Have an Account? <Link to='/login'><span className='text-blue-600'>Log in</span></Link></p>
                    <div className='py-12'>
                        <Footer></Footer>
                    </div>
                </div>

            </div>
            

        </>
    )
    console.log("mera data", dataa)
}
console.log("hello")

export default Register