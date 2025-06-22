import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tharun Raman - Portfolio",
  description: "As an Integrated MSc student in Computer Science specializing in AI and ML, I’m driven by a deep passion for technology. My journey in AI, ML, and deep learning",
  keywords: ["portfolio", "developer", "tharun977", "github"],
  authors: [{ name: "Tharun Raman" }],
  openGraph: {
    title: "Tharun Raman - Portfolio",
    description: "As an Integrated MSc student in Computer Science specializing in AI and ML, I’m driven by a deep passion for technology. My journey in AI, ML, and deep learning",
    images: ["https://avatars.githubusercontent.com/u/116884536?v=4"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tharun Raman - Portfolio",
    description: "As an Integrated MSc student in Computer Science specializing in AI and ML, I’m driven by a deep passion for technology. My journey in AI, ML, and deep learning",
    images: ["https://avatars.githubusercontent.com/u/116884536?v=4"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}