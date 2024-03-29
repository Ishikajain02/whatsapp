import React from 'react'
import { generate,generateRandomText, took, url } from './helper'

const Chat = () => {
  return (
    <div className='flex h-16 w-full '>
   <img  className="rounded-full h-14 w-16 p-2 m-2"src={url()}></img>
   <div  className=' flex flex-grow border-t border-b border-x-g justify-between'>
  <div className='flex flex-col text-white'>
    <h1>{generate()}</h1>
    <p>{generateRandomText(10)}</p>

  </div>
  <div className='text-white p-1'>
    <p className='text-msg'>{took()}</p>
    <span className='rounded-3xl w-6 p-[0.1rem] bg-msg'>60</span>

  </div>
   </div>
    </div>
  )
}

export default Chat