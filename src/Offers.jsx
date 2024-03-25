import React from 'react'
import discountoffer20 from './20off.png'
import bestoffer2 from './bestoffer2.png'
import bestoffer3 from './bestoffer3.png'
import bestoffer4 from './bestoffer4.png'

function Offers() {
  return (
    <>
    <div className='ram'>
        <div className="box1 bg-yellow-500 "><img src={discountoffer20} className='w-fit h-full'></img></div>
        <div className="box1 bg-blue-500"><img src={bestoffer2} className='w-fit h-full'></img></div>
        <div className="box1 bg-green-500"><img src={bestoffer3} className='w-fit h-full'></img></div>
        <div className="box1 bg-pink-500"><img src={bestoffer4} className='w-fit h-full'></img></div>
        <div className="box1 bg-cyan-500"><img src={discountoffer20} className='w-fit h-full'></img></div>
    </div>
    </>
  )
}

export default Offers