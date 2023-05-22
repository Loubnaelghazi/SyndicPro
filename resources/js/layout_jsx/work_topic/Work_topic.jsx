import React from 'react'

export default function Work_topic({Title , Description}) {
  return (
    <div className=' bg-white  border-solid border-[1px] border-gray-300 rounded-20 flex flex-col h-min mt-2 p-5 shadow-csh'>
        <span className=' text-t-color font-semibold text-2xl'>{Title}</span>
        <p className='text-t-color'>{Description}</p>
    </div>

  )
}
