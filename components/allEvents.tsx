'use client';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { Button } from "./ui/button";
import Link from "next/link";

export default function AllEvents(props: any) {
    console.log(">all events>", props.all_events)

    return (
        <div className="grid grid-cols-3 gap-4 w-full  pt-8">
            {
                props?.all_events?.map((event: any) => (
                    <Link href={event?.url} key={event?.id} target="_blank" className="hover:shadow-2xl">
                        <Card >
                            <CardHeader className="bg-blue-600 text-white mb-4" style={{ backgroundImage: `url(${event?.artist?.image_url})` }}>
                                <CardTitle className="text-2xl">{event?.title || 'Event Title'}</CardTitle>
                                <CardDescription className="text-lg text-white">{new Date(event?.datetime).toLocaleString()}</CardDescription>
                            </CardHeader>
                            <CardContent >
                                <p className="text-xl font-normal"> <span className="font-bold">Venue: </span>{event.venue.name}</p>
                                {/* <p className="text-lg font-normal"><span className="font-bold">Location: </span>{event.venue.location}</p> */}
                                <p className="text-lg font-thin pt-2"><span className="font-bold">Street Address: </span>{event.venue.street_address}</p>
                                <p className="text-lg font-thin">{event.venue.region}</p>
                                <p className="text-lg font-thin">{event.venue.postal_code}</p>
                                <div className="pt-2">
                                    {/* <p className="text-md font-normal"><span className="font-bold">LAT: </span> {event.venue.latitude}</p>
                            <p className="text-md font-normal"><span className="font-bold">LONG: </span> {event.venue.longitude}</p> */}
                                </div>




                            </CardContent>
                            <CardFooter className="flex justify-between w-full">
                                <Button asChild className="w-full">
                                    More Details
                                </Button>
                            </CardFooter>
                        </Card>
                    </Link>
                ))
            }
        </div>

    );
}