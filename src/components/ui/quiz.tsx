"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface Question {
  question: string
  options: string[]
  answer: string
}

interface QuizProps {
  questions: Question[]
}

export default function Quiz({ questions }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [feedback, setFeedback] = useState<string | null>(null)

  const handleAnswer = (option: string) => {
    setSelectedOption(option)
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1)
      setFeedback("Correct!")
    } else {
      setFeedback(`Incorrect. The correct answer is ${questions[currentQuestion].answer}.`)
    }
  }

  const handleNext = () => {
    setSelectedOption(null)
    setFeedback(null)
    const nextQuestion = currentQuestion + 1
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      setShowScore(true)
    }
  }

  return (
    <div>
      {showScore ? (
        <div>
          <h2 className="text-2xl font-bold">Your score: {score} out of {questions.length}</h2>
          <Button onClick={() => {
            setShowScore(false)
            setCurrentQuestion(0)
            setScore(0)
          }}>
            Restart Quiz
          </Button>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold">{questions[currentQuestion].question}</h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {questions[currentQuestion].options.map((option) => (
              <Button
                key={option}
                onClick={() => handleAnswer(option)}
                disabled={!!selectedOption}
                className={
                  selectedOption
                    ? option === questions[currentQuestion].answer
                      ? "bg-green-500 hover:bg-green-600"
                      : option === selectedOption
                      ? "bg-red-500 hover:bg-red-600"
                      : ""
                    : ""
                }
              >
                {option}
              </Button>
            ))}
          </div>
          {feedback && (
            <div className="mt-4 text-center">
              <p className="text-lg">{feedback}</p>
              <Button onClick={handleNext} className="mt-2">Next</Button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}