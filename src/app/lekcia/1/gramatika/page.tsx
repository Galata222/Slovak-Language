import { getLessonById, getActivity } from "@/lib/data";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function GrammarPage({ params }: { params: { unitId: string } }) {
  const unitId = 1;
  const lesson = getLessonById(unitId);
  const activity = getActivity(unitId, 'gramatika');

  if (!lesson || !activity) {
    notFound();
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
                <h1 className="text-2xl font-bold font-headline">{activity.title}</h1>
            </div>
        </header>

        <main className="flex-1 p-4 md:p-8 overflow-auto">
            <Card>
                <CardHeader>
                    <CardTitle>Gramatické pravidlá</CardTitle>
                    <CardDescription>Prehľad gramatiky pre Lekciu 1.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Asimilácia (Spodobovanie)</AccordionTrigger>
                            <AccordionContent>
                                <p className="mb-2">Neznelé spoluhlásky: P, T, Ť, K, C, Č, S, Š, C, H, F</p>
                                <p className="mb-4">Znelé spoluhlásky: B, D, Ď, G, DZ, DŽ, Z, Ž, H, V, M, N, Ň, L, Ľ, R, J</p>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Píšeme (Spell)</TableHead>
                                            <TableHead>Vyslovujeme (Hear)</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow><TableCell>hrať hru</TableCell><TableCell>[hradhru]</TableCell></TableRow>
                                        <TableRow><TableCell>váš brat</TableCell><TableCell>[vážbrat]</TableCell></TableRow>
                                        <TableRow><TableCell>teraz povedzte</TableCell><TableCell>[teraz povecťe]</TableCell></TableRow>
                                        <TableRow><TableCell>podpis</TableCell><TableCell>[potpis]</TableCell></TableRow>
                                        <TableRow><TableCell>otázka</TableCell><TableCell>[otáška]</TableCell></TableRow>
                                        <TableRow><TableCell>sme</TableCell><TableCell>[zme]</TableCell></TableRow>
                                    </TableBody>
                                </Table>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Konsonantické skupiny</AccordionTrigger>
                            <AccordionContent>
                                <p className="font-semibold">Pravidlá:</p>
                                <ul className="list-disc pl-5 mt-2 space-y-1">
                                    <li>nn, kk, jj, ... → [n], [k], [j] (len dlhé spoluhlásky)</li>
                                    <li><span className="italic">rodinný</span> → [rodi:ní]</li>
                                    <li><span className="italic">mäkký</span> → [me:kí]</li>
                                    <li>dst → [ct]: <span className="italic">predstaviť</span> → [prectaviť]</li>
                                    <li>stsk → [sk]: <span className="italic">mestský</span> → [meskí]</li>
                                    <li>zsk → [sk]: <span className="italic">francúzsky</span> → [francúski]</li>
                                    <li>stn → [stn]: <span className="italic">šťastný</span> → [šťastní]</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                         <AccordionItem value="item-3">
                            <AccordionTrigger>Rytmus a kvantita (Rytmické krátenie)</AccordionTrigger>
                            <AccordionContent>
                                <p>V slovenčine zvyčajne nenaledujú dve dlhé slabiky za sebou. Ak by mali, druhá sa skráti.</p>
                                <ul className="list-disc pl-5 mt-2 space-y-1">
                                    <li>vol<span className="font-bold">á</span>ť sa - vol<span className="font-bold">á</span>m sa</li>
                                    <li>d<span className="font-bold">o</span>brý večer - kr<span className="font-bold">á</span>sny večer</li>
                                    <li>rob<span className="font-bold">i</span>ť - rob<span className="font-bold">ia</span></li>
                                    <li>k<span className="font-bold">ú</span>piť - k<span className="font-bold">ú</span>pia</li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>Privlastňovacie zámená (Posesívne pronominá)</AccordionTrigger>
                            <AccordionContent>
                                <p className="font-semibold mb-2">môj, tvoj, náš, váš (skloňujú sa)</p>
                                <Table>
                                    <TableHeader><TableRow><TableHead>Pád</TableHead><TableHead>Mužský rod</TableHead><TableHead>Ženský rod</TableHead><TableHead>Stredný rod</TableHead></TableRow></TableHeader>
                                    <TableBody>
                                        <TableRow><TableCell>Nominatív</TableCell><TableCell>môj</TableCell><TableCell>moja</TableCell><TableCell>moje</TableCell></TableRow>
                                        <TableRow><TableCell>Akuzatív</TableCell><TableCell>môjho / môj</TableCell><TableCell>moju</TableCell><TableCell>moje</TableCell></TableRow>
                                    </TableBody>
                                </Table>
                                <p className="font-semibold mt-4 mb-2">jeho, jej, ich (nesklonné)</p>
                                <p>Tieto tvary sú rovnaké pre všetky rody a pády.</p>
                            </AccordionContent>
                        </AccordionItem>
                         <AccordionItem value="item-5">
                            <AccordionTrigger>Vzory prídavných mien: PEKNÝ vs. CUDZÍ</AccordionTrigger>
                            <AccordionContent>
                                <p className="mb-4">Prídavné mená sa skloňujú podľa vzorov. Pre túto lekciu sú dôležité vzory 'pekný' (pre adjektíva končiace na -ný/-lý) a 'cudzí'.</p>
                                <Table>
                                    <TableHeader><TableRow><TableHead>Pád</TableHead><TableHead>M neživ.</TableHead><TableHead>Ženský</TableHead><TableHead>Stredný</TableHead><TableHead>M živ. (Pl)</TableHead></TableRow></TableHeader>
                                    <TableBody>
                                        <TableRow><TableCell>N</TableCell><TableCell>pekný</TableCell><TableCell>pekná</TableCell><TableCell>pekné</TableCell><TableCell>pekní</TableCell></TableRow>
                                        <TableRow><TableCell>A</TableCell><TableCell>pekný</TableCell><TableCell>peknú</TableCell><TableCell>pekné</TableCell><TableCell>pekných</TableCell></TableRow>
                                        <TableRow><TableCell>I</TableCell><TableCell>pekným</TableCell><TableCell>peknou</TableCell><TableCell>pekným</TableCell><TableCell>peknými</TableCell></TableRow>
                                    </TableBody>
                                </Table>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>
        </main>
    </div>
  );
}
