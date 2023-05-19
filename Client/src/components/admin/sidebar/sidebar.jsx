import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { MdPerson, MdCategory, MdMiscellaneousServices, MdOutlineLogout } from 'react-icons/md';
import { BsPersonGear } from 'react-icons/bs';
import { RiDashboardFill } from 'react-icons/ri';
import { GoFileMedia } from 'react-icons/go';
import { AiOutlineCalendar } from 'react-icons/ai';

function Sidebar() {
  const navigate = useNavigate()
  const Logout = (() => {
    localStorage.clear();
  })
  const handleNavLinkFocus = (event) => {
    event.target.style.color = 'yellow';
  };

  const handleNavLinkBlur = (event) => {
    event.target.style.color = 'inherit';
  };

  return (
    <div className={'sidebar fixed top-13 left-0 w-[300px] h-screen text-white bg-blue-900 duration-300'}>
      <nav>
        <ul className='flex flex-col  text-white'>
          <NavLink to={'/admin/dashboard'} onFocus={handleNavLinkFocus} onBlur={handleNavLinkBlur}>
            <li className='text-xl py-4 flex'>
              <RiDashboardFill size={25} className='mr-4 ml-4' />
              Dashboard
            </li>
          </NavLink>
          <NavLink to={'/admin/provider'} onFocus={handleNavLinkFocus} onBlur={handleNavLinkBlur}>
            <li className='text-xl py-4 flex'>
              <BsPersonGear size={25} className='mr-4 ml-4' />
              Providers
            </li>
          </NavLink>
          <NavLink to={'/admin/users'} onFocus={handleNavLinkFocus} onBlur={handleNavLinkBlur}>
            <li className='text-xl py-4 flex'>
              <MdPerson size={25} className='mr-4 ml-4' />
              Users
            </li>
          </NavLink>
          <NavLink to={'/admin/category'} onFocus={handleNavLinkFocus} onBlur={handleNavLinkBlur}>
            <li className='text-xl py-4 flex'>
              <MdCategory size={25} className='mr-4 ml-4' />
              Categories
            </li>
          </NavLink>
          <NavLink to={'/admin/service'} onFocus={handleNavLinkFocus} onBlur={handleNavLinkBlur}>
            <li className='text-xl py-4 flex'>
              <MdMiscellaneousServices size={25} className='mr-4 ml-4' />
              Services
            </li>
          </NavLink>
          <NavLink to={'/admin/media'} onFocus={handleNavLinkFocus} onBlur={handleNavLinkBlur}>
            <li className='text-xl py-4 flex'>
              <GoFileMedia size={25} className='mr-4 ml-4' />
              Media
            </li>
          </NavLink>
          <NavLink to={'/admin/bookings'} onFocus={handleNavLinkFocus} onBlur={handleNavLinkBlur}>
            <li className='text-xl py-4 flex'>
              <AiOutlineCalendar size={25} className='mr-4 ml-4' />
              Bookings
            </li>
          </NavLink>
          <NavLink to={'/admin/login'} onClick={Logout} onFocus={handleNavLinkFocus} onBlur={handleNavLinkBlur}>
            <li className='text-xl py-4 flex'>
              <MdOutlineLogout size={25} className='mr-4 ml-4' />
              Logout
            </li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
