"use client"

import { useState } from "react"

export default function LabubuShooterPageClient() {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const openModal = (gameId: string) => setActiveModal(gameId)
  const closeModal = () => setActiveModal(null)

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
        {/* New extravagant floating elements */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/3 w-6 h-6 bg-secondary/25 rounded-full animate-bounce"></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-10 h-10 bg-gradient-to-br from-primary/15 to-accent/15 rounded-full animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Header */}
      <header className="container mx-auto px-4 py-8 relative z-10">
        <div className="text-center">
          <div className="relative inline-block mb-6">
            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4 animate-bounce-gentle font-sans drop-shadow-2xl">
              Labubu Gaming Hub
            </h1>
            <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-secondary to-accent rounded-full animate-sparkle shadow-lg"></div>
            <div
              className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full animate-sparkle shadow-lg"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 -right-8 w-6 h-6 bg-accent rounded-full animate-ping"
              style={{ animationDelay: "2s" }}
            ></div>
            <div
              className="absolute top-1/4 -left-8 w-4 h-4 bg-primary rounded-full animate-pulse"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>
          <p className="text-2xl md:text-3xl text-foreground/90 max-w-3xl mx-auto font-bold leading-relaxed drop-shadow-lg">
            🌟 Play TWO Amazing Games: Labubu Shooter & Arrow Survival! 🌟
          </p>
          <button
            className="mt-8 px-12 py-6 text-white font-black rounded-full text-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-3xl animate-pulse border-2 border-orange-600"
            style={{
              background: "linear-gradient(to right, #f97316, #dc2626, #ec4899)",
              backgroundColor: "#dc2626", // Fallback solid color
            }}
          >
            🎯✨ PLAY BOTH GAMES - FREE! ✨🎯
          </button>
        </div>
      </header>

      {/* Dual Game Container */}
      <main className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {/* Labubu Shooter Game */}
          <div
            className="bg-gradient-to-br from-pink-100/95 via-purple-50/90 to-pink-100/95 backdrop-blur-xl rounded-3xl shadow-3xl p-6 border-2 border-pink-300/50 relative overflow-hidden group hover:scale-105 transition-all duration-500 cursor-pointer"
            onClick={() => openModal("labubu-shooter")}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-200/20 via-purple-100/10 to-pink-200/20"></div>
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-pink-400 via-purple-400 to-pink-400"></div>
            <div className="relative z-10">
              <div className="mb-4 relative">
                <img
                  src="/labubu-shooter-cover.jpg"
                  alt="Labubu Shooter Game Cover"
                  className="w-full h-40 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl flex items-end p-3">
                  <h3 className="text-xl font-black text-white drop-shadow-lg">🎯 Labubu Shooter</h3>
                </div>
                <div className="absolute top-2 right-2 bg-pink-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                  CUTE & FUN!
                </div>
              </div>
              <p className="text-gray-700 font-medium text-sm mb-3">
                Join adorable Labubu in the cutest shooting adventure!
              </p>
              <button
                className="w-full px-4 py-2 text-white font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg text-sm"
                style={{ background: "linear-gradient(to right, #ec4899, #a855f7)", backgroundColor: "#ec4899" }}
              >
                🌸 Play Now 🌸
              </button>
            </div>
          </div>

          {/* Arrow Survival Game */}
          <div
            className="bg-gradient-to-br from-red-100/95 via-orange-50/90 to-yellow-100/95 backdrop-blur-xl rounded-3xl shadow-3xl p-6 border-2 border-red-300/50 relative overflow-hidden group hover:scale-105 transition-all duration-500 cursor-pointer"
            onClick={() => openModal("arrow-survival")}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-200/20 via-orange-100/10 to-yellow-200/20"></div>
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400"></div>
            <div className="relative z-10">
              <div className="mb-4 relative">
                <img
                  src="/arrow-survival-cover.jpg"
                  alt="Arrow Survival Game Cover"
                  className="w-full h-40 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl flex items-end p-3">
                  <h3 className="text-xl font-black text-white drop-shadow-lg">🏹 Arrow Survival</h3>
                </div>
                <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                  INTENSE!
                </div>
              </div>
              <p className="text-gray-700 font-medium text-sm mb-3">
                Survive the arrow storm! Test your reflexes in 15 seconds.
              </p>
              <button
                className="w-full px-4 py-2 text-white font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg text-sm"
                style={{ background: "linear-gradient(to right, #ef4444, #f97316)", backgroundColor: "#ef4444" }}
              >
                🔥 Play Now 🔥
              </button>
            </div>
          </div>

          {/* Placeholder game slots for future games */}
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-100/95 via-gray-50/90 to-gray-100/95 backdrop-blur-xl rounded-3xl shadow-3xl p-6 border-2 border-gray-300/50 relative overflow-hidden group hover:scale-105 transition-all duration-500 cursor-pointer opacity-60"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200/20 via-gray-100/10 to-gray-200/20"></div>
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400"></div>
              <div className="relative z-10">
                <div className="mb-4 relative">
                  <div className="w-full h-40 bg-gray-200 rounded-2xl shadow-lg flex items-center justify-center">
                    <span className="text-4xl">🎮</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl flex items-end p-3">
                    <h3 className="text-xl font-black text-white drop-shadow-lg">Coming Soon</h3>
                  </div>
                  <div className="absolute top-2 right-2 bg-gray-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                    SOON!
                  </div>
                </div>
                <p className="text-gray-500 font-medium text-sm mb-3">New exciting game coming soon!</p>
                <button className="w-full px-4 py-2 text-white font-bold rounded-full shadow-lg text-sm bg-gray-400 cursor-not-allowed">
                  🚀 Coming Soon 🚀
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* About Labubu Shooter */}
        <div className="group bg-gradient-to-br from-card/95 via-background/90 to-card/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 mb-16 border-2 border-primary/30 hover:border-primary/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full -translate-y-12 translate-x-12 group-hover:scale-150 transition-transform duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:animate-bounce">
                <span className="text-3xl">🎮</span>
              </div>
              <h2 className="text-4xl font-black text-primary group-hover:text-secondary transition-colors duration-300">
                About Labubu Shooter
              </h2>
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

        {/* Game Features */}
        <div className="group bg-gradient-to-br from-card/90 via-background/80 to-card/90 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border-2 border-secondary/20 hover:border-secondary/50 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-secondary/30 to-accent/30 rounded-full -translate-y-10 -translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:animate-spin">
                <span className="text-3xl">✨</span>
              </div>
              <h2 className="text-4xl font-black text-secondary group-hover:text-accent transition-colors duration-300">
                Game Features
              </h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  icon: "🎯",
                  text: "Adorable Labubu character design",
                  color: "bg-gradient-to-r from-primary to-secondary",
                },
                {
                  icon: "🎮",
                  text: "Smooth and responsive controls",
                  color: "bg-gradient-to-r from-secondary to-accent",
                },
                {
                  icon: "🌈",
                  text: "Colorful and engaging graphics",
                  color: "bg-gradient-to-r from-accent to-primary",
                },
                { icon: "🏆", text: "Multiple challenging levels", color: "bg-gradient-to-r from-primary to-accent" },
                { icon: "🆓", text: "Free to play online", color: "bg-gradient-to-r from-secondary to-primary" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center group/item hover:bg-gradient-to-r hover:from-muted/50 hover:to-background/50 rounded-xl p-4 transition-all duration-300 transform hover:scale-105"
                >
                  <div
                    className={`w-12 h-12 ${feature.color} rounded-full flex items-center justify-center mr-4 text-lg group-hover/item:scale-125 group-hover/item:rotate-12 transition-all duration-300 shadow-lg`}
                  >
                    {feature.icon}
                  </div>
                  <span className="text-foreground/90 text-xl font-bold group-hover/item:text-primary transition-colors duration-300">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How to Play Labubu Shooter */}
        <div className="bg-gradient-to-r from-card/95 via-background/90 to-card/95 backdrop-blur-xl rounded-3xl p-10 md:p-16 mb-16 border-2 border-accent/30 relative overflow-hidden shadow-3xl">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10"></div>
          <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-primary via-secondary to-accent"></div>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black text-center bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-16 drop-shadow-2xl">
              🎯 How to Play Labubu Shooter 🎯
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  step: "1",
                  title: "🎯 Aim Carefully",
                  desc: "Use your mouse or touch controls to aim Labubu's shooter in the right direction.",
                  icon: "🎯",
                  color: "primary",
                  gradient: "from-primary to-secondary",
                },
                {
                  step: "2",
                  title: "💥 Shoot & Match",
                  desc: "Click or tap to shoot and match colors to clear the board and score points.",
                  icon: "💥",
                  color: "secondary",
                  gradient: "from-secondary to-accent",
                },
                {
                  step: "3",
                  title: "🏆 Win Levels",
                  desc: "Complete objectives and advance through increasingly challenging levels.",
                  icon: "🏆",
                  color: "accent",
                  gradient: "from-accent to-primary",
                },
              ].map((item, index) => (
                <div key={index} className="text-center group hover:scale-110 transition-all duration-500">
                  <div
                    className={`w-28 h-28 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl group-hover:shadow-3xl transition-all duration-500 animate-float group-hover:animate-bounce`}
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <span className="text-4xl drop-shadow-lg">{item.icon}</span>
                  </div>
                  <div
                    className={`w-16 h-16 bg-gradient-to-br from-${item.color}/30 to-${item.color}/50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-${item.color} shadow-xl group-hover:animate-pulse`}
                  >
                    <span className={`text-3xl font-black text-${item.color} drop-shadow-lg`}>{item.step}</span>
                  </div>
                  <h3 className="font-black text-2xl text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-foreground/80 text-lg leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Labubu Fans Love This Game */}
        <div className="text-center bg-gradient-to-br from-card/95 via-background/90 to-card/95 backdrop-blur-xl rounded-3xl p-10 md:p-16 border-2 border-primary/30 relative overflow-hidden shadow-3xl">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full translate-y-16 translate-x-16 animate-bounce"></div>
          <div className="relative z-10">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl animate-float">
              <span className="text-4xl">💖</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-12 drop-shadow-2xl">
              💖 Why Labubu Fans Love This Game 💖
            </h2>
            <p className="text-xl text-foreground/80 leading-relaxed mb-8 font-medium">
              Labubu Shooter combines the irresistible charm of the beloved Labubu character with addictive shooting
              gameplay. Whether you're a longtime Labubu fan or new to this adorable universe, you'll find yourself
              captivated by the cute graphics, smooth gameplay, and satisfying progression system.
            </p>
            <p className="text-xl text-foreground/80 leading-relaxed mb-8 font-medium">
              Perfect for quick gaming sessions or extended play, Labubu Shooter offers endless entertainment that's
              both relaxing and challenging. Join millions of players worldwide in this delightful shooting adventure!
            </p>
            <button
              className="px-16 py-8 text-white font-black rounded-full text-3xl transition-all duration-500 transform hover:scale-115 shadow-3xl hover:shadow-4xl animate-pulse hover:animate-bounce border-2 border-orange-600"
              style={{
                background: "linear-gradient(to right, #f97316, #dc2626, #ec4899)",
                backgroundColor: "#dc2626", // Fallback solid color
              }}
            >
              🚀✨ START PLAYING NOW! ✨🚀
            </button>
          </div>
        </div>
      </main>

      {/* Modal System for Games */}
      {activeModal && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-3xl shadow-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-3xl font-black text-gray-800">
                {activeModal === "labubu-shooter" ? "🎯 Labubu Shooter" : "🏹 Arrow Survival"}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 text-4xl font-bold hover:scale-110 transition-all duration-300"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <div className="aspect-video w-full">
                <iframe
                  src={
                    activeModal === "labubu-shooter"
                      ? "https://html5.gamemonetize.co/klzoqsmeofr7ylbhwhbwy9znj3n4ucsw/"
                      : "https://html5.gamemonetize.co/oqyu2giimhs2eegfvn1wd9xo5p862dpz/"
                  }
                  title={activeModal === "labubu-shooter" ? "Labubu Shooter Game" : "Arrow Survival: 15 Seconds"}
                  className="w-full h-full rounded-2xl border-4 border-gray-300 shadow-2xl"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center relative z-10">
        <div className="bg-gradient-to-r from-card/80 via-background/70 to-card/80 backdrop-blur-lg rounded-2xl p-8 border-2 border-primary/20 shadow-xl">
          <p className="text-foreground/70 text-xl font-bold">
            ✨ © 2024 Labubu Gaming Hub. Play the cutest online shooting games for free! ✨
          </p>
        </div>
      </footer>
    </div>
  )
}
