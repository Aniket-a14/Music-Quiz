"use client"
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler"

export default function Navbar() {
  return (
    <nav className="sticky top-3 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/50 group-hover:scale-110">
              <span className="text-primary-foreground font-bold text-xl animate-pulse-slow">♪</span>
            </div>
            <span className="text-xl font-bold text-foreground hidden sm:inline">SongMatch</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 hover:border-b-2 hover:border-primary pb-1"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 hover:border-b-2 hover:border-primary pb-1"
            >
              About
            </a>
            <a
              href="#faq"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 hover:border-b-2 hover:border-primary pb-1"
            >
              FAQ
            </a>
          </div>

          {/* CTA Button and Theme Toggle */}
          <div className="flex items-center gap-3">
            <AnimatedThemeToggler />
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 transform hover:scale-105">
              Play
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
