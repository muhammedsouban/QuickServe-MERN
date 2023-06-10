import React from "react";
import Ratings from "../Ratings/Ratings";
const SingleService = () => {

  return (
    <section className="">
      <div className="flex justify-center px-5 pt-24 mx-auto">
        <div className="lg:w-4/5  justify-center items-center flex ">
          <div className="w-2/3  bg-white ">
            <div className="grid lg:grid-cols-2 sm:grid-cols-1">
            <div className="w-full p-4">
              <img alt="ecommerce" className=" h-72 object-cover object-center rounded border border-gray-200" src="http://localhost:8080/public/images/1684583175618-dl.beatsnoop.com-600px-1673411471.jpg" />
            </div>
            <div className=" w-full lg:py-4 mt-6 lg:p-3 lg:mt-0 ">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">Category</h2>
              <h1 className="text-blue-900 text-4xl title-font font-medium mb-1">Tap Repair</h1>
              <p className="leading-relaxed">Single knob/ inlet tap repair (kitchen sink, wash basin, bathroom)</p>
              <div className="flex mb-4 mt-5">
                <span className="flex items-center">
                  <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4.5</span>
                </span>

              </div>
              <div className="flex mt-6 items-center border-gray-200">

                <span className="title-font font-medium text-3xl text-gray-900">158.00</span>
              </div>
              <p className="mb-6">*Extra Charges Applicable for Spare Parts</p>
              <div className="flex ">
                <button className=" text-blue-900 mr-8 border-blue-900 border-2 py-3 px-16 focus:outline-none hover:bg-blue-600 rounded-lg">Book Now</button>
                <button className=" text-white bg-blue-900 border-0 py-3 px-16 focus:outline-none hover:bg-blue-600 rounded-lg">Add to cart</button>
              </div>
            </div>
            </div>
          </div>

        </div>
      </div>
      <Ratings />
    </section>


  );
};

export default SingleService;
