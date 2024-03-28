import React from 'react'

const Chat = () => {
  return (
    <div className='flex h-16 w-full '>
   <img  className="rounded-full h-14 w-16 p-2 m-2"src="https://t4.ftcdn.net/jpg/01/75/97/39/360_F_175973930_FOfQM7zFXsVuFLlz1H4PrU4YGZX14oFA.jpg"></img>
   <div  className=' flex flex-grow border-t border-b border-x-g justify-between'>
  <div className='flex flex-col text-white'>
    <h1>name</h1>
    <p>msg</p>

  </div>
  <div className='text-white'>
    <p>12:Am</p>
    <span className='rounded-full bg-green'>60</span>

  </div>
   </div>
    </div>
  )
}

export default Chat