import { WritingCorrection } from '@/components/writing-correction';

export default function PisaniePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Lekcia 4: Písanie</h1>
      <WritingCorrection unitId={4} />
    </main>
  );
}
