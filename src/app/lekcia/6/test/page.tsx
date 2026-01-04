import Quiz from '@/components/ui/quiz';
import vocabulary from '@/lib/lekcia6-vocabulary.json';

function generateQuestions() {
  const questions = Object.entries(vocabulary).map(([slovak, english]) => {
    const allSlovakWords = Object.keys(vocabulary);
    const otherSlovakWords = allSlovakWords.filter(word => word !== slovak);
    const randomSlovakWords = otherSlovakWords.sort(() => 0.5 - Math.random()).slice(0, 3);
    const options = [...randomSlovakWords, slovak].sort(() => 0.5 - Math.random());

    return {
      question: `What is the Slovak for '${english}'?`,
      options: options,
      answer: slovak,
    };
  });

  return questions;
}

export default function TestPage() {
  const questions = generateQuestions();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Lekcia 6: Test</h1>
      <Quiz questions={questions} />
    </main>
  );
}
