import Flashcard from '@/components/ui/flashcard';

export default function SlovnaZasobaPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Lekcia 5: Slovná zásoba</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Flashcard slovak="Jedlo" english="Food" />
        <Flashcard slovak="Nápoje" english="Drinks" />
        <Flashcard slovak="Rodina" english="Family" />
        <Flashcard slovak="Dom" english="House" />
        <Flashcard slovak="Záhrada" english="Garden" />
        <Flashcard slovak="Priatelia" english="Friends" />
      </div>
    </main>
  );
}
