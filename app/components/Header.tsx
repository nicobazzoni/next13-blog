import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { HandThumbUpIcon} from '@heroicons/react/24/solid'

function Header() {
  return (
    <header className='flex items-center justify-between 
    space-x-2 font0bold px-10 py-5'>
        <div> 
            <Link href='/'>
                <Image className='h-8 w-8' src='/nico-photo.jpg' height={8} width={8} alt='logo'/>
            </Link>
            <h1>NICO</h1>
        </div>

        <div>
            {/* <Link href='/' 
            className='px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] 
            flex items-center rounded-full text-center'> 
                <HandThumbUpIcon className='h-6 w-6'/>
                Sign up
            </Link> */}
        </div>

    </header>
  )
}

export default Header