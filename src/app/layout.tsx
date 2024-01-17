import { PropsWithChildren } from 'react'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { ThemeModeToggle } from '@/components/theme-mode-toggle'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'LCS BCKR FLSBRT | Full Stack Software Engineer',
  description: 'Resume',
}

export default function RootLayout({
  children,
}: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
