import Image from "next/image";


function Logo(props: any) {
    const { renderDefault, title} = props;
  return (
    <div> 
        <Image
        className="h-8 w-auto" 
        height={50}
        width={50}
        src="https://links.papareact.com/1m8" 
        alt="logo"
         />
    </div>
  )
}

export default Logo