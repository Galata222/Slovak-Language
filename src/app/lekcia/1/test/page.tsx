"use client";

import { useState } from 'react';
import { getLessonById, getActivity } from "@/lib/data";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from '@/lib/utils';
import { Progress } from '@/components/ui/progress';

const questions = [
  {
    question: "Čo je to bryndza?",
    options: ["slovenský tanec", "slovenský syr", "slovenská rieka", "slovenské mesto"],
    correctAnswer: "slovenský syr",
  },
  {
    question: "Čo je to Štrbské pleso?",
    options: ["futbalový štadión", "hrad", "jazero vo Vysokých Tatrách", "nákupné centrum"],
    correctAnswer: "jazero vo Vysokých Tatrách",
  },
  {
    question: "Ktoré rieky sú na Slovensku?",
    options: ["Vltava, Labe", "Visla, Odra", "Morava, Orava, Dunajec, Dunaj", "Tisza, Mureš"],
    correctAnswer: "Morava, Orava, Dunajec, Dunaj",
  },
  {
    question: "Ako sa povie po slovensky @?",
    options: ["bodka", "čiarka", "otáznik", "zavináč"],
    correctAnswer: "zavináč",
  },
  {
    question: "Akú menu má Slovensko?",
    options: ["koruna", "zlotý", "forint", "euro"],
    correctAnswer: "euro",
  },
  {
    question: "Čo je to Gemer?",
    options: ["región na Slovensku", "automobilová značka", "minerálna voda", "hudobný festival"],
    correctAnswer: "región na Slovensku",
  },
  {
    question: "Aké farby sú na slovenskej vlajke?",
    options: ["červená, žltá, zelená", "čierna, červená, zlatá", "biela, modrá, červená", "modrá, žltá"],
    correctAnswer: "biela, modrá, červená",
  },
  {
    question: "Kto bol Jánošík?",
    options: ["slovenský kráľ", "slovenský Robin Hood", "spisovateľ", "vedec"],
    correctAnswer: "slovenský Robin Hood",
  },
  {
    question: "Ako sa volá turistické centrum na Slovensku?",
    options: ["Praha", "Viedeň", "Budapešť", "Nízke Tatry"],
    correctAnswer: "Nízke Tatry",
  },
  {
    question: "Slovenské mesto nie je:",
    options: ["Košice", "Bylina", "Prešov", "Žilina"],
    correctAnswer: "Bylina",
  },
];


export default function TestPage({ params }: { params: { unitId: string } }) {
    const unitId = 1;
    const lesson = getLessonById(unitId);
    const activity = getActivity(unitId, 'test');
    
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    if (!lesson || !activity) {
        notFound();
    }

    const handleAnswer = () => {
        if (selectedAnswer === null) return;
        
        setIsAnswered(true);
        if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
            setScore(prev => prev + 1);
        }
    };

    const handleNext = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
            setSelectedAnswer(null);
            setIsAnswered(false);
        } else {
            setShowResult(true);
        }
    };

    const handleRestart = () => {
        setCurrentQuestionIndex(0);
        setSelectedAnswer(null);
        setIsAnswered(false);
        setScore(0);
        setShowResult(false);
    }
    
    const progress = (currentQuestionIndex / questions.length) * 100;

    if (showResult) {
        return (
            <div className="flex flex-col h-full items-center justify-center p-4">
                 <Card className="max-w-2xl w-full text-center">
                    <CardHeader>
                        <CardTitle className="text-3xl font-bold">Výsledky testu</CardTitle>
                        <CardDescription>Lekcia 1: Čo viete o Slovensku?</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-xl">Vaše skóre:</p>
                        <p className="text-5xl font-bold text-primary">{score} / {questions.length}</p>
                        <p className="text-muted-foreground">{score > 7 ? "Výborne! Skvelá práca." : score > 4 ? "Dobre, ale môžete to zlepšiť." : "Mali by ste si to zopakovať."}</p>
                        <Button onClick={handleRestart}>Zopakovať test</Button>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="flex flex-col h-full">
            <header className="flex items-center gap-4 p-4 border-b">
                <SidebarTrigger className="md:hidden" />
                <Button asChild variant="outline" size="icon" className="shrink-0">
                    <Link href={`/lekcia/${unitId}`}>
                        <ArrowLeft className="w-4 h-4" />
                        <span className="sr-only">Späť na lekciu</span>
                    </Link>
                </Button>
                <div>
                    <p className="text-sm text-muted-foreground">{lesson.title}</p>
                    <h1 className="text-2xl font-bold font-headline">{activity.title}: Čo viete o Slovensku?</h1>
                </div>
            </header>

            <main className="flex-1 p-4 md:p-8">
                <div className="max-w-2xl mx-auto">
                    <Progress value={progress} className="mb-4" />
                    <Card>
                        <CardHeader>
                            <CardTitle>Otázka {currentQuestionIndex + 1}/{questions.length}</CardTitle>
                            <CardDescription className="text-lg pt-2">{questions[currentQuestionIndex].question}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <RadioGroup 
                                value={selectedAnswer ?? ''} 
                                onValueChange={setSelectedAnswer}
                                disabled={isAnswered}
                                className="space-y-2"
                            >
                                {questions[currentQuestionIndex].options.map((option) => {
                                    const isCorrect = option === questions[currentQuestionIndex].correctAnswer;
                                    const isSelected = option === selectedAnswer;

                                    return (
                                        <div key={option} className={cn(
                                            "flex items-center space-x-2 p-3 rounded-md border",
                                            isAnswered && isCorrect && "bg-green-100 border-green-300 dark:bg-green-900",
                                            isAnswered && !isCorrect && isSelected && "bg-red-100 border-red-300 dark:bg-red-900"
                                        )}>
                                            <RadioGroupItem value={option} id={option} />
                                            <Label htmlFor={option} className="flex-1 cursor-pointer">{option}</Label>
                                            {isAnswered && isCorrect && <Check className="w-5 h-5 text-green-600" />}
                                            {isAnswered && !isCorrect && isSelected && <X className="w-5 h-5 text-red-600" />}
                                        </div>
                                    )
                                })}
                            </RadioGroup>
                            <div className="mt-6 flex justify-end">
                                {isAnswered ? (
                                    <Button onClick={handleNext}>
                                        {currentQuestionIndex < questions.length - 1 ? "Ďalšia otázka" : "Ukázať výsledky"}
                                    </Button>
                                ) : (
                                    <Button onClick={handleAnswer} disabled={selectedAnswer === null}>Odpovedať</Button>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
}