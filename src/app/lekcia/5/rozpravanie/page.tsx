import { ChatPartner } from '@/components/chat-partner';

export default function RozpravaniePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Lekcia 5: Rozprávanie</h1>
      <ChatPartner unitId={5} />
    </main>
  );
}
