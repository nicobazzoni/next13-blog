import Image from 'next/image'
import Link from 'next/link'
import { ValueError } from 'sanity'
import urlFor from '../../lib/urlFor'


export const RichTextComponent = {
    types: {
        image: ({value}: any) => {
            return (
                <div>
                    <Image 
                    className='relative w-full h-96 m-10 mx-auto'  
                    src={(urlFor(value).url())}
                    alt="Blog Image"
                    fill
                    
                    />
                </div>
            );
        },
    },
 
    
      list: { 
        bullet: ({ children}: any) => (
            <ul className='ml-10 py-5 list-desc space-y-5'> {children}</ul>
        ),
        number: ({children}: any) => (
            <ol className='mt-lg list-decimal'>{children}</ol>
        ),
      },
      block: {
        h1: ({ children }: any) => (
            <h1 className="text-4xl font-extrabold">{children}</h1>
        ),
        h2: ({ children }: any) => (
            <h2 className="text-3xl font-extrabold">{children}</h2>
        ),
        h3: ({ children }: any) => (

            <h3 className="text-2xl font-extrabold">{children}</h3>
        ),
        h4: ({ children }: any) => (
            <h4 className="text-xl font-extrabold">{children}</h4>
        ),
     
        blockquote: ({ children }: any) => (
            <blockquote className="text-lg italic border-l-4 pl-5 py-5 my-5">{children}</blockquote>
        ),
},
    marks: {
        link: ({ children, value }: any) => {
            const rel = !value.href.startsWith('/')
            ? 'noopener noreferrer'
            : undefined
            return (
               
                    <Link href={value.href}
                rel={rel}
                className="underline decoration-red-500 hover:decoration-black"
                >
                    {children}
                </Link>
            )

            }
    }
}

       