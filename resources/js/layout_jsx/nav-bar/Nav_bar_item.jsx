import React from 'react'

export default function Nav_bar_item(props) {
  return (
    <div className='duration-400 hover:bg-third-color hover:text-primary-color p-3 px-6  text-gray-color flex flex-row rounded-md '>
        <div className='text-l mr-3'>
            {props.icon} 
        </div>
        <div className='font-semibold text-sm'>
            {props.text}
        </div>
    </div>
  )
}
