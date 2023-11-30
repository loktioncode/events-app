'use client'
import { useEffect } from 'react';
import Image from 'next/image'
import Search from '../components/searchInput';
import Events from '../components/events';
import BandInfo from '../components/bandInfo';
import { useAppSelector, useAppDispatch } from '@/hooks'



export default function Home() {

    const { all_events, loading, error } = useAppSelector((state) => state.events)

    // if (loading !== "done") {
    //     return <div>{error}</div>
    // }

    return (
        <>
            <div className="flex flex-col w-4/12">
                <Search placeholder="Search events..." />
                <BandInfo  all_events={all_events}/>
            </div >
            <div className="w-full" >
                <Events />

            </div>
        </>
    )
}