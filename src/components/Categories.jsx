import React from "react";
import { categories } from "./data";
const Categories = () => {
    
    return(
        <div className='max-w-[1640px] px-4 py-12 m-auto'>
            <h1 className='text-yellow-400 font-bold text-4xl text-center'>Food Categories</h1>
            {/* Categories */}
            <div className='grid grid-cols-2 md: grid-cols-4 gap-6 py-6'>
                {categories.map((item, index)=>(
                    <div key={index} className='bg-gray-100 rounded-lg p-4 flex justify-between items-center'>
                    <h2 className='font-bold sm:text-xl'>{item.name}</h2>
                    <img src={item.image} alt={item.name}
                    className='w-10'
                    />
                    </div>
                )
                )}
            </div>
        </div>
    )
}
export default Categories;