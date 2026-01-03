import { ChatPartner } from "@/components/chat-partner";
import { getLessonById, getActivity } from "@/lib/data";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function SpeakingPage({ params }: { params: { unitId: string } }) {
    const unitId = parseInt(params.unitId);
    const lesson = getLessonById(unitId);
    const activity = getActivity(unitId, 'rozpravanie');

    if (!lesson || !activity) {
        notFound();
    }

    return (
        <div className="flex flex-col h-[calc(100vh-1px)]">
             <header className="flex items-center gap-4 p-4 border-b shrink-0">
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
            <main className="flex-1 overflow-y-auto">
                <ChatPartner unitId={unitId} />
            </main>
        </div>
    );
}
