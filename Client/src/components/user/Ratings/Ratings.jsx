import React from 'react'
import { StarIcon } from '@heroicons/react/solid';


function Ratings() {
  return (
    <>
      <section className="">
        <div className="lg:w-4/5 flex justify-center px-4 mx-auto">
          <div className="w-2/3 bg-white">
            <div className='h-full'>
              <h1 className='mt-5 ml-5 text-2xl font-semibold'>Customer Reviews</h1>
              <div className='review-cards pl-10 pt-10'>
                <div className='flex items-center '>
                  <div className='h-14 w-14 bg-blue-300 rounded-full'>
                    <img src="" alt="" />
                  </div>
                  <h2 className='ml-2 text-xl font-medium'>UserName</h2>
                </div>
                <div className='flex mt-2'>
                  <StarIcon className="w-5 h-5 text-yellow-400" />
                  <StarIcon className="w-5 h-5 text-yellow-400" />
                  <StarIcon className="w-5 h-5 text-yellow-400" />
                  <StarIcon className="w-5 h-5 text-yellow-400" />
                  <p className='font-semibold ml-2'>Good Service</p>
                </div>
                <p className='text-xs text-gray-500'>Reviewed on 01 May 2023</p>
                <p className='lg:w-80 mt-2'>Excellent work done with proper fitting and no unnecessary expense</p>
              </div>

              <div className='review-cards pl-10 pt-10'>
                <div className='flex items-center '>
                  <div className='h-14 w-14 bg-blue-300 rounded-full'>
                    <img src="" alt="" />
                  </div>
                  <h2 className='ml-2 text-xl font-medium'>UserName</h2>
                </div>
                <div className='flex mt-2'>
                  <StarIcon className="w-5 h-5 text-yellow-400" />
                  <StarIcon className="w-5 h-5 text-yellow-400" />
                  <StarIcon className="w-5 h-5 text-yellow-400" />
                  <StarIcon className="w-5 h-5 text-yellow-400" />
                  <p className='font-semibold ml-2'>Good Service</p>
                </div>
                <p className='text-xs text-gray-500'>Reviewed on 01 May 2023</p>
                <p className='lg:w-80 mt-2'>Excellent work done with proper fitting and no unnecessary expense</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Ratings