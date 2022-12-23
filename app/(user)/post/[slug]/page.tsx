
import { groq } from "next-sanity"
import Image from "next/image"
import { client } from "../../../../lib/sanity.client"
import urlFor from "../../../../lib/urlFor"
import  { PortableText } from "@portabletext/react"
import { RichTextComponent } from "../../../components/RichTextComponent"


type Props = {
    params: {
        slug: string
    }

    name: string
}

async function Post({ params: { slug } }: Props) {
    const query = groq`
    *[_type == "post" && slug.current == $slug][0] 
    {...,
    author->,
    categories[]->,
    }
    `

    const post: Post = await client.fetch(query, { slug })
    console.log(post)

  return (
    <article className="px-10 pb-28"> 
        <section className="space-y-2 border-red-500 text-white">
            <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
                <div className='absolute top-0 w-full h-full opacity-10 blur-sm p-10'>
                    <Image  
                    className='object-cover object-center mx-auto'
                    src={urlFor(post.mainImage).url()}
                    alt={post.author.name}
                    fill
                    
                    />
                </div>
                <section className="p-5 bg-slate-500 w-full">
                    <div className="flex flex-col md:flex-row justify-between gap-y-5">
                        <div>
                            <h1 className="text-4xl font-extrabold">{post.title}</h1>
                            <p> 
                                {new Date(post._createdAt).toLocaleDateString( 
                                    "en-US", {
                                        day: "numeric",
                                        month: "long",
                                        year: "numeric",

                                    })}
                            </p>
                        </div>
                        <div>
                            <Image 

                            className="rounded-full"
                            src={urlFor(post.author.image).url()}
                            alt={post.author.name}
                            width={40}
                            height={40}
                            
                            />
                        

                        <div className="w-64">
                            <h2 className="italic pt-10"> {post.description}</h2>
                            <h3 className="text-lg font-bold">{post.author.name}</h3>
                            
                            {/* bio */}
                        </div>
                      </div>  
                    </div> 
                    <div className="flex items-center justify-end mt-auto space-x-2">
                        {post.categories.map((category) => ( 
                            <p  
                            key={category._id}
                            className="bg-red-500 text-center text-black px-3 py-1 rounded-full text-sm font-semibold">
                                {category.title}
                            

                            </p>
                        ))}
                    </div>
                </section>
            </div>
        </section>

        <PortableText value={post.body} components={RichTextComponent} />
    </article>
  )
}

export default Post