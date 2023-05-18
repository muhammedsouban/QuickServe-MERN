import React from 'react'

function ProviderNavbar() {
  return (
    <div className='navbar flex justify-between items-center p-4 text-white'>
    <div className='flex  items-center'>
      <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
        Provider <span className='font-bold'>PANEL</span>
      </h1>
    </div>
    <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
        Quick <span className='font-bold'>Serve</span>
      </h1>
    </div>
  )
}

export default ProviderNavbar