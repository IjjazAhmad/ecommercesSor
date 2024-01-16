import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ Name, img, Price, id }) {
  
  return (
    <>
      <div className="card">
        <div className="border-2 border-gray-300 rounded-3xl p-3 px-5 min-w-[100%]  sm:min-w-[280px]  md:min-w-[300px] lg:min-w-[330px] relative cardmain sm:mx-2">
          <div className="image">
            <span className='overlay-bg absolute right-4 top-4 lg:right-7 lg:top-5 p-2 text-center text-white w-8 h-8 flex items-center rounded-full'>
              <i className="fa-regular fa-heart text-sm me-8"></i>
            </span>
            <img src={img} alt="Product" className='h-[200px] w-[200px] mx-auto' />
          </div>
          <div className="content">
            <h3 className='mb-3 text-xl font-semibold text-primary'>{Name}...</h3>
            <p className='text-l font-semibold text-primary'>${Price}</p>
            <div className="star-icon flex mt-2">
              <i className="fa-solid fa-star text-gray-300"></i>
              <i className="fa-solid fa-star text-gray-300 ms-1"></i>
              <i className="fa-solid fa-star text-gray-300 ms-1"></i>
              <i className="fa-solid fa-star text-gray-300 ms-1"></i>
              <i className="fa-solid fa-star text-gray-300 ms-1"></i>
            </div>
          </div>
          <div className="overlay text-white">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 overlay-bg p-2 rounded-2xl">
                <div className="flex justify-between items-center text-center">
                  <p className='font-medium ms-1 md:ms-2 text-center'>Add To Cart</p>
                  <div className="bg-warning p-2 py-1 text-center ms-3 md:ms-7 rounded-full">
                    <i className="fa-solid fa-cart-shopping"></i>
                  </div>
                </div>
              </div>
              <Link to={`/singleproduct/${id}`} className="overlay-bg flex items-center justify-center text-xl p-2 text-center rounded-2xl">
                <i className="fa-solid fa-eye"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
