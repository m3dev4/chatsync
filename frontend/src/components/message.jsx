import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
        <img src=" https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/avatar-icon.png" alt=""Tailwind CSS chat buble component />
        </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}>
            Bonjour bro
        </div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>15:27</div>
    </div>
  )
}

export default Message