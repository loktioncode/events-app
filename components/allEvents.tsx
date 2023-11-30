'use client';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export default function AllEvents(props: any) {
    console.log(">all events>",props.all_events)

    return (
        <div className="grid grid-cols-3 gap-4 w-full  pt-8">
             {
                props?.all_events?.map((event: any) => (
                    <Card key={event?.id}>
                        <CardHeader>
                            <CardTitle>Card Title</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p> Event {event?.name}</p>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>

                ))
            } 
        </div>

    );
}