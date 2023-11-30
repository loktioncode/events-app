'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Events() {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();


    function handleSearch(term: string) {
        console.log(term);
        const params = new URLSearchParams(searchParams);
        if (term) {
            params.set('query', term);
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }


    return (
        <div className="">
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
                <TabsContent value="account">Make changes to your account here.</TabsContent>
                <TabsContent value="password">Change your password here.</TabsContent>
            </Tabs>

        </div>
    );
}