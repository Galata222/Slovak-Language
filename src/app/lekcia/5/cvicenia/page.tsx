import Quiz from '@/components/ui/quiz';

const questions = [
  {
    question: "Translate: Family",
    options: ["Rodina", "Dom", "Záhrada", "Priatelia"],
    answer: "Rodina",
  },
  {
    question: "What is the Slovak word for food?",
    options: ["Jedlo", "Nápoje", "Dom", "Záhrada"],
    answer: "Jedlo",
  },
];

export default function CviceniaPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Lekcia 5: Cvičenia</h1>
      <Quiz questions={questions} />
    </main>
  );
}
