import React from 'react'

export default function Logout_item(props) {
  return (
    <div className=' hover:text-primary-color cursor-pointer	  w-auto p-3 px-6 transition-colors duration-400 text-gray-color flex flex-row rounded-md'>
        <div className='text-l mr-3'>
            {props.icon} 
        </div>
        <div className='font-regular text-xs'>
            {props.text}
        </div>
    </div>
  )
}
