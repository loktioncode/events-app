'use client';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams } from 'next/navigation';

export default function Search({ placeholder, handleSearch }: { placeholder: string, handleSearch: (term: string) => void }) {
    const searchParams = useSearchParams();


return (
    <div className="relative flex flex-1 flex-shrink-0">
        <label htmlFor="search" className="sr-only">
            Search Artist
        </label>
        <input
            className="peer block w-full rounded-md border border-gray-500 py-[9px] pl-10 text-sm outline-2 placeholder:text-black text-black"
            placeholder={placeholder}
            onChange={(e) => {
                handleSearch(e.target.value);
            }}
            defaultValue={searchParams.get('query')?.toString() || ''}
        />
        <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    </div>
);
}