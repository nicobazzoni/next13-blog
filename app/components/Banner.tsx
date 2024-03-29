import React from 'react'

function Banner() {
  return (
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10'> 
        <div>
            <h1 className='text-7xl'>Nico Bazzoni</h1>
            <h2 className='mt-5 md:mt-0'> my thoughts on 
            <span> coding</span> music
           and other cool stuff
            </h2>
           

        </div>
        
         <p className='mt-5 md:mt-2 text-gray-400 max-w-sm'> 
            tread softly
         
         </p>
    </div>
  )
}

export default Banner