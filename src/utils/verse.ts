import { Verse } from "@/constants/verses";

function dayOfYear(date: Date) {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  return Math.floor(diff / 86400000);
}

export function getVerseOfTheDay(verses: Verse[], date: Date = new Date()): Verse {
  const index = dayOfYear(date) % verses.length;
  return verses[index];
}
