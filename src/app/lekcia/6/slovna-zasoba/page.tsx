import Flashcard from '@/components/ui/flashcard';

export default function SlovnaZasobaPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Lekcia 6: Slovná zásoba</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Flashcard slovak="Škola" english="School" />
        <Flashcard slovak="Práca" english="Work" />
        <Flashcard slovak="Hobby" english="Hobby" />
        <Flashcard slovak="Šport" english="Sport" />
        <Flashcard slovak="Hudba" english="Music" />
        <Flashcard slovak="Cestovanie" english="Travelling" />
      </div>
    </main>
  );
}
