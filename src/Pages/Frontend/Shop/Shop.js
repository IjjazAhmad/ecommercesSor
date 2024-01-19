import React, { useEffect, useState } from 'react'
import ProCard from '../../../Components/ProCard/Card'
import AddSection from '../../../Components/AddSection'
import { useDispatch, useSelector } from 'react-redux'
import { FetchProduct, FetchCategories } from '../../Redux/Sclice/ProductSclice'

export default function Shop() {

  const state = useSelector((state) => state.redux)

  const [allproducts, setallproducts] = useState([])
  const [fitlteProducts, SetfitlteProducts] = useState([])
  const dispatch = useDispatch()
  const [categories, SetCategories] = useState([])


  useEffect(() => {
    dispatch(FetchProduct())
    dispatch(FetchCategories())
    setallproducts(state.products)
    SetfitlteProducts(state.products)
    SetCategories(state.categories)

    console.log("🚀 ~ useEffect ~ state.categorie:", state.categorie)
  }, [dispatch])



  const updatefiltervalue = (e) => {
    let value = e.target.value;

    let fitlte_Products = allproducts
    let tempfilterproduct = [...fitlte_Products];

    console.log("🚀 ~ updatefiltervalue ~ action.payload:", value)
    if (value !== "All") {
      tempfilterproduct = tempfilterproduct.filter((curelems) => {
        return curelems.category === value;
      })
    }
    SetfitlteProducts(tempfilterproduct)
    console.log("🚀 ~ updatefiltervalue ~ tempfilterproduct:", tempfilterproduct.length)

  }
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
              {categories.map((category, i) => {
                return (
                  <>
                    <div key={i} className="flex justify-between my-3">
                      <p><input className="form-check-input" type="radio" id="flexRadioDefault1" name="category" value={category} onChange={updatefiltervalue} /><span className='ms-2'>{category}</span></p>
                      <p>{category.length}</p>
                    </div>
                  </>
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
              {fitlteProducts.map((product, i) => {
                let title = product.title.slice(0, 20)
                return (
                  <div key={i} className='mb-3'>
                    <ProCard Name={title} Price={product.price} img={product.image} id={product.id} product={product} />
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
