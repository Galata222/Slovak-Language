import Flashcard from '@/components/ui/flashcard';
import vocabulary from '@/lib/lekcia5-vocabulary.json';

export default function SlovickaPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Lekcia 5: Slovíčka</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(vocabulary).map(([slovak, english]) => (
          <Flashcard key={slovak} slovak={slovak} english={english} />
        ))}
      </div>
    </main>
  );
}
