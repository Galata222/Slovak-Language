import Flashcard from '@/components/ui/flashcard';

export default function SlovnaZasobaPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Lekcia 1: Slovná zásoba</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Flashcard slovak="Ahoj" english="Hello" />
        <Flashcard slovak="Ďakujem" english="Thank you" />
        <Flashcard slovak="Prosím" english="Please / You're welcome" />
        <Flashcard slovak="Volám sa..." english="My name is..." />
        <Flashcard slovak="Ako sa máš?" english="How are you?" />
        <Flashcard slovak="Dovidenia" english="Goodbye" />
      </div>
    </main>
  );
}
