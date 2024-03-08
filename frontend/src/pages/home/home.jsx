import React from 'react'
import SideBar from '../../components/sideBar'
import MessageContainer from '../../components/messageContainer'

const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding'>
     <SideBar />
     <MessageContainer />
    </div>
  )
}

export default Home