import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { TbTruckDelivery } from 'react-icons/tb';
import { FaWallet } from 'react-icons/fa';
import { BiCurrentLocation } from 'react-icons/bi';
import { MdFavorite, MdHelp, MdLocationOn, MdPerson, MdShoppingCart, MdSearch } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { Location } from '../../../redux/Slice/locationSlice';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const location = useSelector((state) => state.location);
  const dispatch = useDispatch();
  const [locationInput, setLocationInput] = useState('');
  const [showAddress, setShowAddress] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [placeSuggestions, setPlaceSuggestions] = useState([]);

  const toggleNav = () => {
    setNav(!nav);
  };

  const handleSearch = () => {
    setShowSearch(!showSearch);
    setShowAddress(false);
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
        axios.get(url).then((res) => {
          const data = res.data.address;
          dispatch(Location({ field: 'data', value: data }));
          toast.success(`location Detected ${data.suburb}`);
        });
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  const handlePlaceSuggestion = (predictions) => {
    console.log(predictions);
    const results = predictions.map((prediction) => prediction.display_name);
    setPlaceSuggestions(results);
  };

  const handlePlaceSelection = (place) => {
    setLocationInput(place);
    setPlaceSuggestions([]);
  };
  const headers = { Authorization: `Bearer ${localStorage.getItem('userToken')}` };

  const logout = () => {
    localStorage.removeItem('userToken');
    window.location.reload();
  };

  const fetchPlaceSuggestions = (event) => {
    setLocationInput(event);
    const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${event}`;

    axios
      .get(apiUrl)
      .then((response) => {
        const predictions = response.data;
        console.log(predictions);
        handlePlaceSuggestion(predictions);
      })
      .catch((error) => {
        console.error('Error fetching place suggestions:', error);
      });
  };

  return (
    <div className="fixed top-0 navbar flex justify-between items-center p-4 text-white z-10">
      <div className="flex items-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Quick <span className="font-bold">Serve</span>
        </h1>
        <div className="hidden lg:flex items-center ms-5 p-1 text-[18px]">
          <div
            className="hidden lg:flex items-center ms-5 p-1 text-[18px] cursor-pointer"
            onClick={handleSearch}
          >
            <MdLocationOn color="red" size={25} />
            <p className="p-2">{location.data.city}</p>
          </div>

          {showAddress && (
            <div
              className="absolute bg-white p-2 rounded-md border shadow text-black"
              style={{ top: '70px', left: '300px' }}
            >
              <div className="w-4 h-4 bg-white absolute top-[2px] left-2 -rotate-45 transform origin-top-left" />
              <AiOutlineClose
                color="black"
                size={13}
                className="absolute right-0 mr-2"
                onClick={() => setShowAddress(false)}
              />
              <p className="text-[11px] mb-2">Recent Search</p>
              <p className="text-[14px]">{location.data.road}</p>
              <p className="text-[14px]">{location.data.suburb}</p>
              <p className="text-[14px]">{location.data.city_district}</p>
              <p className="text-[14px]">{location.data.county}</p>
            </div>
          )}
          {showSearch && (
            <div
              className="absolute bg-white p-2 rounded-md border shadow text-black"
              style={{ top: '70px', left: '300px' }}
            >
              <div className="w-4 h-4 bg-white absolute top-[2px] left-2 -rotate-45 transform origin-top-left" />
              <div className="flex justify-between">
                <div className="flex cursor-pointer" onClick={getCurrentLocation}>
                  <BiCurrentLocation className="z-10" color="blue" />
                  <p className="z-10 text-sm text-blue-800">Current location</p>
                </div>
                <AiOutlineClose color="black" size={13} onClick={handleSearch} />
              </div>
              <div className="width-[100px] h-[1px] bg-gray-300 mt-2" />
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-200 dark:text-black">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <MdSearch color="grey" size={20} />
                </div>
                <input
                  type="search"
                  value={locationInput}
                  onChange={((event) => fetchPlaceSuggestions(event.target.value))}
                  id="default-search"
                  className="block w-full p-2 pl-10 text-sm text-black border border-gray-300 rounded-lg focus:ring-blue-500 dark:bg-white dark:placeholder-gray-400 dark:focus:ring-blue-500"
                  placeholder="Search City/Area"
                  required
                />
                {placeSuggestions.length > 0 && (
                  <ul className="absolute bg-white w-full mt-2 rounded-md border shadow">
                    {placeSuggestions.map((place, index) => (
                      <li
                        key={index}
                        className="py-2 px-4 text-sm hover:bg-gray-100 cursor-pointer"
                        onClick={() => handlePlaceSelection(place)}
                      >
                        {place}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {nav && <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>}

      <div className="sm:flex items-center ms-5 p-1 text-[18px]">
        <NavLink to="/provider/register">
          <p className="p-2 hidden sm:flex">Register as profession</p>
        </NavLink>
        {headers && headers.Authorization !== 'Bearer null' ? (
          <NavLink onClick={logout} className="flex items-center">
            <MdPerson size={25} className="ms-5 hidden sm:flex" />
            <p className="p-2 hidden sm:flex">Logout</p>
          </NavLink>
        ) : (
          <NavLink to="/login" className="flex items-center">
            <MdPerson size={25} className="ms-5 hidden sm:flex" />
            <p className="p-2 hidden sm:flex">Login</p>
          </NavLink>
        )}
        <div onClick={toggleNav} className="cursor-pointer ms-5">
          <AiOutlineMenu size={30} />
        </div>
      </div>

      <div
        className={`sidebar fixed top-0 ${nav ? 'right-0' : 'left-[-100%]'} w-[300px] h-screen text-white bg-blue-900 z-10 duration-300`}
      >
        <AiOutlineClose onClick={toggleNav} size={30} className="absolute right-4 top-4 cursor-pointer" />
        <h2 className="text-2xl p-4">
          Quick <span className="font-bold">Serve</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-white">
            <NavLink to={'/profile'} ><li className="text-xl py-4 flex">
              <MdPerson size={25} className="mr-4" /> Profile
            </li></NavLink>
            <NavLink to={'/cart'}><li className="text-xl py-4 flex">
              <MdShoppingCart size={25} className="mr-4" /> Cart
            </li></NavLink>
            <NavLink to={'/bookings'}><li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" /> Bookings
            </li></NavLink>
            <NavLink to={'/favourites'}><li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4" /> Favorites
            </li></NavLink>
            <NavLink to={'/wallet'}><li className="text-xl py-4 flex">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li></NavLink>
            <NavLink to={'/help'}><li className="text-xl py-4 flex">
              <MdHelp size={25} className="mr-4" /> Help
            </li></NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
