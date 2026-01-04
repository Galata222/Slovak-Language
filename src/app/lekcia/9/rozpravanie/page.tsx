import { ChatPartner } from '@/components/chat-partner';

export default function RozpravaniePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Lekcia 9: Rozprávanie</h1>
      <ChatPartner unitId={9} />
    </main>
  );
}
