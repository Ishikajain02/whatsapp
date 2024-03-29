import React from 'react'
import { IoIosVideocam } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
const MsgBar = () => {
  return (
    <div className='w-full h-16 flex bg-g justify-between items-center'>
        <div className='flex items-center text-white'>
    <img  className="rounded-full h-14 w-16 p-2 m-2"src="https://t4.ftcdn.net/jpg/01/75/97/39/360_F_175973930_FOfQM7zFXsVuFLlz1H4PrU4YGZX14oFA.jpg"></img>
   
        <div className='flex flex-col '>
            <h1>Official group</h1>
            <p className=''>Priya , Riya , Rohit , Rahul , Many more....</p>
        </div>
        </div>
   
    <div className=' flex space-x-6 '>
    <IoIosVideocam  style={{ color: "#ffffff"}} size="30px"/>
    <FaSearch style={{ color: "#ffffff"}} size="30px" />
    <BsThreeDotsVertical style={{color:"#ffffff"}} size="30px"  />
    </div>
    </div>
    
  )
}

export default MsgBar