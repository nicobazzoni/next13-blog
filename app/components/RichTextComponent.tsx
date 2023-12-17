import Image from 'next/image';
import Link from 'next/link';
import urlFor from '../../lib/urlFor';

// Define TypeScript interfaces for expected types
interface ImageValue {
    _type: 'image';
    size: string;
    alt?: string;
    asset: {
        _ref: string;
    };
}

interface LinkValue {
    href: string;
}

// Define the Rich Text Component with proper TypeScript types
export const RichTextComponent = {
    types: {
        image: ({ value }: { value: ImageValue }) => {
            let imageClasses = 'relative m-10 mx-auto'; // Default classes

            // Adjust classes based on the image size attribute
            switch (value.size) {
                case 'small':
                    imageClasses += ' w-1/4'; // Adjust the width as needed
                    break;
                case 'medium':
                    imageClasses += ' w-1/2'; // Adjust the width as needed
                    break;
                case 'large':
                    imageClasses += ' w-full'; // Adjust the width as needed
                    break;
                // Add more cases for other sizes if needed
            }
            console.log('Image URL:', urlFor(value.asset).url());
            return (
                <div className={imageClasses} style={{ position: 'relative' }}>
                  <Image
    src={urlFor(value.asset).url()}
    alt={value.alt || 'Blog Image'}
    layout="responsive"
    width={500} // Example width, adjust as needed
    height={300} // Example height, adjust as needed
/>
                </div>
            );
        },
        // ... other types
    },
  
    list: {
        bullet: ({ children }: { children: React.ReactNode }) => (
            <ul className='ml-10 py-5 list-disc space-y-5'>{children}</ul>
        ),
        number: ({ children }: { children: React.ReactNode }) => (
            <ol className='ml-10 py-5 list-decimal space-y-5'>{children}</ol>
        ),
    },
  block: {
    h1: ({ children }: { children: React.ReactNode } ) => (
      <h1 className="text-4xl font-extrabold">{children}</h1>
    ),
    h2: ({ children }: { children: React.ReactNode }) => (
      <h2 className="text-3xl font-extrabold">{children}</h2>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
      <h3 className="text-2xl font-extrabold">{children}</h3>
    ),
    h4: ({ children }: { children: React.ReactNode }) => (
      <h4 className="text-xl font-extrabold">{children}</h4>
    ),
    blockquote: ({ children }: { children: React.ReactNode }) => (
      <blockquote className="text-lg italic border-l-4 pl-5 py-5 my-5">{children}</blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: { children: React.ReactNode, value: LinkValue }) => {
      const rel = !value.href.startsWith('/') ? 'noopener noreferrer' : undefined;
      return (
        <Link href={value.href} rel={rel}className="underline decoration-red-500 hover:decoration-black">
          {children}
        </Link>
      );
    },
  },
};


export default RichTextComponent;
