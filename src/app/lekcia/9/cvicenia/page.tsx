import Quiz from '@/components/ui/quiz';

const questions = [
  {
    question: "Translate: Restaurant",
    options: ["Reštaurácia", "Účet", "Hladný", "Smädný"],
    answer: "Reštaurácia",
  },
  {
    question: "What is the Slovak word for food?",
    options: ["Jedlo", "Nápoje", "Reštaurácia", "Účet"],
    answer: "Jedlo",
  },
];

export default function CviceniaPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Lekcia 9: Cvičenia</h1>
      <Quiz questions={questions} />
    </main>
  );
}
