import { GraduationCap } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/lekcia/1" className={cn("flex items-center gap-2", className)}>
      <GraduationCap className="w-6 h-6 text-primary" />
      <span className="text-lg font-semibold font-headline tracking-tight">
        Krížom-krážom A2
      </span>
    </Link>
  );
}
