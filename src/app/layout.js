import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ApexShiled | SLIIT 23_141',
  description: 'AI-Powered Financial Liquidity Management System for SME Apparel Businesses in Sri Lanka',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
