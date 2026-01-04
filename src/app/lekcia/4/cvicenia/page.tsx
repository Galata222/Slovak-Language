import Quiz from '@/components/ui/quiz';

const questions = [
  {
    question: "Translate: Culture",
    options: ["Kultúra", "Umenie", "História", "Príroda"],
    answer: "Kultúra",
  },
  {
    question: "What is the Slovak word for city?",
    options: ["Mesto", "Dedina", "Príroda", "Umenie"],
    answer: "Mesto",
  },
];

export default function CviceniaPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Lekcia 4: Cvičenia</h1>
      <Quiz questions={questions} />
    </main>
  );
}
