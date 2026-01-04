import { getLessonById } from "@/lib/data";
import { notFound } from "next/navigation";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Badge as UiBadge } from "@/components/ui/badge";

export default function UnitPage({ params }: { params: { unitId: string } }) {
  const lesson = getLessonById(parseInt(params.unitId));

  if (!lesson) {
    notFound();
  }

  return (
    <div className="flex flex-col h-full">
      <header className="flex items-center gap-4 p-4 border-b">
        <SidebarTrigger className="md:hidden" />
        <div>
          <h1 className="text-2xl font-bold font-headline">Lekcia {lesson.id}</h1>
        </div>
      </header>

      <main className="flex-1 p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lesson.activities.map((activity) => (
            <Link key={activity.id} href={activity.href} className="group">
              <Card className="h-full flex flex-col hover:border-primary hover:shadow-lg transition-all duration-300">
                <CardHeader className="flex-row items-start gap-4 space-y-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 shrink-0">
                    <activity.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle>{activity.title}</CardTitle>
                    <CardDescription>{activity.description}</CardDescription>
                  </div>
                </CardHeader>
                <div className="flex-grow" />
                <div className="p-6 pt-0 flex justify-between items-center">
                   {activity.isFeatured && <UiBadge variant="secondary"><Star className="w-3 h-3 mr-1" />AI Feature</UiBadge>}
                  <div className="flex items-center text-sm text-primary group-hover:underline">
                    Začať cvičenie <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
