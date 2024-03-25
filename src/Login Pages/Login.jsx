import React, { useState } from 'react'
import backimg from '../bg-home.png'
import Header from '../Header'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import axios from 'axios'

function pop(result){
    console.log(result);
    alert("done")
}


function Login() {
    const [mail,setmail] = useState('')
    const [password,setpassword] = useState('')


    const show = (e) => {
        e.preventDefault()
        console.log("lolo",{mail,password})
        axios.post('http://localhost:8000/login',{mail,password})
        .then(result => {
            console.log(result)
            if(result.data === "sucess"){
                alert("ho gya login")
            }
        })
        .catch(err => console.log(err))
    }


    return (
        <>
            <Header></Header>

            <div className='h-screen pt-10 lg:flex lg:pt-6'>
                <div className="upperdiv w-screen xl:h-full">
                    <img src={backimg} className='h-full w-full'></img>
                </div>
                <div className="lowerdiv bg-white h-1/2 rounded-3xl -mt-5 relative bottom-20 md:bottom-0 lg:static lg:w-1/2">
                    <h5 className='text-4xl text-blue-600 font-bold pt-5 pl-10 lg:text-center lg:text-4xl lg:pt-20'>Log in</h5>
                    <p className='pt-2 pl-10 lg:text-center lg:pt-4'>Now no more worrie about get lost.</p>
                    <form className='pt-5  text-center [&>*]:my-2  mx-auto' onSubmit={show}>
                        <input type='email' placeholder='Email' className=' w-5/6 trans p-4 lg:p-2' onChange={(e)=>{setmail(e.target.value)}}></input><br></br>
                        <input type='password' placeholder='Password' className='w-5/6 p-4 trans lg:p-2'onChange={(e)=>{setpassword(e.target.value)}}></input><br></br>
                        <input type='button' value='Forgot Password' className='flex float-end pr-16 pb-5'></input><br></br>
                        <input type='submit' value='Log in' className=' text-center bg-blue-600 py-3 rounded-2xl w-4/5 text-white md:w-4/5 md:ml-0' ></input>
                    </form>
                    <p className='text-black text-center pt-3'>Don't Have Any Account? <Link to='/register'><span className='text-blue-600'>Register Now</span></Link></p>
                </div>
                <Footer></Footer>
            </div>
            
        </>
    )
}

export default Login