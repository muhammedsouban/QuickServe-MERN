import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { MdPerson, MdCategory, MdPendingActions, MdOutlineDoneAll, MdOutlineLogout, MdNotificationsActive } from 'react-icons/md';
import { BsPatchQuestionFill } from 'react-icons/bs';
import { RiDashboardFill } from 'react-icons/ri';

const ProviderNavbar = () => {
  const [nav, setNav] = useState(false);
  const Navigate = useNavigate();

  const closeSidebar = () => {
    setNav(false);
  };

  const Logout = () => {
    localStorage.removeItem('ProviderToken');
    Navigate('/provider/login');
  };

  return (
    <div className='fixed top-0 navbar flex justify-between items-center p-4 text-white z-10'>
      <div className='flex items-center'>
        <div className='block lg:hidden' onClick={() => setNav(!nav)}>
          <AiOutlineMenu size={30} />
        </div>
        <div className='block'>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
            Quick <span className='font-bold'>Serve</span>
          </h1>
        </div>
      </div>

      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
      <h2 className='text-lg md:text-2xl lg:text-4xl px-2'>
        Provider <span className='font-bold'>Panel</span>
      </h2>

      <div className={nav ? 'sidebar fixed top-0 left-0 w-[300px] h-screen text-white bg-blue-900 z-10 duration-300' : 'hidden lg:block sidebar fixed top-[70px] left-0 w-[300px] h-screen text-white bg-blue-900 z-10 duration-300'}>
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className='block absolute left-4 top-4 lg:hidden cursor-pointer'
        />
        <h2 className='block lg:hidden ml-16 text-2xl p-4'>
          Quick <span className='font-bold'>Serve</span>
        </h2>

        <nav>
          <ul className='flex flex-col text-white mt-5'>
            <NavLink
              to={'/provider/'}
              onClick={closeSidebar}
              className='text-xl py-4 flex'
              activeClassName='text-yellow-500'
            >
              <RiDashboardFill size={25} className='mr-4 ml-4' />
              Dashboard
            </NavLink>
            <NavLink
              to={'/provider/profile'}
              onClick={closeSidebar}
              className='text-xl py-4 flex'
              activeClassName='text-yellow-500'
            >
              <MdPerson size={25} className='mr-4 ml-4' />
              Profile
            </NavLink>
            <NavLink
              to={'/provider/requests'}
              onClick={closeSidebar}
              className='text-xl py-4 flex'
              activeClassName='text-yellow-500'
            >
              <BsPatchQuestionFill size={25} className='mr-4 ml-4' />
              Requests
            </NavLink>
            <NavLink
              to={'/provider/upcoming'}
              onClick={closeSidebar}
              className='text-xl py-4 flex'
              activeClassName='text-yellow-500'
            >
              <MdPendingActions size={25} className='mr-4 ml-4' />
              Upcoming
            </NavLink>
            <NavLink
              to={'/provider/completed'}
              onClick={closeSidebar}
              className='text-xl py-4 flex'
              activeClassName='text-yellow-500'
            >
              <MdOutlineDoneAll size={25} className='mr-4 ml-4' />
              Completed
            </NavLink>
            <li onClick={Logout} className='text-xl py-4 flex'>
              <MdOutlineLogout size={25} className='mr-4 ml-4' />
              Logout
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ProviderNavbar;
