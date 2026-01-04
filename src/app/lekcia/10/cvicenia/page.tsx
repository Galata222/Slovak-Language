import Quiz from '@/components/ui/quiz';

const questions = [
  {
    question: "Translate: Family",
    options: ["Rodina", "Priatelia", "Dom", "Byt"],
    answer: "Rodina",
  },
  {
    question: "What is the Slovak word for friends?",
    options: ["Priatelia", "Rodina", "Dom", "Byt"],
    answer: "Priatelia",
  },
];

export default function CviceniaPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Lekcia 10: Cvičenia</h1>
      <Quiz questions={questions} />
    </main>
  );
}
