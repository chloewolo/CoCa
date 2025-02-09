import { Analytics } from "@vercel/analytics/react"
import { Inter } from "next/font/google"
import "./globals.css"
import { Sidebar } from "./components/sidebar"
import type { Metadata } from "next"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "HR Communications Dashboard",
  description: "Sleek dashboard for HR teams to monitor communications",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>
        <div className="flex h-screen">
          <Sidebar />
          <main className="flex-1 overflow-y-auto p-8">{children}</main>
        </div>
        <Analytics />
      </body>
    </html>
  )
}

