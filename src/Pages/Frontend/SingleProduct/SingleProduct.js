import React, { useState } from 'react'
import SingleTopBar from '../../../Components/SingleTopBar'
import logo from '../../../Assets/images/Product/headphone.png'
import logo2 from '../../../Assets/images/Product/headphone2.png'
import logo3 from '../../../Assets/images/Product/headphone3.png'

export default function SingleProduct() {
  const [Path, SetPath] = useState(logo)
  return (
    <>
      <SingleTopBar title="Play Game" />
      <div className="container mb-5">
        <div className="flex flex-wrap">
          <div className="product-img border p-2">
            <img src={Path} className="border rounded-3xl w-[600px] h-[567px] sm:w-[600px] md:w-[600px] lg:w-[600px]" />
            <div className="flex my-3">
              <div className='border p-2 rounded-3xl mx-auto'>
                <img src={logo2} className="w-32 sm:w-48 md:w-60" onClick={() => SetPath(logo2)} />
              </div>
              <div className='border p-2 rounded-3xl mx-auto'>
                <img src={logo3} className="w-32 sm:w-48 md:w-60" onClick={() => SetPath(logo3)} />
              </div>

            </div>
          </div>
          <div className="product-content border p-2">
            <p>Play game</p>
            <p>$12.44</p>
            <div className="flex flex-wrap">
              <div className="icon">
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
              </div>
              <p>No Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
