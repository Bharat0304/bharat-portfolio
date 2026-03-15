import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./global.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Bharat Kumar — Full Stack Developer | AI Systems Builder",
  description:
    "Full Stack Developer, AI Systems Builder, and Web3 Enthusiast. Building scalable web apps, AI-powered systems, and developer tools.",
  icons: {
    icon: "/ProfileImage.jpg",
    apple: "/ProfileImage.jpg",
  },
  openGraph: {
    title: "Bharat Kumar — Full Stack Developer | AI Systems Builder",
    description:
      "Full Stack Developer, AI Systems Builder, and Web3 Enthusiast. Building scalable web apps, AI-powered systems, and developer tools.",
    type: "website",
  },
}

import { Providers } from "@/components/providers"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
