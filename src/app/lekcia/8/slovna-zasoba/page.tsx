import Flashcard from '@/components/ui/flashcard';

export default function SlovnaZasobaPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Lekcia 8: Slovná zásoba</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Flashcard slovak="Kultúra" english="Culture" />
        <Flashcard slovak="Umenie" english="Art" />
        <Flashcard slovak="História" english="History" />
        <Flashcard slovak="Hudba" english="Music" />
        <Flashcard slovak="Film" english="Film" />
        <Flashcard slovak="Divadlo" english="Theatre" />
      </div>
    </main>
  );
}
