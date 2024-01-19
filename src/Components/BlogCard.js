import React from 'react'
import logo from "../Assets/images/Product/headphone.png";

export default function BlogCard() {
  return (
    <>
      <div className="card mb-16">
        <div className="border-2  border-gray-300 rounded-3xl flex flex-wrap items-center">
          <div className="image">
            <img src={logo} alt="Product" />
          </div>
          <div className="text-primary ps-5 py-5">
            <div>
              <button className='font-semibold border-2 py-2 px-4 rounded-full'>22,oct,2021</button>
            </div>
            <h3 className='text-xl font-semibold'>Who avoids a<br />
              pain that produces?</h3>
            <p>Lorem ipsum dolor sit amet <br /> consectetur. Nec sit enim tellus faucibus <br /> bibendum ullamcorper. Phasellus <br /> tristique aenean at lorem sed scelerisque.</p>
            <p className='mt-4'>By spacing tech</p>
          </div>
        </div>
      </div>
    </>
  )
}
