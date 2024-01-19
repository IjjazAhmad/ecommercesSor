import React from 'react';
import logo from "../Assets/images/Product/headphone.png";

export default function Card() {
  return (
    <>
      <div className="card">
        <div className="border-2 border-gray-300 rounded-3xl  mb-3 relative cardmain flex items-center pe-2 pb-2">
          <div className="image">
            <img src={logo} alt="Product" className="w-64" />
          </div>
          <div className="content-1">
            <h3 className='mb-3 text-xl font-semibold text-primary'>Play Game</h3>
            <p className='text-l font-semibold text-primary'>$11.5</p>
            <div className="star-icon flex mt-2">
              <i className="fa-solid fa-star text-gray-300"></i>
              <i className="fa-solid fa-star text-gray-300 ms-1"></i>
              <i className="fa-solid fa-star text-gray-300 ms-1"></i>
              <i className="fa-solid fa-star text-gray-300 ms-1"></i>
              <i className="fa-solid fa-star text-gray-300 ms-1"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
