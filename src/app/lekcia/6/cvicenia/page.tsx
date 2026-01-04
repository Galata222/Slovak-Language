import Quiz from '@/components/ui/quiz';

const questions = [
  {
    question: "Translate: School",
    options: ["Škola", "Práca", "Hobby", "Šport"],
    answer: "Škola",
  },
  {
    question: "What is the Slovak word for travelling?",
    options: ["Cestovanie", "Hudba", "Šport", "Práca"],
    answer: "Cestovanie",
  },
];

export default function CviceniaPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Lekcia 6: Cvičenia</h1>
      <Quiz questions={questions} />
    </main>
  );
}
