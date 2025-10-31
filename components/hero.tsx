"use client"

import { TypingText } from "./typing-text"
import { AnimatedCard } from "./animated-card"
import { FloatingBadges } from "./floating-badges"

interface HeroProps {
  onStartQuiz: () => void
}

export default function Hero({ onStartQuiz }: HeroProps) {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-primary/50 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <FloatingBadges />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedCard delay={100}>
          <div className="mb-8 inline-block">
            <span className="text-xs sm:text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full animate-slide-in">
              🎵 Welcome to SongMatch
            </span>
          </div>
        </AnimatedCard>

        <AnimatedCard delay={200}>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            <TypingText 
              texts={[
                "Welcome to Song Quiz!",
                "Guess the Song",
                "Enjoy your time"
              ]} 
              speed={80}
            />
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-pulse-slow">
              Test Your Knowledge
            </span>
          </h1>
        </AnimatedCard>

        <AnimatedCard delay={400}>
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Test your music knowledge with our immersive quiz. Listen to song previews and guess the correct track from
            multiple choices. How many can you get right?
          </p>
        </AnimatedCard>

        <AnimatedCard delay={500}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={onStartQuiz}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 transform hover:scale-105 active:scale-95 group relative overflow-hidden"
            >
              <span className="relative z-10">Start Quiz</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform group-hover:translate-x-full duration-500" />
            </button>
            <button className="px-8 py-4 border border-border text-foreground rounded-lg font-semibold text-lg hover:bg-secondary/10 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
              Learn More
            </button>
          </div>
        </AnimatedCard>

        {/* Stats */}
        <AnimatedCard delay={600}>
          <div className="grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto">
            <div className="p-4 bg-card/50 backdrop-blur rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 transform hover:scale-105 group">
              <div className="text-2xl sm:text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">Songs Available</div>
            </div>
            <div className="p-4 bg-card/50 backdrop-blur rounded-lg border border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 transform hover:scale-105 group">
              <div className="text-2xl sm:text-3xl font-bold text-accent group-hover:scale-110 transition-transform duration-300">
                10+
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">Players</div>
            </div>
            <div className="p-4 bg-card/50 backdrop-blur rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 transform hover:scale-105 group">
              <div className="text-2xl sm:text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                25
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">Questions</div>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </section>
  )
}
