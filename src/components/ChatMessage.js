import React, { useState } from 'react'
import { VscSmiley } from "react-icons/vsc";
import { AiFillAudio } from "react-icons/ai";

import { FaPlus } from "react-icons/fa6";

const ChatMessage = () => {
    const [msg,setmsg]=useState("Type to send a msg");
  
  return (
    <div className='w-full h-16 fixed bottom-0 flex bg-g  items-center space-x-4'>
    <VscSmiley style={{ color: "#ffffff"}} size="30px"/>
    <FaPlus style={{ color: "#ffffff"}} size="30px"/>
    <input className='bg-light w-[60rem] p-2 m-2 text-white rounded-xl' value={msg} onChange={(e)=>setmsg(e.target.value)} ></input>
    <AiFillAudio style={{ color: "#ffffff"}} size="30px"/>
    </div>
  )
}

export default ChatMessage