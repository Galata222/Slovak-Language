import Quiz from '@/components/ui/quiz';

const questions = [
  {
    question: "Translate: Family",
    options: ["Rodina", "Priatelia", "Záľuby", "Hudba"],
    answer: "Rodina",
  },
  {
    question: "Complete the sentence: Mám rád ___",
    options: ["šport", "kniha", "stôl", "auto"],
    answer: "šport",
  },
];

export default function CviceniaPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Lekcia 2: Cvičenia</h1>
      <Quiz questions={questions} />
    </main>
  );
}
