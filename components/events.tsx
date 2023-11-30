'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FavoriteEvents from './favouriteEvents';
import AllEvents from './allEvents';
import { useAppSelector } from '@/hooks';
import React from 'react';
import Loader from './ui/loader';

export default function Events() {

    const { all_events, loading, error } = useAppSelector((state) => state.events)

    return (
        <Tabs defaultValue="all" className="m-8 w-8/12" style={{ position: 'fixed', top: 0, zIndex: 1 }}>
            <TabsList className='w-full' >
                <TabsTrigger value="all" className='w-full'>Upcoming Events</TabsTrigger>
                <TabsTrigger value="favorites" className='w-full'>Favorite Events</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className='flex justify-center items-center' >
                {
                    (loading === "done") ? <AllEvents all_events={all_events} /> : <Loader />
                }
            </TabsContent>
            <TabsContent value="favorites">
                {
                    (loading === "done") && <FavoriteEvents />
                }

            </TabsContent>
        </Tabs>

    );
}