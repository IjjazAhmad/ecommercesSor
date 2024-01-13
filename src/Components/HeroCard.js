import React from 'react';
import logo from "../Assets/images/Product/headphone.png";

export default function HeroCard() {
  return (
    <>
      <div className="card">
        <div className="border-2 border-gray-300 rounded-3xl p-3 px-5 relative cardmain flex items-center">
          <div className="image">
            <img src={logo} alt="Product" />
          </div>
          <div className="content-1">
            <h3 className='mb-3 text-xl font-semibold text-primary'>Play Game</h3>
            <p className='text-l font-semibold text-primary'>(6 items)</p>
            
          </div>
        </div>
      </div>
    </>
  );
}
