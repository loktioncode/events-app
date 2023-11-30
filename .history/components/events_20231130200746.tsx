'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Events() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();




    return (
        <Tabs defaultValue="account" className="mx-6">
            <TabsList className='w-full'>
                <TabsTrigger value="account" className='w-full'>Upcoming Events</TabsTrigger>
                <TabsTrigger value="password" className='w-full'>Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">Make changes to your account here.</TabsContent>
            <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>

    );
}