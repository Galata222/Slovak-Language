'use client';

import { ChatPartner } from '@/components/chat-partner';
import PronunciationChecker from '@/components/ui/pronunciation-checker';
import { Button } from '@/components/ui/button';
import { SpeakerLoudIcon } from '@radix-ui/react-icons';
import GrammarExplainer from '@/components/ui/grammar-explainer';

export default function GramatikaPage() {
  const handlePlayAudio = () => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(
        'Ahoj, ja som Peter. Vitajte na Slovensku!'
      );
      utterance.lang = 'sk-SK';
      window.speechSynthesis.speak(utterance);
    }
  };

  const recommendedResources = "Krátke texty (úryvky z autentických alebo adaptovaných textov).";

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Lekcia 1: Gramatika</h1>
      <div className="text-lg">
        <h2 className="text-2xl font-bold">Grammar Notes</h2>
        <ul>
          <li>Abeceda, výslovnosť. Dĺžeň, mäkčeň, vokáň.</li>
          <li>
            Rod podstatných mien (mužský, ženský, stredný). Osobné zámená (ja,
            ty, on, ona...). Číslovky (0-10).
          </li>
          <li>Sloveso „byť“ v prítomnom čase.</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8">
          Main phrases and expressions to learn
        </h2>
        <ul>
          <li>Ahoj. (Hello.).</li>
          <li>Moje meno je... (My name is...).</li>
          <li>Som z... (I am from...).</li>
        </ul>
        <h2 className="text-2xl font-bold mt-8">
          Recommended materials to study
        </h2>
        <p>{recommendedResources}</p>
        <div className="flex items-center gap-4 mt-4">
          <Button onClick={handlePlayAudio}>
            <SpeakerLoudIcon className="mr-2" /> Listen to Dialogue
          </Button>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-bold">Pronunciation Practice</h3>
          <PronunciationChecker text="Dobrý deň" />
        </div>
        <div className="mt-8">
          <GrammarExplainer recommendedResources={recommendedResources} />
        </div>
      </div>
      <ChatPartner unitId={1} />
    </main>
  );
}
