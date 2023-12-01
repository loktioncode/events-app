import React from 'react'

export default function Loader() {
    return (
        <div className="grid grid-cols-3 gap-4 w-full pt-8 ">

            {[...Array(9)].map((_, i) => 4 + i * 2).map((item: any) => (

                <div key={item} className="flex justify-center items-center pt-8" >
                    <div className="flex flex-col rounded shadow-md w-60 sm:w-80 animate-pulse h-96">
                        <div className="h-48 rounded-t bg-gray-400"></div>
                        <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-300">
                            <div className="w-full h-6 rounded bg-gray-300"></div>
                            <div className="w-full h-6 rounded bg-gray-200"></div>
                            <div className="w-3/4 h-6 rounded bg-gray-200"></div>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}
