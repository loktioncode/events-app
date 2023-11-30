import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


export default function AllEvents() {





    return (
        <div>
            {
                [1, 2, 3, 4, 5, 6, 6, 7, 8].map((event) => (


                    <Card key={event}>
                        <CardHeader>
                            <CardTitle>Card Title</CardTitle>
                            <CardDescription>Card Description</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p> Event {event}</p>
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