import React, { useEffect, useState } from 'react'
import ProCard from '../../../Components/ProCard/Card'
import AddSection from '../../../Components/AddSection'
import { useDispatch, useSelector } from 'react-redux'
import { FetchProduct, selectedCategory } from '../../Redux/Sclice/ProductSclice'

export default function Shop() {

  const state = useSelector((state) => state)

  const [Products, SetProduct] = useState([])

  const selectedCategory = useSelector((state) => state.products.selectedCategory);

  const [categories, Setcategories] = useState([])

  const dispatch = useDispatch();



  useEffect(() => {

    dispatch(FetchProduct());

    SetProduct(state.redux.products)

    Setcategories(state.redux.categories)

  }, [])

  const handleCategoryChange = (category) => {

    if (category) {
      return Products.filter((product) => product.category === category);
    }
    dispatch(selectCategory(category));

  };

  const ShopProducts = Products.slice(0, 12);


  return (
    <>
      <div className="container">
        <div className="flex my-10 flex-wrap justify-between">
          <div className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[20%] py-7">
            <div className="flex justify-between">
              <p className='font-semibold text-overlay'>Categories</p>
              <p>Reset</p>
            </div>
            <div className="my-3">
              {categories.map((category) => (
                <div key={category}>
                  <input
                    type="radio"
                    id={category}
                    value={category}

                  />
                  <label htmlFor={category}>{category}</label>
                </div>
              ))}
              {categories.map((category, i) => {
                return (
                  <div key={i} className="flex justify-between my-3">
                    <p>
                      <input
                        type="radio"
                        id={category}
                        value={category}
                        checked={selectedCategory === category}
                        onChange={() => handleCategoryChange(category)}
                      />
                      <span className='ms-2'>{category}</span>
                    </p>
                    <p>10</p>
                  </div>
                )
              })}

            </div>
            <hr />
            <div className="my-3">
              <p className='font-semibold text-overlay'>Avaliability</p>
              <div className="flex justify-between my-3">
                <p>0 selected</p>
                <p>Reset</p>
              </div>
              <div className="flex justify-between my-3">
                <p><input type="checkbox" /><span className='ms-2'>In Stock</span></p>
                <p>5</p>
              </div>
              <div className="flex justify-between my-3" disabled>
                <p><input type="checkbox" /><span className='ms-2'>Out Of Stock</span></p>
                <p>0</p>
              </div>
            </div>
            <hr />
            <div className="my-3">
              <p className='font-semibold text-overlay'>Product type</p>
              <div className="flex justify-between my-3">
                <p>0 selected</p>
                <p>Reset</p>
              </div>
              <div className="flex justify-between my-3">
                <p><input type="checkbox" /><span className='ms-2'>Smart-Watch</span></p>
                <p>5</p>
              </div>
            </div>
            <hr />
            <div className="my-3">
              <p className='font-semibold text-overlay'>Brand</p>
              <div className="flex justify-between my-3">
                <p>0 selected</p>
                <p>Reset</p>
              </div>
              <div className="flex justify-between my-3">
                <p><input type="checkbox" /><span className='ms-2'>Smart-Watch</span></p>
                <p>5</p>
              </div>
            </div>
            <hr />
            <div className="my-3">
              <p className='font-semibold text-overlay'>Colors</p>
              <div className="flex justify-between my-3">
                <p>0 selected</p>
                <p>Reset</p>
              </div>
              <div className="flex justify-between my-3">
                <p>5</p>
              </div>
            </div>
            <hr />
            <div className="my-3">
              <p className='font-semibold text-overlay'>Size</p>
              <div className="flex justify-between my-3">
                <p>0 selected</p>
                <p>Reset</p>
              </div>
              <div className="flex justify-between my-3">
                <p><input type="checkbox" /><span className='ms-2'>S</span></p>
                <p>5</p>
              </div>
              <div className="flex justify-between my-3">
                <p><input type="checkbox" /><span className='ms-2'>M</span></p>
                <p>5</p>
              </div>
              <div className="flex justify-between my-3">
                <p><input type="checkbox" /><span className='ms-2'>X</span></p>
                <p>5</p>
              </div>
              <div className="flex justify-between my-3">
                <p><input type="checkbox" /><span className='ms-2'>XX</span></p>
                <p>5</p>
              </div>
              <div className="flex justify-between my-3">
                <p><input type="checkbox" /><span className='ms-2'>XXL</span></p>
                <p>5</p>
              </div>
            </div>
            <hr />
          </div>
          <div className="w-[100%] sm:w-[50%] md:w-[70%] lg:w-[80%] py-7">
            <div className="flex flex-wrap mb-6 justify-center">
              {ShopProducts.map((product, i) => {
                let title = product.title.slice(0, 15)
                return (
                  <div key={i} className='mb-3'>
                    <ProCard Name={title} Price={product.price} img={product.image} id={product.id} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <AddSection />
    </>
  )
}
