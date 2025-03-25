import React, {useState} from 'react'
import { data } from './data';
const Menu = () => {
const [foodz, setFoods] = useState(data)

//Filter type
    const filterType =(category) =>{
        setFoods(
            data.filter((item) => {
                return item.category == category;
            })
        )
    }
//Filter Price
const filterPrice =(price) =>{
    setFoods(
        data.filter((item) => {
            return item.price == price;
        })
    )
}
    return (
        <div className='max-w-[1640px] m-auto px-4 py-1'>
            <h1 className='text-yellow-400 font-bold text-4xl text-center'>Highest Rated Menu Items</h1>

            {/* Row Filter */}
            <div className='flex flex-col lg:flex-row justify-between'>
            {/*Filter Type*/}
            <div>
                <p className='font-bold text-gray-600'>Filter Type</p>
                <div className='flex justify-between flex-wrap font-bold'>
                    <button onClick={()=> setFoods(data)} className='m-1 rounded-xl px-5 py-1 border-1 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white '>All</button>
                    <button onClick={()=> filterType('bbq')} className='m-1 rounded-xl px-5 py-1 border-1 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white '>BBQ</button>
                    <button onClick={()=> filterType('pizza')} className='m-1 rounded-xl px-5 py-1 border-1 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white '>Pizza</button>
                    <button onClick={()=> filterType('salad')} className='m-1 rounded-xl px-5 py-1 border-1 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white '>Salads</button>
                    <button onClick={()=> filterType('chicken')} className='m-1 rounded-xl px-5 py-1 border-1 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white '>Chicken</button>
                </div>
            </div>
            {/* Filter Price */}
            <div>
            <p className='font-bold text-gray-600'>Filter Price</p>
            <div className='flex justify-between max-w-[390px] font-bold w-full'>
            <button onClick={()=> filterPrice('$')} className='m-1 rounded-xl px-5 py-1 border-1 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white '>$</button>
            <button onClick={()=> filterPrice('$$')} className='m-1 rounded-xl px-5 py-1 border-1 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white '>$$</button>
            <button onClick={()=> filterPrice('$$$')} className='m-1 rounded-xl px-5 py-1 border-1 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white '>$$$</button>
            <button onClick={()=> filterPrice('$$$$')} className='m-1 rounded-xl px-5 py-1 border-1 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white '>$$$$</button>
            <button onClick={()=> filterPrice('$$$$$')} className='m-1 rounded-xl px-5 py-1 border-1 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-white '>$$$$$</button>
            </div>
            </div>
            </div>
            {/* Food Display */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {foodz.map((item, index)=>(
                    <div key={index} className='border shadow-lg rounded-lg border-yellow-400 hover:scale-105 duration-300'>
                        <img src={item.image} alt={item.name}
                        className='w-full h-[200px] object-cover rounded-t-lg'></img>
                        <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{item.name}</p>
                        <p>
                            <span className='bg-yellow-400 text-white p-1 rounded-full'>{item.price}</span>
                        </p>
                        </div>    
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Menu;