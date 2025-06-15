// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import Header from './components/Header'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        <Header />
        <main className="p-4">{children}</main>
      </body>
    </html>
  )
}
