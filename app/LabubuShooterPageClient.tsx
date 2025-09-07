"use client"

import { useState } from "react"

export default function LabubuShooterPageClient() {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const openModal = (gameId: string) => setActiveModal(gameId)
  const closeModal = () => setActiveModal(null)

  const games = [
    {
      id: "labubu-shooter",
      title: "🎯 Labubu Shooter",
      description: "Join adorable Labubu in the cutest shooting adventure!",
      cover: "/labubu-shooter-cover.jpg",
      iframe: "https://html5.gamemonetize.co/klzoqsmeofr7ylbhwhbwy9znj3n4ucsw/",
      badge: "CUTE & FUN!",
      badgeColor: "bg-pink-500",
      gradient: "from-pink-100/95 via-purple-50/90 to-pink-100/95",
      borderColor: "border-pink-300/50",
      topBar: "from-pink-400 via-purple-400 to-pink-400",
      buttonStyle: { background: "linear-gradient(to right, #ec4899, #a855f7)", backgroundColor: "#ec4899" },
      buttonText: "🌸 Play Now 🌸",
      rating: 4.9,
      views: "2.3M",
      comments: [
        {
          user: "LabubuLover23",
          text: "OMG this is so cute! I can't stop playing! The graphics are amazing 😍",
          time: "2 hours ago",
        },
        {
          user: "GamerGirl_Sarah",
          text: "Best shooting game ever! Labubu is adorable and the gameplay is super smooth",
          time: "5 hours ago",
        },
        {
          user: "CuteFan99",
          text: "I'm obsessed! This game is perfect for relaxing after work. Love the colors!",
          time: "1 day ago",
        },
      ],
    },
    {
      id: "arrow-survival",
      title: "🏹 Arrow Survival",
      description: "Survive the arrow storm! Test your reflexes in 15 seconds.",
      cover: "/arrow-survival-cover.jpg",
      iframe: "https://html5.gamemonetize.co/oqyu2giimhs2eegfvn1wd9xo5p862dpz/",
      badge: "INTENSE!",
      badgeColor: "bg-red-500",
      gradient: "from-red-100/95 via-orange-50/90 to-yellow-100/95",
      borderColor: "border-red-300/50",
      topBar: "from-red-400 via-orange-400 to-yellow-400",
      buttonStyle: { background: "linear-gradient(to right, #ef4444, #f97316)", backgroundColor: "#ef4444" },
      buttonText: "🔥 Play Now 🔥",
      rating: 4.8,
      views: "1.8M",
      comments: [
        {
          user: "SpeedDemon",
          text: "Holy cow this is intense! My heart was racing the whole time. So addictive!",
          time: "1 hour ago",
        },
        {
          user: "ReflexMaster",
          text: "Perfect for testing your reflexes. Beat my high score 3 times already!",
          time: "4 hours ago",
        },
        {
          user: "AdrenalineJunkie",
          text: "15 seconds of pure adrenaline! This game is insane in the best way possible",
          time: "6 hours ago",
        },
      ],
    },
    {
      id: "rapid-apex-rush",
      title: "🏎️ Rapid Apex Rush",
      description: "High-speed racing action! Rush to the apex in this thrilling race!",
      cover: "/rapid-apex-rush-cover.jpg",
      iframe: "https://html5.gamemonetize.co/jp22mjv7m4b283qu7mhzsy599omxbi13/",
      badge: "FAST!",
      badgeColor: "bg-blue-500",
      gradient: "from-blue-100/95 via-cyan-50/90 to-blue-100/95",
      borderColor: "border-blue-300/50",
      topBar: "from-blue-400 via-cyan-400 to-blue-400",
      buttonStyle: { background: "linear-gradient(to right, #3b82f6, #06b6d4)", backgroundColor: "#3b82f6" },
      buttonText: "🏁 Race Now 🏁",
      rating: 4.7,
      views: "1.5M",
      comments: [
        {
          user: "RacingPro2024",
          text: "The speed is incredible! Graphics are smooth and controls feel amazing",
          time: "3 hours ago",
        },
        {
          user: "TurboFan",
          text: "Best racing game I've played online. The apex turns are so satisfying!",
          time: "7 hours ago",
        },
        {
          user: "SpeedKing",
          text: "Can't get enough of this! The rush you get from hitting those perfect turns 🏎️",
          time: "12 hours ago",
        },
      ],
    },
    {
      id: "brainrot-evolution",
      title: "🧠 Brainrot Evolution",
      description: "Evolve your brain in this quirky and mind-bending adventure!",
      cover: "/brainrot-evolution-cover.jpg",
      iframe: "https://html5.gamemonetize.co/c34zurvgw1w01fkf4n07idbggc6vvkbq/",
      badge: "WEIRD!",
      badgeColor: "bg-purple-500",
      gradient: "from-purple-100/95 via-indigo-50/90 to-purple-100/95",
      borderColor: "border-purple-300/50",
      topBar: "from-purple-400 via-indigo-400 to-purple-400",
      buttonStyle: { background: "linear-gradient(to right, #8b5cf6, #6366f1)", backgroundColor: "#8b5cf6" },
      buttonText: "🧪 Evolve Now 🧪",
      rating: 4.6,
      views: "980K",
      comments: [
        {
          user: "WeirdoGamer",
          text: "This game is so bizarre and I LOVE IT! My brain feels different after playing lol",
          time: "2 hours ago",
        },
        {
          user: "MindBender",
          text: "Totally unique concept! Never played anything like this before. Mind = blown 🤯",
          time: "8 hours ago",
        },
        {
          user: "QuirkyPlayer",
          text: "The evolution mechanics are genius! So weird but so addictive at the same time",
          time: "1 day ago",
        },
      ],
    },
    {
      id: "purrrification",
      title: "🐱 Purrrification",
      description: "Adorable cat-themed puzzle game that will purr-fect your day!",
      cover: "/purrrification-cover.jpg",
      iframe: "https://html5.gamemonetize.co/xcj55qktot7ucsj0lepq6hjd6egh1b1m/",
      badge: "ADORABLE!",
      badgeColor: "bg-pink-400",
      gradient: "from-pink-50/95 via-rose-50/90 to-pink-50/95",
      borderColor: "border-pink-200/50",
      topBar: "from-pink-300 via-rose-300 to-pink-300",
      buttonStyle: { background: "linear-gradient(to right, #f472b6, #fb7185)", backgroundColor: "#f472b6" },
      buttonText: "😻 Play Meow 😻",
      rating: 4.9,
      views: "1.2M",
      comments: [
        {
          user: "CatLady2024",
          text: "OMG the cats are SO CUTE! I'm literally melting from the adorableness 😻",
          time: "1 hour ago",
        },
        {
          user: "PuzzleMaster",
          text: "Perfect combination of cute cats and challenging puzzles. My new obsession!",
          time: "5 hours ago",
        },
        {
          user: "FelineFan",
          text: "This game purr-fectly captures my love for cats! The animations are precious 🐱",
          time: "9 hours ago",
        },
      ],
    },
    {
      id: "soccer-euro-cup",
      title: "⚽ Soccer Euro Cup 2025",
      description: "Experience the thrill of European football championship!",
      cover: "/soccer-euro-cup-cover.jpg",
      iframe:
        "https://embed.gamedistribution.com/?url=https://html5.gamedistribution.com/608b965aa08644ceabb138d27d8661af/&width=960&height=600",
      badge: "SPORTS!",
      badgeColor: "bg-green-500",
      gradient: "from-green-100/95 via-emerald-50/90 to-green-100/95",
      borderColor: "border-green-300/50",
      topBar: "from-green-400 via-emerald-400 to-green-400",
      buttonStyle: { background: "linear-gradient(to right, #22c55e, #10b981)", backgroundColor: "#22c55e" },
      buttonText: "⚽ Kick Off ⚽",
      rating: 4.8,
      views: "2.1M",
      comments: [
        {
          user: "FootballFanatic",
          text: "The Euro Cup atmosphere is incredible! Feels like I'm really there in the stadium!",
          time: "30 minutes ago",
        },
        {
          user: "SoccerPro",
          text: "Best football game online! The controls are responsive and graphics are top-notch ⚽",
          time: "3 hours ago",
        },
        {
          user: "ChampionPlayer",
          text: "Won the championship 5 times already! This game never gets old. GOOOAL!",
          time: "6 hours ago",
        },
      ],
    },
    {
      id: "planet-merge",
      title: "🪐 Planet Merge",
      description: "Merge planets and create your own cosmic universe!",
      cover: "/planet-merge-cover.jpg",
      iframe:
        "https://embed.gamedistribution.com/?url=https://html5.gamedistribution.com/fbf53a2f16d743ba84b370f6ad46f80b/&width=800&height=600",
      badge: "COSMIC!",
      badgeColor: "bg-indigo-500",
      gradient: "from-indigo-100/95 via-violet-50/90 to-indigo-100/95",
      borderColor: "border-indigo-300/50",
      topBar: "from-indigo-400 via-violet-400 to-indigo-400",
      buttonStyle: { background: "linear-gradient(to right, #6366f1, #8b5cf6)", backgroundColor: "#6366f1" },
      buttonText: "🌌 Merge Now 🌌",
      rating: 4.7,
      views: "1.4M",
      comments: [
        {
          user: "CosmicExplorer",
          text: "Creating my own universe is so satisfying! The planet designs are beautiful 🪐",
          time: "2 hours ago",
        },
        {
          user: "SpaceNerd",
          text: "This game feeds my space obsession perfectly! Love watching planets evolve and merge",
          time: "4 hours ago",
        },
        {
          user: "UniverseBuilder",
          text: "The merge mechanics are genius! Built a solar system with 50+ planets so far!",
          time: "8 hours ago",
        },
      ],
    },
  ]

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
        <div className="absolute top-1/4 left-1/4 text-4xl animate-bounce">🎮</div>
        <div className="absolute top-3/4 right-1/4 text-3xl animate-spin-slow">⭐</div>
        <div className="absolute top-1/2 left-1/3 text-2xl animate-pulse">🏆</div>
        <div className="absolute bottom-1/3 right-1/3 text-3xl animate-float">🎯</div>
        <div className="absolute top-1/6 right-1/6 text-2xl animate-bounce" style={{ animationDelay: "1.5s" }}>
          🚀
        </div>
        <div className="absolute bottom-1/6 left-1/6 text-3xl animate-pulse" style={{ animationDelay: "2.5s" }}>
          💎
        </div>
      </div>

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
            🌟 Play 7 Amazing Games: Labubu Shooter, Arrow Survival & More! 🌟
          </p>
          <button
            className="mt-8 px-12 py-6 text-white font-black rounded-full text-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-3xl animate-pulse border-2 border-orange-600"
            style={{
              background: "linear-gradient(to right, #f97316, #dc2626, #ec4899)",
              backgroundColor: "#dc2626", // Fallback solid color
            }}
          >
            🎯✨ PLAY ALL GAMES - FREE! ✨🎯
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {games.map((game) => (
            <div
              key={game.id}
              className={`bg-gradient-to-br ${game.gradient} backdrop-blur-xl rounded-3xl shadow-3xl p-6 border-2 ${game.borderColor} relative overflow-hidden group hover:scale-105 transition-all duration-500 cursor-pointer`}
              onClick={() => openModal(game.id)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${game.gradient.replace("/95", "/20").replace("/90", "/10")}`}
              ></div>
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${game.topBar}`}></div>
              <div className="relative z-10">
                <div className="mb-4 relative">
                  <img
                    src={game.cover || "/placeholder.svg"}
                    alt={`${game.title} Game Cover`}
                    className="w-full h-40 object-cover rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl flex items-end p-3">
                    <h3 className="text-xl font-black text-white drop-shadow-lg">{game.title}</h3>
                  </div>
                  <div
                    className={`absolute top-2 right-2 ${game.badgeColor} text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse`}
                  >
                    {game.badge}
                  </div>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < Math.floor(game.rating) ? "text-yellow-400" : "text-gray-300"}>
                          ⭐
                        </span>
                      ))}
                    </div>
                    <span className="ml-2 text-sm font-bold text-gray-700">{game.rating}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="mr-1">👁️</span>
                    <span className="font-bold">{game.views}</span>
                  </div>
                </div>
                <p className="text-gray-700 font-medium text-sm mb-3">{game.description}</p>
                <div className="mb-4 space-y-2">
                  <div className="text-xs font-bold text-gray-600 mb-2">💬 Player Reviews:</div>
                  {game.comments.slice(0, 2).map((comment, index) => (
                    <div key={index} className="bg-white/50 rounded-lg p-2 text-xs">
                      <div className="font-bold text-gray-800">{comment.user}</div>
                      <div className="text-gray-700 leading-tight">{comment.text}</div>
                      <div className="text-gray-500 text-xs mt-1">{comment.time}</div>
                    </div>
                  ))}
                </div>
                <button
                  className="w-full px-4 py-2 text-white font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg text-sm"
                  style={game.buttonStyle}
                >
                  {game.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

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
              <div className="flex items-center">
                <h2 className="text-3xl font-black text-gray-800 mr-4">
                  {games.find((game) => game.id === activeModal)?.title || "Game"}
                </h2>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400 text-lg">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={
                            i < Math.floor(games.find((game) => game.id === activeModal)?.rating || 0)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }
                        >
                          ⭐
                        </span>
                      ))}
                    </div>
                    <span className="ml-2 text-lg font-bold text-gray-700">
                      {games.find((game) => game.id === activeModal)?.rating}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <span className="mr-1">👁️</span>
                    <span className="font-bold">{games.find((game) => game.id === activeModal)?.views} views</span>
                  </div>
                </div>
              </div>
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
                  src={games.find((game) => game.id === activeModal)?.iframe}
                  title={`${games.find((game) => game.id === activeModal)?.title} Game`}
                  className="w-full h-full rounded-2xl border-4 border-gray-300 shadow-2xl"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="mt-6 bg-gray-50 rounded-2xl p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">💬 Player Comments</h3>
                <div className="space-y-4 max-h-60 overflow-y-auto">
                  {games
                    .find((game) => game.id === activeModal)
                    ?.comments.map((comment, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-bold text-gray-800">{comment.user}</div>
                          <div className="text-gray-500 text-sm">{comment.time}</div>
                        </div>
                        <div className="text-gray-700">{comment.text}</div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
