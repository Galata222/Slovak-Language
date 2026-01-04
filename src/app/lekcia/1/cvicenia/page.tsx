import Quiz from '@/components/ui/quiz';

const questions = [
  {
    question: "Complete the sentence: Volám sa ___",
    options: ["Peter", "kniha", "stôl", "auto"],
    answer: "Peter",
  },
  {
    question: "Translate: How are you?",
    options: ["Ako sa máš?", "Ďakujem", "Ahoj", "Dovidenia"],
    answer: "Ako sa máš?",
  },
];

export default function CviceniaPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Lekcia 1: Cvičenia</h1>
      <Quiz questions={questions} />
    </main>
  );
}
