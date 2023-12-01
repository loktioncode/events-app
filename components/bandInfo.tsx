'use client';

import { useEffect } from "react";
import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import Loader from "./ui/loader";

export default function BandInfo(props: any) {
    const { all_events } = props;


    if (all_events.length === 0) {
        return <div className="flex justify-center items-center p-8 flex-col" >
            <Loader />
            <p className="pt-4 text-lg">Please select an artist</p>
        </div>
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
                <h2 className="text-2xl font-semibold  text-b pt-2">{all_events[0]?.artist?.name}</h2>

                <div className="flex flex-wrap">
                    {
                        all_events[0]?.artist?.links.map((link: any) => (
                            <a key={link.url} className=" py-2 " href={link.url} target="_blank"><Badge variant="outline" className="text-lg font-normal mx-1 text-blue-700 border-2 border-blue-700" >{link.type}</Badge></a>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}