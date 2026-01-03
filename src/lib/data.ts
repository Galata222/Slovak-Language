import { BookOpen, Headphones, Mic, Pencil, CheckSquare, BrainCircuit } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Activity = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  isNew?: boolean;
  isFeatured?: boolean;
};

export type Lesson = {
  id: number;
  slug: string;
  title: string;
  description: string;
  activities: Activity[];
};

const activitiesTemplate: Omit<Activity, 'href' | 'isFeatured'>[] = [
  { id: 'dialogy', title: 'Interaktívne Dialógy', description: 'Počúvajte a precvičujte', icon: Headphones },
  { id: 'slovicka', title: 'Slovná Zásoba', description: 'Učte sa nové slovíčka', icon: BookOpen },
  { id: 'gramatika', title: 'Gramatika', description: 'Interaktívne cvičenia', icon: BrainCircuit },
  { id: 'pisanie', title: 'Písanie', description: 'Zlepšite si písanie', icon: Pencil },
  { id: 'rozpravanie', title: 'Konverzácia s AI', description: 'Precvičte si rozprávanie', icon: Mic },
  { id: 'test', title: 'Otestujte Sa', description: 'Záverečný test', icon: CheckSquare },
];

export const lessons: Lesson[] = [
  {
    id: 1,
    slug: 'lekcia-1',
    title: 'Lekcia 1: Rodina',
    description: 'Témy: rodina, osobné údaje, povolania. Gramatika: sloveso byť, mať.',
    activities: activitiesTemplate.map(act => ({ ...act, href: `/lekcia/1/${act.id}`, isFeatured: ['pisanie', 'rozpravanie'].includes(act.id) })),
  },
  {
    id: 2,
    slug: 'lekcia-2',
    title: 'Lekcia 2: Voľný čas',
    description: 'Témy: voľný čas, koníčky, dni v týždni. Gramatika: prítomný čas slovies.',
    activities: activitiesTemplate.map(act => ({ ...act, href: `/lekcia/2/${act.id}`, isFeatured: ['pisanie', 'rozpravanie'].includes(act.id) })),
  },
  {
    id: 3,
    slug: 'lekcia-3',
    title: 'Lekcia 3: Rodina a Vianoce',
    description: 'Témy: oslavy, jedlo, darčeky. Gramatika: datív.',
    activities: activitiesTemplate.map(act => ({ ...act, href: `/lekcia/3/${act.id}`, isFeatured: ['pisanie', 'rozpravanie'].includes(act.id) })),
  },
  {
    id: 4,
    slug: 'lekcia-4',
    title: 'Lekcia 4: Cestovanie',
    description: 'Témy: doprava, ubytovanie, plánovanie. Gramatika: príslovky, kondicionál.',
    activities: activitiesTemplate.map(act => ({ ...act, href: `/lekcia/4/${act.id}`, isFeatured: ['pisanie', 'rozpravanie'].includes(act.id) })),
  },
  {
    id: 5,
    slug: 'lekcia-5',
    title: 'Lekcia 5: Zdravie',
    description: 'Témy: ľudské telo, u lekára, choroby. Gramatika: genitív.',
    activities: activitiesTemplate.map(act => ({ ...act, href: `/lekcia/5/${act.id}`, isFeatured: ['pisanie', 'rozpravanie'].includes(act.id) })),
  },
  {
    id: 6,
    slug: 'lekcia-6',
    title: 'Lekcia 6: Práca',
    description: 'Témy: povolania, životopis, pracovný pohovor. Gramatika: minulý čas.',
    activities: activitiesTemplate.map(act => ({ ...act, href: `/lekcia/6/${act.id}`, isFeatured: ['pisanie', 'rozpravanie'].includes(act.id) })),
  },
  {
    id: 7,
    slug: 'lekcia-7',
    title: 'Lekcia 7: Nakupovanie',
    description: 'Témy: obchody, oblečenie, potraviny. Gramatika: lokál.',
    activities: activitiesTemplate.map(act => ({ ...act, href: `/lekcia/7/${act.id}`, isFeatured: ['pisanie', 'rozpravanie'].includes(act.id) })),
  },
  {
    id: 8,
    slug: 'lekcia-8',
    title: 'Lekcia 8: Jedlo',
    description: 'Témy: reštaurácia, varenie, recepty. Gramatika: inštrumentál.',
    activities: activitiesTemplate.map(act => ({ ...act, href: `/lekcia/8/${act.id}`, isFeatured: ['pisanie', 'rozpravanie'].includes(act.id) })),
  },
  {
    id: 9,
    slug: 'lekcia-9',
    title: 'Lekcia 9: Romantická večera',
    description: 'Témy: vzťahy, pozvanie, komplimenty. Gramatika: príčastia.',
    activities: activitiesTemplate.map(act => ({ ...act, href: `/lekcia/9/${act.id}`, isFeatured: ['pisanie', 'rozpravanie'].includes(act.id) })),
  },
  {
    id: 10,
    slug: 'lekcia-10',
    title: 'Lekcia 10: Denný režim',
    description: 'Témy: bežný deň, čas, opakovanie. Gramatika: súhrnné opakovanie.',
    activities: activitiesTemplate.map(act => ({ ...act, href: `/lekcia/10/${act.id}`, isFeatured: ['pisanie', 'rozpravanie'].includes(act.id) })),
  },
];

export const getLessonById = (id: number): Lesson | undefined => lessons.find(lesson => lesson.id === id);

export const getActivity = (lessonId: number, activityId: string): Activity | undefined => {
    const lesson = getLessonById(lessonId);
    return lesson?.activities.find(activity => activity.id === activityId);
};