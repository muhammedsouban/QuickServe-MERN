import React, { useEffect, useState } from 'react'
import { BsChevronCompactRight } from 'react-icons/bs'
import { getBookings } from '../../../Api/userAPI'
import moment from 'moment'
function Bookings() {
    const [bookings, setbookings] = useState([])
    const headers = { Authorization: `Bearer ${localStorage.getItem('userToken')}` };

    useEffect(() => {
        getBookings(headers).then((res) => {
            setbookings(res.data)
        })
    }, [])
    console.log(bookings);
    return (
        <div className='flex justify-center'>
            <div>
                <div className="lg:w-[900px] md:w-[500px] sm:w-[100px] mt-20 mb-5">
                    <div className="bg-white py-1 px-5">
                        <h2 className="text-2xl font-bold mb-2 text-gray-800">Bookings</h2>
                    </div>
                </div>

                {bookings.map((item) => (<>
                    {/* <h2 className='px-2 mb-2 text-lg font-semibold'>Category</h2> */}
                    <div className=" py-1 px-6 bg-white flex justify-between items-center rounded-lg shadow-lg mb-4">
                        <div>
                            <p className='mt-2'>Booking Status</p>
                            {item.serviceData.map((service) => (<h2 className="text-2xl font-bold mb-2 text-blue-900">{service.servicename}</h2>))}
                            <div className='flex'>
                                <p>{item.startTime}</p>
                                <p className='ms-2'>{moment(item.date).format('MMMM Do, YYYY')}</p>
                            </div>
                        </div>
                        <div>
                            <BsChevronCompactRight size={50} color='green' />
                        </div>
                    </div></>))}
            </div>
        </div>
    )
}

export default Bookings