import React, {useState} from 'react';

import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai'
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs'
import { FaUserFriends, FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp } from 'react-icons/md'
import { TbTruckDelivery } from 'react-icons/tb'

const Navbar = () => {
    const [nav, setNav] = useState(false)
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
      {/* Left Section */}
      <div className='flex items-center'>
        <div onClick={()=> setNav(!nav)}
        className='cursor-pointer'>
          <AiOutlineMenu size={30}/>
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          Order <span className='font-bold'>Eats</span>
        </h1>
      </div>

      {/* Right Section */}
      <div className='flex items-center gap-4'>
        {/* Delivery/Pickup Options */}
        <div className='hidden lg:flex bg-gray-200 rounded-full items-center p-1 text-[14px]'>
          <p className='bg-black text-white rounded-full p-2'>Delivery</p>
          <p className='p-2'>Pickup</p>
        </div>

        {/* Search Bar */}
        <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
          <AiOutlineSearch size={25} className='ml-2 text-gray-600' />
          <input 
            type='text' 
            placeholder='Search Restaurants'
            className='bg-transparent p-2 w-full focus:outline-none'
          />
        </div>
        {/*Cart*/}
        <button className='bg-black text-white hidden md:flex border border-black items-center px-4 pr-2 py-2 rounded-full'>
            <BsFillCartFill size={20} className='mr-2'/>
        </button>
        

      </div>
      {/* Mobile Screen */}
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'>
        </div>: ''}


      {/* Side Drawer Menu*/}
      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
        <AiOutlineClose
        onClick={()=> setNav(!nav)} 
        size={30} className='absolute right-4 top-4 cursor-pointer'/>
        <h2 className='text-2xl p-4'>Best <span className='font-bold'>Eats</span>
        </h2>
        <nav>
            <ul className='flex flex-col p-4 text-gray-800'>
                <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4'/> Deliveries</li>
                <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4'/> Favourites</li>
                <li className='text-xl py-4 flex'><FaWallet size={25} className='mr-4'/> Wallet</li>
                <li className='text-xl py-4 flex'><AiFillTag size={25} className='mr-4'/> Promotions</li>
                <li className='text-xl py-4 flex'><BsFillSaveFill size={25} className='mr-4'/> Invoices</li>
                <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4'/> Invite Friends</li>
                <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4'/> Help</li>
            </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar;