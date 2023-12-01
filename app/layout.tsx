
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Provider } from 'react-redux'
import {store} from '@/redux-config/store'
import { persistStore } from "redux-persist";
persistStore(store); // persist the store

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Who’s In Town",
  description: 'events app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  return (
    <html lang="en">
     
        <body className={inter.className}>
     {children}
        </body>
   
    </html>
  )
}
