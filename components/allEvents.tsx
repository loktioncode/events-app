'use client';
import { useRouter } from "next/navigation";
import EventCard from "./eventCard";
import Loader from "./loader";


export default function AllEvents(props: any) {

    if (!props.all_events.length) {
        return (
            <Loader />
        )
    }


    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 w-full relative" style={{ overflowY: 'auto', maxHeight: '100vh' }}>
            {
                props?.all_events?.map((event: any) => (
                    <EventCard key={event?.id} event={event} selectedEvent={props?.selectedEvent} />
                ))
            }
        </div>
    );
}