import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const isBookmarked = (event: { id: any; }) => {
  let bookmarkedEvents = JSON.parse(localStorage.getItem('bookmarkedEvents') || '[]');
  return bookmarkedEvents.some((e: { id: any; }) => e.id === event.id);
};

export const bookmarkEvent = (event: any) => {
  let bookmarkedEvents = JSON.parse(localStorage.getItem('bookmarkedEvents') || '[]');
  const eventIndex = bookmarkedEvents.findIndex((e: { id: any; }) => e.id === event.id);

  if (eventIndex === -1) {
    bookmarkedEvents.push(event);
  console.log(event)

  } else {
    bookmarkedEvents.splice(eventIndex, 1);
  }

  localStorage.setItem('bookmarkedEvents', JSON.stringify(bookmarkedEvents));

};