import Flashcard from '@/components/ui/flashcard';

export default function SlovnaZasobaPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Lekcia 10: Slovná zásoba</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Flashcard slovak="Rodina" english="Family" />
        <Flashcard slovak="Priatelia" english="Friends" />
        <Flashcard slovak="Dom" english="House" />
        <Flashcard slovak="Byt" english="Apartment" />
        <Flashcard slovak="Mesto" english="City" />
        <Flashcard slovak="Dedina" english="Village" />
      </div>
    </main>
  );
}
