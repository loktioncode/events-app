'use client';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import EventCard from "./eventCard";


export default function FavoriteEvents(props: any) {

    const bookmarkedEvents = JSON.parse(localStorage.getItem('bookmarkedEvents') || '[]');

    return (
        <div className="grid grid-cols-3 gap-4">
            {
                bookmarkedEvents.map((event: any) => (
                    <EventCard key={event?.id} event={event} selectedEvent={props?.selectedEvent} />
                ))
            }
        </div>

    );
}