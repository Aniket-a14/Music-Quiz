"use client"

import { useEffect, useState } from "react"

interface TypingTextProps {
  texts: string[]
  delay?: number
  speed?: number
  pauseBetweenTexts?: number
}

export function TypingText({ texts, delay = 0, speed = 50, pauseBetweenTexts = 2000 }: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  useEffect(() => {
    if (!texts.length) return

    const source = texts[currentTextIndex]
    let typeTimer: ReturnType<typeof setInterval> | null = null
    let isTypingForward = true

    const startTimer = setTimeout(() => {
      let currentIndex = 0
      setDisplayedText("")
      setIsComplete(false)

      typeTimer = setInterval(() => {
        if (isTypingForward) {
          if (currentIndex < source.length) {
            const nextChar = source[currentIndex]
            setDisplayedText((prev) => prev + (nextChar ?? ""))
            currentIndex++
          } else {
            // Clear the typing interval
            if (typeTimer) clearInterval(typeTimer)
            
            // Wait for 1 second before starting backward typing
            setTimeout(() => {
              isTypingForward = false
              currentIndex = source.length
              
              // Start new interval for backward typing
              typeTimer = setInterval(() => {
                if (currentIndex > 0) {
                  currentIndex--
                  setDisplayedText(source.substring(0, currentIndex))
                } else {
                  if (typeTimer) clearInterval(typeTimer)
                  isTypingForward = true
                  setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
                  
                  // Start new interval for the next text
                  startNewText()
                }
              }, speed)
            }, 1000)
          }
        }
      }, speed)
      
      // Helper function to start typing a new text
      const startNewText = () => {
        typeTimer = setInterval(() => {
          if (currentIndex < source.length) {
            const nextChar = source[currentIndex]
            setDisplayedText((prev) => prev + (nextChar ?? ""))
            currentIndex++
          } else {
            if (typeTimer) clearInterval(typeTimer)
            setTimeout(() => {
              isTypingForward = false
              currentIndex = source.length
              typeTimer = setInterval(() => {
                if (currentIndex > 0) {
                  currentIndex--
                  setDisplayedText(source.substring(0, currentIndex))
                } else {
                  if (typeTimer) clearInterval(typeTimer)
                  isTypingForward = true
                  setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
                }
              }, speed)
            }, 1000)
          }
        }, speed)
      }
    }, delay)

    return () => {
      clearTimeout(startTimer)
      if (typeTimer) {
        clearInterval(typeTimer)
        clearTimeout(typeTimer)
      }
    }
  }, [texts, currentTextIndex, delay, speed])

  return (
    <span>
      {displayedText}
      {!isComplete && <span className="animate-blink">|</span>}
    </span>
  )
}
