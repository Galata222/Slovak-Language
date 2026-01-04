'use client';

import { ChatPartner } from '@/components/chat-partner';
import PronunciationChecker from '@/components/ui/pronunciation-checker';
import { Button } from '@/components/ui/button';
import { SpeakerLoudIcon } from '@radix-ui/react-icons';
import GrammarExplainer from '@/components/ui/grammar-explainer';

export default function GramatikaPage() {
  const handlePlayAudio = () => {
    // In a real application, you would play an audio file.
    // For this example, we'll just use text-to-speech.
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance("Ahoj, ja som Peter. Vitajte na Slovensku!");
      utterance.lang = "sk-SK";
      window.speechSynthesis.speak(utterance);
    }
  };

  const recommendedResources = "Audio CD 1 (nahrávky 6–11).";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Lekcia 6: Gramatika</h1>
      <div className="text-lg">
        <h2 className="text-2xl font-bold">Grammar Notes</h2>
        <ul>
          <li>Slovosled (neutrálny a expresívny). Negácia.</li>
          <li>Prepozície (v, na, do, z, u, od, pri, k) s lokálom, genitívom, datívom a akuzatívom.</li>
          <li>Časovanie slovies 2. triedy (typu „hovoriť“).</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8">Main phrases and expressions to learn</h2>
        <ul>
          <li>Ako sa máš? (How are you?).</li>
          <li>Čo robíš? (What are you doing?).</li>
          <li>Kde bývaš? (Where do you live?).</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8">Recommended materials to study</h2>
        <p>{recommendedResources}</p>
        <div className="flex items-center gap-4 mt-4">
          <Button onClick={handlePlayAudio}><SpeakerLoudIcon className="mr-2" /> Listen to Dialogue</Button>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-bold">Pronunciation Practice</h3>
          <PronunciationChecker text="pondelok" />
        </div>
        <div className="mt-8">
          <GrammarExplainer recommendedResources={recommendedResources} />
        </div>
      </div>
      <ChatPartner unitId={6} />
    </main>
  );
}
