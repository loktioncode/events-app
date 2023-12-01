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
import Loader from "./ui/loader";
import { ArrowLeftIcon, HeartIcon } from "lucide-react";


export default function AllEvents(props: any) {

    if (!props.all_events.length) {
        return (
            <div className="grid grid-cols-3 gap-4 w-full pt-8 ">

                {[...Array(9)].map((_, i) => 4 + i * 2).map((item: any) => (

                    <div key={item} className="flex justify-center items-center pt-8" >
                        <div className="flex flex-col rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
                            <div className="h-48 rounded-t bg-gray-400"></div>
                            <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-300">
                                <div className="w-full h-6 rounded bg-gray-300"></div>
                                <div className="w-full h-6 rounded bg-gray-200"></div>
                                <div className="w-3/4 h-6 rounded bg-gray-200"></div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        )
    }


    const bookmarkEvent = (event: any) => {

    }

    return (
        <div className="grid grid-cols-3 gap-4 w-full pt-8 ">
            {
                props?.all_events?.map((event: any) => (

                    <Card key={event?.id} className="hover:shadow-2xl" >
                        <CardHeader className="bg-blue-600 text-white mb-4 filter-grayscale" style={{ backgroundImage: `url(${event?.artist?.image_url})` }}>
                            <div className="flex flex-row justify-between">
                                <CardTitle className="text-2xl">{event?.title || 'Event Title'}</CardTitle>
                                <Button onClick={() => bookmarkEvent(event)} size={"icon"} variant={"ghost"} >
                                    <HeartIcon fill="red"></HeartIcon>
                                </Button>

                            </div>
                            <CardDescription className="text-lg text-white">{new Date(event?.datetime).toLocaleString() || 'Event Date'}</CardDescription>
                        </CardHeader>
                        <CardContent >
                            <p className="text-xl font-normal"> <span className="font-bold">Venue: </span>{event?.venue.name}</p>
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
                            <Button className="w-full" onClick={() => props?.selectedEvent(event)}>View Event Details</Button>

                        </CardFooter>
                    </Card>

                ))
            }
        </div>

    );
}