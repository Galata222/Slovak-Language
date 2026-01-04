"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { getPronunciationFeedback } from "@/ai/flows/pronunciation-feedback"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface PronunciationCheckerProps {
  text: string
}

export default function PronunciationChecker({ text }: PronunciationCheckerProps) {
  const [isRecording, setIsRecording] = useState(false)
  const [feedback, setFeedback] = useState<any | null>(null)
  const [audioURL, setAudioURL] = useState<string | null>(null)
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioChunksRef = useRef<Blob[]>([])

  const handleRecord = async () => {
    if (isRecording) {
      mediaRecorderRef.current?.stop()
      setIsRecording(false)
    } else {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
        mediaRecorderRef.current = new MediaRecorder(stream)
        mediaRecorderRef.current.ondataavailable = (event) => {
          audioChunksRef.current.push(event.data)
        }
        mediaRecorderRef.current.onstop = async () => {
          const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" })
          const audioUrl = URL.createObjectURL(audioBlob)
          setAudioURL(audioUrl)

          const reader = new FileReader()
          reader.readAsDataURL(audioBlob)
          reader.onloadend = async () => {
            const base64data = reader.result as string
            try {
              const feedbackResult = await getPronunciationFeedback({ audioDataUri: base64data, text: text })
              setFeedback(feedbackResult)
            } catch (error) {
              console.error("Error getting pronunciation feedback:", error)
              setFeedback({ error: "Failed to get feedback." })
            }
            audioChunksRef.current = []
          }
        }
        audioChunksRef.current = []
        mediaRecorderRef.current.start()
        setIsRecording(true)
        setFeedback(null)
        setAudioURL(null)
      } catch (error) {
        console.error("Error accessing microphone:", error)
        alert("Could not access microphone. Please allow microphone access in your browser settings.")
      }
    }
  }

  const handleListen = () => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = "sk-SK"
      window.speechSynthesis.speak(utterance)
    }
  }

  const getScoreColor = (score: number) => {
    if (score > 80) return "text-green-500 font-bold";
    if (score > 50) return "text-yellow-500 font-bold";
    return "text-red-500 font-bold";
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{text}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-4">
          <Button onClick={handleListen}>Listen</Button>
          <Button onClick={handleRecord}>
            {isRecording ? "Stop Recording" : "Record"}
          </Button>
        </div>
        {audioURL && (
          <div className="mb-4">
            <p>Your recording:</p>
            <audio src={audioURL} controls />
          </div>
        )}
        {feedback && (
          <div>
            <h3 className="text-lg font-semibold">Feedback</h3>
            {feedback.error ? (
              <p className="text-red-500">{feedback.error}</p>
            ) : (
              <div>
                <p>Overall Score: <span className={getScoreColor(feedback.overallScore)}>{feedback.overallScore}</span></p>
                <p className="font-semibold">Phoneme Scores:</p>
                <ul>
                  {feedback.phonemeScores?.map((p: any, index: number) => (
                    <li key={index}>{p.phoneme}: <span className={getScoreColor(p.score)}>{p.score}</span></li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
