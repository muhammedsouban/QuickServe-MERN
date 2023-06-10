import React, { useEffect, useState } from 'react';
import { acceptRequest, bookingRequests } from '../../../Api/providerAPI';
import { BsChevronCompactRight } from 'react-icons/bs';
import moment from 'moment'
function Requests() {
    const [booking, setBooking] = useState([]);
    const headers = { Authorization: `Bearer ${localStorage.getItem('ProviderToken')}` };

    useEffect(() => {
        bookingRequests(headers).then((res) => {
            setBooking(res.data);
        });
    }, []);
console.log(booking);
    const handleAccept = ((services, booking) => {
        
        const data = {
            services: services,
            bookingId: booking
        }
        acceptRequest(data, headers)
    })

    return (
        <>
            <div className='flex justify-center'>
                <div>
                    <div className="lg:w-[900px] md:w-[500px] sm:w-[100px] mt-20 mb-5">
                        <div className="bg-white py-1 px-5">
                            <h2 className="text-2xl font-bold mb-2 text-gray-800">Booking Requests</h2>
                        </div>
                    </div>
                    {booking.map((bookingItem) => (
                        <div
                            key={bookingItem.bookingId}
                            className="py-1 px-6 bg-white flex justify-between items-center rounded-lg shadow-lg mt-4">
                            <div>
                                {bookingItem.services.map((service) => (

                                    <div key={service._id}>
                                        <h2 className="text-xl font-bold mb-2 text-gray-800">{service.serviceData.servicename}</h2>
                                    </div>
                                ))}
                                <p>{bookingItem.startTime}</p>
                                <p>{moment(bookingItem.date).format('MMMM Do, YYYY')}</p>
                            </div>

                            <div>
                                <button onClick={() => handleAccept(bookingItem.services, bookingItem.bookingId)} className='bg-green-600 text-white py-1 px-3 rounded-md '>Accept</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Requests;
