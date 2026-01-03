
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
                    <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Asimilácia (Spodobovanie) a Konsonantické skupiny</AccordionTrigger>
                            <AccordionContent>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-md mb-2">Asimilácia (znelostná asimilácia)</h4>
                                        <p className="mb-2">Znelosť spoluhlásky sa mení v závislosti od nasledujúcej spoluhlásky.</p>
                                        <p className="text-sm mb-2"><span className="font-semibold">Neznelé spoluhlásky:</span> P, T, Ť, K, C, Č, S, Š, CH, F</p>
                                        <p className="text-sm mb-4"><span className="font-semibold">Znelé spoluhlásky:</span> B, D, Ď, G, DZ, DŽ, Z, Ž, H, V</p>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>Píšeme (Písanie)</TableHead>
                                                    <TableHead>Vyslovujeme (Výslovnosť)</TableHead>
                                                    <TableHead>Príklad</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                <TableRow><TableCell>znelá + neznelá</TableCell><TableCell>[neznelá + neznelá]</TableCell><TableCell>podpis → [potpis]</TableCell></TableRow>
                                                <TableRow><TableCell>neznelá + znelá</TableCell><TableCell>[znelá + znelá]</TableCell><TableCell>váš brat → [vážbrat]</TableCell></TableRow>
                                                <TableRow><TableCell>predložka s/z + samohláska</TableCell><TableCell>[z]</TableCell><TableCell>s otcom → [zotcom]</TableCell></TableRow>
                                                <TableRow><TableCell>na konci slova</TableCell><TableCell>[neznelá]</TableCell><TableCell>hrad → [hrat]</TableCell></TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-md mb-2">Konsonantické skupiny (skupiny spoluhlások)</h4>
                                        <p className="mb-2">Pravidlá pre zjednodušenie výslovnosti zložitých skupín spoluhlások.</p>
                                         <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                                            <li><span className="font-semibold">Zdvojené spoluhlásky (nn, kk, jj, ...):</span> vyslovujú sa ako jedna dlhá spoluhláska. Príklad: <span className="italic">rodinný</span> → [roďi:ní].</li>
                                            <li><span className="font-semibold">Zjednodušenie skupín:</span><ul>
                                                <li><span className="italic">dst → [ct]</span> (napr. <span className="italic">predstaviť</span> → [prectaviť])</li>
                                                <li><span className="italic">stsk → [sk]</span> (napr. <span className="italic">mestský</span> → [meskí])</li>
                                            </ul></li>
                                        </ul>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Rytmus a kvantita (Rytmické krátenie)</AccordionTrigger>
                            <AccordionContent>
                                <p>V spisovnej slovenčine zvyčajne nenaledujú dve dlhé slabiky za sebou. Ak by mali, druhá sa automaticky skráti. Toto pravidlo sa nazýva rytmické krátenie.</p>
                                <ul className="list-disc pl-5 mt-2 space-y-1">
                                    <li>kr<span className="font-bold">á</span>sn<span className="font-bold">y</span> (dlhá + dlhá) → kr<span className="font-bold">á</span>sn<span className="font-bold">y</span> (správne je s krátkym 'y')</li>
                                    <li>biely → bielych (nie bielych)</li>
                                    <li>píšem → píšu (nie píšú)</li>
                                    <li>volám → volajú (nie volajú)</li>
                                    <li><span className="italic">Príklady:</span> vol<span className="font-bold">á</span>ť - vol<span className="font-bold">á</span>m, d<span className="font-bold">o</span>brý - kr<span className="font-bold">á</span>sny, rob<span className="font-bold">i</span>ť - rob<span className="font-bold">ia</span></li>
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Privlastňovacie zámená (Posesívne pronominá)</AccordionTrigger>
                            <AccordionContent>
                                <div className="space-y-4">
                                     <div>
                                        <h4 className="font-semibold text-md mb-2">Sklonné zámená: môj, tvoj, náš, váš</h4>
                                        <p className="mb-2">Tieto zámená sa skloňujú podobne ako prídavné mená podľa vzoru <span className="italic">pekný</span>.</p>
                                        <Table>
                                            <TableHeader><TableRow><TableHead>Pád</TableHead><TableHead>Mužský rod (neživ.)</TableHead><TableHead>Ženský rod</TableHead><TableHead>Stredný rod</TableHead></TableRow></TableHeader>
                                            <TableBody>
                                                <TableRow><TableCell>Nominatív (kto? čo?)</TableCell><TableCell>môj dom</TableCell><TableCell>moja kniha</TableCell><TableCell>moje auto</TableCell></TableRow>
                                                <TableRow><TableCell>Akuzatív (koho? čo?)</TableCell><TableCell>môj dom</TableCell><TableCell>moju knihu</TableCell><TableCell>moje auto</TableCell></TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>
                                     <div>
                                        <h4 className="font-semibold text-md mb-2">Nesklonné zámená: jeho, jej, ich</h4>
                                        <p>Tieto tvary sú rovnaké pre všetky rody, čísla a pády.</p>
                                        <p className="italic mt-2">Príklad: Vidím <span className="font-semibold">jeho</span> brata, <span className="font-semibold">jej</span> sestru aj <span className="font-semibold">ich</span> auto.</p>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                         <AccordionItem value="item-4">
                            <AccordionTrigger>Vzory prídavných mien: PEKNÝ vs. CUDZÍ</AccordionTrigger>
                            <AccordionContent>
                                <p className="mb-2">Prídavné mená sa v slovenčine skloňujú podľa vzorov. Dva základné vzory sú <span className="font-semibold">pekný</span> (pre adjektíva končiace na tvrdú alebo obojakú spoluhlásku + ý) a <span className="font-semibold">cudzí</span> (pre adjektíva končiace na mäkkú spoluhlásku + í).</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="font-semibold text-md mb-2">Vzor PEKNÝ</h4>
                                        <Table>
                                            <TableHeader><TableRow><TableHead>Pád</TableHead><TableHead>Mužský (neživ.)</TableHead><TableHead>Ženský</TableHead><TableHead>Stredný</TableHead></TableRow></TableHeader>
                                            <TableBody>
                                                <TableRow><TableCell>N</TableCell><TableCell>pekn<span className="font-bold">ý</span></TableCell><TableCell>pekn<span className="font-bold">á</span></TableCell><TableCell>pekn<span className="font-bold">é</span></TableCell></TableRow>
                                                <TableRow><TableCell>A</TableCell><TableCell>pekn<span className="font-bold">ý</span></TableCell><TableCell>pekn<span className="font-bold">ú</span></TableCell><TableCell>pekn<span className="font-bold">é</span></TableCell></TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-md mb-2">Vzor CUDZÍ</h4>
                                         <Table>
                                            <TableHeader><TableRow><TableHead>Pád</TableHead><TableHead>Mužský (neživ.)</TableHead><TableHead>Ženský</TableHead><TableHead>Stredný</TableHead></TableRow></TableHeader>
                                            <TableBody>
                                                <TableRow><TableCell>N</TableCell><TableCell>cudz<span className="font-bold">í</span></TableCell><TableCell>cudz<span className="font-bold">ia</span></TableCell><TableCell>cudz<span className="font-bold">ie</span></TableCell></TableRow>
                                                <TableRow><TableCell>A</TableCell><TableCell>cudz<span className="font-bold">í</span></TableCell><TableCell>cudz<span className="font-bold">iu</span></TableCell><TableCell>cudz<span className="font-bold">ie</span></TableCell></TableRow>
                                            </TableBody>
                                        </Table>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>
        </main>
    </div>
  );
}
