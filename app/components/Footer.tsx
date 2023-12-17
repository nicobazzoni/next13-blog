import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className=' w-full mt-2  bottom-0 flex border-t-2 border-black  bg-stone-100 items-center justify-between 
    space-x-2 font0bold px-10 py-5'>
        <Link className='bg-blue-300 p-2 rounded-full ' href="https://www.portl.world" >portl.world</Link> <Link href='https://www.nicosblog.com' className=' p-2 bg-slate-200 rounded-full'>nico's blog</Link>
    </div>
  )
}

export default Footer