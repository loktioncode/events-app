'use client';

import { useEffect } from "react";
import Image from 'next/image'
export default function BandInfo(props: any) {
    const { all_events } = props;

    useEffect(() => {
        console.log(">artist>", all_events[0]?.artist)
    }, [all_events]);

    if (all_events.length === 0) {
        return <div>loading</div>
    }

    return (


        <div className="flex flex-col max-w-md p-6 dark:bg-gray-900 dark:text-gray-100">

            <Image
                src={all_events[0]?.artist?.image_url}
                width={500}
                height={300}
                alt="Picture of the artist"
                className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square"
            />
            <div>
                <h2 className="text-2xl font-semibold py-2">{all_events[0]?.artist?.name}</h2>
                
                <div className="flex flex-col">
                   {
                    all_events[0]?.artist?.links.map((link: any) => (
                        <a key={link.url} className="text-lg font-normal py-1 text-blue-600" href={link.url}>{link.type}</a>
                    ))
                   }
                </div>
            </div>
        </div>
    );
}