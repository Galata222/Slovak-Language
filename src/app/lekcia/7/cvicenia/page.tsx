import Quiz from '@/components/ui/quiz';

const questions = [
  {
    question: "Translate: Sickness",
    options: ["Choroba", "Liek", "Telo", "Zdravie"],
    answer: "Choroba",
  },
  {
    question: "What is the Slovak word for doctor?",
    options: ["Lekár", "Nemocnica", "Choroba", "Liek"],
    answer: "Lekár",
  },
];

export default function CviceniaPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Lekcia 7: Cvičenia</h1>
      <Quiz questions={questions} />
    </main>
  );
}
