"use client"

import { AnimatedCard } from "./animated-card"

export default function About() {
  return (
    <section
      id="about"
      className="w-full py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/30"
    >
      <div className="max-w-5xl mx-auto">
        <AnimatedCard delay={100}>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-lg text-muted-foreground">Master the art of song recognition</p>
          </div>
        </AnimatedCard>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedCard delay={200}>
            <div className="relative p-8 bg-card border border-border/50 rounded-2xl hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-1 h-12 bg-gradient-to-b from-primary to-transparent rounded-r"></div>
              <div className="mb-4 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Listen</h3>
              <p className="text-muted-foreground">Hear a short preview of a song and immerse yourself in the music.</p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={300}>
            <div className="relative p-8 bg-card border border-border/50 rounded-2xl hover:border-accent/50 transition-all duration-300 group hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-1 h-12 bg-gradient-to-b from-accent to-transparent rounded-r"></div>
              <div className="mb-4 w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center text-accent font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Choose</h3>
              <p className="text-muted-foreground">Select the correct song name from multiple choice options.</p>
            </div>
          </AnimatedCard>

          <AnimatedCard delay={400}>
            <div className="relative p-8 bg-card border border-border/50 rounded-2xl hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2">
              <div className="absolute top-0 left-0 w-1 h-12 bg-gradient-to-b from-primary to-transparent rounded-r"></div>
              <div className="mb-4 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Score</h3>
              <p className="text-muted-foreground">Get instant feedback and track your score throughout the quiz.</p>
            </div>
          </AnimatedCard>
        </div>

        {/* Features */}
        <AnimatedCard delay={500}>
          <div className="mt-16 p-8 bg-gradient-to-r from-primary/10 to-accent/10 border border-border/50 rounded-2xl hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
            <h3 className="text-2xl font-bold text-foreground mb-6">Why SongMatch?</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
              <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Curated collection of diverse music genres
              </li>
              <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                Learn artist names and song titles
              </li>
              <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                Track your progress and achievements
              </li>
              <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                Compete with friends on leaderboards
              </li>
            </ul>
          </div>
        </AnimatedCard>
      </div>
    </section>
  )
}
