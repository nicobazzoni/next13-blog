import Link from 'next/link'
import { ArrowUturnLeftIcon} from '@heroicons/react/24/solid'

function StudioNavbar(props: any) {
  return (
    <div> 
        <div className='flex items-center justify-between'>
            <Link   href='/' className='text-[] flex items-center text-white'> 
            <ArrowUturnLeftIcon className='h-6 w-6'/>
              Website
            </Link>
        </div>
        <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar