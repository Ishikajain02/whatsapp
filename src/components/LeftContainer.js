import React, { useState } from 'react'
import IconBar from './IconBar'
import Chat from './Chat';
import { FaGripLines } from "react-icons/fa6";
const LeftContainer = () => {
    const [input,setinput]=useState("Search");
  return (
    <div className="h-full flex flex-col w-[36rem] bg-blue">
        <IconBar/>
        <div className='flex flex-row items-center'>
        <input  className="p-2 m-4 w-[20rem] h-8 rounded-xl text-white bg-g"value = {input}onChange={(e)=>setinput(e.target.value)}></input>
       
        <FaGripLines style={{ color: "#ffffff"}} size="30px" />
        </div>
        {
          Array(10).fill().map((_, index) => (
            <Chat key={index} />
        ))
        }
       
 
    </div>
  )
}

export default LeftContainer