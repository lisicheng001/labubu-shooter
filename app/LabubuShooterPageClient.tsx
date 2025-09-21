"use client"

import { useState } from "react"

export default function LabubuShooterPageClient() {
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const openModal = (gameId: string) => setActiveModal(gameId)
  const closeModal = () => setActiveModal(null)

  const games = [
    {
      id: "featured-game",
      title: "🌟 Labubu Geometry Dash", // Updated title from "Featured Adventure" to "Labubu Geometry Dash"
      description: "Join adorable Labubu in the most dreamy geometry adventure!", // Updated description to match Geometry Dash theme
      cover: "/featured-game-cover.jpg",
      iframe: "https://html5.gamemonetize.co/qge3r3syyxhvzxjf6cb5oe0rq9bk9uxh/",
      badge: "FEATURED",
      gradient: "from-violet-50/90 via-purple-50/80 to-pink-50/90",
      borderColor: "border-violet-200/40",
      rating: 4.9,
      views: "3.2M",
      comments: [
        {
          user: "DreamyGamer",
          text: "This Labubu Geometry Dash is absolutely magical! The cutest geometric adventure ever ✨", // Updated comment to reference Geometry Dash
          time: "30 minutes ago",
        },
        {
          user: "LabubuFan2024",
          text: "Perfect blend of Labubu cuteness and geometry challenges! So dreamy and fun 🌸", // Updated comment to reference Geometry Dash
          time: "1 hour ago",
        },
        {
          user: "PastelPlayer",
          text: "The Labubu Geometry Dash lives up to the hype! Absolutely stunning geometric visuals", // Updated comment to reference Geometry Dash
          time: "2 hours ago",
        },
      ],
    },
    {
      id: "labubu-shooter",
      title: "🌸 Labubu Shooter",
      description: "Join adorable Labubu in the sweetest shooting adventure!",
      cover: "/labubu-shooter-cover.jpg",
      iframe: "https://html5.gamemonetize.co/klzoqsmeofr7ylbhwhbwy9znj3n4ucsw/",
      badge: "KAWAII",
      gradient: "from-pink-50/90 via-rose-50/80 to-pink-100/90",
      borderColor: "border-pink-200/40",
      rating: 4.9,
      views: "2.3M",
      comments: [
        {
          user: "LabubuLover23",
          text: "So dreamy and cute! The pastel colors are perfect 🌸",
          time: "2 hours ago",
        },
        {
          user: "KawaiiGamer",
          text: "This game makes me so happy! Labubu is adorable",
          time: "5 hours ago",
        },
        {
          user: "SoftGamer",
          text: "Perfect for relaxing! Love the gentle gameplay",
          time: "1 day ago",
        },
      ],
    },
    {
      id: "arrow-survival",
      title: "🏹 Arrow Survival",
      description: "Survive the arrow storm in this gentle challenge.",
      cover: "/arrow-survival-cover.jpg",
      iframe: "https://html5.gamemonetize.co/oqyu2giimhs2eegfvn1wd9xo5p862dpz/",
      badge: "DREAMY",
      gradient: "from-orange-50/90 via-amber-50/80 to-yellow-50/90",
      borderColor: "border-orange-200/40",
      rating: 4.8,
      views: "1.8M",
      comments: [
        {
          user: "PeacefulPlayer",
          text: "Love how this makes intense gameplay feel so calm and pretty",
          time: "1 hour ago",
        },
        {
          user: "ZenGamer",
          text: "The soft colors make even survival games relaxing!",
          time: "4 hours ago",
        },
        {
          user: "CalmCollector",
          text: "Perfect balance of challenge and cuteness",
          time: "6 hours ago",
        },
      ],
    },
    {
      id: "rapid-apex-rush",
      title: "🌟 Rapid Apex Rush",
      description: "Gentle racing through dreamy landscapes!",
      cover: "/rapid-apex-rush-cover.jpg",
      iframe: "https://html5.gamemonetize.co/jp22mjv7m4b283qu7mhzsy599omxbi13/",
      badge: "SOFT",
      gradient: "from-blue-50/90 via-sky-50/80 to-cyan-50/90",
      borderColor: "border-blue-200/40",
      rating: 4.7,
      views: "1.5M",
      comments: [
        {
          user: "DreamRacer",
          text: "Racing has never felt so peaceful and beautiful!",
          time: "3 hours ago",
        },
        {
          user: "CloudDriver",
          text: "Love the soft pastel tracks and gentle speed",
          time: "7 hours ago",
        },
        {
          user: "SerenitySpeed",
          text: "Perfect for when you want excitement without stress",
          time: "12 hours ago",
        },
      ],
    },
    {
      id: "brainrot-evolution",
      title: "🌙 Brainrot Evolution",
      description: "Evolve your mind in this whimsical dreamy journey!",
      cover: "/brainrot-evolution-cover.jpg",
      iframe: "https://html5.gamemonetize.co/c34zurvgw1w01fkf4n07idbggc6vvkbq/",
      badge: "WHIMSY",
      gradient: "from-purple-50/90 via-lavender-50/80 to-pink-50/90",
      borderColor: "border-purple-200/40",
      rating: 4.6,
      views: "980K",
      comments: [
        {
          user: "DreamyThinker",
          text: "Such a unique and gentle approach to puzzle games!",
          time: "2 hours ago",
        },
        {
          user: "SoftMind",
          text: "Love how this makes thinking feel so peaceful",
          time: "8 hours ago",
        },
        {
          user: "WhimsicalWonder",
          text: "The evolution concept is so cute and calming",
          time: "1 day ago",
        },
      ],
    },
    {
      id: "purrrification",
      title: "🐱 Purrrification",
      description: "Adorable cat puzzles in a dreamy pastel world!",
      cover: "/purrrification-cover.jpg",
      iframe: "https://html5.gamemonetize.co/xcj55qktot7ucsj0lepq6hjd6egh1b1m/",
      badge: "PRECIOUS",
      gradient: "from-pink-50/90 via-rose-50/80 to-pink-100/90",
      borderColor: "border-pink-200/40",
      rating: 4.9,
      views: "1.2M",
      comments: [
        {
          user: "CatWhisperer",
          text: "The softest, most adorable cat game ever! So peaceful 😻",
          time: "1 hour ago",
        },
        {
          user: "PastelPaws",
          text: "Perfect combination of cute cats and dreamy aesthetics",
          time: "5 hours ago",
        },
        {
          user: "GentleMeow",
          text: "This game purr-fectly captures the Labubu vibe!",
          time: "9 hours ago",
        },
      ],
    },
    {
      id: "soccer-euro-cup",
      title: "⚽ Soccer Euro Cup 2025",
      description: "Gentle football in a dreamy tournament setting!",
      cover: "/soccer-euro-cup-cover.jpg",
      iframe:
        "https://embed.gamedistribution.com/?url=https://html5.gamedistribution.com/608b965aa08644ceabb138d27d8661af/&width=960&height=600",
      badge: "PEACEFUL",
      gradient: "from-green-50/90 via-emerald-50/80 to-mint-50/90",
      borderColor: "border-green-200/40",
      rating: 4.8,
      views: "2.1M",
      comments: [
        {
          user: "ZenFootball",
          text: "Never thought football could be so relaxing and beautiful!",
          time: "30 minutes ago",
        },
        {
          user: "PeacefulPlayer",
          text: "Love the soft approach to sports games ⚽",
          time: "3 hours ago",
        },
        {
          user: "CalmChampion",
          text: "Perfect for when you want competition without stress",
          time: "6 hours ago",
        },
      ],
    },
    {
      id: "planet-merge",
      title: "🌙 Planet Merge",
      description: "Create dreamy cosmic worlds in soft pastel space!",
      cover: "/planet-merge-cover.jpg",
      iframe:
        "https://embed.gamedistribution.com/?url=https://html5.gamedistribution.com/fbf53a2f16d743ba84b370f6ad46f80b/&width=800&height=600",
      badge: "DREAMY",
      gradient: "from-indigo-50/90 via-violet-50/80 to-purple-50/90",
      borderColor: "border-indigo-200/40",
      rating: 4.7,
      views: "1.4M",
      comments: [
        {
          user: "StarDreamer",
          text: "Building universes has never felt so peaceful and pretty 🌙",
          time: "2 hours ago",
        },
        {
          user: "CosmicCalm",
          text: "Love the soft space aesthetic and gentle merging",
          time: "4 hours ago",
        },
        {
          user: "PastelPlanet",
          text: "Perfect blend of creativity and relaxation",
          time: "8 hours ago",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-6 h-6 bg-primary/20 rounded-full animate-gentle-float opacity-60"></div>
        <div
          className="absolute top-40 right-20 w-4 h-4 bg-secondary/20 rounded-full animate-gentle-float opacity-50"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 left-20 w-5 h-5 bg-accent/20 rounded-full animate-gentle-float opacity-70"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-3 h-3 bg-primary/20 rounded-full animate-gentle-float opacity-60"
          style={{ animationDelay: "0.5s" }}
        ></div>

        {/* Gentle floating Labubu-style elements */}
        <div className="absolute top-1/4 left-1/4 text-2xl animate-kawaii-bounce opacity-40">🌸</div>
        <div className="absolute top-3/4 right-1/4 text-2xl animate-gentle-float opacity-50">✨</div>
        <div className="absolute top-1/2 left-1/3 text-xl animate-dreamy-pulse opacity-60">🌙</div>
        <div className="absolute bottom-1/3 right-1/3 text-2xl animate-gentle-float opacity-40">💫</div>
        <div
          className="absolute top-1/6 right-1/6 text-xl animate-kawaii-bounce opacity-50"
          style={{ animationDelay: "1.5s" }}
        >
          🦋
        </div>
        <div
          className="absolute bottom-1/6 left-1/6 text-2xl animate-dreamy-pulse opacity-60"
          style={{ animationDelay: "2.5s" }}
        >
          🌺
        </div>
      </div>

      <header className="container mx-auto px-4 py-12 relative z-10">
        <div className="text-center">
          <div className="relative inline-block mb-8">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-6 animate-gentle-float font-sans">
              🌸 Labubu Gaming Hub 🌸
            </h1>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-primary/40 to-secondary/40 rounded-full animate-dreamy-pulse"></div>
            <div
              className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br from-secondary/40 to-accent/40 rounded-full animate-dreamy-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
          <p className="text-xl md:text-2xl text-card-foreground/80 max-w-3xl mx-auto font-medium leading-relaxed mb-8">
            ✨ Discover 7 Dreamy Games in Our Gentle Gaming Paradise ✨
          </p>
          <button className="px-10 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full text-lg transition-all duration-300 hover:scale-105 labubu-shadow hover:shadow-lg animate-soft-glow">
            🌙 Enter Dreamy World 🌙
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 relative z-10">
        {/* Featured Game Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              ⭐ Featured Game ⭐
            </h2>
            <p className="text-lg text-card-foreground/80">The most magical gaming experience in our collection!</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div
              className="glass-morphism rounded-3xl p-8 border border-violet-200/40 relative overflow-hidden group hover:scale-105 transition-all duration-500 cursor-pointer labubu-shadow hover:shadow-xl"
              onClick={() => openModal("featured-game")}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-50/90 via-purple-50/80 to-pink-50/90 opacity-60"></div>
              <div className="relative z-10">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <img
                      src="/featured-game-cover.jpg"
                      alt="Labubu Geometry Dash Game Cover"
                      className="w-full h-64 object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500"
                    />
                  </div>
                  <div>
                    <div className="flex items-center mb-4">
                      <h3 className="text-3xl font-bold text-card-foreground mr-4">🌟 Labubu Geometry Dash</h3>{" "}
                      {/* Updated featured game display title */}
                      <div className="bg-gradient-to-r from-violet-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                        FEATURED
                      </div>
                    </div>
                    <p className="text-card-foreground/80 text-lg mb-6">
                      Join adorable Labubu in the most dreamy geometry adventure!{" "}
                      {/* Updated featured game display description */}
                    </p>
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className="flex text-yellow-400 text-lg">
                          {[...Array(5)].map((_, i) => (
                            <span key={i}>⭐</span>
                          ))}
                        </div>
                        <span className="ml-2 text-lg font-bold text-card-foreground">4.9</span>
                      </div>
                      <div className="flex items-center text-card-foreground/70">
                        <span className="mr-1">👁️</span>
                        <span className="font-medium text-lg">3.2M views</span>
                      </div>
                    </div>
                    <button className="w-full px-6 py-4 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-lg text-lg">
                      🌟 Play Featured Game 🌟
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {games.slice(1).map((game) => (
            <div
              key={game.id}
              className={`glass-morphism rounded-3xl p-6 border ${game.borderColor} relative overflow-hidden group hover:scale-105 transition-all duration-500 cursor-pointer labubu-shadow hover:shadow-xl`}
              onClick={() => openModal(game.id)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${game.gradient} opacity-60`}></div>
              <div className="relative z-10">
                <div className="mb-4 relative">
                  <img
                    src={game.cover || "/placeholder.svg"}
                    alt={`${game.title} Game Cover`}
                    className="w-full h-40 object-cover rounded-2xl shadow-md group-hover:shadow-lg transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl flex items-end p-3">
                    <h3 className="text-lg font-bold text-white drop-shadow-md">{game.title}</h3>
                  </div>
                  <div className="absolute top-2 right-2 bg-white/80 text-primary px-2 py-1 rounded-full text-xs font-bold">
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
                    <span className="ml-2 text-sm font-bold text-card-foreground">{game.rating}</span>
                  </div>
                  <div className="flex items-center text-sm text-card-foreground/70">
                    <span className="mr-1">👁️</span>
                    <span className="font-medium">{game.views}</span>
                  </div>
                </div>
                <p className="text-card-foreground/80 font-medium text-sm mb-4">{game.description}</p>
                <div className="mb-4 space-y-2">
                  <div className="text-xs font-bold text-card-foreground/70 mb-2">💭 Gentle Reviews:</div>
                  {game.comments.slice(0, 2).map((comment, index) => (
                    <div key={index} className="bg-white/60 rounded-lg p-2 text-xs">
                      <div className="font-bold text-card-foreground">{comment.user}</div>
                      <div className="text-card-foreground/80 leading-tight">{comment.text}</div>
                      <div className="text-card-foreground/60 text-xs mt-1">{comment.time}</div>
                    </div>
                  ))}
                </div>
                <button className="w-full px-4 py-3 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-md text-sm">
                  🌸 Play Gently 🌸
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-morphism rounded-3xl p-8 md:p-12 mb-16 border border-primary/20 labubu-shadow relative overflow-hidden">
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full -translate-y-10 translate-x-10 animate-dreamy-pulse"></div>
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-4 animate-gentle-float">
                <span className="text-2xl">🌸</span>
              </div>
              <h2 className="text-3xl font-bold text-primary">About Our Dreamy Games</h2>
            </div>
            <p className="text-card-foreground/80 leading-relaxed mb-6 text-lg">
              Welcome to our gentle gaming paradise, where every game is designed with the soft, dreamy aesthetic that
              Labubu fans adore. Experience gaming in a whole new way with pastel colors, peaceful gameplay, and
              adorable characters.
            </p>
            <p className="text-card-foreground/80 leading-relaxed text-lg">
              Each game in our collection offers a unique blend of engaging gameplay and soothing visuals, perfect for
              relaxation and gentle entertainment.
            </p>
          </div>
        </div>

        <div className="glass-morphism rounded-3xl p-8 labubu-shadow border border-secondary/20 mb-16 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-full -translate-y-8 -translate-x-8 animate-dreamy-pulse"></div>
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mr-4 animate-gentle-float">
                <span className="text-2xl">✨</span>
              </div>
              <h2 className="text-3xl font-bold text-secondary">Dreamy Features</h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  icon: "🌸",
                  text: "Soft pastel color palettes",
                  color: "bg-gradient-to-r from-primary/80 to-secondary/80",
                },
                {
                  icon: "🌙",
                  text: "Gentle and peaceful gameplay",
                  color: "bg-gradient-to-r from-secondary/80 to-accent/80",
                },
                {
                  icon: "✨",
                  text: "Adorable character designs",
                  color: "bg-gradient-to-r from-accent/80 to-primary/80",
                },
                {
                  icon: "🦋",
                  text: "Relaxing gaming experience",
                  color: "bg-gradient-to-r from-primary/80 to-accent/80",
                },
                {
                  icon: "💫",
                  text: "Free dreamy adventures",
                  color: "bg-gradient-to-r from-secondary/80 to-primary/80",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center group/item hover:bg-muted/30 rounded-xl p-4 transition-all duration-300"
                >
                  <div
                    className={`w-10 h-10 ${feature.color} rounded-full flex items-center justify-center mr-4 text-white group-hover/item:scale-110 transition-all duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <span className="text-card-foreground/90 text-lg font-medium group-hover/item:text-primary transition-colors duration-300">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="glass-morphism rounded-3xl p-10 md:p-16 mb-16 border border-accent/20 labubu-shadow relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-12">
              🌸 How to Play Gently 🌸
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "🌙 Choose Your Dream",
                  desc: "Select from our collection of gentle, dreamy games.",
                  icon: "🌙",
                  gradient: "from-primary/80 to-secondary/80",
                },
                {
                  step: "2",
                  title: "✨ Play Peacefully",
                  desc: "Enjoy soft gameplay designed for relaxation and fun.",
                  icon: "✨",
                  gradient: "from-secondary/80 to-accent/80",
                },
                {
                  step: "3",
                  title: "🌸 Share the Joy",
                  desc: "Spread the gentle gaming experience with friends.",
                  icon: "🌸",
                  gradient: "from-accent/80 to-primary/80",
                },
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center mx-auto mb-6 animate-gentle-float group-hover:animate-kawaii-bounce transition-all duration-500`}
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    <span className="text-3xl text-white drop-shadow-md">{item.icon}</span>
                  </div>
                  <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-primary/40">
                    <span className="text-2xl font-bold text-primary">{item.step}</span>
                  </div>
                  <h3 className="font-bold text-xl text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-lg text-card-foreground/80 leading-relaxed mb-8 font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center glass-morphism rounded-3xl p-10 md:p-16 border border-primary/20 labubu-shadow relative overflow-hidden">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full animate-dreamy-pulse"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full translate-y-12 translate-x-12 animate-gentle-float"></div>
          <div className="relative z-10">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-8 animate-gentle-float">
              <span className="text-3xl text-white">💖</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-8">
              💖 Why Labubu Fans Love Our Games 💖
            </h2>
            <p className="text-lg text-card-foreground/80 leading-relaxed mb-6 font-medium">
              Our games capture the gentle, dreamy essence that makes Labubu so beloved. With soft pastel colors,
              peaceful gameplay, and adorable aesthetics, every game feels like a warm hug from your favorite character.
            </p>
            <p className="text-lg text-card-foreground/80 leading-relaxed mb-8 font-medium">
              Perfect for unwinding after a long day or sharing gentle moments with friends. Join our peaceful gaming
              community today!
            </p>
            <button className="px-12 py-6 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-full text-xl transition-all duration-300 hover:scale-105 labubu-shadow hover:shadow-lg animate-soft-glow">
              🌸✨ Start Your Dreamy Journey ✨🌸
            </button>
          </div>
        </div>
      </main>

      {activeModal && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="glass-morphism rounded-3xl labubu-shadow max-w-6xl w-full max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b border-primary/20">
              <div className="flex items-center">
                <h2 className="text-2xl font-bold text-card-foreground mr-4">
                  {games.find((game) => game.id === activeModal)?.title || "Game"}
                </h2>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <div className="flex text-yellow-400 text-base">
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
                    <span className="ml-2 text-base font-bold text-card-foreground">
                      {games.find((game) => game.id === activeModal)?.rating}
                    </span>
                  </div>
                  <div className="flex items-center text-card-foreground/70">
                    <span className="mr-1">👁️</span>
                    <span className="font-medium">{games.find((game) => game.id === activeModal)?.views} views</span>
                  </div>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="text-card-foreground/60 hover:text-card-foreground text-3xl font-bold hover:scale-110 transition-all duration-300"
              >
                ×
              </button>
            </div>
            <div className="p-6">
              <div className="aspect-video w-full">
                <iframe
                  src={games.find((game) => game.id === activeModal)?.iframe}
                  title={`${games.find((game) => game.id === activeModal)?.title} Game`}
                  className="w-full h-full rounded-2xl border-2 border-primary/20 shadow-lg"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="mt-6 glass-morphism rounded-2xl p-6 border border-primary/20">
                <h3 className="text-xl font-bold text-card-foreground mb-4">💭 Gentle Comments</h3>
                <div className="space-y-4 max-h-60 overflow-y-auto">
                  {games
                    .find((game) => game.id === activeModal)
                    ?.comments.map((comment, index) => (
                      <div key={index} className="bg-white/60 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-bold text-card-foreground">{comment.user}</div>
                          <div className="text-card-foreground/60 text-sm">{comment.time}</div>
                        </div>
                        <div className="text-card-foreground/80">{comment.text}</div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="container mx-auto px-4 py-12 text-center relative z-10">
        <div className="glass-morphism rounded-2xl p-8 border border-primary/20 labubu-shadow">
          <p className="text-card-foreground/70 text-lg font-medium">
            ✨ © 2024 Labubu Gaming Hub. Gentle dreams and peaceful play await! ✨
          </p>
        </div>
      </footer>
    </div>
  )
}
