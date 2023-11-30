'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FavoriteEvents from './favouriteEvents';
import AllEvents from './allEvents';

export default function Events() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();




    return (
        <Tabs defaultValue="all" className="m-8 w-full">
            <TabsList className='w-full'>
                <TabsTrigger value="all" className='w-full'>Upcoming Events</TabsTrigger>
                <TabsTrigger value="favorites" className='w-full'>Favorite Events</TabsTrigger>
            </TabsList>
            <TabsContent value="all"><AllEvents/></TabsContent>
            <TabsContent value="favorites"><FavoriteEvents/> </TabsContent>
        </Tabs>

    );
}