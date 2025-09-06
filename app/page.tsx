import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Labubu Shooter - Play the Cutest Online Shooting Game Free",
  description:
    "Join Labubu in an adorable shooting adventure! Play Labubu Shooter online for free - the cutest bubble shooter game featuring everyone's favorite character.",
  keywords: "labubu shooter, labubu game, online shooting game, bubble shooter, cute games, free online games, labubu",
  authors: [{ name: "Labubu Shooter Team" }],
  creator: "Labubu Shooter",
  publisher: "Labubu Shooter",
  robots: "index, follow",
  openGraph: {
    title: "Labubu Shooter - Play the Cutest Online Shooting Game Free",
    description: "Join Labubu in an adorable shooting adventure! Play online for free.",
    url: "https://labubushooter.com",
    siteName: "Labubu Shooter",
    type: "website",
    images: [
      {
        url: "/labubu-character-shooting-game-colorful.jpg",
        width: 1200,
        height: 630,
        alt: "Labubu Shooter Game",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Labubu Shooter - Play the Cutest Online Shooting Game Free",
    description: "Join Labubu in an adorable shooting adventure! Play online for free.",
    images: ["/labubu-character-shooting-game-colorful.jpg"],
  },
  alternates: {
    canonical: "https://labubushooter.com",
  },
}

export default function LabubuShooterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-primary/20 rounded-full animate-float"></div>
        <div
          className="absolute top-40 right-20 w-6 h-6 bg-secondary/20 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-3 h-3 bg-accent/20 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-5 h-5 bg-primary/20 rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Header */}
      <header className="container mx-auto px-4 py-8 relative z-10">
        <div className="text-center">
          <div className="relative inline-block mb-6">
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4 animate-bounce-gentle font-sans">
              Labubu Shooter
            </h1>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full animate-sparkle"></div>
            <div
              className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary rounded-full animate-sparkle"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto font-medium leading-relaxed">
            Join the adorable Labubu in the most exciting shooting adventure online!
          </p>
          <button className="mt-6 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            🎯 Play Now - It's Free!
          </button>
        </div>
      </header>

      {/* Game Container */}
      <main className="container mx-auto px-4 py-8 relative z-10">
        <div className="bg-card/90 backdrop-blur-lg rounded-3xl shadow-2xl p-6 md:p-10 mb-16 border border-border/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
          <div className="relative z-10">
            <div className="aspect-video w-full max-w-5xl mx-auto">
              <iframe
                src="https://html5.gamemonetize.co/klzoqsmeofr7ylbhwhbwy9znj3n4ucsw/"
                title="Labubu Shooter Game"
                className="w-full h-full rounded-2xl border-4 border-primary/20 shadow-inner"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="group bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-border/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full -translate-y-10 translate-x-10"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🎮</span>
                </div>
                <h2 className="text-3xl font-black text-primary">About Labubu Shooter</h2>
              </div>
              <p className="text-foreground/80 leading-relaxed mb-6 text-lg">
                Dive into the magical world of Labubu Shooter, where cuteness meets excitement! This delightful online
                shooting game features the beloved Labubu character in colorful, engaging gameplay that's perfect for
                players of all ages.
              </p>
              <p className="text-foreground/80 leading-relaxed text-lg">
                Experience smooth controls, vibrant graphics, and endless fun as you help Labubu navigate through
                challenging levels filled with surprises and rewards.
              </p>
            </div>
          </div>

          <div className="group bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-border/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full -translate-y-8 -translate-x-8"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h2 className="text-3xl font-black text-secondary">Game Features</h2>
              </div>
              <div className="space-y-4">
                {[
                  { icon: "🎯", text: "Adorable Labubu character design", color: "bg-primary" },
                  { icon: "🎮", text: "Smooth and responsive controls", color: "bg-secondary" },
                  { icon: "🌈", text: "Colorful and engaging graphics", color: "bg-accent" },
                  { icon: "🏆", text: "Multiple challenging levels", color: "bg-primary" },
                  { icon: "🆓", text: "Free to play online", color: "bg-secondary" },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center group/item hover:bg-muted/50 rounded-lg p-3 transition-all duration-200"
                  >
                    <div
                      className={`w-8 h-8 ${feature.color} rounded-full flex items-center justify-center mr-4 text-sm group-hover/item:scale-110 transition-transform duration-200`}
                    >
                      {feature.icon}
                    </div>
                    <span className="text-foreground/80 text-lg font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-card/90 to-muted/90 backdrop-blur-lg rounded-3xl p-8 md:p-12 mb-16 border border-border/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-center text-primary mb-12">
              How to Play Labubu Shooter
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Aim Carefully",
                  desc: "Use your mouse or touch controls to aim Labubu's shooter in the right direction.",
                  icon: "🎯",
                  color: "primary",
                },
                {
                  step: "2",
                  title: "Shoot & Match",
                  desc: "Click or tap to shoot and match colors to clear the board and score points.",
                  icon: "💥",
                  color: "secondary",
                },
                {
                  step: "3",
                  title: "Win Levels",
                  desc: "Complete objectives and advance through increasingly challenging levels.",
                  icon: "🏆",
                  color: "accent",
                },
              ].map((item, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-all duration-300">
                  <div
                    className={`w-20 h-20 bg-${item.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 animate-float`}
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <div
                    className={`w-12 h-12 bg-${item.color}/20 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-${item.color}`}
                  >
                    <span className={`text-2xl font-black text-${item.color}`}>{item.step}</span>
                  </div>
                  <h3 className="font-black text-xl text-foreground mb-3">{item.title}</h3>
                  <p className="text-foreground/70 text-base leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-br from-card/90 to-background/90 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-border/20 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">💖</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-8">Why Labubu Fans Love This Game</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-foreground/80 leading-relaxed mb-8 font-medium">
                Labubu Shooter combines the irresistible charm of the beloved Labubu character with addictive shooting
                gameplay. Whether you're a longtime Labubu fan or new to this adorable universe, you'll find yourself
                captivated by the cute graphics, smooth gameplay, and satisfying progression system.
              </p>
              <p className="text-xl text-foreground/80 leading-relaxed mb-8 font-medium">
                Perfect for quick gaming sessions or extended play, Labubu Shooter offers endless entertainment that's
                both relaxing and challenging. Join millions of players worldwide in this delightful shooting adventure!
              </p>
              <button className="px-10 py-5 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-black rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl">
                🚀 Start Playing Now!
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="container mx-auto px-4 py-12 text-center relative z-10">
        <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border/20">
          <p className="text-foreground/60 text-lg font-medium">
            © 2024 Labubu Shooter. Play the cutest online shooting game for free!
          </p>
        </div>
      </footer>
    </div>
  )
}
