import React from 'react'
import IconBar from './IconBar'
import MsgBar from './MsgBar'
import ChatMessage from './ChatMessage'

const RightContainer = () => {
  return (
    
    <div className='w-full flex relative flex-col'>
        <MsgBar/>
        <div className=' flex flex-grow bg-background '></div>
        <ChatMessage/>
    </div>
  )
}

export default RightContainer