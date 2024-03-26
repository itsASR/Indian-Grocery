import React, { useContext } from 'react'
import { webdata } from './App'
import party from './party.png'



function Popup() {
  const { warning, popup, setpopup } = useContext(webdata)
  return (
    <>
      <div className='w-fit h-fit'>
        <div className='warnings' style={{ display: warning }}>
          <div className='w-full h-full'>
            <img src={party} className='h-full w-full'></img>
            <p className='absolute top-10 text-4xl text-wrap text-center'>Hurray! Item Already in Your Cart</p>
          </div>
        </div>



        <div className='w-fit h-fit'>
          <div style={{ display: popup }} className='popup'>
            <div id="toast-simple" className="flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
              <svg className="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9" />
              </svg>
              <div className="ps-4 text-sm font-normal">Added in Cart Succefully</div>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default Popup