import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Labubu Shooter - Play the Cutest Online Shooting Game Free",
  description:
    "Join Labubu in an adorable shooting adventure! Play Labubu Shooter online for free - the cutest bubble shooter game featuring everyone's favorite character.",
  generator: "Next.js",
  applicationName: "Labubu Shooter",
  referrer: "origin-when-cross-origin",
  keywords: [
    "labubu shooter",
    "labubu game",
    "online shooting game",
    "bubble shooter",
    "cute games",
    "free online games",
  ],
  authors: [{ name: "Labubu Shooter Team" }],
  creator: "Labubu Shooter",
  publisher: "Labubu Shooter",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://labubushooter.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Labubu Shooter - Play the Cutest Online Shooting Game Free",
    description: "Join Labubu in an adorable shooting adventure! Play online for free.",
    url: "https://labubushooter.com",
    siteName: "Labubu Shooter",
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
