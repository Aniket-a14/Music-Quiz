"use client"

import "./globals.css"
import { Geist, Geist_Mono } from "next/font/google"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { TypingText } from "@/components/typing-text"
import { FloatingBadges } from "@/components/floating-badges"
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export default function GlobalNotFound() {
  const router = useRouter()

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.className} min-h-screen bg-background text-foreground transition-colors duration-300`}
      >
        <AnimatedThemeToggler className="fixed top-6 right-6 z-50" />

        <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
          <FloatingBadges />

          {/* Animated gradient background accent */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
            <div
              className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>

          {/* Content container with fade-in */}
          <div className="relative z-10 max-w-2xl mx-auto animate-fade-in">
            {/* Large animated music note */}
            <div className="flex justify-center mb-12">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center animate-glow shadow-xl">
                  <span className="text-7xl">♪</span>
                </div>

                <div
                  className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center opacity-75 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                >
                  <span className="text-4xl">♫</span>
                </div>
                <div
                  className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-primary/60 to-accent/60 rounded-full flex items-center justify-center opacity-60 animate-pulse"
                  style={{ animationDelay: "1s" }}
                >
                  <span className="text-3xl">♩</span>
                </div>
              </div>
            </div>

            <div className="text-center mb-6">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                <TypingText texts={["Oops! Lost the Beat", "Let's Find It Again!"]} delay={300} speed={60} />
              </h1>
            </div>

            {/* 404 Status Code with accent */}
            <div className="flex justify-center mb-8">
              <div className="text-center">
                <p className="text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                  404
                </p>
                <div className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-accent rounded-full mt-2"></div>
              </div>
            </div>

            {/* Description text */}
            <p className="text-md md:text-lg text-muted-foreground text-center mb-8 max-w-md mx-auto leading-relaxed">
              Looks like this track is missing from our playlist. Don&apos;t worry, let&apos;s get you back to the main
              stage.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => router.back()}
                className="px-8 py-6 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Go Back
              </Button>
            </div>

            <div className="mt-16 flex justify-center gap-2 animate-slide-in" style={{ animationDelay: "0.8s" }}>
              <span className="text-primary">♪</span>
              <span className="text-accent">♫</span>
              <span className="text-primary">♪</span>
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
