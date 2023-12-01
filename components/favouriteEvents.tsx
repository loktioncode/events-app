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
import Loader from "./loader";


export default function FavoriteEvents(props: any) {

    const bookmarkedEvents = JSON.parse(localStorage.getItem('bookmarkedEvents') || '[]');
    
    if (bookmarkedEvents.length === 0) {
        return (
            <Loader />
        )
    }

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full relative" style={{ overflowY: 'auto', maxHeight: '100vh' }}>
            {
                bookmarkedEvents.map((event: any) => (
                    <EventCard key={event?.id} event={event} selectedEvent={props?.selectedEvent} />
                ))
            }
        </div>

    );
}