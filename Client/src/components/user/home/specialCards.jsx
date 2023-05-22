import React, { useEffect, useState } from 'react';
import { StarIcon, HeartIcon } from '@heroicons/react/solid';
import { getServices } from '../../../Api/AdminAPI';
const MyCard = () => {
    const [service, setService] = useState([])
    useEffect(() => {
        getServices().then((data) => {
            setService(data)
        })
    }, [])

    return (
        <>
            <div className='flex space-x-10 mt-6 justify-center'>
                <h1>hehehhh</h1>
            </div>
            <div className="flex space-x-10 mt-6 justify-center">

                <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-5 sm:grid-cols-1'>
                    {(service.map((service) => (
                        <div className="w-72 bg-white shadow-lg rounded-lg overflow-hidden" key={service._id}>
                            <img
                                src={`http://localhost:8080/public/images/${service.image}`}
                                alt="Service Image"
                                className="w-full h-40 object-cover"
                            />
                        </div>
                    )))}
                </div>
            </div>

        </>
    );
};

export default MyCard;
