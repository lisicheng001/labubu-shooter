import type { Metadata } from "next"
import LabubuShooterPageClient from "./LabubuShooterPageClient"

export const metadata: Metadata = {
  title: "Labubu Gaming Hub - Play the Cutest Online Shooting Games Free",
  description:
    "Play TWO amazing games: Labubu Shooter and Arrow Survival! Dive into the magical world of Labubu and test your reflexes in this intense survival challenge.",
  keywords:
    "labubu shooter, labubu game, online shooting game, bubble shooter, cute games, free online games, labubu, arrow survival",
  authors: [{ name: "Labubu Gaming Hub Team" }],
  creator: "Labubu Gaming Hub",
  publisher: "Labubu Gaming Hub",
  robots: "index, follow",
  openGraph: {
    title: "Labubu Gaming Hub - Play the Cutest Online Shooting Games Free",
    description:
      "Play TWO amazing games: Labubu Shooter and Arrow Survival! Dive into the magical world of Labubu and test your reflexes in this intense survival challenge.",
    url: "https://labubushooter.com",
    siteName: "Labubu Gaming Hub",
    type: "website",
    images: [
      {
        url: "/labubu-character-shooting-game-colorful.jpg",
        width: 1200,
        height: 630,
        alt: "Labubu Shooter Game",
      },
      {
        url: "/arrow-survival-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Arrow Survival Game",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Labubu Gaming Hub - Play the Cutest Online Shooting Games Free",
    description:
      "Play TWO amazing games: Labubu Shooter and Arrow Survival! Dive into the magical world of Labubu and test your reflexes in this intense survival challenge.",
    images: ["/labubu-character-shooting-game-colorful.jpg", "/arrow-survival-cover.jpg"],
  },
  alternates: {
    canonical: "https://labubushooter.com",
  },
}

export default function LabubuShooterPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Labubu Gaming Hub",
    url: "https://labubushooter.com",
    description: "Play amazing online games featuring Labubu characters and other exciting adventures",
    publisher: {
      "@type": "Organization",
      name: "Labubu Gaming Hub",
    },
    mainEntity: {
      "@type": "Game",
      name: "Labubu Shooter",
      description: "Join Labubu in an adorable shooting adventure! Play online for free.",
      genre: "Shooting Game",
      gamePlatform: "Web Browser",
      operatingSystem: "Any",
      applicationCategory: "Game",
    },
    potentialAction: {
      "@type": "PlayAction",
      target: "https://labubushooter.com",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <LabubuShooterPageClient />
    </>
  )
}
