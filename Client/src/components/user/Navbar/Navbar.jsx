import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { TbTruckDelivery } from 'react-icons/tb'
import { FaWallet } from 'react-icons/fa'
import { MdFavorite, MdHelp, MdLocationOn, MdPerson, MdShoppingCart, MdBusiness } from 'react-icons/md'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  return (
    <div className='sticky navbar flex justify-between items-center p-4 text-white'>
      <div className='flex  items-center'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          Quick <span className='font-bold'>Serve</span>
        </h1>
        <div className='hidden lg:flex items-center  ms-5 p-1 text-[18px]'>
          <MdLocationOn color='red' size={25} /> <p className='p-2 '>Select your location</p>
        </div>
      </div>

      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
      <div className=' sm:flex items-center  ms-5 p-1 text-[18px]'>
        <MdBusiness color='red' size={25} className='hidden sm:flex'/> <p className='p-2 hidden sm:flex'>Register as profession</p>
        <MdPerson size={25} className='ms-5 hidden sm:flex' /><p className='p-2 hidden sm:flex'>Login</p>
        <div onClick={() => setNav(!nav)} className='cursor-pointer ms-5 '>
          <AiOutlineMenu size={30} />
        </div>
      </div>

      <div className={nav ? 'sidebar fixed top-0 right-0 w-[300px] h-screen text-white bg-blue-900 z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-blue z-10 duration-300'}>
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer'
        />
        <h2 className='text-2xl p-4'>
          Quick <span className='font-bold'>Serve</span>
        </h2>
        <nav>
          <ul className='flex flex-col p-4 text-white'>
            <li className='text-xl py-4 flex'><MdPerson size={25} className='mr-4' /> Profile</li>
            <li className='text-xl py-4 flex'><MdShoppingCart size={25} className='mr-4' /> Cart</li>
            <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4' /> Bookings</li>
            <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4' /> Favorites</li>
            <li className='text-xl py-4 flex'><FaWallet size={25} className='mr-4' /> Wallet</li>
            <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4' /> Help</li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;