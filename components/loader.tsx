import React from 'react'

export default function Loader() {
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 md:gap-4 gap-1 w-full pt-8 ">

            {[...Array(9)].map((_, i) => 4 + i * 2).map((item: any) => (

                <div key={item} className="flex justify-center items-center " >
                    <div className="flex flex-col rounded shadow-md w-60 sm:w-80 animate-pulse h-65">
                        <div className="h-48 rounded-t bg-blue-100"></div>
                        <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 bg-gray-50">
                            <div className="w-full h-6 rounded bg-gray-100"></div>
                            <div className="w-full h-6 rounded bg-gray-100"></div>
                            <div className="w-3/4 h-6 rounded bg-gray-100"></div>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    )
}
