type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
   

}

interface Post extends Base {
    author: Author[];
    body: Block[];
    categories: Reference[];
    mainImage: Image;
    slug: Slug;
    title: string;
    description: string;

}

interface Author extends Base {
    bio: Block[];
    image: Image;
    name: string;
    slug: Slug;

}

interface Image {
    alt: string;
    _type: "image";
    asset: "reference";
}

interface Reference {
    _id: Key | null | undefined;
    title: ReactNode;
    _ref: string;
    _type: "reference";
}

interface Slug {
    _type: "slug";
    current: string;
}

interface Block { 
    _key:  string;
    _type: "block";
    children: Span[];
    markDefs: MarkDef[];
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
}

interface Span {
    _type: "span";
    marks: string[];
    text: string;
}

interface Category {
    description: string 
    title: string;
}

interface Title { 
    _type: "string";
    current: string
}