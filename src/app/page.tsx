import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Award, BrainCircuit, MessageCircle, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/logo";

export default function Home() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero');

  const features = [
    {
      icon: <MessageCircle className="w-8 h-8 text-primary" />,
      title: "AI Conversational Partner",
      description: "Practice speaking with an AI tutor that provides targeted conversation based on your current lesson.",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Automated Writing Correction",
      description: "Get real-time grammatical feedback on your writing to quickly improve your skills.",
    },
    {
      icon: <BrainCircuit className="w-8 h-8 text-primary" />,
      title: "Interactive Grammar & Vocab",
      description: "Master new concepts with interactive drills, digital flashcards, and picture-based vocabulary.",
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Skill Testing",
      description: "Test your knowledge at the end of each unit with automated quizzes and track your progress.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center">
        <Logo />
      </header>

      <main className="flex-1">
        <section className="relative py-20 md:py-32">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              data-ai-hint={heroImage.imageHint}
              priority
            />
          )}
          <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-foreground">
                Master Slovak with your AI Companion
              </h1>
              <p className="mt-6 text-lg md:text-xl text-foreground/80">
                An interactive platform to enhance the Krížom-krážom Slovenčina A2 textbook with AI-powered dialogues, exercises, and tutoring.
              </p>
              <div className="mt-10">
                <Button asChild size="lg">
                  <Link href="/lekcia/1">Get Started - Lekcia 1</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 md:py-24 bg-white dark:bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-headline">A Smarter Way to Learn</h2>
              <p className="mt-4 text-muted-foreground">
                Transform static textbook content into dynamic, interactive learning experiences.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {features.map((feature, index) => (
                <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      {feature.icon}
                    </div>
                    <CardTitle className="font-headline">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center text-sm text-muted-foreground">
          <Logo />
          <p>&copy; {new Date().getFullYear()} Slovenský Spoločník. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
