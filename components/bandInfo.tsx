'use client';

import { useEffect } from "react";
import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import Loader from "./ui/loader";

export default function BandInfo(props: any) {
    const { all_events, loading } = props;


    if (all_events.length === 0) {
        return <div className="justify-center items-center p-8 flex-col hidden md:flex" >
            {loading === "loading" ? <Loader /> : null}
        </div>
    }

    return (

        <div className="hidden md:flex flex-col max-w-md lg:p-6 dark:bg-gray-900 dark:text-gray-100 mt-[2%]">

            <Image
                src={all_events[0]?.artist?.image_url}
                alt="Picture of the artist"
                width={500}
                height={100}
                priority
                className="hidden lg:flex flex-shrink-0 object-cover rounded-sm sm:h-96 dark:bg-gray-500 aspect-square"
            />
            <div>
                <h2 className="text-2xl font-semibold  text-b pt-2">{all_events[0]?.artist?.name}</h2>

                <div className="flex md:flex-wrap">
                    {
                        all_events[0]?.artist?.links.map((link: any) => (
                            <a key={link.url} className=" py-2 " href={link.url} target="_blank"><Badge variant="outline" className="text-sm lg:text-lg font-normal mx-1 text-blue-700 border-2 border-blue-700" >{link.type}</Badge></a>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}