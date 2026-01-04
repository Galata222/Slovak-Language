import Link from "next/link";
import { Button } from "@/components/ui/button";
import { lessons } from "@/lib/data";
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function NavButtons({ unitId }: { unitId: number }) {
  const currentLessonIndex = lessons.findIndex(lesson => lesson.id === unitId);
  const previousLesson = currentLessonIndex > 0 ? lessons[currentLessonIndex - 1] : null;
  const nextLesson = currentLessonIndex < lessons.length - 1 ? lessons[currentLessonIndex + 1] : null;

  return (
    <div className="flex justify-between mt-8">
      {previousLesson ? (
        <Button asChild>
          <Link href={`/lekcia/${previousLesson.id}`} className="flex items-center gap-2">
            <ChevronLeft className="w-4 h-4" />
            <span>{previousLesson.title}</span>
          </Link>
        </Button>
      ) : <div />}
      {nextLesson ? (
        <Button asChild>
          <Link href={`/lekcia/${nextLesson.id}`} className="flex items-center gap-2">
            <span>{nextLesson.title}</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </Button>
      ) : <div />}
    </div>
  );
}
