import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { LoadingScreen } from "@/components/loading-screen"
import { Suspense } from "react"

export const metadata = {
  title: "Mario Tech - Level Up Your Digital Presence",
  description: "A tech agency specializing in web development, app development, digital marketing, and UI/UX design.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Suspense fallback={<LoadingScreen />}>
            <SiteHeader />
            <main>{children}</main>
            <SiteFooter />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'