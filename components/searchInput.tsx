'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useAppDispatch, } from '@/hooks';
import { fetchArtistsEvents } from '@/redux-config/eventsThunk';
import { useEffect, useState } from 'react';

export default function Search({ placeholder }: { placeholder: string }) {

    const dispatch = useAppDispatch();
    const [search, setSearch] = useState('');
   

    useEffect(() => {
        dispatch(fetchArtistsEvents(search));
    }, [dispatch, search]);


    return (
        <div className="relative lg:mt-[2px]">
            <label htmlFor="search" className="sr-only text-black">
                Search Artist
            </label>
            <input
                className="peer block w-full rounded-md border border-gray-500 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-800 text-black"
                placeholder={placeholder}
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                type='text'
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
        </div>
    );
}