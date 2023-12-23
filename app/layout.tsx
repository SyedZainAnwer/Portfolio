import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Syed Zain Anwer',
  description: 'Zain is a front end developer with 2 years of experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative`}>
        <div className='bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25] rounded-full sm:w-[68.75rem] blur-[10rem] -z-10'>
        </div>

        <div className='bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50] rounded-full sm:w-[68.75rem] blur-[10rem] md:left[-33rem] lg:[-28rem] xl:left[-15rem] 2xl:left[-5rem] -z-10'></div>
        {children}
      </body>
    </html>
  )
}
