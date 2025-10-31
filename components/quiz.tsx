"use client"

import { useState, useEffect } from "react"
import { ChevronRight, Play } from "lucide-react"
import quizData from "@/data/quiz-data.json"

interface QuizProps {
  onExit: () => void
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: {
    duration: 0.3,
    ease: [0.25, 0.1, 0.25, 1],
  },
}

const buttonHover = {
  scale: 1.05,
  transition: {
    duration: 0.2,
    ease: [0.25, 0.1, 0.25, 1],
  },
}

const buttonTap = {
  scale: 0.98,
}

export default function Quiz({ onExit }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isPreviewMode, setIsPreviewMode] = useState(true)
  const [audio] = useState(new Audio())
  const [shuffledQuestions, setShuffledQuestions] = useState(() => {
    return [...quizData.questions].sort(() => Math.random() - 0.5)
  })
  const previewDuration = 10000 

  const question = shuffledQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / shuffledQuestions.length) * 100  
  
    const handlePlayback = () => {
    if (!question.songUrl) {
      console.warn("No song URL available yet")
      return
    }

    if (showResult) {
      return; 
    }

    if (!isPlaying) {
      // Set up audio source
      audio.src = question.songUrl
      
      // Wait for metadata to load before playing
      const playAudio = () => {
        if (isPreviewMode) {
          // Play from start for preview
          audio.currentTime = 0;
          
          audio.play().catch(error => {
            console.error("Error playing audio:", error)
            setIsPlaying(false)
          })
          setIsPlaying(true)

          setTimeout(() => {
            audio.pause()
            setIsPlaying(false)
            setIsPreviewMode(false)
          }, previewDuration)
        } else if (showResult) {
          // If showing result, let playFromRandomPosition handle it
          playFromRandomPosition();
        } else {
          // Normal play from start
          audio.currentTime = 0;
          audio.play().catch(error => {
            console.error("Error playing audio:", error)
            setIsPlaying(false)
          })
          setIsPlaying(true)
        }
      }

      // If metadata is already loaded
      if (audio.readyState >= 2) {
        playAudio();
      } else {
        // Wait for metadata to load
        audio.addEventListener('loadedmetadata', playAudio, { once: true });
      }
    } else {
      audio.pause()
      setIsPlaying(false)
    }
  }

  const playFromRandomPosition = () => {
    if (!question.songUrl) return;
    
    // Set up audio source
    audio.src = question.songUrl;
    
    // Wait for metadata to load
    audio.addEventListener('loadedmetadata', () => {
      // Calculate random position between 30% and 70% of the song
      const minPosition = audio.duration * 0.3;
      const maxPosition = audio.duration * 0.7;
      const randomPosition = Math.random() * (maxPosition - minPosition) + minPosition;
      
      audio.currentTime = randomPosition;
      audio.play().catch(error => {
        console.error("Error playing audio:", error);
        setIsPlaying(false);
      });
      setIsPlaying(true);
    }, { once: true });
  };

  const handleAnswer = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);
    setIsPreviewMode(false);
    if (question.options[index] === question.correct) {
      setScore(score + 1);
    }
    // Automatically play from random position after answer is selected
    playFromRandomPosition();
  }

  const handleNext = () => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      // Clean up current audio
      audio.removeEventListener('loadedmetadata', () => {});
      audio.pause();
      audio.src = "";
      setIsPlaying(false);

      // Move to next question
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setIsPreviewMode(true);
    }
  }

  useEffect(() => {
    const cleanupAudio = () => {
      // Remove any pending event listeners
      audio.removeEventListener('loadedmetadata', () => {});
      audio.pause();
      audio.src = "";
    };

    return cleanupAudio;
  }, [])

  const handlePlayAgain = () => {
    // Reshuffle questions for a new game
    setShuffledQuestions([...quizData.questions].sort(() => Math.random() - 0.5))
    setCurrentQuestion(0)
    setScore(0)
    setShowResult(false)
    setSelectedAnswer(null)
    setIsPreviewMode(true)
  }

  const isComplete = currentQuestion === shuffledQuestions.length - 1 && showResult

  if (isComplete) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl w-full">
          <div className="text-center mb-12">
            <div className="mb-6 text-6xl">{score === quizData.questions.length ? "🏆" : "🎵"}</div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Quiz Complete!</h2>
            <p className="text-2xl sm:text-3xl text-primary font-bold mb-2">
              You scored {score} out of {shuffledQuestions.length}
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              {score === shuffledQuestions.length
                ? "Perfect score! You are a music expert!"
                : score >= 7
                  ? "Great job! Keep improving your music knowledge."
                  : "Good effort! Practice makes perfect."}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handlePlayAgain}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
            >
              Play Again
            </button>
            <button
              onClick={onExit}
              className="px-8 py-4 border border-border text-foreground rounded-lg font-semibold hover:bg-secondary/10 transition-colors"
            >
              Back Home
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm text-muted-foreground mb-2">
              Question {currentQuestion + 1} of {shuffledQuestions.length}
            </p>
            <div className="w-96 h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          <button onClick={onExit} className="text-muted-foreground hover:text-foreground transition-colors">
            ✕
          </button>
        </div>

        {/* Score Display */}
        <div className="mb-12 p-6 bg-card border border-border/50 rounded-2xl flex justify-between items-center">
          <div>
            <p className="text-sm text-muted-foreground">Current Score</p>
            <p className="text-3xl sm:text-4xl font-bold text-primary">
              {score}/{shuffledQuestions.length}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Accuracy</p>
            <p className="text-3xl sm:text-4xl font-bold text-accent">
              {currentQuestion > 0 ? Math.round((score / currentQuestion) * 100) : 0}%
            </p>
          </div>
        </div>

        {/* Audio Player */}
        <div className="mb-12 p-12 bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-2xl text-center">
          <button
            onClick={handlePlayback}
            disabled={!question.songUrl}
            className={`mx-auto mb-6 w-20 h-20 rounded-full flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg hover:shadow-primary/50 ${
              !question.songUrl
                ? "bg-muted cursor-not-allowed opacity-50"
                : isPlaying 
                  ? "bg-accent text-accent-foreground hover:bg-accent/90" 
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
            }`}
          >
            {isPlaying ? (
              <span className="text-2xl">■</span>
            ) : (
              <Play size={32} fill="currentColor" />
            )}
          </button>
          <p className="text-sm text-muted-foreground mb-2">
            {!question.songUrl
              ? "Song not available yet"
              : isPreviewMode 
                ? "Preview Mode" 
                : showResult 
                  ? "Full Song Available"
                  : "Select an answer to continue"}
          </p>
          <p className="text-xl sm:text-2xl font-bold text-foreground">
            {!question.songUrl
              ? "Coming soon..."
              : isPlaying 
                ? `🎵 ${isPreviewMode ? "Mystery Song" : question.correct} (${isPreviewMode ? "Preview" : "Playing"}...)`
                : isPreviewMode 
                  ? "Click play to hear the preview"
                  : showResult
                    ? "Click play to hear the full song"
                    : "Make your guess first!"}
          </p>
        </div>

        {/* Question */}
        <div className="mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">What's the name of this song?</h3>
          <p className="text-muted-foreground">Select the correct answer from the options below</p>
        </div>

        {/* Answer Options */}
        <div className="space-y-4 mb-12">
          {question.options.map((option, index) => {
            const isCorrect = option === question.correct
            const isSelected = selectedAnswer === index
            let buttonClass = "bg-card border-border/50 hover:border-primary/50 text-foreground"

            if (showResult) {
              if (isCorrect) {
                buttonClass = "bg-green-500/20 border-green-500/50 text-green-100"
              } else if (isSelected && !isCorrect) {
                buttonClass = "bg-red-500/20 border-red-500/50 text-red-100"
              }
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={showResult}
                className={`w-full p-6 border rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg disabled:cursor-default ${buttonClass}`}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {showResult && isCorrect && <span className="text-2xl">✓</span>}
                  {showResult && isSelected && !isCorrect && <span className="text-2xl">✕</span>}
                </div>
              </button>
            )
          })}
        </div>

        {/* Result Message */}
        {showResult && (
          <div
            className={`mb-12 p-6 rounded-xl border ${
              selectedAnswer !== null && question.options[selectedAnswer] === question.correct
                ? "bg-green-500/10 border-green-500/30"
                : "bg-red-500/10 border-red-500/30"
            }`}
          >
            <p
              className={`text-center font-semibold ${
                selectedAnswer !== null && question.options[selectedAnswer] === question.correct
                  ? "text-green-100"
                  : "text-red-100"
              }`}
            >
              {selectedAnswer !== null && question.options[selectedAnswer] === question.correct
                ? "🎉 Correct! Great job!"
                : `The correct answer is "${question.correct}"`}
            </p>
          </div>
        )}

        {/* Navigation */}
        {showResult && (
          <div className="flex justify-center">
            <button
              onClick={handleNext}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 flex items-center gap-2"
            >
              {currentQuestion === quizData.questions.length - 1 ? "See Results" : "Next Question"}
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
