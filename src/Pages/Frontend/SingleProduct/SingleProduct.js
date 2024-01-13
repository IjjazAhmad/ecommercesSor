import React, { useState } from 'react'
import SingleTopBar from '../../../Components/SingleTopBar'
import logo from '../../../Assets/images/Product/headphone.png'
import logo2 from '../../../Assets/images/Product/headphone2.png'
import logo3 from '../../../Assets/images/Product/headphone3.png'
import ProCard from '../../../Components/ProCard'

export default function SingleProduct() {
  const [Path, SetPath] = useState(logo)
  const [amount, setAmount] = useState(1)


  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1)
  }
  const setIncrease = () => {
    setAmount(amount + 1)
  }
  return (
    <>
      <SingleTopBar title="Play Game" />
      <div className="container">
        <div className="flex flex-wrap my-10">
          <div className="product-img p-2">
            <img src={Path} className="border rounded-3xl w-[400px] h-[400px] sm:w-[400px] md:w-[400px] lg:w-[600px]" />
            <div className="flex my-3">
              <div className='border p-2 rounded-3xl mx-auto'>
                <img src={logo2} className="w-32 sm:w-48 md:w-60" onClick={() => SetPath(logo2)} />
              </div>
              <div className='border p-2 rounded-3xl mx-auto'>
                <img src={logo3} className="w-32 sm:w-48 md:w-60" onClick={() => SetPath(logo3)} />
              </div>

            </div>
          </div>
          <div className="product-content px-5 py-7">
            <p className='mb-5 text-4xl text-primary font-semibold'>Play game</p>
            <p className='text-2xl mb-3 text-primary font-semibold'>$12.44</p>
            <div className="flex flex-wrap">
              <div className="icon">
                <i class="fa-regular fa-star text-warning text-xl mx-1"></i>
                <i class="fa-regular fa-star text-warning text-xl mx-1"></i>
                <i class="fa-regular fa-star text-warning text-xl mx-1"></i>
                <i class="fa-regular fa-star text-warning text-xl mx-1"></i>
                <i class="fa-regular fa-star text-warning text-xl mx-1"></i>
              </div>
              <p className='ms-2 mb-5'>No Reviews</p>
            </div>
            <p className='mb-3 font-semibold'>Availability: <span className="text-[#30BD57] font-light">In stock</span></p>
            <p className='mb-5 text-lg'>Hurry up! only 34 product left in stock!</p>
            <hr />
            <div className="flex flex-wrap items-center mt-5">
              <p className='font-semibold'>Size:</p>
              <div className="flex ms-3">
                <button className="outline-none py-2 px-3 bg-gray-200 m-3">38</button>
                <button className="outline-none py-2 px-3 bg-gray-200 m-3">42</button>
                <button className="outline-none py-2 px-3 bg-gray-200 m-3">30</button>
                <button className="outline-none py-2 px-3 bg-gray-200 m-3">45</button>
              </div>
            </div>
            <div className="flex items-center mt-5">
              <p className='font-semibold'>Quantity:</p>
              <div className="flex ms-3">
                <button className="outline-none py-2 px-3 border-gray-950 border bg-gray-200" onClick={setDecrease}>-</button>
                <button className="outline-none py-2 px-7 border-gray-950 border bg-gray-200">{amount}</button>
                <button className="outline-none py-2 px-3 border-gray-950 border bg-gray-200" onClick={setIncrease}>+</button>
              </div>
            </div>
            <div className="flex flex-wrap items-center my-5">
              <button className="py-4 px-12 bg-warning mx-3 mb-3 rounded-full text-white text-center">Add To Cart</button>
              <button className="py-4 px-12 bg-warning mx-3 mb-3 rounded-full text-white text-center">Buy It Now</button>
              <button className="py-2 px-[15px] bg-gray-200 mb-3 rounded-full text-center">
                <i class="fa-regular fa-heart"></i>
              </button>
            </div>
            <hr />
            <p className='font-semibold mt-4'>SKU: <span className='font-light ms-2'>01133-9-9</span></p>
            <p className='font-semibold mt-4'>Category: <span className='font-light ms-2'>20% off, 49% off Alex remote</span></p>
          </div>
        </div>
        <div className="flex flex-wrap item-center justify-center my-10">
          <button className="border-2 py-3 px-6 text-primary rounded-2xl me-4">Description</button>
          <button className="py-3 px-6 text-white bg-primary rounded-2xl">Reviews</button>
        </div>
        <div className="card">
          <div className="border-2 border-gray-300 rounded-xl p-3 px-5 flex flex-wrap items-center">
            <div className="content-1">
              <h3 className='text-2xl font-semibold text-primary'>Customer reviews</h3>
              <p className='text-l my-5'>No reviews yet</p>
              <button className="py-3 px-6 text-white bg-primary underline">Write A Review</button>

            </div>
          </div>
        </div>
        <h1 className="text-primary text-3xl font-semibold mb-5 mt-10">Related Product</h1>
        <div className="flex my-10 flex-wrap">
          <div className='mb-3 mx-auto'>
            <ProCard />
          </div>
          <div className='mb-3 mx-auto'>
            <ProCard />
          </div>
          <div className='mb-3 mx-auto'>
            <ProCard />
          </div>
          <div className='mb-3 mx-auto'>
            <ProCard />
          </div>
        </div>
      </div>
    </>
  )
}
