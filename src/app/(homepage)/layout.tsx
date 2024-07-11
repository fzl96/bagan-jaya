import { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Desa Bagan Jaya',
  description: 'Homepage description',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen font-sans antialiased', inter.variable)}>
        {/* Layout UI */}
        <main>{children}</main>
      </body>
    </html>
  )
}
