import React, { useEffect, useState } from 'react';
import { StarIcon, HeartIcon } from '@heroicons/react/solid';
import { getServices } from '../../Api/AdminAPI';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../.././redux/Slice/cartSlice'
import { addToCart } from '../../Api/userAPI';
import toast from 'react-hot-toast';

const ServiceCard = () => {
  const dispatch = useDispatch()
  const [service, setService] = useState([])
  const headers = { Authorization: `Bearer ${localStorage.getItem('userToken')}` };

  const handleAddToCart = (serviceId, image, name, description, price) => {
    if (headers.Authorization !== 'Bearer null') {
      addToCart(serviceId, headers).then((res) => {
        if (res.data) {
          toast(res.data.message)
        }
      })
    }else{
      toast('please Login')
    }
    dispatch(addCartItem({
      _id: serviceId,
      image: image,
      servicename: name,
      description: description,
      price: price
    }));
  };
  useEffect(() => {
    getServices().then((data) => {
      setService(data)
    })
  }, [])



  return (
    <>
      <div className="flex space-x-10 mt-6 justify-center">
      <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5 sm:grid-cols-1'>
        {(service.map((service) => (
          <div className="w-72 bg-white shadow-lg rounded-lg overflow-hidden" key={service._id}>
            <div className="relative">
              <div className="absolute top-0 right-0 px-1 bg-white rounded flex mt-2 me-2 items-center">
                <StarIcon className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-600 ml-1">4</span>  {/* Service ratings added here */}
              </div>
              <img
                src={`http://localhost:8080/public/images/${service.image}`}
                alt="Service "
                className="w-full h-40 object-cover"
              />
            </div>

            <div className="px-4 py-2">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-800">{service.servicename}</h3>
                <HeartIcon className="w-6 h-6 text-red-500" />
              </div>

              <p className="text-gray-600 h-10 mt-2">{service.description}</p>
              <div className="flex items-center mt-4">
                <span className="text-xl font-medium text-gray-800">₹{service.price}</span>
                {/* <span className="text-gray-600 ml-2">/hour</span> */}
              </div>
              <p className="text-gray-500 text-xs mt-1 mb-2">
                *Extra Charges Applicable for Spare Parts
              </p>
              <div className="w-full h-[1px] bg-gray-300"></div>
              <div className="flex items-center justify-between mt-2 mb-1">
                <button className="px-4 py-2 text-blue/900 border-2 rounded-lg border-blue-900 ">
                  BOOK NOW
                </button>
                <button onClick={() => handleAddToCart(service._id, service.image, service.servicename, service.description, service.price)} className="px-4 py-2 dark:text-white rounded-lg bg-gradient-to-r from-blue-900 to-blue-500">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        )))}
      </div>
      </div>
    </>
  );
};

export default ServiceCard;
