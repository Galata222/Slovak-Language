import { WritingCorrection } from "@/components/writing-correction";
import { getLessonById, getActivity } from "@/lib/data";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function WritingPage({ params }: { params: { unitId: string } }) {
  const unitId = parseInt(params.unitId);
  const lesson = getLessonById(unitId);
  const activity = getActivity(unitId, 'pisanie');

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

        <main className="flex-1 p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                <WritingCorrection />
            </div>
        </main>
    </div>
  );
}
