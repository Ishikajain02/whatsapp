import React from 'react'
import {faUsers} from '@fortawesome/fontawesome-svg-core';
import { IoMdPeople } from "react-icons/io";
import { LuCircleDotDashed } from "react-icons/lu";
import { BiMessageRoundedDots } from "react-icons/bi";
import { LuMessageSquarePlus } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const IconBar = () => {
  return (
    <div className='w-full h-16 flex bg-g justify-between items-center'>
        <div>
        <CgProfile style={{ color: "#ffffff"}} size="30px"  />

        </div>
        <div className='justify-between flex space-x-4 p-4 m-1'>
    <IoMdPeople style={{ color: "#ffffff"}} size="30px"  />
 
<LuCircleDotDashed style={{color:"#ffffff"}} size="30px" />
<BiMessageRoundedDots style={{color:"#ffffff"}} size="30px" />
<LuMessageSquarePlus style={{color:"#ffffff"}} size="30px" />
<BsThreeDotsVertical style={{color:"#ffffff"}} size="30px"  />
    </div>
    </div>
  )
}

export default IconBar