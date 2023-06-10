import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { IoSendSharp } from 'react-icons/io5';

function BookingDetail() {
  return (
    <>
    <div className='flex justify-center items-center'>

      <div className="  bg-[#E8F5FF] max-w-[400px] sm:w-1/2 z-50 rounded-lg shadow-lg">
        <div className="flex justify-between rounded-t-lg py-2">
          <button className="top-0 relative left-5">
            <BiArrowBack size={20} />
          </button>
            <h1 className="text-2xl text-center">Booking Details</h1>
          <div></div>
        </div>
      
      </div>
    </div>

    </>
  );
}

export default BookingDetail;
