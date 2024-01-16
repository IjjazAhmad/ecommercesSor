import React, { useEffect, useState } from 'react'
import SingleTopBar from '../../../Components/SingleTopBar'
import logo2 from '../../../Assets/images/Product/headphone1.png'
import logo3 from '../../../Assets/images/Product/headphone2.png'
import ProCard from '../../../Components/ProCard/Card'
import { useDispatch, useSelector } from 'react-redux'
import { FetchProduct } from '../../Redux/Sclice/ProductSclice'
import { useParams } from 'react-router-dom'

export default function SingleProduct() {

  const [Path, SetPath] = useState('')

  const [amount, setAmount] = useState(1)

  const state = useSelector((state) => state)

  const [Products, SetProduct] = useState([])

  const [SingleProduct, SetSingleProduct] = useState({})

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(FetchProduct());
    SetProduct(state.redux.products)
  }, [])

  useEffect(() => {
    FetchSingleProduct(id)
  }, [id])

  const FetchSingleProduct = async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    SetSingleProduct(data)
  }
  console.log("🚀getSingleProduct", SingleProduct)

  const RelatedProduct = Products.slice(2, 6);


  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1)
  }
  const setIncrease = () => {
    amount < SingleProduct.rating.count ? setAmount(amount + 1) : setAmount(SingleProduct.rating.count)
  }
  // SetPath(SingleProduct.image/)
  return (
    <>
      <SingleTopBar title={SingleProduct.category} />
      <div className="container mx-auto p-4 md:p-6 lg:p-8">
        <div className="flex flex-wrap justify-between my-10">
          <div className="product-img p-2 mx-auto min-w-full md:w-[50%] lg:min-w-[50%]">
            <img
              src={Path}
              className="border-2 p-3 rounded-3xl h-[300px] sm:h-[450px] w-[670px]"
              alt="Product"
            />
            <div className="flex md:gap-3 my-3 min-w-full md:min-w-[50%] lg:min-w-[50%]">
              
                <img
                  src={SingleProduct.image}
                  className="h-[100px] w-[150px] md:h-[200px] md:w-[325px] border-2 rounded-3xl"
                  onClick={() => SetPath(SingleProduct.image)}
                  alt="Logo 2"
                />
              
              
                <img
                  src={Products[19].image}
                  className=" h-[100px] w-[150px] md:h-[200px] md:w-[325px] border-2 rounded-3xl"
                  onClick={() => SetPath(Products[13].image)}
                  alt="Logo 3"
                />
              
            </div>
          </div>
          <div className="py-7 mx-auto w-full md:w-[50%] lg:w-[50%]">
            <div>
              <p className='mb-5 text-4xl text-primary font-semibold'>{SingleProduct.title}</p>
              <p className='text-2xl mb-3 text-primary font-semibold'>${SingleProduct.price}</p>
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
              <p className='mb-3 font-semibold'>Availability:<span className="text-[#30BD57] font-light"><i class="fa-solid fa-check mx-3"></i> In stock</span></p>
              <p className='mb-5 text-lg'>Hurry up! only 20 product left in stock!</p>
              <hr />
              <p className='lg:w-[565px] md:w-[300px] sm:w-[200px] py-5'>{SingleProduct.description}</p>
              <hr />
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
              <p className='font-semibold my-4'>Category: <span className='font-light ms-2'>{SingleProduct.category}</span></p>
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
        <div className="flex flex-wrap item-center gap-2 justify-center my-10">
          <button className="border-2 py-3 px-6 text-primary rounded-2xl">Description</button>
          <button className="py-3 px-10 text-white bg-primary my-3 md:my-0 rounded-2xl">Reviews</button>
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
        <div className="flex flex-wrap mb-6 justify-center">
          {RelatedProduct.map((product, i) => {
            let title = product.title.slice(0, 15)
            return (
              <div key={i} className='mb-3'>
                <ProCard Name={title} Price={product.price} img={product.image} id={product.id} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
