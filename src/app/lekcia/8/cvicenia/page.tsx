import Quiz from '@/components/ui/quiz';

const questions = [
  {
    question: "Translate: Art",
    options: ["Umenie", "História", "Hudba", "Film"],
    answer: "Umenie",
  },
  {
    question: "What is the Slovak word for culture?",
    options: ["Kultúra", "Umenie", "História", "Hudba"],
    answer: "Kultúra",
  },
];

export default function CviceniaPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Lekcia 8: Cvičenia</h1>
      <Quiz questions={questions} />
    </main>
  );
}
