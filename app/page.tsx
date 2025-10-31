"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Quiz from "@/components/quiz"
import FAQ from "@/components/faq"
import Footer from "@/components/footer"

export default function Home() {
  const [showQuiz, setShowQuiz] = useState(false)

  return (
    <main className="w-full min-h-screen bg-background">
      <Navbar />
      {!showQuiz ? (
        <>
          <Hero onStartQuiz={() => setShowQuiz(true)} />
          <About />
          <FAQ />
          <Footer />
        </>
      ) : (
        <>
          <Quiz onExit={() => setShowQuiz(false)} />
          <Footer />
        </>
      )}
    </main>
  )
}
