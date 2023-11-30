'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Events() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();




    return (
        <Tabs defaultValue="account" className="text-center lg:max-w-5xl lg:w-9/12 lg:mb-0 lg:grid-cols-4 lg:text-left">
            <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">Make changes to your account here.</TabsContent>
            <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>

    );
}