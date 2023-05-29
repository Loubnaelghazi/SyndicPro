import React from 'react'

export default function THeader({children}) {
  return (
    <thead className="bg-purple-50 text-t-color text-sm">
        {children}
    </thead>
  )
}
