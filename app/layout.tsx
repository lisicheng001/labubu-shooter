import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Labubu Gaming Hub - Play the Cutest Online Games Free",
  description:
    "Play amazing online games featuring Labubu characters including Labubu Shooter, Arrow Survival, and more exciting adventures!",
  generator: "Next.js",
  applicationName: "Labubu Gaming Hub",
  referrer: "origin-when-cross-origin",
  keywords: [
    "labubu shooter",
    "labubu game",
    "online games",
    "free games",
    "arrow survival",
    "cute games",
    "browser games",
  ],
  authors: [{ name: "Labubu Gaming Hub Team" }],
  creator: "Labubu Gaming Hub",
  publisher: "Labubu Gaming Hub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://labubushooter.com"),
  alternates: {
    canonical: "https://labubushooter.com", // Made canonical URL absolute for consistency
  },
  openGraph: {
    title: "Labubu Gaming Hub - Play the Cutest Online Games Free",
    description: "Play amazing online games featuring Labubu characters and exciting adventures!",
    url: "https://labubushooter.com",
    siteName: "Labubu Gaming Hub",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
