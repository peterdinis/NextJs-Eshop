"use client"

import { Inter } from 'next/font/google';
import GlobalStyle from '../styles/Global.styled'
import Seo from '@/components/shared/Seo'

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Seo />
      <GlobalStyle />
        <body className={inter.className}>{children}</body>
    </html>
  )
}
