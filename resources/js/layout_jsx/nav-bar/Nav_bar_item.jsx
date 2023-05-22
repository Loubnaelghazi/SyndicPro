import React from 'react'

export default function Nav_bar_item(props) {
  return (
    <div className={props.className}>
        <div className='text-lg mr-3'>
            {props.icon} 
        </div>
        <div className='font-semibold text-sm'>
            {props.text}
        </div>
    </div>
  )
}
