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
        <div className="grid grid-cols-3 gap-4 w-full pt-8 ">
            {
                props?.all_events?.map((event: any) => (
                    <EventCard key={event?.id} event={event} selectedEvent={props?.selectedEvent} />
                ))
            }
        </div>

    );
}