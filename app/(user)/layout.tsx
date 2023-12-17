
import "../../styles/globals.css"
import Banner from "../components/Banner"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className='max-2-7xl mx-auto'>
     <Header />
     <Banner />

     
      {children}
      <Footer  /> 
      </body>
    </html>
  )
}
