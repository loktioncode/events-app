import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { bookmarkEvent, isBookmarked } from '@/lib/utils'
import { HeartIcon } from 'lucide-react'
import { Button } from './ui/button'
import { useRouter } from "next/navigation";


export default function EventCard({ event, selectedEvent }: { event: any, selectedEvent: (event: any) => void }) {
    const router = useRouter();
    return (
        <Card className="hover:shadow-2xl mt-4" >
            <CardHeader className="bg-blue-600 text-white mb-4 filter-grayscale" style={{ backgroundImage: `url(${event?.artist?.image_url})` }}>
                <div className="flex flex-row justify-between">
                    <CardTitle className="text-2xl">{event?.title || 'Event Title'}</CardTitle>
                    <Button onClick={() => { bookmarkEvent(event); router.refresh() }} size={"icon"} variant={"ghost"} >
                        <HeartIcon fill={isBookmarked(event) ? "red" : "transparent"}></HeartIcon>
                    </Button>

                </div>
                <CardDescription className="text-lg text-white">{new Date(event?.datetime).toLocaleString() || 'Event Date'}</CardDescription>
            </CardHeader>
            <CardContent >
                <p className="text-xl font-normal"> <span className="font-bold">Venue: </span>{event?.venue.name}</p>
                <p className="text-lg font-normal"><span className="font-bold">Location: </span>{event.venue.location}</p>
                <p className="text-lg font-thin">{event.venue.region}</p>
                <p className="text-lg font-thin">{event.venue.postal_code}</p>
                <div className="pt-2">

                </div>


            </CardContent>
            <CardFooter className="flex justify-between w-full">
                <Button className="w-full" onClick={() => selectedEvent(event)}>View Event Details</Button>
            </CardFooter>
        </Card>
    )
}
