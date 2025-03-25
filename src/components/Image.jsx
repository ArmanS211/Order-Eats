import React from "react";

const Image = () => {
    
    return(
        <div className='max-w-[1640px] mx-auto p-4'>
            <div className='max-h-[500px] relative'>
                <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Delicious <span className='text-yellow-400'>Foods</span></h1>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-400'>Wherever <span className='text-gray-200'>You Are</span></h1>
                </div>
                <img className='w-full max-h-[500px] object-cover' src="https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
            </div>
        </div>
    )
}
export default Image;