import Flashcard from '@/components/ui/flashcard';

export default function SlovnaZasobaPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Lekcia 7: Slovná zásoba</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Flashcard slovak="Zdravie" english="Health" />
        <Flashcard slovak="Lekár" english="Doctor" />
        <Flashcard slovak="Nemocnica" english="Hospital" />
        <Flashcard slovak="Choroba" english="Sickness" />
        <Flashcard slovak="Liek" english="Medicine" />
        <Flashcard slovak="Telo" english="Body" />
      </div>
    </main>
  );
}
