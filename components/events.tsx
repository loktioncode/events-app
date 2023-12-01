'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FavoriteEvents from './favouriteEvents';
import AllEvents from './allEvents';
import { useAppSelector } from '@/hooks';
import React, { useState } from 'react';
import Loader from './ui/loader';
import ViewEvent from './viewEvent';

export default function Events() {

    const { all_events, loading, error } = useAppSelector((state) => state.events)
    const [selectedEvent, setSelectedEvent] = useState<any>(null);

    
    const onSelectedEvent = (event: any) => {
        setSelectedEvent(event);
    }

    const back = (event: any) => {
        setSelectedEvent(null);
    }

    return (
        <Tabs defaultValue="all" className="md:m-8 md:w-8/12 w-10/12" style={{ position: 'fixed', top: 0, zIndex: 1 }}>
            <TabsList className='md:w-full w-full mt-[24%] md:mt-0' >
                <TabsTrigger value="all" className='w-full'>Upcoming Events</TabsTrigger>
                <TabsTrigger value="favorites" className='w-full'>Favorite Events</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className='' >
                {
                    (selectedEvent ? <ViewEvent eventData={selectedEvent} back={back} /> : <AllEvents all_events={all_events} selectedEvent={onSelectedEvent} />)
                }
            </TabsContent>
            <TabsContent value="favorites">
                {
                    selectedEvent ? <ViewEvent eventData={selectedEvent} back={back} /> : <FavoriteEvents selectedEvent={onSelectedEvent} />
                }

            </TabsContent>
        </Tabs>

    );
}