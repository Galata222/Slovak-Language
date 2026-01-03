"use client";

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { lessons } from "@/lib/data";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Logo } from "./logo";

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="p-2">
            <Logo />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {lessons.map((lesson) => (
            <SidebarMenuItem key={lesson.id}>
              <SidebarMenuButton asChild isActive={pathname.startsWith(`/lekcia/${lesson.id}`)} tooltip={{children: lesson.title.replace(`Lekcia ${lesson.id}: `, ''), side: 'right'}}>
                <Link href={`/lekcia/${lesson.id}`}>
                  <span className="flex items-center justify-center w-6 h-6 text-xs font-bold rounded-full bg-primary/20 text-primary-foreground shrink-0">{lesson.id}</span>
                  <span className="truncate">{lesson.title.replace(`Lekcia ${lesson.id}: `, '')}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}
