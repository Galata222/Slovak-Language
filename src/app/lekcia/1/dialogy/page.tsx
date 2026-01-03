import { getLessonById, getActivity } from "@/lib/data";
import { notFound } from "next/navigation";
import { ArrowLeft, Mic, User, UserCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function DialoguePage({ params }: { params: { unitId: string } }) {
  const unitId = 1;
  const lesson = getLessonById(unitId);
  const activity = getActivity(unitId, 'dialogy');

  if (!lesson || !activity) {
    notFound();
  }

  const dialogue = [
      { speaker: "Moderátor", line: "Vitajte v druhom kole. Volám sa Richard Ryšavý a toto je môj program Rodinný duel! Tu sú moji dvaja kandidáti: pán Róbert Šoltýs... Dobrý večer, Richard. ... a jeho manželka Zuzana Šoltýsová! Dobrý večer!" },
      { speaker: "Moderátor", line: "Pán Róbert, môžete sa predstaviť?" },
      { speaker: "Róbert", line: "Volám sa Róbert Šoltýs, som z Popradu a pracujem ako manažér." },
      { speaker: "Moderátor", line: "Čo robíte, keď nepracujete?" },
      { speaker: "Róbert", line: "Mám rád šport a hudbu." },
      { speaker: "Moderátor", line: "Uáááááá, originálne hobby... a teraz vy, pani Zuzana." },
      { speaker: "Zuzana", line: "Nie som Róbertova manželka, som slečna, ešte nie som vydatá. Som študentka a študujem medicínu v Bratislave. Rada nakupujem a mám rada prechádzky. Som mestský typ. Róbert je môj brat." },
      { speaker: "Moderátor", line: "Prepáčte, to bol vtip! Teraz povedzte, kto prišiel s vami ako váš fanúšik?" },
      { speaker: "Zuzana", line: "Prišiel so mnou môj kolega Carlo Biaggiotti. Je Talian, ale učí sa po slovensky." },
      { speaker: "Moderátor", line: "Dobrý večer, Carlo. Pri ňom je jedna dáma. Kto je to, Zuzana?" },
      { speaker: "Zuzana", line: "To je moja spolubývajúca, Johanna Mark. Je z Nemecka, ale tiež hovorí po slovensky." },
      { speaker: "Moderátor", line: "Pozor, otázky sú veľmi ťažké! Dnešná téma je: Čo viete o Slovensku?" },
      { speaker: "Moderátor", line: "Prvá otázka: Ako sa volá veľký slovenský hrad?" },
      { speaker: "Zuzana", line: "volá sa Spišský hrad. 0:1 Výborne! Zuzana, máte jeden bod." },
      { speaker: "Moderátor", line: "Druhá otázka: Toto je slávny obraz. Ako sa volá jeho autor? Bol to Slovák," },
      { speaker: "Róbert", line: "Myslím si, že je to Andy Warhol. 1:1 Úžasné, pán Róbert!" },
      { speaker: "Moderátor", line: "Posledná otázka: Ako sa volá známy bratislavský futbalový klub?" },
      { speaker: "Róbert", line: "Futbalový klub sa volá Slovan. 3:3 Áno, áno, je to Slovan! Pán Róbert a vy ste víťaz, gratulujem! Vyhrali ste kolieskové korčule. A vy, pani Zuzana, nemusíte byť smutná! Pre vás je tu kniha od Richarda Ryšavého: Môj život!" },
  ];

  const getAvatar = (speaker: string) => {
      const initial = speaker.charAt(0).toUpperCase();
      switch (speaker) {
          case "Moderátor": return <AvatarFallback className="bg-blue-200"><UserCircle className="w-5 h-5" /></AvatarFallback>;
          case "Róbert": return <AvatarFallback className="bg-green-200">{initial}</AvatarFallback>;
          case "Zuzana": return <AvatarFallback className="bg-purple-200">{initial}</AvatarFallback>;
          default: return <AvatarFallback><User className="w-5 h-5" /></AvatarFallback>;
      }
  }


  return (
    <div className="flex flex-col h-full">
        <header className="flex items-center gap-4 p-4 border-b">
            <SidebarTrigger className="md:hidden" />
            <Button asChild variant="outline" size="icon" className="shrink-0">
                <Link href={`/lekcia/${unitId}`}>
                    <ArrowLeft className="w-4 h-4" />
                    <span className="sr-only">Späť na lekciu</span>
                </Link>
            </Button>
            <div>
                <p className="text-sm text-muted-foreground">{lesson.title}</p>
                <h1 className="text-2xl font-bold font-headline">{activity.title}: Rodinný duel</h1>
            </div>
        </header>

        <main className="flex-1 p-4 md:p-8 overflow-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Dialóg</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {dialogue.map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                            <Avatar className="w-10 h-10 border">
                                {getAvatar(item.speaker)}
                            </Avatar>
                            <div className="flex-1 space-y-1">
                                <p className="font-bold">{item.speaker}</p>
                                <p className="text-muted-foreground">{item.line}</p>
                                <Button variant="ghost" size="icon" className="group">
                                    <Mic className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                                    <span className="sr-only">Nahrajte svoj hlas</span>
                                </Button>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
        </main>
    </div>
  );
}