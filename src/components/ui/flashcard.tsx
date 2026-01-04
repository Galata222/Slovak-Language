"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface FlashcardProps {
  slovak: string
  english: string
}

export default function Flashcard({ slovak, english }: FlashcardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <Card onClick={() => setIsFlipped(!isFlipped)} className="cursor-pointer">
      <CardHeader>
        <CardTitle>{isFlipped ? english : slovak}</CardTitle>
      </CardHeader>
    </Card>
  )
}