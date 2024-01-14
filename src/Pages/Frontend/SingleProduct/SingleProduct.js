import React, { useState } from 'react'
import SingleTopBar from '../../../Components/SingleTopBar'
import logo2 from '../../../Assets/images/Product/headphone1.png'
import logo3 from '../../../Assets/images/Product/headphone2.png'
import ProCard from '../../../Components/ProCard'

export default function SingleProduct() {
  const [Path, SetPath] = useState(logo3)
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
      <div className="container mx-auto p-4 md:p-6 lg:p-8">
        <div className="flex flex-wrap justify-between my-10">
          <div className="product-img p-2 mx-auto w-full md:w-[39%] lg:w-[39%]">
            <img
              src={Path}
              className="border-2 rounded-3xl max-h-[400px] w-full"
              alt="Product"
            />
            <div className="flex my-3 justify-center">
              <div className='border-2 px-4 sm:px-6 md:px-8 rounded-3xl my-2 sm:my-0'>
                <img
                  src={logo2}
                  className="w-[200px] sm:w-[190px] max-h-[250px]"
                  onClick={() => SetPath(logo2)}
                  alt="Logo 2"
                />
              </div>
              <div className='border-2 ms-3 px-4 sm:px-6 md:px-8 rounded-3xl my-2 sm:my-0'>
                <img
                  src={logo3}
                  className="w-[200px] sm:w-[200px] max-h-[250px]"
                  onClick={() => SetPath(logo3)}
                  alt="Logo 3"
                />
              </div>
            </div>
          </div>
          <div className="py-7 mx-auto w-full sm:w-[32%] md:w-[38%] lg:w-[58%]">
            <div>
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
              <p className='mb-3 font-semibold'>Availability: <span className="text-[#30BD57] font-light ms-3">In stock</span></p>
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
                <button className="py-4 px-7 md:px-8 lg:px-12 bg-warning mx-3 mb-3 rounded-full text-white text-center">Add To Cart</button>
                <button className="py-4 px-7 md:px-9 lg:px-12 bg-warning mx-3 mb-3 rounded-full text-white text-center">Buy It Now</button>
                <button className="py-2 px-[15px] bg-gray-200 mb-3 rounded-full text-center">
                  <i class="fa-regular fa-heart"></i>
                </button>
              </div>
              <hr />
              <p className='font-semibold mb-4 mt-6'>SKU: <span className='font-light ms-2'>01133-9-9</span></p>
              <p className='font-semibold my-4'>Category: <span className='font-light ms-2'>20% off, 49% off Alex remote</span></p>
              <div className='font-semibold flex items-center flex-wrap my-4'>
                <p>Share:</p>
                <div>
                  <i class="fa-brands fa-google text-xl mx-3"></i>
                </div>
                <div>
                  <i class="fa-brands fa-square-facebook border-black text-xl mx-3"></i>
                </div>
                <div>
                  <i class="fa-brands fa-whatsapp text-xl mx-3"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ... rest of your code ... */}
        <div className="flex flex-wrap item-center justify-center my-10">
          <button className="border-2 py-3 px-6 text-primary rounded-2xl me-4">Description</button>
          <button className="py-3 px-10 text-white bg-primary rounded-2xl">Reviews</button>
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
