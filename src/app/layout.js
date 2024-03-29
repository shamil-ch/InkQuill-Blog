import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/Navbar/NavBar'
import Footer from '@/components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'InkQuill',
    template: " InkQuill | %s ",
  },
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='container'>
        <NavBar />
        {children}
        <Footer />
        </div>
      </body>
    </html>
  )
}
