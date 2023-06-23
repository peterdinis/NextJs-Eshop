"use client"

import { Inter } from 'next/font/google';
import "../styles/main.css";
import {Metadata} from "next";
import Head from 'next/head';

export const metadata: Metadata = {
  title: 'MyFoodShop'
}
 

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>PING</title>
      </Head>
      <body  className={inter.className}>{children}</body>
    </html>
  )
}
