import Flashcard from '@/components/ui/flashcard';

export default function SlovnaZasobaPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Lekcia 3: Slovná zásoba</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Flashcard slovak="Reštaurácia" english="Restaurant" />
        <Flashcard slovak="Obchod" english="Store" />
        <Flashcard slovak="Cestovanie" english="Traveling" />
        <Flashcard slovak="Práca" english="Work" />
        <Flashcard slovak="Škola" english="School" />
        <Flashcard slovak="Zdravie" english="Health" />
      </div>
    </main>
  );
}
