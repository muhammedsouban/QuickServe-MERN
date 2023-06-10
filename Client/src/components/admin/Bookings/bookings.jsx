import React, { useEffect, useState } from 'react';
import moment from 'moment'
import { getBookings } from '../../../Api/AdminAPI';
function Bookings() {
  const [booking, setBooking] = useState([]);
  const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };

  useEffect(() => {
    getBookings(headers)
      .then((res) => {
        setBooking(res.data);
      });
  }, []);
  console.log(booking);
  return (
    <>
      <div className='flex justify-center'>
        <div>
          <div className="lg:w-[900px] md:w-[500px] sm:w-[100px] mt-20 mb-5">
            <div className="bg-white py-1 px-5">
              <h2 className="text-2xl font-bold mb-2 text-gray-800">Bookings</h2>
            </div>
          </div>
          {booking.map((bookingItem) => (
            <div
              key={bookingItem.bookingId}
              className="py-1 px-6 bg-white flex justify-between items-center rounded-lg shadow-lg mt-4">
              <div>
                {bookingItem.serviceData.map((service) => (

                  <div key={service._id}>
                    <h2 className="text-xl font-bold mb-2 text-gray-800">{service.servicename} <span className='text-sm font-normal'>({service.category})</span></h2>
                  </div>
                ))}
                <p>{bookingItem.startTime}</p>
                <p>{moment(bookingItem.date).format('MMMM Do, YYYY')}</p>

                {bookingItem.userData.map((user) => (<div>
                  <span>Client: {user.username}</span>
                </div>))}
              </div>

              <div>
                {/* <button onClick={() => handleAccept(bookingItem.services, bookingItem.bookingId)} className='bg-green-600 text-white py-1 px-3 rounded-md '>Accept</button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Bookings;
