import PronunciationChecker from '@/components/ui/pronunciation-checker';
import vocabulary from '@/lib/lekcia8-vocabulary.json';

export default function DialogyPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Lekcia 8: Dialógy</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Object.keys(vocabulary).map((slovak) => (
          <PronunciationChecker key={slovak} text={slovak} />
        ))}
      </div>
    </main>
  );
}
