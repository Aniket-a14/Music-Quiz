"use client"

import { useEffect, useState } from "react"

interface FloatingBadge {
  id: string
  text: string
  delay: number
}

export function FloatingBadges() {
  const [badges, setBadges] = useState<FloatingBadge[]>([])

  useEffect(() => {
    const badgeTexts = ["🎵", "🎶", "♪", "♫", "🎼"]
    const newBadges = badgeTexts.map((text, index) => ({
      id: `badge-${index}`,
      text,
      delay: index * 100,
    }))
    setBadges(newBadges)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {badges.map((badge) => (
        <div
          key={badge.id}
          className="absolute text-3xl opacity-0 animate-float-up"
          style={
            {
              left: `${Math.random() * 100}%`,
              bottom: "-50px",
              animationDelay: `${badge.delay}ms`,
              "--duration": "3s",
            } as any
          }
        >
          {badge.text}
        </div>
      ))}
    </div>
  )
}
