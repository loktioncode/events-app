import React from 'react'
import { Button } from './ui/button';
import { ArrowBigLeftDashIcon, ArrowLeftIcon, HeartIcon } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from 'next/link';
import { bookmarkEvent, isBookmarked } from '@/lib/utils';
import { useRouter } from "next/router";
export default function viewEvent(props: any) {
    const { eventData, back } = props;

    return (
        <>
            <Card className="hover:shadow-2xl" >
                <CardHeader className="bg-blue-600 text-white mb-4 " >
                    <CardTitle className="text-2xl">
                        <div className="flex justify-start pt-4">
                            <Button onClick={() => back()} size={"icon"} variant={"ghost"}><ArrowLeftIcon></ArrowLeftIcon></Button>
                            <div className='w-full text-center'>

                                <h1 className='text-3xl'>{eventData?.title || "Event Title"}</h1>
                                <CardDescription className="text-lg text-white">
                                    <h2 className='py-2'>
                                        {new Date(eventData?.datetime).toLocaleString() || 'Event Date'}
                                    </h2>
                                    <h3 className='font-thin py-2'>
                                        <span className="font-thin">On Sale Date: </span> {new Date(eventData?.on_sale_datetime).toLocaleString()}
                                    </h3>
                                    <div className='flex flex-row justify-between'>
                                        <h3>
                                            <span className="font-normal ">Start Date: </span> {new Date(eventData?.festival_start_date).toLocaleString()}
                                        </h3>
                                        <h3>
                                            <span className="font-normal">End Date: </span> {new Date(eventData?.festival_end_date).toLocaleString()}
                                        </h3>
                                    </div>
                                </CardDescription>

                            </div>
                            <Button onClick={() => {bookmarkEvent(eventData)}} size={"icon"} variant={"ghost"} >
                                <HeartIcon fill={isBookmarked(eventData) ? "red" : "transparent"} height={94} width={94}></HeartIcon>
                            </Button>
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardContent className='' >
                    <div className='flex flex-row justify-start flex-wrap'>
                        <p className="text-xl pr-8"> <span className="font-bold pr-2">Venue: </span>{eventData?.venue.name}</p>
                        <p className="text-lg pr-8"><span className="font-bold pr-2">Location: </span>{eventData.venue.location}</p>
                        <p className="text-lg pr-8"><span className="font-bold pr-2">Street Address: </span>{eventData.venue.street_address}</p>
                        <p className="text-lg pr-8"><span className="font-bold pr-2">Region: </span>{eventData.venue.region}</p>
                        <p className="text-lg pr-8 pt-3"><span className="font-bold pr-2">Postal Code: </span>{eventData.venue.postal_code}</p>
                        <p className="text-lg pr-8 pt-3"><span className="font-bold pr-2">LAT: </span> {eventData.venue.latitude}</p>
                        <p className="text-lg pr-8 pt-3"><span className="font-bold pr-2">LONG: </span> {eventData.venue.longitude}</p>

                    </div>



                </CardContent>
                <CardFooter className="flex justify-between w-full">
                    {
                        eventData?.offers.map((offer: any) => (
                            <div key={offer.url} className="flex flex-wrap">
                                <Button className="w-full pt-2 bg-blue-700 mx-2" onClick={() => window.open(offer.url, '_blank')}>TAKE {(offer.type).toUpperCase()} OFFER</Button>
                            </div>
                        ))
                    }
                </CardFooter>
            </Card>

        </>
    )
}
