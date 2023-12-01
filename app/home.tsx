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
         <div className="flex flex-col md:flex-row items-center justify-between p-8">
            <div className="flex flex-col w-full md:w-4/12 sticky top-0">
                <Search placeholder="Enter Artist Name" />
                <BandInfo all_events={all_events}  />
            </div>
            <div className="w-full mt-4 md:mt-0">
                <Events />
            </div>
        </div>
    )
}