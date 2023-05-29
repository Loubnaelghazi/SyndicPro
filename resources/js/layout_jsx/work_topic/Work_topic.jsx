import React from 'react'

export default function Work_topic({Title , Description}) {
  return (
    <div className=' bg-white  rounded-20 flex flex-col h-min mt-2 px-7 py-4 shadow-csh'>
        <span className=' text-t-color font-semibold text-2xl'>{Title}</span>
        <p className='text-t-color'>{Description}</p>
    </div>

  )
}
