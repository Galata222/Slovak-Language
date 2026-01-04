import Quiz from '@/components/ui/quiz';

const questions = [
  {
    question: "Translate: Restaurant",
    options: ["Reštaurácia", "Obchod", "Cestovanie", "Práca"],
    answer: "Reštaurácia",
  },
  {
    question: "What is the capital of Slovakia?",
    options: ["Bratislava", "Prague", "Budapest", "Warsaw"],
    answer: "Bratislava",
  },
];

export default function CviceniaPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Lekcia 3: Cvičenia</h1>
      <Quiz questions={questions} />
    </main>
  );
}
