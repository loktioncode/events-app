'use client'
import { useEffect } from 'react';
import Image from 'next/image'
import Search from '../components/searchInput';
import Events from '../components/events';
import BandInfo from '../components/bandInfo';
import { useAppSelector, useAppDispatch } from '@/hooks'



export default function Home() {

    const { all_events } = useAppSelector((state) => state.events)

    return (
        <>
            <div className="flex flex-col w-4/12 overflow-auto sticky  mt-[1%] ">
                <Search placeholder="Enter Artist Name" />
                <BandInfo all_events={all_events} />
            </div >
            <div className="w-full" >
                <Events />

            </div>
        </>
    )
}