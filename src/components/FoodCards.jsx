import React from "react";

const FoodCards = () => {
    return(
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            {/* Card */}
            <div className='rounded-xl relative'>
                {/* Content */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>Discounts at Paul's Pizzeria</p>
                    <p className='px-2'>All Pizzas $5 Till 4/07</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl px-5 py-1'>Order Today!</button>
                </div>
            <img
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src='https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='pizza'/>
            </div>
                {/* Card */}
                <div className='rounded-xl relative'>
                {/* Content */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>Free Delivery at Brando's BBQ</p>
                    <p className='px-2'>Coupon Valid Until 4/11</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl px-5 py-1'>Apply Coupon!</button>
                </div>
            <img
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src='https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=2538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='bbq'/>
            </div>
                {/* Card */}
                <div className='rounded-xl relative'>
                {/* Content */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>$10 Off Sal's Salads</p>
                    <p className='px-2'>Available Until 4/05</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl px-5 py-1'>Apply Offer!</button>
                </div>
            <img
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
            src='https://images.unsplash.com/photo-1600335895229-6e75511892c8?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='salads'/>
            </div>
        </div>
    )
}
export default FoodCards;